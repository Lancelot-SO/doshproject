import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const initialData = {
    Wallets: [
        { label: 'Loan', amount: 960, color: 'bg-blue-500' },
        { label: 'Fixed Deposit', amount: 500, color: 'bg-purple-500' },
        { label: 'DOSH Shares', amount: 341, color: 'bg-green-500' },
    ],
    Inflows: [
        { label: 'Salary', amount: 1500, color: 'bg-yellow-500' },
        { label: 'Bonuses', amount: 300, color: 'bg-orange-500' },
    ],
    Outflows: [
        { label: 'Bills', amount: 600, color: 'bg-red-500' },
        { label: 'Rent', amount: 1000, color: 'bg-gray-500' },
        { label: 'Investments', amount: 1200, color: 'bg-teal-500' },
    ],
};

const Dropdown = ({ title, options, selected, setSelected }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mb-6">
            <div
                className="flex justify-between items-center cursor-pointer bg-[#242424] p-4 rounded-md"
                onClick={() => setIsOpen(!isOpen)}
            >
                <p className="text-white">{selected}</p>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
            {isOpen && (
                <ul className="mt-2 bg-[#161717] rounded-md p-4 space-y-2">
                    {options.map((option, index) => (
                        <li
                            key={index}
                            className="text-gray-400 cursor-pointer hover:text-white"
                            onClick={() => {
                                setSelected(option);
                                setIsOpen(false);
                            }}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default function RightSideSection() {
    const [selectedCategory, setSelectedCategory] = useState('Wallets');
    const financialItems = initialData[selectedCategory];

    const totalAmount = financialItems.reduce((acc, item) => acc + item.amount, 0);

    const pieData = {
        labels: financialItems.map(() => ''), // Empty labels for percentages
        datasets: [
            {
                data: financialItems.map((item) => ((item.amount / totalAmount) * 100).toFixed(2)),
                backgroundColor: financialItems.map((item) => {
                    switch (item.color) {
                        case 'bg-blue-500':
                            return '#4A90E2';
                        case 'bg-purple-500':
                            return '#A060E0';
                        case 'bg-green-500':
                            return '#3DC97E';
                        case 'bg-yellow-500':
                            return '#F2C94C';
                        case 'bg-orange-500':
                            return '#F2994A';
                        case 'bg-red-500':
                            return '#EB5757';
                        case 'bg-gray-500':
                            return '#828282';
                        case 'bg-teal-500':
                            return '#2F80ED';
                        default:
                            return '#000000';
                    }
                }),
                borderColor: financialItems.map(() => 'transparent'),
                borderWidth: 1,
            },
        ],
    };

    const pieOptions = {
        plugins: {
            legend: {
                display: false,
            },
            datalabels: {
                color: 'white',
                formatter: (value) => `${value}%`,
                font: {
                    weight: 'bold',
                    size: 14,
                },
                anchor: 'center',
                align: 'center',
            },
        },
        responsive: true,
        maintainAspectRatio: false,
    };

    return (
        <div className="bg-[#161717] text-white p-6 rounded-lg w-[307px] h-auto mx-auto flex flex-col">
            {/* Dropdown */}
            <Dropdown
                title="Select Category"
                options={Object.keys(initialData)}
                selected={selectedCategory}
                setSelected={setSelectedCategory}
            />

            {/* Pie Chart */}
            <div className="h-48 mb-6">
                <Pie data={pieData} options={pieOptions} />
            </div>

            {/* Financial Items */}
            <div className="space-y-4">
                {financialItems.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center w-[261px] rounded-[16px] h-[80px] bg-[#242424] space-x-4 px-2"
                    >
                        <div
                            className={`w-10 h-10 rounded-md flex items-center justify-center ${item.color}`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm">{item.label}</p>
                            <p className="text-white font-bold">GHS {item.amount}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
