import React from 'react'
import KabbadiMenu from './KabbadiMenu'
import { FiHome } from 'react-icons/fi'
import { IoIosArrowForward } from 'react-icons/io'

const KabbadiLeague = () => {
    return (
        <section>
            <KabbadiMenu />
            <div className='container'>
                <div className='flex items-center gap-2 text-sm text-black/50 pt-3'>
                    <a href="/" className='text-black/50'>Home</a>
                    <IoIosArrowForward />
                    <a href="/kabbadi" className='text-black/50'><span>Kabbadi</span></a>
                    <IoIosArrowForward />
                    <span>PKL - Pro Kabaddi League 2024</span>
                </div>
                <div className='my-4'>
                    <div className='bg-[#0033A0] p-5 text-white rounded-lg'>
                        <h1 className="text-[28px] mb-4">PKL - Pro Kabaddi League 2024</h1>
                        <p className='mb-0'>18 Oct 2024 - 24 Dec 2024</p>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-8'>
                        <div class='item relative mb-4'>
                            <h1 className='text-2xl mb-3'>Pro Kabaddi 2025: Team of the Tournament for PKL Season 11 ft. Devank and Shadloui</h1>
                            <img src="https://staticg.sportskeeda.com/editor/2025/01/89b36-17367738750555-1920.jpg" alt="img" className='rounded-lg' />
                            <img src="/assets/images/svg/layer.png" alt="layer" className='absolute top-0 left-0 w-full h-full' />
                            <div className='absolute bottom-10 px-4'>
                                <a href='/internal-page' className='text-white hover:!underline block mb-2 text-lg'>Pro Kabaddi 2024: Team of the Tournament for PKL Season 11 ft. Devank and Shadloui (Image via PKL)    </a>
                                <div className='text-white font-[300] text-sm d-flex items-center gap-3'>
                                    <span>By Ginny Dennis</span>
                                    <span>Just now</span>
                                </div>
                            </div>
                        </div>
                        <p className='text-black/50 text-justify mb-[8px]'>The curtains came down on Pro Kabaddi League (PKL) Season 11 on December 29, 2024, with the  scripting history at the Balewadi Stadium in Pune. By defeating three-time champions Patna Pirates, the Steelers claimed their maiden PKL title, capping off what was an electrifying season.</p>
                        <p className='text-black/50 text-justify mb-[8px]'>Throughout the league, fans witnessed a showcase of talent and match-winning performances. Some players carved a special niche for themselves, leaving an indelible mark on the tournament. As we reflect on the season, it’s time to honor those exceptional performers who would make up the Team of the Tournament for PKL 2024.</p>
                        <p className='text-black/50 text-justify border-b pb-4'>For this season’s Team of the Tournament, we’ve opted for two specialist raiders, Devank Dalal and Ashu Malik. Both right raiders, they delivered exceptional performances throughout PKL 11.</p>

                        <iframe width="100%" height="400" className='rounded-[10px]' src="https://www.youtube.com/embed/kW6z5TyU8QA?si=eJy6ahw1elzp0a5s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <p className='text-black/60 text-justify mt-4 mb-[8px]'>U Mumba and finished fifth and sixth with 71 and 70 points, respectively. Both teams registered 12 wins, eight losses, and a couple of ties in the league stage of PKL 2024. U Mumba had a score difference of 16 while the Pink Panthers finished their campaign with a score difference of 55.</p>

                        {/* <img src="/assets/images/svg/banner10.png" alt="banner19" className='my-5 mx-auto' /> */}

                        <p className='text-black/60 text-justify mb-[8px]'>Telugu Titans finished seventh with 66 points from 22 matches, including 12 wins and 10 losses. They finished the league stage with a score difference of -40.</p>
                        <p className='text-black/60 text-justify mb-4'>Puneri Paltan and finished eighth and ninth with 60 and 50 points, respectively. The Pune-based club registered nine wins, 10 losses, and three ties, while the Thaliavas bagged eight wins, 13 losses, and a tie. The former champions had a score difference of 61, Meanwhile, the Chennai-based club finished their campaign with a score difference of 16.</p>
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

export default KabbadiLeague