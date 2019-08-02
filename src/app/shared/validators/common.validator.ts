import { FormControl } from '@angular/forms';

export class CommonValidator {

  static ValidDate(control: FormControl) {
    let invalidDay = false;
    let invalidMonth = false;
    let invalidYear = false;
    let inDate;

    const yearRegEx = /^\d{4}$/;
    const dayMonthRegEx = /^\d{1,2}$/;
    const dayField = control.value[0];
    const monthField = control.value[1];
    const yearField = control.value[2];
    const dateNow = new Date();
    const minDate = new Date().setMonth(dateNow.getMonth() - 12);

    if (!(dayMonthRegEx.test(dayField) &&
          dayField >= 1 &&
          dayField <= 31)) { invalidDay = true; }

    if (!(dayMonthRegEx.test(monthField) &&
          monthField >= 1 &&
          monthField <= 12)) { invalidMonth = true; }

    if (!yearRegEx.test(yearField)) { invalidYear = true; }

    if (invalidDay || invalidMonth || invalidYear) {
      return { invalidDate: true };
    } else {
      inDate = new Date(parseInt(yearField),
                        parseInt(monthField) - 1,
                        parseInt(dayField));
      if (inDate > dateNow || inDate < minDate) {
        return { invalidDateRange: true };
      }
    }
  }

  static ValidNumber(control: FormControl) {
    const numberEx = /^\d{1,}$/g;
    if (!numberEx.test(control.value)) {
      return { invalidNumber: true };
    }
  }
}
