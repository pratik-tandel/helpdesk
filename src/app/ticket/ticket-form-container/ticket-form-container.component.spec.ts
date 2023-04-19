import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { TICKET_FORM } from 'factory/api-data';
import { routerStub, ticketServiceStub, toastrStub } from 'factory/stubs';
import { ToastrService } from 'ngx-toastr';
import { TicketService } from '../ticket.service';
import { TicketFormContainerComponent } from './ticket-form-container.component';
import { TicketFormPresentationComponent } from './ticket-form-presentation/ticket-form-presentation.component';

describe('TicketFormContainerComponent', () => {
  let component: TicketFormContainerComponent;
  let fixture: ComponentFixture<TicketFormContainerComponent>;

  const activatedRouteStub = {
    snapshot: {
      params: {
        id: '1'
      }
    }
  }


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TicketFormContainerComponent,
        TicketFormPresentationComponent
      ],
      imports: [
        ReactiveFormsModule,
        NgSelectModule
      ],
      providers: [
        // ActivatedRoute,
        { provide: TicketService, useValue: ticketServiceStub },
        { provide: ToastrService, useValue: toastrStub },
        { provide: ActivatedRoute, useValue: activatedRouteStub },
        { provide: Router, useValue: routerStub }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TicketFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('onAddTicket should add ticket', () => {
    const spy = spyOn(toastrStub, 'success');
    fixture.debugElement.query(By.css('app-ticket-form-ui')).triggerEventHandler('addTicket', TICKET_FORM);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('onEditTicket should add ticket', () => {
    const spy = spyOn(toastrStub, 'success');
    fixture.debugElement.query(By.css('app-ticket-form-ui')).triggerEventHandler('editTicket', TICKET_FORM);
    expect(spy).toHaveBeenCalledTimes(1);
  });

});
