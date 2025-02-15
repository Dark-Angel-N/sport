import React from 'react'

const ErrorPage = () => {
    return (
        <div className='container'>
            <div className='border-[1px] border-black/20 rounded-xl mb-4 text-center'>
                <img src="/assets/images/png/error.png" alt="error" className='w-[300px] mx-auto' />
                <h1 className='md:text-[28px] text-[24px] mb-4'>Oops! There was a problem!</h1>
                <p className='text-black/50'>Sorry,but can’t find what you were looking for right now.</p>
                <p className='text-[#0033A0]'>Go back to the previous page | Go to the homepage</p>
            </div>
        </div>
    )
}

export default ErrorPage