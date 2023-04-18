import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormContainerComponent } from './login-form-container/login-form-container.component';

const routes: Routes = [
  {
    path: '',
    component: LoginFormContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
