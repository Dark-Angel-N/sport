import React from 'react'
import { FiHome } from 'react-icons/fi'
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io'
import CricketMenu from './CricketMenu'

const CricketSchedule = () => {
    return (
        <section>
            <CricketMenu />
            <div className='container'>
                <div className='flex items-center gap-2 text-sm text-black/50 pt-3'>
                    <a href="/" className='text-black/50'>Home</a>
                    <IoIosArrowForward />
                    <a href="/cricket" className='text-black/50'><span>Cricket</span></a>
                    <IoIosArrowForward />
                    <span>Schedule</span>
                </div>

                <div className='row gy-4 mb-4 justify-center'>
                    <div className='col-md-9'>
                        <div className='rounded-[6px] overflow-hidden mt-4 shadow-[0px_4px_8.4px_#0000001A]'>
                            <div>
                                <div className='bg-[#EBF2FF] flex items-center justify-between px-4 py-3'>
                                    <h1 className='text-[16px] mb-0'>NFL Week 18 Schedule 2024-25</h1>
                                    <div className='flex items-center gap-2'>
                                        <button className="text-[#0033A0] text-xs bg-[#0033A0]/10 rounded px-2 py-1 flex items-center gap-3">BGT 2024 <IoIosArrowDown /></button>
                                        <button className="text-[#0033A0] text-xs bg-[#0033A0]/10 rounded px-2 py-1 flex items-center gap-3">All Teams <IoIosArrowDown /></button>
                                    </div>
                                </div>
                                <div className='p-4 bg-[#F8FAFF] flex gap-2 items-center justify-between overflow-x-auto text-sm'>
                                    <div className='border-r flex items-center justify-between flex-grow pe-3'>
                                        {['Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'].map((week, index) => (
                                            <div
                                                key={index}
                                                className={`py-1 rounded cursor-pointer ${week === 'Week 18' ? 'bg-[#B5CDFF33] border-[1px] border-[#000000] shadow-md px-4' : 'pe-4'
                                                    }`}
                                            >
                                                <p className='mb-1'>{week}</p>
                                                <p className='text-[#747474] text-[12px] mb-0'>{
                                                    ['Nov 14-20', 'Nov 21-27', 'Nov 28-Dec 4', 'Dec 5-11', 'Dec 12-18', 'Dec 19-24', 'Dec 25-31', 'Jan 1-8'][index]
                                                }</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        <img src="/assets/images/svg/date.svg" alt="date" className='w-[30px]' />
                                    </div>
                                </div>
                                <div className='bg-[#EBF2FF] px-4 py-3'>
                                    <h2 className='text-[14px] font-medium mb-0'>Saturday, January 04, 2025</h2>
                                </div>
                                <div className='px-4 py-1 h-[200px]'>
                                    <table className='w-full text-left'>                                        
                                        <tbody>
                                            <tr>
                                                <td className='py-2'>MATCHUP</td>
                                                <td className='py-2'>TIME</td>
                                                <td className='py-2'>TV</td>
                                                <td className='py-2'>VENUE</td>
                                            </tr>
                                        </tbody>
                                    </table>
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

export default CricketSchedule