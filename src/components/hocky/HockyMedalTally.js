import React from 'react'
import { FiHome } from 'react-icons/fi'
import { IoIosArrowForward } from 'react-icons/io'
import HockyMenu from './HockyMenu'

const HockyMedalTally = () => {
    return (
        <section>
            <HockyMenu />
            <div className='container'>
                <div className='flex items-center gap-2 text-sm text-black/50 pt-3'>
                    <a href="/" className='text-black/50'>Home</a>
                    <IoIosArrowForward />
                    <a href="/cricket" className='text-black/50'><span>Cricket</span></a>
                    <IoIosArrowForward />
                    <span>Commonwealth Games 2025 Medal Tally</span>
                </div>
                <div className='my-4'>
                    <div className='bg-[#0033A0] p-5 text-white rounded-lg'>
                        <h1 className="text-[28px] mb-4">Commonwealth Games 2025 Medal Tally</h1>
                        <p className='mb-0'>15 Dec 2024 - 27 Jan 2025</p>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-8'>
                        <div className='rounded-[6px] mb-4 overflow-hidden shadow-[0px_4px_8.4px_#0000001A]'>
                            <div>
                                <div className='p-4'>
                                    <div>
                                        <div className='row border-b border-b-black/10 py-2'>
                                            <div className="col text-black">Rank</div>
                                            <div className="col-3 text-black">Countries</div>
                                            <div className="col text-black">Gold</div>
                                            <div className="col text-black">Silver</div>
                                            <div className="col text-black">Bronze</div>
                                            <div className="col text-black">Total</div>
                                        </div>
                                        <div className='row border-b border-b-black/10 py-2'>
                                            <div className="col text-black/50">1</div>
                                            <div className="col-3 text-black/50">Australia</div>
                                            <div className="col text-black/50">67</div>
                                            <div className="col text-black/50">57</div>
                                            <div className="col text-black/50">54</div>
                                            <div className="col text-black/50">178</div>
                                        </div>                                        
                                        <div className='row border-b border-b-black/10 py-2'>
                                            <div className="col text-black/50">2</div>
                                            <div className="col-3 text-black/50">England*</div>
                                            <div className="col text-black/50">57</div>
                                            <div className="col text-black/50">66</div>
                                            <div className="col text-black/50">53</div>
                                            <div className="col text-black/50">176</div>
                                        </div>                                        
                                        <div className='row border-b border-b-black/10 py-2'>
                                            <div className="col text-black/50">3</div>
                                            <div className="col-3 text-black/50">Canada</div>
                                            <div className="col text-black/50">26</div>
                                            <div className="col text-black/50">32</div>
                                            <div className="col text-black/50">34</div>
                                            <div className="col text-black/50">92</div>
                                        </div>                                        
                                        <div className='row border-b border-b-black/10 py-2'>
                                            <div className="col text-black/50">4</div>
                                            <div className="col-3 text-black/50">India</div>
                                            <div className="col text-black/50">22</div>
                                            <div className="col text-black/50">16</div>
                                            <div className="col text-black/50">23</div>
                                            <div className="col text-black/50">61</div>
                                        </div>                                        
                                        <div className='row border-b border-b-black/10 py-2'>
                                            <div className="col text-black/50">5</div>
                                            <div className="col-3 text-black/50">New Zealand</div>
                                            <div className="col text-black/50">20</div>
                                            <div className="col text-black/50">12</div>
                                            <div className="col text-black/50">17</div>
                                            <div className="col text-black/50">49</div>
                                        </div>                                        
                                        <div className='row border-b border-b-black/10 py-2'>
                                            <div className="col text-black/50">6</div>
                                            <div className="col-3 text-black/50">Scotland</div>
                                            <div className="col text-black/50">13</div>
                                            <div className="col text-black/50">11</div>
                                            <div className="col text-black/50">27</div>
                                            <div className="col text-black/50">51</div>
                                        </div>                                        
                                        <div className='row border-b border-b-black/10 py-2'>
                                            <div className="col text-black/50">7</div>
                                            <div className="col-3 text-black/50">Nigeria</div>
                                            <div className="col text-black/50">12</div>
                                            <div className="col text-black/50">9</div>
                                            <div className="col text-black/50">14</div>
                                            <div className="col text-black/50">35</div>
                                        </div>                                        
                                        <div className='row border-b border-b-black/10 py-2'>
                                            <div className="col text-black/50">8</div>
                                            <div className="col-3 text-black/50">Wales</div>
                                            <div className="col text-black/50">8</div>
                                            <div className="col text-black/50">6</div>
                                            <div className="col text-black/50">14</div>
                                            <div className="col text-black/50">28</div>
                                        </div>                                        
                                        <div className='row border-b border-b-black/10 py-2'>
                                            <div className="col text-black/50">9</div>
                                            <div className="col-3 text-black/50">South Africa</div>
                                            <div className="col text-black/50">7</div>
                                            <div className="col text-black/50">9</div>
                                            <div className="col text-black/50">11</div>
                                            <div className="col text-black/50">27</div>
                                        </div>                                        
                                        <div className='row border-b border-b-black/10 py-2'>
                                            <div className="col text-black/50">10</div>
                                            <div className="col-3 text-black/50">Malaysia</div>
                                            <div className="col text-black/50">7</div>
                                            <div className="col text-black/50">8</div>
                                            <div className="col text-black/50">8</div>
                                            <div className="col text-black/50">23</div>
                                        </div>                                        
                                        <div className='row border-b border-b-black/10 py-2'>
                                            <div className="col text-black/50">11</div>
                                            <div className="col-3 text-black/50">Northern Ireland</div>
                                            <div className="col text-black/50">7</div>
                                            <div className="col text-black/50">7</div>
                                            <div className="col text-black/50">4</div>
                                            <div className="col text-black/50">11</div>
                                        </div>                                        
                                        <div className='row border-b border-b-black/10 py-2'>
                                            <div className="col text-black/50">12</div>
                                            <div className="col-3 text-black/50">Jamaica</div>
                                            <div className="col text-black/50">6</div>
                                            <div className="col text-black/50">6</div>
                                            <div className="col text-black/50">3</div>
                                            <div className="col text-black/50">15</div>
                                        </div>                                        
                                        <div className='row border-b border-b-black/10 py-2'>
                                            <div className="col text-black/50">13</div>
                                            <div className="col-3 text-black/50">Kenya</div>
                                            <div className="col text-black/50">6</div>
                                            <div className="col text-black/50">5</div>
                                            <div className="col text-black/50">10</div>
                                            <div className="col text-black/50">21</div>
                                        </div>                                        
                                        <div className='row border-b border-b-black/10 py-2'>
                                            <div className="col text-black/50">14</div>
                                            <div className="col-3 text-black/50">Singapore</div>
                                            <div className="col text-black/50">4</div>
                                            <div className="col text-black/50">4</div>
                                            <div className="col text-black/50">4</div>
                                            <div className="col text-black/50">12</div>
                                        </div>                                        
                                        <div className='row border-b border-b-black/10 py-2'>
                                            <div className="col text-black/50">15</div>
                                            <div className="col-3 text-black/50">Pakistan</div>
                                            <div className="col text-black/50">2</div>
                                            <div className="col text-black/50">3</div>
                                            <div className="col text-black/50">3</div>
                                            <div className="col text-black/50">8</div>
                                        </div>                                        
                                        <div className='row border-b border-b-black/10 py-2'>
                                            <div className="col text-black/50">16</div>
                                            <div className="col-3 text-black/50">Samoa</div>
                                            <div className="col text-black/50">1</div>
                                            <div className="col text-black/50">4</div>
                                            <div className="col text-black/50">0</div>
                                            <div className="col text-black/50">5</div>
                                        </div>                                        
                                        <div className='row border-b border-b-black/10 py-2'>
                                            <div className="col text-black/50">17</div>
                                            <div className="col-3 text-black/50">Barbados</div>
                                            <div className="col text-black/50">1</div>
                                            <div className="col text-black/50">1</div>
                                            <div className="col text-black/50">1</div>
                                            <div className="col text-black/50">3</div>
                                        </div>                                        
                                        <div className='row border-b border-b-black/10 py-2'>
                                            <div className="col text-black/50">18</div>
                                            <div className="col-3 text-black/50">Cameroon</div>
                                            <div className="col text-black/50">1</div>
                                            <div className="col text-black/50">1</div>
                                            <div className="col text-black/50">1</div>
                                            <div className="col text-black/50">3</div>
                                        </div>                                        
                                        <div className='row border-b border-b-black/10 py-2'>
                                            <div className="col text-black/50">19</div>
                                            <div className="col-3 text-black/50">Zambia</div>
                                            <div className="col text-black/50">1</div>
                                            <div className="col text-black/50">1</div>
                                            <div className="col text-black/50">1</div>
                                            <div className="col text-black/50">3</div>
                                        </div>                                        
                                        <div className='row border-b border-b-black/10 py-2'>
                                            <div className="col text-black/50">20</div>
                                            <div className="col-3 text-black/50">Bahamas</div>
                                            <div className="col text-black/50">1</div>
                                            <div className="col text-black/50">1</div>
                                            <div className="col text-black/50">0</div>
                                            <div className="col text-black/50">2</div>
                                        </div>                                      
                                    </div>
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

export default HockyMedalTally