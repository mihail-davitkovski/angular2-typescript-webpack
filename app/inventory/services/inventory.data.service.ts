import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import { AppState } from "../../redux/app.state";
import { Product } from "../model/product.model";


@Injectable()
export class InventoryDataService {

  constructor(private store: Store<AppState>) {}

  getProducts(): Observable<Array<Product>> {
    return this.store.select(appState => appState.inventory.products)
  }
}

