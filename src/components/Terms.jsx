import React from 'react';

const Terms = ({ onClose }) => {
    // Prevent clicks inside the modal from closing it
    const handleContentClick = (e) => {
        e.stopPropagation();
    };

    return (
        <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-4xl h-[90vh] mx-auto lg:mt-12 mt-32"
                onClick={handleContentClick}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-4xl z-10 focus:outline-none"
                    aria-label="Close terms and conditions"
                >
                    &times;
                </button>

                <div className="bg-white rounded-lg shadow-lg px-8 py-14 overflow-y-auto h-full">
                    <div className="text-gray-700 space-y-6">
                        <h2 className="lg:text-2xl text-xl font-bold mb-4 flex items-center justify-center">
                            TERMS AND CONDITIONS
                        </h2>
                        <hr className="my-10 border-gray-200" />

                        {/* Eligibility Section */}
                        <div>
                            <h3 className="text-xl font-semibold mb-2">ELIGIBILITY FOR COVER</h3>
                            <ul className="list-decimal pl-5 space-y-3 text-[14px]">
                                <li>Any resident of Ghana is eligible for admission as a Beneficiary under this Policy.</li>
                                <li>Individuals under 60 years of age at policy commencement are eligible for standard admission. Those 60 years and above may be admitted at the Scheme's discretion under special conditions.</li>
                                <li>Each Beneficiary shall provide the Scheme with requisite personal information as may be periodically required.</li>
                                <li>Corporate memberships may qualify for underwriting waivers.</li>
                                <li>Coverage becomes effective exclusively from the Commencement Date, irrespective of whether the Scheme or its authorized Agent has received fees for Policy coverage during consideration of a potential Beneficiary's application.</li>
                                <li>Upon review of the application and subject to the Beneficiary's acceptance of underwriting conditions, the Scheme shall receive Premium payments. Coverage shall not commence under any circumstances until Premium payment has been cleared by the Scheme's banking partners and a receipt issued to the applicant.</li>
                                <li>Coverage and Premium payments are only effective when properly communicated to or received by the Scheme.</li>
                                <li>Retroactive Coverage is not permitted.</li>
                                <li>The Scheme reserves the right to reassess Coverage terms and conditions should a Beneficiary experience changes in employment status, marital status, or significant life events that may influence the underwriting assessment.</li>
                            </ul>
                            <p className="mt-4">
                                The Scheme assumes no responsibility toward any Beneficiary or prospective Beneficiary regarding acts or omissions of a duly appointed Agent, except those performed in accordance with specific contractual obligations between the Agent and the Scheme.
                            </p>
                        </div>

                        {/* Exclusions Section */}
                        <div>
                            <h3 className="text-2xl font-bold mt-6 mb-2 flex">EXCLUSIONS</h3>
                            <p>
                                The Scheme shall not be liable for costs arising from hospitalization, bodily injury, sickness, or disease directly or indirectly caused by, related to, or resulting from:
                            </p>
                            <ul className="list-decimal pl-5 space-y-3 text-[14px]">
                                <li>Any costs incurred within the specified Waiting Period as detailed in the Policy Summary.</li>
                                <li>Any pre-existing ailment, disease, disorder, condition, or disability present at the admission date which the Beneficiary should have disclosed when applying.</li>
                                <li>Any treatment or condition subsequently determined by the Scheme to be excluded, with due notification to the Principal Insured Person prior to the Renewal Date.</li>
                                <li>Exposure to nuclear weapons, nuclear material, ionizing radiation, or contamination by radioactivity from nuclear fuel or nuclear waste combustion.</li>
                                <li>Investigations, treatment, or surgery for obesity and its sequelae.</li>
                                <li>All cosmetic surgical procedures.</li>
                                <li>Fertility treatments including, but not limited to, artificial insemination, in vitro fertilization, and hormone replacement therapy.</li>
                                <li>Purely diagnostic procedures or examinations without objective indications of impaired health.</li>
                                <li>Attempted suicide or intentional self‑injury.</li>
                                <li>Conditions resulting from unprescribed drugs or narcotics, or misuse of prescribed medication.</li>
                                <li>Conditions resulting from substance abuse, including drug addiction.</li>
                                <li>Incidents attributable to excessive alcohol consumption or alcoholism.</li>
                                <li>
                                    Participation in:
                                    <ul className="list-none pl-5">
                                        <li>a. Active military, police, or reservist duty, civil commotion, labor disputes, or riots.</li>
                                        <li>b. Aviation (except as passenger or crew on commercial flights).</li>
                                        <li>c. Any race or speed contest (other than on foot).</li>
                                        <li>d. High-risk activities like paragliding, rafting, water skiing, boxing, wrestling, polo, professional sports, etc.</li>
                                        <li>e. Activities involving deliberate exposure to danger.</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Terms;
