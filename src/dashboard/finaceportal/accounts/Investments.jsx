import React from 'react';
import "./Investment.css"
import investbg from "../../../images/dashboard/finance/investbg.png"
import { BsArrowUpRightCircle } from "react-icons/bs";

import doshLogo from "../../../images/dashboard/finance/doshLife.png"
import visaLogo from "../../../images/dashboard/finance/visa.png"
import chip from "../../../images/dashboard/finance/Chip_Card.png"
import wifi from "../../../images/dashboard/finance/wifi.png"
import sendata from "../../../images/dashboard/finance/sendata.png"

import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    Area,
} from "recharts";
import TradingChart from '../financeSections/TradingChart';

const data = [
    { date: "20 Jun", profits: 90, cashBond: 85 },
    { date: "21 Jun", profits: 95, cashBond: 80 },
    { date: "22 Jun", profits: 100, cashBond: 85 },
    { date: "23 Jun", profits: 120, cashBond: 95 },
    { date: "24 Jun", profits: 110, cashBond: 105 },
    { date: "25 Jun", profits: 130, cashBond: 120 },
    { date: "26 Jun", profits: 100, cashBond: 90 },
    { date: "27 Jun", profits: 110, cashBond: 115 },
    { date: "28 Jun", profits: 125, cashBond: 120 },
    { date: "29 Jun", profits: 115, cashBond: 100 },
    { date: "30 Jun", profits: 95, cashBond: 85 },
];



export default function Investments() {
    // Get the current date and time
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-GB'); // Format: DD.MM.YYYY
    const formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // Format: HH:MM

    return (
        <div className="overflow-y-scroll flex gap-4 no-scrollbar ">
            <div className='w-[900px]'>
                <div className="relative flex w-[845px] h-[244px] bg-black rounded-3xl border border-gray-800 mx-4">

                    <img src={investbg} alt='invest' className='absolute inset-0 object-cover bg-cover' loading='lazy' />
                    {/* Header */}
                    <div className='absolute top-2 left-2 flex flex-col'>
                        <div className="space-y-1 mb-4">
                            <p className="text-white">{formattedDate}</p>
                            <p className="text-white">{formattedTime}</p>
                        </div>

                        <h1 className="mt-6 text-[25px] leading-[35px] text-white">WELCOME TO<br />
                            <b>DOSH INVESTMENT</b></h1>

                    </div>
                </div>

                <div className='mx-4 my-8'>
                    <h2 className='my-4 text-[20px] leading-5 text-white'>Dashboard</h2>

                    <div className='flex flex-row gap-5'>
                        <div className="card-container">
                            {/* Top section with logo and business label */}
                            <div className="card-header">
                                <div className="logo-section">
                                    <img src={doshLogo} alt="Dosh Logo" className="dosh-logo" />
                                </div>
                                <div className="business-label">BUSINESS</div>
                            </div>

                            {/* Balance and network information */}
                            <div className='network__section'>
                                <div className='network'>
                                    <img src={chip} alt='network' className='w-[28px] h-[28px]' loading='lazy' />
                                    <img src={wifi} alt='network' className='w-[28px] h-[28px]' loading='lazy' />
                                </div>
                                <div className="balance-section">
                                    <div className="balance-label">Balance</div>
                                    <div className="balance-amount">GHS5,756</div>
                                </div>

                            </div>


                            {/* Card number and contactless icon */}
                            <div className="card-number">
                                <span className=''>+233 246 571 005</span>
                            </div>

                            {/* Validity section */}
                            <div className="validity">
                                <span className="text-[7px]">Valid From</span>
                                <div className="flex val">
                                    <span className="text-[7px]">MONTH/YEAR</span>
                                    <span className="text-[7px]">10/24</span>
                                </div>
                                <div className="flex val">
                                    <span className="text-[7px]">MONTH/YEAR</span>
                                    <span className="text-[7px]">10/24</span>
                                </div>
                                <div className="flex val">
                                    <span className="text-[7px]">MONTH/YEAR</span>
                                    <span className="text-[7px]">10/24</span>
                                </div>
                            </div>

                            {/* Cardholder name and Visa logo */}
                            <div className="footer">
                                <div className="cardholder-name">Jerry Sam</div>
                                <img src={visaLogo} alt="Visa Logo" className="visa-logo" />
                            </div>
                        </div>
                        <div className="flex flex-col w-[155px] h-[112px] bg-white rounded-lg shadow-md p-3">
                            {/* Top Section */}
                            <div className="flex items-center gap-2 mb-4">
                                <img src={sendata} alt="graph icon" className="w-[25px] h-[33px]" loading="lazy" />
                                <div>
                                    <div className="text-[10px] font-medium text-gray-800">DOSH</div>
                                    <div className="text-[10px] font-medium text-[#8D6E63]">Fixed Deposit</div>
                                </div>
                            </div>

                            {/* Bottom Section */}
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col">
                                    <span className="text-[12px] text-[#8D6E63] font-semibold">GHS445.06</span>
                                    <span className="text-[8px] text-gray-500">+3.23%(+GHS14.84)</span>
                                </div>
                                <div className="w-[30px] h-[30px] rounded-full bg-blue-50 flex items-center justify-center">
                                    <BsArrowUpRightCircle className='text-[#718EBF]' />
                                </div>
                            </div>
                        </div>
                        <div className="relative w-[155px] h-[112px]">
                            {/* Card Content */}
                            <div className="flex flex-col w-full h-full bg-white rounded-lg shadow-md p-3">
                                {/* Top Section */}
                                <div className="flex items-center gap-2 mb-4">
                                    <img src={sendata} alt="graph icon" className="w-[25px] h-[33px]" loading="lazy" />
                                    <div>
                                        <div className="text-[10px] font-medium text-gray-800">DOSH</div>
                                        <div className="text-[10px] font-medium text-[#8D6E63]">Investments</div>
                                    </div>
                                </div>

                                {/* Bottom Section */}
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-[12px] text-[#8D6E63] font-semibold">GHS0.00</span>
                                        <span className="text-[8px] text-gray-500">+3.23%(+GHS14.84)</span>
                                    </div>
                                    <div className="w-[30px] h-[30px] rounded-full bg-blue-50 flex items-center justify-center">
                                        <BsArrowUpRightCircle className="text-[#718EBF]" />
                                    </div>
                                </div>
                            </div>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className=" p-6 bg-gray-900 text-white w-[840px] h-[365px] rounded-lg shadow-lg mx-4">
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center space-x-2">
                                    <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                                    <span>Profits</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
                                    <span>Cash bond</span>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span>From</span>
                                <select
                                    className="bg-gray-800 text-white p-2 rounded border border-gray-600"
                                    defaultValue="20 June"
                                >
                                    <option value="20 June">20 June</option>
                                    <option value="21 June">21 June</option>
                                    <option value="22 June">22 June</option>
                                </select>
                                <span>To</span>
                                <select
                                    className="bg-gray-800 text-white p-2 rounded border border-gray-600"
                                    defaultValue="20 July"
                                >
                                    <option value="20 July">20 July</option>
                                    <option value="21 July">21 July</option>
                                    <option value="22 July">22 July</option>
                                </select>
                            </div>
                        </div>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={data}>
                                {/* Add the Cartesian grid */}
                                <CartesianGrid stroke="#444" />
                                <XAxis
                                    dataKey="date"
                                    stroke="#ccc"
                                    tick={{ fill: "#ccc" }}
                                    tickLine={false}
                                />
                                <YAxis
                                    stroke="#ccc"
                                    tick={{ fill: "#ccc" }}
                                    tickLine={false}
                                    domain={[80, 140]}
                                />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: "#222",
                                        border: "none",
                                        borderRadius: "8px",
                                    }}
                                    labelStyle={{ color: "#fff" }}
                                />
                                {/* Cash Bond Background */}
                                <Area
                                    type="monotone"
                                    dataKey="cashBond"
                                    stroke="none"
                                    fill="rgba(156, 129, 100, 0.2)" // Semi-transparent brownish color for Cash Bond
                                />
                                {/* Profits Line */}
                                <Line
                                    type="monotone"
                                    dataKey="profits"
                                    stroke="#FFD700"
                                    strokeWidth={3}
                                    dot={{ r: 4, fill: "#FFD700" }}
                                />
                                {/* Cash Bond Line */}
                                <Line
                                    type="monotone"
                                    dataKey="cashBond"
                                    stroke="#9C8164"
                                    strokeWidth={3}
                                    dot={{ r: 4, fill: "#9C8164" }}
                                />
                            </LineChart>
                        </ResponsiveContainer>

                    </div>
                </div>
            </div>

            <div className='w-[350px] h-[808px]'>
                <TradingChart />
            </div>

        </div>
    );
}