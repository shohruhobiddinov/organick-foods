import React from 'react';
import customerImage1 from "../assets/Photo.jpg"
import customerImage2 from "../assets/avatar2.webp"
import customerImage3 from "../assets/avatar3.webp"
import customerImage4 from "../assets/avatar4.webp"
import customerImage5 from "../assets/avatar5.webp"
import {Carousel} from "antd";
import {FaStar} from "react-icons/fa";
import {LeftOutlined, RightOutlined} from "@ant-design/icons";

function TestimonialsInside(props) {

    const carouselData = [
        {
            customerImage: customerImage1,
            stars: 5,
            comment: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
            name: "Sara Taylor",
            job: "Consumer"
        },
        {
            customerImage: customerImage2,
            stars: 4,
            comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy text.",
            name: "John Doe",
            job: "Designer"
        },
        {
            customerImage: customerImage3,
            stars: 5,
            comment: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            name: "Emily Smith",
            job: "Developer"
        },
        {
            customerImage: customerImage4,
            stars: 3,
            comment: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.",
            name: "Michael Brown",
            job: "Manager"
        },
        {
            customerImage: customerImage5,
            stars: 4,
            comment: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
            name: "Jessica Johnson",
            job: "Photographer"
        }
    ]

    const CustomPrevArrow = (props) => (
        <div {...props} style={{fontSize: "0px"}}>
            <LeftOutlined style={{ color: '#274C5B', fontSize: "25px"}}/>
        </div>
    );

    const CustomNextArrow = (props) => (
        <div {...props} style={{fontSize: "0px"}}>
            <RightOutlined style={{ color: '#274C5B', fontSize: "25px"}}/>
        </div>
    );

    return (
        <div>
            <div className={"testimonials w-full h-[120vh] flex flex-col justify-center"}>
                <div className={"text-center"}>
                    <h3 className={"font-yellowTail text-[35px] text-[#7EB693]"}>Testimonial </h3>
                    <h2 className={"text-[40px] text-[#274C5B] font-bold"}>What Our Customer Saying?</h2>
                </div>
                <Carousel className={"sm:w-[90%] md:w-[75%] lg:w-[60%] mx-auto px-[5%]"}
                          autoplay
                          autoplaySpeed={2000}
                          arrows
                          prevArrow={<CustomPrevArrow />}
                          nextArrow={<CustomNextArrow />}>

                    {
                        carouselData.map((item, index) => <div key={index} className={"text-center py-10"}>
                            <h3>
                                <img src={item.customerImage} alt="customer image"
                                     className={"mx-auto rounded-full w-[130px]"}/>
                            </h3>
                            <span className={"text-[#FFA858] flex gap-2 justify-center my-5"}>
                                {Array(item.stars).fill().map((_, i) => (
                                    <FaStar key={i} className={"w-[20px] h-[20px]"}/>
                                ))}
                            </span>
                            <p className={"text-[#525C60] text-[18px]"}>
                                {item.comment}
                            </p>
                            <h3 className={"text-[#274C5B] font-bold text-[20px] my-3"}>
                                {item.name}
                            </h3>
                            <p className={"text-[#525C60]"}>
                                {item.job}
                            </p>
                        </div>)
                    }
                </Carousel>
            </div>
        </div>
    );
}

export default TestimonialsInside;
