import { Component, Input } from '@angular/core';
import { Ticket } from '../../ticket.model';

@Component({
  selector: 'app-ticket-list-ui',
  templateUrl: './ticket-list-presentation.component.html',
})
export class TicketListPresentationComponent {
  @Input() public set ticketList(value: Ticket[] | null) {
    if (value) {
      this._ticketList = value;
    }
  }

  public get ticketList(): Ticket[] | null {
    return this._ticketList;
  }

  private _ticketList!: Ticket[] | null;
}
