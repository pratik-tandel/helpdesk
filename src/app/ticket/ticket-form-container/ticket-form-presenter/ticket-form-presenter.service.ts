import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Observable, Subject } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { Ticket } from '../../ticket.model';

@Injectable()
export class TicketFormPresenterService {
  /** ticket formdata observable */
  public ticketFormData$: Observable<Ticket>
  /** ticket formdata subject */
  public ticketFormData: Subject<Ticket>

  constructor(
    private _fb: FormBuilder,
    private _auth: AuthService
  ) {
    this.ticketFormData = new Subject();
    this.ticketFormData$ = this.ticketFormData.asObservable();
  }

  /** bind form controls */
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

  /**
   * check if form is valid
   * @param ticketForm 
   */
  onSubmit(ticketForm: FormGroup) {
    if (!ticketForm.valid) {
      return;
    }
    ticketForm.value.status = 'New';
    ticketForm.value.raisedBy = this.getUserName();
    ticketForm.value.assignee = this.setAssignee(ticketForm.value.category);
    ticketForm.value.updated = new Date().toISOString();
    this.ticketFormData.next(ticketForm.value);
  }

  /** get logged in username */
  getUserName(): string {
    const userDetails = this._auth?.getUserDetails();
    return `${userDetails?.name} ${userDetails?.lastName}` || '';
  }

  /**
   * sets default assignee to a ticket
   * @param category category name
   * @returns assignee name
   */
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
