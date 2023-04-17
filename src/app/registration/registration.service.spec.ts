import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { EMPLOYEES } from 'factory/api-data';
import { RegistrationService } from './registration.service';
import { environment } from 'src/environments/environment';

describe("RegistrationService", () => {
  let service: RegistrationService;
  let httpMock: HttpTestingController;
  let url: string = environment.apiUrl;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RegistrationService]
    });
    service = TestBed.inject(RegistrationService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add employee', () => {
    service.addEmployee(EMPLOYEES[1]).subscribe((employee) => {
      expect(employee).toBeTruthy();
    });

    const req = httpMock.expectOne(`${url}/employees`);
    expect(req.request.method).toBe('POST');
  });

  it('should get employees', () => {
    service.getRegisteredEmployees().subscribe((employees) => {
      expect(employees).toBeTruthy();
    });

    const req = httpMock.expectOne(`${url}/employees`);
    expect(req.request.method).toBe('GET');
  });

});
