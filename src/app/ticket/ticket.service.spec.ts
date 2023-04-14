import { TestBed } from '@angular/core/testing';
import { TicketService } from "./ticket.service";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TICKET_FORM } from 'factory/api-data';

describe("TicketService", () => {
  let service: TicketService;
  let httpMock: HttpTestingController;
  let url: string = 'http://localhost:3000/';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TicketService]
    });
    service = TestBed.inject(TicketService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get tickets', () => {
    service.getTickets().subscribe((tickets) => {
      expect(tickets).toBeTruthy();
    });

    const req = httpMock.expectOne(`${url}tickets`);
    expect(req.request.method).toBe('GET');
  });

  it('should get ticket details by id', () => {
    const ticketId = '1';
    service.getTicketById(ticketId).subscribe((ticket) => {
      expect(ticket).toBeTruthy();
    });

    const req = httpMock.expectOne(`${url}tickets/${ticketId}`);
    expect(req.request.method).toBe('GET');
  });

  it('should add ticket', () => {
    service.addTicket(TICKET_FORM).subscribe((ticket) => {
      expect(ticket).toBeTruthy();
    });

    const req = httpMock.expectOne(`${url}tickets`);
    expect(req.request.method).toBe('POST');
  });

  it('should edit ticket', () => {
    const ticketId = '1';
    service.editTicket(TICKET_FORM, ticketId).subscribe((ticket) => {
      expect(ticket).toBeTruthy();
    });

    const req = httpMock.expectOne(`${url}tickets/${ticketId}`);
    expect(req.request.method).toBe('PUT');
  });

  it('should delete ticket', () => {
    const ticketId = 1;
    service.deleteTicket(ticketId).subscribe((ticket) => {
      expect(ticket).toBeTruthy();
    });

    const req = httpMock.expectOne(`${url}tickets/${ticketId}`);
    expect(req.request.method).toBe('DELETE');
  });

  it('should get categories', () => {
    service.getCategories().subscribe((categories) => {
      expect(categories).toBeTruthy();
    });

    const req = httpMock.expectOne(`${url}categories`);
    expect(req.request.method).toBe('GET');
  });
});
