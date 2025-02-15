import React from 'react'
import { PiShareFat } from "react-icons/pi";

const WebStories = () => {

    const data = [
        { id: 1, img: 'https://www.sportzcraazy.com/wp-content/uploads/2024/05/cropped-image-2.png', des: '5 Reasons why Chess is extremely popular in India?' },
        { id: 2, img: 'https://www.sportzcraazy.com/wp-content/uploads/2024/03/cropped-image-148.png', des: 'Checkout the Semi-finalists for the inaugural ISPL T10 league' },
        { id: 3, img: 'https://www.sportzcraazy.com/wp-content/uploads/2024/03/cropped-image-137.png', des: 'Luca Nardi’s Fairytale Upset of World No. 1 Novak Djokovic at Indian Wells' },
        { id: 4, img: 'https://www.sportzcraazy.com/wp-content/uploads/2024/03/cropped-image-129.png', des: 'ISPL 2024: Indian Street Premier League Points Table, Schedule, Result and Fixture' },
        { id: 5, img: 'https://www.sportzcraazy.com/wp-content/uploads/2024/03/cropped-image-115.png', des: 'NZ-AUS Test series with WTC Standings' },
        { id: 6, img: 'https://www.sportzcraazy.com/wp-content/uploads/2024/03/cropped-image-110.png', des: 'IND vs ENG 5th Test: India Crushes England by an Innings and 64 Runs' },
        { id: 7, img: 'https://www.sportzcraazy.com/wp-content/uploads/2024/03/cropped-image-95.png', des: 'James Anderson: A Bowling Great Achieves This Unique Milestone' },
        { id: 8, img: 'https://www.sportzcraazy.com/wp-content/uploads/2024/03/cropped-image-85.png', des: 'IND vs ENG 5th Test: Rohit Sharma Shines with 12th Test Century in Dharamsala' },
        { id: 9, img: 'https://www.sportzcraazy.com/wp-content/uploads/2024/03/cropped-image-78.png', des: 'IND vs ENG 5th Test: Shubman Gill Hammers 4th Test Ton' },
        { id: 10, img: 'https://www.sportzcraazy.com/wp-content/uploads/2024/03/cropped-image-67.png', des: 'IND vs ENG: Devdutt Padikkal excels on Test debut and hits fifty in Dharamsala' },
        { id: 11, img: 'https://www.sportzcraazy.com/wp-content/uploads/2024/03/cropped-image-63.png', des: 'ISPL Rules and Regulations' },
        { id: 12, img: 'https://www.sportzcraazy.com/wp-content/uploads/2024/03/cropped-image-49.png', des: 'List Of Award Winners In PKL 10' },
    ]

    return (
        <section className='mt-5'>
            <div className='container'>
                <div className='row gy-4'>
                    {
                        data.map((res) => {
                            return (
                                <div className="col-3" key={res.id}>
                                    <div className='rounded-lg overflow-hidden relative'>
                                        <img src={res.img} alt="banner" className='rounded-[10px] w-full' />
                                        <img src="/assets/images/svg/layer.png" alt="layer" className='absolute top-0 left-0 w-full h-full' />
                                        <div className='absolute bottom-4 px-3'>
                                            <a href='#' className='text-white hover:!underline mb-3 line-clamp-2 text-lg'>{res.des}</a>
                                            <div className='text-white flex items-center justify-between text-sm'>
                                                videos
                                                <PiShareFat className='text-lg' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default WebStories