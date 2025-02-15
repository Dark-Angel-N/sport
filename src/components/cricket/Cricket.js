import React, { useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { IoIosArrowForward } from 'react-icons/io'
import { PiDotOutlineFill } from 'react-icons/pi'
import CricketMenu from './CricketMenu'
import { FaArrowTrendUp } from 'react-icons/fa6'
import HomeSlider from '../home/HomeSlider'
import HomeBanner from '../home/HomeBanner'

const Cricket = () => {

    const [key, setKey] = useState('home');
    const [key1, setKey1] = useState('Team');

    return (
        <section>
            <CricketMenu />
            <div className='container'>
                <div className='flex items-center gap-2 text-sm text-black/50 pt-3 mb-4'>
                    <a href="/" className='text-black/50'>Home</a>
                    <IoIosArrowForward />
                    <a href="#" className='text-black/50'><span>Cricket</span></a>
                </div>
                <HomeBanner />

                <HomeSlider />

                <div className='row'>
                    <div className='col-xl-10 col-md-9'>
                        <div className="row gy-4 mb-5">
                            <div className="col-xl-7 news_slider">
                                <OwlCarousel className='owl-theme' loop items={1} margin={10} nav dots={false}>
                                    {
                                        ['1', '2', '3', '4', '5'].map((index) => {
                                            return (
                                                <div class='item relative'>
                                                    <img src="/assets/images/svg/banner2.png" alt="banner" className='rounded-[10px]' />
                                                    <img src="/assets/images/svg/layer.png" alt="layer" className='absolute top-0 left-0' />
                                                    <div className='absolute bottom-10 px-4'>
                                                        <a href='/internal-page' className='text-white block text-lg mb-2 hover:!underline'>India vs Bangladesh 2nd Test : How Invincible have been Bumrah in all three formats of the game?</a>
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
                                        <a href='/internal-page' className='font-[600] mt-3 text-black block hover:!underline'>“You will see Sarfaraz playing” -Aakash Chopra backs youngster to play ahead of KL Rahul for 2nd ahead of KL Rahul</a>
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
                            </div>

                            <div className="col-xl-5">
                                <iframe width="100%" className='rounded-[10px]' height="280" src="https://www.youtube.com/embed/nnIvglfqp5U?si=xwchhhDdseuJrwFz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
                        </div>


                        <iframe width="90%" className='rounded-[10px]' height="400" src="https://www.youtube.com/embed/nnIvglfqp5U?si=xwchhhDdseuJrwFz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div className="col-xl-2 col-md-3">
                        <img src="/assets/images/svg/banner5.png" alt="banner" className='mb-4 mx-auto' />
                        <img src="/assets/images/svg/banner6.png" alt="banner" className='mx-auto' />
                    </div>
                </div>

                <div className='row mt-5'>
                    <div className="col-xl-9">
                        <div className="row">
                            <div className="col-xl-7">
                                <div className='flex rounded-lg relative overflow-hidden'>
                                    <img src="/assets/images/png/Gradient.png" alt="gradient"
                                        className='absolute w-full h-full' />
                                    <div className="row">
                                        <div className="col-7">
                                            <div className='relative z-[1] ps-4 py-4'>
                                                <a href='/internal-page' className='text-white hover:!underline'>
                                                    “Saare secret bata du kya idhar hi” -
                                                    Suryakumar Yadav’s hilarious reply to
                                                    reporter ahead of IND vs ENG 2025 1st T20I
                                                </a>
                                                <div className='text-white text-sm mt-5'>2h</div>
                                            </div>
                                        </div>
                                        <div className="col-5">
                                            <img src="/assets/images/png/banner6.png" alt="banner" className='w-full h-full object-cover' />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    {
                                        ['1'].map((index) => {
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
                                                        <div className='flex flex-col justify-between h-full'>
                                                            <img src="/assets/images/svg/banner4.png" alt="banner" className='max-w-[80px] rounded-[2px]' />
                                                            <div className='d-flex items-center mt-3 gap-2 justify-end'>
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
                            <div className="col-xl-5">
                                <div className="bg-white shadow rounded-lg h-full">
                                    <div className='p-3 text-sm border-b flex items-center justify-between'>
                                        <span>ICC Rankings</span>
                                        <span className='flex items-center gap-1 text-theme-color'>View All <IoIosArrowForward /></span>
                                    </div>
                                    <div className="p-3">
                                        <Tabs
                                            id="controlled-tab-example"
                                            activeKey={key}
                                            onSelect={(k) => setKey(k)}
                                            className="mb-3 text-sm ranking"
                                        >
                                            <Tab eventKey="home" title="T20 Ranking">
                                                <Tabs
                                                    id="controlled-tab-example"
                                                    activeKey={key1}
                                                    onSelect={(k) => setKey1(k)}
                                                    className="mb-3 inner_rank text-sm justify-between flex-nowrap"
                                                >
                                                    <Tab eventKey="Team" title="Team">
                                                        <table className='w-full table'>
                                                            <thead>
                                                                <tr>
                                                                    <td>Rank</td>
                                                                    <td>Team</td>
                                                                    <td>Rating</td>
                                                                </tr>
                                                                {
                                                                    ['1', '2', '3', '4'].map((index) => {
                                                                        return (
                                                                            <tr>
                                                                                <td className='!text-theme-color'>{index}</td>
                                                                                <td>
                                                                                    <div className="flex items-center gap-2">
                                                                                        <img src="/assets/images/svg/india.svg" alt="" />
                                                                                        India
                                                                                    </div>
                                                                                </td>
                                                                                <td>268</td>
                                                                            </tr>
                                                                        )
                                                                    })
                                                                }
                                                            </thead>
                                                        </table>
                                                    </Tab>
                                                    <Tab eventKey="Batting" title="Batting">
                                                        No data available
                                                    </Tab>
                                                    <Tab eventKey="Bowling" title="Bowling">
                                                        No data available
                                                    </Tab>
                                                    <Tab eventKey="All-Rounder" title="All-Rounder">
                                                        No data available
                                                    </Tab>
                                                </Tabs>
                                            </Tab>
                                            <Tab eventKey="profile" title="ODI Ranking">
                                                No data available
                                            </Tab>
                                            <Tab eventKey="contact" title="Test Ranking">
                                                No data available
                                            </Tab>
                                        </Tabs>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3">
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

                {/* <div className='row my-4'>
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
                </div> */}
            </div>
        </section>
    )
}

export default Cricket