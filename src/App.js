import React from 'react';
import Navbar from "./components/navbar";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";

function App(props) {
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </div>
    );
}

export default App;
