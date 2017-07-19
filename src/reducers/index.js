import { combineReducers } from 'redux';
import sourceReducer from './sourceReducer';
import articlesReducer from './articlesReducer';

const rootReducer = combineReducers({
    sourcelist:sourceReducer,
    articlesList: articlesReducer,
});

export default rootReducer;
