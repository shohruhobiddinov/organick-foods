import React from 'react';
import banner from "../assets/Banner.png"
import image from "../assets/Image (30).png";
import icon1 from "../assets/Chemical Plant.png";
import icon2 from "../assets/Icon.svg";
import {Button} from "antd";
import {FaCircleArrowRight} from "react-icons/fa6";
import WhyChooseUseInside from "./whyChooseUseInside";
import TeamInside from "./teamInside";

function About(props) {
    return (
        <div>
            <div>
                <img src={banner} alt="banner"/>
            </div>
            <div className={"w-100 sm:pr-[0%] lg:pr-[10%] sm:px-[10%] lg:px-[0%] py-[5%] flex flex-wrap items-center justify-center"}>
                <div className={"sm:w-[100%] md:w-[100%] lg:w-[60%] pr-5"}>
                    <img src={image} alt={"Main Image"} className={"w-full"}/>
                </div>
                <div className={"sm:w-[100%] md:w-[100%] lg:w-[40%]"}>
                    <h3 className={"text-[#7EB693] font-yellowTail text-[30px]"}>About Us</h3>
                    <h2 className={"text-[#274C5B] font-bold text-[40px]"}>
                        We do Creative Things for Success
                    </h2>
                    <p className={"text-[#525C60] my-5"}>
                        Simply dummy text of the printing and typesetting industry. Lorem had ceased to
                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                        galley.
                    </p>
                    <div className={"w-full flex flex-wrap gap-2"}>
                        <div className={"flex items-center gap-3"}>
                            <img src={icon1} alt="Icon1" />
                            <h3 className={"text-[#274C5B] font-bold text-[18px]"}>Modern Agriculture Equipment</h3>
                        </div>
                        <div className={"flex items-center gap-3"}>
                            <img src={icon2} alt="Icon1" />
                            <h3 className={"text-[#274C5B] font-bold text-[18px]"}>No growth hormones are used</h3>
                        </div>
                    </div>
                    <Button className={"font-bold bg-[#274C5B] p-7 text-white my-5"} type={"dark"}
                            icon={<FaCircleArrowRight/>} iconPosition={"end"}>
                        Explore More
                    </Button>
                </div>
            </div>

            {/* Other components */}
            <WhyChooseUseInside/>
            <TeamInside/>
        </div>
    );
}

export default About;
