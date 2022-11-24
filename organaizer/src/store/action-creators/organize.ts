import {Dispatch} from "redux";
import {OrganizeAction, OrganizeActionTypes, ITask} from "../../type/organizeType";
import {child, get, ref, set, update} from "firebase/database";
import {databese} from "../../utils/configDb";

export const getOrganize = (uId: string | undefined) => {
    return async (dispatch: Dispatch<OrganizeAction>) => {
        try {
            dispatch({type: OrganizeActionTypes.FETCH_ORGANIZE});
            const response = await get(child(ref(databese), `organize/${uId}`));
            if (response.exists()) {
                dispatch({type: OrganizeActionTypes.GET_ORGANIZE, payload: response.val()})
            } else {
                throw new Error();
            }
        } catch (e) {
            dispatch({type: OrganizeActionTypes.ERROR_ORGANIZE, payload: 'Произошла ошибка'});
        }
    }
}

export const setOrganize = (uId: string | undefined, task: ITask, name: string | null | undefined) => {
    return async (dispatch: Dispatch<OrganizeAction>) => {
        try {
            dispatch({type: OrganizeActionTypes.FETCH_ORGANIZE});
            set(ref(databese, `organize/${uId}`), {
                id: uId,
                name: name,
                tasks: [task],
            });
            dispatch({type: OrganizeActionTypes.SET_ORGANIZE, payload: 'Данные успешно отправлены'});
        } catch (e) {
            dispatch({type: OrganizeActionTypes.ERROR_ORGANIZE, payload: 'Произошла ошибка'});
        }
    }
}

export const editOrganize = (uId: string | undefined, task: ITask) => {
    return async (dispatch: Dispatch<OrganizeAction>) => {
        try {
            dispatch({type: OrganizeActionTypes.FETCH_ORGANIZE});
            const response = await get(child(ref(databese), `organize/${uId}`));
            if (response.exists()) {
                const oldTasks = response.val();
                oldTasks.tasks = [...oldTasks.tasks, task];
                await update(ref(databese, `organize/${uId}`), oldTasks);
                dispatch({type: OrganizeActionTypes.SET_ORGANIZE, payload: 'Данные успешно отправлены'});
            } else {
                throw new Error()
            }
        } catch (e) {
            dispatch({type: OrganizeActionTypes.ERROR_ORGANIZE, payload: 'Произошла ошибка'});
        }
    }
}

export const clearOrganize = () => {
    return async (dispatch: Dispatch<OrganizeAction>) => {
        dispatch({type: OrganizeActionTypes.CLEAR_ORGANIZE});
    }
}