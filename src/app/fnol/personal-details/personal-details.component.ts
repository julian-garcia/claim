import { Component, OnInit, Output, EventEmitter, OnDestroy, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FORMFIELDS } from './form-fields';
import { ModalService } from 'dlg-angular-components';
import { SubmitModalComponent } from '../submit-modal.component';
import { StaticDataService } from '../../shared/services/static-data.service';
import { StorageService } from '../../shared/services/storage.service';
import { DecibelService } from '../../shared/services/decibel.service';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
})
export class PersonalDetailsComponent implements OnInit, OnDestroy, AfterViewInit {
  @Output() validPersonalDetails = new EventEmitter();

  form: FormGroup;
  formData: any = FORMFIELDS;
  formSubscription: Subscription;
  formNameSubscription: Subscription;
  formPostcodeSubscription: Subscription;
  progressStep;
  policyNumber;
  excess;
  formValues;
  sectionName = 'personalSectionValues';

  constructor(
    private fb: FormBuilder,
    private dataService: StaticDataService,
    public modal: ModalService,
    private storage: StorageService,
    private decibel: DecibelService
  ) { }

  isSectionValid() {
    return this.form.get('fullName').valid &&
           this.form.get('postCode').valid &&
           this.form.get('addressLine').valid &&
           this.form.get('phoneNumber').valid &&
           this.form.get('emailAddress').valid;
  }

  isAutofillable() {
    return this.form.get('fullName').valid &&
           this.form.get('postCode').valid;
  }

  getPolicyHolder() {
    const name = this.form.get('fullName').value;
    const pcode = this.form.get('postCode').value;

    this.dataService.getPolicyHolderData(name, pcode)
      .subscribe(res => {
        if (res[0] && res[0].name.replace(' ', '').length === name.replace(' ', '').length) {
          this.form.controls.fullName.setValue(res[0].name);
          this.form.controls.postCode.setValue(res[0].postCode);
          this.form.controls.addressLine.setValue(res[0].address);
          this.form.controls.emailAddress.setValue(res[0].emailAddress);
          this.form.controls.phoneNumber.setValue(res[0].phoneNumber);
          this.policyNumber = res[0].policyNumber;
          this.excess = res[0].excess;
          this.formValues.policyNumber = this.policyNumber;
          document.getElementById('incidentDate-day').focus();
          sessionStorage.setItem('policyNumberExcess', JSON.stringify(
            { policyNumber: this.policyNumber, excess: this.excess }));
        } else {
          this.clearAutofillSection();
          const modal = this.modal.open(
            SubmitModalComponent,
            { title: `Sorry - we couldn't find your details`,
              message1: 'Please enter your address, phone number and email address below',
              message2: 'Thank you',
              button: 'Fill in my details'  });

          modal.closed$.subscribe(result => {
            document.getElementById('phoneNumber').focus();
          });
        }
      },
      error => {
        const modal = this.modal.open(
          SubmitModalComponent,
          { title: `Sorry, we were unable to look up your details at this time`,
            message1: 'Please enter your address, phone number and email address below',
            message2: 'Thank you',
            button: 'Fill in my details'  });

        modal.closed$.subscribe(result => {
          document.getElementById('phoneNumber').focus();
        });
      });
  }

  clearAutofillSection() {
    this.form.controls.addressLine.setValue('');
    this.form.controls.addressLine.markAsPristine();
    this.form.controls.addressLine.markAsUntouched();
    this.form.controls.addressLine.updateValueAndValidity();
    this.form.controls.emailAddress.setValue('');
    this.form.controls.emailAddress.markAsPristine();
    this.form.controls.emailAddress.markAsUntouched();
    this.form.controls.emailAddress.updateValueAndValidity();
    this.form.controls.phoneNumber.setValue('');
    this.form.controls.phoneNumber.markAsPristine();
    this.form.controls.phoneNumber.markAsUntouched();
    this.form.controls.phoneNumber.updateValueAndValidity();
    this.policyNumber = '';
  }

  ngAfterViewInit() {
    this.decibel.setTrackingAttributes(this.formData);
    document.getElementById('fullName').focus();
  }

  ngOnInit() {
    this.buildForm();

    if (this.form.controls.fullName.value !== '') {
      this.form.controls.fullName.markAsDirty();
    }
    if (this.form.controls.postCode.value !== '') {
      this.form.controls.postCode.markAsDirty();
    }
    if (this.form.controls.phoneNumber.value !== '') {
      this.form.controls.phoneNumber.markAsDirty();
    }
    if (this.form.controls.emailAddress.value !== '') {
      this.form.controls.emailAddress.markAsDirty();
    }
    if (this.form.controls.addressLine.value !== '') {
      this.form.controls.addressLine.markAsDirty();
    }

    if (this.isSectionValid()) {
      const policyNumberExcess = sessionStorage.getItem('policyNumberExcess');
      if (policyNumberExcess) {
        this.policyNumber = JSON.parse(policyNumberExcess).policyNumber;
        this.excess = JSON.parse(policyNumberExcess).excess;
      }
    }

    this.progressStep = document.querySelector('.progress__step1');

    this.formNameSubscription = this.form.controls.fullName.valueChanges
      .subscribe(value => { this.clearAutofillSection(); });

    this.formPostcodeSubscription = this.form.controls.postCode.valueChanges
      .subscribe(value => { this.clearAutofillSection(); });

    this.formSubscription = this.form.valueChanges.subscribe(values => {
      values.sectionValid = this.isSectionValid();
      this.storage.setSectionValue(this.sectionName, 'sectionValid', values.sectionValid);
      this.storage.saveSectionValues(this.sectionName, this.form.value);

      if (values.sectionValid) {
        values.policyNumber = this.policyNumber;
        this.progressStep.classList.add('progress__valid-step');
      } else {
        this.progressStep.classList.remove('progress__valid-step');
      }
      this.formValues = values;
      this.validPersonalDetails.emit(this.formValues);
    });
  }

  ngOnDestroy() {
    this.formSubscription.unsubscribe();
    this.formNameSubscription.unsubscribe();
    this.formPostcodeSubscription.unsubscribe();
  }

  buildForm() {
    this.form = this.fb.group({
      fullName: [this.storage.retrieveSectionValue(this.sectionName, 'fullName'), this.formData.fullName.validation],
      phoneNumber: [this.storage.retrieveSectionValue(this.sectionName, 'phoneNumber'), this.formData.phoneNumber.validation],
      emailAddress: [this.storage.retrieveSectionValue(this.sectionName, 'emailAddress'), this.formData.emailAddress.validation],
      addressLine: [this.storage.retrieveSectionValue(this.sectionName, 'addressLine'), this.formData.addressLine.validation],
      postCode: [this.storage.retrieveSectionValue(this.sectionName, 'postCode'), this.formData.postCode.validation],
    });
  }
}
