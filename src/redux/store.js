import {createStore, combineReducers, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";

let reducer = combineReducers({

})

const store = createStore(reducer, composeWithDevTools())

export default store

