import { loginReducer } from './../login/login.reducer';
import { inventoryReducer } from "../inventory/inventory.reducer";

export const rootReducer = {
  inventory: inventoryReducer,
  login: loginReducer
};