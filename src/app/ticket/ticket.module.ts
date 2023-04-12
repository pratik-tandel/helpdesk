import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { TicketFormContainerComponent } from './ticket-form-container/ticket-form-container.component';
import { TicketFormPresentationComponent } from './ticket-form-container/ticket-form-presentation/ticket-form-presentation.component';
import { TicketListContainerComponent } from './ticket-list-container/ticket-list-container.component';
import { TicketListPresentationComponent } from './ticket-list-container/ticket-list-presentation/ticket-list-presentation.component';
import { TicketRoutingModule } from './ticket-routing.module';
import { TicketService } from './ticket.service';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    TicketFormContainerComponent,
    TicketFormPresentationComponent,
    TicketListContainerComponent,
    TicketListPresentationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TicketRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule
  ],
  providers: [
    TicketService
  ]
})
export class TicketModule { }
