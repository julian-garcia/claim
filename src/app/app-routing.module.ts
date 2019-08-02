import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FnolComponent } from './fnol/fnol.component';

const routes: Routes = [
  {
    path: '',
    component: FnolComponent
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
