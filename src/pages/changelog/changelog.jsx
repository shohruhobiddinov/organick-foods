import React from 'react';
import banner from "../../assets/Banner (9).png"
import image from "../../assets/Image (58).png"
import SubscribeInside from "../home/subscribeInside";
import Footer from "../home/footer";

function Changelog(props) {
    return (
        <div>
            <div className={"w-full"}>
                <img src={banner} alt="banner" className={"w-full"}/>
            </div>
            <div className={"flex items-center justify-center p-[10%]"}>
                <div className={"sm:w-full md:w-[80%] lg:w-[70%] xl:w-[60%] flex gap-5 items-center p-7 rounded-2xl shadow-lg bg-white  cursor-pointer transition-all hover:scale-105"}>
                    <img src={image} alt="image" />
                    <span className={"flex items-center gap-3"}>
                        <h3 className={"text-[23px] text-[#274C5B] font-bold"}>V.1</h3>
                        <p className={"text-[#525C60]"}>Initial Organick Webflow Template Release</p>
                    </span>
                </div>
            </div>

            <SubscribeInside/>
            <Footer/>
        </div>
    );
}

export default Changelog;