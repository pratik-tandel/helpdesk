import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TicketListContainerComponent } from './ticket-list-container.component';
import { TicketService } from '../ticket.service';
import { ticketServiceStub, toastrStub } from 'factory/stubs';
import { ToastrService } from 'ngx-toastr';
import { TicketListPresentationComponent } from './ticket-list-presentation/ticket-list-presentation.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('TicketListContainerComponent', () => {
  let component: TicketListContainerComponent;
  let fixture: ComponentFixture<TicketListContainerComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TicketListContainerComponent,
        TicketListPresentationComponent
      ],
      imports: [
        FormsModule,
        RouterTestingModule,
        SharedModule
      ],
      providers: [
        { provide: TicketService, useValue: ticketServiceStub },
        { provide: ToastrService, useValue: toastrStub }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TicketListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('on delete ticket should delete tickets', () => {
    const spy = spyOn(toastrStub, 'success');
    fixture.debugElement.query(By.css('app-ticket-list-ui')).triggerEventHandler('deleteTicket', 1);
    expect(spy).toHaveBeenCalledTimes(1);
  });

});
