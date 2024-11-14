import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';


ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const pieData = {
    labels: ['40%', '30%', '20%', '10%'],
    datasets: [
        {
            data: [40, 30, 20, 10],
            backgroundColor: ['#FF9999', '#FFD699', '#99FF99', '#9999FF'],
            borderColor: ['#FF9999', '#FFD699', '#99FF99', '#9999FF'],
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
            color: 'white',             // Label color
            formatter: (value, context) => `${context.chart.data.labels[context.dataIndex]}`,  // Display the percentage label
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

const FinancialItem = ({ icon, label, amount, color }) => (
    <div className="flex items-center w-[261px] rounded-[16px] h-[80px] bg-[#242424] space-x-4 mb-4 px-2">
        <div className={`w-10 h-10 rounded-md flex items-center justify-center ${color}`}>
            {icon}
        </div>
        <div>
            <p className="text-gray-400 text-sm">{label}</p>
            <p className="text-white font-bold">{amount}</p>
        </div>
    </div>
);

export default function RightSideSection() {
    return (
        <div className="bg-[#161717] text-white p-6 rounded-lg w-[307px] h-auto mx-auto flex flex-col">
            <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 rounded-md"></div>
                <div>
                    <a href='/' className="font-bold text-lg">0800DOSH.ME</a>
                    <p className="text-gray-400 text-xs">(dashboard)</p>
                </div>
            </div>

            <div className='w-[250px] h-[1px] bg-white my-10'></div>

            <div className="h-48 mb-6">
                <Pie data={pieData} options={pieOptions} />
            </div>

            <div className='w-[250px] h-[1px] bg-white my-4'></div>


            <div className="space-y-4 flex-grow">
                <FinancialItem
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
                    </svg>}
                    label="Loan"
                    amount="GHS960.00"
                    color="bg-blue-500"
                />

                <FinancialItem
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>}
                    label="Savings"
                    amount="GHS12,500.00"
                    color="bg-red-500"
                />

                <FinancialItem
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                        <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                    </svg>}
                    label="Fixed Deposit"
                    amount="GHS9500.00"
                    color="bg-purple-500"
                />

                <FinancialItem
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                    </svg>}
                    label="DOSH Shares"
                    amount="GHS 341"
                    color="bg-green-500"
                />

                <FinancialItem
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                    </svg>}
                    label="Float Amount"
                    amount="GHS1000.00"
                    color="bg-orange-500"
                />
            </div>
        </div>
    );
}