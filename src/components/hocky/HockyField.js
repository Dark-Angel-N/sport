import React from 'react'
import { FiHome } from 'react-icons/fi'
import { IoIosArrowForward } from 'react-icons/io'
import { FaArrowTrendUp } from 'react-icons/fa6'
import { PiDotOutlineFill } from 'react-icons/pi'
import HockyMenu from './HockyMenu'

const HockyField = () => {
    return (
        <section>
            <HockyMenu />
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
                        <h1 className="text-[28px] mb-4">Field Hockey</h1>
                        <p className='mb-0'>15 Dec 2024 - 27 Jan 2025</p>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-8'>
                        <div class='item relative mb-4'>
                            <h1 className='text-2xl mb-3'>Hockey India League 2024/25 Points Table: HIL standings on January 9</h1>
                            <img src="https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/tal6emvonzgkpyjzcmq2" alt="img" className='rounded-lg' />
                            <img src="/assets/images/svg/layer.png" alt="layer" className='absolute top-0 left-0 w-full h-full' />
                            <div className='absolute bottom-10 px-4'>
                                <a href='/internal-page' className='text-white text-lg block hover:!underline mb-2'>Hockey India League: Vedanta Kalinga Lancers vs Shrachi Rarh Bengal Tigers, preview, prediction, team news, and streaming details</a>
                                <div className='text-white font-[300] text-sm d-flex items-center gap-3'>
                                    <span>By Ginny Dennis</span>
                                    <span>Just now</span>
                                </div>
                            </div>
                        </div>
                        <p className='text-black/50 text-justify mb-[8px]'>With all the teams having played a couple of games each, the round-robin phase of the Hockey India League will witness a doubleheader on Saturday, January 4. The Shrachi Rarh Bengal Tigers will face the Delhi SG Pipers in the first match.</p>
                        <p className='text-black/50 text-justify mb-[8px]'>After edging past the Hyderabad Toofans and Team Gonasika, the Shrachi Rarh Bengal Tigers seek a third straight win in the Hockey India League. The Delhi SG Pipers, meanwhile, are coming off a couple of drawn games having won one of the shootouts and lost the other.</p>
                        <p className='text-black/50 text-justify border-b pb-4'>Much is at stake for both sides even as the Bengal Tigers, currently second on the points table, seek to retain the top spot ahead of the UP Rudras.</p>

                        <iframe width="100%" className='rounded-[10px]' height="350" src="https://www.youtube.com/embed/Fty4KvLUCro?si=mjzP9waPFDWKLzeq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                        <p className='text-black/60 text-justify mt-4 mb-[8px]'>The first edition of the Vijay Hazare Trophy was played back in 1993-94 but no overall winner was used to be named as the teams just played against counterparts without any final being played.</p>

                        <p className='text-black/60 text-justify mb-[8px]'>The 2021-22 Vijay Hazare Trophy will be its 32nd edition which is scheduled to be played from 21 December 2024 to 18 January 2025. The tournament will retain the same format as the previous edition of the competition.</p>

                        <p className='text-black/60 text-justify mb-[8px]'>Defending Champions Haryana will be relying on Rahul Tewatia, Harshal Patel, Aman Kumar and Anshul Kamboj to carrying the form from the last season.</p>

                        <div className='bg-[#E8E8E8]/50 mt-3 p-3 rounded d-flex items-center gap-3'>
                            <div>
                                <span className="bg-[#1E1E1E]/10 text-xs font-[700] d-inline-flex rounded py-1 px-2 items-center gap-1">Trending News <FaArrowTrendUp className='text-sm' /></span>
                                <a href='/internal-page' className='block hover:!underline text-black font-[600] my-3'>“Hockey India League: Vedanta Kalinga Lancers vs Soorma Hockey Club, preview, prediction, team news, and streaming details</a>
                                <div className='text-[#000000]/50 text-[10px] d-flex items-center gap-1'>
                                    <span>57 min read</span>
                                    <span className='d-flex items-center gap-[2px]'><PiDotOutlineFill />2:00PM IST</span>
                                </div>
                            </div>
                            <div>
                                <img src="https://hockey-india.b-cdn.net/media/uploads/2024/11/IMG-20241129-WA0010-scaled.jpg?aspect_ratio=4:3&width=1150" alt="banner" className='max-w-[163px] rounded-lg' />
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
                            <img src="https://hockey-india.b-cdn.net/media/uploads/2024/06/Ca290hoMhQ.jpg" alt="banner" className='w-full rounded-lg h-[300px] object-cover' />
                            <a href='/internal-page' className='text-black/60 text-justify mt-3 hover:!underline block cursor-pointer mb-0'>The Field Hockey (ECL) has rapidly become a trending topic, drawing an impressive surge in viewership.</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className='bg-white p-[16px] border rounded-lg'>
                            <img src="https://thesportzplanet.com/wp-content/uploads/2024/04/India-Womens-Hockey-Team.jpeg  " alt="banner" className='w-full h-[300px] object-cover rounded-lg' />
                            <a href='/internal-page' className='text-black/60 text-justify mt-3 hover:!underline block cursor-pointer mb-0'>The Field Hockey (ECL) has rapidly become a trending topic, drawing an impressive surge in viewership.</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className='bg-white p-[16px] border rounded-lg'>
                            <img src="https://imgd.ap7am.com/bimg/cr-2023113065684a7028af6.jpg" alt="banner" className='w-full rounded-lg h-[300px] object-cover' />
                            <a href='/internal-page' className='text-black/60 text-justify mt-3 hover:!underline block cursor-pointer mb-0'>The Field Hockey (ECL) has rapidly become a trending topic, drawing an impressive surge in viewership.</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HockyField