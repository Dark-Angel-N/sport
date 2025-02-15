import React from 'react'
import { PiDotOutlineFill } from 'react-icons/pi'

const Live = () => {
    return (
        <div>
            <div className='bg-[#EBF2FF] rounded-[6px] col-10'>
                <div>
                    <div className="text-[#464646] d-flex gap-1 items-center px-3 py-2 border-b">
                        <span>2nd ODI</span>
                        <span className="d-flex items-center gap-[2px]">
                            <PiDotOutlineFill />
                            Kotambi Stadium
                        </span>
                        <span className="d-flex items-center gap-[2px]">
                            <PiDotOutlineFill />
                            Vadodara
                        </span>
                    </div>
                    <div className='p-3'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <div className='flex items-center gap-3 mb-3 font-[500]'><img src="/assets/images/svg/ind.svg" alt="india" className='rounded-full' />Indian Women</div>
                                <div className='flex items-center gap-3 font-[500]'><img src="/assets/images/svg/west.svg" alt="india" className='rounded-full' />West Indies Women</div>
                            </div>
                            <div className='text-center'>
                                <button className='bg-black mb-3 text-white rounded px-3 py-2 text-xs'>Today</button>
                                <span className="text-lg block font-[700]">01:30 PM</span>
                            </div>
                        </div>
                        <p className='mb-0 text-[#1A1A1A]/70 text-xs mt-3'>Match yet to start</p>
                    </div>
                </div>
            </div>
            <div className='my-4 col-10'>
                <div className="row">
                    <div className="col-6">
                        <div className="rounded border font-medium text-center p-4 flex items-center gap-4">
                            <div>
                                <p>85.1%</p>
                                <p className='mb-0'>IND-W</p>
                            </div>
                            <div className='flex-grow'>
                                <p>Realtime Win%</p>
                                <div class="progress" role="progressbar" aria-label="Example 1px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ height: '10px' }}>
                                    <div class="progress-bar bg-black rounded-pill" style={{ width: '81.5%' }}></div>
                                </div>
                            </div>
                            <div>
                                <p>14.9%</p>
                                <p className='mb-0'>W1-W</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="rounded border font-medium text-center p-4 h-full flex items-center">
                            <div className='row row-cols-4 items-center flex-grow'>
                                <div className="col text-start">Projected Score</div>
                                <div className="col border-r">
                                    <p className='text-black/50 mb-1'>CRR: 7.05</p>
                                    <strong>354</strong>
                                </div>
                                <div className="col border-r">
                                    <p className='text-black/50 mb-1'>9/Ov</p>
                                    <strong>355</strong>
                                </div>
                                <div className="col">
                                    <p className='text-black/50 mb-1'>11/Ov</p>
                                    <strong>357</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='rounded-[6px] overflow-hidden shadow-[0px_4px_8.4px_#0000001A] col-11'>
                <div className='border-b px-4 text-xl font-medium py-3 flex items-center justify-between bg-[#EBF2FF]'>
                    Batters
                </div>
                <div>
                    <div className='bg-[#1A1A1A]/10 py-2 px-4'>
                        <div className='row'>
                            <div className='col-8'></div>
                            <div className="col-4">
                                <div className="row font-medium text-center text-sm">
                                    <div className="col-2">R</div>
                                    <div className="col-2">B</div>
                                    <div className="col-2">4s</div>
                                    <div className="col-2">6s</div>
                                    <div className="col-4">Sr</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='py-3 px-4'>
                        <div className='row border-b pb-3'>
                            <div className="col-8 text-[#0033A0]">
                                Deepti Sharma *
                            </div>
                            <div className="col-4">
                                <div className="row text-center">
                                    <div className="col-2 font-medium">4</div>
                                    <div className="col-2">5</div>
                                    <div className="col-2">0</div>
                                    <div className="col-2 font-medium">0</div>
                                    <div className="col-4">80.00</div>
                                </div>
                            </div>
                        </div>
                        <div className='row border-b pb-3 mt-3'>
                            <div className="col-8 text-[#0033A0]">
                                Richa Ghosh *
                            </div>
                            <div className="col-4">
                                <div className="row text-center">
                                    <div className="col-2 font-medium">3</div>
                                    <div className="col-2">0</div>
                                    <div className="col-2">61</div>
                                    <div className="col-2 font-medium">0</div>
                                    <div className="col-4">216.67</div>
                                </div>
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className="col-8">
                                Partnership
                            </div>
                            <div className="col-4 font-medium">
                                17(10)
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='rounded-[6px] overflow-hidden shadow-[0px_4px_8.4px_#0000001A] col-11 my-[40px]'>
                <div className='border-b px-4 text-xl font-medium py-3 flex items-center justify-between bg-[#EBF2FF]'>
                    Bowlers
                </div>
                <div>
                    <div className='bg-[#1A1A1A]/10 py-2 px-4'>
                        <div className='row'>
                            <div className='col-8'></div>
                            <div className="col-4">
                                <div className="row font-medium text-center text-sm">
                                    <div className="col-2">O</div>
                                    <div className="col-2">M</div>
                                    <div className="col-2">R</div>
                                    <div className="col-2">W</div>
                                    <div className="col-4">ECO</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='py-3 px-4'>
                        <div className='row border-b pb-3'>
                            <div className="col-8 text-[#0033A0]">
                                Qiana Joseph *
                            </div>
                            <div className="col-4">
                                <div className="row text-center">
                                    <div className="col-2 font-medium">2</div>
                                    <div className="col-2">0</div>
                                    <div className="col-2">27</div>
                                    <div className="col-2 font-medium">1</div>
                                    <div className="col-4">13.50</div>
                                </div>
                            </div>
                        </div>
                        <div className='row border-b pb-3 mt-3'>
                            <div className="col-8 text-[#0033A0]">
                                Deandra Dottin
                            </div>
                            <div className="col-4">
                                <div className="row text-center">
                                    <div className="col-2 font-medium">7</div>
                                    <div className="col-2">0</div>
                                    <div className="col-2">53</div>
                                    <div className="col-2 font-medium">1</div>
                                    <div className="col-4">7.67</div>
                                </div>
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className="col-8">
                                Partnership
                            </div>
                            <div className="col-4 font-medium">
                                17(10)
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='col-11'>
                <h1 className='lg:text-[28px] text-[24px] my-4'>Commentary</h1>
                <div className='shadow-[0px_2px_9.4px_#00000014] p-4 bg-white'>
                    <div className='text-black/50 text-lg border-b pb-3 mb-3'>
                        <strong className='text-black'>Jemimah Rodrigues (batter, India Women):</strong> I love scoring runs, important for me to contribute to the team. Very happy for Harry, was with her during her recovery and I also got a bit emotional for her. The track was really great, coming nicely onto the bat. It is a good total but we need to bowl well. This is our practice leading up to the World Cup and we need to play well. (On Pratika Rawal) She was brilliant today, you could sense her nerves in the first game and to pick up from there on and bat with intent is really good.
                    </div>
                    <div className='text-black/50 font-medium'>
                        <p>17:14 IST: INNINGS BREAK</p>
                        <p>India Women finish with 358/5 in 50 overs, West Indies Women need 359 runs to win</p>
                        <p className='mb-[0px]'>Harleen Deol 115(103) | Pratika Rawal 76(86)</p>
                        <p>Qianna Joseph 1/27 (2) | Afy Fletcher 1/38(6)</p>
                        <p>Joint-highest score for Indian Women in the history of WODIs. A stupendous batting display from the Indian Women after electing to bat first has seen them post a mammoth total on the board at the completion of the first innings.</p>
                    </div>
                    <div className='col-10'>
                        <img src="/assets/images/png/score.png" alt="score" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Live