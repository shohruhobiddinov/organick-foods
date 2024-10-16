import React from 'react';
import banner from "../../assets/Banner (4).png";
import SubscribeInside from "../home/subscribeInside";
import "./portfolio.css"
import Footer from "../home/footer";
import image1 from "../../assets/Photo (20).png"
import image2 from "../../assets/Photo (21).png"
import image3 from "../../assets/Photo (22).png"
import image4 from "../../assets/Image (41).png"
import image5 from "../../assets/Image (42).png"
import image6 from "../../assets/Image (43).png"
import {FaCircleChevronRight} from "react-icons/fa6";
import {Link} from "react-router-dom";

function Portfolio(props) {

    const data = [
        {
            image: image1,
            title: "Green & Tasty Lemon",
            type: "Fruits"
        },
        {
            image: image2,
            title: "Organic Carrot",
            type: "Farmer"
        },
        {
            image: image3,
            title: "Organic Betel Leaf",
            type: "Leaf"
        },
        {
            image: image4,
            title: "Natural Tommato",
            type: "Fruits"
        },
        {
            image: image5,
            title: "Black Raspberry",
            type: "Farmer"
        },
        {
            image: image6,
            title: "Honey Orange",
            type: "Farmer"
        },
    ]

    return (
        <div>
            <div>
                <img src={banner} alt="banner" className={"w-full"}/>
            </div>

            <div className={"p-[10%] flex flex-wrap justify-between"}>
                {
                    data.map((item, index) => (
                        <Link to={"/portfolio/single"} className={"sm:w-full md:w-[48%] lg:w-[32%] my-3 cursor-pointer card-hover relative"}>
                            <div key={index}>
                                <img src={item.image} alt={item.title} className={"w-full rounded-2xl"}/>
                                <h3 className={"text-[#274C5B] text-[19px] font-bold"}>{item.title}</h3>
                                <h4 className={"text-[#7EB693] font-yellowTail text-[17px]"}>{item.type}</h4>
                                <div
                                    className={"absolute-card hidden absolute top-[5%] left-[5%] w-[90%] h-[75%] rounded-2xl flex items-center justify-center"}>
                                    <FaCircleChevronRight className={"text-[#7EB693] w-[40px] h-[40px]"}/>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>

            <SubscribeInside/>
            <Footer/>
        </div>
    );
}

export default Portfolio;
