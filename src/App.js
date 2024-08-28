import React from 'react';
import Navbar from "./components/navbar";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import AboutInside from "./pages/aboutInside";

function App(props) {
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </div>
    );
}

export default App;
