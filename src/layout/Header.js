import React, { useState } from 'react'
import TopHeader from './TopHeader'
import { HiMiniBars3 } from "react-icons/hi2";
import { Link, useLocation } from 'react-router-dom';
import { VscCircleFilled } from "react-icons/vsc";
import { IoNotifications } from "react-icons/io5";
import { Modal, Offcanvas } from 'react-bootstrap';
import { GrFacebookOption } from 'react-icons/gr';
import { IoIosSearch, IoLogoInstagram } from 'react-icons/io';
import { RiTwitterXLine } from 'react-icons/ri';
import { AiOutlineYoutube } from 'react-icons/ai';
import { routes } from './routes';

const Header = () => {

    const location = useLocation()
    const [currentView, setCurrentView] = useState("login");
    const [show, setShow] = useState(false);
    const toggle = () => {
        setShow(!show)
        setCurrentView("login")
    }
    const [show1, setShow1] = useState(false);
    const toggle1 = () => { setShow1(!show1) }
    const [sidebar, setSideBar] = useState(false);
    const toggleSidebar = () => { setSideBar(!sidebar) }
    const [otpModal, setOtpModal] = useState(false)
    const [success, setSuccess] = useState(false);

    const successToggle = () => {
        setSuccess(!success);
        if (!success) {
            setTimeout(() => {
                setSuccess(false);
            }, 5000);
        }
    };
    const handleOtpContinue = () => {
        setShow(false)
        setOtpModal(false);
        setSuccess(true);
        setTimeout(() => {
            setSuccess(false);
        }, 3000);
    };

    return (
        <>
            <TopHeader />
            <header>
                <div className='container-fluid xl:!px-[50px] lg:!px-[40px] !px-[16px]'>
                    <div className="py-2 border-b mb-4">
                        <div className='d-flex items-center justify-between gap-3'>
                            <div className='d-flex items-center gap-3'>
                                <HiMiniBars3 className='text-2xl cursor-pointer' onClick={toggleSidebar} />
                                <a href='/'>
                                    <img src="/assets/images/logo.svg" alt="logo" />
                                </a>
                            </div>
                            <div className='d-flex gap-3 items-center'>
                                <div className='bg-[#E6EBF5] text-[#FF2424] rounded p-2 text-sm'><div className='animate-pulse d-flex items-center gap-1'><VscCircleFilled />Live Event</div></div>
                                <div onClick={toggle} className='bg-black d-sm-block d-none cursor-pointer text-white py-2 px-3 rounded text-sm'>Sign In</div>
                                <div onClick={toggle1} className='relative cursor-pointer'><IoNotifications className='text-[27px]' /><div className='w-[8px] h-[8px] bg-[#FF2424] rounded-full absolute top-0 right-1'></div></div>
                            </div>
                        </div>
                        <div className='d-flex items-center gap-6 pt-2 border-t flex-nowrap whitespace-nowrap overflow-x-auto scrolling'>
                            {
                                routes.map((res) => {
                                    const isActive = location.pathname.startsWith(res.path) || (res.path === '/cricket' && location.pathname.startsWith('/cricket'));
                                    console.log('isActive',isActive,location.pathname,location.pathname.startsWith(res.path));
                                    
                                    return (
                                        <Link to={res.path} key={res.id} className={`text-[#747474] main_menus px-3 ${isActive && '!underline underline-offset-4 !decoration-[#0033A0]'}`}>
                                            {res.name}
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </header>

            {/* Sign in */}
            <Modal show={show} onHide={toggle} size='xl' className='login_modal' centered>
                <Modal.Body>
                    <div className='px-xl-5'>
                        <div className='row items-center'>
                            <div className='col-lg-5 d-lg-block d-none'>
                                <p className='font-[500] xl:text-2xl text-lg mb-4'>Login to enjoy a world of benefits</p>
                                <ul className='list-disc text-[#000000]/70 pl-0 list-inside xl:text-base text-xs'>
                                    <li className='mb-4'>Enjoy a newsfeed personalised as per your interests</li>
                                    <li className='mb-4'>Receive insightful newsletters rights into your inbox</li>
                                    <li className='mb-4'>Get real-time updates on breaking news and alerts</li>
                                </ul>
                            </div>
                            <div className='col-lg-7 lg:border-l-[1px] border-l-[#000000]/30 xl:!ps-[60px] lg:!ps-[30px]'>
                                {
                                    currentView === "signup" && (
                                        <div>
                                            <img src="/assets/images/logo.svg" alt="logo" className='mx-auto' />
                                            <h1 className='text-[25px] font-[400] text-center my-4'>Sign Up</h1>
                                            <input type="text" placeholder='Enter Email Id' className='bg-[#E6EBF5]/40 outline-none w-full p-3 rounded mb-4' />
                                            <button onClick={() => setCurrentView("otp")} className='bg-[#0033A0] text-white w-full p-3 rounded'>Continue</button>
                                            <p className='text-center mt-3'>Don’t have an account? <span className="text-[#0033A0] !underline cursor-pointer" onClick={() => setCurrentView("login")}>Login</span></p>
                                            <div className='lining relative block text-center my-4'><span className='bg-white px-3 relative z-[1px]'>Or</span></div>
                                            <div className='d-flex justify-center items-center gap-2 border-[1px] border-[#000000]/40 rounded p-2 mb-3 cursor-pointer'><img src="/assets/images/svg/google.svg" alt="google" /> Continue with google</div>
                                            <div className='d-flex justify-center items-center gap-2 border-[1px] border-[#000000]/40 rounded p-2 cursor-pointer'><img src="/assets/images/svg/email.svg" className='w-[25px]' alt="google" /> Continue with Email</div>
                                        </div>
                                    )
                                }
                                {currentView === "login" && (
                                    <div>
                                        <img src="/assets/images/logo.svg" alt="logo" className='mx-auto' />
                                        <h1 className='text-[25px] font-[400] text-center my-4'>Login</h1>
                                        <input type="text" placeholder='Enter  Mobile number or Email Id' className='bg-[#E6EBF5]/40 outline-none w-full p-3 rounded mb-4' />
                                        <button onClick={handleOtpContinue} className='bg-[#0033A0] text-white w-full p-3 rounded'>Continue</button>
                                        <p className='text-center mt-3'>Don’t have an account? <span className="text-[#0033A0] !underline cursor-pointer" onClick={() => setCurrentView("signup")}>Sign Up</span></p>
                                        <div className='lining relative block text-center my-4'><span className='bg-white px-3 relative z-[1px]'>Or</span></div>
                                        <div className='d-flex justify-center items-center gap-2 border-[1px] border-[#000000]/40 rounded p-2 mb-3 cursor-pointer'><img src="/assets/images/svg/google.svg" alt="google" /> Continue with google</div>
                                        <div className='d-flex justify-center items-center gap-2 border-[1px] border-[#000000]/40 rounded p-2 cursor-pointer'><img src="/assets/images/svg/email.svg" className='w-[25px]' alt="google" /> Continue with Email</div>
                                    </div>
                                )}
                                {currentView === "otp" && (
                                    <div>
                                        <img src="/assets/images/logo.svg" alt="logo" className='mx-auto' />
                                        <h1 className='text-[25px] font-[400] text-center my-4'>Enter 6 digit OTP</h1>
                                        <div className='flex items-center justify-evenly mt-5'>
                                            {Array.from({ length: 6 }).map((_, index) => (
                                                <input key={index} type="text" className='bg-[#E6EBF5]/40 text-center text-2xl outline-none w-[60px] h-[60px] p-3 rounded mb-4' />
                                            ))}
                                        </div>
                                        <div className='flex items-center justify-center gap-3 mb-5'> <div className='underline'>Resend OTP</div> <span className='text-[#0033A0]'>00:26</span> </div>
                                        <button onClick={() => setCurrentView("login")} className='bg-[#0033A0] text-white w-full p-3 rounded'>Continue</button>
                                    </div>
                                )
                                }
                                <div className='text-center mt-[50px]'>Trouble login ? <span className='text-[#0033A0] underline'>Get help</span></div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            {/* notification */}
            <Modal show={show1} onHide={toggle1} className='notification_modal' centered>
                <Modal.Body className='p-0'>
                    <div className='py-3 md:px-[50px] px-[10px]'>
                        <img src="/assets/images/logo.svg" alt="logo" className='mx-auto' />
                        <p className='md:text-[20px] text-lg text-center my-4'>Sportzcraazy wants to start sending you push notification.Click Allow to  subscribe</p>
                    </div>
                    <div className='d-flex gap-1'>
                        <button onClick={toggle1} className="bg-[#0033A0] md:text-base text-sm text-white w-[50%] px-2 py-3">I’ll do this later</button>
                        <button className="bg-[#0033A0] md:text-base text-sm text-white w-[50%] px-2 py-3">Allow</button>
                    </div>
                </Modal.Body>
            </Modal>
            {/* Success in */}
            <Modal show={success} onHide={successToggle} className='notification_modal' centered>
                <Modal.Body className='p-0'>
                    <div className='md:p-[30px] p-[20px]'>
                        <h1 className='text-[24px] text-center'>Login Successful</h1>
                        <img src="/assets/images/svg/success.svg" alt="success_logo" className='mx-auto w-[100px] my-3' />
                        <p className='md:text-[20px] text-lg text-center'>Get ready to enjoy a personalized experience</p>
                    </div>
                </Modal.Body>
            </Modal>
            {/* sidebar */}
            <Offcanvas show={sidebar} onHide={toggleSidebar} className='sidebar'>
                <div className='border-b pb-3 pb-lg-0 px-3'>
                    <Offcanvas.Header closeButton className='!items-start !px-0'>
                        <Offcanvas.Title>
                            <img src="/assets/images/logo.svg" alt="logo" />
                            <div className='d-flex d-lg-none gap-2 items-center text-sm mb-2'>
                                <img src="/assets/images/svg/sunset.svg" alt="map-pin" />34°C &nbsp; | &nbsp;
                                <div className='d-flex d-lg-none items-center gap-3'>
                                    <h1 className='text-[15px] mb-0'>Weekend</h1>
                                    <p className='text-xs mb-0'>23 OCT, 2023</p>
                                </div>
                            </div>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <div className='bg-white d-flex d-lg-none items-center gap-2 w-full rounded-full overflow-hidden p-2 border'>
                        <input type="text" className='placeholder:text-[10px] outline-none text-sm w-full' placeholder='Search for kabaddi, Cricket, Hockey...' />
                        <IoIosSearch />
                    </div>
                </div>
                <Offcanvas.Body className='!pb-0'>
                    <div className='h-full d-flex flex-col justify-between'>
                        <div>
                            {
                                routes.map((res) => {
                                    return (
                                        <Link to={res.path} className='text-[#747474] block mb-3'>{res.name}</Link>
                                    )
                                })
                            }
                        </div>
                        <div className='bg-white border-t sticky py-2 d-flex d-lg-none justify-between bottom-0 w-full'>
                            <div className='d-flex items-center gap-3'>
                                <GrFacebookOption className='text-lg' />
                                <IoLogoInstagram className='text-lg' />
                                <RiTwitterXLine />
                                <AiOutlineYoutube className='text-lg' />
                            </div>
                            <div onClick={toggle} className='bg-black d-block d-sm-none cursor-pointer text-white py-2 px-3 rounded text-sm'>Sign In</div>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default Header