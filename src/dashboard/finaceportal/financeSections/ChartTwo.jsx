import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

// Register the required components for Chart.js
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const ChartTwo = () => {
    // Chart data
    const data = {
        labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
        datasets: [
            {
                label: 'Expenses',
                data: [5000, 10000, 7000, 4000, 12500, 6000],
                backgroundColor: [
                    'rgba(255, 255, 255, 0.5)',
                    'rgba(255, 255, 255, 0.7)',
                    'rgba(255, 255, 255, 0.5)',
                    'rgba(255, 255, 255, 0.4)',
                    '#A2865F', // Dec bar color
                    'rgba(255, 255, 255, 0.5)',
                ],
                borderRadius: 10, // Rounded bars
                borderSkipped: false, // Remove sharp edges at the top
            },
        ],
    };

    // Chart options
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return `GHS${context.raw.toLocaleString()}`;
                    },
                },
            },
            datalabels: { display: false }, // Disable datalabels explicitly

        },
        scales: {
            x: {
                grid: { display: false },
                ticks: { color: 'white' },
            },
            y: {
                grid: { display: false },
                ticks: { display: false },
            },
        },
    };

    return (
        <div className="bg-black p-4 rounded-xl lg:w-[300px] w-[380px] h-[350px] shadow-lg relative">
            <h3 className="text-white text-lg font-semibold mb-2">My Expenses</h3>
            <div className="relative bg-gradient-to-br from-gray-700 to-gray-800 p-4 rounded-lg w-full h-[270px]">
                <Bar data={data} options={options} />
                <div className="text-white text-sm absolute top-[10%] right-6 transform -translate-y-1/2">
                    GHS12,500
                </div>
            </div>
        </div>
    );
};

export default ChartTwo;
