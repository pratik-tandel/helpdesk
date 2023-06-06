import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header-ui',
  templateUrl: './header.component.html',

})
export class HeaderComponent {
  /** user details */
  @Input() public userDetails!: any;

  /** toggle sidebar event emitter */
  @Output() public toggleSidebar: EventEmitter<boolean>;

  /** boolean to toggle sidebar */
  public isSidebarVisible: boolean;
  /** logged in employee name */
  public employeeName: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _auth: AuthService
  ) {
    /** initialize the varriables */
    this.toggleSidebar = new EventEmitter();
    this.isSidebarVisible = false;
    this.employeeName = '';
  }

  /* toggle sidebar menu */
  toggleSidebarMenu() {
    this.isSidebarVisible = !this.isSidebarVisible;
    this.toggleSidebar.emit(this.isSidebarVisible);
  }

  ngOnInit(): void {
    this.employeeName = this._route.snapshot.queryParams?.['employeeId'];
  }

  /** logout employee */
  onLogout() {
    this._router.navigate(['login']);
    this._auth.logoutUser();
  }
}
