import React, { useState } from 'react';
import { ChevronDown, Search, Calendar, MoreVertical } from 'lucide-react';

const statusColors = {
    successful: 'bg-green-100 text-green-800',
    failed: 'bg-red-100 text-red-800',
    active: 'bg-blue-100 text-blue-800',
    pending: 'bg-yellow-100 text-yellow-800',
};

const claims = [
    { id: 'CLM-2024-001', provider: 'DOSH Hospital', diagnosis: 'Acute Appendicitis', serviceCost: 'GHS 100', productCost: 'GHS 100', dateCreated: '2024-12-11', status: 'successful' },
    { id: 'CLM-2024-002', provider: 'DOSH Hospital', diagnosis: 'Chronic Migraine', serviceCost: 'GHS 150', productCost: 'GHS 150', dateCreated: '2024-10-01', status: 'failed' },
    { id: 'CLM-2024-003', provider: 'Health Center', diagnosis: 'Bronchitis', serviceCost: 'GHS 200', productCost: 'GHS 180', dateCreated: '2024-09-15', status: 'active' },
    { id: 'CLM-2024-004', provider: 'Trust Hospital', diagnosis: 'Diabetes', serviceCost: 'GHS 300', productCost: 'GHS 250', dateCreated: '2024-08-20', status: 'pending' },
    { id: 'CLM-2024-005', provider: 'DOSH Hospital', diagnosis: 'Acute Appendicitis', serviceCost: 'GHS 100', productCost: 'GHS 100', dateCreated: '2024-12-11', status: 'pending' },
    // Add more rows as needed
];

const AllClaims = () => {
    const [sortColumn, setSortColumn] = useState('');
    const [sortDirection, setSortDirection] = useState('asc');
    const [searchTerm, setSearchTerm] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [activePopup, setActivePopup] = useState(null);  // State to manage the active popup

    // Handle sorting
    const handleSort = (column) => {
        if (column === sortColumn) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortColumn(column);
            setSortDirection('asc');
        }
    };

    // Filter claims based on search term and date range
    const filteredClaims = claims.filter((claim) => {
        const claimDate = new Date(claim.dateCreated);

        const matchesSearchTerm = claim.provider.toLowerCase().includes(searchTerm.toLowerCase())
            || claim.diagnosis.toLowerCase().includes(searchTerm.toLowerCase())
            || claim.id.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesDateRange = (!startDate || new Date(startDate) <= claimDate) &&
            (!endDate || new Date(endDate) >= claimDate);

        return matchesSearchTerm && matchesDateRange;
    });

    const togglePopup = (id) => {
        setActivePopup(activePopup === id ? null : id);
    };

    return (
        <div className="p-4">
            <div className="flex justify-between items-center mb-4">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search here"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 pr-4 py-2 border rounded-md"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                </div>
                <div className="flex items-center space-x-4">
                    <div className="relative">
                        <select className="appearance-none bg-white border rounded-md pl-4 pr-10 py-2">
                            <option>DOSH</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    </div>
                    <div className="relative">
                        <input
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            className="border rounded-md pl-10 pr-4 py-2"
                        />
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    </div>
                    <div className="relative">
                        <input
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            className="border rounded-md pl-10 pr-4 py-2"
                        />
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    </div>
                </div>
            </div>
            <div className="overflow-x-auto rounded-lg shadow">
                <table className="min-w-full bg-white border rounded-lg">
                    <thead>
                        <tr className="bg-gray-100">
                            {['Claim No.', 'Service Provider', 'Main Diagnosis', 'Service Cost', 'Product Cost', 'Date Created', 'Status', ''].map((header) => (
                                <th
                                    key={header}
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                                    onClick={() => handleSort(header)}
                                >
                                    {header}
                                    {sortColumn === header && (
                                        <ChevronDown
                                            className={`inline ml-1 ${sortDirection === 'desc' ? 'transform rotate-180' : ''}`}
                                            size={16}
                                        />
                                    )}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {filteredClaims.map((claim, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 border-none whitespace-nowrap text-sm text-gray-900">{claim.id}</td>
                                <td className="px-6 py-4 border-none whitespace-nowrap text-sm text-[#667085]">{claim.provider}</td>
                                <td className="px-6 py-4 border-none whitespace-nowrap text-sm text-[#667085]">{claim.diagnosis}</td>
                                <td className="px-6 py-4 border-none whitespace-nowrap text-sm text-[#667085]">{claim.serviceCost}</td>
                                <td className="px-6 py-4 border-none whitespace-nowrap text-sm text-[#667085]">{claim.productCost}</td>
                                <td className="px-6 py-4 border-none whitespace-nowrap text-sm text-[#667085]">{claim.dateCreated}</td>
                                <td className="px-6 py-4 border-none whitespace-nowrap">
                                    <span className={`px-2 inline-flex items-center text-xs leading-5 font-semibold rounded-full ${statusColors[claim.status]}`}>
                                        <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${claim.status === 'successful' ? 'bg-green-500' : claim.status === 'failed' ? 'bg-red-500' : claim.status === 'active' ? 'bg-blue-500' : 'bg-yellow-500'}`}></span>
                                        {claim.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 border-none whitespace-nowrap text-right text-sm font-medium">
                                    <button
                                        className="text-gray-400 hover:text-gray-900 relative"
                                        onClick={() => togglePopup(claim.id)}
                                    >
                                        <MoreVertical size={20} />
                                    </button>
                                    {activePopup === claim.id && (
                                        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                                <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">View</button>
                                                <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">Approve</button>
                                                <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">Reject</button>
                                            </div>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllClaims;
