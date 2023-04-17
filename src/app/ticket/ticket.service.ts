import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category, Ticket } from './ticket.model';

@Injectable()
export class TicketService {

  private url = environment.apiUrl;

  constructor(private _http: HttpClient) { }

  /**
   * get tickets list
   * @returns ticket list
   */
  getTickets(): Observable<Ticket[]> {
    return this._http.get<Ticket[]>(`${this.url}/tickets`);
  }

  /**
   * get ticket details by id
   * @param ticketId ticket Id
   * @returns ticket details
   */
  getTicketById(ticketId: string): Observable<Ticket> {
    return this._http.get<Ticket>(`${this.url}/tickets/${ticketId}`);
  }

  /**
   * add new ticket
   * @param ticket ticket data
   */
  addTicket(ticket: Ticket) {
    return this._http.post<Ticket>(`${this.url}/tickets`, ticket);
  }

  /**
   * edit existing ticket
   * @param ticket ticket data
   * @param ticketId ticket id
   */
  editTicket(ticket: Ticket, ticketId: string) {
    return this._http.put<Ticket>(`${this.url}/tickets/${ticketId}`, ticket);
  }

  /**
   * delete existing ticket 
   * @param ticketId ticket id
   */
  deleteTicket(ticketId: number) {
    return this._http.delete<Ticket>(`${this.url}/tickets/${ticketId}`);
  }

  /**
   * get categories
   * @returns category list
   */
  getCategories(): Observable<Category[]> {
    return this._http.get<Category[]>(`${this.url}/categories`);
  }
}
