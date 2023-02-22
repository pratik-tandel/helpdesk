import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketRoutingModule } from './ticket-routing.module';
import { TicketFormContainerComponent } from './ticket-form-container/ticket-form-container.component';
import { TicketFormPresentationComponent } from './ticket-form-container/ticket-form-presentation/ticket-form-presentation.component';
import { TicketListContainerComponent } from './ticket-list-container/ticket-list-container.component';
import { TicketListPresentationComponent } from './ticket-list-container/ticket-list-presentation/ticket-list-presentation.component';
import { TicketComponent } from './ticket.component';
import { TicketService } from './ticket.service';


@NgModule({
  declarations: [
    TicketFormContainerComponent,
    TicketFormPresentationComponent,
    TicketListContainerComponent,
    TicketListPresentationComponent,
    TicketComponent
  ],
  imports: [
    CommonModule,
    TicketRoutingModule
  ],
  providers:[
    TicketService
  ]
})
export class TicketModule { }
