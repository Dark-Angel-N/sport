import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { PiDotOutlineFill } from 'react-icons/pi'

const Scorecard = () => {
    return (
        <div className='col-11'>

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

            <h1 className='lg:text-[28px] text-[24px] my-4'>Scorecard</h1>
            <div className='shadow-[0px_2px_9.4px_#00000014] px-5 py-20 rounded-[6px] text-center'>
                <img src="/assets/images/svg/cricket.svg" alt="cricket" className='mx-auto' />
                <p className='text-black/50 mb-0 mt-2'>Match has not started yet</p>
            </div>

            {/* After Score Show */}
            {/* <h1 className='lg:text-[28px] text-[24px] my-4 text-[#FC0D1C]'>India Women opt to bat</h1>
            <div className='rounded-[6px] overflow-hidden shadow-[0px_4px_8.4px_#0000001A]'>
                <div className='border-b px-4 text-xl font-medium py-3 flex items-center justify-between bg-[#EBF2FF]'>
                    India Women Innings
                    <span>121-1(20 Ov)</span>
                </div>
                <div>
                    <div className='bg-[#1A1A1A]/10 py-2 px-4'>
                        <div className='row'>
                            <div className='col-2'>Batter</div>
                            <div className='col-6'></div>
                            <div className="col-4">
                                <div className="row font-medium text-center text-sm">
                                    <div className="col-2">R</div>
                                    <div className="col-2">B</div>
                                    <div className="col-2">4s</div>
                                    <div className="col-2">6s</div>
                                    <div className="col-4">Sr</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='py-3 px-4'>
                        <div className='row border-b pb-3'>
                            <div className="col-2 text-[#0033A0]">
                                Smriti Mandhana
                            </div>
                            <div className='col-6 text-black/50'>run out(Karishma Ramharack/Shemaine Campbelle)</div>
                            <div className="col-4">
                                <div className="row text-center">
                                    <div className="col-2 font-medium">53</div>
                                    <div className="col-2">47</div>
                                    <div className="col-2">7</div>
                                    <div className="col-2 font-medium">2</div>
                                    <div className="col-4">112.77</div>
                                </div>
                            </div>
                        </div>
                        <div className='row border-b pb-3 mt-3'>
                            <div className="col-2 text-[#0033A0]">
                                Pratika Rawal
                            </div>
                            <div className="col-6 text-black/50">batting</div>
                            <div className="col-4">
                                <div className="row text-center">
                                    <div className="col-2 font-medium">51</div>
                                    <div className="col-2">61</div>
                                    <div className="col-2">9</div>
                                    <div className="col-2 font-medium">0</div>
                                    <div className="col-4">216.67</div>
                                </div>
                            </div>
                        </div>
                        <div className='row border-b pb-3 mt-3'>
                            <div className="col-2 text-[#0033A0]">
                                Harleen Deol
                            </div>
                            <div className="col-6 text-black/50">batting</div>
                            <div className="col-4">
                                <div className="row text-center">
                                    <div className="col-2 font-medium">6</div>
                                    <div className="col-2">47</div>
                                    <div className="col-2">0</div>
                                    <div className="col-2 font-medium">0</div>
                                    <div className="col-4">211.67</div>
                                </div>
                            </div>
                        </div>
                        <div className='row border-b pb-3 mt-3'>
                            <div className="col-8">
                                Extras
                            </div>
                            <div className="col-4 font-medium">
                                11 <span className="font-normal">(b 0, lb 2, w 9, nb 0, p 0)</span>
                            </div>
                        </div>
                        <div className='row border-b pb-3 mt-3'>
                            <div className="col-8"></div>
                            <div className="col-4 font-medium">
                                121 <span className="font-normal">(1 wkts, 20 Ov)</span>
                            </div>
                        </div>
                        <div className='row mt-3 items-center'>
                            <div className="col-2">Yet to Bat</div>
                            <div className="col-10 font-medium text-[#0033A0]">
                                Harmanpreet Kaur(c), Jemimah Rodrigues , Richa Ghosh (wk) , Deepti Sharma , Samima Thakor , TitasSadhu , Renuka Thakur Singh , Priya Mishra
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='rounded-[6px] overflow-hidden shadow-[0px_4px_8.4px_#0000001A] mt-[40px]'>
                <div className='border-b px-4 text-xl font-medium py-3 flex items-center justify-between bg-[#EBF2FF]'>
                    Bowlers
                </div>
                <div>
                    <div className='bg-[#1A1A1A]/10 py-2 px-4'>
                        <div className='row'>
                            <div className='col-8'>Bowler</div>
                            <div className="col-4">
                                <div className="row font-medium text-center text-sm">
                                    <div className="col-2">O</div>
                                    <div className="col-2">M</div>
                                    <div className="col-2">R</div>
                                    <div className="col-2">W</div>
                                    <div className="col-2">ER</div>
                                    <div className="col-2">EXT</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='py-3 px-4'>
                        <div className='row border-b pb-3'>
                            <div className="col-8 text-[#0033A0]">
                                Deandra Dottin
                            </div>
                            <div className="col-4">
                                <div className="row text-center">
                                    <div className="col-2 font-medium">3</div>
                                    <div className="col-2">0</div>
                                    <div className="col-2">24</div>
                                    <div className="col-2 font-medium">0</div>
                                    <div className="col-2">8.00</div>
                                    <div className="col-2">1</div>
                                </div>
                            </div>
                        </div>
                        <div className='row border-b pb-3 mt-3'>
                            <div className="col-8 text-[#0033A0]">
                                Shamillia Connell
                            </div>
                            <div className="col-4">
                                <div className="row text-center">
                                    <div className="col-2 font-medium">3</div>
                                    <div className="col-2">0</div>
                                    <div className="col-2">61</div>
                                    <div className="col-2 font-medium">0</div>
                                    <div className="col-2">5.00</div>
                                    <div className="col-2">0</div>
                                </div>
                            </div>
                        </div>
                        <div className='row border-b pb-3 mt-3'>
                            <div className="col-8 text-[#0033A0]">
                                Harleen Deol
                            </div>
                            <div className="col-4">
                                <div className="row text-center">
                                    <div className="col-2 font-medium">4</div>
                                    <div className="col-2">0</div>
                                    <div className="col-2">47</div>
                                    <div className="col-2 font-medium">0</div>
                                    <div className="col-2">6.00</div>
                                    <div className="col-2">1</div>
                                </div>
                            </div>
                        </div>
                        <div className='row border-b pb-3 mt-3'>
                            <div className="col-8 text-[#0033A0]">
                                Karishma Ramharack
                            </div>
                            <div className="col-4">
                                <div className="row text-center">
                                    <div className="col-2 font-medium">4</div>
                                    <div className="col-2">0</div>
                                    <div className="col-2">47</div>
                                    <div className="col-2 font-medium">0</div>
                                    <div className="col-2">6.00</div>
                                    <div className="col-2">1</div>
                                </div>
                            </div>
                        </div>
                        <div className='row border-b pb-3 mt-3'>
                            <div className="col-8 text-[#0033A0]">
                                Afy Fletcher
                            </div>
                            <div className="col-4">
                                <div className="row text-center">
                                    <div className="col-2 font-medium">4</div>
                                    <div className="col-2">0</div>
                                    <div className="col-2">47</div>
                                    <div className="col-2 font-medium">0</div>
                                    <div className="col-2">6.25</div>
                                    <div className="col-2">3</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='rounded-[6px] overflow-hidden shadow-[0px_4px_8.4px_#0000001A] mt-[40px]'>
                <div className='border-b px-4 text-xl font-medium py-3 flex items-center justify-between bg-[#EBF2FF]'>
                    Fall of wickets
                </div>
                <div>
                    <div className='bg-[#1A1A1A]/10 py-2 px-4'>
                        <div className='row'>
                            <div className='col-2'>Wickets</div>
                            <div className='col-6'></div>
                            <div className="col-4">
                                <div className="row font-medium text-center text-sm">
                                    <div className="col-6">Score</div>
                                    <div className="col-6">Over</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='py-3 px-4'>
                        <div className='row border-b pb-3'>
                            <div className="col-2 text-[#0033A0]">
                                Smriti Mandhana
                            </div>
                            <div className="col-6">runout (S Campbelle / k Ramharack)</div>
                            <div className="col-4">
                                <div className="row text-center">
                                    <div className="col-6">1-110</div>
                                    <div className="col-6">16.3</div>
                                </div>
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className="col-2 text-[#0033A0]">
                                Pratika Rawal
                            </div>
                            <div className="col-6">c Q Joseph b Z james</div>
                            <div className="col-4">
                                <div className="row text-center">
                                    <div className="col-6">2-172</div>
                                    <div className="col-6">28.6</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <h1 className='lg:text-[28px] text-[24px] my-4'>Match Info</h1>
            <div className='shadow-[0px_2px_9.4px_#00000014] rounded-[6px] d-flex'>
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
        </div>
    )
}

export default Scorecard