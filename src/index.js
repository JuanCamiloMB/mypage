import React from 'react';
import ReactDOM from "react-dom/client";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Me from "./pages/Me";
import NoPage from './pages/NoPage';
import "./index.css"

export default function App() {
    return(
        <div id='RoutesRoot'>
            <Router>
                <Routes>
                    <Route path="/" element={<Me/>}/>
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </Router>
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);