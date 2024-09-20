import React from 'react';
import logo from "../../assets/Logo (1).svg"
import {FaInstagram, FaPinterest, FaTwitter} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa6";

function Footer(props) {
    return (
        <div>
            <div className={"px-[10%] py-10 flex flex-wrap items-start justify-center"}>
                <div className={"sm:w-[100%] sm:text-start md:text-center lg:text-end lg:w-[20%]"}>
                    <h3 className={"font-bold text-[#274C5B] text-[25px]"}>Contact Us</h3>
                    <h4 className={"text-[#525C60] font-bold text-[20px] mt-5"}>Email</h4>
                    <p className={"text-[#525C60] cursor-pointer"}>needhelp@Organia.com</p>
                    <h4 className={"text-[#525C60] font-bold text-[20px] mt-5"}>Phone</h4>
                    <p className={"text-[#525C60] cursor-pointer"}>666 888 888</p>
                    <h4 className={"text-[#525C60] font-bold text-[20px] mt-5"}>Address</h4>
                    <p className={"text-[#525C60] cursor-pointer"}>88 road, borklyn street, USA</p>
                </div>

                <div className="sm:w-[100%] sm:text-start sm:my-7 md:text-center lg:text-center sm:px-0 md:px-20 lg:w-[60%]">
                    <img src={logo} alt="Organick logo" className={"sm:w-[130px] md:w-[150px] sm:mx-0 md:mx-auto"}/>
                    <p className={"text-[#525C60] cursor-pointer my-5"}>
                        Simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum simply dummy text of the printing
                    </p>
                    <div className={"mt-10 flex justify-center items-center gap-3"}>
                        <div className={"bg-[#EFF6F1] p-5 flex justify-center items-center rounded-full cursor-pointer"}>
                            <FaInstagram className={" w-[25px] h-[25px] text-[#274C5B]"}/>
                        </div>
                        <div className={"bg-[#EFF6F1] p-5 flex justify-center items-center rounded-full cursor-pointer"}>
                            <FaFacebook className={" w-[25px] h-[25px] text-[#274C5B]"}/>
                        </div>
                        <div className={"bg-[#EFF6F1] p-5 flex justify-center items-center rounded-full cursor-pointer"}>
                            <FaTwitter className={" w-[25px] h-[25px] text-[#274C5B]"}/>
                        </div>
                        <div className={"bg-[#EFF6F1] p-5 flex justify-center items-center rounded-full cursor-pointer"}>
                            <FaPinterest className={" w-[25px] h-[25px] text-[#274C5B]"}/>
                        </div>
                    </div>
                </div>

                <div className={"sm:w-[100%] sm:text-start md:text-center lg:text-start lg:w-[20%]"}>
                    <h3 className={"font-bold text-[#274C5B] text-[25px]"}>Utility Pages</h3>
                    <p className={"text-[#525C60] cursor-pointer my-5"}>Style Guide</p>
                    <p className={"text-[#525C60] cursor-pointer my-5"}>404 Not Found</p>
                    <p className={"text-[#525C60] cursor-pointer my-5"}>Password Protected</p>
                    <p className={"text-[#525C60] cursor-pointer my-5"}>Licences</p>
                    <p className={"text-[#525C60] cursor-pointer my-5"}>Changelog</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
