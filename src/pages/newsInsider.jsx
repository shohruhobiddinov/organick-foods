import React from 'react';
import {Button} from "antd";
import {FaCircleArrowRight} from "react-icons/fa6";
import image1 from "../assets/Image (29).png"
import image2 from "../assets/Photo (12).png"
import {FaUser} from "react-icons/fa";

function NewsInside(props) {

    const dataNews = [
        {
            image: image1,
            date1: `25`,
            date2: `Nov`,
            by: "By Rachi Card",
            title: "The Benefits of Vitamin D & How to Get",
            description: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum"
        },
        {
            image: image2,
            date1: `25`,
            date2: `Nov`,
            by: "By Rachi Card",
            title: "Our Favourite Summertime Tommeto",
            description: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum"
        }
    ]

    return (
        <div className="p-[10%]">
            <div className={"flex flex-wrap justify-between items-end"}>
                <div className={"sm:w-[100%] md:w-[70%]"}>
                    <h3 className={"font-yellowTail text-[35px] text-[#7EB693]"}>News</h3>
                    <h2 className={"sm:text-[30px] md:text-[40px] text-[#274C5B] font-bold"}>
                        Discover weekly content about organic food, & more
                    </h2>
                </div>
                <Button className={"font-bold bg-transparent p-7 border-2 border-[#274C5B] text-[#274C5B] mt-5"}
                        type={"dark"}
                        icon={<FaCircleArrowRight/>}
                        iconPosition={"end"}>
                    More News
                </Button>
            </div>
            <div className={"flex flex-wrap justify-between mt-5"}>
                {
                    dataNews.map((item, index) => (
                        <div className={"relative sm:w-[100%] md:w-[100%] lg:w-[48%] my-5"} key={index}>
                            <img src={item.image} alt="" className={"rounded-2xl w-full"}/>
                            <div className={"absolute sm:hidden md:block left-5 top-40 bg-white p-7 w-[90%] rounded-2xl shadow-2xl"}>
                                <span className={"flex items-center gap-2"}>
                                    <FaUser className={"text-[#EFD372]"} />
                                    <p className={"text-[#274C5B] text-[15px]"}>{item.by}</p>
                                </span>
                                <h3 className={"font-bold text-[#274C5B] text-[20px] my-3"}>
                                    {item.title}
                                </h3>
                                    <p className={"text-[#525C60] text-[15px]"}>
                                    {item.description}
                                </p>
                                <Button className={"font-bold bg-[#EFD372] p-7 text-[#274C5B] mt-5"}
                                        type={"dark"}
                                        icon={<FaCircleArrowRight/>}
                                        iconPosition={"end"}>
                                    Read More
                                </Button>
                            </div>
                            <span className={"absolute top-5 left-5 text-[#274C5B] bg-white p-3 rounded-full text-center font-bold leading-4"}>
                                <p>{item.date1}</p>
                                <p>{item.date2}</p>
                            </span>

                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default NewsInside;