import React from 'react'
import { FiHome } from 'react-icons/fi'
import { IoIosArrowForward } from 'react-icons/io'

const AboutUs = () => {
    return (
        <div className='container'>
            <div className='flex items-center gap-2 text-sm text-black/50 mb-4'>
                <a href="/" className='text-black/50'>Home</a>
                <IoIosArrowForward />
                <span>About us</span>
            </div>

            <div className='relative mb-5'>
                <img src="/assets/images/png/about.png" alt="about" />
                <h1 className='md:text-[28px] text-[24px] absolute top-0 flex items-center justify-center w-full h-full'>About us</h1>
            </div>

            <h1 className="text-[24px] mb-4">About Sportzcraazy</h1>
            <p className='text-black/50'>A brief overview of your company, its mission, vision, and core values.</p>
            <p className='text-black/50'>Founded in 2021, Sportzcraazy Technologies Pvt. Ltd is a 360-degree leading sports marketing company, has been established under Sportzcraazy Technologies Pvt Ltd. The organization is passionate about building a sports-led community for multiple sporting fields, that engages every sports fan with its strong on-ground programs, latest updates on varied sports and digital content from across the globe. The company was established in 2021 and since its inception has been committed to sharing latest information on all things sports through a dedicated video channel and has also gained prominence in the leading sports websites of the country.</p>
            <p className='text-black/50'>Sportzcraazy provides a holistic expertise in areas of Sports Consultancy, Content Creation, Sponsorship Acquisition & Management, Advertising & Marketing, Merchandise, Player Promotion & Event Production.</p>

            <h1 className="text-[20px] mt-4">MISSION</h1>
            <p className='text-black/50'>TO BECOME A LEADING PLATFORM IN COMMUNICATING INFORMATION ABOUT SPORTS ACROSS DIFFERENT SECTIONS OF THE SOCIETY.</p>
            <h1 className="text-[20px] mt-4">VISION</h1>
            <p className='text-black/50'>TO MAKE SPORTS A WAY OF LIFE FOR EVERY ENTHUSIAST.</p>
            <h1 className="text-[20px] mt-4">CORE VALUES</h1>
            <ul className='list-disc text-black/50'>
                <li>Diversity & Inclusion</li>
                <li>Teamwork</li>
                <li>Innovate</li>
                <li>Passion for Sports</li>
                <li>Commitment to Deliver</li>
            </ul>
            {/* 
            <div className="bg-[#EBF2FF] rounded-[6px] px-4 py-[40px] my-4">
                <div className="col-7 mx-auto">
                    <p className='text-center border-b pb-3 mb-3 text-lg text-black/60 leading-[35px]'>We follow a strict editorial code for all our content, and continuously strive to get better in every single aspect of our business. For queries, complaints, or any other feedback, please feel free to <span className="text-[#0033A0]">Contact Us.</span></p>

                    <h1 className='text-xl text-center text-[#0033A0]'>Corporate Office</h1>
                </div>
            </div> */}
        </div>
    )
}

export default AboutUs