import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginAdapter } from './login.adapter';
import { map } from 'rxjs';
import { Employee} from '../core/component/model/common.model';
import {LoginEmployees} from '../login/login-model';

@Injectable()
export class LoginService {

  private URL = 'http://localhost:3000/registeredEmployee';
  private LOGIN_EMPLOYEE = 'http://localhost:3000/loginEmployee';
  constructor(private _http: HttpClient, private _loginAdapter: LoginAdapter) { }

  /**getLogin details */
  getRegisteredUser() {
    return this._http.get<Employee[]>(this.URL).pipe(
      map((data: Employee[]) => {
        return this._loginAdapter.toResponse(data)
      })
    )
  }

  /* Create Data */
  loginEmployee(formBody:LoginEmployees) {
    return this._http.post<LoginEmployees>(this.LOGIN_EMPLOYEE, formBody);
  }
}
