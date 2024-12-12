import React from 'react';

const Circle = ({ usedAmount = 500, totalAmount = 1000 }) => {
    const progress = 50; // Fixed at 50% to fill half the circle
    const strokeWidth = 8; // Reduced stroke width
    const radius = 45; // Reduced radius to fit in smaller space
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = `${circumference} ${circumference}`;
    const strokeDashoffset = ((100 - progress) / 100) * circumference;

    return (
        <div className="p-4 rounded-3xl lg:w-[230px] w-[150px] lg:h-[230px] h-[150px]
        flex flex-col items-center justify-between">
            <div className="relative lg:w-40 lg: w-32 h-32 lg:h-40">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                        cx="50"
                        cy="50"
                        r={radius}
                        fill="none"
                        stroke="#1e293b"
                        strokeWidth={strokeWidth}
                        strokeDasharray={strokeDasharray}
                    />
                    <circle
                        cx="50"
                        cy="50"
                        r={radius}
                        fill="none"
                        stroke="#A2865F" // Yellow color for the stroke
                        strokeWidth={strokeWidth}
                        strokeDasharray={strokeDasharray}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                    />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <span className="lg:text-lg text-[12px] font-semibold">Total Cover</span>
                    <span className="lg:text-xs text-[8px] text-gray-400">Available Balance</span>
                </div>
            </div>
            <div className="text-center mt-2">
                <p className="lg:text-green-500 text-white font-semibold lg:text-[12px] text-[8px]">USED</p>
                <p className="text-green-500 lg:text-base text-[8px] font-bold">
                    GHS {usedAmount.toFixed(3)}
                </p>
                <p className="text-green-500 lg:text-xs text-[8px]">
                    OUT OF GHS {totalAmount.toFixed(3)}
                </p>
            </div>
        </div>
    );
};

export default Circle;
