import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState } from '../../../app/redux/app.state';
import { createAction } from "../../../app/redux/action-creator"
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { InventoryActionType } from "../model/action.types";

@Injectable()
export class InventoryActionsService {

  constructor(private store: Store<AppState>, private http: Http) { }

  getAllProducts() {
    this.store.dispatch(createAction(InventoryActionType.REQUEST_PRODUCTS_STARTED.toString()));
    this.http
      .get('http://localhost:3000/app/inventory/products.json')
      .map(response => response.json())
      .subscribe(data => this.store.dispatch(createAction(InventoryActionType.RECEIVE_PRODUCTS_FINSIHED.toString(), data)))
  }
}