import React, { useState } from 'react';

const BillingCentral = () => {

    const [selectedOption, setSelectedOption] = useState('Select');

    const handleSelect = (value) => {
        setSelectedOption(value);
    };

    return (
        <div className='col-lg-11 pt-4 py-[30px] flex flex-col justify-between h-full'>
            <div className='row gy-4'>
                <div className="col-6">
                    <label className='mb-2'>Gender</label>
                    <div class="dropdown">
                        <button class="border-[1px] text-start text-black/50 focus:border-theme-color border-black/20 rounded-lg p-3 w-full outline-none dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {selectedOption}
                        </button>
                        <ul class="dropdown-menu w-full">
                            <li><a class="dropdown-item" onClick={() => handleSelect('Male')} href="#">Male</a></li>
                            <li><a class="dropdown-item" onClick={() => handleSelect('Female')} href="#">Female</a></li>
                            <li><a class="dropdown-item" onClick={() => handleSelect('Transgender')} href="#">Transgender</a></li>
                        </ul>
                    </div>
                    {/* <input type='text' placeholder='Enter' className="border-[1px] focus:border-theme-color border-black/20 rounded-lg p-3 w-full outline-none" /> */}
                </div>
                <div className="col-6">
                    <label className='mb-2'>Mobile Number</label>
                    <div className="border-[1px] resize-none focus:border-theme-color flex items-center border-black/20 rounded-lg p-3 w-full outline-none" >
                        <input type='text' placeholder='Enter' className='outline-none w-full' />
                        <img src='/assets/images/svg/edit.svg' />
                    </div>
                </div>
                <div className="col-6">
                    <label className='mb-2'>Password</label>
                    <div className="border-[1px] resize-none focus:border-theme-color flex items-center border-black/20 rounded-lg p-3 w-full outline-none" >
                        <input type='text' placeholder='Enter' className='outline-none w-full' />
                        <img src='/assets/images/svg/edit.svg' />
                    </div>
                </div>
                <div className="col-6">
                    <label className='mb-2'>Email</label>
                    <div className="border-[1px] resize-none focus:border-theme-color flex items-center border-black/20 rounded-lg p-3 w-full outline-none" >
                        <input type='email' placeholder='Enter' className='outline-none w-full' />
                        <img src='/assets/images/svg/edit.svg' />
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-12 text-end'>
                    <button className='bg-black text-white px-5 py-3 rounded-lg'>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default BillingCentral;
