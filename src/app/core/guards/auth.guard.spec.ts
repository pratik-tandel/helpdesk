import { TestBed } from '@angular/core/testing';
import { AuthGuard } from './auth.guard';
import { AuthService } from '../services/auth.service';
import { authServiceStub, routerStub } from 'factory/stubs';
import { Router } from '@angular/router';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: AuthService, useValue: authServiceStub },
        { provide: Router, useValue: routerStub }
      ]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should authenticate user', () => {
    let isAuthenticated = guard.canActivate();
    expect(isAuthenticated).toBeTrue();

    spyOn(authServiceStub, 'getUserDetails').and.returnValue(null);
    isAuthenticated = guard.canActivate();
    expect(isAuthenticated).toBeFalse();
  });


});
