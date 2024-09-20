import React from 'react';
import Navbar from "./components/navbar";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Shop from "./pages/shop/shop";
import ShopSingle from "./pages/shop/shopSingle";

function App(props) {
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/shop" element={<Shop/>}/>
                <Route path="/shop/shopSingle" element={<ShopSingle/>}/>
            </Routes>
        </div>
    );
}

export default App;
