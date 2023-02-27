import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../ticket.model';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-ticket-list-container',
  templateUrl: './ticket-list-container.component.html',
})
export class TicketListContainerComponent implements OnInit {

  public tickets$!: Observable<Ticket[]>;

  constructor(private _ticketService: TicketService) { }

  ngOnInit() {
    this.tickets$ = this.getTickets();
  }

  getTickets() {
    return this._ticketService.getTickets();
  }
}
