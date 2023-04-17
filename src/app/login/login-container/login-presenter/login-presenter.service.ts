import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import { EmployeeCredentials } from '../../login.model';

@Injectable()
export class LoginPresenterService {
  public loginFormData$: Observable<EmployeeCredentials>
  public loginFormData: Subject<EmployeeCredentials>

  constructor(private _formBuilder: FormBuilder) {
    this.loginFormData = new Subject();
    this.loginFormData$ = this.loginFormData.asObservable(); /* stored subject variable to asObservable */
  }

  /**apply validation */
  bindform() {
    return this._formBuilder?.group(
      {
        userName: ['', Validators.required],
        password: ['', Validators.required]
      })
  }

  /**
   * check if form is valid
   * @param loginForm 
   */
  public validateForm(loginForm: FormGroup) {
    if (loginForm.valid) {
      this.loginFormData.next(loginForm.value);
    }
  }
}
