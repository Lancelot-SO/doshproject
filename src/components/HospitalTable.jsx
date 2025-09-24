import React, { useState } from "react";
import { BsThreeDots, BsThreeDotsVertical } from "react-icons/bs";

const getGoogleMapsLink = (location_address) =>
    location_address ? `https://www.google.com/maps?q=${encodeURIComponent(location_address)}` : null;

// const getGoogleMapsLink = (location_address) => {
//     if (!location_address) return null;
//     // remove ALL whitespace characters before encoding
//     const cleaned = location_address.replace(/\s+/g, '');
//     return `https://www.google.com/maps?q=${encodeURIComponent(cleaned)}`;
// };

const getMailToLink = (email) => (email ? `mailto:${email}` : "N/A");

const HospitalTable = ({ data }) => {
    const [expandedRow, setExpandedRow] = useState(null);

    const toggleRow = (i) => setExpandedRow(expandedRow === i ? null : i);

    return (
        <div className="table-container overflow-x-auto w-full lg:w-[1130px] p-4 md:p-0 bg-white">
            <table className="hospital-table min-w-full table-auto border-collapse bg-white shadow-md rounded-lg">
                <thead className="bg-gray-100 border-b-2 border-gray-200">
                    <tr>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Hospital Name</th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Region Name</th>
                        <th className="hidden md:table-cell px-4 py-2 text-left text-sm font-medium text-gray-700">District</th>
                        <th className="hidden md:table-cell px-4 py-2 text-left text-sm font-medium text-gray-700">Contact</th>
                        <th className="hidden md:table-cell px-4 py-2 text-left text-sm font-medium text-gray-700">Email</th>
                        <th className="hidden md:table-cell px-4 py-2 text-left text-sm font-medium text-gray-700">Google Maps</th>
                        <th className="md:hidden px-4 py-2 text-left text-sm font-medium text-gray-700">View More</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                        data.map((h, i) => {
                            const mapUrl = getGoogleMapsLink(h.location_address);

                            return (
                                <React.Fragment key={i}>
                                    <tr
                                        className={`border-b transition-colors duration-200 ${expandedRow === i ? "bg-gray-100" : "hover:bg-gray-50"
                                            }`}
                                    >
                                        <td className="px-4 py-2 bg-white">{h.hospital_name}</td>
                                        <td className="px-4 py-2 bg-white">{h.region_name}</td>
                                        <td className="md:hidden px-4 py-2 bg-white">
                                            <button
                                                onClick={() => toggleRow(i)}
                                                className="text-[#9e825b] hover:text-gray-800 focus:outline-none pl-2"
                                            >
                                                {expandedRow === i ? <BsThreeDots size={24} /> : <BsThreeDotsVertical size={24} />}
                                            </button>
                                        </td>
                                        <td className="hidden md:table-cell px-4 py-2 bg-white">{h.district}</td>
                                        <td className="hidden md:table-cell px-4 py-2 bg-white">
                                            {h.phone_number1}
                                            {h.phone_number2 ? ` / ${h.phone_number2}` : ""}
                                        </td>
                                        <td className="hidden md:table-cell px-4 py-2 bg-white">
                                            {h.email ? (
                                                <a href={getMailToLink(h.email)} className="text-[#9e825b] hover:underline">
                                                    {h.email}
                                                </a>
                                            ) : (
                                                "N/A"
                                            )}
                                        </td>
                                        <td className="hidden md:table-cell px-4 py-2 bg-white">
                                            {mapUrl ? (
                                                <a
                                                    href={mapUrl}
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

                                    {expandedRow === i && (
                                        <tr className="md:hidden bg-gray-100">
                                            <td colSpan="3" className="px-4 py-2 text-sm text-gray-600 space-y-2">
                                                <p>
                                                    <strong>District:</strong> {h.district}
                                                </p>
                                                <p>
                                                    <strong>Contact:</strong> {h.phone_number1}
                                                    {h.phone_number2 ? ` / ${h.phone_number2}` : ""}
                                                </p>
                                                <p>
                                                    <strong>Email:</strong>{" "}
                                                    {h.email ? (
                                                        <a href={getMailToLink(h.email)} className="text-[#9e825b] hover:underline">
                                                            {h.email}
                                                        </a>
                                                    ) : (
                                                        "N/A"
                                                    )}
                                                </p>
                                                <p>
                                                    <strong>Google Maps:</strong>{" "}
                                                    {mapUrl ? (
                                                        <a
                                                            href={mapUrl}
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
                            );
                        })
                    ) : (
                        <tr>
                            <td colSpan="6" className="px-4 py-4 text-center text-gray-500 font-medium bg-white">
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
