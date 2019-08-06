import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DlgWalrusModule } from 'dlg-angular-components';
import { FnolComponent } from '../fnol/fnol.component';
import { PersonalDetailsComponent } from '../fnol/personal-details/personal-details.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProgressBarComponent } from '../progress-bar/progress-bar.component';
import { ClaimOverviewComponent } from '../fnol/claim-overview/claim-overview.component';
import { ClaimDetailsComponent } from '../fnol/claim-details/claim-details.component';
import { ConfirmationComponent } from '../fnol/confirmation/confirmation.component';
import { SubmitModalComponent } from '../fnol/submit-modal.component';
import { ClaimStatusComponent } from '../claim-status/claim-status.component';
import { HomeComponent } from '../home/home.component';

@NgModule({
  declarations: [
    FnolComponent,
    PersonalDetailsComponent,
    ProgressBarComponent,
    ClaimOverviewComponent,
    ClaimDetailsComponent,
    ConfirmationComponent,
    SubmitModalComponent,
    ClaimStatusComponent,
    HomeComponent,
  ],
  imports: [
    ReactiveFormsModule,
    DlgWalrusModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    FnolComponent,
    PersonalDetailsComponent,
    ProgressBarComponent,
    ClaimOverviewComponent,
    ClaimDetailsComponent,
    ConfirmationComponent,
    SubmitModalComponent,
    DlgWalrusModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    SubmitModalComponent
  ]
})
export class SharedModule { }
