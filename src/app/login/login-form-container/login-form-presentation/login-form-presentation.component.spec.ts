import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { LOGIN_FORMGROUP } from 'factory/stubs';
import { LoginFormPresenterService } from '../login-form-presenter/login-form-presenter.service';
import { LoginFormPresentationComponent } from './login-form-presentation.component';

describe('LoginFormPresentationComponent', () => {
    let component: LoginFormPresentationComponent;
    let fixture: ComponentFixture<LoginFormPresentationComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LoginFormPresentationComponent],
            imports: [
                ReactiveFormsModule,
                NgSelectModule
            ],
            providers: [
                LoginFormPresenterService
            ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(LoginFormPresentationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('onSubmit should validate employee credentials', () => {
        component.loginForm = LOGIN_FORMGROUP as FormGroup;
        const spy = spyOn(component.loginEmployee, 'emit');
        component.onSubmit();
        expect(spy).toHaveBeenCalledTimes(1);
    });

});
