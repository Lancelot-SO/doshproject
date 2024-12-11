import React, { useState, useEffect } from 'react';
import QuickActions from '../quickActions/QuickActions';

const transactions = [
    {
        claimNo: 'CLM-2024-001',
        serviceProvider: 'DOSH-Hospital',
        diagnosis: 'Acute Appendicitis',
        serviceCost: 'GHS 100',
        productCost: 'GHS 100',
        dateCreated: '11/12/2024',
        status: 'successful',
    },
    {
        claimNo: 'CLM-2024-002',
        serviceProvider: 'DOSH-Clinic',
        diagnosis: 'Fracture Repair',
        serviceCost: 'GHS 200',
        productCost: 'GHS 150',
        dateCreated: '12/12/2024',
        status: 'failed',
    },
];

export default function MainTransactions() {
    const [searchQuery, setSearchQuery] = useState('');
    const [isMobile, setIsMobile] = useState(false);

    // Handle screen size detection
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Mobile if screen width is 768px or less
        };
        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Filter transactions based on search query
    const filteredTransactions = transactions.filter((transaction) =>
        transaction.claimNo.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="w-full p-4">
            {/* Search Input */}
            <div className="flex justify-end mb-4">
                <input
                    type="text"
                    placeholder="Search by Claim No."
                    className="w-[200px] p-2 border rounded-md text-sm"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            {/* Responsive Design: Table for Large Screens, Cards for Mobile */}
            {isMobile ? (
                <div className="space-y-4">
                    {filteredTransactions.length > 0 ? (
                        filteredTransactions.map((transaction, index) => (
                            <div
                                key={index}
                                className="border rounded-lg p-4 bg-white shadow-sm"
                            >
                                <div className="flex justify-between mb-2">
                                    <span className="font-semibold text-gray-600">Claim No.</span>
                                    <span className="text-gray-800">{transaction.claimNo}</span>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <span className="font-semibold text-gray-600">
                                        Service Provider
                                    </span>
                                    <span className="text-gray-800">
                                        {transaction.serviceProvider}
                                    </span>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <span className="font-semibold text-gray-600">
                                        Main Diagnosis
                                    </span>
                                    <span className="text-gray-800">{transaction.diagnosis}</span>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <span className="font-semibold text-gray-600">
                                        Service Cost
                                    </span>
                                    <span className="text-gray-800">{transaction.serviceCost}</span>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <span className="font-semibold text-gray-600">
                                        Product Cost
                                    </span>
                                    <span className="text-gray-800">{transaction.productCost}</span>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <span className="font-semibold text-gray-600">
                                        Date Created
                                    </span>
                                    <span className="text-gray-800">
                                        {transaction.dateCreated}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-semibold text-gray-600">Status</span>
                                    <span
                                        className={`font-medium ${transaction.status === 'successful'
                                            ? 'text-green-600'
                                            : 'text-red-600'
                                            }`}
                                    >
                                        {transaction.status === 'successful'
                                            ? 'Successful'
                                            : 'Failed'}
                                    </span>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-gray-500 text-center">
                            No transactions found
                        </div>
                    )}
                </div>
            ) : (
                <div className="w-full border rounded-md overflow-hidden">
                    {/* Table Header */}
                    <div className="flex bg-gray-100 font-semibold text-gray-600 border-b">
                        {[
                            'Claim No.',
                            'Service Provider',
                            'Main Diagnosis',
                            'Service Cost',
                            'Product Cost',
                            'Date Created',
                            'Status',
                        ].map((header, index) => (
                            <div key={index} className="p-4 flex-1 text-left text-sm">
                                {header}
                            </div>
                        ))}
                    </div>

                    {/* Table Body */}
                    {filteredTransactions.length > 0 ? (
                        filteredTransactions.map((transaction, index) => (
                            <div
                                key={index}
                                className={`flex border-b ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                                    }`}
                            >
                                <div className="p-4 flex-1 text-sm">
                                    {transaction.claimNo}
                                </div>
                                <div className="p-4 flex-1 text-sm">
                                    {transaction.serviceProvider}
                                </div>
                                <div className="p-4 flex-1 text-sm">
                                    {transaction.diagnosis}
                                </div>
                                <div className="p-4 flex-1 text-sm">
                                    {transaction.serviceCost}
                                </div>
                                <div className="p-4 flex-1 text-sm">
                                    {transaction.productCost}
                                </div>
                                <div className="p-4 flex-1 text-sm">
                                    {transaction.dateCreated}
                                </div>
                                <div className="p-4 flex-1 text-sm">
                                    <span
                                        className={`px-3 py-1 rounded-full text-xs font-medium ${transaction.status === 'successful'
                                            ? 'bg-green-100 text-green-800'
                                            : 'bg-red-100 text-red-800'
                                            }`}
                                    >
                                        {transaction.status}
                                    </span>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="p-4 text-gray-500 text-center">
                            No transactions found
                        </div>
                    )}
                </div>
            )}

            {/* Quick Actions */}
            <div className="fixed top-[100px] right-0">
                <QuickActions />
            </div>
        </div>
    );
}
