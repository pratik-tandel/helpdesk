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
  @Input() public set categories(value: Category[] | null) {
    if (value) {
      this._categories = value;
    }
  }

  public get categories(): Category[] | null {
    return this._categories;
  }

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

  @Output() public addTicket: EventEmitter<Ticket>;
  @Output() public editTicket: EventEmitter<Ticket>;

  public ticketForm: FormGroup;
  public selectedCategory!: string;
  public isEditMode: boolean;

  private _categories!: Category[];
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
    this._ticketFormPresenter.verifiedForm$.subscribe((ticket: Ticket) => {
      this.isEditMode ? this.editTicket.emit(ticket) : this.addTicket.emit(ticket);
    });
  }

  onSubmit() {
    this._ticketFormPresenter.onSubmit(this.ticketForm);
  }

  onCancel() {
    this._router.navigateByUrl('tickets');
  }

  get formControls() {
    return this.ticketForm.controls;
  }
}
