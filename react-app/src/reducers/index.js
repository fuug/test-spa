import {combineReducers} from "redux";
import {createStore, applyMiddleware} from "redux";
import articleReducer from "./articleReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    articles: articleReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))