import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Observable, Subject } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { Ticket } from '../../ticket.model';

@Injectable()
export class TicketFormPresenterService {

  public verifiedForm$: Observable<Ticket>
  public verifiedForm: Subject<Ticket>

  constructor(
    private _fb: FormBuilder,
    private _auth: AuthService
  ) {
    this.verifiedForm = new Subject();
    this.verifiedForm$ = this.verifiedForm.asObservable();
  }

  bindForm() {
    return this._fb.group({
      category: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required],
      priority: ['', Validators.required],
      assignee: [''],
      status: [''],
      raisedBy: [''],
      updated: ['']
    })
  }

  onSubmit(ticketForm: FormGroup) {
    if (!ticketForm.valid) {
      return;
    }
    ticketForm.value.status = 'New';
    ticketForm.value.raisedBy = this.getUserName();
    ticketForm.value.assignee = this.setAssignee(ticketForm.value.category);
    ticketForm.value.updated = new Date().toISOString();
    this.verifiedForm.next(ticketForm.value);
  }

  getUserName(): string {
    const userDetails = this._auth?.getUserDetails();
    return `${userDetails?.name} ${userDetails?.lastName}` || '';
  }

  setAssignee(category: string): string {
    let assignee = '';
    switch (category) {
      case '1R University':
        assignee = 'Rukshar Rangara';
        break;
      case 'Account':
        assignee = 'Nishtha Vij';
        break;
      case 'Devops':
        assignee = 'Sarvesh Bhuva';
        break;
      case 'HR':
        assignee = 'Samim Shaikh';
        break;
      case 'Infrastructure':
        assignee = 'Neel Pardeshi';
        break;
      case 'Office Administration':
        assignee = 'Mayuri Patel';
        break;
      default:
        assignee = '';
    }

    return assignee;
  }
}
