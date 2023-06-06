import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../core/models/common.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class RegistrationService {

  constructor(private http: HttpClient) { }

  private url = environment.apiUrl;

  /**
   * add a new employee
   * @param employeeData 
   */
  addEmployee(employeeData: Employee) {
    return this.http.post<Employee>(`${this.url}/employees`, employeeData);
  }

  /** get registered employees */
  getRegisteredEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.url}/employees`);
  }
}
