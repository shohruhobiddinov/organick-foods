import React from 'react';
import {Button, Image} from "antd";
import {FaCircleArrowRight} from "react-icons/fa6";
import newProducts1 from "../assets/1.png";
import newProducts2 from "../assets/2.png";
import AboutInside from "./aboutInside";
import ProductsInside from "./productsInside";
import TestimonialsInside from "./testimonialsInside";
import OfferInside from "./offerInside";
import EcoFriendlyInside from "./ecoFriendlyInside";
import JuiceInside from "./juiceInside";
import NewsInside from "./newsInsider";
import SubscribeInside from "./subscribeInside";
import Footer from "./footer";

function Home(props) {
    return (
        <div>
            <div className="home w-full h-[90vh] bg-[#F1EFF0] flex flex-wrap items-center px-[10%]">
                <div className={"sm:w-[100%] md:w-[60%] lg:w-[40%]"}>
                    <p className={"text-[#68A47F] font-yellowTail text-[25px]"}>
                        100% Natural Food
                    </p>
                    <h1 className={"font-roboto font-bold text-[#274C5B] text-[50px]"}>
                        Choose the best
                        healthier way
                        of life
                    </h1>
                    <Button icon={<FaCircleArrowRight/>} iconPosition={"end"} type={"dark"}
                            className={"p-5 text-[#274C5B] font-bold bg-[#EFD372]"}>
                        Explore Now
                    </Button>
                </div>
            </div>

            <div className={"p-[10%] flex flex-wrap justify-between items-center gap-5"}>
                <img src={newProducts1} alt="" className={"sm:w-[100%] md:w-[48%]"}/>
                <img src={newProducts2} alt="" className={"sm:w-[100%] md:w-[48%]"}/>
            </div>

            {/* Other components */}
            <AboutInside/>
            <ProductsInside/>
            <TestimonialsInside/>
            <OfferInside/>
            <EcoFriendlyInside/>
            <JuiceInside/>
            <NewsInside/>
            <SubscribeInside/>
            <Footer/>

        </div>
    );
}

export default Home;
