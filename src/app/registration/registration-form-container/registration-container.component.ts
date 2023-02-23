import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { Observable, of } from 'rxjs';
import { Employee } from '../../core/component/model/common.model';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-registration-container',
  templateUrl: './registration-container.component.html',
})
export class RegistrationFormContainerComponent implements OnInit {

  public employeeList$!: Observable<Employee[]>;

  constructor(
    private _registrationService: RegistrationService,
    private _toastr: ToastrService
  ) { }

  addRegisterdemployee(registeredData: Employee) {
    this.getEmployeeData().subscribe((employees: Employee[]) => {
      const isExistingUsername = employees.find((employee: Employee) => employee.userName === registeredData.userName);
      if (isExistingUsername) {
        this._toastr.error('Username already exists');
      } else {
        this._registrationService.addRegisterEmployee(registeredData).subscribe((res) => {
          this.employeeList$ = of(employees);
          this._toastr.success('Employee registered successfully');
        });
      }
    })
  }

  ngOnInit(): void {
    this.employeeList$ = this.getEmployeeData();
  }

  /** get employee data */
  getEmployeeData(): Observable<Employee[]> {
    return this._registrationService.getRegisteredEmployees();
  }

}
