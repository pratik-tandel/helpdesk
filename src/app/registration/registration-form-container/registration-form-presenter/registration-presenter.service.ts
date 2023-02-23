import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { CustomFormValidator } from '../../custom-validation';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class RegistrationFormPresenterService {

  public verifiedForm$: Observable<any>
  public verifiedForm: Subject<any>

  constructor(
    private _formBuilder: FormBuilder
  ) {
    this.verifiedForm = new Subject();
    this.verifiedForm$ = this.verifiedForm.asObservable(); /* stored subject variable to asObservable */

  }

  /**apply validation */
  bindForm() {
    return this._formBuilder.group(
      {
        name: ['', [Validators.required,
        Validators.minLength(3),
        CustomFormValidator.cannotContainSpace]],
        lastName: ['', [Validators.required,
        CustomFormValidator.cannotContainSpace]],
        userName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z0-9.-]{2,}[.]{1}[a-zA-Z]{2,}')]],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required]
      }, { validator: CustomFormValidator.checkIfMatchingPasswords('password', 'confirmPassword') }
    )
  }

  /* strongly checked user form is valid or not */
  public registrationFormData(registrationForm: FormGroup) {
    if (registrationForm.valid) {
      this.verifiedForm.next(registrationForm.value);
    }
  }
}
