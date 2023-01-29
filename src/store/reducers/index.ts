import {combineReducers} from "redux";
import userReducer from "./userReducer";
import todoReducer from "./todoReducer";

const rootReducer = combineReducers({
    user: userReducer,
    todo: todoReducer
});

type RootState = ReturnType<typeof rootReducer>

export default rootReducer;
export type { RootState };
