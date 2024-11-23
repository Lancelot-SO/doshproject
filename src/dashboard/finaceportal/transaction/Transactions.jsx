import React from 'react';

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

const Table = ({ children }) => (
    <div className="w-full">{children}</div>
);

const TableRow = ({ children, isHeader }) => (
    <div className={`flex border-b ${isHeader ? 'border-gray-700' : 'border-gray-800'}`}>
        {children}
    </div>
);

const TableCell = ({ children, isHeader }) => (
    <div className={`py-3 px-4 flex-1 ${isHeader ? 'font-bold' : ''}`}>
        {children}
    </div>
);

export default function Transactions() {
    return (
        <div className="bg-[#161717] text-gray-300 p-6 rounded-lg w-[820px] h-full">
            <h2 className="text-2xl font-bold mb-4">Transaction Details</h2>
            <div className="overflow-x-auto">
                <Table>
                    <TableRow isHeader>
                        <TableCell isHeader>Date</TableCell>
                        <TableCell isHeader>Direction</TableCell>
                        <TableCell isHeader>Crediting/Acc Name</TableCell>
                        <TableCell isHeader>Amount</TableCell>
                        <TableCell isHeader>Status</TableCell>
                    </TableRow>
                    {transactions.map((transaction, index) => (
                        <TableRow key={index}>
                            <TableCell>{transaction.date}</TableCell>
                            <TableCell>{transaction.direction}</TableCell>
                            <TableCell>{transaction.name}</TableCell>
                            <TableCell>{transaction.amount}</TableCell>
                            <TableCell>
                                <span className={statusColors[transaction.status]}>
                                    {transaction.status}
                                </span>
                            </TableCell>
                        </TableRow>
                    ))}
                </Table>
            </div>
        </div>
    );
}
