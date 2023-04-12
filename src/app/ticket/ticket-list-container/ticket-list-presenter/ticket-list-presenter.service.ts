import { Injectable } from '@angular/core';
import { Ticket } from '../../ticket.model';

@Injectable()
export class TicketListPresenterService {

  /**
   * filter tickets based on search keyword
   * @param tickets tickets list
   * @param searchKey search keyword
   * @returns filtered tickets list
   */
  filterTickets(tickets: Ticket[], searchKey: string): Ticket[] | [] {
    return tickets?.filter((ticket: Ticket) =>
      (ticket?.assignee?.toLowerCase()?.includes(searchKey?.toLowerCase()?.trim()) ||
      ticket?.category?.toLowerCase()?.includes(searchKey?.toLowerCase()?.trim()) ||
      ticket?.raisedBy?.toLowerCase()?.includes(searchKey?.toLowerCase()?.trim()) ||
      ticket?.status?.toLowerCase()?.includes(searchKey?.toLowerCase()?.trim()) ||
      ticket?.subject?.toLowerCase()?.includes(searchKey?.toLowerCase()?.trim()))
    )
  }
}
