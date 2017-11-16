import { Action } from '@ngrx/store';

import { Inventory } from "./model/inventory.model";
import { InventoryActionType } from "./model/action.types";
import { ActionWithPayload } from "../../app/redux/action-with-payload.model";

import {Product} from  "./model/product.model";

const defaultInventoryState: Inventory =
{
    isFetching: false,
    products: []
}

export const inventoryReducer = (state: Inventory = defaultInventoryState, action: ActionWithPayload<Product>) => {
    switch (action.type) {
        case InventoryActionType.REQUEST_PRODUCTS_STARTED.toString():
            return {...state, isFetching: true };

        case InventoryActionType.RECEIVE_PRODUCTS_FINSIHED.toString():
            return {...state, isFetching: false, products: action.payload };
        default:
            return state;
    }
}