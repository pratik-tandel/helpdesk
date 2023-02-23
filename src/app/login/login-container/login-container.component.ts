import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { LoginEmployees, RegisteredUser } from '../login-model';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
})
export class LoginContainerComponent {
  public loginEmployee$!: Observable<LoginEmployees>;
  public loginList$!: Observable<RegisteredUser[]>;

  constructor(
    private _loginService: LoginService,
    private _authService: AuthService,
    private _toastr: ToastrService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.loginList$ = this.getRegisteredUsers();
  }

  addLoginEmployee(loginEmpoyee: LoginEmployees) {
    this.getRegisteredUsers().subscribe((users: RegisteredUser[]) => {
      const existingUser = users.find((user: RegisteredUser) => user.userName === loginEmpoyee.userName && user.password === loginEmpoyee.password);

      if (existingUser) {
        this._authService.setUserDetails(existingUser);
        this._router.navigate(['/'])
      } else {
        this._toastr.error('Username and password is wrong');
      }
    })
  }

  getRegisteredUsers() {
    return this._loginService.getRegisteredUser();
  }
}
