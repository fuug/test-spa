import React, {useEffect} from 'react';
import './main.css'
import {useDispatch, useSelector} from "react-redux";
import {getArticles, getArticleByDate} from "../actions/articles";
import Article from "./article/Article";
import DateRangePicker from "./form/DateRangePicker";

const Main = () => {

    const dispatch = useDispatch();
    const articles = useSelector(state => state.articles.items);

    function getByDate(start, end) {
        dispatch(getArticleByDate(start, end))
    }

    function clearDate() {
        dispatch(getArticles())
    }

    useEffect(() => {
        dispatch(getArticles())
    }, [])

    return (
        <div className="container">
            <DateRangePicker getByDate={getByDate} clearDate={clearDate}/>
            <div className={'row'}>
                {articles.map(article =>
                    <Article key={article.id} article={article}/>
                )}
            </div>
        </div>
    );
};

export default Main;