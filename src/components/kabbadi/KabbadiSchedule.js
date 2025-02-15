import React from 'react'
import KabbadiMenu from './KabbadiMenu'
import { IoIosArrowForward } from 'react-icons/io'
import RecentSchedule from './schedule/RecentSchedule'
import { NavLink, useLocation } from 'react-router-dom'
import LiveSchedule from './schedule/LiveSchedule'
import UpcomingSchedule from './schedule/UpcomingSchedule'

const KabbadiSchedule = () => {

    const location = useLocation()

    return (
        <section>
            <KabbadiMenu />
            <div className='container'>
                <div className='flex items-center gap-2 text-sm text-black/50 pt-3'>
                    <a href="/" className='text-black/50'>Home</a>
                    <IoIosArrowForward />
                    <a href="/kabbadi" className='text-black/50'><span>Kabbadi</span></a>
                    <IoIosArrowForward />
                    <span>Pro Kabaddi League Schedule</span>
                </div>
                <div className='my-4'>
                    <div className='bg-[#0033A0] p-5 text-white rounded-lg'>
                        <h1 className="text-[28px] mb-4">Pro Kabaddi League Schedule</h1>
                        <p className='mb-0'>14 Jun 2024-14 Jul 2024</p>
                    </div>
                </div>

                <div className='flex items-center gap-5 border-b pb-3 mb-3'>
                    <NavLink to="/kabbadi/kabbadi-schedule/recent" className={location.pathname==='/kabbadi/kabbadi-schedule/recent' ? 'text-theme-color !underline underline-offset-4' : 'text-black/50'}>Recent</NavLink>
                    <NavLink to="/kabbadi/kabbadi-schedule/live" className={location.pathname==='/kabbadi/kabbadi-schedule/live' ? 'text-theme-color !underline underline-offset-4' : 'text-black/50'}>Live</NavLink>
                    <NavLink to="/kabbadi/kabbadi-schedule/upcoming" className={location.pathname==='/kabbadi/kabbadi-schedule/upcoming' ? 'text-theme-color !underline underline-offset-4' : 'text-black/50'}>Upcoming</NavLink>
                </div>
                {
                    location.pathname === '/kabbadi/kabbadi-schedule/recent' && (<RecentSchedule />)
                }
                {
                    location.pathname === '/kabbadi/kabbadi-schedule/live' && (<LiveSchedule />)
                }
                {
                    location.pathname === '/kabbadi/kabbadi-schedule/upcoming' && (<UpcomingSchedule />)
                }
            </div>
        </section>

    )
}

export default KabbadiSchedule