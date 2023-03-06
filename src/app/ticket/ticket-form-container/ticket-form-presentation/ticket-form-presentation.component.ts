import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Ticket } from '../../ticket.model';
import { TicketFormPresenterService } from '../ticket-form-presenter/ticket-form-presenter.service';

@Component({
  selector: 'app-ticket-form-ui',
  templateUrl: './ticket-form-presentation.component.html',
  viewProviders: [TicketFormPresenterService]
})
export class TicketFormPresentationComponent implements OnInit {
  @Output() public addTicket: EventEmitter<Ticket>;
  public ticketForm: FormGroup;

  constructor(
    private _ticketFormPresenter: TicketFormPresenterService
  ) {
    this.ticketForm = this._ticketFormPresenter.bindForm();
    this.addTicket = new EventEmitter();
  }

  ngOnInit(): void {
    this._ticketFormPresenter.verifiedForm$.subscribe((ticket: Ticket) => {
      this.addTicket.emit(ticket);
    })
  }

  onSubmit() {
    this._ticketFormPresenter.onSubmit(this.ticketForm);
  }

  get formControls() {
    return this.ticketForm.controls;
  }
}
