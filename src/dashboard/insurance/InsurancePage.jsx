import React from 'react';
// import AccurateGlassEffectCard from './AccurateGlassEffectCard';
import './InsurancePage.css'
import { IoWallet } from "react-icons/io5";
import glasscard from "../../images/dashboard/glasscard.png"
import { FaAmbulance, FaTags, FaWallet, FaEye } from "react-icons/fa";
import { RiArrowRightDownLine, RiArrowRightUpLine } from "react-icons/ri";
import { BsCurrencyDollar } from "react-icons/bs";
import { ChevronRight } from 'lucide-react';

import profile from "../../images/dashboard/profilepic.png"



const InsurancePage = () => {

    return (
        <div className="relative min-h-screen overflow-auto">

            {/* Background Glass Effect */}
            <div className=" min-h-screen">

                <div className=" min-h-screen">
                    <section className="absolute top-[12px] left-[1px] z-20 p-6">
                        <div className='w-[174px] h-[280px] ml-10 bg-black rounded-md flex items-center justify-center'>
                            <div className='w-[165px] h-[256px] bg-black rounded-[9px] p-1 border border-t-4 border-gray-500 border-opacity-50 shadow-lg'>

                                <div className='relative'>
                                    <img src={profile} alt='profile' className='object-cover' loading='lazy' />
                                    <div className='absolute inset-0 flex w-full h-[20px] justify-between'>
                                        <p className='text-white text-[10px] opacity-0'>Profile</p>
                                        <div className='w-[54px] h-[18px] flex gap-1 items-center bg-[#A2865F] justify-center rounded-lg cursor-pointer'>
                                            <span className='text-white text-[4px]'>View Details</span>
                                            <ChevronRight size={10} className='text-white' />
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <span className='text-white text-[12px]'>Jerry Sam</span>
                                    <span className='text-white opacity-50 text-[12px]'>Account Status</span>
                                    <div className='bg-[#A2865F] rounded-lg p-1'>
                                        <span className='text-[7px] leading-[11px] font-semibold text-white'>DOSH 365 Premium</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className='relative'>
                        <img src={glasscard} alt='glasscard' className="inset-0 w-full h-full" />
                        <div className='absolute top-[50px] left-[270px] z-20 w-[258px] h-[258px] bg-black rounded-[30px] flex flex-col items-center'>
                            <div className='main_box'>
                                <div className='outter_circle'>
                                    <div className='inner_circle'>
                                        <div id='text'>
                                            <h2 className='text-white text-[14px]'>Total Cover</h2>
                                            <small className='text-[#7B78AA] text-[10px]'>Available Balance</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='py-5'>
                                <p className='text-white'>USED</p>
                            </div>
                        </div>

                        <div className='absolute top-[50px] left-[550px] z-20 w-[700px] h-[258px] flex flex-col gap-[20px] items-center justify-center'>
                            <div className='flex gap-[40px]'>
                                <div className='w-[297px] h-[80px] flex rounded-[20px] items-center justify-center'
                                    style={{ background: 'linear-gradient(126.97deg, rgba(20, 23, 24, 0.74) 28.26%, #141718 91.2%)' }}>
                                    <div className='w-[200px] h-[70px] mb-4 flex flex-col gap-5'>
                                        <small className='text-[#A0AEC0] w-[63px] h-[12px] font-bold'>Inpatient</small>
                                        <div className='w-[168px] h-[44px]'>
                                            <div className='flex items-center justify-between'>
                                                <p className='text-white text-[14px] font-semibold leading-5'>Used</p>
                                                <span className='text-[#01B574] text-[14px] font-semibold leading-5'>GHS 0.00</span>
                                            </div>
                                            <div className='flex items-center justify-between'>
                                                <p className='text-white text-[14px] font-semibold leading-5'>Out of</p>
                                                <span className='text-[#01B574] text-[14px] font-semibold leading-5'>GHS 60.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-[45px] h-[45px] rounded-[12px] flex items-center justify-center bg-[#FF3300]'>
                                        <IoWallet size={24} className='text-white' />
                                    </div>
                                </div>
                                <div className='w-[297px] h-[80px] flex rounded-[20px] items-center justify-center'
                                    style={{ background: 'linear-gradient(126.97deg, rgba(20, 23, 24, 0.74) 28.26%, #141718 91.2%)' }}>
                                    <div className='w-[200px] h-[70px] mb-4 flex flex-col gap-5'>
                                        <small className='text-[#A0AEC0] w-[63px] h-[12px] font-bold'>Medication</small>
                                        <div className='w-[168px] h-[44px]'>
                                            <div className='flex items-center justify-between'>
                                                <p className='text-white text-[14px] font-semibold leading-5'>Used</p>
                                                <span className='text-[#01B574] text-[14px] font-semibold leading-5'>GHS 0.00</span>
                                            </div>
                                            <div className='flex items-center justify-between'>
                                                <p className='text-white text-[14px] font-semibold leading-5'>Out of</p>
                                                <span className='text-[#01B574] text-[14px] font-semibold leading-5'>GHS 60.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-[45px] h-[45px] rounded-[12px] flex items-center justify-center bg-[#0099CC]'>
                                        <IoWallet size={24} className='text-white' />
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-[40px]">
                                <div className='w-[297px] h-[80px] flex rounded-[20px] items-center justify-center'
                                    style={{ background: 'linear-gradient(126.97deg, rgba(20, 23, 24, 0.74) 28.26%, #141718 91.2%)' }}>
                                    <div className='w-[200px] h-[70px] mb-4 flex flex-col gap-5'>
                                        <small className='text-[#A0AEC0] w-[91px] h-[12px] font-bold'>Out Patient</small>
                                        <div className='w-[168px] h-[44px]'>
                                            <div className='flex items-center justify-between'>
                                                <p className='text-white text-[14px] font-semibold leading-5'>Used</p>
                                                <span className='text-[#01B574] text-[14px] font-semibold leading-5'>GHS 0.00</span>
                                            </div>
                                            <div className='flex items-center justify-between'>
                                                <p className='text-white text-[14px] font-semibold leading-5'>Out of</p>
                                                <span className='text-[#01B574] text-[14px] font-semibold leading-5'>GHS 60.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-[45px] h-[45px] rounded-[12px] flex items-center justify-center bg-[#FF9933]'>
                                        <IoWallet size={24} className='text-white' />
                                    </div>
                                </div>
                                <div className='w-[297px] h-[80px] flex rounded-[20px] items-center justify-center'
                                    style={{ background: 'linear-gradient(126.97deg, rgba(20, 23, 24, 0.74) 28.26%, #141718 91.2%)' }}>
                                    <div className='w-[200px] h-[70px] mb-4 flex flex-col gap-5'>
                                        <small className='text-[#A0AEC0] w-[63px] h-[12px] font-bold'>Test</small>
                                        <div className='w-[168px] h-[44px]'>
                                            <div className='flex items-center justify-between'>
                                                <p className='text-white text-[14px] font-semibold leading-5'>Used</p>
                                                <span className='text-[#01B574] text-[14px] font-semibold leading-5'>GHS 0.00</span>
                                            </div>
                                            <div className='flex items-center justify-between'>
                                                <p className='text-white text-[14px] font-semibold leading-5'>Out of</p>
                                                <span className='text-[#01B574] text-[14px] font-semibold leading-5'>GHS 60.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-[45px] h-[45px] rounded-[12px] flex items-center justify-center bg-[#339933]'>
                                        <IoWallet size={24} className='text-white' />
                                    </div>
                                </div>
                            </div>

                            <div className="absolute w-[800px] ">
                            </div>
                        </div>
                        <div className="absolute top-[350px] left-[350px] z-20 w-[800px] h-[1px] border border-solid bg-gradient-to-r from-[rgba(255,255,255,0.1)] via-[#979797] to-[rgba(255,255,255,0.1)]"></div>

                        <div className="absolute top-[400px] left-[60px] z-20 w-[1150px] h-[498px]">
                            <div className='flex flex-col gap-[30px]'>
                                <div className='flex flex-row gap-[30px]'>
                                    <div className='bg-black bg-opacity-70 w-[267px] h-[144px] rounded-[16px] border border-gray-500 flex items-center justify-center'>
                                        <div className='w-[219px] h-[96px]'>
                                            <div className='flex justify-between'>
                                                <p className='text-[18px] font-medium text-white'>Ambulance Service</p>
                                                <div className='w-[40px] h-[40px] rounded-full bg-[#343839] bg-opacity-70 flex items-center justify-center'>
                                                    <FaAmbulance size={20} className='text-[#0099CC]' />
                                                </div>
                                            </div>
                                            <div className='w-[200px] h-[50px]'>
                                                <div className='flex gap-1 items-center'>
                                                    <div className='w-[16px] h-[16px] bg-[#FF3300] bg-opacity-50 rounded-full flex items-center justify-center'>
                                                        <RiArrowRightDownLine size={8} className='text-[#FF3300]' />
                                                    </div>
                                                    <div className='flex gap-1'>
                                                        <span className='text-[16px] font-medium text-white'>USED</span>
                                                        <div className='text-[#A2865F]'>
                                                            <span className='text-[8px]'>GHS</span>
                                                            <span className='text-[16px] font-medium'>0.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='flex gap-1 items-center'>
                                                    <div className='w-[16px] h-[16px] bg-[#51cf51] bg-opacity-50 rounded-full flex items-center justify-center'>
                                                        <RiArrowRightUpLine size={8} className='text-[#339933]' />
                                                    </div>
                                                    <div className='flex gap-1'>
                                                        <span className='text-[16px] font-medium text-white'>Balance</span>
                                                        <div className='text-[#A2865F]'>
                                                            <span className='text-[8px]'>GHS</span>
                                                            <span className='text-[16px] font-medium'>500,000.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='bg-black bg-opacity-70 w-[267px] h-[144px] rounded-[16px] border border-gray-500 flex items-center justify-center'>
                                        <div className='w-[219px] h-[96px]'>
                                            <div className='flex justify-between'>
                                                <p className='text-[18px] font-medium text-white'>Cancer Care</p>
                                                <div className='w-[40px] h-[40px] rounded-full bg-[#343839] bg-opacity-70 flex items-center justify-center'>
                                                    <BsCurrencyDollar size={20} className='text-[#0099CC]' />
                                                </div>
                                            </div>
                                            <div className='w-[200px] h-[50px]'>
                                                <div className='flex gap-1 items-center'>
                                                    <div className='w-[16px] h-[16px] bg-[#FF3300] bg-opacity-50 rounded-full flex items-center justify-center'>
                                                        <RiArrowRightDownLine size={8} className='text-[#FF3300]' />
                                                    </div>
                                                    <div className='flex gap-1'>
                                                        <span className='text-[16px] font-medium text-white'>USED</span>
                                                        <div className='text-[#A2865F]'>
                                                            <span className='text-[8px]'>GHS</span>
                                                            <span className='text-[16px] font-medium'>0.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='flex gap-1 items-center'>
                                                    <div className='w-[16px] h-[16px] bg-[#51cf51] bg-opacity-50 rounded-full flex items-center justify-center'>
                                                        <RiArrowRightUpLine size={8} className='text-[#339933]' />
                                                    </div>
                                                    <div className='flex gap-1'>
                                                        <span className='text-[16px] font-medium text-white'>Balance</span>
                                                        <div className='text-[#A2865F]'>
                                                            <span className='text-[8px]'>GHS</span>
                                                            <span className='text-[16px] font-medium'>500,000.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='bg-black bg-opacity-70 w-[267px] h-[144px] rounded-[16px] border border-gray-500 flex items-center justify-center'>
                                        <div className='w-[219px] h-[96px]'>
                                            <div className='flex justify-between'>
                                                <p className='text-[18px] font-medium text-white'>Chiropractic</p>
                                                <div className='w-[40px] h-[40px] rounded-full bg-[#343839] bg-opacity-70 flex items-center justify-center'>
                                                    <FaWallet size={20} className='text-[#0099CC]' />
                                                </div>
                                            </div>
                                            <div className='w-[200px] h-[50px]'>
                                                <div className='flex gap-1 items-center'>
                                                    <div className='w-[16px] h-[16px] bg-[#FF3300] bg-opacity-50 rounded-full flex items-center justify-center'>
                                                        <RiArrowRightDownLine size={8} className='text-[#FF3300]' />
                                                    </div>
                                                    <div className='flex gap-1'>
                                                        <span className='text-[16px] font-medium text-white'>USED</span>
                                                        <div className='text-[#A2865F]'>
                                                            <span className='text-[8px]'>GHS</span>
                                                            <span className='text-[16px] font-medium'>0.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='flex gap-1 items-center'>
                                                    <div className='w-[16px] h-[16px] bg-[#51cf51] bg-opacity-50 rounded-full flex items-center justify-center'>
                                                        <RiArrowRightUpLine size={8} className='text-[#339933]' />
                                                    </div>
                                                    <div className='flex gap-1'>
                                                        <span className='text-[16px] font-medium text-white'>Balance</span>
                                                        <div className='text-[#A2865F]'>
                                                            <span className='text-[8px]'>GHS</span>
                                                            <span className='text-[16px] font-medium'>500,000.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='bg-black bg-opacity-70 w-[267px] h-[144px] rounded-[16px] border border-gray-500 flex items-center justify-center'>
                                        <div className='w-[219px] h-[96px]'>
                                            <div className='flex justify-between'>
                                                <p className='text-[18px] font-medium text-white'>Chiro.. Consultant</p>
                                                <div className='w-[40px] h-[40px] rounded-full bg-[#343839] bg-opacity-70 flex items-center justify-center'>
                                                    <FaAmbulance size={20} className='text-[#0099CC]' />
                                                </div>
                                            </div>
                                            <div className='w-[200px] h-[50px]'>
                                                <div className='flex gap-1 items-center'>
                                                    <div className='w-[16px] h-[16px] bg-[#FF3300] bg-opacity-50 rounded-full flex items-center justify-center'>
                                                        <RiArrowRightDownLine size={8} className='text-[#FF3300]' />
                                                    </div>
                                                    <div className='flex gap-1'>
                                                        <span className='text-[16px] font-medium text-white'>USED</span>
                                                        <div className='text-[#A2865F]'>
                                                            <span className='text-[8px]'>GHS</span>
                                                            <span className='text-[16px] font-medium'>0.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='flex gap-1 items-center'>
                                                    <div className='w-[16px] h-[16px] bg-[#51cf51] bg-opacity-50 rounded-full flex items-center justify-center'>
                                                        <RiArrowRightUpLine size={8} className='text-[#339933]' />
                                                    </div>
                                                    <div className='flex gap-1'>
                                                        <span className='text-[16px] font-medium text-white'>Balance</span>
                                                        <div className='text-[#A2865F]'>
                                                            <span className='text-[8px]'>GHS</span>
                                                            <span className='text-[16px] font-medium'>500,000.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-row gap-[30px]'>
                                    <div className='bg-black bg-opacity-70 w-[267px] h-[144px] rounded-[16px] border border-gray-500 flex items-center justify-center'>
                                        <div className='w-[219px] h-[96px]'>
                                            <div className='flex justify-between'>
                                                <p className='text-[18px] font-medium text-white'>Ambulance Service</p>
                                                <div className='w-[40px] h-[40px] rounded-full bg-[#343839] bg-opacity-70 flex items-center justify-center'>
                                                    <FaTags size={20} className='text-[#0099CC]' />
                                                </div>
                                            </div>
                                            <div className='w-[200px] h-[50px]'>
                                                <div className='flex gap-1 items-center'>
                                                    <div className='w-[16px] h-[16px] bg-[#FF3300] bg-opacity-50 rounded-full flex items-center justify-center'>
                                                        <RiArrowRightDownLine size={8} className='text-[#FF3300]' />
                                                    </div>
                                                    <div className='flex gap-1'>
                                                        <span className='text-[16px] font-medium text-white'>USED</span>
                                                        <div className='text-[#A2865F]'>
                                                            <span className='text-[8px]'>GHS</span>
                                                            <span className='text-[16px] font-medium'>0.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='flex gap-1 items-center'>
                                                    <div className='w-[16px] h-[16px] bg-[#51cf51] bg-opacity-50 rounded-full flex items-center justify-center'>
                                                        <RiArrowRightUpLine size={8} className='text-[#339933]' />
                                                    </div>
                                                    <div className='flex gap-1'>
                                                        <span className='text-[16px] font-medium text-white'>Balance</span>
                                                        <div className='text-[#A2865F]'>
                                                            <span className='text-[8px]'>GHS</span>
                                                            <span className='text-[16px] font-medium'>500,000.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='bg-black bg-opacity-70 w-[267px] h-[144px] rounded-[16px] border border-gray-500 flex items-center justify-center'>
                                        <div className='w-[219px] h-[96px]'>
                                            <div className='flex justify-between'>
                                                <p className='text-[18px] font-medium text-white'>Erectal Disfuction</p>
                                                <div className='w-[40px] h-[40px] rounded-full bg-[#343839] bg-opacity-70 flex items-center justify-center'>
                                                    <BsCurrencyDollar size={20} className='text-[#0099CC]' />
                                                </div>
                                            </div>
                                            <div className='w-[200px] h-[50px]'>
                                                <div className='flex gap-1 items-center'>
                                                    <div className='w-[16px] h-[16px] bg-[#FF3300] bg-opacity-50 rounded-full flex items-center justify-center'>
                                                        <RiArrowRightDownLine size={8} className='text-[#FF3300]' />
                                                    </div>
                                                    <div className='flex gap-1'>
                                                        <span className='text-[16px] font-medium text-white'>USED</span>
                                                        <div className='text-[#A2865F]'>
                                                            <span className='text-[8px]'>GHS</span>
                                                            <span className='text-[16px] font-medium'>0.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='flex gap-1 items-center'>
                                                    <div className='w-[16px] h-[16px] bg-[#51cf51] bg-opacity-50 rounded-full flex items-center justify-center'>
                                                        <RiArrowRightUpLine size={8} className='text-[#339933]' />
                                                    </div>
                                                    <div className='flex gap-1'>
                                                        <span className='text-[16px] font-medium text-white'>Balance</span>
                                                        <div className='text-[#A2865F]'>
                                                            <span className='text-[8px]'>GHS</span>
                                                            <span className='text-[16px] font-medium'>500,000.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='bg-black bg-opacity-70 w-[267px] h-[144px] rounded-[16px] border border-gray-500 flex items-center justify-center'>
                                        <div className='w-[219px] h-[96px]'>
                                            <div className='flex justify-between'>
                                                <p className='text-[18px] font-medium text-white'>Eye Care Consult...</p>
                                                <div className='w-[40px] h-[40px] rounded-full bg-[#343839] bg-opacity-70 flex items-center justify-center'>
                                                    <FaWallet size={20} className='text-[#0099CC]' />
                                                </div>
                                            </div>
                                            <div className='w-[200px] h-[50px]'>
                                                <div className='flex gap-1 items-center'>
                                                    <div className='w-[16px] h-[16px] bg-[#FF3300] bg-opacity-50 rounded-full flex items-center justify-center'>
                                                        <RiArrowRightDownLine size={8} className='text-[#FF3300]' />
                                                    </div>
                                                    <div className='flex gap-1'>
                                                        <span className='text-[16px] font-medium text-white'>USED</span>
                                                        <div className='text-[#A2865F]'>
                                                            <span className='text-[8px]'>GHS</span>
                                                            <span className='text-[16px] font-medium'>0.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='flex gap-1 items-center'>
                                                    <div className='w-[16px] h-[16px] bg-[#51cf51] bg-opacity-50 rounded-full flex items-center justify-center'>
                                                        <RiArrowRightUpLine size={8} className='text-[#339933]' />
                                                    </div>
                                                    <div className='flex gap-1'>
                                                        <span className='text-[16px] font-medium text-white'>Balance</span>
                                                        <div className='text-[#A2865F]'>
                                                            <span className='text-[8px]'>GHS</span>
                                                            <span className='text-[16px] font-medium'>500,000.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='bg-black bg-opacity-70 w-[267px] h-[144px] rounded-[16px] border border-gray-500 flex items-center justify-center'>
                                        <div className='w-[219px] h-[96px]'>
                                            <div className='flex justify-between'>
                                                <p className='text-[18px] font-medium text-white'>Eye Surgery</p>
                                                <div className='w-[40px] h-[40px] rounded-full bg-[#343839] bg-opacity-70 flex items-center justify-center'>
                                                    <FaAmbulance size={20} className='text-[#0099CC]' />
                                                </div>
                                            </div>
                                            <div className='w-[200px] h-[50px]'>
                                                <div className='flex gap-1 items-center'>
                                                    <div className='w-[16px] h-[16px] bg-[#FF3300] bg-opacity-50 rounded-full flex items-center justify-center'>
                                                        <RiArrowRightDownLine size={8} className='text-[#FF3300]' />
                                                    </div>
                                                    <div className='flex gap-1'>
                                                        <span className='text-[16px] font-medium text-white'>USED</span>
                                                        <div className='text-[#A2865F]'>
                                                            <span className='text-[8px]'>GHS</span>
                                                            <span className='text-[16px] font-medium'>0.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='flex gap-1 items-center'>
                                                    <div className='w-[16px] h-[16px] bg-[#51cf51] bg-opacity-50 rounded-full flex items-center justify-center'>
                                                        <RiArrowRightUpLine size={8} className='text-[#339933]' />
                                                    </div>
                                                    <div className='flex gap-1'>
                                                        <span className='text-[16px] font-medium text-white'>Balance</span>
                                                        <div className='text-[#A2865F]'>
                                                            <span className='text-[8px]'>GHS</span>
                                                            <span className='text-[16px] font-medium'>500,000.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-row gap-[30px]'>
                                    <div className='bg-black bg-opacity-70 w-[267px] h-[144px] rounded-[16px] border border-gray-500 flex items-center justify-center'>
                                        <div className='w-[219px] h-[96px]'>
                                            <div className='flex justify-between'>
                                                <p className='text-[18px] font-medium text-white'>GP Consultation</p>
                                                <div className='w-[40px] h-[40px] rounded-full bg-[#343839] bg-opacity-70 flex items-center justify-center'>
                                                    <FaTags size={20} className='text-[#0099CC]' />
                                                </div>
                                            </div>
                                            <div className='w-[200px] h-[50px]'>
                                                <div className='flex gap-1 items-center'>
                                                    <div className='w-[16px] h-[16px] bg-[#FF3300] bg-opacity-50 rounded-full flex items-center justify-center'>
                                                        <RiArrowRightDownLine size={8} className='text-[#FF3300]' />
                                                    </div>
                                                    <div className='flex gap-1'>
                                                        <span className='text-[16px] font-medium text-white'>USED</span>
                                                        <div className='text-[#A2865F]'>
                                                            <span className='text-[8px]'>GHS</span>
                                                            <span className='text-[16px] font-medium'>0.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='flex gap-1 items-center'>
                                                    <div className='w-[16px] h-[16px] bg-[#51cf51] bg-opacity-50 rounded-full flex items-center justify-center'>
                                                        <RiArrowRightUpLine size={8} className='text-[#339933]' />
                                                    </div>
                                                    <div className='flex gap-1'>
                                                        <span className='text-[16px] font-medium text-white'>Balance</span>
                                                        <div className='text-[#A2865F]'>
                                                            <span className='text-[8px]'>GHS</span>
                                                            <span className='text-[16px] font-medium'>500,000.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='bg-black bg-opacity-70 w-[267px] h-[144px] rounded-[16px] border border-gray-500 flex items-center justify-center'>
                                        <div className='w-[219px] h-[96px]'>
                                            <div className='flex justify-between'>
                                                <p className='text-[18px] font-medium text-white'>Hospital Accom...</p>
                                                <div className='w-[40px] h-[40px] rounded-full bg-[#343839] bg-opacity-70 flex items-center justify-center'>
                                                    <BsCurrencyDollar size={20} className='text-[#0099CC]' />
                                                </div>
                                            </div>
                                            <div className='w-[200px] h-[50px]'>
                                                <div className='flex gap-1 items-center'>
                                                    <div className='w-[16px] h-[16px] bg-[#FF3300] bg-opacity-50 rounded-full flex items-center justify-center'>
                                                        <RiArrowRightDownLine size={8} className='text-[#FF3300]' />
                                                    </div>
                                                    <div className='flex gap-1'>
                                                        <span className='text-[16px] font-medium text-white'>USED</span>
                                                        <div className='text-[#A2865F]'>
                                                            <span className='text-[8px]'>GHS</span>
                                                            <span className='text-[16px] font-medium'>0.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='flex gap-1 items-center'>
                                                    <div className='w-[16px] h-[16px] bg-[#51cf51] bg-opacity-50 rounded-full flex items-center justify-center'>
                                                        <RiArrowRightUpLine size={8} className='text-[#339933]' />
                                                    </div>
                                                    <div className='flex gap-1'>
                                                        <span className='text-[16px] font-medium text-white'>Balance</span>
                                                        <div className='text-[#A2865F]'>
                                                            <span className='text-[8px]'>GHS</span>
                                                            <span className='text-[16px] font-medium'>500,000.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='bg-black bg-opacity-70 w-[267px] h-[144px] rounded-[16px] border border-gray-500 flex items-center justify-center'>
                                        <div className='w-[219px] h-[96px]'>
                                            <div className='flex justify-between'>
                                                <p className='text-[18px] font-medium text-white'>Spectacles</p>
                                                <div className='w-[40px] h-[40px] rounded-full bg-[#343839] bg-opacity-70 flex items-center justify-center'>
                                                    <FaWallet size={20} className='text-[#0099CC]' />
                                                </div>
                                            </div>
                                            <div className='w-[200px] h-[50px]'>
                                                <div className='flex gap-1 items-center'>
                                                    <div className='w-[16px] h-[16px] bg-[#FF3300] bg-opacity-50 rounded-full flex items-center justify-center'>
                                                        <RiArrowRightDownLine size={8} className='text-[#FF3300]' />
                                                    </div>
                                                    <div className='flex gap-1'>
                                                        <span className='text-[16px] font-medium text-white'>USED</span>
                                                        <div className='text-[#A2865F]'>
                                                            <span className='text-[8px]'>GHS</span>
                                                            <span className='text-[16px] font-medium'>0.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='flex gap-1 items-center'>
                                                    <div className='w-[16px] h-[16px] bg-[#51cf51] bg-opacity-50 rounded-full flex items-center justify-center'>
                                                        <RiArrowRightUpLine size={8} className='text-[#339933]' />
                                                    </div>
                                                    <div className='flex gap-1'>
                                                        <span className='text-[16px] font-medium text-white'>Balance</span>
                                                        <div className='text-[#A2865F]'>
                                                            <span className='text-[8px]'>GHS</span>
                                                            <span className='text-[16px] font-medium'>500,000.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='bg-black bg-opacity-70 w-[267px] h-[144px] rounded-[16px] border border-gray-500 flex items-center justify-center'>
                                        <div className='w-[219px] h-[96px]'>
                                            <div className='flex justify-between'>
                                                <p className='text-[18px] font-medium text-white'>Ambulance Service</p>
                                                <div className='w-[40px] h-[40px] rounded-full bg-[#343839] bg-opacity-70 flex items-center justify-center'>
                                                    <FaEye size={20} className='text-[#0099CC]' />
                                                </div>
                                            </div>
                                            <div className='w-[200px] h-[50px]'>
                                                <div className='flex gap-1 items-center'>
                                                    <div className='w-[16px] h-[16px] bg-[#FF3300] bg-opacity-50 rounded-full flex items-center justify-center'>
                                                        <RiArrowRightDownLine size={8} className='text-[#FF3300]' />
                                                    </div>
                                                    <div className='flex gap-1'>
                                                        <span className='text-[16px] font-medium text-white'>USED</span>
                                                        <div className='text-[#A2865F]'>
                                                            <span className='text-[8px]'>GHS</span>
                                                            <span className='text-[16px] font-medium'>0.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='flex gap-1 items-center'>
                                                    <div className='w-[16px] h-[16px] bg-[#51cf51] bg-opacity-50 rounded-full flex items-center justify-center'>
                                                        <RiArrowRightUpLine size={8} className='text-[#339933]' />
                                                    </div>
                                                    <div className='flex gap-1'>
                                                        <span className='text-[16px] font-medium text-white'>Balance</span>
                                                        <div className='text-[#A2865F]'>
                                                            <span className='text-[8px]'>GHS</span>
                                                            <span className='text-[16px] font-medium'>500,000.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Additional Content */}

        </div>
    );
};

export default InsurancePage;
