import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PersonalInfo = () => {

    const [startDate, setStartDate] = useState();

    return (
        <div className='col-lg-11 pt-4 py-[30px] flex flex-col justify-between h-full'>
            <div className='row gy-4'>
                <div className="col-6">
                    <label className='mb-2'>First Name</label>
                    <input type='text' placeholder='James' className="border-[1px] focus:border-theme-color border-black/20 rounded-lg p-3 w-full outline-none" />
                </div>
                <div className="col-6">
                    <label className='mb-2'>Last Name</label>
                    <input type='text' placeholder='Scalf' className="border-[1px] focus:border-theme-color border-black/20 rounded-lg p-3 w-full outline-none" />
                </div>
                <div className="col-6">
                    <label className='mb-2'>Status</label>
                    <input type='text' placeholder='Enter' className="border-[1px] focus:border-theme-color border-black/20 rounded-lg p-3 w-full outline-none" />
                </div>
                <div className="col-6">
                    <label className='mb-2'>Location</label>
                    <input type='text' placeholder='Enter' className="border-[1px] focus:border-theme-color border-black/20 rounded-lg p-3 w-full outline-none" />
                </div>
                <div className="col-12">
                    <label className='mb-2'>Bio</label>
                    <textarea rows={7} placeholder='Enter Bio' className="border-[1px] resize-none focus:border-theme-color border-black/20 rounded-lg px-3 py-2 w-full outline-none"></textarea>
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

export default PersonalInfo
