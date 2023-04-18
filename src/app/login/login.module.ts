import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginAdapter } from './login.adapter';
import { LoginService } from './login.service';
import { LoginFormContainerComponent } from './login-form-container/login-form-container.component';
import { LoginFormPresentationComponent } from './login-form-container/login-form-presentation/login-form-presentation.component';

@NgModule({
  declarations: [
    LoginFormContainerComponent,
    LoginFormPresentationComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    LoginAdapter,
    LoginService
  ]
})
export class LoginModule { }

