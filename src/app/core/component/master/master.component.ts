import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
})
export class MasterComponent {

  public userDetails: any;

  constructor(private _authService:AuthService){
    this.userDetails = this._authService.getUserDetails();
  }
  public isCheckedToggle = false;
  public toggle(): void {
    this.isCheckedToggle = !this.isCheckedToggle;
  }

}
