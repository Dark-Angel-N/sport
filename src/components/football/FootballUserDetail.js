import React, { useState } from 'react'
import { FiHome } from 'react-icons/fi'
import { IoIosArrowForward } from 'react-icons/io'
import FootBallMenu from './FootBallMenu'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { PiDotOutlineFill } from 'react-icons/pi';
import { FaArrowTrendUp } from 'react-icons/fa6';

const FootballUserDetail = () => {

    const [activeTab, setActiveTab] = useState('overview');

    return (
        <section>
            <FootBallMenu />
            <div className='container'>
                <div className='flex items-center gap-2 text-sm text-black/50 pt-3'>
                    <a href="/" className='text-black/50'>Home</a>
                    <IoIosArrowForward />
                    <a href="/football" className='text-black/50'><span>Football</span></a>
                    <IoIosArrowForward />
                    <span>Series A 2024-25</span>
                </div>
                <div className='my-4'>
                    <div className='text-white rounded-lg relative'>
                        <img src="/assets/images/png/userBack.png" alt="back" />
                        <div className='absolute top-1/2 -translate-y-1/2 left-10 flex items-center gap-3'>
                            <img src="/assets/images/svg/footballPlayer.svg" alt="user" className='w-[150px]' />
                            <div>
                                <h1 className="text-[28px] mb-4">Marko Arnautovic</h1>
                                <p className='mb-0'>Austria</p>
                            </div>
                        </div>
                        <div className='absolute bottom-4 right-4 flex items-center gap-4'>
                            <div className={`cursor-pointer ${activeTab === 'overview' ? 'border-b-2 border-white' : ''}`} onClick={() => setActiveTab('overview')}>OverView</div>
                            <div className={`cursor-pointer ${activeTab === 'news' ? 'border-b-2 border-white' : ''}`} onClick={() => setActiveTab('news')}>News</div>
                        </div>
                    </div>

                    <div className='my-4'>
                        {activeTab === 'overview' && (
                            <div className='row gy-4 justify-center'>
                                <div className='col-md-10'>
                                    <h1 className='lg:text-[28px] text-[24px] mb-4'>Personal Information</h1>
                                    <div className='shadow-[0px_2px_9.4px_#00000014] d-flex'>
                                        <div className='w-[20%] p-4 border-r'>
                                            <p>Full Name</p>
                                            <p>Date of Birth</p>
                                            <p>Nationality</p>
                                            <p>Height</p>
                                            <p>Role</p>
                                            <p>Past Team(s)</p>
                                        </div>
                                        <div className="w-[80%] p-4">
                                            <p>Marko Arnautovic</p>
                                            <p>April 19, 1989</p>
                                            <p>Austria</p>
                                            <p>1.92 m ( 6 ft 4 in )</p>
                                            <p>Forward</p>
                                            <p className='mb-0'>
                                                <div className='text-[#0033A0]'>Stoke City</div>
                                                <div className='text-[#0033A0]'>Werder Bremen Football</div>
                                                <div className='text-[#0033A0]'>FC T wente Football</div>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-2'>
                                    <img src="/assets/images/svg/banner5.png" alt="banner" className='mb-4 mx-auto' />
                                </div>
                            </div>
                        )}

                        {activeTab === 'news' && (
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
                                                                    <img src="/assets/images/svg/banner9.png" alt="banner" className='rounded-[10px]' />
                                                                    <img src="/assets/images/svg/layer.png" alt="layer" className='absolute top-0 left-0' />
                                                                    <div className='absolute bottom-10 px-4'>
                                                                        <a href='/internal-page' className='text-white block mb-2 hover:!underline text-lg'>Au Revoir Football? Paul Pogba switches career to Silver Screen amid Ban, makes debut in French movie</a>
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
                                                        <a href='/internal-page' className='font-[600] block text-black hover:!underline my-3'>PKL 11: UP Yoddhas vs Dabang Delhi and Puneri Paltan vs Patna Pirates Head-to-Head and Probable Playing 7</a>
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
                                                <iframe width="100%" height="315" className='rounded-[10px]' src="https://www.youtube.com/embed/oOjVlrDOG-Y?si=dMhdSe1w0LP6ucVf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                                <div className="row gx-3">
                                                    {
                                                        ['1', '2'].map((index) => {
                                                            return (
                                                                <div className="col-12" key={index}>
                                                                    <div className='bg-[#E8E8E8]/50 mt-3 p-3 rounded d-flex gap-3'>
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
                                            <div className='col-12 text-center border-b'>
                                                <a href='/football' className="bg-[#0033A0] mb-4 text-white rounded py-2 px-[20px] inline-block">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-xl-2 col-md-3'></div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FootballUserDetail