import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { Employee } from 'src/app/core/model/common.model';
import { CustomFormValidator } from '../../custom-validation';

@Injectable()
export class RegistrationFormPresenterService {

  public registerFormData$: Observable<Employee>
  public registerFormData: Subject<Employee>

  constructor(
    private _formBuilder: FormBuilder
  ) {
    this.registerFormData = new Subject();
    this.registerFormData$ = this.registerFormData.asObservable(); /* stored subject variable to asObservable */
  }

  /** bind form controls */
  bindForm() {
    return this._formBuilder.group(
      {
        name: ['', [Validators.required, Validators.minLength(3), CustomFormValidator.cannotContainSpace]],
        lastName: ['', [Validators.required, CustomFormValidator.cannotContainSpace]],
        userName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z0-9.-]{2,}[.]{1}[a-zA-Z]{2,}')]],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required]
      }, { validator: CustomFormValidator.checkIfMatchingPasswords('password', 'confirmPassword') }
    )
  }

  /**
   * check if form is valid
   * @param registrationForm 
   */
  public validateForm(registrationForm: FormGroup) {
    if (registrationForm.valid) {
      this.registerFormData.next(registrationForm.value);
    }
  }
}
