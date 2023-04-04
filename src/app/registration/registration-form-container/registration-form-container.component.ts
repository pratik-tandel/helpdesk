import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/core/model/common.model';
import { RegistrationService } from '../registration.service';
@Component({
  selector: 'app-registration-form-container',
  templateUrl: './registration-form-container.component.html',
})
export class RegistrationFormContainerComponent {

  constructor(
    private _registrationService: RegistrationService,
    private _toastr: ToastrService,
    private _router: Router
  ) { }

  /**
   * register a new employee
   * @param employeeData 
   */
  registerEmployee(employeeData: Employee) {
    this.getRegisteredEmployeeData().subscribe((employees: Employee[]) => {
      /** check if username already exists */
      const isExistingUsername = employees.find((employee: Employee) => employee.userName === employeeData.userName);
      if (isExistingUsername) {
        this._toastr.error('Username already exists');
      } else {
        this._registrationService.addEmployee(employeeData).subscribe(() => {
          this._toastr.success('Employee registered successfully');
          this._router.navigateByUrl('login');
        });
      }
    })
  }

  /** get employee data */
  getRegisteredEmployeeData(): Observable<Employee[]> {
    return this._registrationService.getRegisteredEmployees();
  }

}
