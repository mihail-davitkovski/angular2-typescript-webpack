import {Inventory} from "../../app/inventory/model/inventory.model"

export interface AppState {
    readonly inventory: Inventory;
}