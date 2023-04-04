import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
})
export class MasterComponent {
  /** user details */
  public userDetails: any;
  /** boolean to toggle sidebar visibility */
  public isSidebarVisible = false;

  constructor(private _authService: AuthService) {
    this.userDetails = this._authService.getUserDetails();
  }

  public onSidebarToggle(): void {
    this.isSidebarVisible = !this.isSidebarVisible;
  }

}
