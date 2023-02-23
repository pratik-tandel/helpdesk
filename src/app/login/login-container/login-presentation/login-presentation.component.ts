import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { LoginEmployees } from '../../login-model';
import { LoginPresenterService } from '../login-presenter/login-presenter.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login-ui',
  templateUrl: './login-presentation.component.html',
  viewProviders: [LoginPresenterService],
})
export class LoginPresentationComponent {

  @Output() loginEmployee: EventEmitter<LoginEmployees>;

  public loginForm: any;

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
    this._loginPresenterService.verifiedForm$
      .subscribe(res => this.loginEmployee.emit(res));
  }


  /** Login registered employee */
  login() {
    this._loginPresenterService.loginUsers(this.loginForm);
  }
}
