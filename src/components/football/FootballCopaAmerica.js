import React from 'react'
import { FiHome } from 'react-icons/fi'
import { IoIosArrowForward } from 'react-icons/io'
import FootBallMenu from './FootBallMenu'
import { PiDotOutlineFill } from 'react-icons/pi'

const FootballCopaAmerica = () => {
    return (
        <section>
            <FootBallMenu />
            <div className='container'>
                <div className='flex items-center gap-2 text-sm text-black/50 pt-3'>
                    <a href="/" className='text-black/50'>Home</a>
                    <IoIosArrowForward />
                    <a href="/football" className='text-black/50'><span>Football</span></a>
                    <IoIosArrowForward />
                    <span>Copa America 2024</span>
                </div>
                <div className='my-4'>
                    <div className='bg-[#0033A0] p-5 text-white rounded-lg'>
                        <h1 className="text-[28px] mb-4">Copa America 2024</h1>
                        <p className='mb-0'>20 Jun 2024 - 14 Jul 2024</p>
                    </div>
                </div>
                <div className='my-4'>
                    <div className='row gy-4 justify-center'>
                        <div className='col-xl-9 col-md-9'>
                            <div className="row gy-4 mb-4">
                                <div className="col-xl-7 news_slider">
                                    <div class='item relative h-full'>
                                        <img src="/assets/images/svg/banner9.png" alt="banner" className='rounded-[10px] object-cover h-full' />
                                        <img src="/assets/images/svg/layer.png" alt="layer" className='absolute top-0 left-0 h-full' />
                                        <div className='absolute bottom-10 px-4'>
                                            <a href='/internal-page' className='text-white block hover:!underline mb-2 text-lg'>“That’s a complete lack of respect” - Luis Suarez launches scathing attack on Uruguay boss Marcelo Bielsa for isolating national team</a>
                                            <div className='text-white font-[300] text-sm d-flex items-center gap-3'>
                                                <span>By Ginny Dennis</span>
                                                <span>Just now</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-5">
                                    <div className="row gx-3">
                                        {
                                            ['1', '2', '3'].map((index) => {
                                                return (
                                                    <div className="col-12" key={index}>
                                                        <div className='bg-[#E8E8E8]/50 mb-3 p-3 rounded d-flex gap-3'>
                                                            <div>
                                                                <a href='/internal-page' className='text-black hover:!underline mb-2 block text-[14px] text-justify'>“You will see Sarfaraz playing” -Aakash Chopra backs youngster to play ahead of KL Rahul for 2nd ahead of KL Rahul</a>
                                                                <div className='text-[#000000]/50 text-[10px] d-flex items-center gap-1'>
                                                                    <span>57 min read</span>
                                                                    <span className='d-flex items-center gap-[2px]'><PiDotOutlineFill />2:00PM IST</span>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <img src="/assets/images/svg/banner4.png" alt="banner" className='max-w-[80px] rounded-[2px]' />
                                                                <div className='d-flex items-center gap-2 justify-end mt-2'>
                                                                    <img src="/assets/images/svg/bookmark.svg" alt="bookmark" />
                                                                    <img src="/assets/images/svg/share.svg" alt="share" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            <div>

                                <p className='text-black/50 mt-4'>Barcelona are set to welcome  Las Palmas at the Estani Olimpic Lluis Company on  Saturady( November 30) in Laliga.The Catalans are leading the title race after 14 games with 34 points,but Real Madrid are four points  behind on Second with a game  in hand.Barcelona are set to welcome  Las Palmas at the Estani Olimpic Lluis Company on  Saturady( November 30) in Laliga.The Catalans are leading the title race after 14 games with 34 points,but Real Madrid are four points  behind on Second with a game  in hand.</p>
                            </div>
                            <div className='rounded-[6px] mb-4 overflow-hidden shadow-[0px_4px_8.4px_#0000001A]'>
                                <div>
                                    <div className="text-[#464646] bg-[#EBF2FF] d-flex gap-1 justify-between items-center px-3 py-3 border-b">
                                        <span>About Copa America 2024</span>
                                    </div>
                                    <div className='p-4'>
                                        <h1 className='text-2xl mb-4'>Copa America</h1>
                                        <iframe width="100%" height="500" className='rounded-[10px]' src="https://www.youtube.com/embed/oOjVlrDOG-Y?si=dMhdSe1w0LP6ucVf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                        <p className='text-black/50 mt-4'>Copa America also known as CONMEBOL Copa America is a top level men&apos;s football competition contested among national teams from the South American content. The Copa America has grown over the years and has now become one of the most popular international cup competition. It is the oldest still-running continental football tournament and the competition has a rich reputation of including some of the best South American talent in the world.</p>
                                        <h1 className="text-[24px] mb-3">Copa America Winners list over the years</h1>
                                        <div className='row border-b border-b-black/10 py-2'>
                                            <div className="col text-black">Year</div>
                                            <div className="col text-black">Winners</div>
                                            <div className="col text-black">Runners Up</div>
                                        </div>
                                        <div className='row border-b border-b-black/10 py-2'>
                                            <div className="col text-black/50">2021</div>
                                            <div className="col text-black/50">Argentina</div>
                                            <div className="col text-black/50">Brazil</div>
                                        </div>
                                        <div className='row border-b border-b-black/10 py-2'>
                                            <div className="col text-black/50">2019</div>
                                            <div className="col text-black/50">Brazil</div>
                                            <div className="col text-black/50">Peru</div>
                                        </div>
                                        <div className='row border-b border-b-black/10 py-2'>
                                            <div className="col text-black/50">2016</div>
                                            <div className="col text-black/50">Chile</div>
                                            <div className="col text-black/50">Argentina</div>
                                        </div>
                                        <div className='row border-b border-b-black/10 py-2'>
                                            <div className="col text-black/50">2015</div>
                                            <div className="col text-black/50">Chile</div>
                                            <div className="col text-black/50">Argentina</div>
                                        </div>
                                        <div className='row border-b border-b-black/10 py-2'>
                                            <div className="col text-black/50">2011</div>
                                            <div className="col text-black/50">Uruguay</div>
                                            <div className="col text-black/50">Paraguay</div>
                                        </div>
                                        <div className='row border-b border-b-black/10 py-2'>
                                            <div className="col text-black/50">2007</div>
                                            <div className="col text-black/50">Brazil</div>
                                            <div className="col text-black/50">Argentina</div>
                                        </div>
                                        <div className='row border-b border-b-black/10 py-2'>
                                            <div className="col text-black/50">2004</div>
                                            <div className="col text-black/50">Brazil</div>
                                            <div className="col text-black/50">Argentina</div>
                                        </div>
                                        <div className='row border-b border-b-black/10 py-2'>
                                            <div className="col text-black/50">2001</div>
                                            <div className="col text-black/50">Colombia</div>
                                            <div className="col text-black/50">Mexico</div>
                                        </div>
                                        <div className='row border-b border-b-black/10 py-2'>
                                            <div className="col text-black/50">1999</div>
                                            <div className="col text-black/50">Brazil</div>
                                            <div className="col text-black/50">Uruguay</div>
                                        </div>
                                        <div className='row border-b border-b-black/10 py-2'>
                                            <div className="col text-black/50">1997</div>
                                            <div className="col text-black/50">Brazil</div>
                                            <div className="col text-black/50">Bolivia</div>
                                        </div>
                                        <div className='row border-b border-b-black/10 py-2'>
                                            <div className="col text-black/50">1995</div>
                                            <div className="col text-black/50">Uruguay</div>
                                            <div className="col text-black/50">Brazil</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <img src="/assets/images/svg/banner10.png" alt="banner" className='mx-auto mt-[30px]' />
                            </div>
                        </div>
                        <div className='col-xl-3 col-md-3'>
                            <img src="/assets/images/svg/banner5.png" alt="banner" className='mb-4 mx-auto' />
                            <img src="/assets/images/svg/banner6.png" alt="banner" className='mx-auto' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FootballCopaAmerica