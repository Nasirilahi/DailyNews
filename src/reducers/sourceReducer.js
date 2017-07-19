
import {
    SOURCE_LIST_REQUEST ,
    SOURCE_LIST_SUCCESS,
    SOURCE_LIST_FAILURE,
} from '../constants/actionsConstants';

const initialState = {
   sources :[],
   isLoading:false,
};
const sourceReducer = (state=initialState, action) => {
    switch(action.type) {
        case SOURCE_LIST_REQUEST:
            return {...state, isLoading: true };

        case SOURCE_LIST_SUCCESS:
            return {...state, sources: action.sources, isLoading: false };

        case SOURCE_LIST_FAILURE:
            return {...state, sources:[], isLoading: false };

        default:
            return state;
    }
};

export default sourceReducer;