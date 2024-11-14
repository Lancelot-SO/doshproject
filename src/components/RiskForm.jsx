import React from 'react';

const RiskForm = ({ onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
            <div className="bg-white w-[70%] max-h-[80vh] rounded-lg p-6 relative overflow-y-auto">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 bg-[#9E825B] text-white rounded-full w-10 h-10 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition duration-300 ease-in-out z-10"
                    aria-label="Close"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <h2 className="text-xl font-bold mb-4">DOSH Risk Brokerage</h2>
                <h2 className="my-6 text-gray-800 text-[20px] font-semibold">
                    Submit Completed form(s) to the email address provided:
                    <a
                        href="mailto:Info@example.com"
                        className="text-blue-500 hover:underline ml-2"
                    >
                        risk@0800dosh.me
                    </a>
                </h2>

                <ul className="space-y-2">
                    <li className="flex justify-between items-center border-b border-gray-300 p-2">
                        <span className='text-black'>1. Assets All Risks Insurance Claim Form</span>
                        <a
                            href="/enterpriseforms/Assets_All_Risks Insurance_Claim_Form.pdf"
                            download
                            className="text-blue-500 hover:underline"
                        >
                            Download
                        </a>
                    </li>
                    <li className="flex justify-between items-center border-b border-gray-300 p-2">
                        <span className='text-black'>2. CAR - Questionnaire_and_proposal</span>
                        <a
                            href="/enterpriseforms/CAR_Questionnaire_and_proposal.pdf"
                            download
                            className="text-blue-500 hover:underline"
                        >
                            Download
                        </a>
                    </li>
                    <li className="flex justify-between items-center border-b border-gray-300 p-2">
                        <span className='text-black'>3. DIRECTORS_& OFFICERS LIABILITY Proposal Form</span>
                        <a
                            href="/enterpriseforms/DIRECTORS_ &_OFFICERS_LIABILITY_Proposal_Form.pdf"
                            download
                            className="text-blue-500 hover:underline"
                        >
                            Download
                        </a>
                    </li>
                    <li className="flex justify-between items-center border-b border-gray-300 p-2">
                        <span className='text-black'>4. assets all risk proposal form</span>
                        <a
                            href="/enterpriseforms/enterprise_assets_all_risk_proposal_form.pdf"
                            download
                            className="text-blue-500 hover:underline"
                        >
                            Download
                        </a>
                    </li>
                    <li className="flex justify-between items-center border-b border-gray-300 p-2">
                        <span className='text-black'>5. commercial vehicle insurance</span>
                        <a
                            href="/enterpriseforms/enterprise_commercial_vehicle_insurance.pdf"
                            download
                            className="text-blue-500 hover:underline"
                        >
                            Download
                        </a>
                    </li>
                    <li className="flex justify-between items-center border-b border-gray-300 p-2">
                        <span className='text-black'>6. fidelity quarantee claim form</span>
                        <a
                            href="/enterpriseforms/enterprise_fidelity_guarantee_claim_form.pdf"
                            download
                            className="text-blue-500 hover:underline"
                        >
                            Download
                        </a>
                    </li>
                    <li className="flex justify-between items-center border-b border-gray-300 p-2">
                        <span className='text-black'>7. fire insurance proposal form</span>
                        <a
                            href="/enterpriseforms/enterprise_fire_insurance_proposal_form.pdf"
                            download
                            className="text-blue-500 hover:underline"
                        >
                            Download
                        </a>
                    </li>
                    <li className="flex justify-between items-center border-b border-gray-300 p-2">
                        <span className='text-black'>8. home protection -with content</span>
                        <a
                            href="/enterpriseforms/enterprise_home_protection_with_content.pdf"
                            download
                            className="text-blue-500 hover:underline"
                        >
                            Download
                        </a>
                    </li>
                    <li className="flex justify-between items-center border-b border-gray-300 p-2">
                        <span className='text-black'>9. marine open cover</span>
                        <a
                            href="/enterpriseforms/enterprise_marine_open_cover.pdf"
                            download
                            className="text-blue-500 hover:underline"
                        >
                            Download
                        </a>
                    </li>
                    <li className="flex justify-between items-center border-b border-gray-300 p-2">
                        <span className='text-black'>10.motor insurance - endorsement only</span>
                        <a
                            href="/enterpriseforms/enterprise_motor_insurance_endorsements_only.pdf"
                            download
                            className="text-blue-500 hover:underline"
                        >
                            Download
                        </a>
                    </li>
                    <li className="flex justify-between items-center border-b border-gray-300 p-2">
                        <span className='text-black'>11. private motor insurance proposal form latest 1</span>
                        <a
                            href="/enterpriseforms/enterprise_private_motor_insurance_proposal_form_latest_1.pdf"
                            download
                            className="text-blue-500 hover:underline"
                        >
                            Download
                        </a>
                    </li>
                    <li className="flex justify-between items-center border-b border-gray-300 p-2">
                        <span className='text-black'>12. professional indemnity form</span>
                        <a
                            href="/enterpriseforms/enterprise_professtional_indemnity_form.pdf"
                            download
                            className="text-blue-500 hover:underline"
                        >
                            Download
                        </a>
                    </li>
                    <li className="flex justify-between items-center border-b border-gray-300  p-2">
                        <span className='text-black'>13. theft insurance proposal form</span>
                        <a
                            href="/enterpriseforms/enterprise_theft_insurance_proposal_form.pdf"
                            download
                            className="text-blue-500 hover:underline"
                        >
                            Download
                        </a>
                    </li>
                    <li className="flex justify-between items-center border-b border-gray-300 p-2">
                        <span className='text-black'>14. goods in transit proposal insurance</span>
                        <a
                            href="/enterpriseforms/goods_in_transit_proposal_insurance.pdf"
                            download
                            className="text-blue-500 hover:underline"
                        >
                            Download
                        </a>
                    </li>
                    <li className="flex justify-between items-center border-b border-gray-300  p-2">
                        <span className='text-black'>15. hotels and guest houses insurance proposal form</span>
                        <a
                            href="/enterpriseforms/hotels_and_guest_houses_insurance_proposal_form.pdf"
                            download
                            className="text-blue-500 hover:underline"
                        >
                            Download
                        </a>
                    </li>
                    <li className="flex justify-between items-center border-b border-gray-300  p-2">
                        <span className='text-black'>16. house hold content insuranceproposal form</span>
                        <a
                            href="/enterpriseforms/house_hold_content_insurance_proposal_form.pdf"
                            download
                            className="text-blue-500 hover:underline"
                        >
                            Download
                        </a>
                    </li>
                    <li className="flex justify-between items-center border-b border-gray-300 p-2">
                        <span className='text-black'>17. public liability form</span>
                        <a
                            href="/enterpriseforms/public_liabilty_form.pdf"
                            download
                            className="text-blue-500 hover:underline"
                        >
                            Download
                        </a>
                    </li>
                    <li className="flex justify-between items-center border-b border-gray-300 p-2">
                        <span className='text-black'>18. travel insurance proposal form latest 1</span>
                        <a
                            href="/enterpriseforms/travel_insurance_proposal_form_latest_1.pdf"
                            download
                            className="text-blue-500 hover:underline"
                        >
                            Download
                        </a>
                    </li>
                    <li className="flex justify-between items-center border-b border-gray-300 p-2">
                        <span className='text-black'>19. workmen's compensation and employers' liability insurance</span>
                        <a
                            href="/enterpriseforms/workmen’s_compensation_and_employers’_liability_insurance.pdf"
                            download
                            className="text-blue-500 hover:underline"
                        >
                            Download
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default RiskForm;
