import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterComponent } from './core/component/master/master.component';
import { AuthGuard } from './core/guard/auth.guard';

const routes: Routes = [
  /**MasterComponent target to <app-root></app-root> (index.html)  */
  {
    path: '',
    component: MasterComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'tickets',
        pathMatch: 'full'
      },
      {
        path: 'tickets',
        loadChildren: () => import('./ticket/ticket.module').then(m => m.TicketModule)
      }
    ]
  },
  /**lazy loading of registration module */
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule)
  },
  /**lazy loading of login module */
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
