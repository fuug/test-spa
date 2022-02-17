import React from 'react';
import Main from "./main/Main";
import AboutArticle from "./main/article/AboutArticle";
import PageNotFound from "./main/pageNotFound/PageNotFound";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Main/>}/>
                <Route exact path="/article/:id" element={<AboutArticle/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
