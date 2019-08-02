import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  saveSectionValues(sectionName: string, allFormValues) {
    sessionStorage.removeItem(sectionName);
    sessionStorage.setItem(sectionName, JSON.stringify(allFormValues));
  }

  retrieveSectionValue(sectionName: string, field: string) {
    const sectionValues = JSON.parse(sessionStorage.getItem(sectionName));
    return (sectionValues) ? sectionValues[field] : '';
  }

  setSectionValue(sectionName: string, field: string, value) {
    const sectionValues = JSON.parse(sessionStorage.getItem(sectionName));
    if (sectionValues) {
      sectionValues[field] = value;
      sessionStorage.setItem(sectionName, JSON.stringify(sectionValues));
    }
  }

  retrieveSectionValues(sectionName: string) {
    const sectionValues = JSON.parse(sessionStorage.getItem(sectionName));
    return (sectionValues) ? sectionValues : {};
  }

  clearStoredVariables() {
    localStorage.removeItem('damagedItems');
    localStorage.removeItem('fileUploads');
    sessionStorage.removeItem('personalSectionValues');
    sessionStorage.removeItem('claimSectionValues');
    sessionStorage.removeItem('claimDetailSectionValues');
    sessionStorage.removeItem('confirmationSectionValues');
    sessionStorage.removeItem('policyNumberExcess');
  }
}
