const SET_ARTICLES = "SET_ARTICLES";
const SET_THUMBNAIL = "SET_THUMBNAIL";
const SET_ONE_ARTICLE = "SET_ONE_ARTICLE";

const default_state = {
    items: [{}, {}],
    isFetching: true
}

export default function articleReducer(state = default_state, action) {
    switch (action.type) {
        case SET_ARTICLES:
            return {
                ...state,
                items: action.payload
            }
        case SET_THUMBNAIL:
            return {
                ...state,
                thumbs: action.payload
            }
        case SET_ONE_ARTICLE:
            return {
                ...state,
                item: action.payload
            }
        default:
            return state
    }
};

export const setArticles = (articles) => ({type: SET_ARTICLES, payload: articles})
export const setThumbnail = (thumbnail) => ({type: SET_THUMBNAIL, payload: thumbnail})
export const setOneArticle = (article) => ({type: SET_ONE_ARTICLE, payload: article})