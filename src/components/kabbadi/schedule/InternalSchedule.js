import React from 'react'
import KabbadiMenu from '../KabbadiMenu'
import { IoIosArrowForward } from 'react-icons/io'
import { GrRefresh } from "react-icons/gr";

const InternalSchedule = () => {
    return (
        <section>
            <KabbadiMenu />
            <div className='container'>
                <div className='flex items-center gap-2 text-sm text-black/50 pt-3'>
                    <a href="/" className='text-black/50'>Home</a>
                    <IoIosArrowForward />
                    <a href="/kabbadi" className='text-black/50'><span>Kabbadi</span></a>
                    <IoIosArrowForward />
                    <span>Pro Kabaddi League Schedule</span>
                </div>
                <div className='mt-4 rounded-lg overflow-hidden relative'>
                    <img src="/assets/images/png/schedule_back.png" alt="schedule_back" className='w-full' />
                    <div className="w-full h-full bg-theme-color/50 top-0 left-0 absolute"></div>
                    <div className='absolute top-0 left-0 text-white text-center flex flex-col justify-center items-center w-full h-full'>
                        <h1 className="text-[28px] mb-3">Harayarna Steelers vs Patna Pirates, Pro Kabaddi League</h1>
                        <p>Final | Shree Shiv Chhatrapati Sports Complex, Balewadi, Pune</p>
                        <button className='bg-white text-theme-color px-3 py-1 mb-5'>Match Completed</button>
                        <div className="flex items-center gap-[100px]">
                            <div className='text-center'>
                                <div className="flex items-center gap-3 text-4xl">
                                    <img src="/assets/images/svg/harayana.svg" alt="harayana" className='w-[130px]' />32
                                </div>
                                <span className='text-2xl'>Haryana Steelers</span>
                            </div>
                            <img src="/assets/images/svg/ft.svg" alt="FT" />
                            <div className='text-center'>
                                <div className="flex items-center gap-3 text-4xl">
                                    23<img src="/assets/images/svg/ft1.svg" alt="harayana" className='w-[130px]' />
                                </div>
                                <span className='text-2xl'>Patna Pirates</span>
                            </div>
                        </div>
                        <p className='absolute bottom-3 text-white/80'>Haryana Steelers beat Patna Pirates (32-23)</p>
                    </div>
                </div>

                <div className='mt-4'>
                    <div className='row'>
                        <div className="col-9">
                            {
                                ['1', '2'].map((index) => {
                                    return (
                                        <div key={index} className='mb-4'>
                                            <div className='flex items-center gap-3'>
                                                <h1 className="text-[28px]">Starters</h1>
                                                <div className='w-full h-[4px] bg-theme-color rounded-lg'></div>
                                            </div>

                                            <div className='rounded-[6px] overflow-hidden border mt-4'>
                                                <div className='border-b px-4 py-3 flex items-center justify-between bg-[#EBF2FF]'>
                                                    <div className='flex items-center gap-3 font-[500] text-xl'><img src="/assets/images/svg/harayana.svg" alt="india" className='rounded-full w-[60px]' />Haryana Steelers</div>
                                                    <div className='flex items-center gap-3 font-[500] text-xl'>Patna Pirates<img src="/assets/images/svg/ft1.svg" alt="india" className='rounded-full w-[60px]' /></div>
                                                </div>
                                                <div className='p-4'>
                                                    <div className="row">
                                                        <div className="col-6 border-r">
                                                            {
                                                                ['1'].map((index) => {
                                                                    return (
                                                                        <div key={index}>
                                                                            <div className='flex items-center justify-between'>
                                                                                <p className='font-semibold col-9 text-center'>Player Name</p>
                                                                                <p className='font-semibold col-3 text-end'>Points</p>
                                                                            </div>
                                                                            <div className='flex justify-between'>
                                                                                <div className='flex items-center gap-3 mb-4'>
                                                                                    <img src="/assets/images/svg/user2.svg" alt="user1" className='w-[70px]' />
                                                                                    <div>
                                                                                        <p className='mb-1 font-medium text-lg'>Shivam</p>
                                                                                        <p className='mb-0 text-sm text-black/50'>Patare,Left Raider</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className='text-lg '>9</div>
                                                                            </div>
                                                                            <div className='flex justify-between'>
                                                                                <div className='flex items-center gap-3 mb-4'>
                                                                                    <img src="/assets/images/svg/user2.svg" alt="user1" className='w-[70px]' />
                                                                                    <div>
                                                                                        <p className='mb-1 font-medium text-lg'>Sanjay</p>
                                                                                        <p className='mb-0 text-sm text-black/50'>Defender, right Cover</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className='text-lg  flex items-center justify-between gap-5'>
                                                                                    <div className='flex items-center gap-2'><GrRefresh className='text-[#0779F5]' />14</div>
                                                                                    1
                                                                                </div>
                                                                            </div>
                                                                            <div className='flex justify-between'>
                                                                                <div className='flex items-center gap-3 mb-4'>
                                                                                    <img src="/assets/images/svg/user2.svg" alt="user1" className='w-[70px]' />
                                                                                    <div>
                                                                                        <p className='mb-1 font-medium text-lg'>Sanjay</p>
                                                                                        <p className='mb-0 text-sm text-black/50'>Defender, right Cover</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className='text-lg  flex items-center justify-between gap-5'>
                                                                                    <div className='flex items-center gap-2'><GrRefresh className='text-[#0779F5]' />14</div>
                                                                                    1
                                                                                </div>
                                                                            </div>
                                                                            <div className='flex justify-between'>
                                                                                <div className='flex items-center gap-3 mb-4'>
                                                                                    <img src="/assets/images/svg/user2.svg" alt="user1" className='w-[70px]' />
                                                                                    <div>
                                                                                        <p className='mb-1 font-medium text-lg'>Sanjay</p>
                                                                                        <p className='mb-0 text-sm text-black/50'>Defender, right Cover</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className='text-lg  flex items-center justify-between gap-5'>
                                                                                    <div className='flex items-center gap-2'><GrRefresh className='text-[#0779F5]' />14</div>
                                                                                    1
                                                                                </div>
                                                                            </div>
                                                                            <div className='flex justify-between'>
                                                                                <div className='flex items-center gap-3 mb-4'>
                                                                                    <img src="/assets/images/svg/user2.svg" alt="user1" className='w-[70px]' />
                                                                                    <div>
                                                                                        <p className='mb-1 font-medium text-lg'>Sanjay</p>
                                                                                        <p className='mb-0 text-sm text-black/50'>Defender, right Cover</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className='text-lg  flex items-center justify-between gap-5'>
                                                                                    <div className='flex items-center gap-2'><GrRefresh className='text-[#0779F5]' />14</div>
                                                                                    1
                                                                                </div>
                                                                            </div>
                                                                            <div className='flex justify-between'>
                                                                                <div className='flex items-center gap-3 mb-4'>
                                                                                    <img src="/assets/images/svg/user2.svg" alt="user1" className='w-[70px]' />
                                                                                    <div>
                                                                                        <p className='mb-1 font-medium text-lg'>Sanjay</p>
                                                                                        <p className='mb-0 text-sm text-black/50'>Defender, right Cover</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className='text-lg  flex items-center justify-between gap-5'>
                                                                                    <div className='flex items-center gap-2'><GrRefresh className='text-[#0779F5]' />14</div>
                                                                                    1
                                                                                </div>
                                                                            </div>
                                                                            <div className='flex justify-between'>
                                                                                <div className='flex items-center gap-3 mb-4'>
                                                                                    <img src="/assets/images/svg/user2.svg" alt="user1" className='w-[70px]' />
                                                                                    <div>
                                                                                        <p className='mb-1 font-medium text-lg'>Sanjay</p>
                                                                                        <p className='mb-0 text-sm text-black/50'>Defender, right Cover</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className='text-lg  flex items-center justify-between gap-5'>
                                                                                    <div className='flex items-center gap-2'><GrRefresh className='text-[#0779F5]' />14</div>
                                                                                    1
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
                                                                            <div className='flex items-center justify-between'>
                                                                                <p className='font-semibold col-9 text-center'>Player Name</p>
                                                                                <p className='font-semibold col-3 text-end'>Points</p>
                                                                            </div>
                                                                            <div className='flex justify-between'>
                                                                                <div className='flex items-center gap-3 mb-4'>
                                                                                    <img src="/assets/images/svg/user2.svg" alt="user1" className='w-[70px]' />
                                                                                    <div>
                                                                                        <p className='mb-1 font-medium text-lg'>Shivam</p>
                                                                                        <p className='mb-0 text-sm text-black/50'>Patare,Left Raider</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className='text-lg '>9</div>
                                                                            </div>
                                                                            <div className='flex justify-between'>
                                                                                <div className='flex items-center gap-3 mb-4'>
                                                                                    <img src="/assets/images/svg/user2.svg" alt="user1" className='w-[70px]' />
                                                                                    <div>
                                                                                        <p className='mb-1 font-medium text-lg'>Sanjay</p>
                                                                                        <p className='mb-0 text-sm text-black/50'>Defender, right Cover</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className='text-lg  flex items-center justify-between gap-5'>
                                                                                    <div className='flex items-center gap-2'><GrRefresh className='text-[#0779F5]' />14</div>
                                                                                    1
                                                                                </div>
                                                                            </div>
                                                                            <div className='flex justify-between'>
                                                                                <div className='flex items-center gap-3 mb-4'>
                                                                                    <img src="/assets/images/svg/user2.svg" alt="user1" className='w-[70px]' />
                                                                                    <div>
                                                                                        <p className='mb-1 font-medium text-lg'>Sanjay</p>
                                                                                        <p className='mb-0 text-sm text-black/50'>Defender, right Cover</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className='text-lg  flex items-center justify-between gap-5'>
                                                                                    <div className='flex items-center gap-2'><GrRefresh className='text-[#0779F5]' />14</div>
                                                                                    1
                                                                                </div>
                                                                            </div>
                                                                            <div className='flex justify-between'>
                                                                                <div className='flex items-center gap-3 mb-4'>
                                                                                    <img src="/assets/images/svg/user2.svg" alt="user1" className='w-[70px]' />
                                                                                    <div>
                                                                                        <p className='mb-1 font-medium text-lg'>Sanjay</p>
                                                                                        <p className='mb-0 text-sm text-black/50'>Defender, right Cover</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className='text-lg  flex items-center justify-between gap-5'>
                                                                                    <div className='flex items-center gap-2'><GrRefresh className='text-[#0779F5]' />14</div>
                                                                                    1
                                                                                </div>
                                                                            </div>
                                                                            <div className='flex justify-between'>
                                                                                <div className='flex items-center gap-3 mb-4'>
                                                                                    <img src="/assets/images/svg/user2.svg" alt="user1" className='w-[70px]' />
                                                                                    <div>
                                                                                        <p className='mb-1 font-medium text-lg'>Sanjay</p>
                                                                                        <p className='mb-0 text-sm text-black/50'>Defender, right Cover</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className='text-lg  flex items-center justify-between gap-5'>
                                                                                    <div className='flex items-center gap-2'><GrRefresh className='text-[#0779F5]' />14</div>
                                                                                    1
                                                                                </div>
                                                                            </div>
                                                                            <div className='flex justify-between'>
                                                                                <div className='flex items-center gap-3 mb-4'>
                                                                                    <img src="/assets/images/svg/user2.svg" alt="user1" className='w-[70px]' />
                                                                                    <div>
                                                                                        <p className='mb-1 font-medium text-lg'>Sanjay</p>
                                                                                        <p className='mb-0 text-sm text-black/50'>Defender, right Cover</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className='text-lg  flex items-center justify-between gap-5'>
                                                                                    <div className='flex items-center gap-2'><GrRefresh className='text-[#0779F5]' />14</div>
                                                                                    1
                                                                                </div>
                                                                            </div>
                                                                            <div className='flex justify-between'>
                                                                                <div className='flex items-center gap-3 mb-4'>
                                                                                    <img src="/assets/images/svg/user2.svg" alt="user1" className='w-[70px]' />
                                                                                    <div>
                                                                                        <p className='mb-1 font-medium text-lg'>Sanjay</p>
                                                                                        <p className='mb-0 text-sm text-black/50'>Defender, right Cover</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className='text-lg  flex items-center justify-between gap-5'>
                                                                                    <div className='flex items-center gap-2'><GrRefresh className='text-[#0779F5]' />14</div>
                                                                                    1
                                                                                </div>
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
                                })
                            }
                        </div>
                        <div className="col-3">
                            <img src="/assets/images/svg/banner5.png" alt="banner" className='mb-4 mx-auto' />
                            <img src="/assets/images/svg/banner6.png" alt="banner" className='mx-auto' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InternalSchedule