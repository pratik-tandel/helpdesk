import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginContainerComponent } from './login-container/login-container.component';
import { LoginPresentationComponent } from './login-container/login-presentation/login-presentation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginAdapter } from './login.adapter';
import { LoginService } from './login.service';

@NgModule({
  declarations: [
    LoginContainerComponent,
    LoginPresentationComponent
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

