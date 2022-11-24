import {User} from "firebase/auth"

export interface IUser {
    user: User | null ,
    loading: boolean,
    error: null | string,
}

export enum UserActionType {
    FETCH_USER = "FETCH_USER",
    USER_SUCCESS = "USER_SUCCESS",
    REGISTER_USER = "REGISTER_USER",
    LOGOUT_USER = "LOGOUT_USER",
    ERROR_USER = "ERROR_USER"
}

interface FetchUserAction {
    type: UserActionType.FETCH_USER,
}

interface UserSuccessAction {
    type: UserActionType.USER_SUCCESS,
    payload: User,
}

interface RegisterUserAction {
    type: UserActionType.REGISTER_USER,
    payload: User,
}

interface LogoutUserAction {
    type: UserActionType.LOGOUT_USER,
}

interface ErrorUserAction {
    type: UserActionType.ERROR_USER,
    payload: string,
}

export type UserAction =
    FetchUserAction
    | UserSuccessAction
    | RegisterUserAction
    | LogoutUserAction
    | ErrorUserAction;