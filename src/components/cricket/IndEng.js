import React from 'react'
import CricketMenu from './CricketMenu'
import { FiHome } from 'react-icons/fi'
import { IoIosArrowForward } from 'react-icons/io'

const IndEng = () => {
    return (
        <section>
            <CricketMenu />
            <div className='container'>
                <div className='flex items-center gap-2 text-sm text-black/50 pt-3'>
                    <a href="/" className='text-black/50'>Home</a>
                    <IoIosArrowForward />
                    <a href="/cricket" className='text-black/50'><span>Cricket</span></a>
                    <IoIosArrowForward />
                    <span>India vs England 2025</span>
                </div>
                <div className='my-4'>
                    <div className='bg-[#0033A0] p-5 text-white rounded-lg'>
                        <h1 className="text-[28px] mb-4">India vs England 2025</h1>
                        <p className='mb-0'>28 Dec 2024 - 11 Jan 2025</p>
                    </div>
                </div>

                {/* <HomeSlider /> */}

                <div className='row'>
                    <div className='col-8'>
                        <div class='item relative mb-4'>
                        <h1 className="text-2xl mb-4">Leg and Off: Should Virat Kohli skip a part of IPL 2025 to play the County Championship ahead of England Test tour?</h1>
                            <img src="/assets/images/svg/banner2.png" alt="banner" className='rounded-[10px] w-full h-full' />
                            <img src="/assets/images/svg/layer.png" alt="layer" className='absolute top-0 left-0 w-full h-full' />
                            <div className='absolute bottom-10 px-4'>
                                <a  href='/internal-page' className='text-white block mb-2 hover:!underline text-lg'>Leg and Off: Should Virat Kohli skip a part of IPL 2025 to play the County Championship ahead of England Test tour?</a>
                                <div className='text-white font-[300] text-sm d-flex items-center gap-3'>
                                    <span>By Ginny Dennis</span>
                                    <span>Just now</span>
                                </div>
                            </div>
                        </div>
                        <p className='text-black/50 text-justify mb-[8px]'>Barcelona are set to welcome  Las Palmas at the Estani Olimpic Lluis Company on  Saturady( November 30) in Laliga.The Catalans are leading the title race after 14 games with 34 points,but Real Madrid are four points  behind on Second with a game  in hand.</p>
                        <p className='text-black/50 text-justify mb-[8px]'>Meanwhile, a former player has player has urged the Blaugrana to sign a German midfielder.Elsewhere, the Spanish gians are not working on a move to sign Mohamed Salah.</p>
                        <p className='text-black/50 text-justify border-b pb-4'>On that note,let’s look at the major Barcelona transfer stories from November 30,2024.</p>

                        <div className='rounded-[6px] mb-4 overflow-hidden shadow-[0px_4px_8.4px_#0000001A]'>
                            <div>
                                <div className="text-[#464646] bg-[#EBF2FF] d-flex gap-1 justify-between items-center px-3 py-3 border-b">
                                    <span>About IND vs ENG</span>
                                </div>
                                <div className='p-4'>
                                    <p className='text-black/50'>This summer, the stage will be set for a match between two of cricket biggest stars, India and England. In July 2022, India will go on a long tour to England, which will include T20 and One Day International matches.Table of Contents</p>
                                    <h1 className="text-[20px] mb-3">HISTORY</h1>
                                    <div className='row border-b border-b-black/10 py-2'>
                                        <div className="col text-black">Format</div>
                                        <div className="col text-black">Played</div>
                                        <div className="col text-black">Won by India</div>
                                        <div className="col text-black">Won by England</div>
                                        <div className="col text-black">Tied</div>
                                        <div className="col text-black">Drawn</div>
                                        <div className="col text-black">No Result</div>
                                    </div>
                                    <div className='row border-b border-b-black/10 py-2'>
                                        <div className="col text-black/50">Test</div>
                                        <div className="col text-black/50">31</div>
                                        <div className="col text-black/50">131</div>
                                        <div className="col text-black/50">50</div>
                                        <div className="col text-black/50">0</div>
                                        <div className="col text-black/50">50</div>
                                        <div className="col text-black/50">0</div>
                                    </div>
                                    <div className='row border-b border-b-black/10 py-2'>
                                        <div className="col text-black/50">ODI</div>
                                        <div className="col text-black/50">106</div>
                                        <div className="col text-black/50">57</div>
                                        <div className="col text-black/50">44</div>
                                        <div className="col text-black/50">2</div>
                                        <div className="col text-black/50">0</div>
                                        <div className="col text-black/50">3</div>
                                    </div>

                                    <h1 className="text-[20px] mt-4">BROADCAST DETAILS</h1>
                                    <div className='row border-b border-b-black/10 py-2'>
                                        <div className="col-4 text-black">Region</div>
                                        <div className="col-8 text-black">TV Channel</div>
                                    </div>
                                    <div className='row border-b border-b-black/10 py-2'>
                                        <div className="col-4 text-black/50">India & Subcontinent</div>
                                        <div className="col-8 text-black/50">Star Sports, DD National (DD1), DD Sports</div>
                                    </div>
                                    <div className='row border-b border-b-black/10 py-2'>
                                        <div className="col-4 text-black/50">UK</div>
                                        <div className="col-8 text-black/50">Sky Sports Cricket, BT</div>
                                    </div>
                                    <h1 className="text-[20px] mt-4">VENUES</h1>
                                    <p className='text-black/50 mb-0'>The matches will be held at six different venues: Southampton&apos;s Rose Bowl, Birmingham&apos;s Edgbaston, Nottingham&apos;s Trent Bridge, London&apos;s The Oval, London&apos;s Lord&apos;s, and Manchester&apos;s Old Trafford.</p>
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

export default IndEng