import React, { useEffect, useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { FiHome } from "react-icons/fi";
import Info from './Info';
import Scorecard from './Scorecard';
import Live from './Live';
import Squad from './Squad';

const Index = () => {

    const [activeMenu, setActiveMenu] = useState("Info");

    useEffect(() => {
        const savedMenu = localStorage.getItem("activeMenu");
        if (savedMenu) {
            setActiveMenu(savedMenu);
        }
    }, []);

    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
        localStorage.setItem("activeMenu", menu);
    };

    return (
        <div className='container'>
            <div className='flex items-center gap-2 text-sm text-black/50'>
                <FiHome className='text-xl' />
                <IoIosArrowForward />
                <span>Cricket News</span>
                <IoIosArrowForward />
                <span>India Women vs West Indies women 2024</span>
                <IoIosArrowForward />
                <span>2nd ODI(ICC Championship Match)</span>
            </div>
            <h1 className="text-[28px] my-4">Indian Women vs West Indies, 2nd ODI(ICC Championship Match)-Live Cricket Score, Commentary</h1>

            <div className='flex items-center gap-5 border-b pb-3 mb-4'>
                {["Info", "Fantasy", "Live", "Scorecard", "Squad"].map((menu) => (
                    <a
                        href="#"
                        key={menu}
                        onClick={() => handleMenuClick(menu)}
                        className={`text-black/50 ${activeMenu === menu ? "!text-[#0033A0] !underline underline-offset-4" : ""
                            }`}
                    >
                        {menu}
                    </a>
                ))}
            </div>
            <div className='mb-4'>
                <div className='row'>
                    <div className='col-9'>
                        {activeMenu === 'Info' && <Info />}
                        {activeMenu === 'Scorecard' && <Scorecard />}
                        {activeMenu === 'Live' && <Live />}
                        {activeMenu === 'Squad' && <Squad />}
                    </div>
                    <div className='col-3'>
                        <img src="/assets/images/svg/banner5.png" alt="banner" className='mb-4 mx-auto' />
                        <img src="/assets/images/svg/banner6.png" alt="banner" className='mx-auto' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index