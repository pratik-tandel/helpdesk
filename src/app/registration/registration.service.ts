import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../core/component/model/common.model';

@Injectable()
export class RegistrationService {

  constructor(private http: HttpClient) { }

  private URL = 'http://localhost:3000/registeredEmployee';

  /* Create Data (Add employee)*/
  addRegisterEmployee(formBody: Employee) {
    return this.http.post<Employee>(this.URL, formBody);
  }

  /**Get registration employee details */
  getRegisteredEmployees() {
    return this.http.get<Employee[]>(this.URL);
  }
}
