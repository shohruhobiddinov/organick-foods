import React from 'react';
import banner from "../../assets/Banner.jpg"
import photo from "../../assets/Photo (18).png"
import {FaCoins, FaFaucet, FaHouseDamage, FaLeaf, FaPrescriptionBottle, FaTruck} from "react-icons/fa";
import OrganickOnlyInside from "./organickOnlyInside";
import Footer from "../home/footer";
import {Button} from "antd";
import {FaCircleArrowRight} from "react-icons/fa6";
import {Link} from "react-router-dom";

function Service(props) {

    const data1 = [
        {
            icon: <FaPrescriptionBottle/>,
            title: "Dairy Products",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis"
        },
        {
            icon: <FaHouseDamage />,
            title: "Store Services",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis"
        },
        {
            icon: <FaTruck />,
            title: "Delivery Services",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis"
        }
    ]
    const data2 = [
        {
            icon: <FaLeaf />,
            title: "Agricultural Services",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis"
        },
        {
            icon: <FaCoins/>,
            title: "Organic Products",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis"
        },
        {
            icon: <FaFaucet />,
            title: "Fresh Vegetables",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis"
        }
    ]

    return (
        <div>
            <div>
                <img src={banner} alt="banner" className={"w-full"}/>
            </div>
            <div className={"w-full text-center sm:mt-10 md:mt-40 px-[10%]"}>
                <h3 className={"text-[#7EB693] font-yellowTail text-[30px]"}>What we Grow</h3>
                <h2 className={"font-bold text-[40px] text-[#274C5B]"}>
                    Better Agriculture for <br/> Better Future
                </h2>
            </div>
            <div className={"px-[10%] flex flex-wrap items-center justify-center"}>
                <div className={"sm:w-full lg:w-[30%] sm:text-start lg:text-end"}>
                    {
                        data1.map((item, index) => (
                            <div key={index}>
                                <span
                                    className={"text-[#7EB693] text-[30px] flex sm:justify-start lg:justify-end mt-5"}> {item.icon} </span>
                                <h3 className={"font-bold text-[#274C5B] text-[20px] my-3"}> {item.title} </h3>
                                <p className={"text-[#525C60]"}> {item.description} </p>
                            </div>
                        ))
                    }
                </div>
                <div className={"sm:w-full lg:w-[40%]"}>
                    <img src={photo} alt="photo" className={"w-full"}/>
                </div>
                <div className={"sm:w-full lg:w-[30%] text-start"}>
                    {
                        data2.map((item, index) => (
                            <div key={index}>
                                <span
                                    className={"text-[#7EB693] text-[30px] flex justify-start mt-5"}> {item.icon} </span>
                                <h3 className={"font-bold text-[#274C5B] text-[20px] mt-5"}> {item.title} </h3>
                                <p className={"text-[#525C60]"}> {item.description} </p>
                            </div>
                        ))
                    }
                </div>
               <div className={"w-full flex justify-center mt-5"}>
                   <Link to={"/service/single"}>
                       <Button className={"font-bold text-[#274C5B] p-7 bg-white border-2 border-[#274C5B] my-5"} type={"dark"}
                               icon={<FaCircleArrowRight/>} iconPosition={"end"}>
                           Explore More
                       </Button>
                   </Link>
               </div>
            </div>
            <OrganickOnlyInside/>
            <Footer/>
        </div>
    );
}

export default Service;
