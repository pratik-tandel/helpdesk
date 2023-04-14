import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TicketListPresentationComponent } from './ticket-list-presentation.component';
import { TicketListPresenterService } from '../ticket-list-presenter/ticket-list-presenter.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { TICKETS } from 'factory/api-data';

describe('TicketListPresentationComponent', () => {
  let component: TicketListPresentationComponent;
  let fixture: ComponentFixture<TicketListPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TicketListPresentationComponent],
      imports: [
        FormsModule,
        SharedModule
      ],
      providers: [TicketListPresenterService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TicketListPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('onDelete should emit ticket id', () => {
    const deleteEmitMock = spyOn(component.deleteTicket, 'emit');
    component.onDelete(1);
    expect(deleteEmitMock).toHaveBeenCalled();
  });

  it('onSearch should return filtered tickets', () => {
    component.onSearch('Infra');
    expect(component.filteredTickets.length).toBe(0);

    component.ticketList = TICKETS;
    component.onSearch('Infra');
    expect(component.filteredTickets.length).toBe(1);
  });

});
