import React from 'react'
import CricketMenu from './CricketMenu'
import { FiHome } from 'react-icons/fi'
import { IoIosArrowForward } from 'react-icons/io'

const CricketSL = () => {
    return (
        <section>
            <CricketMenu />
            <div className='container'>
                <div className='flex items-center gap-2 text-sm text-black/50 pt-3'>
                    <a href="/" className='text-black/50'>Home</a>
                    <IoIosArrowForward />
                    <a href="/cricket" className='text-black/50'><span>Cricket</span></a>
                    <IoIosArrowForward />
                    <span>SA20 League</span>
                </div>
                <div className='my-4'>
                    <div className='bg-[#0033A0] p-5 text-white rounded-lg'>
                        <h1 className="text-[28px] mb-4">Sri Lanka vs New Zealand</h1>
                        <p className='mb-0'>28 Dec 2024 - 11 Jan 2025</p>
                    </div>
                </div>

                {/* <HomeSlider /> */}

                <div className='row'>
                    <div className='col-8'>
                        <div class='item relative mb-4'>
                            <h1 className="text-2xl mb-4">Sri Lankan batter has his arms aloft in celebration after notching up maiden T20I hundred in NZ vs SL 3rd T20I</h1>
                            <img src="/assets/images/svg/banner2.png" alt="banner" className='rounded-[10px] w-full h-full' />
                            <img src="/assets/images/svg/layer.png" alt="layer" className='absolute top-0 left-0 w-full h-full' />
                            <div className='absolute bottom-10 px-4'>
                            <a  href='/internal-page' className='text-white hover:!underline block mb-2 text-lg'>India vs Bangladesh 2nd Test : How Invincible have been Bumrah in all three formats of the game?</a>
                            <div className='text-white font-[300] text-sm d-flex items-center gap-3'>
                                    <span>By Ginny Dennis</span>
                                    <span>Just now</span>
                                </div>
                            </div>
                        </div>
                        <p className='text-black/50 text-justify mb-[8px]'>Barcelona are set to welcome  Las Palmas at the Estani Olimpic Lluis Company on  Saturady( November 30) in Laliga.The Catalans are leading the title race after 14 games with 34 points,but Real Madrid are four points  behind on Second with a game  in hand.</p>
                        <p className='text-black/50 text-justify mb-[8px]'>Meanwhile, a former player has player has urged the Blaugrana to sign a German midfielder.Elsewhere, the Spanish gians are not working on a move to sign Mohamed Salah.</p>
                        <p className='text-black/50 text-justify border-b pb-4'>On that note,let’s look at the major Barcelona transfer stories from November 30,2024.</p>

                        <div className='rounded-[6px] mb-5 overflow-hidden shadow-[0px_4px_8.4px_#0000001A]'>
                            <div>
                                <div className="text-[#464646] bg-[#EBF2FF] d-flex gap-1 justify-between items-center px-3 py-3 border-b">
                                    <span>About SL vs NZ</span>
                                </div>
                                <div className='p-4'>
                                    <h1 className="text-[24px] mb-3">SL vs NZ - Test Series</h1>
                                    <div className='row border-b border-b-black/10 py-2'>
                                        <div className="col-3 text-black/50">Date</div>
                                        <div className="col-3 text-black">Match</div>
                                        <div className="col-4 text-black/50">Venue</div>
                                        <div className="col-2 text-black">Time (IST)</div>
                                    </div>
                                    <div className='row border-b border-b-black/10 py-2'>
                                        <div className="col-3 text-black/50">14-18 August 2019	</div>
                                        <div className="col-3 text-black">Sri Lanka vs New Zealand	</div>
                                        <div className="col-4 text-black/50">Galle International Stadium, Galle</div>
                                        <div className="col-2 text-black/50">10:00 AM</div>
                                    </div>
                                    <div className='row border-b border-b-black/10 py-2'>
                                        <div className="col-3 text-black/50">22-26 August 2019</div>
                                        <div className="col-3 text-black">Sri Lanka vs New Zealand	</div>
                                        <div className="col-4 text-black/50">P.Sara Oval, Colombo</div>
                                        <div className="col-2 text-black/50">10:00 AM</div>
                                    </div>

                                    <h1 className="text-[24px] mt-4 mb-3">SL vs NZ - T20I Series</h1>
                                    <div className='row border-b border-b-black/10 py-2'>
                                        <div className="col-3 text-black/50">Date</div>
                                        <div className="col-3 text-black">Match</div>
                                        <div className="col-4 text-black/50">Venue</div>
                                        <div className="col-2 text-black">Time (IST)</div>
                                    </div>
                                    <div className='row border-b border-b-black/10 py-2'>
                                        <div className="col-3 text-black/50">1 September 2019</div>
                                        <div className="col-3 text-black">Sri Lanka vs New Zealand</div>
                                        <div className="col-4 text-black/50">Pallekele International Cricket Stadium, Kandy</div>
                                        <div className="col-2 text-black/50">7:00 PM</div>
                                    </div>
                                    <div className='row border-b border-b-black/10 py-2'>
                                        <div className="col-3 text-black/50">3 September 2019</div>
                                        <div className="col-3 text-black">Sri Lanka vs New Zealand</div>
                                        <div className="col-4 text-black/50">Pallekele International Cricket Stadium, Kandy</div>
                                        <div className="col-2 text-black/50">7:00 PM</div>
                                    </div>
                                    <div className='row border-b border-b-black/10 py-2'>
                                        <div className="col-3 text-black/50">6 September 2019</div>
                                        <div className="col-3 text-black">Sri Lanka vs New Zealand</div>
                                        <div className="col-4 text-black/50">Pallekele International Cricket Stadium, Kandy</div>
                                        <div className="col-2 text-black/50">7:00 PM</div>
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

export default CricketSL