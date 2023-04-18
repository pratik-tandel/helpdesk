import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { EMPLOYEES } from 'factory/api-data';
import { authServiceStub, loginServiceStub, registrationServiceStub, routerStub, toastrStub } from 'factory/stubs';
import { ToastrService } from 'ngx-toastr';
import { LoginContainerComponent } from './login-container.component';
import { LoginPresentationComponent } from './login-presentation/login-presentation.component';
import { LoginService } from '../login.service';

describe('LoginContainerComponent', () => {
  let component: LoginContainerComponent;
  let fixture: ComponentFixture<LoginContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        LoginContainerComponent,
        LoginPresentationComponent
      ],
      imports: [
        ReactiveFormsModule
      ],
      providers: [
        { provide: LoginService, useValue: loginServiceStub },
        { provide: ToastrService, useValue: toastrStub },
        { provide: Router, useValue: routerStub }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LoginContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should authenticate employee', () => {
    let employeeCredentials = {
      userName: 'test@gmail.com',
      password: '123',
    };
    const errorSpy = spyOn(toastrStub, 'error');
    fixture.debugElement.query(By.css('app-login-ui')).triggerEventHandler('loginEmployee', employeeCredentials);
    expect(errorSpy).toHaveBeenCalledTimes(1);

    const spy = spyOn(routerStub, 'navigate');
    employeeCredentials = {
      userName: 'pratiktandel@gmail.com',
      password: 'Pass',
    };
    fixture.debugElement.query(By.css('app-login-ui')).triggerEventHandler('loginEmployee', employeeCredentials);
    expect(spy).toHaveBeenCalledTimes(1);
  });

});

