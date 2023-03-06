import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Ticket } from '../ticket.model';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-ticket-form-container',
  templateUrl: './ticket-form-container.component.html',
})
export class TicketFormContainerComponent {

  constructor(
    private _ticketService: TicketService,
    private _router: Router,
    private _toastr: ToastrService
  ) {
  }

  onAddTicket(ticket: Ticket) {
    this._ticketService.addTicket(ticket).subscribe((res: any) => {
      this._toastr.success('Ticket added successfully');
      this._router.navigateByUrl('tickets');
    });
  }
}
