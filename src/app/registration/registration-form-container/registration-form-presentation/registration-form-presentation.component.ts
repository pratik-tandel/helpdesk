import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { Employee } from 'src/app/core/model/common.model';
import { RegistrationFormPresenterService } from "../registration-form-presenter/registration-form-presenter.service";


@Component({
  selector: 'app-registration-ui',
  templateUrl: './registration-form-presentation.component.html',
  viewProviders: [RegistrationFormPresenterService], /** viewProviders: use RegistrationPresenterService only for child component */

})
export class RegistrationFormPresentationComponent {
  /** add employee event emitter */
  @Output() addEmployee: EventEmitter<Employee>;

  /** registration form */
  public registrationForm: FormGroup;

  constructor(private _registrationFormPresenter: RegistrationFormPresenterService) {
    this.registrationForm = this._registrationFormPresenter.bindForm();
    this.addEmployee = new EventEmitter();
  }

  /** get form controls */
  get formControls(): { [key: string]: AbstractControl } {
    return this.registrationForm.controls;
  }

  ngOnInit() {
    this._registrationFormPresenter.registerFormData$.subscribe(res => this.addEmployee.emit(res));
  }

  /** on form submit */
  onSubmit() {
    this._registrationFormPresenter.validateForm(this.registrationForm);
  }
}