import { Validators } from '@angular/forms';
import { FieldConfig, FieldOptionsConfig, Hint} from 'dlg-angular-components';
import { CommonValidator } from 'src/app/shared/validators/common.validator';

export const FORMFIELDS = {
  damage: {
    name: 'damage',
    label: 'Damage',
    hint: {text: 'Contents are portable items you would take with you if you moved home, including carpets and curtains'} as Hint,
    options: ['Building', 'Contents', 'Both'],
    validation: [Validators.required],
    validationMessages: {
      required: 'Please specify what the damage applies to'
    }
  } as FieldOptionsConfig,
  itemType: {
    name: 'itemType',
    label: 'Damaged item',
    placeholder: 'Cycle',
    hint: {text: 'What is the damaged item? (Cycle, tv, computer)'} as Hint,
    validation: [Validators.required],
    validationMessages: {
      required: 'Please specify the damaged item'
    }
  } as FieldConfig,
  itemMakeModel: {
    name: 'itemMakeModel',
    label: 'Make/Model?',
    placeholder: 'Sony Playstation 4',
    hint: {text: 'For example, Sony Playstation 4'} as Hint,
    validation: [Validators.required],
    validationMessages: {
      required: 'Please detail the make/model of the damaged item'
    }
  } as FieldConfig,
  itemPrice: {
    name: 'itemPrice',
    label: 'Purchase price',
    placeholder: '£30',
    hint: {text: 'Purchase price of the damaged item'} as Hint,
    validation: [
      Validators.required,
      CommonValidator.ValidNumber
    ],
    validationMessages: {
      required: 'Please indicate the price',
      invalidNumber: 'Please enter a number'
    }
  } as FieldConfig,
  fileUploads: {
    name: 'fileUploads',
    label: 'Upload a file',
    hint: {text: 'Images that show the damage, receipts, or other proof of ownership that will help us validate your claim.'} as Hint
  } as FieldConfig
};
