import React from 'react';
import Navbar from "./components/navbar";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Shop from "./pages/shop/shop";
import ShopSingle from "./pages/shop/shopSingle";
import Service from "./pages/service/service";
import ServiceSingle from "./pages/service/serviceSingle";
import Portfolio from "./pages/portfolio/portfolio";
import PortfolioSingle from "./pages/portfolio/portfolioSingle";
import Team from "./pages/team/team";
import Blog from "./pages/blog/blog";
import BlogSingle from "./pages/blog/blogSingle";

function App(props) {
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/shop" element={<Shop/>}/>
                <Route path="/shop/shopSingle" element={<ShopSingle/>}/>
                <Route path="/service" element={<Service/>}/>
                <Route path="/service/single" element={<ServiceSingle/>}/>
                <Route path="/portfolio" element={<Portfolio/>}/>
                <Route path="/portfolio/single" element={<PortfolioSingle/>}/>
                <Route path="/team" element={<Team/>}/>
                <Route path="/blog" element={<Blog/>}/>
                <Route path="/blog/single" element={<BlogSingle/>}/>
            </Routes>
        </div>
    );
}

export default App;
