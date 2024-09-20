import React from 'react';
import banner from "../../assets/Banner (1).png"
import ShopProductsInside from "./shopProductsInside";
import SubscribeInside from "../home/subscribeInside";
import Footer from "../home/footer";

function Shop(props) {
    return (
        <div>
            <div>
                <img src={banner} alt="banner" className={"w-full"}/>
            </div>
            <ShopProductsInside/>
            <SubscribeInside/>
            <Footer/>
        </div>
    );
}

export default Shop;
