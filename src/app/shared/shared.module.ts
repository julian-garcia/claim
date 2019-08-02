import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DlgWalrusModule } from 'dlg-angular-components';
import { FnolComponent } from '../fnol/fnol.component';
import { PersonalDetailsComponent } from '../fnol/personal-details/personal-details.component';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';
import { ClaimOverviewComponent } from '../fnol/claim-overview/claim-overview.component';
import { ClaimDetailsComponent } from '../fnol/claim-details/claim-details.component';
import { ConfirmationComponent } from '../fnol/confirmation/confirmation.component';
import { SubmitModalComponent } from '../fnol/submit-modal.component';

@NgModule({
  declarations: [
    FnolComponent,
    PersonalDetailsComponent,
    ProgressBarComponent,
    ClaimOverviewComponent,
    ClaimDetailsComponent,
    ConfirmationComponent,
    SubmitModalComponent,
  ],
  imports: [
    ReactiveFormsModule,
    DlgWalrusModule,
    CommonModule
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
