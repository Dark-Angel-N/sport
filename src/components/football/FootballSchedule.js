import React from 'react'
import FootBallMenu from './FootBallMenu'
import { FiHome } from 'react-icons/fi'
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io'

const FootballSchedule = () => {
    return (
        <section>
            <FootBallMenu />
            <div className='container'>
                <div className='flex items-center gap-2 text-sm text-black/50 pt-3'>
                    <a href="/" className='text-black/50'>Home</a>
                    <IoIosArrowForward />
                    <a href="/football" className='text-black/50'><span>Football</span></a>
                    <IoIosArrowForward />
                    <span>Schedule</span>
                </div>

                <h1 className="text-[28px] my-4">Soccer Schedule 2023-24</h1>

                <div className='mb-4'>
                    <div className='row'>
                        <div className='col-9'>
                            <div className='rounded-[6px] overflow-hidden shadow-[0px_4px_8.4px_#0000001A]'>
                                <div>
                                    <div className="text-[#464646] bg-[#EBF2FF] d-flex gap-1 justify-between items-center px-3 py-3 border-b">
                                        <span>Live Football Scores(INDIA STANDARD TIME)</span>
                                        <div class="dropdown">
                                            <button class="text-xs bg-black flex items-center gap-1 text-white rounded px-3 py-2 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Featured Matches <IoIosArrowDown className='text-lg' />
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item" href="#">Action</a></li>
                                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='p-4'>
                                        <h1 className="text-[24px] mb-3">ISL 2024-25</h1>
                                        <div className='row border-b border-b-black/10 py-2'>
                                            <div className="col-3 text-black/50">FT</div>
                                            <div className="col-3 text-black">HFC</div>
                                            <div className="col-3 text-black/50">2-5</div>
                                            <div className="col-3 text-black">NOR</div>
                                        </div>
                                        <div className='row border-b border-b-black/10 py-2'>
                                            <div className="col-3 text-black/50">26 Dec</div>
                                            <div className="col-3 text-black">PUN</div>
                                            <div className="col-3 text-black/50">07:30 PM</div>
                                            <div className="col-3 text-black/50">MOH</div>
                                        </div>

                                        <h1 className="text-[24px] mt-4">EPL 2024-25</h1>
                                        <div className='row border-b border-b-black/10 py-2'>
                                            <div className="col-3 text-black/50">26 Dec</div>
                                            <div className="col-3 text-black">MCI</div>
                                            <div className="col-3 text-black/50">06:00 PM</div>
                                            <div className="col-3 text-black">EVE</div>
                                        </div>
                                        <div className='row border-b border-b-black/10 py-2'>
                                            <div className="col-3 text-black/50">26 Dec</div>
                                            <div className="col-3 text-black">CFC</div>
                                            <div className="col-3 text-black/50">08:30 PM</div>
                                            <div className="col-3 text-black/50">FUL</div>
                                        </div>
                                        <div className='row border-b border-b-black/10 py-2'>
                                            <div className="col-3 text-black/50">26 Dec</div>
                                            <div className="col-3 text-black">BRN</div>
                                            <div className="col-3 text-black/50">08:30 PM</div>
                                            <div className="col-3 text-black/50">CRY</div>
                                        </div>
                                        <div className='row border-b border-b-black/10 py-2'>
                                            <div className="col-3 text-black/50">26 Dec</div>
                                            <div className="col-3 text-black">CFC</div>
                                            <div className="col-3 text-black/50">08:30 PM</div>
                                            <div className="col-3 text-black/50">FUL</div>
                                        </div>
                                        <div className='row border-b border-b-black/10 py-2'>
                                            <div className="col-3 text-black/50">26 Dec</div>
                                            <div className="col-3 text-black">CFC</div>
                                            <div className="col-3 text-black/50">08:30 PM</div>
                                            <div className="col-3 text-black/50">FUL</div>
                                        </div>
                                        <div className='row border-b border-b-black/10 py-2'>
                                            <div className="col-3 text-black/50">26 Dec</div>
                                            <div className="col-3 text-black">CFC</div>
                                            <div className="col-3 text-black/50">08:30 PM</div>
                                            <div className="col-3 text-black/50">FUL</div>
                                        </div>
                                        <div className='row border-b border-b-black/10 py-2'>
                                            <div className="col-3 text-black/50">26 Dec</div>
                                            <div className="col-3 text-black">CFC</div>
                                            <div className="col-3 text-black/50">08:30 PM</div>
                                            <div className="col-3 text-black/50">FUL</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h1 className="text-[28px] my-4">Soccer Schedule 2023-24</h1>
                            <div className="shadow-[0px_4px_8.4px_#0000001A] p-4">
                                <p className='text-[#979696]'>Get ready for an action-packed soccer season with our comprehensive schedule page, designed exclusively for fans around the world! Whether you follow domestic leagues or international tournaments, our schedule page is your go-to resource for all the matches and fixtures you don&apos;t want to miss. Stay up-to-date with the latest kickoff times, broadcast details, and game locations, ensuring you&apos;re always in the know about your favorite teams. Our easy-to-navigate interface makes it simple to find schedules for all the major games and exciting fixtures, all in one convenient place.</p>
                                <p className='text-[#979696]'>soccer schedules are more than just lists of dates and times; they are meticulously crafted to balance competitiveness, player welfare, and fan engagement. In leagues like the <a href="#" className='text-[#0033A0] !underline'>English Premier League, La Liga</a>, and Serie A, the season typically runs from August to May, with each team playing every other team twice. This format ensures a fair and balanced competition, as every team has equal opportunities to prove their prowess on both home and away grounds</p>
                                <img src="/assets/images/svg/banner19.png" alt="banner" className='my-4 mx-auto'/>
                                <p className='text-[#979696]'>Domestic cup competitions add another layer of excitement to the soccer calendar. Tournaments like the FA Cup in England, Copa del Rey in Spain, and Coppa Italia in Italy run concurrently with league matches, requiring teams to manage their squads effectively to maintain performance levels across multiple fronts. These knockout competitions often bring unexpected twists and turns, providing thrilling moments and upsets that captivate fans.</p>
                                <p className='text-[#979696]'>Our schedule page is built for passionate soccer fans who want to stay informed and engaged throughout the season. Beyond the basic schedule, you&apos;ll find features such as team rankings, player statistics, and expert game previews that offer deeper insights into each matchup. Whether you&apos;re planning to attend a game, watch from home, or follow the action on the go, our soccer schedule page ensures you have all the information you need to enjoy every moment. Stay connected to the sport you love and never miss a game with our detailed and user-friendly schedule page!</p>
                            </div>
                        </div>
                        <div className='col-3'>
                            <img src="/assets/images/svg/banner5.png" alt="banner" className='mb-4 mx-auto' />
                            <img src="/assets/images/svg/banner6.png" alt="banner" className='mx-auto' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FootballSchedule