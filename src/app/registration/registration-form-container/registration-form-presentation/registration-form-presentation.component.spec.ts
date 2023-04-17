import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { TICKET_FORMGROUP } from 'factory/stubs';
import { RegistrationFormPresenterService } from '../registration-form-presenter/registration-form-presenter.service';
import { RegistrationFormPresentationComponent } from './registration-form-presentation.component';

describe('RegistrationFormPresentationComponent', () => {
  let component: RegistrationFormPresentationComponent;
  let fixture: ComponentFixture<RegistrationFormPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationFormPresentationComponent],
      imports: [
        ReactiveFormsModule,
        NgSelectModule
      ],
      providers: [
        RegistrationFormPresenterService
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RegistrationFormPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('onSubmit should emit employee data', () => {
    component.registrationForm = TICKET_FORMGROUP as FormGroup;
    const addEmitMock = spyOn(component.addEmployee, 'emit');
    component.onSubmit();
    expect(addEmitMock).toHaveBeenCalledTimes(1);
  });

});
