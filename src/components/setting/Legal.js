import React from 'react';
import { Link } from 'react-router-dom';

const Legal = () => {
    return (
        <div style={{ height: 'calc(100vh - 40px)' }} className='flex flex-col justify-between col-lg-11 pt-4'>
            {/* Content Section */}
            <div>
                <div>
                    <h1 className='mb-2 text-xl'>Legal</h1>
                    <p className='mb-3 text-sm text-black/50'>Info about you and your preferences across Google services</p>
                </div>
                <div className='pt-5 border-t border-black/20'>
                    <Link to='/' className='block text-theme-color hover:!underline mb-3'>Terms of Use</Link>
                    <Link to='/' className='block text-theme-color hover:!underline mb-3'>Privacy Policy</Link>
                    <Link to='/' className='block text-theme-color hover:!underline mb-3'>Cookie Preference</Link>
                    <Link to='/' className='block text-theme-color hover:!underline mb-3'>Patent & Trademark</Link>
                    <Link to='/' className='block text-theme-color hover:!underline mb-3'>Do not sell or share my personal information</Link>
                </div>
            </div>

            {/* Footer Section */}
            <div className='mt-auto text-center'>
                <p className='text-sm text-black/50'>Copyright ©2024 Zunno AI. All rights reserved. Various trademarks held by their respective owners.</p>
            </div>
        </div>
    );
};

export default Legal;
