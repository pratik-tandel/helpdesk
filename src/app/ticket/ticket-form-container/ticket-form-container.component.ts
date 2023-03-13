import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Category, Ticket } from '../ticket.model';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-ticket-form-container',
  templateUrl: './ticket-form-container.component.html',
})
export class TicketFormContainerComponent {

  public categories$: Observable<Category[]>

  constructor(
    private _ticketService: TicketService,
    private _router: Router,
    private _toastr: ToastrService
  ) {
    this.categories$ = this.getCategories();
  }

  onAddTicket(ticket: Ticket) {
    this._ticketService.addTicket(ticket).subscribe((res: any) => {
      this._toastr.success('Ticket added successfully');
      this._router.navigateByUrl('tickets');
    });
  }

  getCategories() {
    return this._ticketService.getCategories();
  }
}
