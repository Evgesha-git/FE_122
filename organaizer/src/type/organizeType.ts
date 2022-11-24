export interface ITask {
    id: string,
    date: string,
    title: string,
    description: string,
}

interface IUser {
    id: string,
    name: string,
    tasks: Array<ITask> | null,
}

export interface OrganizeState {
    user: IUser,
    loading: boolean,
    error: string | null,
    success: string | null,
}

export enum OrganizeActionTypes {
    FETCH_ORGANIZE = "FETCH_ORGANIZE",
    GET_ORGANIZE = "GET_ORGANIZE",
    SET_ORGANIZE = "SET_ORGANIZE",
    REMOVE_TASK = "REMOVE_TASK",
    EDIT_TASK = "EDIT_TASK",
    ERROR_ORGANIZE = "ERROR_ORGANIZE",
    CLEAR_ORGANIZE = "CLEAR_ORGANIZE"
}

interface FetchOrganizeAction {
    type: OrganizeActionTypes.FETCH_ORGANIZE,
}

interface GetOrganizeAction {
    type: OrganizeActionTypes.GET_ORGANIZE,
    payload: IUser,
}

interface SetOrganizeAction {
    type: OrganizeActionTypes.SET_ORGANIZE,
    payload: string,
}

interface RemoveOrganizeAction {
    type: OrganizeActionTypes.REMOVE_TASK,
    payload: string
}

interface EditOrganizeAction {
    type: OrganizeActionTypes.EDIT_TASK,
    payload: string,
}

interface ErrorOrganizeAction {
    type: OrganizeActionTypes.ERROR_ORGANIZE,
    payload: string
}

interface ClearOrginizeAction {
    type: OrganizeActionTypes.CLEAR_ORGANIZE
}

export type OrganizeAction =
    FetchOrganizeAction
    | GetOrganizeAction
    | SetOrganizeAction
    | RemoveOrganizeAction
    | EditOrganizeAction
    | ErrorOrganizeAction
    | ClearOrginizeAction;