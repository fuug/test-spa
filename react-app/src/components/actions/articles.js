import {setArticles, setOneArticle, setThumbnail} from "../../reducers/articleReducer";
import axios from "axios";

export const getArticles = () => {
    return async (dispatch) => {
        const res = await axios.get('/article')
        dispatch(setArticles(res.data))
    };
}

export const getArticleThumbnailById = (id) => {
    return async (dispatch) => {
        const res = await axios.get(`/article/${id}/get-image`);
        dispatch(setThumbnail(res.data))
    };
}

export const getArticleById = (id) => {
    return async (dispatch) => {
        const res = await axios.get(`/article/${id}`);
        dispatch(setOneArticle(res.data))
    };
}

export const getArticleByDate = (start, end) => {
    return async (dispatch) => {
        const res = await axios.get(
            `/article/by-date`,
            {
                params: {
                    start: start,
                    end: end
                }
            }
        );
        dispatch(setArticles(res.data))
    };
}