import React from 'react';
import Footer from "../home/footer";
import {Button} from "antd";
import {FaCircleArrowRight} from "react-icons/fa6";
import {Link} from "react-router-dom";

function Error404(props) {
    return (
        <div>
            <div className={"error404 w-full h-[100vh] flex items-center justify-center px-10"}>
                <div className={"rounded-2xl p-5 w-[400px] sm:ml-0 md:ml-[10%] lg:ml-[30%] xl:ml-[50%]"}>
                    <h1 className={"text-[#8FA8A8] sm:text-[1000%] md:text-[1500%] font-bold leading-none"}>404</h1>
                    <h2 className={"text-[#274C5B] font-bold text-[300%]"}>Page not found</h2>
                    <p className={"text-[#525C60]"}>The page you are looking for doesn't exist or has been moved</p>
                    <Link to={"/"}>
                        <Button className={"font-bold bg-[#274C5B] text-white p-7 mt-5"}
                                icon={<FaCircleArrowRight/>}
                                iconPosition={"end"}
                                type="submit">
                            Go to Homepage
                        </Button>
                    </Link>
                </div>
            </div>

            <Footer/>
        </div>
    );
}

export default Error404;