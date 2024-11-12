import referprofile from "../images/dashboard/referprofile.png"
import referbg from "../images/dashboard/referbg.png"
import { Share2 } from 'lucide-react';
import './Sidebar.css';



const ReferralPopup = ({ onClose }) => (


    <div className="fixed inset-0 flex items-center justify-center rounded-[25px] bg-black bg-opacity-50 z-50">
        <div
            className="relative bg-cover bg-center w-[386px] h-[440px] p-6 rounded-[25px]"
            style={{
                backgroundImage: `url(${referbg})`,
                borderImageSource: 'linear-gradient(135.59deg, rgba(88, 130, 193, 0.49) 1.28%, rgba(88, 130, 193, 0.11) 96.26%)',
            }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-60 rounded-[25px]"></div>
            <button className="absolute top-4 right-4 text-white text-[32px] font-bold" onClick={onClose}>
                &times;
            </button>
            <div className="relative z-10 mt-16">
                <img src={referprofile} alt="Referral" className="mx-auto mb-4 w-[120px] h-[120px]" />
                <p className="text-center text-gray-100 mb-4">Ask your friends to sign up with your referral code and make an initial payment. Once done, both you and your friends each earn.</p>
                <div className="flex gap-1 justify-center items-center">
                    <div className="newglass py-2 px-4 rounded-lg flex gap-1 items-center justify-between w-full">
                        <span className="text-white">DOSH7689004</span>
                        <button className="text-white px-2 py-1 rounded-lg">Copy</button>
                    </div>
                    <button className="bg-[#A2865F] text-white px-2 py-1 rounded-lg flex items-center space-x-1">
                        <Share2 size={16} />
                        <span>Share</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
);

export default ReferralPopup
