import React, { useState } from "react";
import { BsThreeDots, BsThreeDotsVertical } from "react-icons/bs";


const HospitalTable = ({ data }) => {
    const [expandedRow, setExpandedRow] = useState(null);

    // Function to get Google Maps link based on latitude and longitude
    const getGoogleMapsLink = (latitude, longitude) => {
        if (!latitude || !longitude) return "N/A";
        const lat = encodeURIComponent(latitude);
        const long = encodeURIComponent(longitude);
        return `https://www.google.com/maps?q=${lat},${long}`;
    };

    // Function to generate a mailto link for email addresses
    const getMailToLink = (email) => {
        if (!email) return "N/A";
        return `mailto:${email}`;
    };

    const toggleRow = (index) => {
        setExpandedRow(expandedRow === index ? null : index);
    };

    return (
        <div className="table-container overflow-x-auto w-full lg:w-[1130px] p-4 md:p-0 bg-white">
            <table className="hospital-table min-w-full table-auto border-collapse bg-white shadow-md rounded-lg">
                {/* Table Header */}
                <thead className="bg-gray-100 border-b-2 border-gray-200">
                    <tr>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                            Hospital Name
                        </th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                            Region Name
                        </th>
                        <th className="hidden md:table-cell px-4 py-2 text-left text-sm font-medium text-gray-700">
                            District
                        </th>
                        <th className="hidden md:table-cell px-4 py-2 text-left text-sm font-medium text-gray-700">
                            Contact
                        </th>
                        <th className="hidden md:table-cell px-4 py-2 text-left text-sm font-medium text-gray-700">
                            Email
                        </th>
                        <th className="hidden md:table-cell px-4 py-2 text-left text-sm font-medium text-gray-700">
                            Google Maps
                        </th>
                        <th className="md:hidden px-4 py-2 text-left text-sm font-medium text-gray-700">
                            View More
                        </th>
                    </tr>
                </thead>

                {/* Table Body */}
                <tbody>
                    {data.length > 0 ? (
                        data.map((hospital, index) => (
                            <React.Fragment key={index}>
                                <tr
                                    className={`border-b transition-colors duration-200 ${expandedRow === index ? "bg-gray-100" : "hover:bg-gray-50"
                                        }`}
                                >
                                    {/* Hospital Name */}
                                    <td className="px-4 py-2 bg-white">{hospital.name}</td>
                                    {/* Region Name */}
                                    <td className="px-4 py-2 bg-white">{hospital.region}</td>
                                    {/* Expand/Collapse button for smaller screens */}
                                    <td className="md:hidden px-4 py-2 bg-white">
                                        <button
                                            onClick={() => toggleRow(index)}
                                            className="text-[#9e825b] hover:text-gray-800 focus:outline-none pl-2"
                                        >
                                            {expandedRow === index ? (
                                                <BsThreeDots size={24} className="inline" />
                                            ) : (
                                                <BsThreeDotsVertical size={24} className="inline" />
                                            )}
                                        </button>
                                    </td>
                                    {/* Additional fields (hidden on smaller screens) */}
                                    <td className="hidden md:table-cell px-4 py-2 bg-white">
                                        {hospital.district}
                                    </td>
                                    <td className="hidden md:table-cell px-4 py-2 bg-white">
                                        {hospital.contact}
                                    </td>
                                    <td className="hidden md:table-cell px-4 py-2 bg-white">
                                        {hospital.email ? (
                                            <a
                                                href={getMailToLink(hospital.email)}
                                                className="text-[#9e825b] hover:underline"
                                            >
                                                {hospital.email}
                                            </a>
                                        ) : (
                                            "N/A"
                                        )}
                                    </td>
                                    <td className="hidden md:table-cell px-4 py-2 bg-white">
                                        {hospital.latitude && hospital.longitude ? (
                                            <a
                                                href={getGoogleMapsLink(
                                                    hospital.latitude,
                                                    hospital.longitude
                                                )}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[#9e825b] hover:underline"
                                            >
                                                View on Map
                                            </a>
                                        ) : (
                                            "N/A"
                                        )}
                                    </td>
                                </tr>
                                {/* Expanded content for smaller screens */}
                                {expandedRow === index && (
                                    <tr className="md:hidden bg-gray-100">
                                        <td
                                            colSpan="3"
                                            className="px-4 py-2 text-sm text-gray-600 space-y-2"
                                        >
                                            <p>
                                                <strong>District:</strong> {hospital.district}
                                            </p>
                                            <p>
                                                <strong>Contact:</strong> {hospital.contact}
                                            </p>
                                            <p>
                                                <strong>Email:</strong>{" "}
                                                {hospital.email ? (
                                                    <a
                                                        href={getMailToLink(hospital.email)}
                                                        className="text-[#9e825b] hover:underline"
                                                    >
                                                        {hospital.email}
                                                    </a>
                                                ) : (
                                                    "N/A"
                                                )}
                                            </p>
                                            <p>
                                                <strong>Google Maps:</strong>{" "}
                                                {hospital.latitude && hospital.longitude ? (
                                                    <a
                                                        href={getGoogleMapsLink(
                                                            hospital.latitude,
                                                            hospital.longitude
                                                        )}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-[#9e825b] hover:underline"
                                                    >
                                                        View on Map
                                                    </a>
                                                ) : (
                                                    "N/A"
                                                )}
                                            </p>
                                        </td>
                                    </tr>
                                )}
                            </React.Fragment>
                        ))
                    ) : (
                        <tr>
                            <td
                                colSpan="6"
                                className="px-4 py-4 text-center text-gray-500 font-medium bg-white"
                            >
                                No hospitals found
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default HospitalTable;
