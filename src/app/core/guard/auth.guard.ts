import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private _auth: AuthService,
    private _router: Router
  ) { }

  canActivate(): boolean {
    const userDetails = this._auth?.getUserDetails();
    if (userDetails) {
      return true;
    }

    this._router.navigate(['login']);
    return false;
  }

}
