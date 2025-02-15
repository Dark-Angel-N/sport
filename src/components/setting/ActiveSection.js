import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import { AiOutlineDelete } from "react-icons/ai";

const ActiveSection = () => {

    const [show, setShow] = useState(false);
    const toggle = () => { setShow(!show) }

    return (
        <div className='col-lg-11 pt-4 pb-[50px]'>
            <div className='text-left'>
                <h1 className='mb-0 text-xl'>Your Active Sessions</h1>
                <hr width="100%" className='text-black/50 my-3' />
                <p className='text-sm text-black/50 mb-3'>These are your active login sessions. If you don’t recognize a session, you can terminate it here.</p>
            </div>
            <div className="pt-5">
                {/* <a href="#active" className='!underline text-theme-color'>Click here to view your recent teammate activity.</a> */}

                <table class="table text-base">
                    <thead>
                        <tr>
                            <th className='!py-3' scope="col">Login Time</th>
                            <th className='!py-3 min-w-[100px]' scope="col">IP address</th>
                            <th className='!py-3 min-w-[100px]' scope="col">Browser</th>
                            <th className='!py-3 min-w-[100px]' scope="col">Operating system</th>
                            <th className='!py-3 min-w-[100px]' scope="col">Location</th>
                            <th className='!py-3 text-center'>Terminate this session</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='group align-middle'>
                            <td className='!py-3'>Oct 3, 2024 at 10:16AM</td>
                            <td className='!py-3'>27.59.86.56</td>
                            <td className='!py-3'>Chrome</td>
                            <td className='!py-3'>Windows 10</td>
                            <td className='!py-3'>Vadodara, IN</td>
                            <td className='!py-3 opacity-0 group-hover:!opacity-100' align='center'><div className='bg-[#ffdbdb] rounded-lg p-1 text-base w-[32px] h-[32px] flex items-center justify-center'><AiOutlineDelete className='text-xl cursor-pointer' onClick={toggle} /></div></td>
                        </tr>
                        <tr className='group align-middle'>
                            <td className='!py-3'>Oct 5, 2024 at 10:16AM</td>
                            <td className='!py-3'>27.59.86.56</td>
                            <td className='!py-3'>Chrome</td>
                            <td className='!py-3'>Windows 10</td>
                            <td className='!py-3'>Vadodara, IN</td>
                            <td className='!py-3 opacity-0 group-hover:!opacity-100' align='center'><div className='bg-[#ffdbdb] rounded-lg p-1 text-base w-[32px] h-[32px] flex items-center justify-center'><AiOutlineDelete className='text-xl cursor-pointer' onClick={toggle} /></div></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* delete modal */}
            <Modal show={show} onHide={toggle} centered>
                <Modal.Header closeButton className='!border-dashed'>
                    <Modal.Title className='!text-xl'>Terminate  Session?</Modal.Title>
                </Modal.Header>
                <Modal.Body className='py-4'>
                    {/* <img src="/assets/images/creation/delete.svg" alt="delete" className='mx-auto' /> */}
                    <div>
                        <p className='mb-5 text-black/80'>Are you sure  you want to terminate this session?</p>
                        <div className='flex items-center justify-end gap-3'>
                            <button onClick={toggle} className='border-[1px] border-theme-color px-[20px] py-[8px] rounded-lg text-sm text-theme-color'>Cancel</button>
                            <button className='border-[1px] border-theme-color px-[20px] py-[8px] rounded-lg text-sm bg-theme-color text-white'>Yes, I want to terminate this session</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default ActiveSection