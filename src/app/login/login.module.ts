import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { LoginContainerComponent } from './login-container/login-container.component';
import { LoginPresentationComponent } from './login-container/login-presentation/login-presentation.component';
import { LoginRoutingModule } from './login-routing.module';
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

