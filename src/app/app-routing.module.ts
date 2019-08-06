import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FnolComponent } from './fnol/fnol.component';
import { ClaimStatusComponent } from './claim-status/claim-status.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'claim-status',
    component: ClaimStatusComponent
  },
  {
    path: 'make-a-claim',
    component: FnolComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
