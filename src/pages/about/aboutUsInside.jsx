import React from 'react';
import image1 from "../../assets/Image (38).png"
import image2 from "../../assets/Image (35).png"
import image3 from "../../assets/Image (36).png"
import image4 from "../../assets/Image (37).png"

function AboutUsInside(props) {

    const data = [
        {
            image: image1,
            title: "Spicy"
        },
        {
            image: image2,
            title: "Nuts & Feesd"
        },
        {
            image: image1,
            title: "Fruits"
        },
        {
            image: image2,
            title: "Vegetable"
        },
    ]

    return (
        <div>
            <div className={"bg-[#274C5B] p-[10%] text-white"}>
                <div className={"w-full text-center"}>
                    <h3 className={"text-[#7EB693] font-yellowTail text-[30px]"}>About Us</h3>
                    <h2 className={"font-bold text-[40px]"}>
                        What We Offer for You
                    </h2>
                </div>
                <div className={"w-full flex flex-wrap justify-between items-center"}>
                    {
                        data.map((item, index) => (
                            <div key={index} className={"sm:w-full md:w-[48%] lg:w-[32%] xl:w-[24%] my-5 text-center cursor-pointer transition-all hover:-translate-y-1.5"}>
                                <img src={item.image} alt={item.title} className={"w-full rounded-3xl"}/>
                                <h3 className={"font-bold my-3"}>{item.title}</h3>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default AboutUsInside;