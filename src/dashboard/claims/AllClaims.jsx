import React, { useState } from 'react';
import { ChevronDown, Search, MoreVertical } from 'lucide-react';

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
];

const AllClaims = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const filteredClaims = claims.filter((claim) => {
        const claimDate = new Date(claim.dateCreated);

        const matchesSearchTerm =
            claim.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
            claim.diagnosis.toLowerCase().includes(searchTerm.toLowerCase()) ||
            claim.id.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesDateRange =
            (!startDate || new Date(startDate) <= claimDate) &&
            (!endDate || new Date(endDate) >= claimDate);

        return matchesSearchTerm && matchesDateRange;
    });

    return (
        <div className="p-4">
            {/* Filters */}
            <div className="flex flex-col md:flex-row justify-between mb-4 gap-4">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search here"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 pr-4 py-2 border rounded-md w-full"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                </div>
                <div className="flex gap-4">
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="border rounded-md px-4 py-2"
                    />
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="border rounded-md px-4 py-2"
                    />
                </div>
            </div>

            {/* Mobile View */}
            <div className="block md:hidden h-[600px] overflow-y-scroll">
                {filteredClaims.map((claim, index) => (
                    <div key={index} className="bg-white rounded-lg shadow mb-4 p-4">
                        <div className="flex justify-between">
                            <span className="text-sm text-gray-500">Claim No.</span>
                            <span className="font-medium">{claim.id}</span>
                        </div>
                        <div className="flex justify-between mt-2">
                            <span className="text-sm text-gray-500">Provider</span>
                            <span className="text-gray-800">{claim.provider}</span>
                        </div>
                        <div className="flex justify-between mt-2">
                            <span className="text-sm text-gray-500">Diagnosis</span>
                            <span className="text-gray-800">{claim.diagnosis}</span>
                        </div>
                        <div className="flex justify-between mt-2">
                            <span className="text-sm text-gray-500">Service Cost</span>
                            <span className="text-gray-800">{claim.serviceCost}</span>
                        </div>
                        <div className="flex justify-between mt-2">
                            <span className="text-sm text-gray-500">Product Cost</span>
                            <span className="text-gray-800">{claim.productCost}</span>
                        </div>
                        <div className="flex justify-between mt-2">
                            <span className="text-sm text-gray-500">Date Created</span>
                            <span className="text-gray-800">{claim.dateCreated}</span>
                        </div>
                        <div className="flex justify-between mt-2">
                            <span className="text-sm text-gray-500">Status</span>
                            <span className={`px-2 text-xs font-semibold rounded-full ${statusColors[claim.status]}`}>
                                {claim.status}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Desktop View */}
            <div className="hidden md:block w-full overflow-x-auto bg-white">
                <table className="min-w-full table-auto bg-white border">
                    <thead>
                        <tr className='bg-white'>
                            <th className="cursor-pointer px-6 py-3 text-left text-sm font-medium ">
                                Claim No. <ChevronDown className="inline-block ml-1 h-4 w-4" />
                            </th>
                            <th className="cursor-pointer px-6 py-3 text-left text-sm font-medium ">
                                Service Provider <ChevronDown className="inline-block ml-1 h-4 w-4" />
                            </th>
                            <th className="cursor-pointer px-6 py-3 text-left text-sm font-medium ">
                                Main Diagnosis <ChevronDown className="inline-block ml-1 h-4 w-4" />
                            </th>
                            <th className="cursor-pointer px-6 py-3 text-left text-sm font-medium ">
                                Service Cost <ChevronDown className="inline-block ml-1 h-4 w-4" />
                            </th>
                            <th className="cursor-pointer px-6 py-3 text-left text-sm font-medium ">
                                Product Cost <ChevronDown className="inline-block ml-1 h-4 w-4" />
                            </th>
                            <th className="cursor-pointer px-6 py-3 text-left text-sm font-medium ">
                                Date Created <ChevronDown className="inline-block ml-1 h-4 w-4" />
                            </th>
                            <th className="cursor-pointer px-6 py-3 text-left text-sm font-medium ">
                                Status <ChevronDown className="inline-block ml-1 h-4 w-4" />
                            </th>
                            <th className="w-[50px]"></th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {filteredClaims.map((claim, index) => (
                            <tr key={index} className="bg-white border">
                                <th className="px-6 py-4 text-sm font-medium">{claim.id}</th>
                                <th className="px-6 py-4 text-sm ">{claim.provider}</th>
                                <th className="px-6 py-4 text-sm ">{claim.diagnosis}</th>
                                <th className="px-6 py-4 text-sm ">{claim.serviceCost}</th>
                                <th className="px-6 py-4 text-sm ">{claim.productCost}</th>
                                <th className="px-6 py-4 text-sm ">{claim.dateCreated}</th>
                                <th className="px-6 py-4">
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[claim.status]}`}>
                                        <span
                                            className={`w-1.5 h-1.5 rounded-full mr-1.5 ${claim.status === 'successful' ? 'bg-green-500' : 'bg-red-500'
                                                }`}
                                        />
                                        {claim.status}
                                    </span>
                                </th>
                                <th className="px-6 py-4">
                                    <button className="text-gray-400 hover:text-gray-600 focus:outline-none">
                                        <MoreVertical className="h-5 w-5" />
                                    </button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllClaims;
