import React, { useState } from 'react'
import { FiHome } from 'react-icons/fi'
import { IoIosArrowForward } from 'react-icons/io'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { PiDotOutlineFill } from 'react-icons/pi';
import { FaArrowTrendUp } from 'react-icons/fa6';
import HockyMenu from './HockyMenu';

const HockyMens = () => {

    const [activeTab, setActiveTab] = useState('overview');

    return (
        <section>
            <HockyMenu />
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
                            <img src="https://staticg.sportskeeda.com/editor/2021/06/5f689-16249410183696-800.jpg?w=268" alt="user" className='w-[150px] h-[150px] rounded-full object-cover' />
                            <div>
                                <h1 className="text-[28px] mb-0">Indian Men&apos;s Hockey Team</h1>
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
                                <div className='col-md-8'>
                                    <h1 className='lg:text-[28px] text-[24px] mb-4'>Team Information</h1>
                                    <div className='shadow-[0px_2px_9.4px_#00000014] d-flex'>
                                        <div className='w-[20%] p-4 border-r'>
                                            <p>Owner(s)</p>
                                            <p className='mb-0'>Nickname</p>
                                        </div>
                                        <div className="w-[80%] p-4">
                                            <p>Association - Hockey India</p>
                                            <p className='mb-0'>Men in Blue, Bharat Army</p>
                                        </div>
                                    </div>

                                    <h1 className="text-2xl mt-4">&quot;Indian hockey is fun, not super-structured chess style&quot; - Kane Russell highlights massive stadium, energy in Hockey India League</h1>
                                    <div class='item relative'>
                                        <img src="https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/tal6emvonzgkpyjzcmq2" alt="banner" className='rounded-[10px] w-full h-full' />
                                        <img src="/assets/images/svg/layer.png" alt="layer" className='absolute top-0 left-0 w-full h-full' />
                                        <div className='absolute bottom-10 px-4'>
                                            <a href='/internal-page' className='text-white hover:!underline block mb-2 text-lg'>Au Revoir Football? Paul Pogba switches career to Silver Screen amid Ban, makes debut in French movie</a>
                                            <div className='text-white font-[300] text-sm d-flex items-center gap-3'>
                                                <span>By Ginny Dennis</span>
                                                <span>Just now</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='rounded-[6px] my-4 overflow-hidden shadow-[0px_4px_8.4px_#0000001A]'>
                                        <div>
                                            <div className="text-[#464646] bg-[#EBF2FF] d-flex gap-1 justify-between items-center px-3 py-3 border-b">
                                                <span>India Hockey Bio</span>
                                            </div>
                                            <div className='p-4'>
                                                <p className='text-black/50'>Indian men’s national hockey team was the first Asian and Non-European men’s team to be a part of the International Hockey Federation since 1927. They are well-known for their sheer dominance in the Olympics between 1928 and 1956. The Indian men’s national hockey team won the bronze medal at Tokyo Olympics.</p>
                                                <p className='text-black/50'>Indian hockey team competed under the British India flag from 1928 to 1936 Olympic Games before playing under the Indian national flag post-independence from 1948 onwards. They had produced some of the hockey greats like Major Dhyan Chand, Richard Allen, Balbir Singh Senior, Udham Singh Kular, Ajit Pal Singh, K.D Singh, and Dhanraj Pillai.</p>

                                                <h1 className='text-xl'>Indian Hockey Team’s Record At The Summer OIympics</h1>
                                                <p className='text-black/50'>The Indian men’s hockey team is the most successful Olympic hockey team with record 11 medals, that includes eight Gold medals (1928, 1932, 1936, 1948, 1952, 1956, 1964, and 1980), a Silver (1960), and two Bronze medals (1968 and 1972).</p>
                                                <p className='text-black/50'>They also have a record of winning 77 matches and scoring 433 goals in Olympic history. Late Balbir Singh Sr. has a record to his name for scoring the most goals (5 against Pakistan in 1956 Melbourne) in the Olympic Final history.</p>
                                                <p className='text-black/50'>The Indian men’s hockey team has qualified for the 2021 Tokyo Olympics after winning two games with 11 goals against Russia at the 2019 FIH Men’s Hockey Olympic Qualifiers in Bhubaneshwar, Odisha. They have been placed in Group A of the men’s field hockey at the Tokyo Olympics alongside Argentina, Australia, Japan, New Zealand, and Spain.</p>

                                                <h1 className="text-xl">CURRENT SQUAD:</h1>
                                                <h1 className="text-base mt-4">- GOALKEEPERS:</h1>
                                                <p>1. Suraj Karkera</p>
                                                <p>2. Krishnan Pathak</p>
                                                <p>3. P.R. Sreejesh</p>
                                                <h1 className="text-base mt-4">- DEFENDERS:</h1>
                                                <p>1. Rupinder Pal Singh</p>
                                                <p>2. Jarmanpreet Singh</p>
                                                <p>3. Kothajit Singh</p>
                                                <p>4. Surender Kumar</p>
                                                <p>5. Harmanpreet Singh</p>
                                                <p>6. Nilam Sanjeep Xess</p>
                                                <p>7. Gurinder Singh</p>
                                                <p>8. Dipsan Tirkey</p>
                                                <p>9. Birendra Lakra</p>
                                                <p>10. Amit Rohidas</p>
                                                <h1 className="text-base mt-4 underline">SUPPORT STAFF:</h1>
                                                <p><strong>Head Coach:</strong> Graham Reid</p>
                                                <p><strong>Analytical Coach:</strong> Gregg Clarke</p>
                                                <p><strong>Assistant Coach:</strong> Shivendra Singh</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-3 offset-1'>
                                    <img src="/assets/images/svg/banner5.png" alt="banner" className='mb-4 mx-auto' />
                                </div>
                            </div>
                        )}

                        {activeTab === 'news' && (
                            <div className='mt-4'>
                                <h1 className="text-2xl">Indian Men&apos;s Hockey Team News</h1>
                                <div className='row gy-4 justify-center'>
                                    <div className='col-xl-10 col-md-9'>
                                        <div className="row gy-4">
                                            <div className="col-xl-7 news_slider">
                                                <OwlCarousel className='owl-theme' loop items={1} margin={10} nav dots={false}>
                                                    {
                                                        ['1', '2', '3', '4', '5'].map((index) => {
                                                            return (
                                                                <div class='item relative overflow-hidden'>
                                                                    <img src="https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/tal6emvonzgkpyjzcmq2" alt="banner" className='rounded-[10px] h-full w-full' />
                                                                    <img src="/assets/images/svg/layer.png" alt="layer" className='absolute top-0 left-0 h-full w-full' />
                                                                    <div className='absolute bottom-10 px-4'>
                                                                        <a href='/internal-page' className='text-white hover:!underline block mb-2 text-lg'>&quot;Indian hockey is fun, not super-structured chess style&quot; - Kane Russell highlights massive stadium, energy in Hockey India League [Exclusive]</a>
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
                                                        <a href='/internal-page' className='font-[600] text-black hover:!underline block my-3'>PKL 11: UP Yoddhas vs Dabang Delhi and Puneri Paltan vs Patna Pirates Head-to-Head and Probable Playing 7</a>
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
                                            </div>
                                            <div className="col-xl-5">
                                                <iframe width="100%" className='rounded-[10px]' height="315" src="https://www.youtube.com/embed/Fty4KvLUCro?si=mjzP9waPFDWKLzeq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                                                <div className="row gx-3">
                                                    {
                                                        ['1', '2'].map((index) => {
                                                            return (
                                                                <div className="col-12" key={index}>
                                                                    <div className='bg-[#E8E8E8]/50 mt-3 p-3 rounded d-flex gap-3'>
                                                                        <div>
                                                                            <a href='/internal-page' className='text-[14px] text-black mb-2 hover:!underline block text-justify'>“You will see Sarfaraz playing” -Aakash Chopra backs youngster to play ahead of KL Rahul for 2nd ahead of KL Rahul</a>
                                                                            <div className='text-[#000000]/50 text-[10px] d-flex items-center gap-1'>
                                                                                <span>57 min read</span>
                                                                                <span className='d-flex items-center gap-[2px]'><PiDotOutlineFill />2:00PM IST</span>
                                                                            </div>
                                                                        </div>
                                                                        <div>
                                                                            <img src="https://hockey-india.b-cdn.net/media/uploads/2024/11/IMG-20241129-WA0010-scaled.jpg?aspect_ratio=4:3&width=1150" alt="banner" className='max-w-[80px] rounded-[2px]' />
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
                                                <a href='/hocky' className="bg-[#0033A0] inline-block mb-4 text-white rounded py-2 px-[20px]">Read More</a>
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

export default HockyMens