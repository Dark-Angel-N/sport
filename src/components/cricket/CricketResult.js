import React from 'react'
import CricketMenu from './CricketMenu'
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { FiHome } from 'react-icons/fi'
import { PiDotOutlineFill } from 'react-icons/pi';

const CricketResult = () => {
    return (
        <section>
            <CricketMenu />
            <div className='container'>
                <div className='flex items-center gap-2 text-sm text-black/50 pt-3'>
                    <a href="/" className='text-black/50'>Home</a>
                    <IoIosArrowForward />
                    <a href="/cricket" className='text-black/50'><span>Cricket</span></a>
                    <IoIosArrowForward />
                    <span>India vs Australia 2024  Result</span>
                </div>
                <div className='my-4'>
                    <div className='bg-[#0033A0] p-5 text-white rounded-lg'>
                        <h1 className="text-[28px] mb-4">India vs Australia 2024 results</h1>
                        <p className='mb-0'>22 Nov 2024 - 7 jan 2025</p>
                    </div>
                </div>

                <div className='row gy-4 mb-4 justify-center'>
                    <div className='col-md-9'>
                        <div className='flex items-center justify-end gap-2'>
                            <button className="text-[#0033A0] bg-[#0033A0]/10 rounded px-2 py-1 flex items-center gap-3">BGT 2024 <IoIosArrowDown /></button>
                            <button className="text-[#0033A0] bg-[#0033A0]/10 rounded px-2 py-1 flex items-center gap-3">All Teams <IoIosArrowDown /></button>
                        </div>
                        <div className='rounded-[6px] overflow-hidden mt-4 shadow-[0px_4px_8.4px_#0000001A]'>
                            <div>
                                <div className='bg-[#EBF2FF]'>
                                    <h1 className='text-[16px] px-4 pt-3 mb-0'>Thu,Dec 26- 5:00 AM</h1>
                                    <div className="text-[#464646] d-flex gap-1 items-center px-4 pb-3 border-b">
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
                                </div>
                                <div className='p-4'>
                                    <div className='flex items-center justify-between mb-3 font-[500]'>
                                        <div className='flex items-center gap-3'>
                                            <img src="/assets/images/svg/ind.svg" alt="india" className='rounded-full w-[34px]' />IND
                                        </div>
                                        <div>474 & 234/10 <span className="text-black/50">(83.4)</span></div>
                                    </div>
                                    <div className='flex items-center justify-between font-[500]'>
                                        <div className='flex items-center gap-3'>
                                            <img src="/assets/images/svg/aus.svg" alt="india" className='rounded-full w-[34px]' />AUS
                                        </div>
                                        <div>474 & 234/10 <span className="text-black/50">(83.4)</span></div>
                                    </div>
                                    <p className='mb-0 text-[#1A1A1A]/70 text-xs mt-3'>Match yet to start</p>
                                </div>
                            </div>
                        </div>
                        <div className='rounded-[6px] overflow-hidden mt-4 shadow-[0px_4px_8.4px_#0000001A]'>
                            <div>
                                <div className='bg-[#EBF2FF]'>
                                    <h1 className='text-[16px] px-4 pt-3 mb-0'>Thu,Dec 26- 5:00 AM</h1>
                                    <div className="text-[#464646] d-flex gap-1 items-center px-4 pb-3 border-b">
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
                                </div>
                                <div className='p-4'>
                                    <div className='flex items-center justify-between mb-3 font-[500]'>
                                        <div className='flex items-center gap-3'>
                                            <img src="/assets/images/svg/ind.svg" alt="india" className='rounded-full w-[34px]' />IND
                                        </div>
                                        <div>474 & 234/10 <span className="text-black/50">(83.4)</span></div>
                                    </div>
                                    <div className='flex items-center justify-between font-[500]'>
                                        <div className='flex items-center gap-3'>
                                            <img src="/assets/images/svg/aus.svg" alt="india" className='rounded-full w-[34px]' />AUS
                                        </div>
                                        <div>474 & 234/10 <span className="text-black/50">(83.4)</span></div>
                                    </div>
                                    <p className='mb-0 text-[#1A1A1A]/70 text-xs mt-3'>Match yet to start</p>
                                </div>
                            </div>
                        </div>
                        <div className='rounded-[6px] overflow-hidden mt-4 shadow-[0px_4px_8.4px_#0000001A]'>
                            <div>
                                <div className='bg-[#EBF2FF] flex py-3 items-center justify-between'>
                                    <h1 className='text-[16px] px-4 mb-0'>IND vs AUS Leaderboard</h1>
                                    <div className="px-4 text-[#0033A0]">View all</div>
                                </div>
                                <div className='p-4 flex gap-4 flex-nowrap overflow-x-auto scrolling'>
                                    {/* Card 1 */}
                                    {[...Array(4)].map((_, index) => (
                                        <div key={index} className='rounded-[8px] flex-shrink-0 w-[300px] border border-[#E6E6E6] shadow-sm'>
                                            {/* Top Performer */}
                                            <div className='bg-[#0033A0] text-white py-1 px-3 rounded-t-[8px]'>
                                                Most Runs
                                            </div>
                                            <div className='p-3 flex items-center gap-4 bg-[#EBF2FF]'>
                                                <img
                                                    src="/assets/images/svg/cricketuser.svg"
                                                    alt="Player"
                                                    className="rounded-full mb-2"
                                                />
                                                <div>
                                                    <h3 className='text-[18px] font-medium'>Travis Head</h3>
                                                    <p className='text-[16px] text-[#747474] mb-2'>410</p>
                                                    <img
                                                        src="/assets/images/svg/aus1.svg"
                                                        alt="Country Flag"
                                                    />
                                                </div>
                                            </div>
                                            {/* Other Players */}
                                            <ul className='p-3 space-y-3 mb-0 text-[14px]'>
                                                <li className='flex items-center justify-between'>
                                                    <span className='flex items-center'>
                                                        <img
                                                            src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
                                                            alt="India Flag"
                                                            className='w-[32px] h-[21px] mr-2 rounded-[4px]'
                                                        />
                                                        Yashasvi Jaiswal
                                                    </span>
                                                    <span>359</span>
                                                </li>
                                                <li className='flex items-center justify-between'>
                                                    <span className='flex items-center'>
                                                        <img
                                                            src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
                                                            alt="India Flag"
                                                            className='w-[32px] h-[21px] mr-2 rounded-[4px]'
                                                        />
                                                        Nitish Kumar Reddy
                                                    </span>
                                                    <span>294</span>
                                                </li>
                                                <li className='flex items-center justify-between'>
                                                    <span className='flex items-center'>
                                                        <img
                                                            src="/assets/images/svg/aus1.svg"
                                                            alt="Australia Flag"
                                                            className='w-[32px] h-[21px] mr-2 rounded-[4px]'
                                                        />
                                                        Steven Smith
                                                    </span>
                                                    <span>277</span>
                                                </li>
                                                <li className='flex items-center justify-between'>
                                                    <span className='flex items-center'>
                                                        <img
                                                            src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
                                                            alt="India Flag"
                                                            className='w-[32px] h-[21px] mr-2 rounded-[4px]'
                                                        />
                                                        KL Rahul
                                                    </span>
                                                    <span>259</span>
                                                </li>
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <img src="/assets/images/svg/banner5.png" alt="banner" className='mb-4 mx-auto' />
                        <img src="/assets/images/svg/banner6.png" alt="banner" className='mx-auto' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CricketResult