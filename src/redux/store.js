import {createStore, combineReducers, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import DataReducer from "./Data/DataReducer";
import thunk from "redux-thunk";

let reducer = combineReducers({
Data: DataReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store

