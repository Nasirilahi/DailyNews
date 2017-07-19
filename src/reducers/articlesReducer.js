import {
    ARTICLE_LIST_REQUEST ,
    ARTICLE_LIST_SUCCESS,
    ARTICLE_LIST_FAILURE,
} from '../constants/actionsConstants';

const initialState = {
   articles :[],
   isLoading:false,
};
const articlesReducer = (state=initialState, action) => {
    switch(action.type) {
        case ARTICLE_LIST_REQUEST:
            return {...state, isLoading: true };

        case ARTICLE_LIST_SUCCESS:
            return {...state, articles: action.articles, isLoading: false };

        case ARTICLE_LIST_FAILURE:
            return {...state, articles:[], isLoading: false };

        default:
            return state;
    }
};

export default articlesReducer;