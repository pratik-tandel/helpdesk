import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  @Output() public deleteTicket: EventEmitter<number>;

  private _ticketList!: Ticket[] | null;

  constructor() {
    this.deleteTicket = new EventEmitter();
  }

  onDelete(ticketId: number) {
    this.deleteTicket.emit(ticketId);
  }
}
