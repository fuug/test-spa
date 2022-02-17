import React, {useEffect} from 'react';
import './article.css'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getArticleThumbnailById} from "../../actions/articles";



const Article = (props) => {
    const article = props.article;

    const dispatch_th = useDispatch();
    const img_url = useSelector(state => state.articles.thumbs);

    useEffect(() => {
        dispatch_th(getArticleThumbnailById(article.id))
    }, [])

    return (
        <div className="article">
            <div className="title"><h1>{article.title}</h1></div>
            <div className="thumbnail"><img src={img_url} alt=""/></div>
            <div className="content"><p>{article.content}</p></div>
            <Link to={`/article/${article.id}`}>Перейти</Link>
        </div>
    );
};

export default Article;