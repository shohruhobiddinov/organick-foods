import React from 'react';
import {FaPlay} from "react-icons/fa";
import {FaCirclePlay} from "react-icons/fa6";
import {Link} from "react-router-dom";

function OrganickOnlyInside(props) {
    return (
        <div>
            <div className={"organickOnlyInside w-full h-[120vh] mt-10 flex justify-center items-center p-5"}>
                <div className={"sm:w-full lg:w-[50%] text-center"}>
                    <h3 className={"text-[#7EB693] font-yellowTail text-[30px]"}>Organic Only</h3>
                    <h2 className={"font-bold text-[40px] text-[#274C5B] my-3"}>
                        Everyday Fresh & Clean
                    </h2>
                    <p className={"text-[#274C5B]"}>
                        Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the
                        Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the
                        industry's standard dummy text ever since the
                    </p>
                    <span className={"flex justify-center"}>
                        <Link to={"/service/single"}>
                            <FaCirclePlay className={"text-[70px] text-[#7EB693] flex my-5 cursor-pointer"} />
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default OrganickOnlyInside;
