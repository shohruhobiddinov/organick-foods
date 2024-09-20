import React, {useState} from 'react';
import banner from "../../assets/Banner (2).png"
import {useLocation} from "react-router-dom";
import {FaStar} from "react-icons/fa";
import {Button} from "antd";
import {FaCircleArrowRight} from "react-icons/fa6";

function ShopSingle() {

    const [count, setCount] = useState(0);

    const location = useLocation();
    const product = location.state?.product

    if (!product) return <p>Item doesn't found!</p>

    return (
        <div>
            <div>
                <img src={banner} alt="banner" className={"w-full"}/>
            </div>
            <div className={"p-[10%] flex flex-wrap items-center"}>
                <div
                    className={"sm:w-full lg:w-[40%] flex justify-center items-center relative rounded-3xl border border-slate-300 p-[5%]"}>
                    <img src={product.image} alt={product.name} className={"w-[300px]"}/>
                    <div
                        className={"absolute top-[7%] left-[7%] bg-[#274C5B] px-3 py-1 text-white font-bold text-[14px] rounded-md"}>
                        {product.type}
                    </div>
                </div>
                <div className={"sm:w-full lg:w-[60%] p-[5%]"}>
                    <h1 className={"text-[#274C5B] text-[40px] font-bold"}>{product.name}</h1>
                    <div className={"text-[#FFA858] flex gap-2 my-3"}>
                        {Array(product.stars).fill().map((_, i) => (
                            <FaStar key={i}/>
                        ))}
                    </div>
                    <div className={"flex gap-3"}>
                        <p className={"text-[15px] line-through text-[#B8B8B8]"}> {product.oldPrice} </p>
                        <p className={"text-[15px] text-[#274C5B]"}> {product.newPrice} </p>
                    </div>
                    <p className={"text-[#525C60] my-5"}>
                        Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                    </p>
                    <div className={"flex flex-wrap items-center gap-5"}>
                        <h3 className={"text-[#274C5B] font-bold"}>Quantity :</h3>
                        <Button type={"dark"}
                                className={"bg-transparent text-[#274C5B] border-2 border-[#274C5B] p-7 font-bold"}
                                onClick={() => setCount(count + 1)}>
                            {count}
                        </Button>
                        <Button className={"font-bold bg-[#274C5B] p-7 text-white my-5"} type={"dark"}
                                icon={<FaCircleArrowRight/>} iconPosition={"end"}>
                            Add to Cart
                        </Button>
                    </div>
                </div>
                <div className={"w-full my-5"}>
                    <div className={"w-full text-center flex flex-wrap justify-center gap-5"}>
                        <Button className={"font-bold bg-[#274C5B] p-7 text-white text-[21px]"} type={"dark"}>
                            Product Description
                        </Button>
                        <Button className={"font-bold bg-[#EFF6F1] p-7 text-[#274C5B] text-[21px]"} type={"dark"}>
                            Additional Info
                        </Button>
                    </div>
                    <p className={"text-[#525C60] text-center my-5"}>
                        Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have
                        grown on the principles of health, ecology, and care. We aim to give our customers a healthy
                        chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as
                        glucose and fructose — make up 70% and 80% of the carbs in raw.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ShopSingle;