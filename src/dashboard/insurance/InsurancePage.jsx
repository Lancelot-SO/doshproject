import React from 'react';
// import AccurateGlassEffectCard from './AccurateGlassEffectCard';
import './InsurancePage.css'
import { IoWallet } from "react-icons/io5";
import glasscard from "../../images/dashboard/glasscard.png"
import mobileglasscard from "../../images/dashboard/mobileglassbg.png"
import { FaAmbulance, FaWallet } from "react-icons/fa";
import { RiArrowRightDownLine, RiArrowRightUpLine } from "react-icons/ri";
import { BsCurrencyDollar } from "react-icons/bs";
import { ChevronRight } from 'lucide-react';

import profile from "../../images/dashboard/profilepic.png"
import Circle from '../Circle';



const InsurancePage = () => {

    return (
        <div className="relative h-screen lg:overflow-scroll overflow-x-hidden no-scrollbar">

            {/* Background Glass Effect */}
            <div className="min-h-screen">

                <div className=" min-h-screen">
                    <section className="absolute lg:top-[4px] top-16 lg:left-[1px] left-0 z-20 p-6">
                        <div className='lg:w-[174px] w-[150px] lg:h-[280px] h-[100px] lg:ml-10 ml-0 bg-black rounded-md flex items-center justify-center'>
                            <div className='w-[165px] h-[256px] bg-black rounded-[9px] p-1 border border-t-4 border-gray-500 border-opacity-50 shadow-lg'>
                                <div className='relative'>
                                    <img src={profile} alt='profile' className='object-cover' loading='lazy' />
                                    <div className='absolute inset-0 flex w-full h-[20px] justify-between'>
                                        <p className='text-white text-[10px] opacity-0'>Profile</p>
                                        <div className='w-[54px] h-[18px] flex gap-1 items-center bg-[#A2865F] justify-center rounded-lg cursor-pointer'>
                                            <span className='text-white text-[6px]'>View Details</span>
                                            <ChevronRight size={10} className='text-white' />
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-center justify-center mt-4 lg:mt-0'>
                                    <span className='text-white text-[12px]'>Jerry Sam</span>
                                    <span className='text-white opacity-50 text-[12px] mt-2'>Account Status</span>
                                    <div className='bg-[#A2865F] rounded-lg p-1 mt-4'>
                                        <span className='text-[7px] leading-[11px] font-semibold text-white'>DOSH 365 Premium</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className='relative'>
                        <img src={glasscard} alt='glasscard' className="hidden lg:block inset-0 w-full h-full" />
                        <img src={mobileglasscard} alt='glasscard' className="hidden inset-0 w-full h-full" />
                        <div
                            className='absolute lg:top-[50px] top-5 lg:left-[270px] left-[180px] z-20 
             lg:w-[258px] w-[200px] h-[250px] bg-black rounded-[30px] 
             flex flex-col items-center 
             smallS8:w-[160px] smallS8:h-[250px]'>
                            <Circle usedAmount={500} totalAmount={1000} />
                        </div>


                        <div className='absolute lg:top-[50px] top-[250px] left-[2px] lg:left-[550px] z-20 lg:w-[700px] w-full h-[258px] flex flex-col gap-[20px] lg:items-center items-start justify-center'>
                            <div className='flex lg:gap-[40px] smallS8:pl-4 gap-2'>
                                <div
                                    className='lg:w-[297px] w-[200px] h-[80px] smallS8:w-[160px] smallS8:h-[70px] 
                                              flex rounded-[20px] gap-1 items-center justify-center'
                                    style={{ background: 'linear-gradient(126.97deg, rgba(20, 23, 24, 0.74) 28.26%, #141718 91.2%)' }}>

                                    <div
                                        className='lg:w-[200px] w-[120px] h-[70px] smallS8:w-[110px] smallS8:h-[50px] 
                                                  mb-4 flex flex-col gap-5 smallS8:gap-3 py-1 smallS8:mb-2'>

                                        <small
                                            className='text-[#A0AEC0] w-[63px] h-[12px] font-bold lg:text-sm text-[12px] smallS8:w-[50px] 
                                                    smallS8:h-[10px] smallS8:text-[10px]'>
                                            Inpatient
                                        </small>

                                        <div className='lg:w-[168px] w-full lg:h-[44px] smallS8:w-[100px] smallS8:h-[30px]'>
                                            <div className='flex items-center justify-between'>
                                                <p
                                                    className='text-white text-[14px] font-semibold leading-5 sm:text-[12px] 
                     smallS8:text-[10px] smallS8:leading-4'>
                                                    Used
                                                </p>
                                                <span
                                                    className='text-[#01B574] text-[14px] font-semibold leading-5 sm:text-[12px] 
                     smallS8:text-[10px] smallS8:leading-4'>
                                                    GHS 0.00
                                                </span>
                                            </div>
                                            <div className='flex items-center justify-between'>
                                                <p
                                                    className='text-white text-[14px] font-semibold leading-5 sm:text-[12px] 
                     smallS8:text-[10px] smallS8:leading-4'>
                                                    Out of
                                                </p>
                                                <span
                                                    className='text-[#01B574] text-[14px] font-semibold leading-5 sm:text-[12px] 
                     smallS8:text-[10px] smallS8:leading-4'>
                                                    GHS 60.00
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className='w-[45px] h-[45px] smallS8:w-[30px] smallS8:h-[30px] rounded-[12px] 
               smallS8:rounded-[8px] flex items-center justify-center bg-[#FF3300]'>
                                        <IoWallet
                                            className='text-white w-5 h-5 lg:w-7 lg:h-7 smallS8:w-4 smallS8:h-4' />
                                    </div>
                                </div>


                                <div
                                    className='lg:w-[297px] w-[200px] h-[80px] smallS8:w-[160px] smallS8:h-[70px] 
                                              flex rounded-[20px] gap-1 items-center justify-center'
                                    style={{ background: 'linear-gradient(126.97deg, rgba(20, 23, 24, 0.74) 28.26%, #141718 91.2%)' }}>

                                    <div
                                        className='lg:w-[200px] w-[120px] h-[70px] smallS8:w-[110px] smallS8:h-[50px] 
                                                  mb-4 flex flex-col gap-5 smallS8:gap-3 py-1 smallS8:mb-2'>

                                        <small
                                            className='text-[#A0AEC0] w-[63px] h-[12px] font-bold lg:text-sm text-[12px] smallS8:w-[50px] 
                                                    smallS8:h-[10px] smallS8:text-[10px]'>
                                            Medication
                                        </small>

                                        <div className='lg:w-[168px] w-full lg:h-[44px] smallS8:w-[100px] smallS8:h-[30px]'>
                                            <div className='flex items-center justify-between'>
                                                <p
                                                    className='text-white text-[14px] font-semibold leading-5 sm:text-[12px] 
                     smallS8:text-[10px] smallS8:leading-4'>
                                                    Used
                                                </p>
                                                <span
                                                    className='text-[#01B574] text-[14px] font-semibold leading-5 sm:text-[12px] 
                     smallS8:text-[10px] smallS8:leading-4'>
                                                    GHS 0.00
                                                </span>
                                            </div>
                                            <div className='flex items-center justify-between'>
                                                <p
                                                    className='text-white text-[14px] font-semibold leading-5 sm:text-[12px] 
                     smallS8:text-[10px] smallS8:leading-4'>
                                                    Out of
                                                </p>
                                                <span
                                                    className='text-[#01B574] text-[14px] font-semibold leading-5 sm:text-[12px] 
                     smallS8:text-[10px] smallS8:leading-4'>
                                                    GHS 60.00
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className='w-[45px] h-[45px] smallS8:w-[30px] smallS8:h-[30px] rounded-[12px] 
               smallS8:rounded-[8px] flex items-center justify-center bg-[#0099CC]'>
                                        <IoWallet
                                            className='text-white w-5 h-5 lg:w-7 lg:h-7 smallS8:w-4 smallS8:h-4' />
                                    </div>
                                </div>
                            </div>
                            <div className='flex lg:gap-[40px] smallS8:pl-4 gap-2'>
                                <div
                                    className='lg:w-[297px] w-[200px] h-[80px] smallS8:w-[160px] smallS8:h-[70px] 
                                              flex rounded-[20px] gap-1 items-center justify-center'
                                    style={{ background: 'linear-gradient(126.97deg, rgba(20, 23, 24, 0.74) 28.26%, #141718 91.2%)' }}>

                                    <div
                                        className='lg:w-[200px] w-[120px] h-[70px] smallS8:w-[110px] smallS8:h-[50px] 
                                                  mb-4 flex flex-col gap-5 smallS8:gap-3 py-1 smallS8:mb-2'>

                                        <small
                                            className='text-[#A0AEC0] w-[83px] h-[12px] font-bold lg:text-sm text-[12px] smallS8:w-[80px] 
                                                    smallS8:h-[10px] smallS8:text-[10px]'>
                                            Out Patient
                                        </small>

                                        <div className='lg:w-[168px] w-full lg:h-[44px] smallS8:w-[100px] smallS8:h-[30px]'>
                                            <div className='flex items-center justify-between'>
                                                <p
                                                    className='text-white text-[14px] font-semibold leading-5 sm:text-[12px] 
                     smallS8:text-[10px] smallS8:leading-4'>
                                                    Used
                                                </p>
                                                <span
                                                    className='text-[#01B574] text-[14px] font-semibold leading-5 sm:text-[12px] 
                     smallS8:text-[10px] smallS8:leading-4'>
                                                    GHS 0.00
                                                </span>
                                            </div>
                                            <div className='flex items-center justify-between'>
                                                <p
                                                    className='text-white text-[14px] font-semibold leading-5 sm:text-[12px] 
                     smallS8:text-[10px] smallS8:leading-4'>
                                                    Out of
                                                </p>
                                                <span
                                                    className='text-[#01B574] text-[14px] font-semibold leading-5 sm:text-[12px] 
                     smallS8:text-[10px] smallS8:leading-4'>
                                                    GHS 60.00
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className='w-[45px] h-[45px] smallS8:w-[30px] smallS8:h-[30px] rounded-[12px] 
               smallS8:rounded-[8px] flex items-center justify-center bg-[#FF9933]'>
                                        <IoWallet
                                            className='text-white w-5 h-5 lg:w-7 lg:h-7 smallS8:w-4 smallS8:h-4' />
                                    </div>
                                </div>


                                <div
                                    className='lg:w-[297px] w-[200px] h-[80px] smallS8:w-[160px] smallS8:h-[70px] 
                                              flex rounded-[20px] gap-1 items-center justify-center'
                                    style={{ background: 'linear-gradient(126.97deg, rgba(20, 23, 24, 0.74) 28.26%, #141718 91.2%)' }}>

                                    <div
                                        className='lg:w-[200px] w-[120px] h-[70px] smallS8:w-[110px] smallS8:h-[50px] 
                                                  mb-4 flex flex-col gap-5 smallS8:gap-3 py-1 smallS8:mb-2'>

                                        <small
                                            className='text-[#A0AEC0] w-[63px] h-[12px] font-bold lg:text-sm text-[12px] smallS8:w-[50px] 
                                                    smallS8:h-[10px] smallS8:text-[10px]'>
                                            Test
                                        </small>

                                        <div className='lg:w-[168px] w-full lg:h-[44px] smallS8:w-[100px] smallS8:h-[30px]'>
                                            <div className='flex items-center justify-between'>
                                                <p
                                                    className='text-white text-[14px] font-semibold leading-5 sm:text-[12px] 
                     smallS8:text-[10px] smallS8:leading-4'>
                                                    Used
                                                </p>
                                                <span
                                                    className='text-[#01B574] text-[14px] font-semibold leading-5 sm:text-[12px] 
                     smallS8:text-[10px] smallS8:leading-4'>
                                                    GHS 0.00
                                                </span>
                                            </div>
                                            <div className='flex items-center justify-between'>
                                                <p
                                                    className='text-white text-[14px] font-semibold leading-5 sm:text-[12px] 
                     smallS8:text-[10px] smallS8:leading-4'>
                                                    Out of
                                                </p>
                                                <span
                                                    className='text-[#01B574] text-[14px] font-semibold leading-5 sm:text-[12px] 
                     smallS8:text-[10px] smallS8:leading-4'>
                                                    GHS 60.00
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className='w-[45px] h-[45px] smallS8:w-[30px] smallS8:h-[30px] rounded-[12px] 
               smallS8:rounded-[8px] flex items-center justify-center bg-[#339933]'>
                                        <IoWallet
                                            className='text-white w-5 h-5 lg:w-7 lg:h-7 smallS8:w-4 smallS8:h-4' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute lg:top-[350px] top-[480px] left-5 lg:left-[350px] z-20 lg:w-[800px] w-[380px] h-[1px] border border-solid bg-gradient-to-r from-[rgba(255,255,255,0.1)] via-[#979797] to-[rgba(255,255,255,0.1)]"></div>

                        <div className="absolute lg:top-[400px] top-[500px] left-[5px] lg:left-[60px] z-20 lg:w-[1150px] w-full h-[498px]">
                            <div className='flex flex-col lg:gap-[30px] gap-5'>
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-0">
                                    {/* Ambulance Service Card */}
                                    <div
                                        className="bg-black bg-opacity-70 w-[200px] sm:w-[267px] smallS8:w-[170px] h-[120px] sm:h-[144px] smallS8:h-[130px] 
             rounded-[16px] smallS8:rounded-[12px] border border-gray-500 flex items-center justify-center smallS8:pb-6">

                                        <div className="w-[160px] sm:w-[219px] smallS8:w-[130px] h-[80px] sm:h-[96px] smallS8:h-[64px] flex flex-col justify-between">
                                            <div className="flex justify-between">
                                                <p className="text-[14px] sm:text-[18px] smallS8:text-[10px] font-medium text-white">Ambulance Service</p>
                                                <div
                                                    className="w-[30px] sm:w-[40px] smallS8:w-[24px] h-[30px] sm:h-[40px] smallS8:h-[24px] 
                   rounded-full bg-[#343839] bg-opacity-70 flex items-center justify-center">
                                                    <FaAmbulance size={16} className="sm:size-[20px] smallS8:size-[12px] text-[#0099CC]" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-1 smallS8:text-[4px]">
                                                <div className="flex gap-1 smallS8:gap-[2px] items-center">
                                                    <div
                                                        className="w-[12px] sm:w-[16px] smallS8:w-[10px] h-[12px] sm:h-[16px] smallS8:h-[10px] 
                     bg-[#FF3300] bg-opacity-50 rounded-full flex items-center justify-center">
                                                        <RiArrowRightDownLine size={6} className="sm:size-[8px] smallS8:size-[4px] text-[#FF3300]" />
                                                    </div>
                                                    <div className="flex gap-1 smallS8:gap-[2px]">
                                                        <span className="text-[12px] sm:text-[16px] smallS8:text-[10px] font-medium text-white">USED</span>
                                                        <div className="text-[#A2865F]">
                                                            <span className="text-[6px] sm:text-[8px] smallS8:text-[5px]">GHS</span>
                                                            <span className="text-[12px] sm:text-[16px] smallS8:text-[10px] font-medium">0.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex gap-1 smallS8:gap-[2px] items-center">
                                                    <div
                                                        className="w-[12px] sm:w-[16px] smallS8:w-[10px] h-[12px] sm:h-[16px] smallS8:h-[10px] 
                     bg-[#51cf51] bg-opacity-50 rounded-full flex items-center justify-center">
                                                        <RiArrowRightUpLine size={6} className="sm:size-[8px] smallS8:size-[4px] text-[#339933]" />
                                                    </div>
                                                    <div className="flex gap-1 smallS8:gap-[2px]">
                                                        <span className="text-[12px] sm:text-[16px] smallS8:text-[10px] font-medium text-white">Balance</span>
                                                        <div className="text-[#A2865F]">
                                                            <span className="text-[6px] sm:text-[8px] smallS8:text-[5px]">GHS</span>
                                                            <span className="text-[12px] sm:text-[16px] smallS8:text-[10px] font-medium">500,000.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Cancer Care Card */}
                                    <div
                                        className="bg-black bg-opacity-70 w-[200px] sm:w-[267px] smallS8:w-[170px] h-[120px] sm:h-[144px] smallS8:h-[130px] 
             rounded-[16px] smallS8:rounded-[12px] border border-gray-500 flex items-center justify-center smallS8:pb-6">

                                        <div className="w-[160px] sm:w-[219px] smallS8:w-[130px] h-[80px] sm:h-[96px] smallS8:h-[64px] flex flex-col justify-between">
                                            <div className="flex justify-between">
                                                <p className="text-[14px] sm:text-[18px] smallS8:text-[12px] font-medium text-white">Cancer Care</p>
                                                <div
                                                    className="w-[30px] sm:w-[40px] smallS8:w-[24px] h-[30px] sm:h-[40px] smallS8:h-[24px] 
                   rounded-full bg-[#343839] bg-opacity-70 flex items-center justify-center">
                                                    <FaWallet size={16} className="sm:size-[20px] smallS8:size-[12px] text-[#0099CC]" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-1 smallS8:text-[4px]">
                                                <div className="flex gap-1 smallS8:gap-[2px] items-center">
                                                    <div
                                                        className="w-[12px] sm:w-[16px] smallS8:w-[10px] h-[12px] sm:h-[16px] smallS8:h-[10px] 
                     bg-[#FF3300] bg-opacity-50 rounded-full flex items-center justify-center">
                                                        <RiArrowRightDownLine size={6} className="sm:size-[8px] smallS8:size-[4px] text-[#FF3300]" />
                                                    </div>
                                                    <div className="flex gap-1 smallS8:gap-[2px]">
                                                        <span className="text-[12px] sm:text-[16px] smallS8:text-[10px] font-medium text-white">USED</span>
                                                        <div className="text-[#A2865F]">
                                                            <span className="text-[6px] sm:text-[8px] smallS8:text-[5px]">GHS</span>
                                                            <span className="text-[12px] sm:text-[16px] smallS8:text-[10px] font-medium">0.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex gap-1 smallS8:gap-[2px] items-center">
                                                    <div
                                                        className="w-[12px] sm:w-[16px] smallS8:w-[10px] h-[12px] sm:h-[16px] smallS8:h-[10px] 
                     bg-[#51cf51] bg-opacity-50 rounded-full flex items-center justify-center">
                                                        <RiArrowRightUpLine size={6} className="sm:size-[8px] smallS8:size-[4px] text-[#339933]" />
                                                    </div>
                                                    <div className="flex gap-1 smallS8:gap-[2px]">
                                                        <span className="text-[12px] sm:text-[16px] smallS8:text-[10px] font-medium text-white">Balance</span>
                                                        <div className="text-[#A2865F]">
                                                            <span className="text-[6px] sm:text-[8px] smallS8:text-[5px]">GHS</span>
                                                            <span className="text-[12px] sm:text-[16px] smallS8:text-[10px] font-medium">500,000.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Chiropractic Care Card */}
                                    <div
                                        className="bg-black bg-opacity-70 w-[200px] sm:w-[267px] smallS8:w-[170px] h-[120px] sm:h-[144px] smallS8:h-[130px] 
             rounded-[16px] smallS8:rounded-[12px] border border-gray-500 flex items-center justify-center smallS8:pb-6">

                                        <div className="w-[160px] sm:w-[219px] smallS8:w-[130px] h-[80px] sm:h-[96px] smallS8:h-[64px] flex flex-col justify-between">
                                            <div className="flex justify-between">
                                                <p className="text-[14px] sm:text-[18px] smallS8:text-[12px] font-medium text-white">Chiropractic</p>
                                                <div
                                                    className="w-[30px] sm:w-[40px] smallS8:w-[24px] h-[30px] sm:h-[40px] smallS8:h-[24px] 
                   rounded-full bg-[#343839] bg-opacity-70 flex items-center justify-center">
                                                    <FaWallet size={16} className="sm:size-[20px] smallS8:size-[12px] text-[#0099CC]" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-1 smallS8:text-[4px]">
                                                <div className="flex gap-1 smallS8:gap-[2px] items-center">
                                                    <div
                                                        className="w-[12px] sm:w-[16px] smallS8:w-[10px] h-[12px] sm:h-[16px] smallS8:h-[10px] 
                     bg-[#FF3300] bg-opacity-50 rounded-full flex items-center justify-center">
                                                        <RiArrowRightDownLine size={6} className="sm:size-[8px] smallS8:size-[4px] text-[#FF3300]" />
                                                    </div>
                                                    <div className="flex gap-1 smallS8:gap-[2px]">
                                                        <span className="text-[12px] sm:text-[16px] smallS8:text-[10px] font-medium text-white">USED</span>
                                                        <div className="text-[#A2865F]">
                                                            <span className="text-[6px] sm:text-[8px] smallS8:text-[5px]">GHS</span>
                                                            <span className="text-[12px] sm:text-[16px] smallS8:text-[10px] font-medium">0.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex gap-1 smallS8:gap-[2px] items-center">
                                                    <div
                                                        className="w-[12px] sm:w-[16px] smallS8:w-[10px] h-[12px] sm:h-[16px] smallS8:h-[10px] 
                     bg-[#51cf51] bg-opacity-50 rounded-full flex items-center justify-center">
                                                        <RiArrowRightUpLine size={6} className="sm:size-[8px] smallS8:size-[4px] text-[#339933]" />
                                                    </div>
                                                    <div className="flex gap-1 smallS8:gap-[2px]">
                                                        <span className="text-[12px] sm:text-[16px] smallS8:text-[10px] font-medium text-white">Balance</span>
                                                        <div className="text-[#A2865F]">
                                                            <span className="text-[6px] sm:text-[8px] smallS8:text-[5px]">GHS</span>
                                                            <span className="text-[12px] sm:text-[16px] smallS8:text-[10px] font-medium">500,000.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Mental Health Card */}
                                    <div
                                        className="bg-black bg-opacity-70 w-[200px] sm:w-[267px] smallS8:w-[170px] h-[120px] sm:h-[144px] smallS8:h-[130px] 
             rounded-[16px] smallS8:rounded-[12px] border border-gray-500 flex items-center justify-center smallS8:pb-6">

                                        <div className="w-[160px] sm:w-[219px] smallS8:w-[130px] h-[80px] sm:h-[96px] smallS8:h-[64px] flex flex-col justify-between">
                                            <div className="flex justify-between">
                                                <p className="text-[14px] sm:text-[18px] smallS8:text-[12px] font-medium text-white">Menthal Health</p>
                                                <div
                                                    className="w-[30px] sm:w-[40px] smallS8:w-[24px] h-[30px] sm:h-[40px] smallS8:h-[24px] 
                   rounded-full bg-[#343839] bg-opacity-70 flex items-center justify-center">
                                                    <FaAmbulance size={16} className="sm:size-[20px] smallS8:size-[12px] text-[#0099CC]" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-1 smallS8:text-[4px]">
                                                <div className="flex gap-1 smallS8:gap-[2px] items-center">
                                                    <div
                                                        className="w-[12px] sm:w-[16px] smallS8:w-[10px] h-[12px] sm:h-[16px] smallS8:h-[10px] 
                     bg-[#FF3300] bg-opacity-50 rounded-full flex items-center justify-center">
                                                        <RiArrowRightDownLine size={6} className="sm:size-[8px] smallS8:size-[4px] text-[#FF3300]" />
                                                    </div>
                                                    <div className="flex gap-1 smallS8:gap-[2px]">
                                                        <span className="text-[12px] sm:text-[16px] smallS8:text-[10px] font-medium text-white">USED</span>
                                                        <div className="text-[#A2865F]">
                                                            <span className="text-[6px] sm:text-[8px] smallS8:text-[5px]">GHS</span>
                                                            <span className="text-[12px] sm:text-[16px] smallS8:text-[10px] font-medium">0.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex gap-1 smallS8:gap-[2px] items-center">
                                                    <div
                                                        className="w-[12px] sm:w-[16px] smallS8:w-[10px] h-[12px] sm:h-[16px] smallS8:h-[10px] 
                     bg-[#51cf51] bg-opacity-50 rounded-full flex items-center justify-center">
                                                        <RiArrowRightUpLine size={6} className="sm:size-[8px] smallS8:size-[4px] text-[#339933]" />
                                                    </div>
                                                    <div className="flex gap-1 smallS8:gap-[2px]">
                                                        <span className="text-[12px] sm:text-[16px] smallS8:text-[10px] font-medium text-white">Balance</span>
                                                        <div className="text-[#A2865F]">
                                                            <span className="text-[6px] sm:text-[8px] smallS8:text-[5px]">GHS</span>
                                                            <span className="text-[12px] sm:text-[16px] smallS8:text-[10px] font-medium">500,000.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-0">
                                    {/* Ambulance Service Card */}
                                    <div
                                        className="bg-black bg-opacity-70 w-[200px] sm:w-[267px] smallS8:w-[170px] h-[120px] sm:h-[144px] smallS8:h-[130px] 
             rounded-[16px] smallS8:rounded-[12px] border border-gray-500 flex items-center justify-center smallS8:pb-6">

                                        <div className="w-[160px] sm:w-[219px] smallS8:w-[130px] h-[80px] sm:h-[96px] smallS8:h-[64px] flex flex-col justify-between">
                                            <div className="flex justify-between">
                                                <p className="text-[14px] sm:text-[18px] smallS8:text-[12px] font-medium text-white">Cancer Care</p>
                                                <div
                                                    className="w-[30px] sm:w-[40px] smallS8:w-[24px] h-[30px] sm:h-[40px] smallS8:h-[24px] 
                   rounded-full bg-[#343839] bg-opacity-70 flex items-center justify-center">
                                                    <FaAmbulance size={16} className="sm:size-[20px] smallS8:size-[12px] text-[#0099CC]" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-1 smallS8:text-[4px]">
                                                <div className="flex gap-1 smallS8:gap-[2px] items-center">
                                                    <div
                                                        className="w-[12px] sm:w-[16px] smallS8:w-[10px] h-[12px] sm:h-[16px] smallS8:h-[10px] 
                     bg-[#FF3300] bg-opacity-50 rounded-full flex items-center justify-center">
                                                        <RiArrowRightDownLine size={6} className="sm:size-[8px] smallS8:size-[4px] text-[#FF3300]" />
                                                    </div>
                                                    <div className="flex gap-1 smallS8:gap-[2px]">
                                                        <span className="text-[12px] sm:text-[16px] smallS8:text-[10px] font-medium text-white">USED</span>
                                                        <div className="text-[#A2865F]">
                                                            <span className="text-[6px] sm:text-[8px] smallS8:text-[5px]">GHS</span>
                                                            <span className="text-[12px] sm:text-[16px] smallS8:text-[10px] font-medium">0.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex gap-1 smallS8:gap-[2px] items-center">
                                                    <div
                                                        className="w-[12px] sm:w-[16px] smallS8:w-[10px] h-[12px] sm:h-[16px] smallS8:h-[10px] 
                     bg-[#51cf51] bg-opacity-50 rounded-full flex items-center justify-center">
                                                        <RiArrowRightUpLine size={6} className="sm:size-[8px] smallS8:size-[4px] text-[#339933]" />
                                                    </div>
                                                    <div className="flex gap-1 smallS8:gap-[2px]">
                                                        <span className="text-[12px] sm:text-[16px] smallS8:text-[10px] font-medium text-white">Balance</span>
                                                        <div className="text-[#A2865F]">
                                                            <span className="text-[6px] sm:text-[8px] smallS8:text-[5px]">GHS</span>
                                                            <span className="text-[12px] sm:text-[16px] smallS8:text-[10px] font-medium">500,000.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Erectile Dysfunction */}
                                    <div
                                        className="bg-black bg-opacity-70 w-[200px] sm:w-[267px] smallS8:w-[170px] h-[120px] sm:h-[144px] smallS8:h-[130px] 
             rounded-[16px] smallS8:rounded-[12px] border border-gray-500 flex items-center justify-center smallS8:pb-6">

                                        <div className="w-[160px] sm:w-[219px] smallS8:w-[130px] h-[80px] sm:h-[96px] smallS8:h-[64px] flex flex-col justify-between">
                                            <div className="flex justify-between">
                                                <p className="text-[14px] sm:text-[18px] smallS8:text-[10px] font-medium text-white">Erectile Dysfunction</p>
                                                <div
                                                    className="w-[30px] sm:w-[40px] smallS8:w-[24px] h-[30px] sm:h-[40px] smallS8:h-[24px] 
                   rounded-full bg-[#343839] bg-opacity-70 flex items-center justify-center">
                                                    <BsCurrencyDollar size={16} className="sm:size-[20px] smallS8:size-[12px] text-[#0099CC]" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-1 smallS8:text-[4px]">
                                                <div className="flex gap-1 smallS8:gap-[2px] items-center">
                                                    <div
                                                        className="w-[12px] sm:w-[16px] smallS8:w-[10px] h-[12px] sm:h-[16px] smallS8:h-[10px] 
                     bg-[#FF3300] bg-opacity-50 rounded-full flex items-center justify-center">
                                                        <RiArrowRightDownLine size={6} className="sm:size-[8px] smallS8:size-[4px] text-[#FF3300]" />
                                                    </div>
                                                    <div className="flex gap-1 smallS8:gap-[2px]">
                                                        <span className="text-[12px] sm:text-[16px] smallS8:text-[10px] font-medium text-white">USED</span>
                                                        <div className="text-[#A2865F]">
                                                            <span className="text-[6px] sm:text-[8px] smallS8:text-[5px]">GHS</span>
                                                            <span className="text-[12px] sm:text-[16px] smallS8:text-[10px] font-medium">0.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex gap-1 smallS8:gap-[2px] items-center">
                                                    <div
                                                        className="w-[12px] sm:w-[16px] smallS8:w-[10px] h-[12px] sm:h-[16px] smallS8:h-[10px] 
                     bg-[#51cf51] bg-opacity-50 rounded-full flex items-center justify-center">
                                                        <RiArrowRightUpLine size={6} className="sm:size-[8px] smallS8:size-[4px] text-[#339933]" />
                                                    </div>
                                                    <div className="flex gap-1 smallS8:gap-[2px]">
                                                        <span className="text-[12px] sm:text-[16px] smallS8:text-[10px] font-medium text-white">Balance</span>
                                                        <div className="text-[#A2865F]">
                                                            <span className="text-[6px] sm:text-[8px] smallS8:text-[5px]">GHS</span>
                                                            <span className="text-[12px] sm:text-[16px] smallS8:text-[10px] font-medium">500,000.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Eye Care Consult... */}
                                    <div
                                        className="bg-black bg-opacity-70 w-[200px] sm:w-[267px] smallS8:w-[170px] h-[120px] sm:h-[144px] smallS8:h-[130px] 
             rounded-[16px] smallS8:rounded-[12px] border border-gray-500 flex items-center justify-center smallS8:pb-6">

                                        <div className="w-[160px] sm:w-[219px] smallS8:w-[130px] h-[80px] sm:h-[96px] smallS8:h-[64px] flex flex-col justify-between">
                                            <div className="flex justify-between">
                                                <p className="text-[14px] sm:text-[18px] smallS8:text-[10px] font-medium text-white">Eye Care Consult...</p>
                                                <div
                                                    className="w-[30px] sm:w-[40px] smallS8:w-[24px] h-[30px] sm:h-[40px] smallS8:h-[24px] 
                   rounded-full bg-[#343839] bg-opacity-70 flex items-center justify-center">
                                                    <FaAmbulance size={16} className="sm:size-[20px] smallS8:size-[12px] text-[#0099CC]" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-1 smallS8:text-[4px]">
                                                <div className="flex gap-1 smallS8:gap-[2px] items-center">
                                                    <div
                                                        className="w-[12px] sm:w-[16px] smallS8:w-[10px] h-[12px] sm:h-[16px] smallS8:h-[10px] 
                     bg-[#FF3300] bg-opacity-50 rounded-full flex items-center justify-center">
                                                        <RiArrowRightDownLine size={6} className="sm:size-[8px] smallS8:size-[4px] text-[#FF3300]" />
                                                    </div>
                                                    <div className="flex gap-1 smallS8:gap-[2px]">
                                                        <span className="text-[12px] sm:text-[16px] smallS8:text-[10px] font-medium text-white">USED</span>
                                                        <div className="text-[#A2865F]">
                                                            <span className="text-[6px] sm:text-[8px] smallS8:text-[5px]">GHS</span>
                                                            <span className="text-[12px] sm:text-[16px] smallS8:text-[10px] font-medium">0.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex gap-1 smallS8:gap-[2px] items-center">
                                                    <div
                                                        className="w-[12px] sm:w-[16px] smallS8:w-[10px] h-[12px] sm:h-[16px] smallS8:h-[10px] 
                     bg-[#51cf51] bg-opacity-50 rounded-full flex items-center justify-center">
                                                        <RiArrowRightUpLine size={6} className="sm:size-[8px] smallS8:size-[4px] text-[#339933]" />
                                                    </div>
                                                    <div className="flex gap-1 smallS8:gap-[2px]">
                                                        <span className="text-[12px] sm:text-[16px] smallS8:text-[10px] font-medium text-white">Balance</span>
                                                        <div className="text-[#A2865F]">
                                                            <span className="text-[6px] sm:text-[8px] smallS8:text-[5px]">GHS</span>
                                                            <span className="text-[12px] sm:text-[16px] smallS8:text-[10px] font-medium">500,000.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Eye Surgery */}
                                    <div
                                        className="bg-black bg-opacity-70 w-[200px] sm:w-[267px] smallS8:w-[170px] h-[120px] sm:h-[144px] smallS8:h-[130px] 
             rounded-[16px] smallS8:rounded-[12px] border border-gray-500 flex items-center justify-center smallS8:pb-6">

                                        <div className="w-[160px] sm:w-[219px] smallS8:w-[130px] h-[80px] sm:h-[96px] smallS8:h-[64px] flex flex-col justify-between">
                                            <div className="flex justify-between">
                                                <p className="text-[14px] sm:text-[18px] smallS8:text-[10px] font-medium text-white">Eye Surgery</p>
                                                <div
                                                    className="w-[30px] sm:w-[40px] smallS8:w-[24px] h-[30px] sm:h-[40px] smallS8:h-[24px] 
                   rounded-full bg-[#343839] bg-opacity-70 flex items-center justify-center">
                                                    <FaWallet size={16} className="sm:size-[20px] smallS8:size-[12px] text-[#0099CC]" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-1 smallS8:text-[4px]">
                                                <div className="flex gap-1 smallS8:gap-[2px] items-center">
                                                    <div
                                                        className="w-[12px] sm:w-[16px] smallS8:w-[10px] h-[12px] sm:h-[16px] smallS8:h-[10px] 
                     bg-[#FF3300] bg-opacity-50 rounded-full flex items-center justify-center">
                                                        <RiArrowRightDownLine size={6} className="sm:size-[8px] smallS8:size-[4px] text-[#FF3300]" />
                                                    </div>
                                                    <div className="flex gap-1 smallS8:gap-[2px]">
                                                        <span className="text-[12px] sm:text-[16px] smallS8:text-[10px] font-medium text-white">USED</span>
                                                        <div className="text-[#A2865F]">
                                                            <span className="text-[6px] sm:text-[8px] smallS8:text-[5px]">GHS</span>
                                                            <span className="text-[12px] sm:text-[16px] smallS8:text-[10px] font-medium">0.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex gap-1 smallS8:gap-[2px] items-center">
                                                    <div
                                                        className="w-[12px] sm:w-[16px] smallS8:w-[10px] h-[12px] sm:h-[16px] smallS8:h-[10px] 
                     bg-[#51cf51] bg-opacity-50 rounded-full flex items-center justify-center">
                                                        <RiArrowRightUpLine size={6} className="sm:size-[8px] smallS8:size-[4px] text-[#339933]" />
                                                    </div>
                                                    <div className="flex gap-1 smallS8:gap-[2px]">
                                                        <span className="text-[12px] sm:text-[16px] smallS8:text-[10px] font-medium text-white">Balance</span>
                                                        <div className="text-[#A2865F]">
                                                            <span className="text-[6px] sm:text-[8px] smallS8:text-[5px]">GHS</span>
                                                            <span className="text-[12px] sm:text-[16px] smallS8:text-[10px] font-medium">500,000.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-0">
                                    {/* GP Consultation Card */}
                                    <div
                                        className="bg-black bg-opacity-70 w-[200px] sm:w-[267px] smallS8:w-[170px] h-[120px] sm:h-[144px] smallS8:h-[130px] 
             rounded-[16px] smallS8:rounded-[12px] border border-gray-500 flex items-center justify-center smallS8:pb-6">

                                        <div className="w-[160px] sm:w-[219px] smallS8:w-[130px] h-[80px] sm:h-[96px] smallS8:h-[64px] flex flex-col justify-between">
                                            <div className="flex justify-between">
                                                <p className="text-[14px] sm:text-[18px] smallS8:text-[10px] font-medium text-white">GP Consultation</p>
                                                <div
                                                    className="w-[30px] sm:w-[40px] smallS8:w-[24px] h-[30px] sm:h-[40px] smallS8:h-[24px] 
                   rounded-full bg-[#343839] bg-opacity-70 flex items-center justify-center">
                                                    <FaAmbulance size={16} className="sm:size-[20px] smallS8:size-[12px] text-[#0099CC]" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-1 smallS8:text-[4px]">
                                                <div className="flex gap-1 smallS8:gap-[2px] items-center">
                                                    <div
                                                        className="w-[12px] sm:w-[16px] smallS8:w-[10px] h-[12px] sm:h-[16px] smallS8:h-[10px] 
                     bg-[#FF3300] bg-opacity-50 rounded-full flex items-center justify-center">
                                                        <RiArrowRightDownLine size={6} className="sm:size-[8px] smallS8:size-[4px] text-[#FF3300]" />
                                                    </div>
                                                    <div className="flex gap-1 smallS8:gap-[2px]">
                                                        <span className="text-[12px] sm:text-[16px] smallS8:text-[10px] font-medium text-white">USED</span>
                                                        <div className="text-[#A2865F]">
                                                            <span className="text-[6px] sm:text-[8px] smallS8:text-[5px]">GHS</span>
                                                            <span className="text-[12px] sm:text-[16px] smallS8:text-[10px] font-medium">0.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex gap-1 smallS8:gap-[2px] items-center">
                                                    <div
                                                        className="w-[12px] sm:w-[16px] smallS8:w-[10px] h-[12px] sm:h-[16px] smallS8:h-[10px] 
                     bg-[#51cf51] bg-opacity-50 rounded-full flex items-center justify-center">
                                                        <RiArrowRightUpLine size={6} className="sm:size-[8px] smallS8:size-[4px] text-[#339933]" />
                                                    </div>
                                                    <div className="flex gap-1 smallS8:gap-[2px]">
                                                        <span className="text-[12px] sm:text-[16px] smallS8:text-[10px] font-medium text-white">Balance</span>
                                                        <div className="text-[#A2865F]">
                                                            <span className="text-[6px] sm:text-[8px] smallS8:text-[5px]">GHS</span>
                                                            <span className="text-[12px] sm:text-[16px] smallS8:text-[10px] font-medium">500,000.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Hospital Accomm... Card */}
                                    <div
                                        className="bg-black bg-opacity-70 w-[200px] sm:w-[267px] smallS8:w-[170px] h-[120px] sm:h-[144px] smallS8:h-[130px] 
             rounded-[16px] smallS8:rounded-[12px] border border-gray-500 flex items-center justify-center smallS8:pb-6">

                                        <div className="w-[160px] sm:w-[219px] smallS8:w-[130px] h-[80px] sm:h-[96px] smallS8:h-[64px] flex flex-col justify-between">
                                            <div className="flex justify-between">
                                                <p className="text-[14px] sm:text-[18px] smallS8:text-[10px] font-medium text-white">Hospital Accomm...</p>
                                                <div
                                                    className="w-[30px] sm:w-[40px] smallS8:w-[24px] h-[30px] sm:h-[40px] smallS8:h-[24px] 
                   rounded-full bg-[#343839] bg-opacity-70 flex items-center justify-center">
                                                    <BsCurrencyDollar size={16} className="sm:size-[20px] smallS8:size-[12px] text-[#0099CC]" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-1 smallS8:text-[4px]">
                                                <div className="flex gap-1 smallS8:gap-[2px] items-center">
                                                    <div
                                                        className="w-[12px] sm:w-[16px] smallS8:w-[10px] h-[12px] sm:h-[16px] smallS8:h-[10px] 
                     bg-[#FF3300] bg-opacity-50 rounded-full flex items-center justify-center">
                                                        <RiArrowRightDownLine size={6} className="sm:size-[8px] smallS8:size-[4px] text-[#FF3300]" />
                                                    </div>
                                                    <div className="flex gap-1 smallS8:gap-[2px]">
                                                        <span className="text-[12px] sm:text-[16px] smallS8:text-[10px] font-medium text-white">USED</span>
                                                        <div className="text-[#A2865F]">
                                                            <span className="text-[6px] sm:text-[8px] smallS8:text-[5px]">GHS</span>
                                                            <span className="text-[12px] sm:text-[16px] smallS8:text-[10px] font-medium">0.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex gap-1 smallS8:gap-[2px] items-center">
                                                    <div
                                                        className="w-[12px] sm:w-[16px] smallS8:w-[10px] h-[12px] sm:h-[16px] smallS8:h-[10px] 
                     bg-[#51cf51] bg-opacity-50 rounded-full flex items-center justify-center">
                                                        <RiArrowRightUpLine size={6} className="sm:size-[8px] smallS8:size-[4px] text-[#339933]" />
                                                    </div>
                                                    <div className="flex gap-1 smallS8:gap-[2px]">
                                                        <span className="text-[12px] sm:text-[16px] smallS8:text-[10px] font-medium text-white">Balance</span>
                                                        <div className="text-[#A2865F]">
                                                            <span className="text-[6px] sm:text-[8px] smallS8:text-[5px]">GHS</span>
                                                            <span className="text-[12px] sm:text-[16px] smallS8:text-[10px] font-medium">500,000.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Spectacle Card */}
                                    <div
                                        className="bg-black bg-opacity-70 w-[200px] sm:w-[267px] smallS8:w-[170px] h-[120px] sm:h-[144px] smallS8:h-[130px] 
             rounded-[16px] smallS8:rounded-[12px] border border-gray-500 flex items-center justify-center smallS8:pb-6">

                                        <div className="w-[160px] sm:w-[219px] smallS8:w-[130px] h-[80px] sm:h-[96px] smallS8:h-[64px] flex flex-col justify-between">
                                            <div className="flex justify-between">
                                                <p className="text-[14px] sm:text-[18px] smallS8:text-[10px] font-medium text-white">Spectacle</p>
                                                <div
                                                    className="w-[30px] sm:w-[40px] smallS8:w-[24px] h-[30px] sm:h-[40px] smallS8:h-[24px] 
                   rounded-full bg-[#343839] bg-opacity-70 flex items-center justify-center">
                                                    <FaWallet size={16} className="sm:size-[20px] smallS8:size-[12px] text-[#0099CC]" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-1 smallS8:text-[4px]">
                                                <div className="flex gap-1 smallS8:gap-[2px] items-center">
                                                    <div
                                                        className="w-[12px] sm:w-[16px] smallS8:w-[10px] h-[12px] sm:h-[16px] smallS8:h-[10px] 
                     bg-[#FF3300] bg-opacity-50 rounded-full flex items-center justify-center">
                                                        <RiArrowRightDownLine size={6} className="sm:size-[8px] smallS8:size-[4px] text-[#FF3300]" />
                                                    </div>
                                                    <div className="flex gap-1 smallS8:gap-[2px]">
                                                        <span className="text-[12px] sm:text-[16px] smallS8:text-[10px] font-medium text-white">USED</span>
                                                        <div className="text-[#A2865F]">
                                                            <span className="text-[6px] sm:text-[8px] smallS8:text-[5px]">GHS</span>
                                                            <span className="text-[12px] sm:text-[16px] smallS8:text-[10px] font-medium">0.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex gap-1 smallS8:gap-[2px] items-center">
                                                    <div
                                                        className="w-[12px] sm:w-[16px] smallS8:w-[10px] h-[12px] sm:h-[16px] smallS8:h-[10px] 
                     bg-[#51cf51] bg-opacity-50 rounded-full flex items-center justify-center">
                                                        <RiArrowRightUpLine size={6} className="sm:size-[8px] smallS8:size-[4px] text-[#339933]" />
                                                    </div>
                                                    <div className="flex gap-1 smallS8:gap-[2px]">
                                                        <span className="text-[12px] sm:text-[16px] smallS8:text-[10px] font-medium text-white">Balance</span>
                                                        <div className="text-[#A2865F]">
                                                            <span className="text-[6px] sm:text-[8px] smallS8:text-[5px]">GHS</span>
                                                            <span className="text-[12px] sm:text-[16px] smallS8:text-[10px] font-medium">500,000.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Mental Health Card */}
                                    <div
                                        className="bg-black bg-opacity-70 w-[200px] sm:w-[267px] smallS8:w-[170px] h-[120px] sm:h-[144px] smallS8:h-[130px] 
             rounded-[16px] smallS8:rounded-[12px] border border-gray-500 flex items-center justify-center smallS8:pb-6">

                                        <div className="w-[160px] sm:w-[219px] smallS8:w-[130px] h-[80px] sm:h-[96px] smallS8:h-[64px] flex flex-col justify-between">
                                            <div className="flex justify-between">
                                                <p className="text-[14px] sm:text-[18px] smallS8:text-[10px] font-medium text-white">Ambuance Service</p>
                                                <div
                                                    className="w-[30px] sm:w-[40px] smallS8:w-[24px] h-[30px] sm:h-[40px] smallS8:h-[24px] 
                   rounded-full bg-[#343839] bg-opacity-70 flex items-center justify-center">
                                                    <FaAmbulance size={16} className="sm:size-[20px] smallS8:size-[12px] text-[#0099CC]" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-1 smallS8:text-[4px]">
                                                <div className="flex gap-1 smallS8:gap-[2px] items-center">
                                                    <div
                                                        className="w-[12px] sm:w-[16px] smallS8:w-[10px] h-[12px] sm:h-[16px] smallS8:h-[10px] 
                     bg-[#FF3300] bg-opacity-50 rounded-full flex items-center justify-center">
                                                        <RiArrowRightDownLine size={6} className="sm:size-[8px] smallS8:size-[4px] text-[#FF3300]" />
                                                    </div>
                                                    <div className="flex gap-1 smallS8:gap-[2px]">
                                                        <span className="text-[12px] sm:text-[16px] smallS8:text-[10px] font-medium text-white">USED</span>
                                                        <div className="text-[#A2865F]">
                                                            <span className="text-[6px] sm:text-[8px] smallS8:text-[5px]">GHS</span>
                                                            <span className="text-[12px] sm:text-[16px] smallS8:text-[10px] font-medium">0.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex gap-1 smallS8:gap-[2px] items-center">
                                                    <div
                                                        className="w-[12px] sm:w-[16px] smallS8:w-[10px] h-[12px] sm:h-[16px] smallS8:h-[10px] 
                     bg-[#51cf51] bg-opacity-50 rounded-full flex items-center justify-center">
                                                        <RiArrowRightUpLine size={6} className="sm:size-[8px] smallS8:size-[4px] text-[#339933]" />
                                                    </div>
                                                    <div className="flex gap-1 smallS8:gap-[2px]">
                                                        <span className="text-[12px] sm:text-[16px] smallS8:text-[10px] font-medium text-white">Balance</span>
                                                        <div className="text-[#A2865F]">
                                                            <span className="text-[6px] sm:text-[8px] smallS8:text-[5px]">GHS</span>
                                                            <span className="text-[12px] sm:text-[16px] smallS8:text-[10px] font-medium">500,000.00</span>
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
