import React, {useState} from 'react';
import logo from "../assets/Logo (1).svg"
import {Button, Drawer, Dropdown, Input, Space} from "antd";
import {SearchOutlined} from "@ant-design/icons";
import {IoCartOutline} from "react-icons/io5";
import {Link} from "react-router-dom";
import {MdMenu} from "react-icons/md";
import {DownOutlined, SmileOutlined} from '@ant-design/icons';

const items = [
    {
        key: '1',
        label: (
            <Link to={"/team"} className={"font-bold text-[#274C5B] text-[16px]"}>Team</Link>
        ),
    },
    {
        key: '2',
        label: (
            <Link to={"/blog"} className={"font-bold text-[#274C5B] text-[16px]"}>Blog</Link>
        ),
    },
    {
        key: '3',
        label: (
            <Link to={"/contactUs"} className={"font-bold text-[#274C5B] text-[16px]"}>Contact Us</Link>
        ),
    },
    {
        key: '4',
        label: (
            <Link to={"/licences"} className={"font-bold text-[#274C5B] text-[16px]"}>Licences</Link>
        ),
    },
    {
        key: '5',
        label: (
            <Link to={"/changelog"} className={"font-bold text-[#274C5B] text-[16px]"}>Changelog</Link>
        ),
    },
    {
        key: '6',
        label: (
            <Link to={"/protected"} className={"font-bold text-[#274C5B] text-[16px]"}>Protected</Link>
        ),
    },
];

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
                        <Link to={"/about"}>About</Link>
                        <Link to={"/shop"}>Shop</Link>
                        <Link to={"/service"}>Services</Link>
                        <Link to={"/portfolio"}>Portfolio</Link>
                        <Dropdown menu={{items}}>
                            <Space className={"cursor-pointer"}>
                                <h3>Others</h3>
                                <DownOutlined/>
                            </Space>
                        </Dropdown>
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
                        <Link to={"/about"} onClick={closeDrawer}>About</Link>
                        <Link to={"/shop"} onClick={closeDrawer}>Shop</Link>
                        <Link to={"/service"}>Services</Link>
                        <Link to={"/portfolio"}>Portfolio</Link>
                        <Link to={"/team"}>Team</Link>
                        <Link to={"/blog"}>Blog</Link>
                        <Link to={"/contactUs"}>Contact Us</Link>
                        <Link to={"/licences"}>Licences</Link>
                        <Link to={"/changelog"}>Changelog</Link>
                        <Link to={"/protected"}>Protected</Link>
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
