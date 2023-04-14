import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { TICKETS } from 'factory/api-data';
import { TICKET_FORMGROUP, routerStub, ticketServiceStub } from 'factory/stubs';
import { TicketService } from '../../ticket.service';
import { TicketFormPresenterService } from '../ticket-form-presenter/ticket-form-presenter.service';
import { TicketFormPresentationComponent } from './ticket-form-presentation.component';

describe('TicketFormPresentationComponent', () => {
    let component: TicketFormPresentationComponent;
    let fixture: ComponentFixture<TicketFormPresentationComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TicketFormPresentationComponent],
            imports: [
                ReactiveFormsModule,
                NgSelectModule
            ],
            providers: [
                TicketFormPresenterService,
                { provide: TicketService, useValue: ticketServiceStub },
                { provide: Router, useValue: routerStub }
            ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(TicketFormPresentationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('onSubmit should add or edit ticket', () => {
        component.ticketForm = TICKET_FORMGROUP as FormGroup;
        const addEmitMock = spyOn(component.addTicket, 'emit');
        component.onSubmit();
        expect(addEmitMock).toHaveBeenCalledTimes(1);
        
        const editEmitMock = spyOn(component.editTicket, 'emit');
        component.isEditMode = true;
        component.onSubmit();
        expect(editEmitMock).toHaveBeenCalledTimes(1);
    });

    it('input should ticket data', () => {
        component.ticketData = TICKETS[0];
        expect(component.ticketForm.value.category).toEqual('Infrastructure');

        const data = component.ticketData;
        expect(data.category).toEqual('Infrastructure');
    });

});
