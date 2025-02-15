import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const UpcomingSchedule = () => {
    return (
        <>
            {
                ['1'].map((index) => {
                    return (
                        <>
                            <div key={index} className='rounded-[6px] mb-4 overflow-hidden shadow-[0px_4px_8.4px_#0000001A]'>
                                <div>
                                    <div className="text-[#464646] bg-[#EBF2FF] d-flex gap-1 justify-between items-center px-3 py-3 border-b">
                                        <span>December 29,2024</span>
                                    </div>
                                    <a href='/kabbadi/kabbadi-schedule/schedule' className='px-4 py-2 block text-black'>
                                        <div className='row items-center'>
                                            <div className="col-2 text-theme-color">Final</div>
                                            <div className='col-3'>
                                                <div className="flex items-center gap-2 font-semibold">
                                                    <img src="/assets/images/svg/harayana.svg" alt="city" className='w-[40px]' />
                                                    Haryana Steelers
                                                </div>
                                            </div>
                                            <div className="col">32</div>
                                            <div className="col"><img src="/assets/images/svg/ft.svg" alt="FT" /></div>
                                            <div className='col-3'>
                                                <div className="flex items-center gap-2">
                                                    <img src="/assets/images/svg/ft1.svg" alt="FT" className='w-[40px]' />
                                                    23 Patna Pirates
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div className="flex items-center justify-between gap-3">
                                                    Shree Shiv Chhatrapati Sports
                                                    Complex, Balewadi, Pune
                                                    <IoIosArrowForward className='text-xl' />
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className='rounded-[6px] mb-4 overflow-hidden shadow-[0px_4px_8.4px_#0000001A]'>
                                <div>
                                    <div className="text-[#464646] bg-[#EBF2FF] d-flex gap-1 justify-between items-center px-3 py-3 border-b">
                                        <span>December 27, 2024</span>
                                    </div>
                                    <a href='/kabbadi/kabbadi-schedule/schedule' className='px-4 py-2 border-b block text-black'>
                                        <div className='row items-center'>
                                            <div className="col-2 text-theme-color">Semi-Final 2</div>
                                            <div className='col-3'>
                                                <div className="flex items-center gap-2 font-semibold">
                                                    <img src="/assets/images/svg/delhi.svg" alt="city" className='w-[40px]' />
                                                    Dabang Delhi KC
                                                </div>
                                            </div>
                                            <div className="col">32</div>
                                            <div className="col"><img src="/assets/images/svg/ft.svg" alt="FT" /></div>
                                            <div className='col-3'>
                                                <div className="flex items-center gap-2">
                                                    <img src="/assets/images/svg/ft1.svg" alt="FT" className='w-[40px]' />
                                                    23 Patna Pirates
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div className="flex items-center justify-between gap-3">
                                                    Shree Shiv Chhatrapati Sports
                                                    Complex, Balewadi, Pune
                                                    <IoIosArrowForward className='text-xl' />
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href='/kabbadi/kabbadi-schedule/schedule' className='px-4 py-2 block text-black'>
                                        <div className='row items-center'>
                                            <div className="col-2 text-theme-color">Semi-Final 2</div>
                                            <div className='col-3'>
                                                <div className="flex items-center gap-2 font-semibold">
                                                    <img src="/assets/images/svg/delhi.svg" alt="city" className='w-[40px]' />
                                                    Dabang Delhi KC
                                                </div>
                                            </div>
                                            <div className="col">32</div>
                                            <div className="col"><img src="/assets/images/svg/ft.svg" alt="FT" /></div>
                                            <div className='col-3'>
                                                <div className="flex items-center gap-2">
                                                    <img src="/assets/images/svg/ft1.svg" alt="FT" className='w-[40px]' />
                                                    23 Patna Pirates
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div className="flex items-center justify-between gap-3">
                                                    Shree Shiv Chhatrapati Sports
                                                    Complex, Balewadi, Pune
                                                    <IoIosArrowForward className='text-xl' />
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </>
    )
}

export default UpcomingSchedule