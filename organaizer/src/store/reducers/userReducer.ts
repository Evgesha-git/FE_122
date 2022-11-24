import {IUser, UserAction, UserActionType} from "../../type/userTypes";

const initialState: IUser = {
    user: null,
    loading: false,
    error: null,
}

export const userReducer = (state = initialState, action: UserAction): IUser => {
    switch (action.type){
        case UserActionType.FETCH_USER:
            return {user: null, error: null, loading: true};
        case UserActionType.USER_SUCCESS:
            return {user: action.payload, error: null, loading: false};
        case UserActionType.REGISTER_USER:
            return {user: action.payload, error: null, loading: false};
        case UserActionType.LOGOUT_USER:
            return {user: null, error: null, loading: false};
        case UserActionType.ERROR_USER:
            return {user: null, error: action.payload, loading: false};
        default:
            return state;
    }
}