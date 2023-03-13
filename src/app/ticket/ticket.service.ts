import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, Ticket } from './ticket.model';

@Injectable()
export class TicketService {

  private url = 'http://localhost:3000/';

  constructor(private _http: HttpClient) { }

  getTickets(): Observable<Ticket[]> {
    return this._http.get<Ticket[]>(`${this.url}tickets`);
  }

  addTicket(ticket: Ticket) {
    return this._http.post<Ticket>(`${this.url}tickets`, ticket);
  }

  deleteTicket(ticketId: number) {
    return this._http.delete<Ticket>(`${this.url}tickets/${ticketId}`);
  }

  getCategories(): Observable<Category[]> {
    return this._http.get<Category[]>(`${this.url}categories`);
  }
}
