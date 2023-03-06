import { TestBed } from '@angular/core/testing';

import { TicketFormPresenterService } from './ticket-form-presenter.service';

describe('TicketFormPresenterService', () => {
  let service: TicketFormPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketFormPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
