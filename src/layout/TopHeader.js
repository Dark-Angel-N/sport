import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { GrFacebookOption } from "react-icons/gr";
import { IoLogoInstagram } from "react-icons/io5";
import { RiTwitterXLine } from "react-icons/ri";
import { AiOutlineYoutube } from "react-icons/ai";

const TopHeader = () => {
    return (
        <div className='bg-[#E6EBF5] py-2 d-md-block d-none'>
            <div className='container-fluid xl:!px-[50px] lg:!px-[40px] !px-[16px]'>
                <div className='d-flex items-center justify-between'>
                    <div className='d-flex items-center gap-3'>
                        <div className='d-lg-block d-none'>
                            <h1 className='text-[15px]'>Weekend</h1>
                            <p className='text-xs mb-0'>23 OCT, 2023</p>
                        </div>
                        <div className='d-lg-flex d-none gap-2 items-center text-sm border-r-[1px] border-r-[#000000]/50 pe-4'>
                            <img src="/assets/images/svg/flag.svg" alt="flag" />IN
                        </div>
                        <div className='d-lg-flex d-none gap-2 items-center text-sm'>
                            <img src="/assets/images/svg/map-pin.svg" alt="map-pin" />Haryana
                        </div>
                        <div className='d-lg-flex d-none gap-2 items-center text-sm'>
                            <img src="/assets/images/svg/sunset.svg" alt="map-pin" />18°C
                        </div>
                        <div className='bg-white d-flex items-center gap-2 rounded-full overflow-hidden p-2'>
                            <input type="text" className='placeholder:text-[10px] outline-none text-sm w-[300px]' placeholder='Search for kabaddi, Cricket, Hockey...' />
                            <IoIosSearch />
                        </div>
                    </div>
                    <div className='d-flex items-center gap-3'>
                        <button className="bg-[#FF304E] rounded-[4px] text-white text-xs p-2">Newsletter</button>
                        <a href="https://www.facebook.com/sportzcraazy" className='text-black text-lg'><GrFacebookOption /></a>
                        <a href="https://www.instagram.com/sportzcraazy?igsh=MWx5Z3lhYm5sdTRnYw==" className='text-black text-lg'><IoLogoInstagram /></a>
                        {/* <a href="#twitter" className='text-black text-xl'><RiTwitterXLine /></a> */}
                        <a href="https://www.youtube.com/c/SportzCraazy" className='text-black text-lg'><AiOutlineYoutube /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeader