import React, {useEffect} from 'react';
import './article.css'
import {useDispatch, useSelector} from "react-redux";
import {getArticleById} from "../../actions/articles";
import {Link, useParams} from "react-router-dom";

const AboutArticle = (props) => {
    const {id} = useParams();

    const dispatch = useDispatch();
    const article = useSelector(state => state.articles.items);
    useEffect(() => {
        dispatch(getArticleById(id))
    }, [])

    const article_url = article[0],
        article_content = article[1];

    return (
        <div className="article">
            <div className="title"><h1>{article_content.title}</h1></div>
            <div className="thumbnail"><img src={article_url} alt=""/></div>
            <div className="content"><h2>{article_content.content}</h2></div>
            <Link to={`/`}>Назад</Link>
        </div>
    );
};

export default AboutArticle;