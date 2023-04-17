import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { EMPLOYEES, TICKET_FORM } from 'factory/api-data';
import { registrationServiceStub, routerStub, ticketServiceStub, toastrStub } from 'factory/stubs';
import { ToastrService } from 'ngx-toastr';
import { RegistrationFormContainerComponent } from './registration-form-container.component';
import { RegistrationFormPresentationComponent } from './registration-form-presentation/registration-form-presentation.component';
import { RegistrationService } from '../registration.service';

describe('RegistrationFormContainerComponent', () => {
    let component: RegistrationFormContainerComponent;
    let fixture: ComponentFixture<RegistrationFormContainerComponent>;


    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                RegistrationFormContainerComponent,
                RegistrationFormPresentationComponent
            ],
            imports: [
                ReactiveFormsModule,
                NgSelectModule
            ],
            providers: [
                { provide: RegistrationService, useValue: registrationServiceStub },
                { provide: ToastrService, useValue: toastrStub },
                { provide: Router, useValue: routerStub }
            ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(RegistrationFormContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('should register employee', () => {
        let employeeData = {
            name: 'tanvi',
            lastName: 'patel',
            userName: 'test@gmail.com',
            password: '123',
            confirmPassword: '123',
            id: 1
        };
        const sucessSpy = spyOn(toastrStub, 'success');
        fixture.debugElement.query(By.css('app-registration-ui')).triggerEventHandler('addEmployee', employeeData);
        expect(sucessSpy).toHaveBeenCalledTimes(1);
    });
    
    it('should display error on register employee', () => {
        let employeeData = EMPLOYEES[0];
        const errorSpy = spyOn(toastrStub, 'error');
        fixture.debugElement.query(By.css('app-registration-ui')).triggerEventHandler('addEmployee', employeeData);
        expect(errorSpy).toHaveBeenCalledTimes(1);
    });
});

