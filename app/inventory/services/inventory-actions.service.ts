import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { InventoryActionType } from "../model/action.types";
import { AppState } from '../../../app/redux/app.state';
import { createAction } from "../../../app/redux/action-creator"
import { Product } from "../model/product.model";
import { Inventory } from '../model/inventory.model';

interface ProductsResponse {
  results: Product[];
}

@Injectable()
export class InventoryActionsService {
  private productsUrl = 'api/products';  // URL to web api

  constructor(private store: Store<AppState>, private http: HttpClient) { }

  getAllProducts() {
    alert(this.productsUrl);
    this.store.dispatch(createAction(InventoryActionType.REQUEST_PRODUCTS_STARTED.toString()));
    this.http
      .get<ProductsResponse>(this.productsUrl)
      .subscribe(data => {
        var products = data.results;
        this.store.dispatch(createAction<Product[]>(InventoryActionType.RECEIVE_PRODUCTS_FINSIHED.toString(), products))
      })
  }
}