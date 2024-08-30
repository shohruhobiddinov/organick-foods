import React from 'react';
import image from '../assets/Photo (1).jpg'

function EcoFriendlyInside(props) {

    const infoData = [
        {
            title: "Start with Our Company First",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis",
        },
        {
            title: "Learn How to Grow Yourself",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.",
        },
        {
            title: "Farming Strategies of Today",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.",
        },
    ]

    return (
        <div>
            <div className={"flex flex-wrap items-center justify-center"}>
                <div className={"sm:w-[100%] md:w-[100%] lg:w-[50%]"}>
                    <img src={image} alt="" className={"w-full"}/>
                </div>
                <div className="sm:w-[100%] md:w-[100%] lg:w-[50%] relative">
                    <div className={"p-10"}>
                        <h3 className={"font-yellowTail text-[30px] text-[#7EB693]"}>Eco Friendly</h3>
                        <h2 className={"sm:text-[30px] md:text-[35px] text-[#274C5B] font-bold"}>
                            Econis is a Friendly Organic Store</h2>
                        {
                            infoData.map((item, index) => (
                                <div className={"my-5"}>
                                    <h3 className={"text-[#274C5B] text-[20px] font-bold"}>
                                        {item.title}
                                    </h3>
                                    <p className={"text-[#525C60]"}>
                                        {item.description}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EcoFriendlyInside;
