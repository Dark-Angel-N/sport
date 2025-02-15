import React from 'react'
import { FiHome } from 'react-icons/fi'
import { IoIosArrowForward } from 'react-icons/io'
import HockyMenu from './HockyMenu'

const HockyGames = () => {
    return (
        <section>
            <HockyMenu />
            <div className='container'>
                <div className='flex items-center gap-2 text-sm text-black/50 pt-3'>
                    <a href="/" className='text-black/50'>Home</a>
                    <IoIosArrowForward />
                    <a href="/cricket" className='text-black/50'><span>Cricket</span></a>
                    <IoIosArrowForward />
                    <span>Commonwealth Games 2025</span>
                </div>
                <div className='my-4'>
                    <div className='bg-[#0033A0] p-5 text-white rounded-lg'>
                        <h1 className="text-[28px] mb-4">Commonwealth Games 2025</h1>
                        <p className='mb-0'>15 Dec 2024 - 27 Jan 2025</p>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-8'>
                        <div class='item relative mb-4'>
                            <h1 className='text-2xl mb-3'>WFI president Sanjay Singh appeals to keep wrestling in the Commonwealth Games 2026</h1>
                            <img src="https://staticg.sportskeeda.com/editor/2024/09/01d92-17266442451379-1920.jpg" alt="img" className='rounded-lg' />
                            <img src="/assets/images/svg/layer.png" alt="layer" className='absolute top-0 left-0 w-full h-full' />
                            <div className='absolute bottom-10 px-4'>
                                <a href='/internal-page' className='text-white hover:!underline mb-2 block text-lg'>WFI President Sanjay Singh (centre) at the Paris 2024 Olympics Games Village (Image Credits: Sanjay Singh/X)</a>
                                <div className='text-white font-[300] text-sm d-flex items-center gap-3'>
                                    <span>By Ginny Dennis</span>
                                    <span>Just now</span>
                                </div>
                            </div>
                        </div>
                        <p className='text-black/50 text-justify mb-[8px]'>With all the teams having played a couple of games each, the round-robin phase of the Hockey India League will witness a doubleheader on Saturday, January 4. The Shrachi Rarh Bengal Tigers will face the Delhi SG Pipers in the first match.</p>
                        <p className='text-black/50 text-justify mb-[8px]'>After edging past the Hyderabad Toofans and Team Gonasika, the Shrachi Rarh Bengal Tigers seek a third straight win in the Hockey India League. The Delhi SG Pipers, meanwhile, are coming off a couple of drawn games having won one of the shootouts and lost the other.</p>
                        <p className='text-black/50 text-justify border-b pb-4'>Much is at stake for both sides even as the Bengal Tigers, currently second on the points table, seek to retain the top spot ahead of the UP Rudras.</p>

                        <div className='rounded-[6px] mb-4 overflow-hidden shadow-[0px_4px_8.4px_#0000001A]'>
                            <div>
                                <div className="text-[#464646] bg-[#EBF2FF] d-flex gap-1 justify-between items-center px-3 py-3 border-b">
                                    <span>About CWG 2022</span>
                                </div>
                                <div className='p-4'>
                                    <p className='text-black/50'>As England prepares to host some of the best athletes from across the world, Birmingham will be throbbing with anticipation as the 2022 Commonwealth Games take place there from July 28 to August 8, 2022.</p>
                                    <p className='text-black/50'>The multi-sport event, which will be hosted for the third time by England, will be held under the motto &apos;Games for Everyone&apos; in order to spread the contestants&apos; dreams and journeys. A total of 72 countries are expected to compete in the event, with the goal of ending their campaign with a title victory.</p>

                                    <h1 className='text-xl'>Home of all events, Alexander Stadium</h1>
                                    <p className='text-black/50'>Alexander Stadium will serve as the focal point for all sports events, beginning with the magnificent opening ceremony. The swimming and diving event will be held in Sandwell Aquatics Centre, while the Artistic and Rhythmic Gymnastics will be held at the Arena Birmingham. The NEC hosts events in netball, badminton, boxing, powerlifting, table tennis, para table tennis, and weightlifting.</p>
                                    <p className='text-black/50'>While Hockey and Squash will be held at the University of Birmingham Hockey and Squash Centre, Smithfield will host three events: Basketball 3x3, Beach Volleyball, and Wheelchair Basketball 3x3. Cycling - Track and Para Track will take place in Lee Valley VeloPark. Rugby Sevens will be held at Coventry Stadium, Cricket T20 will be held at Edgbaston Stadium, while Triathlon and Para Triathlon will be held at Sutton Park.</p>
                                    <p className='text-black/50'>Lawn Bowls and Para Lawn Bowls will be held in Victoria Park. At the Marathon Finish Area, Victoria Square hosts the Athletics. Cycling - Road Race will be held in Warwick. Cycling – Time Trial will be held in West Park. Cycling - Mountain Bike will take place in Cannock Chase Forest, while Judo will take place at Coventry Arena. Wrestling.</p>
                                    <h1 className='text-xl'>72 countries, 20 sports, 283 events</h1>
                                    <p className='text-black/50'>This year&apos;s Commonwealth Games will feature 72 nations competing in 20 sports that will be split into 283 individual events for the ultimate prize.</p>
                                    <p className='text-black/50'>The extension of the number of events for women, which will also be a first for the Games, will equalise the number of events for both men&apos;s and women&apos;s categories, a move that will be lauded around the world.</p>
                                    <h1 className='text-xl'>What can be expected?</h1>
                                    <p className='text-black/50 mb-0'>Athletics and other sports have attracted a lot of interest in recent years, with outstanding performances attracting continual attention. With over 5,054 exceptional athletes expected to compete at the Games, there will be plenty of nail-biting action from all of the events until the Commonwealth Games in 2022.</p>
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

export default HockyGames