import React from 'react'
import { FiHome } from 'react-icons/fi'
import { IoIosArrowForward } from 'react-icons/io'
import HockyMenu from './HockyMenu'

const HockySchdule = () => {
    return (
        <section>
            <HockyMenu />
            <div className='container'>
                <div className='flex items-center gap-2 text-sm text-black/50 pt-3'>
                    <a href="/" className='text-black/50'>Home</a>
                    <IoIosArrowForward />
                    <a href="/cricket" className='text-black/50'><span>Cricket</span></a>
                    <IoIosArrowForward />
                    <span>Commonwealth Games 2025</span>
                </div>
                <div className='my-4'>
                    <div className='bg-[#0033A0] p-5 text-white rounded-lg'>
                        <h1 className="text-[28px] mb-4">Commonwealth Games Schedule 2025, Time & Venue</h1>
                        <p className='mb-0'>15 Dec 2024 - 27 Jan 2025</p>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-8'>
                        <div className='rounded-[6px] mb-4 overflow-hidden shadow-[0px_4px_8.4px_#0000001A]'>
                            <div>
                                <div className="text-[#464646] bg-[#EBF2FF] d-flex gap-1 justify-between items-center px-3 py-3 border-b">
                                    <span>About CWG 2022</span>
                                </div>
                                <div className='p-4'>
                                    <p className='text-black/50'>The CWG starts with the opening ceremony on 28 July, at 12:30 AM IST. The event is being held at Birmingham, UK. Find the detailed Commonwealth Games 2022 schedule here.</p>

                                    <h1 className="text-[24px]">Birmingham 2025 Commonwealth Games Schedule by Sport / Discipline</h1>
                                    <div>
                                        <div className='row border-b border-b-black/10 py-2'>
                                            <div className="col-3 text-black">SPORT/DISCIPLINE</div>
                                            <div className="col-3 text-black">MEN&apos;S MEDAL EVENTS</div>
                                            <div className="col-3 text-black">WOMEN&apos;S MEDAL EVENTS</div>
                                            <div className="col-3 text-black">MIXED</div>
                                        </div>
                                        <div className='row border-b border-b-black/10 py-2'>
                                            <div className="col-3 text-black/50">AQUATICS - DIVING</div>
                                            <div className="col-3 text-black/50">1m Springboard</div>
                                            <div className="col-3 text-black/50">1m Springboard</div>
                                            <div className="col-3 text-black/50">Synchronised 3m Springboard</div>
                                        </div>
                                        <div className='row border-b border-b-black/10 py-2'>
                                            <div className="col-3 text-black/50">AQUATICS - DIVING</div>
                                            <div className="col-3 text-black/50">3m Springboard</div>
                                            <div className="col-3 text-black/50">3m Springboard</div>
                                            <div className="col-3 text-black/50">Synchronised 10m Platform</div>
                                        </div>
                                        <div className='row border-b border-b-black/10 py-2'>
                                            <div className="col-3 text-black/50">AQUATICS - DIVING</div>
                                            <div className="col-3 text-black/50">10m Platform</div>
                                            <div className="col-3 text-black/50">10m Platform</div>
                                            <div className="col-3 text-black/50"></div>
                                        </div>
                                        <div className='row border-b border-b-black/10 py-2'>
                                            <div className="col-3 text-black/50">AQUATICS - DIVING</div>
                                            <div className="col-3 text-black/50">Synchronised 3m Springboard</div>
                                            <div className="col-3 text-black/50">Synchronised 3m Springboard</div>
                                            <div className="col-3 text-black/50"></div>
                                        </div>
                                        <div className='row border-b font-bold bg-gray-100 border-b-black/10 py-2'>
                                            <div className="col-3 text-black/50">TOTAL - 12</div>
                                            <div className="col-3 text-black/50">5</div>
                                            <div className="col-3 text-black/50">5</div>
                                            <div className="col-3 text-black/50">2</div>
                                        </div>
                                        <div className='row border-b border-b-black/10 py-2'>
                                            <div className="col-3 text-black/50">PARA ATHLETICS</div>
                                            <div className="col-3 text-black/50">100m T37/38</div>
                                            <div className="col-3 text-black/50">100m T37/38</div>
                                            <div className="col-3 text-black/50">4 x 100m Universal Relay</div>
                                        </div>
                                        <div className='row border-b border-b-black/10 py-2'>
                                            <div className="col-3 text-black/50">PARA ATHLETICS</div>
                                            <div className="col-3 text-black/50">100m T45-47</div>
                                            <div className="col-3 text-black/50">100m T33/34</div>
                                            <div className="col-3 text-black/50"></div>
                                        </div>
                                        <div className='row border-b border-b-black/10 py-2'>
                                            <div className="col-3 text-black/50">PARA ATHLETICS</div>
                                            <div className="col-3 text-black/50">100m T11/12</div>
                                            <div className="col-3 text-black/50">1500m T53/54</div>
                                            <div className="col-3 text-black/50"></div>
                                        </div>
                                        <div className='row border-b border-b-black/10 py-2'>
                                            <div className="col-3 text-black/50">PARA ATHLETICS</div>
                                            <div className="col-3 text-black/50">1500m T53/54</div>
                                            <div className="col-3 text-black/50">Discus F42-44/F61-64</div>
                                            <div className="col-3 text-black/50"></div>
                                        </div>
                                        <div className='row border-b border-b-black/10 py-2'>
                                            <div className="col-3 text-black/50">PARA ATHLETICS</div>
                                            <div className="col-3 text-black/50">Discus F42-44/F61-64</div>
                                            <div className="col-3 text-black/50">Shot Put F55-57</div>
                                            <div className="col-3 text-black/50"></div>
                                        </div>
                                        <div className='row border-b font-bold bg-gray-100 border-b-black/10 py-2'>
                                            <div className="col-3 text-black/50">TOTAL - 13</div>
                                            <div className="col-3 text-black/50">6</div>
                                            <div className="col-3 text-black/50">6</div>
                                            <div className="col-3 text-black/50">1</div>
                                        </div>
                                    </div>
                                </div>
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

export default HockySchdule