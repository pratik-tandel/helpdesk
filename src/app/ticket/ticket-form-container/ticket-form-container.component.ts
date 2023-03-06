import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from '../ticket.model';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-ticket-form-container',
  templateUrl: './ticket-form-container.component.html',
})
export class TicketFormContainerComponent {

  constructor(
    private _ticketService: TicketService,
    private _router: Router
  ) {
  }

  onAddTicket(ticket: Ticket) {
    this._ticketService.addTicket(ticket).subscribe((res: any) => {
      this._router.navigateByUrl('tickets');
    });
  }
}
