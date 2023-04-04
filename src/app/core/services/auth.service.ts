import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  /**
   * set user details in local storage
   * @param userDetails 
   */
  setUserDetails(userDetails: any) {
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
  }

  /**
   * get user details from local storage
   * @param userDetails 
   */
  getUserDetails() {
    const userDetails = localStorage?.getItem("userDetails");
    return userDetails ? JSON.parse(userDetails) : "";
  }

  /** clear local storage */
  logoutUser() {
    localStorage.clear();
  }
}
