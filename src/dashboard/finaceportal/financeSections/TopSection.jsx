import React from 'react';
import { Link } from 'react-router-dom';
import "../../Dashboard.css"
import wallet from "../../../images/dashboard/finance/wallet.png"
import plant from "../../../images/dashboard/finance/financeplant.png"


export default function TopSection() {
    // Get the current date and time
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-GB'); // Format: DD.MM.YYYY
    const formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // Format: HH:MM

    return (
        <div className="">
            <div className="relative flex lg:w-[845px] w-[380px] h-[244px] bg-black rounded-3xl border border-gray-800 p-4">
                {/* Header */}
                <div className='flex flex-col'>
                    <div className="space-y-1 mb-4">
                        <p className="text-gray-400">{formattedDate}</p>
                        <p className="text-gray-400">{formattedTime}</p>
                        <h1 className="lg:text-[25px] text-[16px] font-bold text-white">Hello Jerry</h1>
                    </div>

                    {/* Balance Cards */}
                    <div className="flex flex-row gap-4 w-[350px] lg:w-full pb-4 overflow-x-auto overflow-y-hidden lg:overflow-hidden no-scrollbar">
                        {/* Current Wallet */}
                        <div className='relative w-[200px] h-[110px]'>
                            <div className="relative flex w-[190px] h-[100px] bg-[#242424] border border-green-500 rounded-3xl p-4 shadow-lg overflow-hidden hover:border-green-500/40 transition-colors">
                                <div className="space-y-1">
                                    <p className="text-xs text-white">Current Wallet</p>
                                    <div>
                                        <span className="text-xs text-white">GHS</span>
                                        <span className="text-2xl font-bold ml-1 text-white">30,000</span>
                                    </div>
                                    <Link to="/" className="text-xs text-gray-400 hover:text-white transition-colors cursor-pointer">View Wallet</Link>
                                </div>

                                <div className='absolute bottom-0 right-0'>
                                    <img
                                        src={wallet}
                                        alt="Money illustration"
                                        width="40"
                                        height="40"
                                        className=""
                                    />
                                </div>
                                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-green-500/10 blur-2xl rounded-full" />
                            </div>

                            <div className='absolute lg:right-[3px] right-0 top-[30%] flex flex-col gap-4'>
                                <div className='w-[18] h-[6px] bg-[#041010] rounded-lg'></div>
                                <div className='w-[18px] h-[6px] bg-[#041010] rounded-lg'></div>
                                <div className='w-[18px] h-[6px] bg-[#041010] rounded-lg'></div>
                            </div>
                        </div>

                        {/* Total Balance */}
                        <div className='relative w-[200px] h-[110px]'>
                            <div className="relative flex w-[190px] h-[100px] bg-[#242424] border border-yellow-500 rounded-3xl p-4 shadow-lg overflow-hidden hover:border-green-500/40 transition-colors">
                                <div className="space-y-1">
                                    <p className="text-xs text-white">Total Balance</p>
                                    <div>
                                        <span className="text-xs text-white">GHS</span>
                                        <span className="text-2xl font-bold ml-1 text-white">42,000</span>
                                    </div>
                                    <Link to="/" className="text-xs text-gray-400 hover:text-white transition-colors cursor-pointer">View Wallet</Link>
                                </div>

                                <div className='absolute bottom-0 right-0'>
                                    <img
                                        src={wallet}
                                        alt="Money illustration"
                                        width="40"
                                        height="40"
                                        className=""
                                    />
                                </div>
                                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-green-500/10 blur-2xl rounded-full" />
                            </div>

                            <div className='absolute lg:right-[3px] right-0 top-[30%] flex flex-col gap-4'>
                                <div className='w-[18px] h-[6px] bg-[#041010] rounded-lg'></div>
                                <div className='w-[18px] h-[6px] bg-[#041010] rounded-lg'></div>
                                <div className='w-[18px] h-[6px] bg-[#041010] rounded-lg'></div>
                            </div>
                        </div>

                        {/* DOSH Card Balance */}
                        <div className='relative w-[200px] h-[110px]'>
                            <div className="relative flex w-[190px] h-[100px] bg-[#242424] border border-blue-500 rounded-3xl p-4 shadow-lg overflow-hidden hover:border-green-500/40 transition-colors">
                                <div className="space-y-1">
                                    <p className="text-xs text-white">DOSH Card Balance</p>
                                    <div>
                                        <span className="text-xs text-white">GHS</span>
                                        <span className="text-2xl font-bold ml-1 text-white">10,000</span>
                                    </div>
                                    <Link to="/" className="text-xs text-gray-400 hover:text-white transition-colors cursor-pointer">View Wallet</Link>
                                </div>

                                <div className='absolute bottom-0 right-0'>
                                    <img
                                        src={wallet}
                                        alt="Money illustration"
                                        width="40"
                                        height="40"
                                        className=""
                                    />
                                </div>
                                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-green-500/10 blur-2xl rounded-full" />
                            </div>

                            <div className='absolute lg:right-[3px] right-0 top-[30%] flex flex-col gap-4'>
                                <div className='w-[18px] h-[6px] bg-[#041010] rounded-lg'></div>
                                <div className='w-[18px] h-[6px] bg-[#041010] rounded-lg'></div>
                                <div className='w-[18px] h-[6px] bg-[#041010] rounded-lg'></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='hidden lg:block absolute bottom-0 right-0'>
                    <img
                        src={plant}
                        alt="Money illustration"
                        loading='lazy'
                        className="w-[150px] h-[200px]"
                    />
                </div>
            </div>
        </div>
    );
}
