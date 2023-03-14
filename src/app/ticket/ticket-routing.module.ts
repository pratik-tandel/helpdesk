import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketFormContainerComponent } from './ticket-form-container/ticket-form-container.component';
import { TicketListContainerComponent } from './ticket-list-container/ticket-list-container.component';
import { TicketComponent } from './ticket.component';

const routes: Routes = [
  {
    path: '',
    component: TicketComponent,
    children: [
      {
        path: '',
        component: TicketListContainerComponent,
      },
      {
        path: 'add',
        component: TicketFormContainerComponent
      },
      {
        path: 'edit/:id',
        component: TicketFormContainerComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketRoutingModule { }
