import React from 'react'
import { LuShare2 } from 'react-icons/lu'
import { IoBookmarkOutline } from 'react-icons/io5'
import { FaArrowTrendUp } from 'react-icons/fa6'
import { PiDotOutlineFill } from 'react-icons/pi'

const HealthFitness = () => {
    return (
        <section>
            <div className='container'>
                <div className='pt-4'>
                    <div className='row'>
                        <div className='col-8'>
                            <h1 className='mb-4 lg:text-[36px] md:text-[30px] text-[20px]'>The Importance of Exercise for Alzheimer’s Prevention and Management</h1>
                            <p className='text-black/50 italic'>Published By : <span className="font-[500]">Business Desk  Sportscrazy.com</span></p>
                            <p className='text-black'>Last Updated: November 24, 2024, 15:25 IST</p>
                            <p className='text-lg text-black'>India’s badminton ace Lakshya Sen brought an end to his  post-Olympics win drought as he clinched victory in his opening match at the China Masters on Wednesday,November 20.</p>

                            <div className='row justify-center'>
                                <div className='col-12'>
                                    <div className='bg-[#F3F8FB] p-3 d-md-flex items-center justify-between'>
                                        <div className='flex items-center gap-3'>
                                            <img src="/assets/images/svg/user.svg" alt="user" className='w-[50px] h-[50px] rounded-full' />
                                            <div className='d-flex flex-wrap items-center sm:gap-3 gap-2'>
                                                <p className='mb-0'>By <span className='text-[#D32F2F]'>Darpan Tikiya</span></p>
                                            </div>
                                        </div>
                                        <div className='flex items-center justify-end gap-3 mt-sm-0 mt-3'>
                                            <div className='w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center text-xl'><LuShare2 /></div>
                                            <div className='w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center text-xl'><IoBookmarkOutline /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-12'>
                                    <h1 className='text-[24px] my-4'>The Importance of Exercise for Alzheimer’s Prevention and Management</h1>

                                    <div className="relative">
                                        <img src="/assets/images/png/banner5.png" alt="banner" className='rounded-[10px]' />
                                        <img src="/assets/images/svg/layer.png" alt="layer" className='absolute top-0 left-0 w-full h-full' />
                                    </div>

                                    <p className='text-black/50 text-justify mt-4 mb-[8px]'>Pharmacological-based treatments for Alzheimer’s disease have been in the spotlight for the last decade, but what about exercise for Alzheimer’s?</p>
                                    <p className='text-black/50 text-justify mb-[8px]'>Alzheimer’s disease is a progressive neurological disorder that leads to memory loss, cognitive decline, and eventually an inability to perform daily tasks.</p>
                                    <p className='text-black/50 text-justify mb-[8px]'>With an aging population and a growing number of individuals affected by Alzheimer’s, it has become increasingly important to identify effective prevention and management strategies.</p>
                                    <p className='text-black/50 text-justify border-b pb-4'>Studies show that one such strategy is exercise, which has been shown to play a crucial role in maintaining brain health and reducing the risk of Alzheimer’s.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 offset-1">
                            <img src="/assets/images/svg/banner5.png" alt="banner" className='mb-4 mx-auto' />
                            <img src="/assets/images/svg/banner6.png" alt="banner" className='mx-auto' />
                        </div>
                    </div>

                    <div className='row'>
                        <div className="col-8 mt-3">
                            <h1 className='text-[24px] mb-4'>The Link Between Exercise and Alzheimer’s Prevention</h1>
                            <iframe width="100%" height="400" className='rounded-[10px]' src="https://www.youtube.com/embed/VVyEjBHiZOo?si=6hNHaNz89ICTmG55" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                            <p className='text-black/60 text-justify mt-4 mb-[8px]'>Numerous studies have demonstrated a strong correlation between exercise and improved cognitive healt</p>

                            <p className='text-black/50 text-justify mb-[8px]'>Alzheimer’s disease is a progressive neurological disorder that leads to memory loss, cognitive decline, and eventually an inability to perform daily tasks.</p>
                            <p className='text-black/50 text-justify mb-[8px]'>With an aging population and a growing number of individuals affected by Alzheimer’s, it has become increasingly important to identify effective prevention and management strategies.</p>
                        </div>
                        <div className="col-3 offset-1">
                            <img src="/assets/images/svg/banner12.png" alt="banner" className='mx-auto' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HealthFitness