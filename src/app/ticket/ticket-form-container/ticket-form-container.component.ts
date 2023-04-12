import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Category, Ticket } from '../ticket.model';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-ticket-form-container',
  templateUrl: './ticket-form-container.component.html',
})
export class TicketFormContainerComponent {
  /** categories list observable */
  public categories$: Observable<Category[]>;
  /** ticket data observable */
  public ticketData$!: Observable<Ticket>;
  /** ticket id */
  public ticketId: string;

  constructor(
    private _ticketService: TicketService,
    private _router: Router,
    private _toastr: ToastrService,
    private _activatedRoute: ActivatedRoute
  ) {
    this.categories$ = this.getCategories();
    this.ticketId = this._activatedRoute?.snapshot?.params['id'];
    if (this.ticketId) {
      this.ticketData$ = this._ticketService.getTicketById(this.ticketId);
    }
  }

  /**
   * add new ticket
   * @param ticket ticket data
   */
  onAddTicket(ticket: Ticket) {
    this._ticketService.addTicket(ticket).subscribe((res: any) => {
      this._toastr.success('Ticket added successfully');
      this._router.navigateByUrl('tickets');
    });
  }

  /**
   * edit ticket
   * @param ticket ticket data
   */
  onEditTicket(ticket: Ticket) {
    this._ticketService.editTicket(ticket, this.ticketId).subscribe((res: any) => {
      this._toastr.success('Ticket edited successfully');
      this._router.navigateByUrl('tickets');
    });
  }

  /** get categories list */
  getCategories() {
    return this._ticketService.getCategories();
  }
}
