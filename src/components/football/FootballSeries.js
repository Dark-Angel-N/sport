import React from 'react'
import FootBallMenu from './FootBallMenu'
import { FiHome } from 'react-icons/fi'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'

const FootballSeries = () => {
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
                    <div className='bg-[#0033A0] p-5 text-white rounded-lg'>
                        <h1 className="text-[28px] mb-4">Series A Top Scorers 2024-25</h1>
                        <p className='mb-0'>14 Jun 2024-14 Jul 2024</p>
                    </div>
                </div>
                <div className='row gy-4 mb-4 justify-center'>
                    <div className='col-md-9'>
                        <div className='rounded-[6px] overflow-hidden shadow-[0px_4px_8.4px_#0000001A]'>
                            <div className='border-b px-4 text-xl font-medium py-3 flex items-center justify-between bg-[#EBF2FF]'>
                                Series A Top Scorers 2024-25
                            </div>
                            <div>
                                <div className='bg-[#1A1A1A]/10 py-2 px-4'>
                                    <div className='row'>
                                        <div className='col-6'>Players</div>
                                        <div className="col-6">
                                            <div className="row font-medium text-center text-sm">
                                                <div className="col-3">Apps(SUBS)</div>
                                                <div className="col-3">GOALS</div>
                                                <div className="col-3">ASSISTS</div>
                                                <div className="col-3">MINS PLAYED</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='py-3 px-4'>
                                    <div className='row border-b pb-2 items-center'>
                                        <div className="col-6 flex items-center gap-1">
                                            <img src="/assets/images/svg/nlogo.svg" alt="logo" className='w-[30px]' />
                                            Victor Osimhen
                                        </div>
                                        <div className="col-6">
                                            <div className="row text-center font-medium">
                                                <div className="col-3">11 (0)</div>
                                                <div className="col-3">9</div>
                                                <div className="col-3">2</div>
                                                <div className="col-3">908</div>
                                            </div>
                                        </div>
                                    </div>
                                    {
                                        Array.from({ length: 20 }).map((_, index) => {
                                            return (
                                                <a href={'/football/epl/userDetail'}>
                                                    <div key={index} className='row border-b mt-2 pb-2 items-center'>
                                                        <div className="col-6 text-[#0033A0] flex items-center gap-1">
                                                            <img src="/assets/images/svg/nlogo1.svg" alt="logo" className='w-[30px]' />
                                                            Marko Arnautovic
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="row text-center font-medium">
                                                                <div className="col-3">15 (0)</div>
                                                                <div className="col-3">0</div>
                                                                <div className="col-3">0</div>
                                                                <div className="col-3">908</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <img src="/assets/images/svg/banner5.png" alt="banner" className='mb-4 mx-auto' />
                        <img src="/assets/images/svg/banner6.png" alt="banner" className='mx-auto' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FootballSeries