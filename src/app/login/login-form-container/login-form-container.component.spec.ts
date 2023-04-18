import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { loginServiceStub, routerStub, toastrStub } from 'factory/stubs';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../login.service';
import { LoginFormContainerComponent } from './login-form-container.component';
import { LoginFormPresentationComponent } from './login-form-presentation/login-form-presentation.component';

describe('LoginFormContainerComponent', () => {
  let component: LoginFormContainerComponent;
  let fixture: ComponentFixture<LoginFormContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        LoginFormContainerComponent,
        LoginFormPresentationComponent
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

    fixture = TestBed.createComponent(LoginFormContainerComponent);
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
    fixture.debugElement.query(By.css('app-login-form-ui')).triggerEventHandler('loginEmployee', employeeCredentials);
    expect(errorSpy).toHaveBeenCalledTimes(1);

    const spy = spyOn(routerStub, 'navigate');
    employeeCredentials = {
      userName: 'pratiktandel@gmail.com',
      password: 'Pass',
    };
    fixture.debugElement.query(By.css('app-login-form-ui')).triggerEventHandler('loginEmployee', employeeCredentials);
    expect(spy).toHaveBeenCalledTimes(1);
  });

});

