import React from 'react'
import CricketMenu from './CricketMenu'
import { FiHome } from 'react-icons/fi'
import { IoIosArrowForward } from 'react-icons/io'
import HomeSlider from '../home/HomeSlider'
import { FaArrowTrendUp } from 'react-icons/fa6'
import { PiDotOutlineFill } from 'react-icons/pi'

const CricketBbl = () => {
    return (
        <section>
            <CricketMenu />
            <div className='container'>
                <div className='flex items-center gap-2 text-sm text-black/50 pt-3'>
                    <a href="/" className='text-black/50'>Home</a>
                    <IoIosArrowForward />
                    <a href="/cricket" className='text-black/50'><span>Cricket</span></a>
                    <IoIosArrowForward />
                    <span>BBL 24</span>
                </div>
                <div className='my-4'>
                    <div className='bg-[#0033A0] p-5 text-white rounded-lg'>
                        <h1 className="text-[28px] mb-4">Big Bash League 2024</h1>
                        <p className='mb-0'>15 Dec 2024 - 27 Jan 2025</p>
                    </div>
                </div>

                <HomeSlider />

                <div className='row'>
                    <div className='col-8'>
                        <div class='item relative mb-4'>
                            <h1 className="text-2xl mb-4">CSK pacer sustains concussion after colliding with ad-board in BBL 2024-25 match</h1>
                            <img src="/assets/images/svg/banner2.png" alt="banner" className='rounded-[10px] w-full h-full' />
                            <img src="/assets/images/svg/layer.png" alt="layer" className='absolute top-0 left-0 w-full h-full' />
                            <div className='absolute bottom-10 px-4'>
                                <a href='/internal-page' className='text-white hover:!underline block mb-2 text-lg'>India vs Bangladesh 2nd Test : How Invincible have been Bumrah in all three formats of the game?</a>
                                <div className='text-white font-[300] text-sm d-flex items-center gap-3'>
                                    <span>By Ginny Dennis</span>
                                    <span>Just now</span>
                                </div>
                            </div>
                        </div>
                        <p className='text-black/50 text-justify mb-[8px]'>Barcelona are set to welcome  Las Palmas at the Estani Olimpic Lluis Company on  Saturady( November 30) in Laliga.The Catalans are leading the title race after 14 games with 34 points,but Real Madrid are four points  behind on Second with a game  in hand.</p>
                        <p className='text-black/50 text-justify mb-[8px]'>Meanwhile, a former player has player has urged the Blaugrana to sign a German midfielder.Elsewhere, the Spanish gians are not working on a move to sign Mohamed Salah.</p>
                        <p className='text-black/50 text-justify border-b pb-4'>On that note,let’s look at the major Barcelona transfer stories from November 30,2024.</p>

                        <iframe width="100%" className='rounded-[10px]' height="315" src="https://www.youtube.com/embed/nnIvglfqp5U?si=xwchhhDdseuJrwFz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                        <p className='text-black/60 text-justify mt-4 mb-[8px]'>The first edition of the Vijay Hazare Trophy was played back in 1993-94 but no overall winner was used to be named as the teams just played against counterparts without any final being played.</p>

                        <p className='text-black/60 text-justify mb-[8px]'>The 2021-22 Vijay Hazare Trophy will be its 32nd edition which is scheduled to be played from 21 December 2024 to 18 January 2025. The tournament will retain the same format as the previous edition of the competition.</p>

                        <p className='text-black/60 text-justify pb-4 mb-0'>Defending Champions Haryana will be relying on Rahul Tewatia, Harshal Patel, Aman Kumar and Anshul Kamboj to carrying the form from the last season.</p>

                        <div className='bg-[#E8E8E8]/50 mt-3 p-3 rounded d-flex items-center gap-3'>
                            <div>
                                <span className="bg-[#1E1E1E]/10 text-xs font-[700] d-inline-flex rounded py-1 px-2 items-center gap-1">Trending News <FaArrowTrendUp className='text-sm' /></span>
                                <a href='/internal-page' className='text-black hover:!underline block font-[600] my-3'>“You will see Sarfaraz playing” -Aakash Chopra backs youngster to play ahead of KL Rahul for 2nd ahead of KL Rahul</a>                                <div className='text-[#000000]/50 text-[10px] d-flex items-center gap-1'>
                                    <span>57 min read</span>
                                    <span className='d-flex items-center gap-[2px]'><PiDotOutlineFill />2:00PM IST</span>
                                </div>
                            </div>
                            <div>
                                <img src="/assets/images/svg/banner3.png" alt="banner" className='max-w-[163px]' />
                                <div className='d-flex items-center gap-2 justify-end mt-2'>
                                    <img src="/assets/images/svg/bookmark.svg" alt="bookmark" />
                                    <img src="/assets/images/svg/share.svg" alt="share" />
                                </div>
                            </div>
                        </div>

                        <img src="/assets/images/png/banner1.png" alt="banner19" className='my-5 mx-auto col-9' />

                        <p className='text-black/60 text-justify mb-[8px]'>Stiller has registered one goal  and two  assists from 19 games across competitions this seasons  for the Bundesliga side. The Catalans are yet to sign a proper replacement for Sergio Busquets and the 23-year-old could be a fine for the job.</p>

                        <p className='text-black/60 text-justify mb-[8px]'>Speaking recently, as cited by SPORT, Matthaus insisted that Stiller would fit in well at Camp Nou.</p>
                    </div>
                    <div className="col-3 offset-1">
                        <img src="/assets/images/svg/banner5.png" alt="banner" className='mb-4 mx-auto' />
                        <img src="/assets/images/svg/banner6.png" alt="banner" className='mx-auto' />
                    </div>
                </div>

                <div className='row my-4'>
                    <h1 className='lg:text-[28px] text-[24px] mb-3'>Latest News</h1>
                    <div className="col-lg-4 col-md-6">
                        <div className='bg-white p-[16px] border rounded-lg'>
                            <img src="/assets/images/svg/banner20.png" alt="banner" className='w-full rounded-lg' />
                            <a href='/internal-page' className='text-black/60 block text-justify mt-3 mb-0 hover:!underline cursor-pointer'>The Entertainment Cricket League (ECL) has rapidly become a trending topic, drawing an impressive surge in viewership.</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className='bg-white p-[16px] border rounded-lg'>
                            <img src="/assets/images/svg/banner21.png" alt="banner" className='w-full rounded-lg' />
                            <a href='/internal-page' className='text-black/60 block text-justify mt-3 mb-0 hover:!underline cursor-pointer'>The Entertainment Cricket League (ECL) has rapidly become a trending topic, drawing an impressive surge in viewership.</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className='bg-white p-[16px] border rounded-lg'>
                            <img src="/assets/images/svg/banner21.png" alt="banner" className='w-full rounded-lg' />
                            <a href='/internal-page' className='text-black/60 block text-justify mt-3 mb-0 hover:!underline cursor-pointer'>The Entertainment Cricket League (ECL) has rapidly become a trending topic, drawing an impressive surge in viewership.</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CricketBbl