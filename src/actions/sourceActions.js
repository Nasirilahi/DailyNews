import {
    SOURCE_LIST_REQUEST ,
    SOURCE_LIST_SUCCESS,
    SOURCE_LIST_FAILURE,
} from '../constants/actionsConstants';
import { API_URL } from '../constants/apiConstants';


export const getSourcesList = (selectedCategory) => {
    return (dispatch)=> {
        dispatch(sourceListRequest());
        let url = ''
        if(selectedCategory.value === 'all'){
            url = `${API_URL}`;
        }
        else{
            url = `${API_URL}?category=${selectedCategory.value}`;
        }
        
        fetch(`${url}`)
            .then((response) => response.json())
            .then(data => {
                const { status, sources } = data;
                if(status === 'ok'){
                    return dispatch(sourcesListSuccess(sources));
                }
                else{
                    return dispatch(sourcesListFailure());
                }
            
            })
            .catch((err)=>{
                return dispatch(sourcesListFailure());
            });
    };
}

const sourceListRequest = () =>({ type:SOURCE_LIST_REQUEST });

const sourcesListSuccess = (sources)=>({
        type:SOURCE_LIST_SUCCESS,
        sources
});

const sourcesListFailure = (err) =>({ type:SOURCE_LIST_FAILURE });