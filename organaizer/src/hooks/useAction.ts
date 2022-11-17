import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as ActionsCreators from "../store/action-creators/organize";

export const useAction = () => {
    const dispatch = useDispatch();
    return bindActionCreators(ActionsCreators, dispatch);
}