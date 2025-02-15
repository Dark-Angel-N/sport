import React from 'react'
import { PiDotOutlineFill } from 'react-icons/pi'
import { IoIosArrowForward } from "react-icons/io";

const Info = () => {
    return (
        <div>
            <div className='bg-[#EBF2FF] rounded-[6px]'>
                <div>
                    <div className="text-[#464646] d-flex gap-1 items-center px-3 py-2 border-b">
                        <span>2nd ODI</span>
                        <span className="d-flex items-center gap-[2px]">
                            <PiDotOutlineFill />
                            Kotambi Stadium
                        </span>
                        <span className="d-flex items-center gap-[2px]">
                            <PiDotOutlineFill />
                            Vadodara
                        </span>
                    </div>
                    <div className='p-3'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <div className='flex items-center gap-3 mb-3 font-[500]'><img src="/assets/images/svg/ind.svg" alt="india" className='rounded-full' />Indian Women</div>
                                <div className='flex items-center gap-3 font-[500]'><img src="/assets/images/svg/west.svg" alt="india" className='rounded-full' />West Indies Women</div>
                            </div>
                            <div className='text-center'>
                                <button className='bg-black mb-3 text-white rounded px-3 py-2 text-xs'>Today</button>
                                <span className="text-lg block font-[700]">01:30 PM</span>
                            </div>
                        </div>
                        <p className='mb-0 text-[#1A1A1A]/70 text-xs mt-3'>Match yet to start</p>
                    </div>
                </div>
            </div>

            <h1 className='lg:text-[28px] text-[24px] my-4'>Info</h1>
            <div className='shadow-[0px_2px_9.4px_#00000014] d-flex'>
                <div className='w-[20%] p-4 border-r'>
                    <p>Date & Time</p>
                    <p>Venue</p>
                    <p>TV/Streaming</p>
                    <p className='mb-0'>Match</p>
                    <p className='h-[24px]'></p>
                    <p className='mb-0'>Toss</p>
                </div>
                <div className="w-[80%] p-4">
                    <p>24 Dec, 1:30 PM IST</p>
                    <p>Kotambi Stadium, Vadodara</p>
                    <p>JioCinema</p>
                    <p className='mb-0'>2nd ODI</p>
                    <p className='flex items-center justify-between'>
                        India Women vs West Indies Women 2024
                        <div className='flex items-center gap-2'>
                            <button className="text-[#0033A0] bg-[#0033A0]/10 rounded px-2 py-1 flex items-center gap-3">Schedule <IoIosArrowForward /></button>
                            <button className="text-[#0033A0] bg-[#0033A0]/10 rounded px-2 py-1 flex items-center gap-3">Stats <IoIosArrowForward /></button>
                        </div>
                    </p>
                    <p className='mb-0'>Toss yet to take place</p>
                </div>
            </div>

            <div className='bg-[#EBF2FF] rounded-[6px] my-5'>
                <div>
                    <div className="text-[#1A1A1A] d-flex gap-1 items-center px-3 py-2 border-b">
                        Weather Update
                    </div>
                    <div className='p-3'>
                        <div className='row row-cols-5 items-center'>
                            <div className='border-r border-r-black/10'>
                                <p className='mb-1'><strong>Vadodara,</strong> India</p>
                                <p className='mb-0 text-black/50'>Updated: 24 Dec 12:00</p>
                            </div>
                            <div className='text-center border-r border-r-black/10'>
                                <strong>22.7°C</strong>
                                <p className='mb-0'>Smoke</p>
                            </div>
                            <div className='text-center border-r border-r-black/10'>
                                <strong>69%</strong>
                                <p className='mb-0'>Clouds</p>
                            </div>
                            <div className='text-center border-r border-r-black/10'>
                                <strong>0%</strong>
                                <p className='mb-0'>Rains</p>
                            </div>
                            <div className='text-center'>
                                <strong>6.80kmph</strong>
                                <p className='mb-0'>Wind</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h1 className='lg:text-[28px] text-[24px] my-4'>Squads</h1>
            <div className='rounded-[6px] overflow-hidden border'>
                <div className='border-b px-4 py-3 flex items-center justify-between bg-[#EBF2FF]'>
                    <div className='flex items-center gap-3 font-[500] text-xl'><img src="/assets/images/svg/ind.svg" alt="india" className='rounded-full w-[60px]' />INDW</div>
                    <div className='flex items-center gap-3 font-[500] text-xl'>WIW<img src="/assets/images/svg/west.svg" alt="india" className='rounded-full w-[60px]' /></div>
                </div>
                <div className='p-4'>
                    <p className='text-center text-xl font-medium'>Playing XI</p>
                    <div className="row">
                        <div className="col-6 border-r">
                            {
                                ['1', '2', '3'].map((index) => {
                                    return (
                                        <div key={index}>
                                            <div className='flex items-center gap-3 mb-4'>
                                                <img src="/assets/images/svg/user1.svg" alt="user1" className='w-[70px]' />
                                                <div>
                                                    <p className='mb-1 font-medium text-lg'>Smriti Mandhana</p>
                                                    <p className='mb-0 text-sm text-black/50'>Batter</p>
                                                </div>
                                            </div>
                                            <div className='flex items-center gap-3 mb-4'>
                                                <img src="/assets/images/svg/user1.svg" alt="user1" className='w-[70px]' />
                                                <div>
                                                    <p className='mb-1 font-medium text-lg'>Pratika Rawal</p>
                                                    <p className='mb-0 text-sm text-black/50'>Batter</p>
                                                </div>
                                            </div>
                                            <div className='flex items-center gap-3 mb-4'>
                                                <img src="/assets/images/svg/user1.svg" alt="user1" className='w-[70px]' />
                                                <div>
                                                    <p className='mb-1 font-medium text-lg'>Harleen Deol</p>
                                                    <p className='mb-0 text-sm text-black/50'>Batter Alrounder</p>
                                                </div>
                                            </div>
                                            <div className='flex items-center gap-3 mb-4'>
                                                <img src="/assets/images/svg/user1.svg" alt="user1" className='w-[70px]' />
                                                <div>
                                                    <p className='mb-1 font-medium text-lg'>Harmanpreet Kaur(C)</p>
                                                    <p className='mb-0 text-sm text-black/50'>Batter Alrounder</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="col-6">
                            {
                                ['1', '2', '3'].map((index) => {
                                    return (
                                        <div key={index}>
                                            <div className='flex items-center justify-end text-end gap-3 mb-4'>
                                                <div>
                                                    <p className='mb-1 font-medium text-lg'>Smriti Mandhana</p>
                                                    <p className='mb-0 text-sm text-black/50'>Batter</p>
                                                </div>
                                                <img src="/assets/images/svg/user1.svg" alt="user1" className='w-[70px]' />
                                            </div>
                                            <div className='flex items-center justify-end text-end gap-3 mb-4'>
                                                <div>
                                                    <p className='mb-1 font-medium text-lg'>Pratika Rawal</p>
                                                    <p className='mb-0 text-sm text-black/50'>Batter</p>
                                                </div>
                                                <img src="/assets/images/svg/user1.svg" alt="user1" className='w-[70px]' />
                                            </div>
                                            <div className='flex items-center justify-end text-end gap-3 mb-4'>
                                                <div>
                                                    <p className='mb-1 font-medium text-lg'>Harleen Deol</p>
                                                    <p className='mb-0 text-sm text-black/50'>Batter Alrounder</p>
                                                </div>
                                                <img src="/assets/images/svg/user1.svg" alt="user1" className='w-[70px]' />
                                            </div>
                                            <div className='flex items-center justify-end text-end gap-3 mb-4'>
                                                <div>
                                                    <p className='mb-1 font-medium text-lg'>Harmanpreet Kaur(C)</p>
                                                    <p className='mb-0 text-sm text-black/50'>Batter Alrounder</p>
                                                </div>
                                                <img src="/assets/images/svg/user1.svg" alt="user1" className='w-[70px]' />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-12'>
                <img src="/assets/images/svg/banner10.png" alt="banner" className='mx-auto mt-[30px]' />
            </div>
            <h1 className='lg:text-[28px] text-[24px] my-4'>Bench</h1>
            <div className='rounded-[6px] overflow-hidden border'>
                <div className='border-b px-4 text-xl font-medium py-3 flex items-center justify-between bg-[#EBF2FF]'>
                    Bench
                </div>
                <div className='p-4'>
                    <div className="row">
                        <div className="col-6 border-r">
                            {
                                ['1'].map((index) => {
                                    return (
                                        <div key={index}>
                                            <div className='flex items-center gap-3 mb-4'>
                                                <img src="/assets/images/svg/user1.svg" alt="user1" className='w-[70px]' />
                                                <div>
                                                    <p className='mb-1 font-medium text-lg'>Smriti Mandhana</p>
                                                    <p className='mb-0 text-sm text-black/50'>Batter</p>
                                                </div>
                                            </div>
                                            <div className='flex items-center gap-3 mb-4'>
                                                <img src="/assets/images/svg/user1.svg" alt="user1" className='w-[70px]' />
                                                <div>
                                                    <p className='mb-1 font-medium text-lg'>Pratika Rawal</p>
                                                    <p className='mb-0 text-sm text-black/50'>Batter</p>
                                                </div>
                                            </div>
                                            <div className='flex items-center gap-3'>
                                                <img src="/assets/images/svg/user1.svg" alt="user1" className='w-[70px]' />
                                                <div>
                                                    <p className='mb-1 font-medium text-lg'>Harleen Deol</p>
                                                    <p className='mb-0 text-sm text-black/50'>Batter Alrounder</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="col-6">
                            {
                                ['1'].map((index) => {
                                    return (
                                        <div key={index}>
                                            <div className='flex items-center justify-end text-end gap-3 mb-4'>
                                                <div>
                                                    <p className='mb-1 font-medium text-lg'>Smriti Mandhana</p>
                                                    <p className='mb-0 text-sm text-black/50'>Batter</p>
                                                </div>
                                                <img src="/assets/images/svg/user1.svg" alt="user1" className='w-[70px]' />
                                            </div>
                                            <div className='flex items-center justify-end text-end gap-3 mb-4'>
                                                <div>
                                                    <p className='mb-1 font-medium text-lg'>Pratika Rawal</p>
                                                    <p className='mb-0 text-sm text-black/50'>Batter</p>
                                                </div>
                                                <img src="/assets/images/svg/user1.svg" alt="user1" className='w-[70px]' />
                                            </div>
                                            <div className='flex items-center justify-end text-end gap-3'>
                                                <div>
                                                    <p className='mb-1 font-medium text-lg'>Harleen Deol</p>
                                                    <p className='mb-0 text-sm text-black/50'>Batter Alrounder</p>
                                                </div>
                                                <img src="/assets/images/svg/user1.svg" alt="user1" className='w-[70px]' />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <h1 className='lg:text-[28px] text-[24px] my-4'>Support staff</h1>
            <div className='rounded-[6px] overflow-hidden border'>
                <div className='border-b px-4 text-xl font-medium py-3 flex items-center justify-between bg-[#EBF2FF]'>
                    Support Staff
                </div>
                <div className='p-4'>
                    <div className="row">
                        <div className="col-6 border-r">
                            {
                                ['1'].map((index) => {
                                    return (
                                        <div key={index}>
                                            <div className='flex items-center gap-3 mb-4'>
                                                <img src="/assets/images/svg/user1.svg" alt="user1" className='w-[70px]' />
                                                <div>
                                                    <p className='mb-1 font-medium text-lg'>Smriti Mandhana</p>
                                                    <p className='mb-0 text-sm text-black/50'>Batter</p>
                                                </div>
                                            </div>
                                            <div className='flex items-center gap-3'>
                                                <img src="/assets/images/svg/user1.svg" alt="user1" className='w-[70px]' />
                                                <div>
                                                    <p className='mb-1 font-medium text-lg'>Pratika Rawal</p>
                                                    <p className='mb-0 text-sm text-black/50'>Batter</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="col-6">
                            {
                                ['1'].map((index) => {
                                    return (
                                        <div key={index}>
                                            <div className='flex items-center justify-end text-end gap-3 mb-4'>
                                                <div>
                                                    <p className='mb-1 font-medium text-lg'>Smriti Mandhana</p>
                                                    <p className='mb-0 text-sm text-black/50'>Batter</p>
                                                </div>
                                                <img src="/assets/images/svg/user1.svg" alt="user1" className='w-[70px]' />
                                            </div>
                                            <div className='flex items-center justify-end text-end gap-3'>
                                                <div>
                                                    <p className='mb-1 font-medium text-lg'>Pratika Rawal</p>
                                                    <p className='mb-0 text-sm text-black/50'>Batter</p>
                                                </div>
                                                <img src="/assets/images/svg/user1.svg" alt="user1" className='w-[70px]' />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info