import React from 'react';
import {useLocation} from "react-router-dom";
import SubscribeInside from "../home/subscribeInside";
import Footer from "../home/footer";
import {FaUser} from "react-icons/fa";

function BlogSingle(props) {
    const location = useLocation();
    const product = location.state?.product

    if (!product) return <p>Item doesn't found!</p>

    return (
        <div>
            <div className={"w-full px-[10%] flex flex-wrap justify-between items-center my-5"}>
                <div className={"sm:w-full lg:w-[50%]"}>
                    <img src={product.image} alt={product.title} className={"w-full"}/>
                </div>
                <div className={"sm:w-full lg:w-[50%] sm:pl-0 lg:pl-10 my-5"}>
                    <div className={"flex items-center gap-2 text-[#274C5B]"}>
                        <h3 className={"font-bold"}>Posted On:</h3>
                        <h3>{product.date1} {product.date2}</h3>
                    </div>
                    <div className={"flex items-center gap-2 my-3"}>
                        <FaUser className={"text-[#7EB693]"}/>
                        <h3>{product.by}</h3>
                    </div>
                    <h2 className={"text-[#274C5B] font-bold text-[35px]"}>
                        {product.title}
                    </h2>
                    <p className={"text-[#525C60] mt-3"}>
                        {product.description}
                    </p>
                </div>
            </div>

            <SubscribeInside/>
            <Footer/>
        </div>
    );
}

export default BlogSingle;