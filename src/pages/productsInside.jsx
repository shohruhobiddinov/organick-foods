import React from 'react';
import image1 from "../assets/Photo (7).png"
import image2 from "../assets/Photo (2).png"
import image3 from "../assets/Photo (3).png"
import image4 from "../assets/Photo (4).png"
import image5 from "../assets/Photo (5).png"
import image6 from "../assets/Photo (6).png"
import image7 from "../assets/image 13.png"
import image8 from "../assets/image 14.png"
import {FaStar} from "react-icons/fa";
import {Button} from "antd";
import {FaCircleArrowRight} from "react-icons/fa6";

function ProductsInside(props) {

    const dataProducts = [
        {
            image: image1,
            type: "Vegetable",
            name: "Calabrese Broccoli",
            oldPrice: "$20.00",
            newPrice: "$13.00",
            stars: 5
        },
        {
            image: image2,
            type: "Fresh",
            name: "Fresh Banana Fruites",
            oldPrice: "$20.00",
            newPrice: "$14.00",
            stars: 3
        },
        {
            image: image3,
            type: "Millets",
            name: "White Nuts",
            oldPrice: "$20.00",
            newPrice: "$15.00",
            stars: 5
        },
        {
            image: image4,
            type: "Vegetable",
            name: "Vegan Red Tomato",
            oldPrice: "$20.00",
            newPrice: "$17.00",
            stars: 5
        },
        {
            image: image5,
            type: "Health",
            name: "Mung Bean",
            oldPrice: "$20.00",
            newPrice: "$11.00",
            stars: 4
        },
        {
            image: image6,
            type: "Nuts",
            name: "Brown Hazelnut",
            oldPrice: "$20.00",
            newPrice: "$12.00",
            stars: 5
        },
        {
            image: image7,
            type: "Fresh",
            name: "Eggs",
            oldPrice: "$20.00",
            newPrice: "$17.00",
            stars: 5
        },
        {
            image: image8,
            type: "Fresh",
            name: "Zelco Suji Elaichi Rusk",
            oldPrice: "$20.00",
            newPrice: "$15.00",
            stars: 3
        }
    ]

    return (
        <div>
            <div className={"p-[10%]"}>
                <div className={"w-full text-center"}>
                    <h3 className={"font-yellowTail text-[35px] text-[#7EB693]"}>Categories </h3>
                    <h2 className={"text-[40px] text-[#274C5B] font-bold"}>Our Products</h2>
                </div>
                <div className={"w-full flex flex-wrap justify-between"}>
                    {
                        dataProducts.map((item, index) => (
                            <div key={index}
                                 className={"relative sm:w-[100%] md:w-[49%] lg:w-[32%] xl:w-[24%] rounded-2xl overflow-hidden my-2 shadow-lg hover:-translate-y-1 transition-all"}>
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
                                <div className={"absolute top-[7%] left-[7%] bg-[#274C5B] px-3 py-1 text-white font-bold text-[14px] rounded-md"}>
                                    {item.type}
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className={"w-full text-center"}>
                    <Button className={"font-bold bg-[#274C5B] p-7 text-white mt-5"}
                            type={"dark"}
                            icon={<FaCircleArrowRight/>}
                            iconPosition={"end"}>
                        Learn More
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ProductsInside;
