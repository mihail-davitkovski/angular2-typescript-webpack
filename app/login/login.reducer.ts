import { Action } from '@ngrx/store';
import { Login } from "./model/login.model";
import { ActionWithPayload } from "../../app/redux/action-with-payload.model";

const defaultLoginState: Login =
{
    email: null,
    password: null,
    status: false
}

export const loginReducer = (state: Login = defaultLoginState, action: ActionWithPayload<Login>) => {
    switch (action.type) {
        case "LOGIN_USER_SUCCESS":
            return {...state, email: action.payload.email, password: action.payload.password, status: true };
        case "LOGIN_USER_ERROR":
            return {...state, email: null, password: null};
        case "LOGOUT":
            return {...state, email: null, password: null};
        default:
            return state;
    }
}