import React, { useRef, useState } from 'react'
import { HiMiniBars3 } from 'react-icons/hi2';
import { IoIosArrowForward, IoIosNotificationsOutline } from "react-icons/io";
import { useLocation, useNavigate } from 'react-router-dom';

const Header1 = () => {

    const location = useLocation()
    const navigate = useNavigate()
    const dropdownRef = useRef(null);
    const notificationRef = useRef(null);
    const [profile, setProfile] = useState(false);
    const [notification, setNotification] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState("");

    const notificationToggle = () => {
        if (activeDropdown === "notification") {
            setActiveDropdown("");
            setNotification(false);
        } else {
            setActiveDropdown("notification");
            setNotification(true);
            setProfile(false);
        }
    };

    const handleLogout = () => {
        window.location.href = "/";
    }

    return (
        <header>
            <div className="px-[60px] d-flex items-center justify-between">
                <div className='d-flex items-center gap-3'>
                    <HiMiniBars3 className='text-2xl cursor-pointer' />
                    <a href='/'>
                        <img src="/assets/images/logo.svg" alt="logo" />
                    </a>
                </div>
                <div className="d-flex items-center gap-3">
                    <div className="group rounded-full d-sm-flex hidden z-10 justify-center items-center relative cursor-pointer duration-300" ref={notificationRef}>
                        <IoIosNotificationsOutline className='text-2xl' onClick={notificationToggle} />
                        <div
                            ref={dropdownRef}
                            className={`opacity-0 invisible group-hover:!opacity-100 group-hover:!visible duration-500 bg-white shadow w-[300px] p-3 absolute top-full mt-2 rounded-lg right-0`}
                        >
                            <h1 className="text-2xl text-center">Notifications</h1>
                            <img src="/assets/images/svg/notification.svg" alt="notification" className='mx-auto w-[150px] my-4' />
                            <p className='text-theme-color/80 text-center'>You don’t have any notification</p>
                        </div>
                    </div>

                    <div className="relative d-sm-block hidden group">
                        <div className="w-[32px] h-[32px] text-theme-color border-[1px] border-theme-color font-bold bg-white rounded-full flex items-center justify-center cursor-pointer">
                            J
                        </div>
                        <div
                            className={`duration-500 opacity-0 invisible z-10 group-hover:!opacity-100 group-hover:!visible bg-white shadow w-[250px] p-[12px] absolute top-full mt-2 rounded-lg right-0`}
                        >
                            <div className="flex items-center gap-3 p-[6px]">
                                <div className="flex flex-col">
                                    <span className='text-sm'>jems.scalf@gmail.com</span>
                                </div>
                            </div>
                            <hr className='w-auto m-[6px] border-black/30' />
                            <a
                                href="#accounts"
                                className="text-black text-sm flex items-center rounded-lg my-1  p-[6px] hover:bg-[#E6EBF5]"
                            >
                                Account
                            </a>
                            <a
                                href="#report"
                                className="text-black text-sm flex items-center rounded-lg my-1 p-[6px] hover:bg-[#E6EBF5]"
                            >
                                Report content
                            </a>
                            <a
                                href="#legal"
                                className="text-black text-sm flex items-center main_menu justify-between rounded-lg my-1 p-[6px] hover:bg-[#E6EBF5]"
                            >
                                Legal <IoIosArrowForward />

                                <div className='sub_menu'>
                                    <div className='bg-white p-[12px] w-[250px] rounded-lg shadow'>
                                        <a
                                            href="#report"
                                            className="text-black text-sm flex items-center rounded-lg my-1 p-[6px] hover:bg-[#E6EBF5]"
                                        >
                                            Terms of Use
                                        </a>
                                        <a
                                            href="#report"
                                            className="text-black text-sm flex items-center rounded-lg my-1 p-[6px] hover:bg-[#E6EBF5]"
                                        >
                                            Privacy Policy
                                        </a>
                                        <a
                                            href="#report"
                                            className="text-black text-sm flex items-center rounded-lg my-1 p-[6px] hover:bg-[#E6EBF5]"
                                        >
                                            FAQs
                                        </a>
                                    </div>
                                </div>
                            </a>
                            <a
                                href="#settings"
                                className="text-black text-sm flex items-center rounded-lg my-1 p-[6px] hover:bg-[#E6EBF5]"
                            >
                                Settings
                            </a>
                            <span
                                onClick={handleLogout}
                                className="text-black text-sm flex items-center rounded-lg my-1 p-[6px] hover:bg-[#E6EBF5] cursor-pointer"

                            >
                                Sign out
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header1