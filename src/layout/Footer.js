import React from 'react'
import { GrFacebookOption } from 'react-icons/gr';
import { IoLogoInstagram } from 'react-icons/io';
import { RiTwitterXLine } from 'react-icons/ri';
import { AiOutlineYoutube } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className='bg-black py-4 mt-[100px]'>
      <div className="container">
        <div className="row mb-5">
          <div className="col-xl-2">
            <img src="/assets/images/logo.svg" alt="logo" className='invert w-[200px]' />
            <div className='d-flex items-center gap-4 mt-4 ml-3'>
              <a href="https://www.facebook.com/sportzcraazy" className='text-white text-2xl'><GrFacebookOption /></a>
              <a href="https://www.instagram.com/sportzcraazy?igsh=MWx5Z3lhYm5sdTRnYw==" className='text-white text-2xl'><IoLogoInstagram /></a>
              {/* <a href="#twitter" className='text-white text-xl'><RiTwitterXLine /></a> */}
              <a href="https://www.youtube.com/c/SportzCraazy" className='text-white text-2xl'><AiOutlineYoutube /></a>
            </div>
          </div>
        </div>
        <div className="row gy-4 justify-center">
          {/* <div className='col-2 d-xl-block d-none'></div> */}
          <div className='col-xl-9 col-lg-8'>
            <div className="row gy-4">
              <div className='col-xl-8 col-md-9'>
                <div className='row gx-sm-4 gx-2'>
                  <p className='text-xl font-[500] text-white'>Categories</p>
                  <div className="col-4">
                    <div><a href="/cricket" className='md:text-lg text-sm mb-md-3 mb-2 inline-block hover:!underline font-[300] text-white'>Cricket</a></div>
                    <div><a href="/football" className='md:text-lg text-sm mb-md-3 mb-2 inline-block hover:!underline font-[300] text-white'>Football</a></div>
                    <div><a href="/hocky" className='md:text-lg text-sm mb-md-3 mb-2 inline-block hover:!underline font-[300] text-white'>Hockey</a></div>
                    <div><a href="/kabbadi" className='md:text-lg text-sm mb-md-3 mb-2 inline-block hover:!underline font-[300] text-white'>Kabaddi</a></div>
                    <div><a href="/badminton" className='md:text-lg text-sm mb-md-3 mb-2 inline-block hover:!underline font-[300] text-white'>Badminton</a></div>
                  </div>
                  <div className="col-4">
                    <div><a href="/events" className='md:text-lg text-sm mb-md-3 mb-2 inline-block hover:!underline font-[300] text-white'>Events</a></div>
                    <div><a href="/quizzes" className='md:text-lg text-sm mb-md-3 mb-2 inline-block hover:!underline font-[300] text-white'>Quizzes</a></div>
                    <div><a href="/health-fitness" className='md:text-lg text-sm mb-md-3 mb-2 inline-block hover:!underline font-[300] text-white'>Health & Fitness</a></div>
                    <div><a href="/web-stories" className='md:text-lg text-sm mb-md-3 mb-2 inline-block hover:!underline font-[300] text-white'>Web Stories</a></div>
                    <div><a href="/write-to-us" className='md:text-lg text-sm mb-md-3 mb-2 inline-block hover:!underline font-[300] text-white'>Write for us</a></div>
                    <div><a href="/store" className='md:text-lg text-sm mb-md-3 mb-2 inline-block hover:!underline font-[300] text-white'>Store</a></div>
                  </div>
                  <div className="col-4">
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-3">
                <p className='text-xl font-[500] text-white'>About us</p>
                <div><a href="/about-us" className='md:text-lg text-sm mb-md-3 mb-2 inline-block hover:!underline font-[300] text-white'>About us</a></div>
                <div><a href="/terms-of-use" className='md:text-lg text-sm mb-md-3 mb-2 inline-block hover:!underline font-[300] text-white'>Terms of use</a></div>
                <div><a href="/privacy-policy" className='md:text-lg text-sm mb-md-3 mb-2 inline-block hover:!underline font-[300] text-white'>Privacy Policy</a></div>
                <div><a href="/contact-us" className='md:text-lg text-sm mb-md-3 mb-2 inline-block hover:!underline font-[300] text-white'>Contact us</a></div>
                <div><a href="/affiliate-program" className='md:text-lg text-sm mb-md-3 mb-2 inline-block hover:!underline font-[300] text-white'>Affiliate Program</a></div>
              </div>
            </div>
          </div>
          <div className='col-xl-3 col-md-6 col-sm-8'>
            <p className='md:text-lg font-[700] text-white'>Subscribe to get our latest news!</p>
            <div className='d-flex items-center rounded-[10px] overflow-hidden'>
              <input type="text" className='w-full outline-none p-2' />
              <button className='bg-[#1E61C8] py-2 px-3 text-white'>Join!</button>
            </div>
            <p className='md:text-lg font-[700] text-white mt-[16px]'>Address</p>
            <p className='text-white font-[300]'>D29-2nd Floor, GK -II Enclave, New Delhi 110048</p>
            <div className='text-white mb-[16px] font-[300]'>Phone Number: &nbsp; <span className='!underline'>+91- 9599085959</span></div>
            <div className='text-white font-[300]'>Email: &nbsp; <a href="mailto:info@sportzcraazy.com" className='!underline text-white'>info@sportzcraazy.com</a></div>
          </div>
        </div>
        <div className='text-center text-white mt-5 md:text-lg'>Copyright © 2025 Sportzcraazy Technologies Pvt. Ltd. All Rights Reserved.</div>
      </div>
    </footer>
  )
}

export default Footer