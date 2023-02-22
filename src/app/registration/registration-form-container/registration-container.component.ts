import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { Observable } from 'rxjs';
import { Employee } from '../../core/component/model/common.model';
@Component({
  selector: 'app-registration-container',
  templateUrl: './registration-container.component.html',
})
export class RegistrationFormContainerComponent implements OnInit {

  public employeeList$!: Observable<Employee>;

  constructor(private _registrationService: RegistrationService) { }

  addRegisterdemployee(registeredData: Employee) {
    /** data load without refresh the page   */
    this._registrationService.addRegisterEmployee(registeredData).subscribe((res) => {
      this.getEmployeeData();
    });
  }

  ngOnInit(): void {
    this.getEmployeeData();
  }

  /** get employee data */
  getEmployeeData(){
    this.employeeList$ = this._registrationService.getRegisteredEmployee();
  }

}
