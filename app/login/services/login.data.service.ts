import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import { AppState } from "../../redux/app.state";

@Injectable()
export class LoginDataService {

  constructor(private store: Store<AppState>) {}

  isUserLoggedIn(): Observable<boolean> {
    return this.store.select(appState => appState.login.email!=null && appState.login.password!=null);
  }
}

