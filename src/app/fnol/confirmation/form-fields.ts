import { Validators } from '@angular/forms';
import { FieldOptionsConfig, Hint } from 'dlg-angular-components';

export const FORMFIELDS = {
  callbackSlot: {
    name: 'callbackSlot',
    label: 'Callback slot',
    hint: {text: 'When should we call you back to confirm and submit your claim details'} as Hint,
    options: ['Morning (8am-12pm)', 'Afternoon (12pm-4pm)', 'Evening (4pm-8pm)'],
    validation: [Validators.required],
    validationMessages: {
      required: 'Please choose a callback slot'
    }
  } as FieldOptionsConfig,
  termsConditions: {
    name: 'termsConditions',
    label: 'Terms & conditions',
    hint: {text: 'Please confirm all details above are correct. Incorrect or incomplete information could affect your claim.'} as Hint,
    options: ['I confirm that the above statements are true'],
    validation: [Validators.required],
    validationMessages: {
      required: 'Please accept our terms and conditions'
    }
  } as FieldOptionsConfig,
  awareExcess: {
    name: 'awareExcess',
    label: 'Aware of excess',
    hint: {text: 'You may have to pay an excess on this claim. Details can be found in your policy summary.'} as Hint,
    options: ['I am aware of the excess amount I will have to pay.'],
    validation: [Validators.required],
    validationMessages: {
      required: 'Please confirm excess awareness'
    }
  } as FieldOptionsConfig,
  convictions: {
    name: 'convictions',
    label: 'Criminal convictions',
    hint: {text: 'Has anyone at the address been convicted of criminal offences or have prosecutions pending (except motoring)'} as Hint,
    options: ['Yes', 'No'],
    validation: [Validators.required],
    validationMessages: {
      required: 'Please answer yes/no to criminal convictions'
    }
  } as FieldOptionsConfig,
};
