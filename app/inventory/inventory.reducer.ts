import { Action } from '@ngrx/store';
import { Inventory } from "./model/inventory.model";
import { InventoryActionType } from "./model/action.types";

const defaultInventoryState: Inventory =
    {
        isFetching: false,
        products: []
    }
export const inventoryReducer = (state: Inventory = defaultInventoryState, action: Action) => {
    switch (action.type) {
        case InventoryActionType.REQUEST_PRODUCTS_STARTED.toString():
            return Object.assign({}, state, { isFetching: true })

        case InventoryActionType.RECEIVE_PRODUCTS_FINSIHED.toString():
            return Object.assign({}, state, { isFetching: false, products: action.payload })
        default:
            return state;
    }
}