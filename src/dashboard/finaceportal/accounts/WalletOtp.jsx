import React, { useRef, useState } from "react";

export default function WalletOtp({ onOtpVerification }) {
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const [isResending, setIsResending] = useState(false);
    const [provider, setProvider] = useState("visa");
    const [showAddWalletForm, setShowAddWalletForm] = useState(false);

    const inputRefs = useRef([]);

    const handleChange = (element, index) => {
        if (isNaN(Number(element.value))) return;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        // Focus next input
        if (element.value !== "") {
            if (index < 5) {
                inputRefs.current[index + 1]?.focus();
            }
        }
    };



    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && otp[index] === "" && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleResendOtp = async () => {
        setIsResending(true);
        // Simulate OTP resend
        setTimeout(() => {
            setIsResending(false);
        }, 2000);
    };

    const handleVerify = () => {
        onOtpVerification(true);
        if (!otp.includes("")) {
            setShowAddWalletForm(true);
        }
    };

    return (
        <div className="w-full max-w-sm p-4 rounded-2xl">
            {!showAddWalletForm ? (
                <div className="space-y-4">
                    <div className="space-y-1">
                        <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                            <span className="text-xl">+</span> Add Wallet
                        </h3>
                        <p className="text-sm text-slate-400">Enter the OTP to add wallet</p>
                    </div>

                    <div className="flex justify-between gap-1">
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                type="text"
                                inputMode="numeric"
                                ref={(el) => (inputRefs.current[index] = el)}
                                value={digit}
                                maxLength={1}
                                onChange={(e) => handleChange(e.target, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                className="w-10 h-10 text-center bg-transparent border-2 border-slate-600 rounded-lg text-white text-lg focus:outline-none focus:border-slate-400"
                            />
                        ))}
                    </div>

                    <button
                        onClick={handleResendOtp}
                        disabled={isResending}
                        className="w-full text-center text-xs focus:outline-none"
                    >
                        <span className="text-slate-400">Didn't receive? </span>
                        <span className="text-[#A2875F] transition-colors">
                            {isResending ? "SENDING..." : "RESEND OTP"}
                        </span>
                    </button>

                    <button
                        onClick={handleVerify}
                        className={`w-full bg-[#A2875F] text-white font-medium py-1.5 rounded-full transition-all duration-300 ease-in-out ${otp.includes("") ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                        disabled={otp.includes("")}
                    >
                        Verify
                    </button>
                </div>
            ) : (
                // Add Wallet Form
                <div className="p-6 ">
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h3 className="text-xl font-medium text-white flex items-center gap-2">
                                <span className="text-2xl">+</span> Add Wallet
                            </h3>
                            <p className="text-sm text-white/60">Add your Momo/credit card</p>
                        </div>

                        <div className="space-y-4">
                            <div className="relative">
                                <select
                                    value={provider}
                                    onChange={(e) => setProvider(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-300"
                                >
                                    <option value="visa" className="bg-black text-white">
                                        Visa Card
                                    </option>
                                    <option value="mastercard" className="bg-black text-white">
                                        Mastercard
                                    </option>
                                    <option value="momo" className="bg-black text-white">
                                        Momo
                                    </option>
                                </select>
                            </div>

                            <input
                                placeholder="Card number"
                                className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/60 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-300"
                            />
                            <input
                                placeholder="Card holder name"
                                className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/60 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-300"
                            />
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    placeholder="12/06/24"
                                    className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/60 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-300"
                                />
                                <input
                                    placeholder="Security Code"
                                    type="password"
                                    className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/60 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-300"
                                />
                            </div>
                        </div>

                        <button className="w-full bg-[#A2875F] text-white py-2 rounded-md focus:outline-none">
                            Save
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
