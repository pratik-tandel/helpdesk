import { Component, EventEmitter, Input, Output } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import * as XLSX from 'xlsx';
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

  public fileName: string = 'Tickets';

  private _ticketList!: Ticket[] | null;

  constructor() {
    this.deleteTicket = new EventEmitter();
  }

  onDelete(ticketId: number) {
    this.deleteTicket.emit(ticketId);
  }

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
