import { Component, EventEmitter, Input, Output } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import * as XLSX from 'xlsx';
import { Ticket } from '../../ticket.model';
import { TicketListPresenterService } from '../ticket-list-presenter/ticket-list-presenter.service';

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
  exportExcel(): void {
    /* table id */
    let element = document.getElementById('ticket-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Tickets');
    /* save to file */
    XLSX.writeFile(wb, `${this.fileName}.xls`);
  }

  /** export table to pdf */
  public exportPdf(): void {
    let DATA: any = document.getElementById('ticket-table');
    html2canvas(DATA).then((canvas: any) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save(`${this.fileName}.pdf`);
    });
  }
}
