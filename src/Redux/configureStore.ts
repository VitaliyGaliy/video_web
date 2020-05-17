import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import reducer from "./combineReducers";
import thunk from "redux-thunk";

const middleware = [thunk, logger];

const store = createStore(reducer, applyMiddleware(...middleware));

export default store;
