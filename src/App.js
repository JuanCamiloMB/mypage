import React from 'react';
import {Routes, Route } from "react-router-dom";
import MePage from "./pages/MePage";
import NoPage from './pages/NoPage';
import "./index.css"

export default function App() {
    return(
        <div id='RoutesRoot'>
                <Routes>
                    <Route path="/" element={<MePage/>}/>
                    <Route path="*" element={<NoPage />} />
                </Routes>
        </div>
    )
};