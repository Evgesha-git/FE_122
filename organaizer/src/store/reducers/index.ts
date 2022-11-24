import { combineReducers } from "redux";
import {organizeReducer} from "./organizeReducer";
import {userReducer} from "./userReducer";

export const rootReducer = combineReducers({
    tasks: organizeReducer,
    user: userReducer
})

export type RootState = ReturnType<typeof rootReducer>;