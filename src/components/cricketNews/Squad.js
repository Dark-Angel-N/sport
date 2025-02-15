import React from 'react'

const Squad = () => {
    return (
        <div>
            <h1 className='lg:text-[28px] text-[24px] mb-4'>Squads</h1>
            <div className='rounded-[6px] overflow-hidden border'>
                <div className='border-b px-4 py-3 flex items-center justify-between bg-[#EBF2FF]'>
                    <div className='flex items-center gap-3 font-[500] text-xl'><img src="/assets/images/svg/ind.svg" alt="india" className='rounded-full w-[60px]' />INDW</div>
                    <div className='flex items-center gap-3 font-[500] text-xl'>WIW<img src="/assets/images/svg/west.svg" alt="india" className='rounded-full w-[60px]' /></div>
                </div>
                <div className='p-4'>
                    <p className='text-center text-xl font-medium'>Playing XI</p>
                    <div className="row">
                        <div className="col-6 border-r">
                            {
                                ['1', '2', '3'].map((index) => {
                                    return (
                                        <div key={index}>
                                            <div className='flex items-center gap-3 mb-4'>
                                                <img src="/assets/images/svg/user1.svg" alt="user1" className='w-[70px]' />
                                                <div>
                                                    <p className='mb-1 font-medium text-lg'>Smriti Mandhana</p>
                                                    <p className='mb-0 text-sm text-black/50'>Batter</p>
                                                </div>
                                            </div>
                                            <div className='flex items-center gap-3 mb-4'>
                                                <img src="/assets/images/svg/user1.svg" alt="user1" className='w-[70px]' />
                                                <div>
                                                    <p className='mb-1 font-medium text-lg'>Pratika Rawal</p>
                                                    <p className='mb-0 text-sm text-black/50'>Batter</p>
                                                </div>
                                            </div>
                                            <div className='flex items-center gap-3 mb-4'>
                                                <img src="/assets/images/svg/user1.svg" alt="user1" className='w-[70px]' />
                                                <div>
                                                    <p className='mb-1 font-medium text-lg'>Harleen Deol</p>
                                                    <p className='mb-0 text-sm text-black/50'>Batter Alrounder</p>
                                                </div>
                                            </div>
                                            <div className='flex items-center gap-3 mb-4'>
                                                <img src="/assets/images/svg/user1.svg" alt="user1" className='w-[70px]' />
                                                <div>
                                                    <p className='mb-1 font-medium text-lg'>Harmanpreet Kaur(C)</p>
                                                    <p className='mb-0 text-sm text-black/50'>Batter Alrounder</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="col-6">
                            {
                                ['1', '2', '3'].map((index) => {
                                    return (
                                        <div key={index}>
                                            <div className='flex items-center justify-end text-end gap-3 mb-4'>
                                                <div>
                                                    <p className='mb-1 font-medium text-lg'>Smriti Mandhana</p>
                                                    <p className='mb-0 text-sm text-black/50'>Batter</p>
                                                </div>
                                                <img src="/assets/images/svg/user1.svg" alt="user1" className='w-[70px]' />
                                            </div>
                                            <div className='flex items-center justify-end text-end gap-3 mb-4'>
                                                <div>
                                                    <p className='mb-1 font-medium text-lg'>Pratika Rawal</p>
                                                    <p className='mb-0 text-sm text-black/50'>Batter</p>
                                                </div>
                                                <img src="/assets/images/svg/user1.svg" alt="user1" className='w-[70px]' />
                                            </div>
                                            <div className='flex items-center justify-end text-end gap-3 mb-4'>
                                                <div>
                                                    <p className='mb-1 font-medium text-lg'>Harleen Deol</p>
                                                    <p className='mb-0 text-sm text-black/50'>Batter Alrounder</p>
                                                </div>
                                                <img src="/assets/images/svg/user1.svg" alt="user1" className='w-[70px]' />
                                            </div>
                                            <div className='flex items-center justify-end text-end gap-3 mb-4'>
                                                <div>
                                                    <p className='mb-1 font-medium text-lg'>Harmanpreet Kaur(C)</p>
                                                    <p className='mb-0 text-sm text-black/50'>Batter Alrounder</p>
                                                </div>
                                                <img src="/assets/images/svg/user1.svg" alt="user1" className='w-[70px]' />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <h1 className='lg:text-[28px] text-[24px] my-4'>Bench</h1>
            <div className='rounded-[6px] overflow-hidden border'>
                <div className='border-b px-4 text-xl font-medium py-3 flex items-center justify-between bg-[#EBF2FF]'>
                    Bench
                </div>
                <div className='p-4'>
                    <div className="row">
                        <div className="col-6 border-r">
                            {
                                ['1'].map((index) => {
                                    return (
                                        <div key={index}>
                                            <div className='flex items-center gap-3 mb-4'>
                                                <img src="/assets/images/svg/user1.svg" alt="user1" className='w-[70px]' />
                                                <div>
                                                    <p className='mb-1 font-medium text-lg'>Smriti Mandhana</p>
                                                    <p className='mb-0 text-sm text-black/50'>Batter</p>
                                                </div>
                                            </div>
                                            <div className='flex items-center gap-3 mb-4'>
                                                <img src="/assets/images/svg/user1.svg" alt="user1" className='w-[70px]' />
                                                <div>
                                                    <p className='mb-1 font-medium text-lg'>Pratika Rawal</p>
                                                    <p className='mb-0 text-sm text-black/50'>Batter</p>
                                                </div>
                                            </div>
                                            <div className='flex items-center gap-3'>
                                                <img src="/assets/images/svg/user1.svg" alt="user1" className='w-[70px]' />
                                                <div>
                                                    <p className='mb-1 font-medium text-lg'>Harleen Deol</p>
                                                    <p className='mb-0 text-sm text-black/50'>Batter Alrounder</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="col-6">
                            {
                                ['1'].map((index) => {
                                    return (
                                        <div key={index}>
                                            <div className='flex items-center justify-end text-end gap-3 mb-4'>
                                                <div>
                                                    <p className='mb-1 font-medium text-lg'>Smriti Mandhana</p>
                                                    <p className='mb-0 text-sm text-black/50'>Batter</p>
                                                </div>
                                                <img src="/assets/images/svg/user1.svg" alt="user1" className='w-[70px]' />
                                            </div>
                                            <div className='flex items-center justify-end text-end gap-3 mb-4'>
                                                <div>
                                                    <p className='mb-1 font-medium text-lg'>Pratika Rawal</p>
                                                    <p className='mb-0 text-sm text-black/50'>Batter</p>
                                                </div>
                                                <img src="/assets/images/svg/user1.svg" alt="user1" className='w-[70px]' />
                                            </div>
                                            <div className='flex items-center justify-end text-end gap-3'>
                                                <div>
                                                    <p className='mb-1 font-medium text-lg'>Harleen Deol</p>
                                                    <p className='mb-0 text-sm text-black/50'>Batter Alrounder</p>
                                                </div>
                                                <img src="/assets/images/svg/user1.svg" alt="user1" className='w-[70px]' />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <h1 className='lg:text-[28px] text-[24px] my-4'>Support staff</h1>
            <div className='rounded-[6px] overflow-hidden border'>
                <div className='border-b px-4 text-xl font-medium py-3 flex items-center justify-between bg-[#EBF2FF]'>
                    Support Staff
                </div>
                <div className='p-4'>
                    <div className="row">
                        <div className="col-6 border-r">
                            {
                                ['1'].map((index) => {
                                    return (
                                        <div key={index}>
                                            <div className='flex items-center gap-3 mb-4'>
                                                <img src="/assets/images/svg/user1.svg" alt="user1" className='w-[70px]' />
                                                <div>
                                                    <p className='mb-1 font-medium text-lg'>Smriti Mandhana</p>
                                                    <p className='mb-0 text-sm text-black/50'>Batter</p>
                                                </div>
                                            </div>
                                            <div className='flex items-center gap-3'>
                                                <img src="/assets/images/svg/user1.svg" alt="user1" className='w-[70px]' />
                                                <div>
                                                    <p className='mb-1 font-medium text-lg'>Pratika Rawal</p>
                                                    <p className='mb-0 text-sm text-black/50'>Batter</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="col-6">
                            {
                                ['1'].map((index) => {
                                    return (
                                        <div key={index}>
                                            <div className='flex items-center justify-end text-end gap-3 mb-4'>
                                                <div>
                                                    <p className='mb-1 font-medium text-lg'>Smriti Mandhana</p>
                                                    <p className='mb-0 text-sm text-black/50'>Batter</p>
                                                </div>
                                                <img src="/assets/images/svg/user1.svg" alt="user1" className='w-[70px]' />
                                            </div>
                                            <div className='flex items-center justify-end text-end gap-3'>
                                                <div>
                                                    <p className='mb-1 font-medium text-lg'>Pratika Rawal</p>
                                                    <p className='mb-0 text-sm text-black/50'>Batter</p>
                                                </div>
                                                <img src="/assets/images/svg/user1.svg" alt="user1" className='w-[70px]' />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Squad