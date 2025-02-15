import React from 'react'
import { FiHome } from 'react-icons/fi'
import { IoIosArrowForward } from 'react-icons/io'

const ContactUs = () => {
    return (
        <div className='container'>
            <div className='flex items-center gap-2 text-sm text-black/50 mb-4'>
                <a href="/" className='text-black/50'>Home</a>
                <IoIosArrowForward />
                <span>Contact Us</span>
            </div>

            <div className='relative mb-5'>
                <img src="/assets/images/png/contactback.png" alt="about" className='h-[400px] w-full' />
                <img src="/assets/images/png/contact1.png" alt="about" className='absolute bottom-0 left-0 w-[250px]' />
                <img src="/assets/images/png/contact2.png" alt="about" className='absolute top-0 right-0 w-[250px]' />
                <div className='absolute top-0 flex flex-col items-center text-white justify-center w-full h-full'>
                    <h1 className='md:text-[40px] text-[24px] '>Got Questions?</h1>
                    <p className='mb-0 text-lg'>Connect with Our Team for Assistance!</p>
                </div>
            </div>

            <div className="my-5">
                <div className="row">
                    <div className="col-12">
                        <div className="p-5 rounded-[7px] border-[1px] border-[#000B091A]">
                            <h1 className='md:text-[28px] text-[24px] text-[#0033A0]'>Contact Information</h1>
                            <p className='text-black/50 mb-5'>Your preferred contact details, including address, phone number, email, and any social media links.</p>

                            <div className="row gy-4">
                                <div className="col-6">
                                    <label className='mb-1 font-medium'>Name</label>
                                    <input type="text" placeholder='Enter' className='placeholder:text-sm outline-none border rounded p-3 w-full' />
                                </div>
                                <div className="col-6">
                                    <label className='mb-1 font-medium'>Email</label>
                                    <input type="email" placeholder='Enter' className='placeholder:text-sm outline-none border rounded p-3 w-full' />
                                </div>
                                <div className="col-12">
                                    <label className='mb-1 font-medium'>Subject</label>
                                    <input type="text" placeholder='Enter' className='placeholder:text-sm outline-none border rounded p-3 w-full' />
                                </div>
                                <div className="col-12">
                                    <label className='mb-1 font-medium'>Message</label>
                                    <textarea rows="6" placeholder='Type your message.Add Link URL(s) or  Title if applicable' className='placeholder:text-sm resize-none outline-none border rounded p-3 w-full'></textarea>
                                </div>
                                {/* <div className="col-12">
                                    <p className='text-black/50'>Upload Screenshot of error or issue (optional) (jpg,png,gif)</p>
                                    <input type="file" />
                                </div> */}
                                <div className="col-12 text-end">
                                    <button className="text-white mt-4 bg-[#0033A0] border-0 rounded-lg py-[12px] px-[40px]">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#EBF2FF] rounded-[6px] px-4 py-[40px] my-4">
                <div className="col-7 mx-auto">
                    <p className='text-center text-xl mb-0 leading-[35px]'><strong>Address:</strong> D29-2nd Floor, GK -II Enclave, New Delhi 110048</p>                
                </div>
            </div>
        </div>
    )
}

export default ContactUs