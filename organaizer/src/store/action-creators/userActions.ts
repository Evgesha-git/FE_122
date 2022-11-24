import {UserAction, UserActionType} from "../../type/userTypes";
import {auth} from "../../utils/configDb";
import {GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut} from "firebase/auth";
import {Dispatch} from "redux";

export const logInWithGoogle = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        dispatch({type: UserActionType.FETCH_USER});
        try {
            const provider = new GoogleAuthProvider();
            const {user} = await signInWithPopup(auth, provider);
            dispatch({type: UserActionType.USER_SUCCESS, payload: user});
        } catch (e: any) {
            dispatch({type: UserActionType.ERROR_USER, payload: e.message});
        }
    }
}

export const loginWithEmail = (email: string, password: string) => {
    return async (dispatch: Dispatch<UserAction>) => {
        dispatch({type: UserActionType.FETCH_USER});
        try {
            const {user} = await signInWithEmailAndPassword(auth, email, password);
            dispatch({type: UserActionType.USER_SUCCESS, payload: user});
        } catch (e: any) {
            dispatch({type: UserActionType.ERROR_USER, payload: e.message});
        }
    }
}

export const regiterUserEmail = (email: string, password: string) => {
    return async (dispatch: Dispatch<UserAction>) => {
        dispatch({type: UserActionType.FETCH_USER});
        try {
            const {user} = await createUserWithEmailAndPassword(auth, email, password);
            dispatch({type: UserActionType.REGISTER_USER, payload: user});
        } catch (e: any) {
            dispatch({type: UserActionType.ERROR_USER, payload: e.message});
        }
    }
}

export const logOutUser = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        dispatch({type: UserActionType.FETCH_USER});
        try {
            await signOut(auth);
            dispatch({type: UserActionType.LOGOUT_USER});
        } catch (e: any) {
            dispatch({type: UserActionType.ERROR_USER, payload: e.message});
        }
    }
}