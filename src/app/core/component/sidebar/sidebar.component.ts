import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-sidebar-ui',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  public togglemenubar: boolean = false;

  @Output() public toggleSidebar: EventEmitter<boolean>;

  sidebarMenu = [
    {
      text: 'All Ticket',
      link: 'tickets',
      class: 'active'
    },
    {
      text: 'New',
      link: '',
      class: 'active'
    },
    {
      text: 'Pending',
      link: '',
      class: 'active'
    },
    {
      text: 'In Progress',
      link: '',
      class: 'active'
    },
    {
      text: 'closed',
      link: '',
      class: 'active'
    },
  ]

  constructor() {
    this.toggleSidebar = new EventEmitter;
  }
  
  /* togglesidebar */
  closedSidebar() {
    this.togglemenubar = !this.togglemenubar;
    this.toggleSidebar.emit(this.togglemenubar)
  }

}
