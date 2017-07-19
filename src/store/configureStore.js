import { applyMiddleware, compose, createStore } from "redux"
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from "../reducers"

const store = createStore(rootReducer, applyMiddleware(logger,thunk));

export default store ;