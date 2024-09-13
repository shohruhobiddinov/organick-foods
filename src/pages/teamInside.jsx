import React from 'react';
import image1 from "../assets/Image (31).png"
import image2 from "../assets/Image (32).png"
import image3 from "../assets/Image (33).png"
import {IoLogoInstagram} from "react-icons/io5";
import {FaFacebook} from "react-icons/fa6";
import {FaTwitter} from "react-icons/fa";

function TeamInside(props) {

    const dataOfTeam = [
        {
            image: image1,
            name: "Giovani Bacardo",
            job: "Farmer"
        },
        {
            image: image2,
            name: "Marianne Loreno",
            job: "Designer"
        },
        {
            image: image3,
            name: "Riga Pelore",
            job: "Farmer"
        },
    ]

    return (
        <div>
            <div className={"p-[10%]"}>
                <div className="text-center">
                    <h3 className={"text-[#7EB693] font-yellowTail text-[30px]"}>Team</h3>
                    <h2 className={"text-[#274C5B] font-bold text-[40px]"}>
                        Our Organic Experts
                    </h2>
                    <p className={"text-[#525C60] my-5"}>
                        Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                    </p>
                </div>
                <div className={"flex flex-wrap gap-5 justify-between"}>
                    {
                        dataOfTeam.map((item, index) => (
                            <div className={"sm:w-full md:w-[48%] lg:w-[31%] my-3 shadow-lg rounded-2xl"}>
                                <img src={item.image} alt={item.name} className={"w-full"}/>
                                <div className={"flex justify-between items-end p-5"}>
                                    <span>
                                        <h3 className={"text-[#274C5B] font-bold text-[20px]"}>
                                            {item.name}
                                        </h3>
                                        <h4 className={"text-[#7EB693] font-yellowTail text-[18px]"}>
                                            {item.job}
                                        </h4>
                                    </span>
                                    <span className={"flex gap-3 text-[#274C5B] text-[20px]"}>
                                        <IoLogoInstagram/>
                                        <FaFacebook/>
                                        <FaTwitter/>
                                    </span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default TeamInside;
