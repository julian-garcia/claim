import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { StaticDataService } from '../shared/services/static-data.service';
import { Claim } from '../shared/data-objects/claim';
import { ModalService } from 'dlg-angular-components';
import { SubmitModalComponent } from './submit-modal.component';
import { StorageService } from '../shared/services/storage.service';

@Component({
  selector: 'app-fnol',
  templateUrl: './fnol.component.html',
  styleUrls: ['./fnol.component.scss'],
})
export class FnolComponent implements OnInit {
  form: FormGroup;
  validForm: boolean;
  validPersonalSection: boolean;
  validConfirmationSection: boolean;
  validClaimOverviewSection: boolean;
  validClaimDetailsSection: boolean;
  formData = {} as any;
  personalData: {};
  claimOverviewData: {};
  claimDetailsData: {};
  confirmationData: {};
  storedPersonalData: {};
  storedclaimOverviewData: {};
  storedclaimDetailsData: {};
  storedconfirmationData: {};

  constructor(
    private dataService: StaticDataService,
    private router: Router,
    public modal: ModalService,
    private storage: StorageService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.fb.group({});
  }

  retrievePersonalDetails(formValues) {
    this.validPersonalSection = formValues.sectionValid;
    this.personalData = formValues;
  }

  retrieveConfirmation(formValues) {
    this.validConfirmationSection = formValues.sectionValid;
    this.confirmationData = formValues;
  }

  retrieveClaimOverview(formValues) {
    this.validClaimOverviewSection = formValues.sectionValid;
    this.claimOverviewData = formValues;
  }

  retrieveClaimDetails(formValues) {
    this.validClaimDetailsSection = formValues.sectionValid;
    this.claimDetailsData = formValues;
  }

  isFormValid() {
    this.storedPersonalData = this.storage.retrieveSectionValues('personalSectionValues');
    this.storedPersonalData['policyNumber'] = this.storage.retrieveSectionValue('policyNumberExcess', 'policyNumber');
    this.storedclaimOverviewData = this.storage.retrieveSectionValues('claimSectionValues');
    this.storedclaimDetailsData = this.storage.retrieveSectionValues('claimDetailSectionValues');
    this.storedconfirmationData = this.storage.retrieveSectionValues('confirmationSectionValues');

    return ((this.validPersonalSection &&
             this.validConfirmationSection &&
             this.validClaimOverviewSection &&
             this.validClaimDetailsSection) ||
            (this.storedPersonalData['sectionValid'] &&
             this.storedclaimOverviewData['sectionValid'] &&
             this.storedclaimDetailsData['sectionValid'] &&
             this.storedconfirmationData['sectionValid'])
           );
  }

  submitClaim() {
    if (this.personalData) {
      this.formData.personalDetails = this.personalData;
    } else {
      this.formData.personalDetails = this.storedPersonalData;
    }
    if (this.claimOverviewData) {
      this.formData.claimOverview = this.claimOverviewData;
    } else {
      this.formData.claimOverview = this.storedclaimOverviewData;
    }
    if (this.claimDetailsData) {
      this.formData.claimDetailsData = this.claimDetailsData;
    } else {
      this.formData.claimDetailsData = this.storedclaimDetailsData;
    }
    if (this.confirmationData) {
      this.formData.confirmationData = this.confirmationData;
    } else {
      this.formData.confirmationData = this.storedconfirmationData;
    }

    const postClaim: Claim = {
      policyNumber: this.formData.personalDetails.policyNumber,
      fullName: this.formData.personalDetails.fullName,
      phoneNumber: this.formData.personalDetails.phoneNumber,
      emailAddress: this.formData.personalDetails.emailAddress,
      addressLine: this.formData.personalDetails.addressLine,
      postCode: this.formData.personalDetails.postCode,
      incidentDate: this.formData.claimOverview.incidentDate,
      whatHappened: this.formData.claimOverview.whatHappened,
      claimLocation: this.formData.claimOverview.claimLocation,
      occupied: this.formData.claimOverview.occupied,
      damage: this.formData.claimDetailsData.damage,
      damagedItems: this.formData.claimDetailsData.items,
      fileUploads: this.formData.claimDetailsData.uploads,
      callbackSlot: this.formData.confirmationData.callbackSlot,
      termsConditions: this.formData.confirmationData.termsConditions,
      awareExcess: this.formData.confirmationData.awareExcess,
      convictions: this.formData.confirmationData.convictions
    };
    this.dataService.postClaimData(postClaim)
      .subscribe(post => {
        if (post) {
          this.storage.clearStoredVariables();

          const confirmationTitle = 'Thank You, your claim has been logged.';
          const confirmationMessage1 = `
              For your reference, your claim number is: ${post['id']}.
              A claims handler will assess your claim
              and will call you back to confirm details.`;
          const confirmationMessage2 = `
              We have emailed you details of your claim for future reference. Click below for a more detailed view of next steps.`;

          const modal = this.modal.open(
                          SubmitModalComponent,
                          { title: confirmationTitle,
                            message1: confirmationMessage1,
                            message2: confirmationMessage2,
                            button: 'Next Steps' });

          modal.closed$.subscribe(result => {
            if (result === 'Closing') {
              // window.location.href = 'https://www.directline.com/car-cover/claims';
            } else {
              // window.location.href = 'https://www.directline.com';
            }
          });

          console.log(post);
        }
      },
      error => {
        this.modal.open(
          SubmitModalComponent,
          { title: `Sorry, we were unable to submit your claim`,
            message1: 'Please check your connection and try again',
            message2: 'If you continue to experience issues, call us on 0123456789',
            button: 'Back to my claim' });
      });
  }
}
