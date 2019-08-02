import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DecibelService {

  constructor() { }

  setTrackingAttributes(formData) {
    document.querySelectorAll(`.dlg-input input,
                               .dlg-radio input,
                               .dlg-checkbox input,
                               .dlg-datepicker,
                               .dlg-textarea`).forEach(input => {

      const nameAttribute = input.getAttribute('ng-reflect-name');
      const formDataAttribute = formData[nameAttribute];

      if (nameAttribute && formDataAttribute) {
        if (input.classList.contains('dlg-datepicker')) {
          input.querySelectorAll('.dlg-select').forEach(datePart => {
            datePart.setAttribute('data-di-id', '#' + datePart.id);
            datePart.setAttribute('data-di-field-id', datePart.id);
            datePart.setAttribute('data-di-field-error', formDataAttribute.validationMessages.required);
          });
        } else {
          input.setAttribute('data-di-id', '#' + formDataAttribute.name);
          input.setAttribute('data-di-field-id', formDataAttribute.name);
          input.setAttribute('data-di-field-error', formDataAttribute.validationMessages.required);
        }
      }
    });
  }
}
