import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Category, Ticket } from '../../ticket.model';
import { TicketFormPresenterService } from '../ticket-form-presenter/ticket-form-presenter.service';

@Component({
  selector: 'app-ticket-form-ui',
  templateUrl: './ticket-form-presentation.component.html',
  viewProviders: [TicketFormPresenterService]
})
export class TicketFormPresentationComponent implements OnInit {
  @Input() public set categories(value: Category[] | null) {
    if (value) {
      this._categories = value;
      console.log(this._categories);
    }
  }

  public get categories(): Category[] | null {
    return this._categories;
  }

  @Output() public addTicket: EventEmitter<Ticket>;

  public ticketForm: FormGroup;
  public selectedCategory!: string;
  
  private _categories!: Category[];

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
