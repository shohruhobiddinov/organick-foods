import React, {useState} from 'react';
import logo from "../assets/Logo (1).svg"
import {Button, Drawer, Input} from "antd";
import {SearchOutlined} from "@ant-design/icons";
import {IoCartOutline} from "react-icons/io5";
import {Link} from "react-router-dom";
import {MdMenu} from "react-icons/md";

function Navbar(props) {
    const [openDrawer, setOpenDrawer] = useState(false);

    const showDrawer = () => setOpenDrawer(true);
    const closeDrawer = () => setOpenDrawer(false);

    return (
        <div>
            <div className={"py-5 px-10 w-full flex items-center justify-between"}>
                <Link to={"/"}>
                    <img src={logo} alt="Organick logo" className={"sm:w-[130px] md:w-[150px]"}/>
                </Link>
                <div className={"sm:hidden md:hidden lg:block"}>
                    <div className={"flex items-center gap-7 font-bold text-[#274C5B]"}>
                        <Link to={"/"}>Home</Link>
                        <Link to={"/"}>About</Link>
                        <p>Pages</p>
                        <p>Shop</p>
                        <p>Projects</p>
                        <p>News</p>
                    </div>
                </div>
                <div className="sm:hidden md:hidden lg:block">
                    <div className={"flex items-center gap-5"}>
                        <Input className={"p-0 pl-5 rounded-3xl bg-[#FAFAFA] border-none"} placeholder={"Search..."}
                               suffix={<SearchOutlined
                                   className={"bg-[#7EB693] rounded-full p-3 flex items-center justify-center text-white"}/>}/>
                        <Button className={"flex rounded-3xl items-center gap-2 py-5 font-bold text-[#274C5B]"}>
                            <IoCartOutline className={"w-[20px] h-[20px]"}/>
                            Cart (0)
                        </Button>
                    </div>
                </div>

                <MdMenu className={"cursor-pointer sm:block md:block lg:hidden text-[25px] text-[#274C5B]"}
                        onClick={showDrawer}/>
                <Drawer onClose={closeDrawer} open={openDrawer}>
                    <div className={"flex flex-col gap-4 font-bold text-[#274C5B] text-[18px]"}>
                        <Link to={"/"} onClick={closeDrawer}>Home</Link>
                        <Link to={"/"} onClick={closeDrawer}>About</Link>
                        <p>Pages</p>
                        <p>Shop</p>
                        <p>Projects</p>
                        <p>News</p>
                    </div>
                    <div className={"flex flex-col gap-5 my-5"}>
                        <Input className={"p-0 pl-5 rounded-3xl bg-[#FAFAFA] border-none"}
                               placeholder={"Search..."}
                               suffix={
                                   <SearchOutlined
                                       onClick={closeDrawer}
                                       className={"bg-[#7EB693] rounded-full p-3 flex items-center justify-center text-white"}
                                   />
                               }
                        />
                        <Button className={"flex rounded-3xl items-center gap-2 py-5 font-bold text-[#274C5B]"}
                        onClick={closeDrawer}>
                            <IoCartOutline className={"w-[20px] h-[20px]"}/>
                            Cart (0)
                        </Button>
                    </div>
                </Drawer>
            </div>
        </div>
    );
}

export default Navbar;
