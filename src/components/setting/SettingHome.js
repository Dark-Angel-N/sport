import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosInformationCircleOutline } from "react-icons/io";

const SettingHome = ({ setActiveOptionFromHome }) => {
    return (
        <div className='col-lg-11 pt-4 pb-[50px]'>
            <div className="relative mb-5">
                <img src="/assets/images/setting/billing1.png" className='rounded-[7px]' alt="kit-banner" />
                <h1 className='md:text-[28px] text-xl text-white absolute top-[30px] left-[30px]'>Home</h1>
            </div>

            <p className='text-[20px] font-medium flex items-center gap-1'>Accounts
                <div className="relative cursor-pointer group">
                    <IoIosInformationCircleOutline />
                    <span className="bg-[#616161] p-2 rounded-lg text-[12px] whitespace-nowrap duration-300 opacity-0 invisible group-hover:!opacity-100 group-hover:!visible text-white absolute top-[100%]">Select push and email notifications that you&apos;d like to receive</span>
                </div>
            </p>

            <div className="row gy-4">
                <div className="col-4">
                    <div className='cursor-pointer' onClick={() => setActiveOptionFromHome('Personal Information')}>
                        <div className="bg-white py-4 px-3 flex items-center gap-3 duration-300 hover:shadow-[0px_1.51px_4.97px_#0000001A] border-[1px] border-black/10 rounded-lg">
                            <div className="bg-[#f9f4fa] min-w-[50px] w-[50px] h-[50px] rounded-lg flex items-center justify-center">
                                <img src="/assets/images/setting/user.svg" alt="user" />
                            </div>
                            <div>
                                <p className='mb-1 text-black font-medium'>Personal information</p>
                                <p className='mb-0 text-black/50 text-xs'>Select push and email notifications that you&apos;d like to receive</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className='cursor-pointer' onClick={() => setActiveOptionFromHome('Security')}>
                        <div className="bg-white py-4 px-3 flex items-center gap-3 duration-300 hover:shadow-[0px_1.51px_4.97px_#0000001A] border-[1px] border-black/10 rounded-lg">
                            <div className="bg-[#f9f4fa] min-w-[50px] w-[50px] h-[50px] rounded-lg flex items-center justify-center">
                                <img src="/assets/images/setting/shield.svg" alt="user" />
                            </div>
                            <div>
                                <p className='mb-1 text-black font-medium'>Security</p>
                                <p className='mb-0 text-black/50 text-xs'>Select push and email notifications that you&apos;d like to receive</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className='cursor-pointer' onClick={() => setActiveOptionFromHome('Active session')}>
                        <div className="bg-white py-4 px-3 flex items-center gap-3 duration-300 hover:shadow-[0px_1.51px_4.97px_#0000001A] border-[1px] border-black/10 rounded-lg">
                            <div className="bg-[#f9f4fa] min-w-[50px] w-[50px] h-[50px] rounded-lg flex items-center justify-center">
                                <img src="/assets/images/setting/Active session.svg" alt="user" />
                            </div>
                            <div>
                                <p className='mb-1 text-black font-medium'>Active session</p>
                                <p className='mb-0 text-black/50 text-xs'>Select push and email notifications that you&apos;d like to receive</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className='cursor-pointer' onClick={() => setActiveOptionFromHome('Legal')}>
                        <div className="bg-white py-4 px-3 flex items-center gap-3 duration-300 hover:shadow-[0px_1.51px_4.97px_#0000001A] border-[1px] border-black/10 rounded-lg">
                            <div className="bg-[#f9f4fa] min-w-[50px] w-[50px] h-[50px] rounded-lg flex items-center justify-center">
                                <img src="/assets/images/setting/legal.svg" alt="user" />
                            </div>
                            <div>
                                <p className='mb-1 text-black font-medium'>Legal</p>
                                <p className='mb-0 text-black/50 text-xs'>Select push and email notifications that you&apos;d like to receive</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <p className='text-[20px] mt-5 font-medium flex items-center gap-1'>
                Billings
                <div className="relative cursor-pointer group">
                    <IoIosInformationCircleOutline />
                    <span className="bg-[#616161] p-2 rounded-lg text-[12px] whitespace-nowrap duration-300 opacity-0 invisible group-hover:!opacity-100 group-hover:!visible text-white absolute top-[100%]">Select push and email notifications that you&apos;d like to receive</span>
                </div>
            </p>

            <div className="row gy-4">
                <div className="col-4">
                    <div className='cursor-pointer' onClick={() => setActiveOptionFromHome('Payment Details')}>
                        <div className="bg-white py-4 px-3 flex items-center gap-3 duration-300 hover:shadow-[0px_1.51px_4.97px_#0000001A] border-[1px] border-black/10 rounded-lg">
                            <div className="bg-[#e7f1f2] min-w-[50px] w-[50px] h-[50px] rounded-lg flex items-center justify-center">
                                <img src="/assets/images/setting/credit.svg" alt="user" />
                            </div>
                            <div>
                                <p className='mb-1 text-black font-medium'>Payment Details</p>
                                <p className='mb-0 text-black/50 text-xs'>Select push and email notifications that you&apos;d like to receive</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className='cursor-pointer' onClick={() => setActiveOptionFromHome('Subscription')}>
                        <div className="bg-white py-4 px-3 flex items-center gap-3 duration-300 hover:shadow-[0px_1.51px_4.97px_#0000001A] border-[1px] border-black/10 rounded-lg">
                            <div className="bg-[#e7f1f2] min-w-[50px] w-[50px] h-[50px] rounded-lg flex items-center justify-center">
                                <img src="/assets/images/setting/subs.svg" alt="user" />
                            </div>
                            <div>
                                <p className='mb-1 text-black font-medium'>Subscription</p>
                                <p className='mb-0 text-black/50 text-xs'>Select push and email notifications that you&apos;d like to receive</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className='cursor-pointer' onClick={() => setActiveOptionFromHome('Purchase History')}>
                        <div className="bg-white py-4 px-3 flex items-center gap-3 duration-300 hover:shadow-[0px_1.51px_4.97px_#0000001A] border-[1px] border-black/10 rounded-lg">
                            <div className="bg-[#e7f1f2] min-w-[50px] w-[50px] h-[50px] rounded-lg flex items-center justify-center">
                                <img src="/assets/images/setting/bill.svg" alt="user" />
                            </div>
                            <div>
                                <p className='mb-1 text-black font-medium'>Purchase History</p>
                                <p className='mb-0 text-black/50 text-xs'>Select push and email notifications that you&apos;d like to receive</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SettingHome