import React from 'react';
import banner from "../../assets/Banner (6).png"
import image1 from "../../assets/Image (29).png";
import image2 from "../../assets/Photo (12).png";
import image3 from "../../assets/Image (54).png";
import image4 from "../../assets/Image (55).png";
import image5 from "../../assets/Image (56).png";
import image6 from "../../assets/Photo (23).png";
import {FaUser} from "react-icons/fa";
import {Button} from "antd";
import {FaCircleArrowRight} from "react-icons/fa6";
import SubscribeInside from "../home/subscribeInside";
import Footer from "../home/footer";
import {useNavigate} from "react-router-dom";

function Blog(props) {
    const navigate = useNavigate();

    const handleClick = (item) => {
        navigate("/blog/single", {state: {product: item}})
    }

    const data = [
        {
            image: image1,
            date1: `15`,
            date2: `Oct`,
            by: "By Emma Watson",
            title: "Top 10 Ways to Boost Your Immune System",
            description: "Discover effective tips to naturally strengthen your immunity with healthy habits."
        },
        {
            image: image2,
            date1: `05`,
            date2: `Sep`,
            by: "By John Doe",
            title: "Healthy Recipes for a Balanced Diet",
            description: "A collection of simple and delicious meals to help maintain a balanced diet."
        },
        {
            image: image3,
            date1: `12`,
            date2: `Dec`,
            by: "By Alice Johnson",
            title: "The Importance of Regular Exercise",
            description: "Exercise is key to both physical and mental well-being. Learn the top benefits."
        },
        {
            image: image4,
            date1: `22`,
            date2: `Jul`,
            by: "By Mike Thompson",
            title: "Meditation Techniques for Beginners",
            description: "Step-by-step guide to mindfulness and meditation practices for improved mental health."
        },
        {
            image: image5,
            date1: `18`,
            date2: `Mar`,
            by: "By Linda Green",
            title: "How to Get the Most Out of Your Workout",
            description: "Maximize the effectiveness of your workouts with these simple tips and tricks."
        },
        {
            image: image6,
            date1: `10`,
            date2: `Aug`,
            by: "By Sarah Lee",
            title: "A Guide to Organic Eating",
            description: "Learn why organic foods are important and how to incorporate them into your diet."
        },
    ];


    return (
        <div>
            <div>
                <img src={banner} alt="banner" className={"w-full"}/>
            </div>
            <div className="w-full p-[10%]">
                <div className={"flex flex-wrap justify-between mt-5"} >
                    {
                        data.map((item, index) => (
                            <div className={"relative sm:w-[100%] md:w-[100%] lg:w-[48%] my-10"}
                                 key={index} onClick={() => handleClick(item)}>
                                <img src={item.image} alt="" className={"rounded-2xl w-full"}/>
                                <div
                                    className={"absolute sm:hidden md:block left-5 top-40 bg-white p-7 w-[90%] rounded-2xl shadow-2xl"}>
                                <span className={"flex items-center gap-2"}>
                                    <FaUser className={"text-[#EFD372]"}/>
                                    <p className={"text-[#274C5B] text-[15px]"}>{item.by}</p>
                                </span>
                                    <h3 className={"font-bold text-[#274C5B] text-[20px] my-3"}>
                                        {item.title}
                                    </h3>
                                    <p className={"text-[#525C60] text-[15px]"}>
                                        {item.description}
                                    </p>
                                    <h3 className={"flex font-bold items-center gap-3 text-[#274C5B] mt-5 cursor-pointer"}>
                                        Read More
                                        <FaCircleArrowRight className={"mt-1"}/>
                                    </h3>
                                </div>
                                <span
                                    className={"absolute top-5 left-5 text-[#274C5B] bg-white p-3 rounded-full text-center font-bold leading-4"}>
                                <p>{item.date1}</p>
                                <p>{item.date2}</p>
                            </span>

                            </div>
                        ))
                    }
                </div>
            </div>

            <SubscribeInside/>
            <Footer/>
        </div>
    );
}

export default Blog;