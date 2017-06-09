import { Action } from '@ngrx/store';
import { Login } from "./model/login.model";

const defaultLoginState: Login =
    {
        email: null,
        password: null,
        status: false
    }
export const loginReducer = (state: Login = defaultLoginState, action: Action) => {
    switch (action.type) {
        case "LOGIN_USER_SUCCESS":
            return Object.assign({}, state, { email: action.payload.email, password: action.payload.password, status: true })
        case "LOGIN_USER_ERROR":
            return Object.assign({}, state, { email: null, password: null })
        case "LOGOUT":
            return Object.assign({}, state, { email: null, password: null })
        default:
            return state;
    }
}