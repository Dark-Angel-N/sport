import React  from 'react'

const Quizzes = () => {    

    return (
        <div className='mb-5'>
            <h1 className='md:text-[28px] text-[24px] mb-4'>Quizzes</h1>
            <div className="row gx-lg-5 gy-4 items-center">
                <div className="col-xl-4 col-lg-5">
                    <img src="/assets/images/svg/banner17.png" alt="banner" className='rounded-[10px] mx-auto'/>
                </div>
                <div className="col-xl-8 col-lg-7">
                    <p className='lg:text-[30px] md:text-2xl text-xl col-xl-9 col-lg-11 font-[500]'>Which of the following players is the captain of IPL cricket team Rajasthan Royals?</p>
                    <div className='d-flex items-center gap-3 my-[40px]'>
                        <div className="bg-[#36A407] text-white rounded px-3 py-2 text-xl w-[70px] text-center">Yes</div>
                        <div className="bg-[#FF2424] text-white rounded px-3 py-2 text-xl w-[70px] text-center">No</div>
                        <div className="bg-[#E9F2F5] text-[#000000]/50 rounded px-3 py-2 text-xl">May be</div>
                    </div>
                    <div>
                        <h1 className="md:text-[24px] text-lg mb-3">Result:-</h1>
                        <span className='bg-[#21799E]/10 p-4 inline-block'>
                            <div className='d-flex items-center gap-5 mb-4'>
                                <div className='d-flex items-center gap-2 font-[500] text-xl'>Yes <img src="/assets/images/svg/arrow.svg" alt="arrow" /> 90%</div>
                                <div className='d-flex items-center gap-2 font-[500] text-xl'>No <img src="/assets/images/svg/arrow.svg" alt="arrow" /> 90%</div>
                            </div>
                            <div className='d-flex items-center gap-2 font-[500] text-xl'>May be <img src="/assets/images/svg/arrow.svg" alt="arrow" /> 20%</div>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Quizzes;