import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from './ticket.model';

@Injectable()
export class TicketService {

  private url = 'http://localhost:3000/tickets';

  constructor(private _http: HttpClient) { }

  getTickets(): Observable<Ticket[]> {
    return this._http.get<Ticket[]>(this.url);
  }

  addTicket(ticket: Ticket) {
    return this._http.post<Ticket>(this.url, ticket);
  }

  deleteTicket(ticketId: number) {
    return this._http.delete<Ticket>(`${this.url}/${ticketId}`);
  }
}
