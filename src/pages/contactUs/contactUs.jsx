import React from 'react';
import banner from "../../assets/Banner (7).png"
import banana from "../../assets/Photo (7).jpg"
import image from "../../assets/Image (57)2.png"
import {FaRegEnvelope} from "react-icons/fa6";
import {FiPhone} from "react-icons/fi";
import {IoLocationOutline} from "react-icons/io5";
import Registration from "./registration";
import SubscribeInside from "../home/subscribeInside";
import Footer from "../home/footer";
import Error404 from "../error404/error404";

function ContactUs(props) {
    return (
        <div>
            <div className={"w-full"}>
                <img src={banner} alt="banner" className={"w-full"}/>
            </div>
            <div className={"p-[10%] flex flex-wrap justify-between items-center"}>
                <div className={"sm:w-full sm:pr-0 lg:w-[50%] lg:pr-[5%]"}>
                    <img src={banana} alt="photo" className={"w-full rounded-2xl"}/>
                </div>

                <div className={"sm:w-full lg:w-[50%]"}>
                    <h2 className={"text-[#274C5B] font-bold text-[35px]"}>
                        We'd love to talk about how we can work together.
                    </h2>
                    <p className={"text-[#525C60]"}>
                        Simply dummy text of the printing and typesetting industry. Lorem had ceased to
                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                        galley.
                    </p>
                    <div className={"border shadow p-3 rounded-xl flex items-center gap-3 my-5"}>
                        <div className={"flex justify-center items-center bg-[#F4F4F4] rounded-xl p-5"}>
                            <FaRegEnvelope className={"text-[#7EB693] text-[25px]"}/>
                        </div>
                        <div>
                            <h3 className={"text-[#274C5B] font-bold text-[22px]"}>Message</h3>
                            <p className={"text-[#525C60]"}>support@organic.com</p>
                        </div>
                    </div>
                    <div className={"border shadow p-3 rounded-xl flex items-center gap-3 my-5"}>
                        <div className={"flex justify-center items-center bg-[#F4F4F4] rounded-xl p-5"}>
                            <FiPhone className={"text-[#7EB693] text-[25px]"}/>
                        </div>
                        <div>
                            <h3 className={"text-[#274C5B] font-bold text-[22px]"}>Contact Us</h3>
                            <p className={"text-[#525C60]"}>+01 123 456 789</p>
                        </div>
                    </div>
                </div>

                <div
                    className={"w-full h-[90vh] mt-[10%] rounded-3xl contactUsBackground flex items-center justify-center px-10"}>
                    <div className={"bg-white rounded-2xl p-5 w-[400px] sm:ml-0 md:ml-[10%] lg:ml-[30%] xl:ml-[50%]"}>
                        <h4 className={"text-[#7EB693] text-[22px] font-yellowTail"}>Location</h4>
                        <h3 className={"text-[#274C5B] text-[30px] font-bold"}>Our Farms</h3>
                        <p className={"text-[#525C60]"}>
                            Established fact that a reader will be distracted by the readable content of a page when
                            looking a layout. The point of using.
                        </p>
                        <div className={"flex gap-3 my-5"}>
                            <IoLocationOutline className={"text-[#7EB693] text-[40px]"}/>
                            <span>
                                <h4 className={"font-bold text-[#525C60]"}>New York, USA:</h4>
                                <p className={"text-[#525C60]"}>299 Park Avenue New York,</p>
                                <p className={"text-[#525C60]"}>New York 10171</p>
                            </span>
                        </div>
                        <div className={"flex gap-3 my-5"}>
                            <IoLocationOutline className={"text-[#7EB693] text-[40px]"}/>
                            <span>
                                <h4 className={"font-bold text-[#525C60]"}>London, UK:</h4>
                                <p className={"text-[#525C60]"}>30 Stamford Street,</p>
                                <p className={"text-[#525C60]"}>London SE1 9LQ</p>
                            </span>
                        </div>
                    </div>
                </div>

                <Registration/>
            </div>

            <SubscribeInside/>
            <Footer/>
        </div>
    );
}

export default ContactUs;
