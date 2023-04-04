import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Employee } from '../core/model/common.model';
import { LoginAdapter } from './login.adapter';

@Injectable()
export class LoginService {

  private url = 'http://localhost:3000/employees';

  constructor(private _http: HttpClient, private _loginAdapter: LoginAdapter) { }

  /** get registered employees */
  getRegisteredEmployees() {
    return this._http.get<Employee[]>(this.url).pipe(
      map((data: Employee[]) => {
        return this._loginAdapter.toResponse(data)
      })
    )
  }

}
