import React from 'react';
import banner from "../../assets/Banner (3).png"
import photo from "../../assets/Photo (19).png"
import image1 from "../../assets/Image (39).png"
import image2 from "../../assets/Image (40).png"
import SubscribeInside from "../home/subscribeInside";
import Footer from "../home/footer";

function ServiceSingle(props) {
    return (
        <div>
            <div>
                <img src={banner} alt="banner" className={"w-full"}/>
            </div>
            <div className={"p-[10%]"}>
                <img src={photo} alt="gardener" className={"w-full"}/>
                <div className={"sm:w-full lg:w-[80%] mx-auto"}>
                    <h2 className={"font-bold text-[40px] text-[#274C5B] mt-10"}>
                        Organic Store Services
                    </h2>
                    <p className={"text-[#525C60] my-5"}>
                        t is a long established fact that a reader will be distracted by the readable content of a page
                        when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                        distribution of letters, as opposed to using 'Content here, content here', making it look like
                        readable English.
                    </p>
                    <p className={"text-[#525C60] my-5"}>
                        Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model
                        text, and auncover many web sites still in their infancy. Various versions have evolved over the
                        years
                    </p>
                    <div className={"flex flex-wrap justify-between"}>
                        <div className={"sm:w-full lg:w-[39%] my-3 rounded-3xl"}>
                            <img src={image1} alt="image1" className={"w-full"}/>
                        </div>
                        <div
                            className={"sm:w-full lg:w-[59%] my-3 rounded-3xl bg-[#F9F8F8] flex flex-col justify-center p-7"}>
                            <h3 className={"font-bold text-[#274C5B] text-[22px]"}>Why Organic</h3>
                            <p className={"text-[#525C60] my-5"}>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptat. page editors now use Lorem
                                Ipsum as their default model text, and auncover.
                            </p>
                        </div>
                    </div>
                    <div className={"flex flex-wrap justify-between"}>
                        <div
                            className={"sm:w-full lg:w-[59%] my-3 rounded-3xl bg-[#F9F8F8] flex flex-col justify-center p-7"}>
                            <h3 className={"font-bold text-[#274C5B] text-[22px]"}>Speciality Produce</h3>
                            <p className={"text-[#525C60] my-5"}>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptat. page editors now use Lorem
                                Ipsum as their default model text, and auncover.
                            </p>
                        </div>
                        <div className={"sm:w-full lg:w-[39%] my-3 rounded-3xl"}>
                            <img src={image2} alt="image1" className={"w-full"}/>
                        </div>
                    </div>
                </div>
                <div className={"sm:w-full lg:w-[80%] mx-auto"}>
                    <div className={"w-full my-10"}>
                        <h3 className={"text-[#274C5B] font-bold text-[30px]"}>We farm your land</h3>
                        <p className={"text-[#525C60] mt-5"}>It is a long established fact that a reader will be
                            distracted by the readable content of a
                            page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less
                            normal distribution of letters, as opposed to using 'Content here, content here', making it
                            look like readable English.</p>
                    </div>
                    <div className={"w-full flex justify-between flex-wrap"}>
                        <div className={"flex items-center gap-5 p-4 bg-[#F9F8F8] rounded-full sm:w-full md:w-[49%] my-3"}>
                            <span className={"text-[22px] rounded-full py-2 px-3 bg-[#7EB693] text-white font-bold"}>
                                01
                            </span>
                            <span className={"text-[22px] rounded-full text-[#274C5B] font-bold"}>
                                Best quality support
                            </span>
                        </div>
                        <div className={"flex items-center gap-5 p-4 bg-[#F9F8F8] rounded-full sm:w-full md:w-[49%] my-3"}>
                            <span className={"text-[22px] rounded-full py-2 px-3 bg-[#7EB693] text-white font-bold"}>
                                02
                            </span>
                            <span className={"text-[22px] rounded-full text-[#274C5B] font-bold"}>
                                Money back guarantee
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <SubscribeInside/>
            <Footer/>
        </div>
    );
}

export default ServiceSingle;