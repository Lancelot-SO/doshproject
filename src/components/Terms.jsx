import React from 'react';

const Terms = ({ onClose }) => {
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="relative w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg px-8 py-14 overflow-y-auto h-[90vh] lg:mt-12 mt-32">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute lg:top-4 top-4 right-4 text-gray-500 hover:text-gray-800 text-4xl focus:outline-none"
                    aria-label="Close terms and conditions"
                >
                    &times;
                </button>

                {/* Content */}
                <div className="text-gray-700 space-y-6">
                    <h2 className="lg:text-2xl text-xl font-bold mb-4 flex items-center justify-center">TERMS AND CONDITIONS</h2>
                    <hr className="my-10 border-gray-200" />

                    {/* Eligibility Section */}
                    <div>
                        <h3 className="text-xl font-semibold mb-2">ELIGIBILITY FOR COVER</h3>
                        <ul className="list-decimal pl-5 space-y-3 text-[14px]">
                            <li>
                                Any resident of Ghana is eligible for admission as a Beneficiary under this Policy.
                            </li>
                            <li>
                                Individuals under 60 years of age at policy commencement are eligible for standard admission. Those 60 years and above may be admitted at the Scheme's discretion under special conditions.                            </li>
                            <li>
                                Each Beneficiary shall provide the Scheme with requisite personal information as may be periodically required.                            </li>
                            <li>
                                Corporate memberships may qualify for underwriting waivers.
                            </li>
                            <li>
                                Coverage becomes effective exclusively from the Commencement Date, irrespective of whether the Scheme or its authorized Agent has received fees for Policy coverage during consideration of a potential Beneficiary's application.                            </li>
                            <li>
                                Upon review of the application and subject to the Beneficiary's acceptance of underwriting conditions, the Scheme shall receive Premium payments. Coverage shall not commence under any circumstances until Premium payment has been cleared by the Scheme's banking partners and a receipt issued to the applicant.                            </li>
                            <li>
                                Coverage and Premium payments are only effective when properly communicated to or received by the Scheme.                            </li>
                            <li>
                                Retroactive Coverage is not permitted.                            </li>
                            <li>
                                The Scheme reserves the right to reassess Coverage terms and conditions should a Beneficiary experience changes in employment status, marital status, or significant life events that may influence the underwriting assessment.                            </li>
                        </ul>
                        <br />
                        <p>
                            The Scheme assumes no responsibility toward any Beneficiary or prospective Beneficiary regarding acts or omissions of a duly appointed Agent, except those performed in accordance with specific contractual obligations between the Agent and the Scheme.                        </p>
                    </div>

                    {/* Exclusions Section */}
                    <div>
                        <h3 className="text-2xl font-bold mt-6 mb-2 flex">EXCLUSIONS</h3>
                        <p>
                            The Scheme shall not be liable for costs arising from hospitalization, bodily injury, sickness, or disease directly or indirectly caused by, related to, or resulting from:                        </p>
                        <ul className="list-decimal pl-5 space-y-3 text-[14px]">
                            <li>
                                Any costs incurred within the specified Waiting Period as detailed in the Policy Summary.
                            </li>
                            <li>
                                Any pre-existing ailment, disease, disorder, condition, or disability present at the admission date which the Beneficiary should have disclosed when applying.                            </li>
                            <li>
                                Any treatment or condition subsequently determined by the Scheme to be excluded, with due notification to the Principal Insured Person prior to the Renewal Date.                            </li>
                            <li>
                                Exposure to nuclear weapons, nuclear material, ionizing radiation, or contamination by radioactivity from nuclear fuel or nuclear waste combustion (where combustion includes any self-sustaining nuclear fission process).                            </li>
                            <li>
                                Investigations, treatment, or surgery for obesity and its sequelae.</li>
                            <li>All cosmetic surgical procedures.</li>
                            <li>
                                Fertility treatments including, but not limited to, artificial insemination, in vitro fertilization, and hormone replacement therapy.                            </li>
                            <li>
                                Purely diagnostic procedures or examinations without objective indications of impaired health.                            </li>
                            <li>
                                Attempted suicide or intentional self‑injury.
                            </li>
                            <li>
                                Conditions resulting from consumption of unprescribed drugs or narcotic substances, or prescribed medications not taken according to a registered Medical Practitioner's instructions.                            </li>
                            <li>
                                Conditions resulting from substance abuse, including drug addiction.
                            </li>
                            <li>
                                Incidents attributable to blood alcohol content exceeding eighty milligrams per one hundred millilitres, or incidents attributable to alcoholism.                            </li>
                            <li>
                                Participation in:
                                <ul className="list-none pl-5">
                                    <li>
                                        a.  Active military duty, police duty, reservist duty, civil commotion, labor disturbances, riots, strikes, or activities of locked-out workers.                                     </li>
                                    <li>
                                        b.  Aviation activities, except as a passenger or crew member on scheduled commercial flights.                                     </li>
                                    <li>
                                        c.  Any race or speed contest (excluding on foot or involving non-mechanically propelled vehicles).                                     </li>
                                    <li>
                                        d.  High-risk activities including, but not limited to, paragliding, hiking, canoeing, water rafting, water skiing, boxing, wrestling, polo, etc. e. Professional sports.                                     </li>
                                    <li>Professional Sports;</li>
                                    <li>
                                        e.  Activities where the Beneficiary deliberately exposes themselves to danger.                                    </li>
                                </ul>
                            </li>
                            <li>
                                Purchase or hire of external/internal medical appliances, except for crutches, braces, and/or elastic stockings provided upon hospital discharge.                            </li>
                            <li>
                                Recuperative holidays, regardless of medical necessity.
                            </li>
                            <li>
                                Services rendered by individuals not registered as medical personnel with relevant medical authorities in the country of treatment, except when specifically covered as a Policy benefit.                            </li>
                            <li>
                                The purchase of:
                                <ul className="list-none pl-5">
                                    <li>
                                        a.  Medications not prescribed by a registered qualified medical practitioner.
                                    </li>

                                    <li>
                                        b.  bandages, aids, syringes and instruments other than for in-hospital use or during an evacuation;
                                    </li>
                                    <li>
                                        c.  Bandages, aids, syringes, and instruments other than for in-hospital use or during evacuation.
                                    </li>
                                    <li>
                                        d.  Patent foods such as baby foods, tonics, slimming preparations, appetite suppressants, and smoking cessation aids.
                                    </li>
                                    <li>
                                        e.  Domestic and herbal remedies, homeopathic remedies, except when specifically covered as a Policy benefit.
                                    </li>
                                    <li>
                                        f.  Vitamins, tonics, and mineral supplements, except when specifically covered as a Policy benefit.
                                    </li>
                                    <li>
                                        g.  Contraceptives and sexual enhancers.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Medical examinations for insurance, school, camp, visa, employment, annual check-ups, or similar services.                            </li>
                            <li>
                                Admission and/or treatment in convalescent homes, elderly care facilities, or similar institutions for the aged or chronically ill, including private nursing costs, rehabilitation facilities, nursing homes, hospice care, and similar services, unless approved by the Scheme as an alternative to hospitalization.                            </li>
                            <li>
                                Any treatment or services for conditions that, in the Scheme's opinion, directly result from irregular behaviour, high-risk activities, negligence, contributory negligence, legal infractions, or failure to follow a Medical Practitioner's instructions.                            </li>
                            <li>
                                Events occurring under martial law, state of siege, or any circumstances determining the proclamation and enforcement of martial law or state of siege.                            </li>
                            <li>
                                Dental and ear treatments including but not limited to:
                                <ul className="list-none pl-5">
                                    <li>
                                        a.  Provision of false teeth, dentures, orthodontics, advanced and specialized dentistry except when specifically covered as a Policy benefit.      </li>
                                    <li>
                                        b.  Provision of hearing aids, except when specifically covered as a Policy benefit.                                        </li>
                                </ul>
                            </li>
                            <li>
                                Confinements other than routine deliveries and medically necessary caesarean sections, including treatments for birth defects, congenital illnesses, and foetal treatments. All abortions are excluded except where there exists an immediate threat to the mother's life.                            </li>
                            <li>
                                Elective caesarean section costs.</li>
                            <li>
                                Congenital abnormalities.
                            </li>
                            <li>
                                Mental health and/or psychiatric conditions, except when specifically covered as a Policy benefit.                            </li>
                            <li>
                                All hepatitis treatments except for surface antigen screening, unless specifically covered as a Policy benefit.                            </li>
                            <li>
                                Renal dialysis beyond short-term acute treatment for reversible conditions as specified in the benefit schedule.                            </li>
                            <li>
                                Organ transplantation and organ donation procedures.
                            </li>
                            <li>
                                Brain and cardiovascular surgeries unless resulting from accidents occurring during the current policy year.                            </li>
                            <li>
                                Auxiliary services including but not limited to those provided by psychologists, podiatrists, chiropodists, chiropractors, homeopaths, naturopaths, osteopaths, acupuncturists, speech therapists, herbalists, spiritualists, traditional medicine practitioners, and occupational therapists, except when specifically covered as a Policy benefit.                            </li>
                            <li>
                                All costs relating to treatment covered by any other insurance policy.
                            </li>
                            <li>
                                Treatment by a Medical Practitioner who is a relative of the Insured, except in emergency cases or life-threatening situations.
                            </li>
                            <li>
                                Costs directly or indirectly relating to gender reassignment procedures.                            </li>
                            <li>
                                Costs relating to corrective treatments for medical procedures not covered by the Policy.                            </li>
                            <li>
                                Cryopreservation, implantation, or re-implantation of living cells or tissue.                            </li>
                            <li>
                                Any claims exceeding the benefit limits indicated in the Benefit Schedule (Schedule VI).                            </li>
                            <li>
                                All costs relating to cancer treatment of any kind, except when specifically covered as a Policy benefit.                            </li>
                            <li>
                                Costs relating to neurosurgery, cardiothoracic procedures, and colorectal surgeries, except when specifically covered as a Policy benefit.                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Terms;
