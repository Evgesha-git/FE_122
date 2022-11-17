import {OrganizeAction, OrganizeActionTypes, OrganizeState} from "../../type/organizeType"

const initialState: OrganizeState = {
    user: {
        id: '',
        name: '',
        tasks: null
    },
    loading: false,
    error: null,
    success: ''
}

export const organizeReducer = (state = initialState, action: OrganizeAction) => {
    switch (action.type) {
        case OrganizeActionTypes.FETCH_ORGANIZE:
            return {loading: true, success: '', error: null, user: state.user};
        case OrganizeActionTypes.GET_ORGANIZE:
            return {loading: false, error: null, success: '', user: action.payload};
        case OrganizeActionTypes.SET_ORGANIZE:
            return {loading: false, error: null, success: action.payload, user: state.user};
        case OrganizeActionTypes.EDIT_TASK:
            return {loading: false, error: null, success: action.payload, user: state.user};
        case OrganizeActionTypes.REMOVE_TASK:
            return {loading: false, error: null, success: action.payload, user: state.user};
        case OrganizeActionTypes.ERROR_ORGANIZE:
            return {loading: false, error: action.payload, user: state.user, success: ''};
        default:
            return state;
    }
}