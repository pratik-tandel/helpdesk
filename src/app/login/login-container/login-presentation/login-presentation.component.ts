import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { EmployeeCredentials } from '../../login-model';
import { LoginPresenterService } from '../login-presenter/login-presenter.service';

@Component({
  selector: 'app-login-ui',
  templateUrl: './login-presentation.component.html',
  viewProviders: [LoginPresenterService],
})
export class LoginPresentationComponent {
  /** login employee event emitter */
  @Output() loginEmployee: EventEmitter<EmployeeCredentials>;

  /** login form */
  public loginForm: FormGroup;

  constructor(
    private _loginPresenterService: LoginPresenterService
  ) {
    this.loginForm = this._loginPresenterService.bindform();
    this.loginEmployee = new EventEmitter();
  }

  /** get form controls */
  get formControls(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  ngOnInit() {
    this._loginPresenterService.loginFormData$.subscribe(res => this.loginEmployee.emit(res));
  }


  /** Login registered employee */
  onSubmit() {
    this._loginPresenterService.validateForm(this.loginForm);
  }
}
