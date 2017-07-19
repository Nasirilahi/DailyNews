import {
    ARTICLE_LIST_REQUEST ,
    ARTICLE_LIST_SUCCESS,
    ARTICLE_LIST_FAILURE,
} from '../constants/actionsConstants';
import { ARTICLE_URL, API_KEY } from '../constants/apiConstants';


export const getArticlesList = (source, sortBy='top') => {
    return (dispatch)=> {
        dispatch(articlesListRequest()); 
        fetch(`${ARTICLE_URL}?source=${source}&sortBy=${sortBy}&apiKey=${API_KEY}`)
            .then((response) => response.json())
            .then(data => {
                const { status, articles, sortBy } = data;
                if(status === 'ok'){
                    return dispatch(articlesListSuccess(articles));
                }
                else{
                    return dispatch(articlesListFailure());
                }
            
            })
            .catch((err)=>{
                return dispatch(articlesListFailure());
            });
    };
}

const articlesListRequest = () =>({ type:ARTICLE_LIST_REQUEST });

const articlesListSuccess = (articles)=>{
    return{
         type:ARTICLE_LIST_SUCCESS,
         articles
    }
};

const articlesListFailure = (err) =>({ type:ARTICLE_LIST_FAILURE });