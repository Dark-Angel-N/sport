import React from 'react'
import KabbadiMenu from './KabbadiMenu'
import { IoIosArrowForward } from 'react-icons/io'

const KabbadiRules = () => {
    return (
        <section>
            <KabbadiMenu />
            <div className='container'>
                <div className='flex items-center gap-2 text-sm text-black/50 pt-3'>
                    <a href="/" className='text-black/50'>Home</a>
                    <IoIosArrowForward />
                    <a href="/kabbadi" className='text-black/50'><span>Kabbadi</span></a>
                    <IoIosArrowForward />
                    <span>Kabaddi Rules</span>
                </div>
                <div className='my-4'>
                    <div className='bg-[#0033A0] p-5 text-white rounded-lg'>
                        <h1 className="text-[28px] mb-4">Kabaddi Rules</h1>
                        <p className='mb-0'>26 March 2022 18:11 GMT+5:30</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-8'>
                        <h1 className='mb-4 lg:text-[36px] md:text-[30px] text-[20px]'>Kabaddi: How to play India’s 4000-year-old indigenous sport</h1>
                        <p>Know the basic rules and regulations of kabaddi, one of the oldest sport in the world.</p>

                        <div className="relative">
                            <img src="https://explosivewhey.com/cdn/shop/articles/the-power-of-exercise-and-protein-for-kabaddi-players-491464.jpg?v=1721271964&width=1500" alt="banner" className='rounded-[10px] w-full h-full' />
                            <img src="/assets/images/svg/layer.png" alt="layer" className='absolute top-0 left-0 w-full h-full' />
                        </div>

                        <p className='text-black/50 text-justify mt-4 mb-[8px]'>With a 4000-year-long history, the traditional Indian sport of kabaddi is one of the oldest in the world.</p>
                        <p className='text-black/50 text-justify mb-[8px]'>Showcased as an exhibition sport on the sidelines of the Berlin 1936 Olympics, kabaddi’s popularity has soared by leaps and bounds over the years. After appearing as a demonstration sport at the Asian Games in 1951 and 1982, kabaddi finally became a medal event at the continental showpiece from 1990 and has been a permanent fixture since then.</p>
                        <p className='text-black/50 text-justify mb-[8px]'>The Asian Games 2023 in Hangzhou, China also saw kabaddi in the main programme.
                            Kabaddi is fast, furious and physical, making for a great spectacle – a fact vindicated by the ever-rising global popularity of Pro Kabaddi, a franchise-based kabaddi league which started in India in 2014.</p>
                        <p className='text-black/50 text-justify mb-4'>For anyone new to the sport, here’s a basic guideline to kabaddi rules and how to play the sport.</p>

                        <h1 className='mb-4 lg:text-2xl text-xl'>Kabaddi mat: Dimensions and markings</h1>
                        <p className='text-black/50 text-justify mt-4 mb-[8px]'>To understand kabaddi, one needs to first have a basic layout of a kabaddi mat.
                            Though traditionally played on soft muddy fields, most popular competitive kabaddi events are currently played on rectangular padded kabaddi mats.
                            Kabaddi mat dimensions may vary according to tournaments and age groups, but it mostly measures 13m x 10m for senior men’s professional kabaddi events. The mat is slightly smaller, 12m x 8m, for women.</p>
                        <p className='text-black/50 text-justify mb-[8px]'>To understand kabaddi, one needs to first have a basic layout of a kabaddi mat.
                            Though traditionally played on soft muddy fields, most popular competitive kabaddi events are currently played on rectangular padded kabaddi mats.
                            Kabaddi mat dimensions may vary according to tournaments and age groups, but it mostly measures 13m x 10m for senior men’s professional kabaddi events. The mat is slightly smaller, 12m x 8m, for women.</p>

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

export default KabbadiRules