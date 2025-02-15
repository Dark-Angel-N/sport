import React from 'react'
import { FiHome } from 'react-icons/fi'
import { IoIosArrowForward } from 'react-icons/io'

const WriteToUs = () => {
  return (
    <>
      <div className='container'>
        <div className='flex items-center gap-2 text-sm text-black/50 mb-4'>
          <a href="/" className='text-black/50'>Home</a>
          <IoIosArrowForward />
          <span>Write for us</span>
        </div>
      </div>

      <div className='relative my-5'>
        <img src="/assets/images/png/write.png" alt="about" className='relative z-[1] w-[600px]' />
        <img src="/assets/images/png/write1.png" alt="about" className='absolute bottom-0 right-0 z-[2] w-[600px]' />
        <img src="/assets/images/png/write2.png" alt="about" className='absolute bottom-0 w-[1200px]' />
        <div className='absolute top-0 flex flex-col items-center w-full h-full pt-5'>
          <h1 className='md:text-[40px] text-[24px] font-semibold'>BRING YOUR A-GAME</h1>
          <h1 className='md:text-[40px] text-[24px] font-semibold text-[#0033A0]'>EVERYDAY</h1>
          <p className='mb-0 text-lg col-6 text-center text-black/50'>Join one of the largest online sports publications in the  world, which serves over 10 million sports and entertainment fans every month.</p>
        </div>
      </div>

      <div className='container'>
        <h1 className="md:text-[28px] text-center text-[24px] mb-4">You are a good <span className="text-[#0033A0]">fit if</span></h1>
        <ul className='text-black/50 list-disc text-lg'>
          <li className='mb-3'>You live,breathe,eat sports and entertainment.Your profound knowledge in these domains resonates with fans.</li>
          <li className='mb-3'>You can weave gripping narratives around sports and entertainment. Beyond facts, stats, and schedules, you can human stories behind the athletes,dissect shows and  movies, and analyze the latest trends in the gaming industry.</li>
          <li>You consider integrity, ethics, accuracy, fairness, and transparency to be absolutely non-negotiable when it comes to your writing.</li>
        </ul>

        <div className="mt-5 relative">
          <img src="/assets/images/png/write3.png" alt="write" />
          <div className='text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
              <a href="/"><img src="/assets/images/logo.svg" alt="logo" className='mx-auto'/></a>
              <h1 className="md:text-[28px] text-[24px] my-4">How to Join</h1>
              <p className='text-black/50 mb-1'>If you wish to join sportscrazy as a writer, please </p>
              <p className='font-medium mb-4'>hrteam@sportscrazy.com</p>
              <p className='text-black/50 mb-1'>If you wish to join Sportscrazy as an editor, </p>
              <p className='font-medium mb-0'>editorapplication@sportscrazy.com</p>
          </div>
        </div>

        <div className="my-5">
          <div className="row">            
            <div className="col-12">
              <div className="py-5 px-[100px] rounded-[7px] border-[1px] border-[#000B091A]">
                <h1 className='md:text-[28px] text-[24px] text-[#0033A0]'>Write for us</h1>
                <p className='text-black/50 mb-5'>Your feedback matters.Write to us if you have any questions, queries or suggestions regarding</p>

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
                  <div className="col-12">
                    <p className='text-black/50'>Upload sample of your work</p>
                    <input type="file" />
                  </div>
                  <div className="col-12 text-end">
                    <button className="text-white mt-4 bg-[#0033A0] border-0 rounded-lg py-[12px] px-[40px]">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WriteToUs