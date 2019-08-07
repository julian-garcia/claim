import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PolicyHolder } from '../data-objects/policy-holder';
import { Claim } from '../data-objects/claim';

@Injectable({
  providedIn: 'root'
})
export class StaticDataService {
  claimEmail: string;
  protected urlPolicies = 'http://localhost:3000/policyholders';
  protected urlClaims = 'http://localhost:3004/claims';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  getPolicyHolderData(name: string, pcode: string) {
    const pcodeRegEx = pcode.replace(' ', '').split('').join('\\s*');
    return this.httpClient.get<PolicyHolder[]>(`${this.urlPolicies}?name_like=${name}&postCode_like=^${pcodeRegEx}$`);
  }

  postClaimData(claim: Claim) {
    return this.httpClient.post<Claim>(`${this.urlClaims}`, claim, this.httpOptions);
  }

  getClaims(email: string) {
    return this.httpClient.get<Claim[]>(`${this.urlClaims}?emailAddress=${email}`);
  }
}
