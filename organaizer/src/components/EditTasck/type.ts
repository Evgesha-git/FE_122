import {Dispatch, FunctionComponent} from "react";

type state = {
    id: string,
    call: boolean,
}

export type PEdit = {
    id: string,
    closeEdit: Dispatch<state>,
    edit: state,
}

export type PEditComponent = FunctionComponent<PEdit>;