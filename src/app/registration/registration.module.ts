import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationFormContainerComponent } from './registration-form-container/registration-container.component';
import { RegistrationFormPresentationComponent } from './registration-form-container/registration-form-presentation/registration-form-presentation.component';
import { RegistrationService } from './registration.service';




@NgModule({
  declarations: [
    RegistrationFormContainerComponent,
    RegistrationFormPresentationComponent,
  ],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers:[
    RegistrationService
  ]
})
export class RegistrationModule { }
