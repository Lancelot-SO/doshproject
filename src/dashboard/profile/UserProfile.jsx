import React, { useState, useEffect } from 'react';
import profilebg from "../../images/dashboard/profile/profilebg.png";
import { FaUserEdit } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from 'react-scroll';
import map from "../../images/dashboard/profile/map.png"
import profilepic from "../../images/dashboard/profile/profilepic.png";

const UserProfile = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [isEditing, setIsEditing] = useState(false); // State to toggle edit mode
    const [activeTab, setActiveTab] = useState('profile'); // State to track active tab


    // Update the time every second
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(timer); // Clean up the interval on component unmount
    }, []);

    // Format the date and time as MM/DD/YYYY HH:MM AM/PM
    const formattedDateTime = `${currentTime.toLocaleDateString('en-US')} ${currentTime.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    })}`;

    const handleEditToggle = () => {
        setIsEditing(!isEditing); // Toggle editing state
        setActiveTab(isEditing ? 'profile' : 'edit'); // Toggle active tab state

    };

    return (
        <div>
            <div className="relative">
                <img src={profilebg} alt='profile' className="w-full h-auto object-cover" loading='lazy' />
                <div className="absolute inset-0 text-white p-4">
                    <div className="text-[12px]">{formattedDateTime}</div>
                </div>
                <div
                    className="absolute top-[80%] left-[1.5%] w-full max-w-[1250px] rounded-[35px] border border-white/20"
                    style={{
                        backdropFilter: 'blur(9px) saturate(100%)',
                        WebkitBackdropFilter: 'blur(9px) saturate(100%)',
                        backgroundColor: 'rgba(17, 25, 40, 0.46)',
                        height: isEditing ? 'auto' : '557px', // Adjust height based on editing state
                    }}
                >
                    <div className="h-full flex flex-col">
                        <div className='w-full h-[100px]'>
                            <div className="max-w-[1100px] mx-auto h-20 flex items-center justify-between">
                                {/* Left side - Profile info */}
                                {isEditing ? (
                                    <a href='#' className="flex items-center text-white  gap-2 text-sm" onClick={handleEditToggle}>
                                        <FiArrowLeft className="w-4 h-4 text-white " />
                                        Back
                                    </a>
                                ) : (
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/10">
                                            <img
                                                src={profilepic}
                                                alt="Profile"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h1 className="text-white text-lg font-semibold leading-tight">Jerry Sam</h1>
                                            <p className="text-gray-400 text-sm">Dosh Member</p>
                                        </div>
                                    </div>
                                )}

                                {/* Right side - Buttons container */}
                                <div className="bg-white rounded-full p-1 flex items-center gap-1">
                                    <button
                                        className={`px-4 py-1.5 rounded-full ${activeTab === 'profile' ? 'bg-[#A2875F] text-white' : 'text-[#1A1A1A]'} text-sm font-medium hover:bg-[#8F765A] transition-colors`}
                                        onClick={() => { setActiveTab('profile'); setIsEditing(false); }} // Set active tab to profile
                                    >
                                        Profile
                                    </button>
                                    <button className="px-4 py-1.5 rounded-full text-[#1A1A1A] text-sm font-medium hover:bg-gray-100 transition-colors">
                                        Reset Pin
                                    </button>
                                    <button
                                        className={`px-4 py-1.5 rounded-full ${activeTab === 'edit' ? 'bg-[#A2875F] text-white' : 'text-[#1A1A1A]'} text-sm font-medium hover:bg-[#8F765A] transition-colors`}
                                        onClick={handleEditToggle} // Toggle edit mode
                                    >
                                        Edit Profile
                                    </button>
                                </div>
                            </div>
                        </div>
                        {isEditing ? (
                            // Profile Edit Form
                            <div className="relative z-10 max-w-[900px] mx-auto mt-8 p-6">
                                <div className="bg-gray-900/30 rounded-lg p-6"
                                    style={{
                                        backdropFilter: 'blur(10px) saturate(150%)', // Increase the blur and saturation for a stronger effect
                                        WebkitBackdropFilter: 'blur(10px) saturate(150%)', // Ensure compatibility with WebKit browsers
                                        backgroundColor: 'rgba(17, 25, 40, 0.4)', // Adjust transparency for a deeper glass effect
                                        border: '1px solid rgba(255, 255, 255, 0.15)', // Optional: add a subtle border for depth
                                    }}>
                                    <h2 className="text-lg text-white font-medium mb-6 border-b border-gray-800 pb-2">Edit Profile</h2>
                                    <div className="flex gap-8">
                                        {/* Profile Picture Section */}
                                        <div className="flex-shrink-0">
                                            <div className="relative">
                                                <div className="w-[120px] h-[120px] rounded-full overflow-hidden bg-gray-800">
                                                    <img
                                                        src={profilepic}
                                                        alt="Profile"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <button
                                                    className="absolute bottom-0 right-0 rounded-full w-8 h-8 bg-[#B19470] hover:bg-[#9A815E] text-white flex items-center justify-center"
                                                >
                                                    <FaUserEdit size={20} />
                                                </button>
                                            </div>
                                        </div>
                                        {/* Form Fields */}
                                        <div className="flex-grow grid grid-cols-2 gap-4">
                                            <div className="space-y-1">
                                                <label className="text-sm text-gray-400">Your Name</label>
                                                <input
                                                    type="text"
                                                    defaultValue="Jerry Sam"
                                                    className="w-full bg-[#2A2A33] border border-gray-700 h-10 rounded-md px-3 text-white focus:outline-none focus:ring-2 focus:ring-[#B19470]"
                                                />
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-sm text-gray-400">Last Name</label>
                                                <input
                                                    type="text"
                                                    defaultValue="Jerry087541287"
                                                    className="w-full bg-[#2A2A33] border border-gray-700 h-10 rounded-md px-3 text-white focus:outline-none focus:ring-2 focus:ring-[#B19470]"
                                                />
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-sm text-gray-400">Email</label>
                                                <input
                                                    type="email"
                                                    defaultValue="jerrymclovin@gmail.com"
                                                    className="w-full bg-[#2A2A33] border border-gray-700 h-10 rounded-md px-3 text-white focus:outline-none focus:ring-2 focus:ring-[#B19470]"
                                                />
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-sm text-gray-400">Occupation</label>
                                                <input
                                                    type="text"
                                                    defaultValue="Blogger"
                                                    className="w-full bg-[#2A2A33] border border-gray-700 h-10 rounded-md px-3 text-white focus:outline-none focus:ring-2 focus:ring-[#B19470]"
                                                />
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-sm text-gray-400">Date of Birth</label>
                                                <select
                                                    defaultValue="1989-01-25"
                                                    className="w-full bg-[#2A2A33] border border-gray-700 h-10 rounded-md px-3 text-white focus:outline-none focus:ring-2 focus:ring-[#B19470]"
                                                >
                                                    <option value="1989-01-25">25 January 1989</option>
                                                </select>
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-sm text-gray-400">Mobile Number</label>
                                                <input
                                                    type="tel"
                                                    defaultValue="233244429436"
                                                    className="w-full bg-[#2A2A33] border border-gray-700 h-10 rounded-md px-3 text-white focus:outline-none focus:ring-2 focus:ring-[#B19470]"
                                                />
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-sm text-gray-400">ID Number</label>
                                                <input
                                                    type="text"
                                                    defaultValue="AG785421-987"
                                                    className="w-full bg-[#2A2A33] border border-gray-700 h-10 rounded-md px-3 text-white focus:outline-none focus:ring-2 focus:ring-[#B19470]"
                                                />
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-sm text-gray-400">ID Type</label>
                                                <input
                                                    type="text"
                                                    defaultValue="National ID"
                                                    className="w-full bg-[#2A2A33] border border-gray-700 h-10 rounded-md px-3 text-white focus:outline-none focus:ring-2 focus:ring-[#B19470]"
                                                />
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-sm text-gray-400">Country Code</label>
                                                <input
                                                    type="text"
                                                    defaultValue="+233"
                                                    className="w-full bg-[#2A2A33] border border-gray-700 h-10 rounded-md px-3 text-white focus:outline-none focus:ring-2 focus:ring-[#B19470]"
                                                />
                                            </div> <div className="space-y-1">
                                                <label className="text-sm text-gray-400">Country</label>
                                                <input
                                                    type="text"
                                                    defaultValue="Ghana"
                                                    className="w-full bg-[#2A2A33] border border-gray-700 h-10 rounded-md px-3 text-white focus:outline-none focus:ring-2 focus:ring-[#B19470]"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-end mt-4">
                                        <button
                                            className="px-4 py-2 rounded-md bg-[#B19470] text-white hover:bg-[#A2875F]"
                                        >
                                            Save Changes
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            // Profile Details
                            <div className="w-[1100px] h-auto ml-[75px] flex">
                                {/* Existing profile details code */}
                                <div className=' w-[290px] pt-8 h-full flex flex-col'>
                                    <strong className="text-white">DOSH Account: 233 209505045</strong>
                                    <span className='text-white opacity-50'>Account Status: Available<br />
                                        DOSH Score: 300</span>
                                </div>
                                <div className=' w-[125px] p-8 h-full'>
                                    <button><FaUserEdit className='text-white' /></button>
                                </div>
                                <div className=' w-[325px] h-full p-8 text-white'>
                                    <div className="space-y-2">
                                        <div>
                                            <span className="font-bold">Full Name: </span>
                                            Alex M. Thompson
                                        </div>
                                        <div>
                                            <span className="font-bold">Mobile: </span>
                                            +233 209045848
                                        </div>
                                        <div>
                                            <span className="font-bold">Email: </span>
                                            <Link to="mailto:alecthompson@mail.com">
                                                alecthompson@mail.com
                                            </Link>
                                        </div>
                                        <div>
                                            <span className="font-bold">Gender: </span>
                                            Male
                                        </div>
                                        <div>
                                            <span className="font-bold">DOB: </span>
                                            19 / 02 / 89
                                        </div>
                                    </div>
                                </div>
                                <div className=' w-[360px] p-8 h-full text-white'>
                                    <div className="space-y-2">
                                        <div>
                                            <span className="font-bold">Address Line1: </span>
                                            <span className="opacity-50">No 35 Jimmy Ebi Street</span>
                                        </div>
                                        <div>
                                            <span className="font-bold">Address Line2: </span>
                                            <span className="opacity-50">N/A</span>
                                        </div>
                                        <div>
                                            <span className="font-bold">Country:</span>
                                            <span className="opacity-50">Ghana</span>
                                        </div>
                                        <div>
                                            <span className="font-bold">Location: </span>
                                            <span className="opacity-50">Accra</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className='w-[398px] h-[250px]'>
                            <img src={map} alt='map' className='object-cover' loading='lazy' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;










