import React from 'react'
import { FaArrowTrendUp, FaRegMessage } from "react-icons/fa6";
import { LuShare2 } from "react-icons/lu";
import { IoBookmarkOutline } from "react-icons/io5";
import { PiDotOutlineFill } from 'react-icons/pi';
import { FaRegFaceSmile } from "react-icons/fa6";
import { FiCamera } from "react-icons/fi";
import { HiOutlineGif } from "react-icons/hi2";
import { IoIosArrowForward } from 'react-icons/io';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import HomeBanner from '../home/HomeBanner';
import HomeSlider from '../home/HomeSlider';

const KabbadiMain = () => {
    return (
        <div className=''>
            <div className='flex items-center gap-2 text-sm text-black/50 pt-3 mb-4'>
                <a href="/" className='text-black/50'>Home</a>
                <IoIosArrowForward />
                <a href="#" className='text-black/50'><span>Kabbadi</span></a>
            </div>
            <HomeBanner />
            <HomeSlider />

            <div className='row'>
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
                    </div>
                </div>
                <div className="col-xl-2 col-md-3">
                    <img src="/assets/images/svg/banner5.png" alt="banner" className='mb-4 mx-auto' />
                    <img src="/assets/images/svg/banner6.png" alt="banner" className='mx-auto' />
                </div>
            </div>

            <div className='row mt-5'>
                <div className="col-9">
                    <iframe width="100%" height="400" className='rounded-[10px]' src="https://www.youtube.com/embed/kW6z5TyU8QA?si=eJy6ahw1elzp0a5s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                    <div className='flex rounded-lg relative overflow-hidden mt-4'>
                        <img src="/assets/images/png/Gradient.png" alt="gradient"
                            className='absolute w-full h-full' />
                        <div className="row">
                            <div className="col-7">
                                <div className='relative z-[1] ps-4 py-4 flex flex-col justify-between h-full'>
                                    <a href='/internal-page' className='text-white hover:!underline'>
                                        Pro Kabaddi League: List of raiders with 300+ raid points in a single PKL season ft. Pardeep Narwal
                                        Pro Kabaddi League: List of raiders with 300+ raid points in a single PKL season ft. Pardeep Narwal
                                    </a>
                                    <div className='text-white text-sm mt-5'>2h</div>
                                </div>
                            </div>
                            <div className="col-5">
                                <img src="https://explosivewhey.com/cdn/shop/articles/the-power-of-exercise-and-protein-for-kabaddi-players-491464.jpg?v=1721271964&width=1500" alt="banner" className='w-full h-full object-cover' />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {
                            ['1', '2', '3', '4'].map((index) => {
                                return (
                                    <div className="col-6" key={index}>
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
                <div className="col-3">
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

            {/* <div className='row mb-4'>
                <h1 className='lg:text-[28px] text-[24px] mb-3'>Latest News</h1>
                <div className="col-lg-4 col-md-6">
                    <div className='bg-white p-[16px] border rounded-lg'>
                        <img src="https://s3.ap-south-1.amazonaws.com/assets-pkl.sportz.io/waf-images/57/04/1a/16-9/zwGIXP0CMB.jpg" alt="banner" className='w-full h-[257px] rounded-lg' />
                        <a href='/internal-page' className='text-black/60 text-justify mt-3 mb-0 hover:!underline block cursor-pointer'>The Pro Kabbadi League (ECL) has rapidly become a trending topic, drawing an impressive surge in viewership.</a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className='bg-white p-[16px] border rounded-lg'>
                        <img src="https://cache.careers360.mobi/media/article_images/2022/3/28/Pradeep_Narwal-_Indian-Kabaddi_Player.jpg" alt="banner" className='w-full h-[257px] rounded-lg' />
                        <a href='/internal-page' className='text-black/60 text-justify mt-3 mb-0 hover:!underline block cursor-pointer'>The Pro Kabbadi League (ECL) has rapidly become a trending topic, drawing an impressive surge in viewership.</a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className='bg-white p-[16px] border rounded-lg'>
                        <img src="https://p9dzm74w.tinifycdn.com/wp-content/uploads/2024/11/kabaddi.jpeg" alt="banner" className='w-full h-[257px] rounded-lg' />
                        <a href='/internal-page' className='text-black/60 text-justify mt-3 mb-0 hover:!underline block cursor-pointer'>The Pro Kabbadi League (ECL) has rapidly become a trending topic, drawing an impressive surge in viewership.</a>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default KabbadiMain