import React from 'react';
import image1 from "../assets/Photo (2).jpg"
import image2 from "../assets/Photo (3).jpg"
import image3 from "../assets/Image (28).png"
import {Button} from "antd";

function JuiceInside(props) {

    const dataJuice = [
        {
            image: image1,
            title: "Organick Juice"
        },
        {
            image: image2,
            title: "Organick Food"
        },
        {
            image: image3,
            title: "Nuts Cookies"
        }
    ]

    return (
        <div>
            <div className={"bg-[#F1F8F4] py-[10%] flex flex-wrap items-center justify-between"}>
                {
                    dataJuice.map((item, index) => (
                        <div className={"sm:w-[100%] md:w-[48%] lg:w-[32%] mt-7 relative flex items-center justify-center"}>
                            <img src={item.image} alt=""/>
                            <Button className={"absolute bg-[white] text-[#274C5B] font-bold py-7 px-10"}>
                                {item.title}
                            </Button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default JuiceInside;