import React from 'react';

const Circle = ({ usedAmount = 500, totalAmount = 1000 }) => {
    const progress = 50; // Fixed at 50% to fill half the circle
    const strokeWidth = 8; // Reduced stroke width
    const radius = 45; // Reduced radius to fit in smaller space
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = `${circumference} ${circumference}`;
    const strokeDashoffset = ((100 - progress) / 100) * circumference;

    return (
        <div className="p-4 rounded-3xl w-[230px] h-[230px] flex flex-col items-center justify-between">
            <div className="relative w-40 h-40">
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
                    <span className="text-lg font-semibold">Total Cover</span>
                    <span className="text-xs text-gray-400">Available Balance</span>
                </div>
            </div>
            <div className="text-center mt-2">
                <p className="text-green-500 font-semibold text-xs">USED</p>
                <p className="text-green-500 text-base font-bold">
                    GHS {usedAmount.toFixed(3)}
                </p>
                <p className="text-green-500 text-xs">
                    OUT OF GHS {totalAmount.toFixed(3)}
                </p>
            </div>
        </div>
    );
};

export default Circle;
