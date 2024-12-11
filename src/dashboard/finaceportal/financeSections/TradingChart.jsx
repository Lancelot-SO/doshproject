import React from "react";
import {
    LineChart,
    Line,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const topChartData = [
    { day: "Sun", value: 50 },
    { day: "Mon", value: 200 },
    { day: "Tue", value: 259 },
    { day: "Wed", value: 150 },
    { day: "Thu", value: 100 },
    { day: "Fri", value: 70 },
    { day: "Sat", value: 90 },
];

const bottomChartData = [
    { month: "Apr", BTC: 37000, ETH: 5000 },
    { month: "May", BTC: 42000, ETH: 5300 },
    { month: "Jun", BTC: 46200, ETH: 5500 },
    { month: "Jul", BTC: 47800, ETH: 5700 },
    { month: "Aug", BTC: 50000, ETH: 6000 },
    { month: "Sep", BTC: 52000, ETH: 6200 },
];

const TradingChart = () => {
    return (
        <div className="bg-gray-900 text-white h-[808px] p-4 rounded-xl shadow-lg mx-auto">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-6">
                <div>
                    <p className="text-sm text-gray-400">Profit this day</p>
                    <h1 className="text-3xl font-bold">GHS259.75</h1>
                </div>
                <button className="bg-gray-800 text-sm px-4 py-2 rounded-lg">Week</button>
            </div>

            {/* Top Line Chart */}
            <ResponsiveContainer width="100%" height={300} className="mb-10">
                <LineChart data={topChartData}>
                    <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#ffffff"
                        strokeWidth={2}
                        dot={{ r: 4, fill: "#ffffff" }}
                    />
                    <XAxis
                        dataKey="day"
                        axisLine={{ stroke: "#888" }} // X-axis line
                        tickLine={{ stroke: "#888" }} // X-axis tick marks
                        tick={{ fill: "#888" }} // X-axis tick labels
                    />
                    <YAxis
                        axisLine={{ stroke: "#888" }} // Y-axis line
                        tickLine={{ stroke: "#888" }} // Y-axis tick marks
                        tick={{ fill: "#888" }} // Y-axis tick labels
                        ticks={[0, 50, 100, 150, 200, 250, 300]} // Specify tick intervals of 50
                        domain={[0, 300]} // Ensure the range is capped at 0 and 300
                    />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: "#222",
                            border: "none",
                            borderRadius: "8px",
                        }}
                    />
                </LineChart>
            </ResponsiveContainer>

            {/* Bottom Area Chart */}
            <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={bottomChartData}>
                    <defs>
                        <linearGradient id="colorBTC" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#4788F0" stopOpacity={0.4} />
                            <stop offset="100%" stopColor="#4788F0" stopOpacity={0.1} />
                        </linearGradient>
                    </defs>
                    <Area
                        type="monotone"
                        dataKey="BTC"
                        stroke="#4788F0"
                        fill="url(#colorBTC)"
                        strokeWidth={2}
                    />
                    <XAxis
                        dataKey="month"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "#888" }}
                    />
                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "#888" }}
                        domain={[37000, 52000]}
                    />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: "#222", // Tooltip background color
                            border: "none",
                            borderRadius: "8px",
                        }}
                        itemStyle={{
                            color: "red", // Item text color
                        }}
                        labelStyle={{
                            color: "red", // Label text color
                        }}
                    />
                </AreaChart>
            </ResponsiveContainer>

            {/* Timeframe Selector */}
            <div className="flex justify-between mt-4">
                {["1D", "5D", "1M", "3M", "6M", "YTD", "1Y", "5Y", "All"].map((time) => (
                    <button
                        key={time}
                        className="text-sm px-2 py-1 bg-gray-800 rounded-full"
                    >
                        {time}
                    </button>
                ))}
            </div>

            {/* Buy Button */}
            <div className="flex justify-center mt-6">
                <button className="bg-[#9C8164] text-white text-lg px-10 py-3 rounded-full font-bold">
                    Buy
                </button>
            </div>
        </div>
    );
};

export default TradingChart;
