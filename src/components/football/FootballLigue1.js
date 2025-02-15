import React from 'react'
import { FiHome } from 'react-icons/fi'
import { IoIosArrowForward } from 'react-icons/io'
import FootBallMenu from './FootBallMenu'
import { PiDotOutlineFill } from 'react-icons/pi'

const FootballLigue1 = () => {
    return (
        <section>
            <FootBallMenu />
            <div className='container'>
                <div className='flex items-center gap-2 text-sm text-black/50 pt-3'>
                    <a href="/" className='text-black/50'>Home</a>
                    <IoIosArrowForward />
                    <a href="/football" className='text-black/50'><span>Football</span></a>
                    <IoIosArrowForward />
                    <span>La Liga 2024-25</span>
                </div>
                <div className='my-4'>
                    <div className='bg-[#0033A0] p-5 text-white rounded-lg'>
                        <h1 className="text-[28px] mb-4">Ligue 1 2024-25</h1>
                        <p className='mb-0'>16 Aug 2024 - 25 May 2025</p>
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
                                <p className='text-black/50 mt-4 border-b pb-4'>Barcelona are set to welcome  Las Palmas at the Estani Olimpic Lluis Company on  Saturady( November 30) in Laliga.The Catalans are leading the title race after 14 games with 34 points,but Real Madrid are four points  behind on Second with a game  in hand.Barcelona are set to welcome  Las Palmas at the Estani Olimpic Lluis Company on  Saturady( November 30) in Laliga.The Catalans are leading the title race after 14 games with 34 points,but Real Madrid are four points  behind on Second with a game  in hand.</p>
                            </div>
                            <div className='rounded-[6px] mb-4 overflow-hidden shadow-[0px_4px_8.4px_#0000001A]'>
                                <div>
                                    <div className="text-[#464646] bg-[#EBF2FF] d-flex gap-1 justify-between items-center px-3 py-3 border-b">
                                        <span>About Ligue 1</span>
                                    </div>
                                    <div className='p-4'>
                                        <h1 className="text-[20px] mb-3">UEFA Nations League</h1>
                                        <p className='text-black/50'>Follow all the Ligue 1 news, live action, previews, reviews and transfer updates.</p>
                                        <p className='text-black/50'>Ligue 1 or the Ligue 1 Conforama is the top-flight of the French professional football league system. Regulated by the Ligue de Football Professional, 20 teams contest in the Ligue 1, subject to a system of promotion and relegation with the second division league of the French professional football system known as the Ligue 2.</p>
                                        <p className='text-black/50'>The seasons start in August and end in May. There is a winter break before Christmas which lasts for 2 weeks before the league resumes in the second week of January.</p>

                                        <h1 className="text-[20px] mb-3">Leading Ligue 1 winners</h1>
                                        <img src="/assets/images/png/chart1.avif" alt="nation" className='rounded-lg' />
                                        <p className='text-black/50 mt-3'>The inaugural season saw Portugal take on Netherlands in the finals and it was Cristiano Ronaldo&apos;s team that won the 1st edition of the UEFA Nations League. The main objective of this competition was to replace the the international friendlies that were previously part of the FIFA International match calendar. As a result of the inclusion of the UEFA Nations League, fans have been given a chance to watch their favorite European teams battle each other every two years.</p>
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

export default FootballLigue1