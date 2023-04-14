import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from '@angular/core/testing';
import { TicketListPresenterService } from './ticket-list-presenter.service';

describe("TicketListPresenterService", () => {
  let service: TicketListPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TicketListPresenterService]
    });
    service = TestBed.inject(TicketListPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
