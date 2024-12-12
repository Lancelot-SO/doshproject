import React, { useState } from 'react';

const transactions = [
    { date: '13/01/2024', direction: 'Out', name: 'DOSH Insurance', amount: 'GHS 54000', status: 'Pending' },
    { date: '13/01/2024', direction: 'IN', name: 'James Sintim', amount: 'GHS 86050', status: 'Paid' },
    { date: '13/01/2024', direction: 'OUT', name: 'James Sintim', amount: 'GHS 450', status: 'Failed' },
    { date: '13/01/2024', direction: 'OUT', name: 'James Sintim', amount: 'GHS 450', status: 'Failed' },
];

const statusColors = {
    Pending: 'text-yellow-500',
    Paid: 'text-green-500',
    Failed: 'text-red-500',
};

export default function Transactions() {
    const [showAll, setShowAll] = useState(false);

    const toggleShowAll = () => setShowAll(!showAll);

    return (
        <div className="bg-[#161717] text-gray-300 p-6 rounded-lg mb-10 lg:mb-0 w-[380px] smallS8:w-[320px] lg:w-full">
            {/* Header */}
            <h2 className="text-2xl font-bold mb-4">Transaction Details</h2>

            {/* Large Screen View */}
            <div className="hidden md:block overflow-x-auto">
                <div className="divide-y divide-gray-800">
                    <div className="flex font-bold text-gray-400 border-b border-gray-700 py-3">
                        <div className="flex-1 px-4">Date</div>
                        <div className="flex-1 px-4">Direction</div>
                        <div className="flex-1 px-4">Crediting/Acc Name</div>
                        <div className="flex-1 px-4">Amount</div>
                        <div className="flex-1 px-4">Status</div>
                    </div>
                    {transactions.map((transaction, index) => (
                        <div key={index} className="flex items-center border-b border-gray-800 py-3">
                            <div className="flex-1 px-4">{transaction.date}</div>
                            <div className="flex-1 px-4">{transaction.direction}</div>
                            <div className="flex-1 px-4">{transaction.name}</div>
                            <div className="flex-1 px-4">{transaction.amount}</div>
                            <div className="flex-1 px-4">
                                <span className={statusColors[transaction.status]}>
                                    {transaction.status}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile View */}
            <div className="block lg:hidden">
                <div className="divide-y divide-gray-700">
                    {(showAll ? transactions : transactions.slice(0, 2)).map((transaction, index) => (
                        <div key={index} className="flex justify-between items-center py-3">
                            <div>
                                <p className="text-sm font-bold">{transaction.date}</p>
                                <p className="text-xs text-gray-400">{transaction.name}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm">{transaction.amount}</p>
                                <p className={`text-xs ${statusColors[transaction.status]}`}>
                                    {transaction.status}
                                </p>
                            </div>
                        </div>
                    ))}

                    {!showAll && (
                        <button
                            onClick={toggleShowAll}
                            className="flex items-center justify-center w-full py-2 text-gray-400"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 12h12M6 6h12M6 18h12"
                                ></path>
                            </svg>
                        </button>
                    )}

                    {showAll && (
                        <button
                            onClick={toggleShowAll}
                            className="flex items-center justify-center w-full py-2 text-gray-400"
                        >
                            Hide
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
