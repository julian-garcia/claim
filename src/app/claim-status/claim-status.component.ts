import { Component, OnInit, OnDestroy } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { FieldConfig, Hint, ModalService } from 'dlg-angular-components';
import { CLAIMSTATUSES } from '../shared/data/claim-statuses';
import { PersonalDetailsValidator } from '../shared/validators/personal-details.validator';
import { StaticDataService } from '../shared/services/static-data.service';
import { StorageService } from '../shared/services/storage.service';
import { SubmitModalComponent } from '../fnol/submit-modal.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-claim-status',
  templateUrl: './claim-status.component.html',
  styleUrls: ['./claim-status.component.scss']
})
export class ClaimStatusComponent implements OnInit, OnDestroy {
  claimStatuses = CLAIMSTATUSES;
  claims;
  claimsCounts = {};
  claimsExist = true;
  form: FormGroup;
  formData: any = {
    emailAddress: {
      name: 'emailAddress',
      label: 'Email address',
      placeholder: 'example@abc.com',
      hint: {text: 'Please enter your email address so we can retrieve your claims'} as Hint,
      validation: [
        Validators.required,
        PersonalDetailsValidator.ValidEmail
      ],
      validationMessages: {
        required: 'Please enter your email address',
        invalidEmail: 'Please enter a valid email address'
      }
    } as FieldConfig
  };
  formSubscription: Subscription;

  findClaims() {
    this.initialiseClaimsCounts();
    this.dataService.getClaims(this.form.get('emailAddress').value).subscribe(claims => {
      this.claims = claims;
      this.claimsExist = (this.claims && this.claims.length > 0) ? true : false;
      for (const claim of claims) {
        const status = (claim.status) ? claim.status : 'Logged';
        this.claimsCounts[status]++;
      }
    },
    error => {
      const confirmationTitle = 'Unable to find your claim.';
      const confirmationMessage1 = `
          Sorry, we could not find your claim. Please try again later.`;
      const confirmationMessage2 = `
          Please contact us if you continue to experience issues.`;

      const modal = this.modal.open(
                      SubmitModalComponent,
                      { title: confirmationTitle,
                        message1: confirmationMessage1,
                        message2: confirmationMessage2,
                        button: 'Try again' });
    });
  }

  claimsFound() {
    return (this.claims && this.claims.length > 0) ? true : false;
  }

  validEmail() {
    return this.form.get('emailAddress').valid;
  }

  initialiseClaimsCounts() {
    for (status of this.claimStatuses) {
      this.claimsCounts[status] = 0;
    }
  }

  constructor(
    private fb: FormBuilder,
    private dataService: StaticDataService,
    private storage: StorageService,
    public modal: ModalService,
  ) { }

  ngOnInit() {
    const emailAddress =
      this.storage.retrieveSectionValues('personalSectionValues').emailAddress ||
      this.dataService.claimEmail;

    this.form = this.fb.group({
      emailAddress: [emailAddress, this.formData.emailAddress.validation],
    });
    if (emailAddress) { this.findClaims(); }

    this.initialiseClaimsCounts();

    this.formSubscription = this.form.valueChanges.subscribe(emailChange => {
      this.claimsExist = true;
      this.claims = [];
      this.claimsCounts = {};
      this.dataService.claimEmail = emailChange.emailAddress;
    });
  }

  ngOnDestroy() {
    this.formSubscription.unsubscribe();
  }
}
