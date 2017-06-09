import { Login } from './../login/model/login.model';
import {Inventory} from "../../app/inventory/model/inventory.model"

export interface AppState {
    readonly inventory: Inventory;
    readonly login: Login;
}