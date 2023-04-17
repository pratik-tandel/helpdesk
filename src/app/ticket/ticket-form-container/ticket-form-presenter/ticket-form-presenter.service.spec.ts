import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from '@angular/core/testing';
import { TicketFormPresenterService } from "./ticket-form-presenter.service";
import { ASSIGNEE, CATEGORY } from "src/app/core/utility/constant";

describe("TicketFormPresenterService", () => {
  let service: TicketFormPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        TicketFormPresenterService
      ]
    });
    service = TestBed.inject(TicketFormPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('setAssignee should return assignee', () => {
    let assignee = service.setAssignee(CATEGORY.UNIVERSITY);
    expect(assignee).toBe(ASSIGNEE.UNIVERSITY);

    assignee = service.setAssignee(CATEGORY.ACCOUNT);
    expect(assignee).toBe(ASSIGNEE.ACCOUNT);

    assignee = service.setAssignee(CATEGORY.DEVOPS);
    expect(assignee).toBe(ASSIGNEE.DEVOPS);

    assignee = service.setAssignee(CATEGORY.HR);
    expect(assignee).toBe(ASSIGNEE.HR);

    assignee = service.setAssignee(CATEGORY.INFRASTRUCTURE);
    expect(assignee).toBe(ASSIGNEE.INFRASTRUCTURE);

    assignee = service.setAssignee(CATEGORY.OFFICE_ADMINSTRATION);
    expect(assignee).toBe(ASSIGNEE.OFFICE_ADMINSTRATION);

    assignee = service.setAssignee('Others');
    expect(assignee).toBe(ASSIGNEE.DEFAULT);
  });
});
