import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';
import { EmployeeCredentials, RegisteredEmployee } from '../login.model';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-login-form-container',
  templateUrl: './login-form-container.component.html',
})
export class LoginFormContainerComponent {

  constructor(
    private _loginService: LoginService,
    private _authService: AuthService,
    private _toastr: ToastrService,
    private _router: Router
  ) { }

  /**
   * validate employee login
   * @param loginEmpoyee 
   */
  onEmployeeLogin(loginEmpoyee: EmployeeCredentials) {
    this.getRegisteredEmployeeData().subscribe((employees: RegisteredEmployee[]) => {
      const existingEmployee = employees.find((employee: RegisteredEmployee) => employee.userName === loginEmpoyee.userName && employee.password === loginEmpoyee.password);

      if (existingEmployee) {
        this._authService.setUserDetails(existingEmployee);
        this._router.navigate(['/'])
      } else {
        this._toastr.error('Username and password is wrong');
      }
    })
  }

  /** get registered employee data */
  getRegisteredEmployeeData() {
    return this._loginService.getRegisteredEmployees();
  }
}
