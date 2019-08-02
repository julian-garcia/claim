import { Component, OnInit, EventEmitter, Output, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FORMFIELDS } from './form-fields';
import { StorageService } from '../../shared/services/storage.service';
import { DecibelService } from '../../shared/services/decibel.service';

@Component({
  selector: 'app-claim-overview',
  templateUrl: './claim-overview.component.html',
})
export class ClaimOverviewComponent implements OnInit, AfterViewInit {
  @Output() validClaimOverview = new EventEmitter();

  form: FormGroup;
  formData: any = FORMFIELDS;
  progressStep;
  sectionName = 'claimSectionValues';
  showOccupied: boolean = (this.storage.retrieveSectionValue(this.sectionName, 'claimLocation') === 'At home') ? true : false;

  constructor(
    private fb: FormBuilder,
    private storage: StorageService,
    private decibel: DecibelService
  ) { }

  buildForm() {
    const incDate = this.storage.retrieveSectionValue(this.sectionName, 'incidentDate');

    this.form = this.fb.group({
      whatHappened: [this.storage.retrieveSectionValue(this.sectionName, 'whatHappened'), this.formData.whatHappened.validation],
      claimLocation: [this.storage.retrieveSectionValue(this.sectionName, 'claimLocation'), this.formData.claimLocation.validation],
      occupied: [this.storage.retrieveSectionValue(this.sectionName, 'occupied'), this.formData.occupied.validation],
      incidentDate: this.fb.array(
        (incDate === '' ? [] : incDate),
        Validators.compose(this.formData.incidentDate.validation)
      )
    });
  }

  isSectionValid() {
    let validLocation = false;

    if (this.form.get('claimLocation').value === 'At home' &&
        (this.form.get('occupied').value === 'Yes' ||
         this.form.get('occupied').value === 'No')) {
      validLocation = true;
    } else if (this.form.get('claimLocation').value !== 'At home') {
      validLocation = true;
    }

    return this.form.get('whatHappened').valid &&
           this.form.get('claimLocation').valid &&
           this.form.get('incidentDate').valid &&
           validLocation;
  }

  ngAfterViewInit() {
    this.decibel.setTrackingAttributes(this.formData);
  }

  ngOnInit() {
    this.buildForm();

    if (this.form.controls.incidentDate.value.length > 0 &&
        this.form.controls.incidentDate.value.join('') !== '') {
      this.form.controls.incidentDate.markAsDirty();
    }
    if (this.form.controls.whatHappened.value !== '') {
      this.form.controls.whatHappened.markAsDirty();
    }
    if (this.form.controls.claimLocation.value !== '') {
      this.form.controls.claimLocation.markAsDirty();
    }

    this.progressStep = document.querySelector('.progress__step2');

    this.form.valueChanges.subscribe(values => {
      values.sectionValid = this.isSectionValid();
      this.validClaimOverview.emit(values);
      this.showOccupied = (values.claimLocation === 'At home') ? true : false;
      this.storage.setSectionValue(this.sectionName, 'sectionValid', values.sectionValid);
      this.storage.saveSectionValues(this.sectionName, this.form.value);

      if (values.sectionValid) {
        this.progressStep.classList.add('progress__valid-step');
      } else {
        this.progressStep.classList.remove('progress__valid-step');
      }
    });
  }
}
