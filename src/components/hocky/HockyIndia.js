import React from 'react'
import { FiHome } from 'react-icons/fi'
import { IoIosArrowForward } from 'react-icons/io'
import HockyMenu from './HockyMenu'

const HockyIndia = () => {
    return (
        <section>
            <HockyMenu />
            <div className='container'>
                <div className='flex items-center gap-2 text-sm text-black/50 pt-3'>
                    <a href="/" className='text-black/50'>Home</a>
                    <IoIosArrowForward />
                    <a href="/cricket" className='text-black/50'><span>Cricket</span></a>
                    <IoIosArrowForward />
                    <span>Commonwealth Games 2025 India Schedule</span>
                </div>
                <div className='my-4'>
                    <div className='bg-[#0033A0] p-5 text-white rounded-lg'>
                        <h1 className="text-[28px] mb-4">Commonwealth Games 2025 India Schedule</h1>
                        <p className='mb-0'>15 Dec 2024 - 27 Jan 2025</p>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-8'>
                        <div className='rounded-[6px] mb-4 overflow-hidden shadow-[0px_4px_8.4px_#0000001A]'>
                            <div className='p-4'>
                                <div className='mb-5'>
                                    <div className='row border-b font-bold border-b-black/10 py-2'>
                                        <div className="col text-black">Sport</div>
                                        <div className="col text-black">Start Date</div>
                                        <div className="col text-black">End Date</div>
                                        <div className="col text-black">Men Participants</div>
                                        <div className="col text-black">Women Participants</div>
                                    </div>
                                    <div className='row border-b border-b-black/10 py-2'>
                                        <div className="col text-black/50">Athletics</div>
                                        <div className="col text-black/50">16 July</div>
                                        <div className="col text-black/50">25 July</div>
                                        <div className="col text-black/50">21</div>
                                        <div className="col text-black/50">18</div>
                                    </div>                                    
                                    <div className='row border-b border-b-black/10 py-2'>
                                        <div className="col text-black/50">Badminton</div>
                                        <div className="col text-black/50">29 July</div>
                                        <div className="col text-black/50">08 Aug</div>
                                        <div className="col text-black/50">5</div>
                                        <div className="col text-black/50">5</div>
                                    </div>                                    
                                    <div className='row border-b border-b-black/10 py-2'>
                                        <div className="col text-black/50">Boxing</div>
                                        <div className="col text-black/50">28 July</div>
                                        <div className="col text-black/50">08 Aug</div>
                                        <div className="col text-black/50">5</div>
                                        <div className="col text-black/50">5</div>
                                    </div>                                    
                                    <div className='row border-b border-b-black/10 py-2'>
                                        <div className="col text-black/50">Cricket</div>
                                        <div className="col text-black/50">29 July</div>
                                        <div className="col text-black/50">08 Aug</div>
                                        <div className="col text-black/50">-</div>
                                        <div className="col text-black/50">15</div>
                                    </div>                                    
                                    <div className='row border-b border-b-black/10 py-2'>
                                        <div className="col text-black/50">Cycling</div>
                                        <div className="col text-black/50">03 Aug</div>
                                        <div className="col text-black/50">03 Aug</div>
                                        <div className="col text-black/50">2</div>
                                        <div className="col text-black/50">0</div>
                                    </div>                                    
                                    <div className='row border-b border-b-black/10 py-2'>
                                        <div className="col text-black/50">Hockey</div>
                                        <div className="col text-black/50">29 July</div>
                                        <div className="col text-black/50">08 Aug</div>
                                        <div className="col text-black/50">18</div>
                                        <div className="col text-black/50">18</div>
                                    </div>                                    
                                    <div className='row border-b border-b-black/10 py-2'>
                                        <div className="col text-black/50">Judo</div>
                                        <div className="col text-black/50">01 Aug</div>
                                        <div className="col text-black/50">04 Aug</div>
                                        <div className="col text-black/50">3</div>
                                        <div className="col text-black/50">3</div>
                                    </div>                                    
                                    <div className='row border-b border-b-black/10 py-2'>
                                        <div className="col text-black/50">Para Powerlifting</div>
                                        <div className="col text-black/50">05 Aug</div>
                                        <div className="col text-black/50">05 Aug</div>
                                        <div className="col text-black/50">3</div>
                                        <div className="col text-black/50">2</div>
                                    </div>                                    
                                    <div className='row border-b border-b-black/10 py-2'>
                                        <div className="col text-black/50">Swimming</div>
                                        <div className="col text-black/50">04 Aug</div>
                                        <div className="col text-black/50">8 Aug</div>
                                        <div className="col text-black/50">4</div>
                                        <div className="col text-black/50">0</div>
                                    </div>                                    
                                    <div className='row border-b border-b-black/10 py-2'>
                                        <div className="col text-black/50">Table tennis</div>
                                        <div className="col text-black/50">29 July</div>
                                        <div className="col text-black/50">8 Aug</div>
                                        <div className="col text-black/50">5</div>
                                        <div className="col text-black/50">5</div>
                                    </div>                                    
                                    <div className='row border-b border-b-black/10 py-2'>
                                        <div className="col text-black/50">Triathlon</div>
                                        <div className="col text-black/50">29 July</div>
                                        <div className="col text-black/50">31 July</div>
                                        <div className="col text-black/50">0</div>
                                        <div className="col text-black/50">2</div>
                                    </div>                                    
                                    <div className='row border-b border-b-black/10 py-2'>
                                        <div className="col text-black/50">Wrestling</div>
                                        <div className="col text-black/50">5 Aug</div>
                                        <div className="col text-black/50">6 Aug</div>
                                        <div className="col text-black/50">6</div>
                                        <div className="col text-black/50">6</div>
                                    </div>                                    
                                </div>

                                <h1 className='text-2xl'>How many countries are in the Commonwealth Games 2025?</h1>
                                <p className='text-black/50'>This edition will feature 72 countries of the Commonwealth of Nations. Originally, 70 countries were expected to participate.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 offset-1">
                        <img src="/assets/images/svg/banner5.png" alt="banner" className='mb-4 mx-auto' />
                        <img src="/assets/images/svg/banner6.png" alt="banner" className='mx-auto' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HockyIndia