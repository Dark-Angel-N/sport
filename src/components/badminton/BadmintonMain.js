import React from 'react'
import BadmintonMenu from './BadmintonMenu'
import { LuShare2 } from 'react-icons/lu'
import { IoBookmarkOutline } from 'react-icons/io5'
import { FaArrowTrendUp } from 'react-icons/fa6'
import { PiDotOutlineFill } from 'react-icons/pi'

const BadmintonMain = () => {
    return (
        <section>
            <BadmintonMenu />
            <div className='container'>
                <div className='pt-4'>
                    <div className='row'>
                        <div className='col-8'>
                            <h1 className='mb-4 lg:text-[36px] md:text-[30px] text-[20px]'>&quot;It still hurts and will for sometime&quot; - Lakshya Sen reflects on Olympics heartbreak after overcoming bronze medalist Lee Zii Jia in China</h1>
                            <p className='text-black/50 italic'>Published By : <span className="font-[500]">Business Desk  Sportscrazy.com</span></p>
                            <p className='text-black'>Last Updated: November 24, 2024, 15:25 IST</p>
                            <p className='text-lg text-black'>India’s badminton ace Lakshya Sen brought an end to his  post-Olympics win drought as he clinched victory in his opening match at the China Masters on Wednesday,November 20.</p>

                            <div className='row justify-center'>
                                <div className='col-12'>
                                    <div className='bg-[#F3F8FB] p-3 d-md-flex items-center justify-between'>
                                        <div className='flex items-center gap-3'>
                                            <img src="/assets/images/svg/user.svg" alt="user" className='w-[50px] h-[50px] rounded-full' />
                                            <div className='d-flex flex-wrap items-center sm:gap-3 gap-2'>
                                                <p className='mb-0'>By <span className='text-[#D32F2F]'>Darpan Tikiya</span></p>
                                            </div>
                                        </div>
                                        <div className='flex items-center justify-end gap-3 mt-sm-0 mt-3'>
                                            <div className='w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center text-xl'><LuShare2 /></div>
                                            <div className='w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center text-xl'><IoBookmarkOutline /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-12'>
                                    <h1 className='text-[24px] my-4'>Barcelona urged to sign Angelo Stiller</h1>

                                    <div className="relative">
                                        <img src="/assets/images/png/banner2.png" alt="banner" className='rounded-[10px]' />
                                        <img src="/assets/images/svg/layer.png" alt="layer" className='absolute top-0 left-0 w-full h-full' />
                                    </div>

                                    <p className='text-black/50 text-justify mt-4 mb-[8px]'>German legend Lothar Matthaus has urged Barcelona to secure the services of Angelo Stiller.The German midfielder has been a first-team regular for VfB Stuttgart of late and his efforts have caught the eye of clubs across Europe.</p>

                                    <p className='text-black/50 text-justify mb-[8px]'>Barcelona are set to welcome  Las Palmas at the Estani Olimpic Lluis Company on  Saturady( November 30) in Laliga.The Catalans are leading the title race after 14 games with 34 points,but Real Madrid are four points  behind on Second with a game  in hand.</p>
                                    <p className='text-black/50 text-justify mb-[8px]'>Meanwhile, a former player has player has urged the Blaugrana to sign a German midfielder.Elsewhere, the Spanish gians are not working on a move to sign Mohamed Salah.</p>
                                    <p className='text-black/50 text-justify border-b pb-4'>On that note,let’s look at the major Barcelona transfer stories from November 30,2024.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 offset-1">
                            <img src="/assets/images/svg/banner5.png" alt="banner" className='mb-4 mx-auto' />
                            <img src="/assets/images/svg/banner6.png" alt="banner" className='mx-auto' />
                        </div>
                    </div>

                    <div className='row'>
                        <div className="col-8 mt-3">
                            <iframe width="100%" height="400" className='rounded-[10px]' src="https://www.youtube.com/embed/19eh4eZyH7w?si=OpBNmnT9e1Nk_P9F" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                            <p className='text-black/60 text-justify mt-4 mb-[8px]'>Barcelona are set to welcome  Las Palmas at the Estani Olimpic Lluis Company on  Saturady( November 30) in Laliga.The Catalans are leading the title race after 14 games with 34 points,but Real Madrid are four points  behind on Second with a game  in hand.Barcelona are set to welcome  Las Palmas at the Estani Olimpic Lluis Company on  Saturady( November 30) in Laliga.The Catalans are leading the title race after 14 games with 34 points,but Real Madrid are four points  behind on Second with a game  in hand.race after 14 games with 34 points,but Real Madrid are four points  behind on Second with a game  in hand.</p>

                            <p className='text-black/60 text-justify mb-[8px]'>Meanwhile, a former player has player has urged the Blaugrana to sign a German midfielder.Elsewhere, the Spanish gians are not working on a move to sign Mohamed Salah.</p>
                            <p className='text-black/60 text-justify mb-0 pb-4'>On that note,let’s look at the major Barcelona transfer stories from November 30,2024.</p>

                            <div className='bg-[#E8E8E8]/50 mt-3 p-3 rounded d-flex items-center gap-3'>
                                <div>
                                    <span className="bg-[#1E1E1E]/10 text-xs font-[700] d-inline-flex rounded py-1 px-2 items-center gap-1">Trending News <FaArrowTrendUp className='text-sm' /></span>
                                    <a href='/internal-page' className=' hover:!underline block text-black font-[600] my-3'>“You will see Sarfaraz playing” -Aakash Chopra backs youngster to play ahead of KL Rahul for 2nd ahead of KL Rahul</a>
                                    <div className='text-[#000000]/50 text-[10px] d-flex items-center gap-1'>
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
                            <img src="/assets/images/svg/banner12.png" alt="banner" className='mx-auto' />
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-8'>
                            <h1 className='text-[24px] my-4'>Barcelona urged to sign Angelo Stiller</h1>

                            <div className='relative'>
                                <img src="/assets/images/png/banner3.png" alt="banner" className='rounded-[10px]' />
                                <img src="/assets/images/svg/layer.png" alt="layer" className='absolute top-0 left-0 w-full h-full' />
                            </div>

                            <p className='text-black/60 text-justify mt-4 mb-[8px]'>German legend Lothar Matthaus has urged Barcelona to secure the services of Angelo Stiller.The German midfielder has been a first-team regular for VfB Stuttgart of late and his efforts have caught the eye of clubs across Europe.</p>
                            <p className='text-black/50 text-justify mb-[8px]'>Barcelona are set to welcome  Las Palmas at the Estani Olimpic Lluis Company on  Saturady( November 30) in Laliga.The Catalans are leading the title race after 14 games with 34 points,but Real Madrid are four points  behind on Second with a game  in hand.</p>
                            <p className='text-black/50 text-justifymb-[8px]'>Meanwhile, a former player has player has urged the Blaugrana to sign a German midfielder.Elsewhere, the Spanish gians are not working on a move to sign Mohamed Salah.</p>
                            <p className='text-black/50 text-justify mb-0'>On that note,let’s look at the major Barcelona transfer stories from November 30,2024.</p>

                            <img src="/assets/images/svg/banner10.png" alt="banner19" className='my-5 mx-auto' />
                        </div>
                    </div>

                    <div className='row mb-4'>
                        <h1 className='lg:text-[28px] text-[24px] mb-3'>Latest News</h1>
                        <div className="col-lg-4 col-md-6">
                            <div className='bg-white p-[16px] border rounded-lg'>
                                <img src="https://hips.hearstapps.com/toc.h-cdn.co/assets/16/30/2560x1785/gallery-1469562775-gettyimages-452846870.jpg?resize=640:*" alt="banner" className='w-full rounded-lg h-[300px] object-cover' />
                                <a href='/internal-page' className='text-black/60 text-justify mt-3 hover:!underline block cursor-pointer mb-0'>The Entertainment Cricket League (ECL) has rapidly become a trending topic, drawing an impressive surge in viewership.</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className='bg-white p-[16px] border rounded-lg'>
                                <img src="https://cdn.britannica.com/44/256944-050-8D414329/PV-Sindhu-2020-Tokyo-Olympics.jpg" alt="banner" className='w-full rounded-lg h-[300px] object-cover' />
                                <a href='/internal-page' className='text-black/60 text-justify mt-3 hover:!underline block cursor-pointer mb-0'>The Entertainment Cricket League (ECL) has rapidly become a trending topic, drawing an impressive surge in viewership.</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className='bg-white p-[16px] border rounded-lg'>
                                <img src="https://badmintonoceania.org/wp-content/uploads/2022/07/AUS-scaled-2560x1280.jpg" alt="banner" className='w-full rounded-lg h-[300px] object-cover' />
                                <a href='/internal-page' className='text-black/60 text-justify mt-3 hover:!underline block cursor-pointer mb-0'>The Entertainment Cricket League (ECL) has rapidly become a trending topic, drawing an impressive surge in viewership.</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BadmintonMain