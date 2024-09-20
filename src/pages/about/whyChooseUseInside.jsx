import React from 'react';
import image from "../../assets/Photo (4).jpg";
import {FaCircleStop} from "react-icons/fa6";
import icon1 from "../../assets/Icon (4).png"
import icon2 from "../../assets/Icon (5).png"
import icon3 from "../../assets/Icon (6).png"
import icon4 from "../../assets/Icon (7).png"

function WhyChooseUseInside(props) {

    const dataOfCards = [
        {
            image: icon1,
            title: "Return Policy",
            description: "Simply dummy text of the printintypesetting industry.",
        },
        {
            image: icon2,
            title: "100% Fresh",
            description: "Simply dummy text of the printintypesetting industry.",
        },
        {
            image: icon3,
            title: "Support 24/7",
            description: "Simply dummy text of the printintypesetting industry.",
        },
        {
            image: icon4,
            title: "Secured Payment",
            description: "Simply dummy text of the printintypesetting industry.",
        },
    ]

    return (
        <div>
            <div className={"w-100 px-[10%] py-[5%] bg-[#F9F8F8] flex flex-wrap items-center justify-center"}>
                <div className={"sm:w-[100%] md:w-[100%] lg:w-[50%] pr-3"}>
                    <h3 className={"text-[#7EB693] font-yellowTail text-[30px]"}>Why Choose us?</h3>
                    <h2 className={"text-[#274C5B] font-bold text-[40px]"}>
                        We do not buy from the open market & traders.
                    </h2>
                    <p className={"text-[#525C60] my-5"}>
                        Simply dummy text of the printing and typesetting industry. Lorem had ceased to
                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                        galley.
                    </p>
                    <div className={"flex items-center gap-2 bg-[#ECECEC] py-5 px-7 rounded-full w-[250px] cursor-pointer"}>
                        <FaCircleStop className={"text-[#7EB693] mt-1"}/>
                        <h3 className={"text-[#274C5B] font-bold"}>
                            100% Natural Product
                        </h3>
                    </div>
                    <p className={"text-[#525C60] my-5 ml-10"}>
                        Simply dummy text of the printing and typesetting industry Lorem Ipsum
                    </p>
                    <div className={"flex items-center gap-2 bg-[#ECECEC] py-5 px-7 rounded-full w-[250px] cursor-pointer"}>
                        <FaCircleStop className={"text-[#7EB693] mt-1"}/>
                        <h3 className={"text-[#274C5B] font-bold"}>
                            Increases resistance
                        </h3>
                    </div>
                    <p className={"text-[#525C60] my-5 ml-10"}>
                        Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing
                    </p>
                </div>
                <div className={"sm:w-[100%] md:w-[100%] lg:w-[50%]"}>
                    <img src={image} alt={"Main Image"} className={"rounded-3xl w-full"}/>
                </div>
                <div className={"w-full flex flex-wrap justify-between gap-3 my-10"}>
                    {
                        dataOfCards.map((item, index) => (
                            <div className={"sm:w-full md:w-[48%] lg:w-[23%] bg-white rounded-2xl p-7 text-center my-3 cursor-pointer transition-all hover:-translate-y-1.5"}>
                                <img src={item.image} alt={item.title} className={"mx-auto"}/>
                                <h3 className={"text-[#274C5B] font-bold my-3 text-[20px]"}>{item.title}</h3>
                                <p className={"text-[#525C60] text-[16px]"}>{item.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default WhyChooseUseInside;