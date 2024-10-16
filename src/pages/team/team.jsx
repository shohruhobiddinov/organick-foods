import React from 'react';
import banner from "../../assets/Banner (5).png"
import {IoLogoInstagram} from "react-icons/io5";
import {FaFacebook} from "react-icons/fa6";
import {FaTwitter} from "react-icons/fa";
import image1 from "../../assets/Image (48).png"
import image2 from "../../assets/Image (49).png"
import image3 from "../../assets/Image (50).png"
import image4 from "../../assets/Image (51).png"
import image5 from "../../assets/Image (52).png"
import image6 from "../../assets/Image (53).png"
import SubscribeInside from "../home/subscribeInside";
import Footer from "../home/footer";

function Team(props) {
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
        {
            image: image4,
            name: "Keira Knightley",
            job: "Farmer"
        },
        {
            image: image5,
            name: "Scott Lawrence",
            job: "Designer"
        },
        {
            image: image6,
            name: "Karen Allen",
            job: "Farmer"
        },
    ]

    return (
        <div>
            <div>
                <img src={banner} alt="banner" className={"w-full"}/>
            </div>
            <div className={"w-full p-[10%] flex flex-wrap justify-between"}>
                <div className={"w-full text-center mb-5"}>
                    <h3 className={"text-[#7EB693] font-yellowTail text-[30px]"}>Team</h3>
                    <h2 className={"font-bold text-[40px] text-[#274C5B]"}>
                        Our Organic Experts
                    </h2>
                    <p className={"text-[#525C60]"}>
                        Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                    </p>
                </div>

                {
                    dataOfTeam.map((item, index) => (
                        <div className={"sm:w-full md:w-[48%] lg:w-[31%] my-3 shadow-lg rounded-2xl cursor-pointer transition-all hover:-translate-y-1.5"}>
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


            <SubscribeInside/>
            <Footer/>
        </div>
    );
}

export default Team;