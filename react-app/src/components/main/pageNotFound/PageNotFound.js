import React from 'react';
import {Link} from "react-router-dom";
import './pageNotFound.css'

const PageNotFound = () => {
    return (
        <div className="main">
            <div className="center">
                <h1>404 :(</h1>
                <Link to={'/'}>Главная</Link>
            </div>
        </div>
    );
};

export default PageNotFound;