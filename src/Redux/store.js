import {reducer as AppReducer} from "./AppReducer/reducer";
import {reducer as AuthReducer} from "./AuthReducer/reducer";
import {legacy_createStore,combineReducers} from "redux";

const rootReducer = combineReducers({
    AppReducer,
    AuthReducer
});

export const store = legacy_createStore(rootReducer);
