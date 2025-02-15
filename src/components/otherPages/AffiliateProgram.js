import React from 'react'
import { FiHome } from 'react-icons/fi'
import { IoIosArrowForward } from 'react-icons/io'

const AffiliateProgram = () => {
    return (
        <div className='container'>
            <div className='flex items-center gap-2 text-sm text-black/50 mb-4'>
                <a href="/" className='text-black/50'>Home</a>
                <IoIosArrowForward />
                <span>Affiliate Program</span>
            </div>

            <div className='relative mb-5'>
                <img src="/assets/images/png/contactback.png" alt="about" className='h-[500px] w-full' />
                <img src="/assets/images/png/contact1.png" alt="about" className='absolute bottom-0 left-0 w-[250px]' />
                <img src="/assets/images/png/contact2.png" alt="about" className='absolute top-0 right-0 w-[250px]' />
                <div className='absolute top-0 flex flex-col items-center text-center text-white justify-center w-full h-full'>
                    <h1 className='md:text-[40px] text-[24px] col-6'>Welcome to the Best Sports Affiliate Program on the Internet</h1>
                    <p className='text-lg col-7 my-4'>With over 300 expert winters writers across the globe writing 800+ well researched, engaging, and relevant articles daily,  you can never run  out of engaging content to share with your audience and monetize with the potential to make thousands of dollars each months.</p>
                    <button className='bg-white text-black rounded-lg px-4 font-medium py-[12px]'>Apply Now</button>
                </div>
            </div>

            <h1 className="md:text-[28px] text-[24px] mb-4 text-center">Meet our Affiliates</h1>
            <img src="/assets/images/png/meet.png" alt="meet" className='col-8 mx-auto mb-5' />

            <h1 className="md:text-[28px] text-[24px] mb-5 text-center">Why Sportscrazy Affiliate Program</h1>
            <div className="row gy-4 mb-5">
                {
                    ['1', '2'].map((index) => {
                        return (
                            <>
                                <div className="col-4">
                                    <div className="w-[50px] h-[50px] bg-[#0033A033] rounded-full flex items-center justify-center"><img src="/assets/images/svg/mail.svg" className='w-[25px]' alt="email" /></div>
                                    <h1 className="text-[20px] mt-3 text-[#53686A]">Grow your Audience</h1>
                                    <p className='text-black/50'>Our finest content written by our top-notch writers helps you share trending articles across your platforms and grow your engagement and audience.</p>
                                </div>
                                <div className="col-4">
                                    <div className="w-[50px] h-[50px] bg-[#0033A033] rounded-full flex items-center justify-center"><img src="/assets/images/svg/credit-card.svg" className='w-[25px]' alt="email" /></div>
                                    <h1 className="text-[20px] mt-3 text-[#53686A]">Share Unlimited Engaging Content</h1>
                                    <p className='text-black/50'>If your payment fails, you can use the (COD) payment option, if available on that order. If your payment is debited from your account after a payment failure, it will be credited back within 7-10 days.</p>
                                </div>
                                <div className="col-4">
                                    <div className="w-[50px] h-[50px] bg-[#0033A033] rounded-full flex items-center justify-center"><img src="/assets/images/svg/slash.svg" className='w-[25px]' alt="email" /></div>
                                    <h1 className="text-[20px] mt-3 text-[#53686A]">Timely Payouts</h1>
                                    <p className='text-black/50'>You can now cancel an order when it is in packed/shipped status. Any amount paid will be credited into the same payment mode using which the payment was made</p>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AffiliateProgram