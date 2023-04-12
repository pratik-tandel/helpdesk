import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Category, Ticket } from '../../ticket.model';
import { TicketFormPresenterService } from '../ticket-form-presenter/ticket-form-presenter.service';

@Component({
  selector: 'app-ticket-form-ui',
  templateUrl: './ticket-form-presentation.component.html',
  viewProviders: [TicketFormPresenterService]
})
export class TicketFormPresentationComponent implements OnInit {
  /** setter for categories list */
  @Input() public set categories(value: Category[] | null) {
    if (value) {
      this._categories = value;
    }
  }

  public get categories(): Category[] | null {
    return this._categories;
  }

  /** setter for ticket data */
  @Input() public set ticketData(value: Ticket | null) {
    if (value) {
      this._ticketData = value;
      this.isEditMode = true;
      this.ticketForm.patchValue(value);
    }
  }

  public get ticketData(): Ticket | null {
    return this._ticketData;
  }

  /** add ticket event emitter */
  @Output() public addTicket: EventEmitter<Ticket>;
  /** edit ticket event emitter */
  @Output() public editTicket: EventEmitter<Ticket>;

  /** ticket form group */
  public ticketForm: FormGroup;
  /** selected category */
  public selectedCategory!: string;
  /** boolean to check if form is in edit mode */
  public isEditMode: boolean;

  /** categories list */
  private _categories!: Category[];
  /** ticket data */
  private _ticketData!: Ticket;

  constructor(
    private _ticketFormPresenter: TicketFormPresenterService,
    private _router: Router
  ) {
    this.ticketForm = this._ticketFormPresenter.bindForm();
    this.addTicket = new EventEmitter();
    this.editTicket = new EventEmitter();
    this.isEditMode = false;
  }

  ngOnInit(): void {
    this._ticketFormPresenter.ticketFormData$.subscribe((ticket: Ticket) => {
      this.isEditMode ? this.editTicket.emit(ticket) : this.addTicket.emit(ticket);
    });
  }

  /** on form submit */
  onSubmit() {
    this._ticketFormPresenter.onSubmit(this.ticketForm);
  }

  /** on form cancel */
  onCancel() {
    this._router.navigateByUrl('tickets');
  }

  /** get form controls */
  get formControls() {
    return this.ticketForm.controls;
  }
}
