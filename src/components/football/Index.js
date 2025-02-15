import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import FootBallDetail from './FootBallDetail';
import FootBallMenu from './FootBallMenu';

const Index = () => {
    return (
        <section>
            <FootBallMenu />
            <div className='container'>
                {/* <div className='flex items-center gap-3 justify-center text-sm text-black/50 md:mb-[100px] mb-[50px]'>
                    <span>Football</span>
                    <IoIosArrowBack />
                    <span>Barcelona Transfer News Roundup: Catalans urged to Sign german ace,club not eyeing Mohamed Salah, and more &nbsp; -  November 30, 2024</span>
                </div> */}
                <FootBallDetail />
            </div>
        </section>
    )
}

export default Index