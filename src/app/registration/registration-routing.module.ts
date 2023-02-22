import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationFormContainerComponent } from './registration-form-container/registration-container.component';

const routes: Routes = [
  {
    path: '',
    component: RegistrationFormContainerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
