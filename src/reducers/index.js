import { combineReducers } from 'redux';
import sourceReducer from './sourceReducer';

const rootReducer = combineReducers({
    sourcelist:sourceReducer,
});

export default rootReducer;
