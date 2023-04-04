import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../core/model/common.model';
import { Observable } from 'rxjs';

@Injectable()
export class RegistrationService {

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:3000/employees';

  /**
   * add a new employee
   * @param employeeData 
   */
  addEmployee(employeeData: Employee) {
    return this.http.post<Employee>(this.url, employeeData);
  }

  /** get registered employees */
  getRegisteredEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url);
  }
}
