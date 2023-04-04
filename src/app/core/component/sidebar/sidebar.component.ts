import { Component, EventEmitter, Output } from '@angular/core';
import { SidebarMenu } from '../../model/common.model';


@Component({
  selector: 'app-sidebar-ui',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  /** toggle sidebar event emitter */
  @Output() public toggleSidebar: EventEmitter<boolean>;

  /** boolean to check if menu bar is visible */
  public isMenuVisible: boolean;

  /** sidebar menu data */
  sidebarMenu: SidebarMenu[];

  constructor() {
    this.toggleSidebar = new EventEmitter;
    this.isMenuVisible = false;
    this.sidebarMenu = [
      {
        text: 'All Ticket',
        link: 'tickets',
        className: 'active'
      },
      {
        text: 'New',
        link: '',
        className: 'active'
      },
      {
        text: 'Pending',
        link: '',
        className: 'active'
      },
      {
        text: 'In Progress',
        link: '',
        className: 'active'
      },
      {
        text: 'closed',
        link: '',
        className: 'active'
      },
    ]
  }

  /* toggle sidebar menu */
  toggleSidebarMenu() {
    this.isMenuVisible = !this.isMenuVisible;
    this.toggleSidebar.emit(this.isMenuVisible)
  }

}
