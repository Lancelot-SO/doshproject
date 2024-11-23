import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ChartOne = () => {
    const data = {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        datasets: [
            {
                label: 'Gold Line',
                data: [15, 10, 5, 20, 8, 15, 30, 20, 10, 25, 18, 20],
                borderColor: '#A2865F',
                backgroundColor: 'rgba(162, 134, 95, 0.5)', // Semi-transparent gold fill
                borderWidth: 2,
                tension: 0.4,
                fill: "origin", // Enable the background fill
            },
            {
                label: 'White Line',
                data: [10, 15, 8, 18, 5, 10, 25, 18, 30, 25, 20, 22],
                borderColor: 'rgb(255, 255, 255)',
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                borderWidth: 2,
                borderDash: [5, 5],
                tension: 0.4,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)',
                },
                ticks: {
                    color: 'rgba(255, 255, 255, 0.5)',
                },
            },
            y: {
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)',
                },
                ticks: {
                    color: 'rgba(255, 255, 255, 0.5)',
                    callback: (value) => (value % 10 === 0 ? value : ''),
                },
                min: 0,
                max: 40,
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            datalabels: { display: false },
        },
    };

    return (
        <div className="bg-[#161717] w- p-6 rounded-lg">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-white text-xl font-semibold">Transactions</h2>
                <div className="flex space-x-2">
                    <div className="relative">
                        <svg
                            className="w-4 h-4 text-white absolute left-2 top-1/2 transform -translate-y-1/2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            ></path>
                        </svg>
                        <select className="bg-gray-800 text-white pl-8 pr-3 py-1 rounded appearance-none">
                            <option>2022</option>
                        </select>
                    </div>
                    <button className="bg-[#A2865F] text-white px-3 py-1 rounded flex items-center">
                        <svg
                            className="w-4 h-4 mr-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                            ></path>
                        </svg>
                        Download
                    </button>
                </div>
            </div>
            <div className="h-64">
                <Line data={data} options={options} />
            </div>
        </div>
    );
};

export default ChartOne;
