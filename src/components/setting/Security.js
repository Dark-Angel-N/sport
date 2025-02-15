import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import { LuCopy } from "react-icons/lu";

const Security = () => {

    const [show, setShow] = useState(false);
    const toggle = () => { setShow(!show) }
    const [show1, setShow1] = useState(false);
    const toggle1 = () => { setShow1(!show1) }

    return (
        <div className='col-lg-11 pt-4 py-[30px] flex flex-col justify-between h-full'>
            <div className='row gy-4'>
                <div className="col-6">
                    <label className='mb-2'>Facebook</label>
                    <input type='text' placeholder='Enter' className="border-[1px] focus:border-theme-color border-black/20 rounded-lg p-3 w-full outline-none" />
                </div>
                <div className="col-6">
                    <label className='mb-2'>Twitter</label>
                    <input type='text' placeholder='Enter' className="border-[1px] focus:border-theme-color border-black/20 rounded-lg p-3 w-full outline-none" />
                </div>
                <div className="col-6">
                    <label className='mb-2'>Instagram</label>
                    <input type='text' placeholder='Enter' className="border-[1px] focus:border-theme-color border-black/20 rounded-lg p-3 w-full outline-none" />
                </div>
                <div className="col-6">
                    <label className='mb-2'>LinkedIn</label>
                    <input type='text' placeholder='Enter' className="border-[1px] focus:border-theme-color border-black/20 rounded-lg p-3 w-full outline-none" />
                </div>
                <div className="col-6">
                    <label className='mb-2'>Profile URL <span className='text-black/50'>(Cannot be changed)</span></label>
                    <div className="border-[1px] resize-none focus:border-theme-color flex items-center border-black/20 rounded-lg p-3 w-full outline-none" >
                        <input type='text' placeholder='pratiksha-fef25' className='outline-none w-full' />
                        <LuCopy />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className='col-12 text-end'>
                    <button className='bg-black text-white px-5 py-3 rounded-lg'>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Security 
