import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { LoginAdapter } from './login.adapter';
import { LoginService } from './login.service';

describe("LoginService", () => {
  let service: LoginService;
  let httpMock: HttpTestingController;
  let url: string = environment.apiUrl;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        LoginService,
        LoginAdapter
      ]
    });
    service = TestBed.inject(LoginService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get employees', () => {
    service.getRegisteredEmployees().subscribe((employee) => {
      expect(employee).toBeTruthy();
    });

    const req = httpMock.expectOne(`${url}/employees`);
    expect(req.request.method).toBe('GET');
  });

});
