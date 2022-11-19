import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Me from "./pages/Me";
import NoPage from './pages/NoPage';
import "./index.css"

export default function App() {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Me/>}/>
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);