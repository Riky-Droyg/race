import { applyMiddleware, combineReducers, createStore } from "redux";
import MainReduser from "./MainReduser";
import { thunk } from "redux-thunk";

let redusers = combineReducers({
	MainReduser,
});

let store = createStore(redusers, applyMiddleware(thunk));
export default store;
