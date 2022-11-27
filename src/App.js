import React from 'react';
import {Routes, Route } from "react-router-dom";
import Me from "./pages/Me";
import NoPage from './pages/NoPage';
import "./index.css"

export default function App() {
    return(
        <div id='RoutesRoot'>
                <Routes>
                    <Route path="/" element={<Me/>}/>
                    <Route path="*" element={<NoPage />} />
                </Routes>
        </div>
    )
};