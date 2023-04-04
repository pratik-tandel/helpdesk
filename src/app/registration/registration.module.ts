import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationFormContainerComponent } from './registration-form-container/registration-form-container.component';
import { RegistrationFormPresentationComponent } from './registration-form-container/registration-form-presentation/registration-form-presentation.component';
import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationService } from './registration.service';




@NgModule({
  declarations: [
    RegistrationFormContainerComponent,
    RegistrationFormPresentationComponent,
  ],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    RegistrationService
  ]
})
export class RegistrationModule { }
