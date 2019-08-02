import { FormControl } from '@angular/forms';

export class PersonalDetailsValidator {

  static ValidPostcode(control: FormControl) {
    const postcodeRegEx = /[A-Z]{1,2}[0-9]{1,2}?[0-9][A-Z]{2}/i;
    if (!postcodeRegEx.test(control.value.replace(' ', ''))) {
      return { invalidPostcode: true };
    }
  }

  static ValidPhone(control: FormControl) {
    const phoneRegEx = /^\d{10,}$|^[+]\d{10,}$/;
    if (!phoneRegEx.test(control.value.replace(/\s|[-]|[(]|[)]/g, ''))) {
      return { invalidPhone: true };
    }
  }

  static ValidEmail(control: FormControl) {
    const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegEx.test(control.value)) {
      return { invalidEmail: true };
    }
  }
}
