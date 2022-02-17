import React from 'react';
import Main from "./main/Main";
import AboutArticle from "./main/article/AboutArticle";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Main/>}/>
                <Route exact path="/:id" element={<AboutArticle/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
