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

  getTicketById(id: string): Observable<Ticket> {
    return this._http.get<Ticket>(`${this.url}tickets/${id}`);
  }

  addTicket(ticket: Ticket) {
    return this._http.post<Ticket>(`${this.url}tickets`, ticket);
  }

  editTicket(ticket: Ticket, ticketId: string) {
    return this._http.put<Ticket>(`${this.url}tickets/${ticketId}`, ticket);
  }

  deleteTicket(ticketId: number) {
    return this._http.delete<Ticket>(`${this.url}tickets/${ticketId}`);
  }

  getCategories(): Observable<Category[]> {
    return this._http.get<Category[]>(`${this.url}categories`);
  }
}
