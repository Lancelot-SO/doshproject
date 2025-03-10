import React from 'react';

const HomeProtectionTable = ({ tableData, setTableData }) => {


    // Handler for checkboxes and text inputs
    const handleChange = (e, key, field) => {
        const { type, checked, value } = e.target;
        setTableData((prev) => ({
            ...prev,
            [key]: {
                ...prev[key],
                [field]: type === 'checkbox' ? checked : value
            }
        }));
    };

    // Example function if you want to calculate total premium dynamically
    const calculateTotalPremium = () => {
        // Add up numeric premiums or do any logic needed
        // For demonstration, we'll just return an empty string or a static sum
        return '';
    };

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left">Item</th>
                        <th className="border border-gray-300 px-4 py-2 text-center">Do you wish to Insure?</th>
                        <th className="border border-gray-300 px-4 py-2 text-center">Sum Insured</th>
                        <th className="border border-gray-300 px-4 py-2 text-center">Premium</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Section 1: Building */}
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">
                            <strong>Section 1</strong> <br />
                            Building <br />
                            <span className="text-sm text-gray-600">
                                (The sum insured must represent the full cost of rebuilding and
                                make allowance for the costs of shoring up, debris removal, architects’ fees, etc.)
                            </span>
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                            <input
                                type="checkbox"
                                checked={tableData.section1Building.insure}
                                onChange={(e) => handleChange(e, 'section1Building', 'insure')}
                            />
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                            <input
                                type="text"
                                className="w-20 border rounded p-1 text-center"
                                value={tableData.section1Building.sumInsured}
                                onChange={(e) => handleChange(e, 'section1Building', 'sumInsured')}
                            />
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                            {/* You can allow user input or set it automatically */}
                            <input
                                type="text"
                                className="w-20 border rounded p-1 text-center"
                                value={tableData.section1Building.premium}
                                onChange={(e) => handleChange(e, 'section1Building', 'premium')}
                            />
                        </td>
                    </tr>

                    {/* Fence */}
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">Fence</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                            <input
                                type="checkbox"
                                checked={tableData.section1Fence.insure}
                                onChange={(e) => handleChange(e, 'section1Fence', 'insure')}
                            />
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                            <input
                                type="text"
                                className="w-20 border rounded p-1 text-center"
                                value={tableData.section1Fence.sumInsured}
                                onChange={(e) => handleChange(e, 'section1Fence', 'sumInsured')}
                            />
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                            <input
                                type="text"
                                className="w-20 border rounded p-1 text-center"
                                value={tableData.section1Fence.premium}
                                onChange={(e) => handleChange(e, 'section1Fence', 'premium')}
                            />
                        </td>
                    </tr>

                    {/* Alternative Accommodation and Rent */}
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">
                            Alternative Accommodation and Rent
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                            <input
                                type="checkbox"
                                checked={tableData.section1AlternativeAccommodation.insure}
                                onChange={(e) =>
                                    handleChange(e, 'section1AlternativeAccommodation', 'insure')
                                }
                            />
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                            <input
                                type="text"
                                className="w-20 border rounded p-1 text-center"
                                value={tableData.section1AlternativeAccommodation.sumInsured}
                                onChange={(e) =>
                                    handleChange(e, 'section1AlternativeAccommodation', 'sumInsured')
                                }
                            />
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                            <input
                                type="text"
                                className="w-20 border rounded p-1 text-center"
                                value={tableData.section1AlternativeAccommodation.premium}
                                onChange={(e) =>
                                    handleChange(e, 'section1AlternativeAccommodation', 'premium')
                                }
                            />
                        </td>
                    </tr>

                    {/* Your Legal Liability as Priority Owner */}
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">
                            Your Legal Liability as Priority Owner
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                            <input
                                type="checkbox"
                                checked={tableData.section1Liability.insure}
                                onChange={(e) => handleChange(e, 'section1Liability', 'insure')}
                            />
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                            {/* This example defaults to 500 */}
                            <input
                                type="text"
                                className="w-20 border rounded p-1 text-center"
                                value={tableData.section1Liability.sumInsured}
                                onChange={(e) => handleChange(e, 'section1Liability', 'sumInsured')}
                            />
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                            {/* Defaults to FREE */}
                            <input
                                type="text"
                                className="w-20 border rounded p-1 text-center"
                                value={tableData.section1Liability.premium}
                                onChange={(e) => handleChange(e, 'section1Liability', 'premium')}
                            />
                        </td>
                    </tr>

                    {/* Section 2: Content */}
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">
                            <strong>Section 2</strong> <br />
                            Content <br />
                            <span className="text-sm text-gray-600">
                                (We shall not pay more than GHS 2,000.00 for any single item
                                unless specifically listed and specify value indicated)
                            </span>
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                            <input
                                type="checkbox"
                                checked={tableData.section2Content.insure}
                                onChange={(e) => handleChange(e, 'section2Content', 'insure')}
                            />
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                            {/* Default example: 10,000 */}
                            <input
                                type="text"
                                className="w-20 border rounded p-1 text-center"
                                value={tableData.section2Content.sumInsured}
                                onChange={(e) => handleChange(e, 'section2Content', 'sumInsured')}
                            />
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                            {/* Default example: 80.00 */}
                            <input
                                type="text"
                                className="w-20 border rounded p-1 text-center"
                                value={tableData.section2Content.premium}
                                onChange={(e) => handleChange(e, 'section2Content', 'premium')}
                            />
                        </td>
                    </tr>

                    {/* Section 3: Personal Liability */}
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">
                            <strong>Section 3</strong> <br />
                            Personal Liability
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                            <input
                                type="checkbox"
                                checked={tableData.section3PersonalLiability.insure}
                                onChange={(e) =>
                                    handleChange(e, 'section3PersonalLiability', 'insure')
                                }
                            />
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                            {/* Default example: 500 */}
                            <input
                                type="text"
                                className="w-20 border rounded p-1 text-center"
                                value={tableData.section3PersonalLiability.sumInsured}
                                onChange={(e) =>
                                    handleChange(e, 'section3PersonalLiability', 'sumInsured')
                                }
                            />
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                            {/* Default example: FREE */}
                            <input
                                type="text"
                                className="w-20 border rounded p-1 text-center"
                                value={tableData.section3PersonalLiability.premium}
                                onChange={(e) =>
                                    handleChange(e, 'section3PersonalLiability', 'premium')
                                }
                            />
                        </td>
                    </tr>

                    {/* Section 4: Employer's Liability */}
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">
                            <strong>Section 4</strong> <br />
                            Employer's Liability <br />
                            <span className="text-sm text-gray-600">
                                Number of indoor servants, outdoor servants, drivers
                            </span>
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                            <input
                                type="checkbox"
                                checked={tableData.section4EmployersLiability.insure}
                                onChange={(e) =>
                                    handleChange(e, 'section4EmployersLiability', 'insure')
                                }
                            />
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                            {/* "Unlimited" for sum insured example */}
                            <input
                                type="text"
                                className="w-20 border rounded p-1 text-center"
                                value={tableData.section4EmployersLiability.sumInsured}
                                onChange={(e) =>
                                    handleChange(e, 'section4EmployersLiability', 'sumInsured')
                                }
                            />
                            <div className="mt-2 text-sm text-gray-600">
                                <label className="block">
                                    Indoor servants:&nbsp;
                                    <input
                                        type="number"
                                        className="w-16 border rounded p-1"
                                        value={tableData.section4EmployersLiability.indoorServants}
                                        onChange={(e) =>
                                            setTableData((prev) => ({
                                                ...prev,
                                                section4EmployersLiability: {
                                                    ...prev.section4EmployersLiability,
                                                    indoorServants: e.target.value
                                                }
                                            }))
                                        }
                                    />
                                </label>
                                <label className="block">
                                    Outdoor servants:&nbsp;
                                    <input
                                        type="number"
                                        className="w-16 border rounded p-1"
                                        value={tableData.section4EmployersLiability.outdoorServants}
                                        onChange={(e) =>
                                            setTableData((prev) => ({
                                                ...prev,
                                                section4EmployersLiability: {
                                                    ...prev.section4EmployersLiability,
                                                    outdoorServants: e.target.value
                                                }
                                            }))
                                        }
                                    />
                                </label>
                                <label className="block">
                                    Drivers:&nbsp;
                                    <input
                                        type="number"
                                        className="w-16 border rounded p-1"
                                        value={tableData.section4EmployersLiability.drivers}
                                        onChange={(e) =>
                                            setTableData((prev) => ({
                                                ...prev,
                                                section4EmployersLiability: {
                                                    ...prev.section4EmployersLiability,
                                                    drivers: e.target.value
                                                }
                                            }))
                                        }
                                    />
                                </label>
                            </div>
                        </td>
                        <td className="border border-gray-50 px-4 py-2 text-center">
                            {/* "5.00 per head" example */}
                            <input
                                type="text"
                                className="w-20 border rounded p-1 text-center"
                                value={tableData.section4EmployersLiability.premium}
                                onChange={(e) =>
                                    handleChange(e, 'section4EmployersLiability', 'premium')
                                }
                            />
                        </td>
                    </tr>

                    {/* Personal Accident to Insured */}
                    <tr>
                        <td className="border border-gray-50 px-4 py-2">
                            Personal Accident to Insured
                            <br />
                            <span className="text-sm text-gray-600">
                                a. Death <br />
                                b. Permanent Disability <br />
                                c. Medical expenses (per annum)
                            </span>
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                            {/* If you want a single checkbox for all or separate checkboxes for each item: */}
                            {/* Example: separate checkboxes for a, b, c */}
                            <div className="flex flex-col items-center space-y-1">
                                <label className="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={tableData.section4PersonalAccidentDeath.insure}
                                        onChange={(e) =>
                                            handleChange(e, 'section4PersonalAccidentDeath', 'insure')
                                        }
                                    />
                                    <span className="ml-1 text-sm">Death</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={tableData.section4PersonalAccidentDisability.insure}
                                        onChange={(e) =>
                                            handleChange(
                                                e,
                                                'section4PersonalAccidentDisability',
                                                'insure'
                                            )
                                        }
                                    />
                                    <span className="ml-1 text-sm">Permanent Disability</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={tableData.section4PersonalAccidentMedical.insure}
                                        onChange={(e) =>
                                            handleChange(e, 'section4PersonalAccidentMedical', 'insure')
                                        }
                                    />
                                    <span className="ml-1 text-sm">Medical Expenses</span>
                                </label>
                            </div>
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                            {/* If each coverage (death/disability/medical) has its own sum insured, 
                  you can add separate inputs. Otherwise, you can keep it blank or unify. */}
                            —
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                            {/* Could be user input or static. */}
                            —
                        </td>
                    </tr>

                    {/* Total Premium row */}
                    <tr>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">
                            Total Premium
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-center" colSpan={2}>
                            {/* If you want to calculate automatically, do so here. */}
                            <button
                                type="button"
                                onClick={() =>
                                    setTableData((prev) => ({
                                        ...prev,
                                        totalPremium: calculateTotalPremium()
                                    }))
                                }
                                className="bg-gray-200 hover:bg-gray-300 text-sm px-3 py-1 rounded"
                            >
                                Calculate
                            </button>
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-center font-semibold">
                            <input
                                type="text"
                                className="w-20 border rounded p-1 text-center"
                                value={tableData.totalPremium}
                                onChange={(e) =>
                                    setTableData((prev) => ({
                                        ...prev,
                                        totalPremium: e.target.value
                                    }))
                                }
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default HomeProtectionTable;
