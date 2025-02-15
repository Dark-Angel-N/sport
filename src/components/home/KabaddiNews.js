import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FaArrowTrendUp } from "react-icons/fa6";
import { PiDotOutlineFill } from "react-icons/pi";
import { VscCircleFilled } from 'react-icons/vsc';

const KabaddiNews = () => {
    return (
        <div className='pb-5'>
            <div className='d-flex items-center gap-3 mb-4'>
                <h1 className='md:text-[28px] text-[24px] mb-0'>Kabaddi</h1>
                <div className='bg-[#E6EBF5] text-[#FF2424] rounded px-2 py-1 font-[500] text-sm'><div className='animate-pulse d-flex items-center gap-1'><VscCircleFilled />Live Event</div></div>
            </div>
            <div className='d-flex flex-nowrap whitespace-nowrap overflow-x-auto scrolling gap-4'>
                <span className='bg-[#E6EBF5] rounded px-2 py-[6px] text-xs'>Sheru Classic MMKL</span>
                <span className='bg-[#E6EBF5] rounded px-2 py-[6px] text-xs'>Kabaddi Calendar</span>
                <span className='bg-[#E6EBF5] rounded px-2 py-[6px] text-xs'>Yuva Kabaddi Series</span>
                <span className='bg-[#E6EBF5] rounded px-2 py-[6px] text-xs'>K7 kabaddi</span>
                <span className='bg-[#E6EBF5] rounded px-2 py-[6px] text-xs'>2023</span>
                <span className='bg-[#E6EBF5] rounded px-2 py-[6px] text-xs'>2022</span>
                <span className='bg-[#E6EBF5] rounded px-2 py-[6px] text-xs'>Pro Kabaddi League</span>
                <span className='bg-[#E6EBF5] rounded px-2 py-[6px] text-xs'>2022</span>
                <span className='bg-[#E6EBF5] rounded px-2 py-[6px] text-xs'>2019</span>
                <span className='bg-[#E6EBF5] rounded px-2 py-[6px] text-xs'>2018</span>
            </div>

            <div className='mt-4'>
                <div className='row gy-4 justify-center'>
                    <div className='col-xl-10 col-md-9'>
                        <div className="row gy-4">
                            <div className="col-xl-7 news_slider">
                                <OwlCarousel className='owl-theme' loop items={1} margin={10} nav dots={false}>
                                    {
                                        ['1', '2', '3', '4', '5'].map((index) => {
                                            return (
                                                <div class='item relative'>
                                                    <img src="/assets/images/svg/banner7.png" alt="banner" className='rounded-[10px]' />
                                                    <img src="/assets/images/svg/layer.png" alt="layer" className='absolute top-0 left-0' />
                                                    <div className='absolute bottom-10 px-4'>
                                                        <a href='/internal-page' className='text-white block text-lg mb-2 hover:!underline'>How to play Kabaddi ? Defending Rules</a>
                                                        <div className='text-white font-[300] text-sm d-flex items-center gap-3'>
                                                            <span>By Ginny Dennis</span>
                                                            <span>Just now</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </OwlCarousel>

                                <div className='bg-[#E8E8E8]/50 mt-3 p-3 rounded d-flex items-center gap-3'>
                                    <div>
                                        <span className="bg-[#1E1E1E]/10 text-xs font-[700] d-inline-flex rounded py-1 px-2 items-center gap-1">Trending News <FaArrowTrendUp className='text-sm' /></span>
                                        <a href='/internal-page' className='font-[600] my-3 text-black block hover:!underline'>PKL 11: UP Yoddhas vs Dabang Delhi and Puneri Paltan vs Patna Pirates Head-to-Head and Probable Playing 7</a>
                                        <div className='text-[#000000]/50 text-[10px] d-flex items-center gap-1'>
                                            <span>57 min read</span>
                                            <span className='d-flex items-center gap-[2px]'><PiDotOutlineFill />2:00PM IST</span>
                                        </div>
                                    </div>
                                    <div>
                                        <img src="/assets/images/svg/banner8.png" alt="banner" className='max-w-[163px]' />
                                        <div className='d-flex items-center gap-2 justify-end mt-2'>
                                            <img src="/assets/images/svg/bookmark.svg" alt="bookmark" />
                                            <img src="/assets/images/svg/share.svg" alt="share" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5">
                                <iframe width="100%" height="280" className='rounded-[10px]' src="https://www.youtube.com/embed/0mU96veSVuo?si=noZ8WMJjTFw5B1a_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <div className="row gx-3">
                                    {
                                        ['1', '2'].map((index) => {
                                            return (
                                                <div className="col-12" key={index}>
                                                    <div className='bg-[#E8E8E8]/50 mt-3 p-3 rounded d-flex gap-3'>
                                                        <div>
                                                            <a href='/internal-page' className='text-[14px] block hover:!underline text-black mb-2 text-justify'>“You will see Sarfaraz playing” -Aakash Chopra backs youngster to play ahead of KL Rahul for 2nd ahead of KL Rahul</a>
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
                            <div className='col-12 text-center border-b'>
                                <a href='/kabbadi' className="bg-[#0033A0] inline-block mb-4 text-white rounded py-2 px-[20px]">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-2 col-md-3'></div>
                </div>
            </div>

            <div className='mt-5'>
                <div className="row gy-4">
                    <div className="col-lg-9 col-md-7">
                        <div className="row gy-4">
                            <div className="col-xl-6">
                                <img src="/assets/images/svg/banner14.png" alt="banner" className='w-full' />
                                <div className='mt-3'>
                                    <p className='font-[500] mb-1'>The New Carnival Limousine &nbsp; | &nbsp; Book Today!</p>
                                    <p className='text-sm'>Step into Luxury with new Carnival Limousine! Book now and redefine  your travel experience.</p>
                                    <p className='text-[#000000]/50 text-base'>Kia India &nbsp; | &nbsp; Sponsored</p>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <img src="/assets/images/svg/banner14.png" alt="banner" className='w-full' />
                                <div className='mt-3'>
                                    <p className='font-[500] mb-1'>The New Carnival Limousine &nbsp; | &nbsp; Book Today!</p>
                                    <p className='text-sm'>Step into Luxury with new Carnival Limousine! Book now and redefine  your travel experience.</p>
                                    <p className='text-[#000000]/50 text-base'>Kia India &nbsp; | &nbsp; Sponsored</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-5">
                        <div className='bg-[#D9D9D9]/10 p-3 border-[1px] border-[#000000]/10'>
                            <p className='text-2xl font-[500] text-center mb-4'>Latest News</p>

                            <div className='d-flex gap-3 mb-3 pb-3'>
                                <div className='text-[23px] font-[600]'>1.</div>
                                <a href='/internal-page' className='text-[14px] text-black hover:!underline before_line relative'>India vs Bangladesh 2nd Test Match : Can we witness Virat Kohli’s 30th Hundred in Upcoming Test</a>
                            </div>
                            <div className='d-flex gap-3 mb-3 pb-3'>
                                <div className='text-[23px] font-[600]'>2.</div>
                                <a href='/internal-page' className='text-[14px] text-black hover:!underline before_line relative'>India vs Bangladesh 2nd Test Match : Can we witness Virat Kohli’s 30th Hundred in Upcoming Test</a>
                            </div>
                            <div className='d-flex gap-3 mb-3 pb-3'>
                                <div className='text-[23px] font-[600]'>3.</div>
                                <a href='/internal-page' className='text-[14px] text-black hover:!underline before_line relative'>India vs Bangladesh 2nd Test Match : Can we witness Virat Kohli’s 30th Hundred in Upcoming Test</a>
                            </div>
                            <div className='d-flex gap-3'>
                                <div className='text-[23px] font-[600]'>4.</div>
                                <a href='/internal-page' className='text-[14px] text-black hover:!underline'>India vs Bangladesh 2nd Test Match : Can we witness Virat Kohli’s 30th Hundred in Upcoming Test</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KabaddiNews