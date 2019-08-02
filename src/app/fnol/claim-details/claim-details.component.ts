import { Component, OnInit, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FORMFIELDS } from './form-fields';
import { StorageService } from '../../shared/services/storage.service';
import { DecibelService } from '../../shared/services/decibel.service';

@Component({
  selector: 'app-claim-details',
  templateUrl: './claim-details.component.html',
})
export class ClaimDetailsComponent implements OnInit, AfterViewInit {
  @Output() validClaimDetails = new EventEmitter();

  form: FormGroup;
  formData: any = FORMFIELDS;
  sectionName = 'claimDetailSectionValues';
  showDamagedItems: boolean;
  disableAddItem = !this.showDamagedItems;
  damagedItems: {};
  damagedItemList: {}[] = JSON.parse(localStorage.getItem('damagedItems')) || [];
  fileUploadList: string[] = JSON.parse(localStorage.getItem('fileUploads')) || [];
  progressStep;

  constructor(
    private fb: FormBuilder,
    private storage: StorageService,
    private decibel: DecibelService
  ) { }

  addItem() {
    if (!this.disableAddItem) {
      this.damagedItemList.push(this.damagedItems);
      localStorage.setItem('damagedItems', JSON.stringify(this.damagedItemList));

      this.form.get('itemType').markAsPristine();
      this.form.get('itemMakeModel').markAsPristine();
      this.form.get('itemPrice').markAsPristine();

      this.form.controls.itemType.setValue('');
      this.form.controls.itemMakeModel.setValue('');
      this.form.controls.itemPrice.setValue('');
    }
  }

  removeItem(index, arrayName) {
    if (arrayName === 'damagedItemList') {
      this.damagedItemList.splice(index, 1);
      localStorage.setItem('damagedItems', JSON.stringify(this.damagedItemList));
    } else if (arrayName === 'fileUploadList') {
      this.fileUploadList.splice(index, 1);
      localStorage.setItem('fileUploads', JSON.stringify(this.fileUploadList));
    }
    // Force a form change to re-trigger section validity check
    this.form.controls.itemType.setValue('');
    this.form.get('itemType').markAsPristine();
  }

  onFileUpload(event) {
    const uploadFileName = event.target.files[0].name;

    if (!this.fileUploadList.includes(uploadFileName)) {
      this.fileUploadList.push(uploadFileName);
      localStorage.setItem('fileUploads', JSON.stringify(this.fileUploadList));
    }
  }

  buildForm() {
    this.form = this.fb.group({
      damage: [this.storage.retrieveSectionValue(this.sectionName, 'damage'), this.formData.damage.validation],
      itemType: ['', this.formData.itemType.validation],
      itemMakeModel: ['', this.formData.itemMakeModel.validation],
      itemPrice: ['', this.formData.itemPrice.validation],
      fileUploads: [''],
    });
  }

  isSectionValid() {
    let validDamage = false;
    const damageValue = this.form.get('damage').value;

    if ((damageValue === 'Contents' || damageValue === 'Both') &&
        this.damagedItemList.length > 0) {
      validDamage = true;
    } else if (damageValue === 'Building') {
      validDamage = true;
    }

    const storedValues = JSON.parse(sessionStorage.getItem(this.sectionName));
    if (storedValues) {
      storedValues.sectionValid = damageValue && validDamage;
      sessionStorage.setItem(this.sectionName, JSON.stringify(storedValues));
    }

    return damageValue && validDamage;
  }

  ngAfterViewInit() {
    this.decibel.setTrackingAttributes(this.formData);
  }

  ngOnInit() {
    this.buildForm();
    this.progressStep = document.querySelector('.progress__step3');
    this.showDamagedItems = (
      this.storage.retrieveSectionValue(this.sectionName, 'damage') !== 'Building' &&
      this.storage.retrieveSectionValue(this.sectionName, 'damage')) ? true : false;

    this.form.valueChanges.subscribe(values => {
      values.sectionValid = this.isSectionValid();
      values.items = this.damagedItemList;
      values.uploads = this.fileUploadList;
      this.validClaimDetails.emit(values);

      this.showDamagedItems = (values.damage !== 'Building') ? true : false;
      this.disableAddItem = (values.itemType      === '' ||
                             values.itemMakeModel === '' ||
                             values.itemPrice     === '' ||
                             !this.form.get('itemPrice').valid) ? true : false;

      if (!this.disableAddItem) {
        this.damagedItems = {type: values.itemType,
                             make: values.itemMakeModel,
                             price: values.itemPrice};
      }

      this.storage.saveSectionValues(this.sectionName, this.form.value);
      if (values.sectionValid) {
        this.progressStep.classList.add('progress__valid-step');
      } else {
        this.progressStep.classList.remove('progress__valid-step');
      }
    });
  }
}
