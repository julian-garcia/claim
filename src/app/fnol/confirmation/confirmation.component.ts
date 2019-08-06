import { Component, OnInit, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FORMFIELDS } from './form-fields';
import { StorageService } from '../../shared/services/storage.service';
import { DecibelService } from '../../shared/services/decibel.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
})
export class ConfirmationComponent implements OnInit, AfterViewInit {
  @Output() validConfirmation = new EventEmitter();

  form: FormGroup;
  formData: any = FORMFIELDS;
  progressStep;
  sectionName = 'confirmationSectionValues';

  constructor(
    private fb: FormBuilder,
    private storage: StorageService,
    private decibel: DecibelService
  ) { }

  buildForm() {
    this.form = this.fb.group({
      callbackSlot: [this.storage.retrieveSectionValue(this.sectionName, 'callbackSlot'), this.formData.callbackSlot.validation],
      awareExcess: [this.storage.retrieveSectionValue(this.sectionName, 'awareExcess'), this.formData.awareExcess.validation],
      termsConditions: [this.storage.retrieveSectionValue(this.sectionName, 'termsConditions'), this.formData.termsConditions.validation],
      convictions: [this.storage.retrieveSectionValue(this.sectionName, 'convictions'), this.formData.convictions.validation],
    });
  }

  isSectionValid() {
    return this.form.get('callbackSlot').valid &&
           this.form.get('termsConditions').value &&
           this.form.get('awareExcess').value &&
           this.form.get('convictions').valid;
  }

  ngAfterViewInit() {
    this.progressStep = document.querySelector('.progress__step4');
    this.decibel.setTrackingAttributes(this.formData);
  }

  ngOnInit() {
    this.buildForm();

    this.form.valueChanges.subscribe(values => {
      values.sectionValid = this.isSectionValid();
      this.storage.setSectionValue(this.sectionName, 'sectionValid', values.sectionValid);
      this.storage.saveSectionValues(this.sectionName, this.form.value);
      this.validConfirmation.emit(values);

      if (values.sectionValid) {
        this.progressStep.classList.add('progress__valid-step');
      } else {
        this.progressStep.classList.remove('progress__valid-step');
      }
    });
  }

}
