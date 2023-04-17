import { Component, EventEmitter, Input, Output } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import * as XLSX from 'xlsx';
import { Ticket } from '../../ticket.model';
import { TicketListPresenterService } from '../ticket-list-presenter/ticket-list-presenter.service';
import { exportToExcel, exportToPdf } from 'src/app/core/utility/export';

@Component({
  selector: 'app-ticket-list-ui',
  templateUrl: './ticket-list-presentation.component.html',
  viewProviders: [TicketListPresenterService]
})
export class TicketListPresentationComponent {
  /** setter for ticket list */
  @Input() public set ticketList(value: Ticket[] | null) {
    if (value) {
      this._ticketList = value;
      this.filteredTickets = value;
    }
  }

  public get ticketList(): Ticket[] | null {
    return this._ticketList;
  }

  /** delete ticket eventemitter */
  @Output() public deleteTicket: EventEmitter<number>;

  /** filename to be saved */
  public fileName: string = 'Tickets';
  /** filtered tickets list */
  public filteredTickets: Ticket[];

  /** tickets list */
  private _ticketList!: Ticket[] | null;

  constructor(
    private _ticketListPresenter: TicketListPresenterService
  ) {
    this.filteredTickets = [];
    this.deleteTicket = new EventEmitter();
  }

  /** on delete click */
  onDelete(ticketId: number) {
    this.deleteTicket.emit(ticketId);
  }

  /** on search tickets */
  onSearch(searchKey: string) {
    this.filteredTickets = this._ticketListPresenter.filterTickets(this.ticketList || [], searchKey);
  }

  /** export table to excel */
  downloadExcel(): void {
    /* table id */
    let element = document.getElementById('ticket-table');
    if (element) {
      exportToExcel(element, this.fileName);
    }
  }

  /** export table to pdf */
  public downloadPdf(): void {
    let element = document.getElementById('ticket-table');
    if (element) {
      exportToPdf(element, this.fileName);
    }
  }
}
