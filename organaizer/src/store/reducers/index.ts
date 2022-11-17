import { combineReducers } from "redux";
import {organizeReducer} from "./organizeReducer";

export const rootReducer = combineReducers({
    tasks: organizeReducer
})

export type RootState = ReturnType<typeof rootReducer>;