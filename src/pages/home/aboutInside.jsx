import React from 'react';
import image from "../../assets/Photo (1).png"
import icon1 from "../../assets/Icon (2).png"
import icon2 from "../../assets/Icon (3).png"
import {Button} from "antd";
import {FaCircleArrowRight} from "react-icons/fa6";

function AboutInside(props) {
    return (
        <div>
            <div className={"w-100 px-[10%] py-[5%] bg-[#F9F8F8] flex flex-wrap items-center justify-center"}>
                <div className={"sm:w-[100%] md:w-[100%] lg:w-[50%]"}>
                    <img src={image} alt={"Main Image"}/>
                </div>
                <div className={"sm:w-[100%] md:w-[100%] lg:w-[50%]"}>
                    <h3 className={"text-[#7EB693] font-yellowTail text-[35px]"}>About Us</h3>
                    <h2 className={"text-[#274C5B] font-bold text-[45px]"}>
                        We Believe in Working Accredited Farmers
                    </h2>
                    <p className={"text-[#525C60]"}>
                        Simply dummy text of the printing and typesetting industry. Lorem had ceased to
                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                    </p>
                    <div className={"flex items-center gap-3 my-5"}>
                        <img src={icon1} alt="Icon1" className={"w-[70px]"}/>
                        <div>
                            <h3 className={"text-[#274C5B] font-bold text-[20px]"}>Organic Foods Only</h3>
                            <p className={"text-[#525C60]"}>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                        </div>
                    </div>
                    <div className={"flex items-center gap-3 my-5"}>
                        <img src={icon2} alt="Icon1" className={"w-[70px]"}/>
                        <div>
                            <h3 className={"text-[#274C5B] font-bold text-[20px]"}>Quality Standards</h3>
                            <p className={"text-[#525C60]"}>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                        </div>
                    </div>
                    <Button className={"font-bold bg-[#274C5B] p-7 text-white"} type={"dark"} icon={<FaCircleArrowRight/>} iconPosition={"end"}>
                        Shop Now
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default AboutInside;
