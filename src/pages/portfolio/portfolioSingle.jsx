import React from 'react';
import SubscribeInside from "../home/subscribeInside";
import Footer from "../home/footer";
import image from "../../assets/Image (44).png"
import image2 from "../../assets/Image (45).png"

function PortfolioSingle(props) {
    return (
        <div>
            <div className={"w-full relative sm:mb-0 lg:mb-[15%]"}>
                <img src={image} alt="banner"/>
                <div className={"w-[80%] sm:hidden lg:flex bg-white rounded-2xl p-10 flex-wrap justify-between items-center absolute top-[80%] left-[10%] shadow-lg"}>
                    <div className={"sm:w-full lg:w-[70%]"}>
                        <h2 className={"text-[#274C5B] text-[40px] font-bold"}>Black Raspberry</h2>
                        <p className={"text-[#525C60] mt-5"}>
                            Established fact that a reader will be distracted by the readable content of a page when
                            looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                            distribution of letters, as opposed
                        </p>
                    </div>
                    <div className={"sm:w-full lg:w-[25%]"}>
                        <span className={"flex justify-between my-3"}>
                            <h3 className={"text-[#274C5B] font-bold"}>Date</h3>
                            <p className={"text-[#525C60]"}>December 4, 2022</p>
                        </span>
                        <span className={"flex justify-between my-3"}>
                            <h3 className={"text-[#274C5B] font-bold"}>Client</h3>
                            <p className={"text-[#525C60]"}>Kevin Martin</p>
                        </span>
                        <span className={"flex justify-between my-3"}>
                            <h3 className={"text-[#274C5B] font-bold"}>Category</h3>
                            <p className={"text-[#525C60]"}>Agriculture , Eco</p>
                        </span>
                        <span className={"flex justify-between my-3"}>
                            <h3 className={"text-[#274C5B] font-bold"}>Service</h3>
                            <p className={"text-[#525C60]"}>Organic Products</p>
                        </span>
                    </div>
                </div>
            </div>

            <div className={"my-10 mx-auto sm:w-[80%] md:w-[70%] lg:w-[60%]"}>
                <h3 className="text-[#274C5B] font-bold text-[30px]">
                    About The Farm:
                </h3>
                <p className={"text-[#525C60] my-5"}>
                    t is a long established fact that a reader will be distracted by the readable content of a page when
                    looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                    of letters, as opposed to using 'Content here, content here', making it look like readable English.
                </p>
                <p className={"text-[#525C60] my-5"}>
                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model
                    text, and auncover many web sites still in their infancy. Various versions have evolved over the
                    years
                </p>
                <img src={image2} alt="Image of carrot" className={"w-full my-5"}/>
                <h3 className="text-[#274C5B] font-bold text-[30px]">
                    How To Farm:
                </h3>
                <p className={"text-[#525C60] my-5"}>
                    t is a long established fact that a reader will be distracted by the readable content of a page when
                    looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                    of letters, as opposed to using 'Content here, content here', making it look like readable English.
                </p>
                <p className={"text-[#525C60] my-5"}>
                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model
                    text, and auncover many web sites still in their infancy. Various versions have evolved over the
                    years
                </p>
                <h3 className="text-[#274C5B] font-bold text-[30px]">
                    Conclusion:
                </h3>
                <p className={"text-[#525C60] my-5"}>
                    t is a long established fact that a reader will be distracted by the readable content of a page when
                    looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                    of letters, as opposed to using 'Content here, content here', making it look like readable English.
                </p>
                <p className={"text-[#525C60] my-5"}>
                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model
                    text, and auncover many web sites still in their infancy. Various versions have evolved over the
                    years
                </p>
            </div>


            <SubscribeInside/>
            <Footer/>
        </div>
    );
}

export default PortfolioSingle;
