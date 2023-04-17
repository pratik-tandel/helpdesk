import { TestBed } from '@angular/core/testing';
import { RegistrationFormPresenterService } from "./registration-form-presenter.service";

describe("RegistrationFormPresenterService", () => {
  let service: RegistrationFormPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegistrationFormPresenterService]
    });
    service = TestBed.inject(RegistrationFormPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
