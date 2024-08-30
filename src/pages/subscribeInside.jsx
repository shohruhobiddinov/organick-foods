import React from 'react';
import {FaCircleArrowRight} from "react-icons/fa6";
import {Button, Input} from "antd";
import {MdOutlineMailOutline} from "react-icons/md";

function SubscribeInside(props) {
    return (
        <div className="px-[10%] py-10">
            <div className={"subscribeInside p-[10%] flex flex-wrap items-center justify-between rounded-3xl"}>
                <h2 className={"sm:text-[30px] md:text-[35px] font-bold text-white"}>
                    Subscribe to <br/>
                    our Newsletter
                </h2>
                <div className={"flex items-center gap-2 mt-5"}>
                    <Input placeholder={"Your Email Address"}
                           className={"py-4 pr-12 pl-5"}
                            prefix={<MdOutlineMailOutline className={"text-[#ABABAB]"}/>}/>
                    <Button className={"font-bold bg-[#274C5B] p-7 text-white"}
                            type={"dark"}>
                        Subscribe
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default SubscribeInside;
