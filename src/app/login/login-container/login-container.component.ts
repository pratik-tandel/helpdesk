import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginEmployees, RegisteredUser } from '../login-model';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
})
export class LoginContainerComponent {
  public loginEmployee$!: Observable<LoginEmployees>;
  public loginList$!: Observable<RegisteredUser[]>;
    constructor(private _loginService: LoginService){
    }

    ngOnInit(): void {
      this.loginList$ = this._loginService.getRegisteredUser();
    }

    addLoginEmployee(loginEmpoyee: LoginEmployees){
      this._loginService.loginEmployee(loginEmpoyee).subscribe();
    }
}
