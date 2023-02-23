import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { Employee } from 'src/app/core/component/model/common.model';
/**import RegistrationPresenterService and used it's method */
import { RegistrationFormPresenterService } from "../registration-form-presenter/registration-presenter.service";


@Component({
  selector: 'app-registration-ui',
  templateUrl: './registration-form-presentation.component.html',
  viewProviders: [RegistrationFormPresenterService], /** viewProviders: use RegistrationPresenterService only for child component */

})
export class RegistrationFormPresentationComponent {
  @Input() public set employeeList(employeeDetails: any) {
    if (employeeDetails) {
      this._employeeList = employeeDetails;
      this.registrationForm = this._registrationPresenterService.bindForm();
    }
  }

  //  emit form data
  @Output() addRegistrationFormData: EventEmitter<Employee>;

  public get employeeList(): any {
    return this._employeeList;
  }
  public registrationForm: FormGroup;

  private _employeeList: any;

  /** inject the services into constructor */
  constructor(private _registrationPresenterService: RegistrationFormPresenterService) {
    /** initializing the variables */
    this.registrationForm = this._registrationPresenterService.bindForm();
    this.addRegistrationFormData = new EventEmitter();
  }

  /** get form controls */
  get formControls(): { [key: string]: AbstractControl } {
    return this.registrationForm.controls;
  }

  ngOnInit() {
    this._registrationPresenterService.verifiedForm$
      .subscribe(res => this.addRegistrationFormData.emit(res));
  }

  /** add registered employee */
  addRegisteredEmployee() {
    this._registrationPresenterService.registrationFormData(this.registrationForm);
  }
}