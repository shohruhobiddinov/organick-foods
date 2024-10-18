import React from 'react';
import banner from "../../assets/Banner (8).png"
import SubscribeInside from "../home/subscribeInside";
import Footer from "../home/footer";

function Licences(props) {
    let dataOfLicences = [
        {
            title: "Icon & Graphics",
            description: "Icons and Graphics are manually designed by the VictorFlow Templates team. You may download these and edit them to fit your website without asking for permission or providing credit.\n" +
                "\n" +
                "Upon purchasing Software UI Kit Template our team grants you a nonexclusive, worldwide copyright license to download, copy, modify, and use the icons."
        },
        {
            title: "Photography",
            description: "All images used in the Organick Webflow Template are licensed for free personal and commercial use. If you'd like to use any specific image, you can check the licenses and download the images for free on Unsplash, Pexels‍. And Freepik."
        },
        {
            title: "Unsplash",
            description: "Image 1,  Image 2, Image 3, Image 4, Image 5, Image 6, Image 7, Image 8, Image 9, Image 10, Image 11, Image 12, Image 13, Image 14, Image 15, Image 16, Image 17, Image 18, Image 19, Image 20, Image 21, Image 22, Image 23, Image 24, Image 25,"
        },
        {
            title: "Pixcel",
            description: "Image 1,  Image 2, Image 3, Image 4, Image 5, Image 6, Image 7, Image 8, Image 9, Image 10, Image 11, Image 12, Image 13, Image 14, Image 15, Image 16, Image 17, "
        },
        {
            title: "Font",
            description: `Organick template uses free licensed Google Fonts. Please check ${<b className={"text-[#274C5B]"}>Roboto, Yellowtail</b>} and ${<b className={"text-[#274C5B]"}>Open Sans</b>} .`
        },

    ]

    return (
        <div>
            <div className={"w-full"}>
                <img src={banner} alt="banner" className={"w-full"}/>
            </div>
            <div className={"w-full px-[10%]"}>
                {
                    dataOfLicences.map((item, index) => (
                        <div key={index} className={"flex flex-wrap my-10"}>
                            <h2 className={"text-[#274C5B] font-bold text-[25px] sm:mr-0 md:mr-[5%] sm:w-full md:w-[25%]"}>
                                {item.title}
                            </h2>
                            <p className={"text-[#525C60] sm:w-full md:w-[70%]"}>
                                {item.description}
                            </p>
                        </div>
                    ))
                }
            </div>

            <SubscribeInside/>
            <Footer/>
        </div>
    );
}

export default Licences;