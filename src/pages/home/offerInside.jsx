import React from 'react';
import {Button} from "antd";
import {FaCircleArrowRight} from "react-icons/fa6";
import image1 from "../../assets/Photo (8).png"
import image2 from "../../assets/Photo (9).png"
import image3 from "../../assets/Photo (10).png"
import image4 from "../../assets/Photo (11).png"
import {FaStar} from "react-icons/fa";

function OfferInside(props) {

    const dataOffer = [
        {
            image: image1,
            type: "Vegetable",
            name: "Mung Bean",
            oldPrice: "$20.00",
            newPrice: "$13.00",
            stars: 5
        },
        {
            image: image2,
            type: "Vegetable",
            name: "Brown Hazelnut",
            oldPrice: "$20.00",
            newPrice: "$14.00",
            stars: 3
        },
        {
            image: image3,
            type: "Vegetable",
            name: "Onion",
            oldPrice: "$20.00",
            newPrice: "$15.00",
            stars: 5
        },
        {
            image: image4,
            type: "Vegetable",
            name: "Cabbage",
            oldPrice: "$20.00",
            newPrice: "$17.00",
            stars: 5
        }
    ]

    return (
        <div>
            <div className="p-[10%] bg-[#274C5B]">
                <div className={"flex flex-wrap justify-between items-end"}>
                    <div>
                        <h3 className={"font-yellowTail text-[35px] text-[#7EB693]"}>Offer</h3>
                        <h2 className={"sm:text-[30px] md:text-[40px] text-white font-bold"}>We Offer Organic For You</h2>
                    </div>
                    <Button className={"font-bold bg-[#EFD372] p-7 text-[#274C5B] mt-5"}
                            type={"dark"}
                            icon={<FaCircleArrowRight/>}
                            iconPosition={"end"}>
                        View All Products
                    </Button>
                </div>
                <div className={"w-full flex flex-wrap justify-between mt-10"}>
                    {
                        dataOffer.map((item, index) => (
                            <div key={index}
                                 className={"relative sm:w-[100%] md:w-[49%] lg:w-[32%] xl:w-[24%] rounded-2xl overflow-hidden my-2 shadow-lg hover:-translate-y-1 transition-all bg-white"}>
                                <div className={"w-full sm:h-[320px] md:h-[300px] lg:h-[270px]"}>
                                    <img src={item.image} alt="" className="mx-auto mt-[20%]"/>
                                </div>
                                <div className={"p-4"}>
                                    <h3 className={"text-[#274C5B] font-bold text-[18px]"}> {item.name} </h3>
                                    <hr className={"my-2"}/>
                                    <div className={"flex items-center justify-between"}>
                                        <div className={"flex gap-2"}>
                                            <p className={"text-[15px] line-through text-[#B8B8B8]"}> {item.oldPrice} </p>
                                            <p className={"text-[15px] text-[#274C5B]"}> {item.newPrice} </p>
                                        </div>
                                        <div className={"text-[#FFA858] flex"}>
                                            {Array(item.stars).fill().map((_, i) => (
                                                <FaStar key={i}/>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={"absolute top-[3%] left-[5%] bg-[#274C5B] px-3 py-1 text-white font-bold text-[14px] rounded-md"}>
                                    {item.type}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default OfferInside;
