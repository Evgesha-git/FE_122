import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as customersActionCreater from "../store/action-creater/customersAction";

export const useAction = () => {
    const dispatch = useDispatch();
    return bindActionCreators(customersActionCreater, dispatch);
}