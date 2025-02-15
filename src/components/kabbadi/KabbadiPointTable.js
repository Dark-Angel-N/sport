import React from 'react'
import KabbadiMenu from './KabbadiMenu'
import { IoIosArrowForward } from 'react-icons/io'

const KabbadiPointTable = () => {
    return (
        <section>
            <KabbadiMenu />
            <div className='container'>
                <div className='flex items-center gap-2 text-sm text-black/50 pt-3'>
                    <a href="/" className='text-black/50'>Home</a>
                    <IoIosArrowForward />
                    <a href="/kabbadi" className='text-black/50'><span>Kabbadi</span></a>
                    <IoIosArrowForward />
                    <span>PKL - Points Table</span>
                </div>
                <div className='my-4'>
                    <div className='bg-[#0033A0] p-5 text-white rounded-lg'>
                        <h1 className="text-[28px] mb-4">PKL - Points Table</h1>
                        <p className='mb-0'>14 Jun 2024-14 Jul 2024</p>
                    </div>
                </div>

                <div className='rounded-[6px] mb-4 overflow-hidden shadow-[0px_4px_8.4px_#0000001A]'>
                    <div>
                        <div className="text-[#464646] bg-[#EBF2FF] d-flex gap-1 justify-between items-center px-3 py-3 border-b">
                            <span>Season 11</span>
                        </div>
                        <div>
                            <table className='w-full'>
                                <tr className='bg-[#1A1A1A]/10'>
                                    <th className='!px-4 text-center'>POS</th>
                                    <th className='!px-4 text-center'>Team</th>
                                    <th className='!px-4 text-center'>P</th>
                                    <th className='!px-4 text-center'>W</th>
                                    <th className='!px-4 text-center'>L</th>
                                    <th className='!px-4 text-center'>T</th>
                                    <th className='!px-4 text-center'>Score Diff</th>
                                    <th className='!px-4 text-center'>Form</th>
                                    <th className='!px-4 text-center'>Pts</th>
                                </tr>
                                {
                                    ['1', '2', '3', '4', '5', '6', '7', '8'].map((index) => {
                                        return (
                                            <tr key={index} className='align-middle border_after relative'>
                                                <td className='!px-4 py-2 text-center'><div className='bg-theme-color mx-auto w-[40px] h-[40px] rounded-full text-white flex items-center justify-center'>Q{index}</div></td>
                                                <td className='!px-4 py-2 text-center'>
                                                    <div className='flex items-center justify-center gap-3'>
                                                        <img src="/assets/images/svg/harayana.svg" alt="harayana" />Haryana Steelers
                                                    </div>
                                                </td>
                                                <td className='!px-4 py-2 text-center'>22</td>
                                                <td className='!px-4 py-2 text-center'>16</td>
                                                <td className='!px-4 py-2 text-center'>6</td>
                                                <td className='!px-4 py-2 text-center'>0</td>
                                                <td className='!px-4 py-2 text-center'>112</td>
                                                <td className='!px-4 py-2 text-center'>
                                                    <div className='flex items-center gap-2 justify-center'>
                                                        <div className='w-[30px] h-[30px] rounded-full bg-[#238A46] text-white flex items-center justify-center'>W</div>
                                                        <div className='w-[30px] h-[30px] rounded-full bg-[#238A46] text-white flex items-center justify-center'>W</div>
                                                        <div className='w-[30px] h-[30px] rounded-full bg-[#238A46] text-white flex items-center justify-center'>W</div>
                                                        <div className='w-[30px] h-[30px] rounded-full bg-[#EF4242] text-white flex items-center justify-center'>L</div>
                                                        <div className='w-[30px] h-[30px] rounded-full bg-[#EF4242] text-white flex items-center justify-center'>L</div>
                                                    </div>
                                                </td>
                                                <td className='!px-4 py-2 text-center'>84</td>
                                            </tr>
                                        )
                                    })
                                }
                            </table>
                        </div>
                    </div>
                </div>


                <div className='rounded-[6px] mb-4 overflow-hidden shadow-[0px_4px_8.4px_#0000001A]'>
                    <div className="text-[#464646] bg-[#EBF2FF] d-flex gap-1 justify-between items-center px-3 py-3 border-b">
                        <span>Pro Kabaddi Points System</span>
                    </div>
                    <div className='p-4'>
                        <div className="row gy-5">
                            <div className="col-3">
                                <p className='mb-1 text-black/50'>Win</p>
                                <span className='bg-theme-color/10 text-theme-color p-1'>5 pts</span>
                            </div>
                            <div className="col-3">
                                <p className='mb-1 text-black/50'>Tie</p>
                                <span className='bg-theme-color/10 text-theme-color p-1'>3 pts</span>
                            </div>
                            <div className="col-3">
                                <p className='mb-1 text-black/50'>Loss by 7 or less points</p>
                                <span className='bg-theme-color/10 text-theme-color p-1'>1 pts</span>
                            </div>
                            <div className="col-3">
                                <p className='mb-1 text-black/50'>Loss by more than 7 points</p>
                                <span className='bg-theme-color/10 text-theme-color p-1'>0 pts</span>
                            </div>
                            <div className="col-9">
                                <p className='mb-1 text-black/50'>From Guide</p>
                                <span className='bg-[#36A4071A] text-[#36A407] p-1 me-3'>Win</span>
                                <span className='bg-theme-color/10 text-theme-color p-1 me-3'>Tie/No Result</span>
                                <span className='bg-[#FF24241A] text-[#FF2424] p-1'>Loss</span>
                            </div>
                            <div className="col-3">
                                <span className='bg-[#0000001A] p-1'>Top 6 teams qualify for the playoffs</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default KabbadiPointTable