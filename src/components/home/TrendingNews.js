import React from 'react'

const TrendingNews = () => {
    return (
        <div className='mt-5'>
            <h1 className='lg:text-[28px] text-[24px] text-center'>Trending News</h1>
            <p className='text-[#000000]/50 text-center'>Lorem ipsum dolor remanng simpleye dummy</p>

            <div className='xl:px-[150px] md:px-[100px] mt-5'>
                <div className="row gy-4">
                    <div className="col-sm-3">
                        <img src="/assets/images/svg/trand1.png" alt="trand" className='mx-auto' />
                        <a href='/internal-page' className='mt-2 text-black hover:!underline line-clamp-2'>Lorem ipsum dolor remanng simpleye dummy Lorem ipsum dolor remanng simpleye dummy</a>
                    </div>
                    <div className="col-sm-3">
                        <img src="/assets/images/svg/trand2.png" alt="trand" className='mx-auto' />
                        <a href='/internal-page' className='mt-2 text-black hover:!underline line-clamp-2'>Lorem ipsum dolor remanng simpleye dummy Lorem ipsum dolor remanng simpleye dummy</a>
                    </div>
                    <div className="col-sm-3">
                        <img src="/assets/images/svg/trand3.png" alt="trand" className='mx-auto' />
                        <a href='/internal-page' className='mt-2 text-black hover:!underline line-clamp-2'>Lorem ipsum dolor remanng simpleye dummy Lorem ipsum dolor remanng simpleye dummy</a>
                    </div>
                    <div className="col-sm-3">
                        <img src="/assets/images/svg/trand1.png" alt="trand" className='mx-auto' />
                        <a href='/internal-page' className='mt-2 text-black hover:!underline line-clamp-2'>Lorem ipsum dolor remanng simpleye dummy Lorem ipsum dolor remanng simpleye dummy</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrendingNews