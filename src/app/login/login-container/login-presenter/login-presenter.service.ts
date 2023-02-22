import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';

@Injectable()
export class LoginPresenterService {
  public verifiedForm$: Observable<any>
  public verifiedForm: Subject<any>

  constructor(private _formBuilder: FormBuilder) {
    this.verifiedForm = new Subject();
    this.verifiedForm$ = this.verifiedForm.asObservable(); /* stored subject variable to asObservable */
  }

  /**apply validation */
  bindform() {
    return this._formBuilder?.group(
      {
        userName: ['', Validators.required],
        password: ['', Validators.required]
      })
  }

  /**Checked username and password */
  public loginUsers(loginForm: FormGroup, loginList: any): number {
    if (loginForm.valid) {
      this.verifiedForm.next(loginForm.value);
      console.log("loginlist", loginList)
      let result = loginList.findIndex((res: any) => loginForm.value.userName === res.userName && loginForm.value.password === res.password);
      console.log("result", result)
      return result;
    }
    return -1;
  }
}
