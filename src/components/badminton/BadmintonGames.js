import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import BadmintonMenu from './BadmintonMenu'
import { PiDotOutlineFill } from 'react-icons/pi'
import { FaArrowTrendUp } from 'react-icons/fa6'

const BadmintonGames = () => {
    return (
        <section>
            <BadmintonMenu />
            <div className='container'>
                <div className='flex items-center gap-2 text-sm text-black/50 pt-3'>
                    <a href="/" className='text-black/50'>Home</a>
                    <IoIosArrowForward />
                    <a href="/badminton" className='text-black/50'><span>Badminton</span></a>
                    <IoIosArrowForward />
                    <span>Commonwealth Games 2022</span>
                </div>
                <div className='my-4'>
                    <div className='bg-[#0033A0] p-5 text-white rounded-lg'>
                        <h1 className="text-[28px] mb-4">Commonwealth Games 2022</h1>
                        <p className='mb-0'>18 Oct 2024 - 24 Dec 2024</p>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-8'>
                        <div class='item relative'>
                            <img src="/assets/images/png/banner4.png" alt="banner" className='rounded-[10px] w-full' />
                            <img src="/assets/images/svg/layer.png" alt="layer" className='absolute top-0 left-0 w-full h-full' />
                            <div className='absolute bottom-2 px-4'>
                                <a href='/internal-page' className='text-white  hover:!underline block mb-2 text-lg'>&quot;I am deeply appalled and disappointed by the decision&quot; - Pullela Gopichand on exclusion of badminton from 2026 Commonwealth Games</a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className='bg-[#E8E8E8]/50 mt-3 p-3 rounded d-flex items-center gap-3'>
                                    <div>
                                        <span className="bg-[#1E1E1E]/10 text-xs font-[700] d-inline-flex rounded py-1 px-2 items-center gap-1">Trending News <FaArrowTrendUp className='text-sm' /></span>
                                        <a href='/internal-page' className='font-[600] hover:!underline block text-black my-3 text-sm'>“You will see Sarfaraz playing” -Aakash Chopra backs youngster to play ahead of KL Rahul for 2nd ahead of KL Rahul for.......</a>
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
                            <div className="col-6">
                                <div className='bg-[#E8E8E8]/50 mt-3 p-3 rounded d-flex items-center gap-3'>
                                    <div>
                                        <span className="bg-[#1E1E1E]/10 text-xs font-[700] d-inline-flex rounded py-1 px-2 items-center gap-1">Trending News <FaArrowTrendUp className='text-sm' /></span>
                                        <a href='/internal-page' className='font-[600] hover:!underline block text-black my-3 text-sm'>“You will see Sarfaraz playing” -Aakash Chopra backs youngster to play ahead of KL Rahul for 2nd ahead of KL Rahul for.......</a>
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
                        </div>
                    </div>
                    <div className="col-3 offset-1">
                        <div className='bg-[#D9D9D9]/10 p-3 border-[1px] border-[#000000]/10'>
                            <p className='text-2xl font-[500] text-center mb-4'>Latest News</p>

                            <div className='d-flex gap-3 mb-3 pb-3'>
                                <div className='text-[23px] font-[600]'>1.</div>
                                <a href='/internal-page' className='text-[14px] text-black block hover:!underline before_line relative'>India vs Bangladesh 2nd Test Match : Can we witness Virat Kohli’s 30th Hundred in Upcoming Test</a>
                            </div>
                            <div className='d-flex gap-3 mb-3 pb-3'>
                                <div className='text-[23px] font-[600]'>2.</div>
                                <a href='/internal-page' className='text-[14px] text-black block hover:!underline before_line relative'>India vs Bangladesh 2nd Test Match : Can we witness Virat Kohli’s 30th Hundred in Upcoming Test</a>
                            </div>
                            <div className='d-flex gap-3 mb-3 pb-3'>
                                <div className='text-[23px] font-[600]'>3.</div>
                                <a href='/internal-page' className='text-[14px] text-black block hover:!underline before_line relative'>India vs Bangladesh 2nd Test Match : Can we witness Virat Kohli’s 30th Hundred in Upcoming Test</a>
                            </div>
                            <div className='d-flex gap-3'>
                                <div className='text-[23px] font-[600]'>4.</div>
                                <a href='/internal-page' className='text-[14px] text-black block hover:!underline'>India vs Bangladesh 2nd Test Match : Can we witness Virat Kohli’s 30th Hundred in Upcoming Test</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col-8'>
                        <h1 className='text-[24px]'>About CWG 2022</h1>
                        <p className='text-black/50 mb-[8px]'>As England prepares to host some of the best athletes from across the world, Birmingham will be throbbing with anticipation as the 2022 Commonwealth Games take place there from July 28 to August 8, 2022.</p>
                        <p className='text-black/50 mb-0 pb-4'>The multi-sport event, which will be hosted for the third time by England, will be held under the motto &apos;Games for Everyone&apos; in order to spread the contestants&apos; dreams and journeys. A total of 72 countries are expected to compete in the event, with the goal of ending their campaign with a title victory.</p>

                        <h1 className='text-[24px]'>Home of all events, Alexander Stadium</h1>
                        <p className='text-black/50 mb-[8px]'>Alexander Stadium will serve as the focal point for all sports events, beginning with the magnificent opening ceremony. The swimming and diving event will be held in Sandwell Aquatics Centre, while the Artistic and Rhythmic Gymnastics will be held at the Arena Birmingham. The NEC hosts events in netball, badminton, boxing, powerlifting, table tennis, para table tennis, and weightlifting.</p>
                        <p className='text-black/50 mb-[8px]'>Lawn Bowls and Para Lawn Bowls will be held in Victoria Park. At the Marathon Finish Area, Victoria Square hosts the Athletics. Cycling - Road Race will be held in Warwick. Cycling – Time Trial will be held in West Park. Cycling - Mountain Bike will take place in Cannock Chase Forest, while Judo will take place at Coventry Arena. Wrestling.</p>
                        <p className='text-black/50 mb-0 pb-4'>While Hockey and Squash will be held at the University of Birmingham Hockey and Squash Centre, Smithfield will host three events: Basketball 3x3, Beach Volleyball, and Wheelchair Basketball 3x3. Cycling - Track and Para Track will take place in Lee Valley VeloPark. Rugby Sevens will be held at Coventry Stadium, Cricket T20 will be held at Edgbaston Stadium, while Triathlon and Para Triathlon will be held at Sutton Park.</p>

                        <h1 className='text-[24px]'>72 countries, 20 sports, 283 events</h1>
                        <p className='text-black/50 mb-[8px]'>This year&apos;s Commonwealth Games will feature 72 nations competing in 20 sports that will be split into 283 individual events for the ultimate prize.</p>
                        <p className='text-black/50 mb-0 pb-4'>The extension of the number of events for women, which will also be a first for the Games, will equalise the number of events for both men&apos;s and women&apos;s categories, a move that will be lauded around the world.</p>

                        <h1 className='text-[24px]'>What can be expected?</h1>
                        <p className='text-black/50 mb-[8px]'>Athletics and other sports have attracted a lot of interest in recent years, with outstanding performances attracting continual attention. With over 5,054 exceptional athletes expected to compete at the Games, there will be plenty of nail-biting action from all of the events until the Commonwealth Games in 2022.</p>
                    </div>
                    <div className="col-3 offset-1">
                        <img src="/assets/images/svg/banner5.png" alt="banner" className='mb-4 mx-auto' />
                        <img src="/assets/images/svg/banner6.png" alt="banner" className='mx-auto' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BadmintonGames