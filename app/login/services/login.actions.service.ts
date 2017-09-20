import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState } from '../../../app/redux/app.state';
import { createAction } from "../../../app/redux/action-creator"
import { Login } from "../model/login.model";

export abstract class ILoginActionsService
{
  abstract login(credentials: Login);
  abstract logout();
}

@Injectable()
export class LoginActionsService implements ILoginActionsService{

  static LOGIN_USER_PENDING = 'LOGIN_USER_PENDING';
  static LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
  static LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';
  static LOGOUT_USER = 'LOGOUT_USER';

  constructor(private store: Store<AppState>, private router: Router) { }

  login(credentials: Login) {
    this.store.dispatch(createAction("LOGIN_USER_PENDING"))
    if (credentials.email === 'user' && credentials.password === 'password') {
      this.store.dispatch(createAction("LOGIN_USER_SUCCESS", credentials))
      this.router.navigate(['/inventory']);
    }
    else
    {
      this.store.dispatch(createAction("LOGIN_USER_ERROR", credentials))
    }

  }

  logout(){
    this.store.dispatch(createAction("LOGOUT_USER"))
  }
}