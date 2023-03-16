import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  setUserDetails(userDetails:any){
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
  }
  
  getUserDetails(){
    const userDetails = localStorage?.getItem("userDetails");
    return userDetails ? JSON.parse(userDetails): "";
  }
  
  logoutUser() {
    localStorage.clear();
  }
}
