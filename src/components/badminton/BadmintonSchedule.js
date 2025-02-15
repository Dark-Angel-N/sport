import React from 'react'
import BadmintonMenu from './BadmintonMenu'
import { IoIosArrowForward } from 'react-icons/io'

const BadmintonSchedule = () => {
    return (
        <section>
            <BadmintonMenu />
            <div className='container'>
                <div className='flex items-center gap-2 text-sm text-black/50 pt-3'>
                    <a href="/" className='text-black/50'>Home</a>
                    <IoIosArrowForward />
                    <a href="/badminton" className='text-black/50'><span>Badminton</span></a>
                    <IoIosArrowForward />
                    <span>Schedule</span>
                </div>
                <div className='my-4'>
                    <div className='bg-[#0033A0] p-5 text-white rounded-lg'>
                        <h1 className="text-[28px] mb-4">Commonwealth Games Schedule 2022, Time & Venue</h1>
                        <p className='mb-0'>Last Modified Jul 31, 2022 12:52 IST</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-8'>
                        <p className='text-black/50'>The CWG starts with the opening ceremony on 28 July, at 12:30 AM IST. The event is being held at Birmingham, UK. Find the detailed Commonwealth Games 2022 schedule here.</p>
                        <img src="/assets/images/png/schedule.png" alt="schedule" className='mb-3' />
                        <p className='text-black/50'>Commonwealth Games Schedule, Venues, Dates & Time</p>

                        <h1 className='text-[24px]'>Birmingham 2022 Commonwealth Games Schedule by Sport / Discipline</h1>

                        <div className='rounded-[6px] mt-4 overflow-hidden shadow-[0px_4px_8.4px_#0000001A]'>
                            <div>
                                <div className="text-[#464646] bg-[#EBF2FF] d-flex gap-1 justify-between items-center px-3 py-3 border-b">
                                    <span>Birmingham 2022 Commonwealth Games Schedule by Sport / Discipline</span>
                                </div>
                                <div>
                                    <table className='w-full'>
                                        <tr className='bg-[#1A1A1A]/10'>
                                            <th className='!px-4'>Sports/ Discipline</th>
                                            <th className='!px-4'>Men’s Medal Events</th>
                                            <th className='!px-4'>Women Medal Events</th>
                                            <th className='!px-4'>WMixed</th>
                                        </tr>
                                        <tr className='align-middle border_after relative'>
                                            <td className='!px-4 py-2'>Aquatics-Diving</td>
                                            <td className='!px-4 py-2'>1m Springboard</td>
                                            <td className='!px-4 py-2'>1m Springboard</td>
                                            <td className='!px-4 py-2'>Synchronized 3m springboard</td>
                                        </tr>
                                        <tr className='align-middle border_after relative'>
                                            <td className='!px-4 py-2'>Aquatics-Diving</td>
                                            <td className='!px-4 py-2'>1m Springboard</td>
                                            <td className='!px-4 py-2'>1m Springboard</td>
                                            <td className='!px-4 py-2'>Synchronized 3m springboard</td>
                                        </tr>
                                        <tr className='align-middle border_after relative'>
                                            <td className='!px-4 py-2'>Aquatics-Diving</td>
                                            <td className='!px-4 py-2'>1m Springboard</td>
                                            <td className='!px-4 py-2'>1m Springboard</td>
                                            <td className='!px-4 py-2'>Synchronized 3m springboard</td>
                                        </tr>
                                        <tr className='align-middle border_after relative'>
                                            <td className='!px-4 py-2'>Aquatics-Diving</td>
                                            <td className='!px-4 py-2'>1m Springboard</td>
                                            <td className='!px-4 py-2'>1m Springboard</td>
                                            <td className='!px-4 py-2'>Synchronized 3m springboard</td>
                                        </tr>
                                        <tr className='align-middle border_after relative'>
                                            <td className='!px-4 py-2'>Aquatics-Diving</td>
                                            <td className='!px-4 py-2'>1m Springboard</td>
                                            <td className='!px-4 py-2'>1m Springboard</td>
                                            <td className='!px-4 py-2'>Synchronized 3m springboard</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
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

export default BadmintonSchedule