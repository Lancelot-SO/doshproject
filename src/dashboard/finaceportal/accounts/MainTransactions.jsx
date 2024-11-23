import React, { useState } from 'react';

const transactions = [
    {
        date: '11/01/2024',
        firstName: 'Jimena',
        lastName: 'Smith',
        accountNumber: '1234567890',
        channel: 'Regular text column',
        description: 'Transaction details here',
        amount: 'GHS 54000',
        status: 'successful'
    },
    {
        date: '12/01/2024',
        firstName: 'Kendra',
        lastName: 'Johnson',
        accountNumber: '0987654321',
        channel: 'Regular text column',
        description: 'Payment received',
        amount: 'GHS 86050',
        status: 'successful'
    },
    {
        date: '12/01/2024',
        firstName: 'Kaydence',
        lastName: 'Williams',
        accountNumber: '5432167890',
        channel: 'Regular text column',
        description: 'Failed transaction',
        amount: 'GHS 450',
        status: 'failed'
    },
    // Add more transaction data as needed
];

function TableRow({ children, isHeader, isEven }) {
    return (
        <div
            className={`flex ${isHeader ? 'bg-gray-100 font-semibold text-gray-600' : isEven ? 'bg-white' : 'bg-gray-50'} border-b`}
        >
            {children}
        </div>
    );
}

function TableCell({ children, isHeader }) {
    return (
        <div className={`p-4 flex-1 ${isHeader ? 'text-left text-sm font-medium' : 'text-sm'}`}>
            {children}
        </div>
    );
}

function parseDate(dateString) {
    const [day, month, year] = dateString.split('/').map(Number);
    return new Date(year, month - 1, day);
}

export default function MainTransactions() {
    const [searchQuery, setSearchQuery] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [selectedChannel, setSelectedChannel] = useState('DOSH');

    // Filter transactions based on search and date range
    const filteredTransactions = transactions.filter((transaction) => {
        const matchesSearch =
            transaction.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            transaction.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            transaction.accountNumber.includes(searchQuery);

        const transactionDate = parseDate(transaction.date);
        const isWithinDateRange =
            (!startDate || transactionDate >= parseDate(startDate)) &&
            (!endDate || transactionDate <= parseDate(endDate));

        return matchesSearch && isWithinDateRange;
    });

    return (
        <div className="w-full p-6">
            {/* Container for inputs aligned to the right */}
            <div className="flex justify-end gap-4 mb-6">
                {/* Search input with reduced width */}
                <div className="relative w-[150px]">
                    <input
                        type="text"
                        placeholder="search here"
                        className="pl-10 w-full p-2 border rounded-md text-sm"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>

                {/* Dropdown and Date Inputs */}
                <select
                    className="w-[180px] p-2 border rounded-md text-sm"
                    value={selectedChannel}
                    onChange={(e) => setSelectedChannel(e.target.value)}
                >
                    <option value="DOSH">DOSH</option>
                    <option value="other">Other Channels</option>
                </select>
                <div className="relative w-[150px]">
                    <input
                        type="date"
                        placeholder="start date"
                        className="w-full p-2 border rounded-md text-sm"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                </div>
                <div className="relative w-[150px]">
                    <input
                        type="date"
                        placeholder="end date"
                        className="w-full p-2 border rounded-md text-sm"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                </div>
            </div>

            <div className="w-full border rounded-md overflow-hidden">
                {/* Table Header */}
                <TableRow isHeader={true}>
                    {['Date', 'First Name', 'Last Name', 'Account number', 'Channel', 'Description', 'Amount', 'Status'].map((header, index) => (
                        <TableCell isHeader key={index}>
                            {header} <span className="text-gray-400">&#8595;</span>
                        </TableCell>
                    ))}
                </TableRow>

                {/* Table Body */}
                {filteredTransactions.length > 0 ? (
                    filteredTransactions.map((transaction, index) => (
                        <TableRow key={index} isEven={index % 2 === 0}>
                            <TableCell>{transaction.date}</TableCell>
                            <TableCell>{transaction.firstName}</TableCell>
                            <TableCell>{transaction.lastName}</TableCell>
                            <TableCell>{transaction.accountNumber}</TableCell>
                            <TableCell>{transaction.channel}</TableCell>
                            <TableCell>{transaction.description}</TableCell>
                            <TableCell>{transaction.amount}</TableCell>
                            <TableCell>
                                <span
                                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${transaction.status === 'successful'
                                        ? 'bg-green-100 text-green-800'
                                        : transaction.status === 'failed'
                                            ? 'bg-red-100 text-red-800'
                                            : transaction.status === 'pending'
                                                ? 'bg-yellow-100 text-yellow-800'
                                                : 'bg-blue-100 text-blue-800'
                                        }`}
                                >
                                    {transaction.status}
                                </span>
                            </TableCell>
                        </TableRow>
                    ))
                ) : (
                    <div className="p-4 text-gray-500 text-center">No transactions found</div>
                )}
            </div>
        </div>
    );
}
