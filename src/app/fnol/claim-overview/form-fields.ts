import { Validators } from '@angular/forms';
import { FieldConfig, FieldOptionsConfig, Hint} from 'dlg-angular-components';
import { CommonValidator } from '../../shared/validators/common.validator';

export const FORMFIELDS = {
  incidentDate: {
    name: 'incidentDate',
    label: 'Date of incident',
    hint: {text: 'When this happened or date you became aware of the issue. Must be within the last 12 months'} as Hint,
    validation: [
      Validators.required,
      CommonValidator.ValidDate
    ],
    validationMessages: {
      required: 'Please specify when the incident happened',
      invalidDate: 'Please enter a valid date',
      invalidDateRange: 'The date should be between 12 months ago and today'
    },
    format: {
      years: {
          min: new Date().getFullYear() - 1,
          max: new Date().getFullYear()
      }
    }
  } as FieldConfig,
  whatHappened: {
    name: 'whatHappened',
    label: 'What happened?',
    placeholder: '',
    hint: {text: 'Please provide as much detail as possible about your claim'} as Hint,
    validation: [Validators.required],
    validationMessages: {
      required: 'Please tell us what happened'
    }
  } as FieldConfig,
  claimLocation: {
    name: 'claimLocation',
    label: 'Where did it happen?',
    options: ['At home', 'UK', 'Abroad'],
    hint: {text: 'Was the incident at home/abroad'} as Hint,
    validation: [Validators.required],
    validationMessages: {
      required: 'Please indicate where it happened'
    }
  } as FieldOptionsConfig,
  occupied: {
    name: 'occupied',
    label: 'Home occupied in last 60 days?',
    options: ['Yes', 'No'],
    hint: {text: 'Any occupants living in your home for the last 60 days'} as Hint,
    validation: [Validators.required],
    validationMessages: {
      required: 'Please indicate occupation status'
    }
  } as FieldOptionsConfig,
};
