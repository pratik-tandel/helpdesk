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

  @Input() public set registeredUser(loginDetails) {

    if (loginDetails) {
      console.log("adaptertest:", loginDetails)
      this._registeredUser = loginDetails;
    }
  }

  @Output() loginEmployee: EventEmitter<LoginEmployees>;

  public get registeredUser(): any {
    return this._registeredUser;
  }
  public loginForm: any;

  private _registeredUser: any;

  constructor(
    private _loginPresenterService: LoginPresenterService,
    private _toastr: ToastrService,
    private _router: Router,
    private _authService: AuthService
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
    let result = this._loginPresenterService.loginUsers(this.loginForm, this.registeredUser);
    if (result === -1) {
      this._toastr.error('Username and password is wrong');
    } else {
      this._authService.setUserDetails(this.registeredUser[result])
      this._router.navigate(['/'])
    }
    this.loginForm.reset();
  }
}
