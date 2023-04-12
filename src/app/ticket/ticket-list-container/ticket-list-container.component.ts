import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Ticket } from '../ticket.model';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-ticket-list-container',
  templateUrl: './ticket-list-container.component.html',
})
export class TicketListContainerComponent implements OnInit {

  /** tickets list observable */
  public tickets$!: Observable<Ticket[]>;

  constructor(
    private _ticketService: TicketService,
    private _toastr: ToastrService
  ) { }

  ngOnInit() {
    this.getTickets();
  }

  /** get tickets */
  getTickets() {
    this.tickets$ = this._ticketService.getTickets();
  }

  /**
   * delete tickets
   * @param ticketId 
   */
  onDeleteTicket(ticketId: number) {
    return this._ticketService.deleteTicket(ticketId).subscribe((res: any) => {
      this._toastr.success('Ticket deleted successfully');
      this.getTickets();
    })
  }
}
