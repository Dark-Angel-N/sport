import React from 'react'
import CricketMenu from './CricketMenu'
import { FiHome } from 'react-icons/fi'
import { IoIosArrowForward } from 'react-icons/io'
import HomeSlider from '../home/HomeSlider'

const CricketWomenAsia = () => {
    return (
        <section>
            <CricketMenu />
            <div className='container'>
                <div className='flex items-center gap-2 text-sm text-black/50 pt-3'>
                    <a href="/" className='text-black/50'>Home</a>
                    <IoIosArrowForward />
                    <a href="/cricket" className='text-black/50'><span>Cricket</span></a>
                    <IoIosArrowForward />
                    <span>Womens Ashes 2025</span>
                </div>
                <div className='my-4'>
                    <div className='bg-[#0033A0] p-5 text-white rounded-lg'>
                        <h1 className="text-[28px] mb-4">Womens Ashes 2025</h1>
                        <p className='mb-0'>28 Dec 2024 - 11 Jan 2025</p>
                    </div>
                </div>

                <HomeSlider />

                <div className='row'>
                    <div className='col-8'>
                        <div class='item relative mb-4'>
                            <h1 className="text-2xl mb-4">ICC announces Women&apos;s Player of the Month nominees for July</h1>
                            <img src="/assets/images/png/women.webp" alt="banner" className='rounded-[10px] w-full h-full' />
                            <img src="/assets/images/svg/layer.png" alt="layer" className='absolute top-0 left-0 w-full h-full' />
                            <div className='absolute bottom-10 px-4'>
                                <a  href='/internal-page' className='text-white block mb-2 hover:!underline text-lg'>ICC announces Women&apos;s Player of the Month nominees for July</a>
                                <div className='text-white font-[300] text-sm d-flex items-center gap-3'>
                                    <span>By Ginny Dennis</span>
                                    <span>Just now</span>
                                </div>
                            </div>
                        </div>
                        <p className='text-black/50 text-justify mb-[8px]'>Barcelona are set to welcome  Las Palmas at the Estani Olimpic Lluis Company on  Saturady( November 30) in Laliga.The Catalans are leading the title race after 14 games with 34 points,but Real Madrid are four points  behind on Second with a game  in hand.</p>
                        <p className='text-black/50 text-justify mb-[8px]'>Meanwhile, a former player has player has urged the Blaugrana to sign a German midfielder.Elsewhere, the Spanish gians are not working on a move to sign Mohamed Salah.</p>
                        <p className='text-black/50 text-justify border-b pb-4'>On that note,let’s look at the major Barcelona transfer stories from November 30,2024.</p>

                        <div className='rounded-[6px] mb-4 overflow-hidden shadow-[0px_4px_8.4px_#0000001A]'>
                            <div>
                                <div className="text-[#464646] bg-[#EBF2FF] d-flex gap-1 justify-between items-center px-3 py-3 border-b">
                                    <span>About Womens Ashes 2025</span>
                                </div>
                                <div className='p-4'>
                                    <p className='text-black/50'>After the entertaining Men’s Ashes series, the women’s teams of Australia and England will compete in the Women’s Ashes 2022 series. The Australian women’s cricket team played a historic day/night Test match against India last year at the Carrara Oval.</p>
                                    <p className='text-black/50'>Now, in 2022, they are set to play their first Test of the year against the England women’s cricket team. Apart from the only Test match, the tour will also comprise three ODIs and three T20Is.</p>
                                    <h1 className='text-xl'>History</h1>
                                    <p className='text-black/50'>The Ashes is the oldest rivalry in cricket history. England and Australia’s men’s teams compete in a 5-match Test series once in every two years for the prestigious urn. The women’s teams also compete once in every two years, but they do not have a 5-Test series like the men.</p>
                                    <p className='text-black/50'>The first ever women’s Test match between England and Australia happened back in 1934/35. It was a 3-match series which was won by England Women by 2-0. The most recent women’s Ashes Test happened in 2019, and it ended in a stalemate.</p>
                                    <h1 className='text-xl'>Women’s Ashes 2022 Format</h1>
                                    <p className='text-black/50'>Women’s Ashes will follow the Test format. The match will last for four days and both teams will receive an opportunity to bat twice in the match. The ODIs will be played in the 50-over format, whereas the T20I matches will happen in the 20-over form.</p>
                                    <h1 className='text-xl'>Women’s Ashes 2022 Venues</h1>
                                    <p className='text-black/50 mb-0'>Three venues will host England Women’s entire tour of Australia. The Adelaide Oval will host the three T20I matches scheduled to happen on January 20, 22 and 23. The Manuka Oval in Canberra will host the one-off Test from January 27 to 31. Canberra will also host the first ODI on February 3. The tour will culminate with the final two ODI matches at the Junction Oval.</p>
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

export default CricketWomenAsia