import { Validators } from '@angular/forms';
import { FieldConfig, Hint } from 'dlg-angular-components';
import { PersonalDetailsValidator } from '../../shared/validators/personal-details.validator';

export const FORMFIELDS = {
  fullName: {
    name: 'fullName',
    label: 'Your name',
    placeholder: 'First and last name',
    validation: [Validators.required],
    validationMessages: {
      required: 'Please enter your name'
    }
  } as FieldConfig,
  phoneNumber: {
    name: 'phoneNumber',
    label: 'Phone number',
    placeholder: '020 1122 3344 / 07123 456 789',
    hint: {text: 'Should be at least 11 digits'} as Hint,
    validation: [
      Validators.required,
      PersonalDetailsValidator.ValidPhone
    ],
    validationMessages: {
      required: 'Please enter your phone number',
      invalidPhone: 'Please enter a valid phone number'
    }
  } as FieldConfig,
  emailAddress: {
    name: 'emailAddress',
    label: 'Email address',
    placeholder: 'example@abc.com',
    validation: [
      Validators.required,
      PersonalDetailsValidator.ValidEmail
    ],
    validationMessages: {
      required: 'Please enter your email address',
      invalidEmail: 'Please enter a valid email address'
    }
  } as FieldConfig,
  addressLine: {
    name: 'addressLine',
    label: 'Address',
    placeholder: '123 Road Name / Flat 2, Road Name',
    hint: {text: 'First line of your address'} as Hint,
    validation: [Validators.required],
    validationMessages: {
      required: 'Please enter your address'
    }
  } as FieldConfig,
  postCode: {
    name: 'postCode',
    label: 'Post code',
    placeholder: 'ZZ1 1ZZ',
    validation: [
      Validators.required,
      PersonalDetailsValidator.ValidPostcode
    ],
    validationMessages: {
      required: 'Please enter your post code',
      invalidPostcode: 'Please enter a valid UK post code'
    }
  } as FieldConfig,
};
