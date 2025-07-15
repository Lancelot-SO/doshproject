import React, { useState, useEffect } from "react";
import image from "../../images/director.png";
import formlogo from "../../images/formlogo.png";
import { X } from 'lucide-react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Director = ({ onClose, userData }) => {
    const [formData, setFormData] = useState({
        companyName: "",
        headOfficeAddress: "",
        holdingCompany: "",
        companyType: "",
        natureOfBusiness: "",
        businessStartDate: "",
        boardDirectors: "",
        coverRequired: "",
        coverCompany: "",
        coverCountry: "",
        coverNetProfit: "",
        coverNetWorth: "",
        coverIncorporation: "",
        shareholdersCount: "",
        shareholdersDetails: "",
        listedStockExchange: "",
        unlistedSecurities: "",
        tradedOther: "",
        usAssets: "",
        usEmployees: "",
        canadaEmployees: "",
        subsidiaryName: "",
        subsidiaryInterest: "",
        stockIssued: "",
        lastOfferDate: "",
        securityAct: "",
        filingUploaded: null,
        acquisitions: "",
        publicOffering: "",
        publicOfferingnext: "",
        shareIssue: "",
        insurerName: "",
        policyPeriod: "",
        indemnityLimit: "",
        premium: "",
        insuranceRefusal: "",
        claimDetails: "",
        futureClaimDetails: "",
        details: "",
        nextdetails: "",
        indemnityRequired: "",
        declarationSigned: null,
        declarationCapacity: "",
        declarationCompany: "",
        declarationDate: "",
        message: "",
    });

    // Pre-populate from userData
    useEffect(() => {
        if (userData) {
            setFormData(prev => ({
                ...prev,
                companyName: userData.fullname?.trim() || "",
            }));
        }
    }, [userData]);

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === "file") {
            setFormData(f => ({ ...f, [name]: files[0] }));
        } else {
            setFormData(f => ({ ...f, [name]: value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Build a FormData payload if you need to include files
        const payload = new FormData();
        Object.entries(formData).forEach(([key, val]) => {
            if (val !== null && val !== undefined) {
                payload.append(key, val);
            }
        });
        try {
            const res = await fetch("/send-email.php", {
                method: "POST",
                body: payload,
            });
            const result = await res.json();
            if (result.status === "success") {
                toast.success(result.message || "Message sent successfully!");
                // reset state
                setFormData({
                    companyName: "",
                    headOfficeAddress: "",
                    holdingCompany: "",
                    companyType: "",
                    natureOfBusiness: "",
                    businessStartDate: "",
                    boardDirectors: "",
                    coverRequired: "",
                    coverCompany: "",
                    coverCountry: "",
                    coverNetProfit: "",
                    coverNetWorth: "",
                    coverIncorporation: "",
                    shareholdersCount: "",
                    shareholdersDetails: "",
                    listedStockExchange: "",
                    unlistedSecurities: "",
                    tradedOther: "",
                    usAssets: "",
                    usEmployees: "",
                    canadaEmployees: "",
                    subsidiaryName: "",
                    subsidiaryInterest: "",
                    stockIssued: "",
                    lastOfferDate: "",
                    securityAct: "",
                    filingUploaded: null,
                    acquisitions: "",
                    publicOffering: "",
                    publicOfferingnext: "",
                    shareIssue: "",
                    insurerName: "",
                    policyPeriod: "",
                    indemnityLimit: "",
                    premium: "",
                    insuranceRefusal: "",
                    claimDetails: "",
                    futureClaimDetails: "",
                    details: "",
                    nextdetails: "",
                    indemnityRequired: "",
                    declarationSigned: null,
                    declarationCapacity: "",
                    declarationCompany: "",
                    declarationDate: "",
                    message: "",
                });
                e.target.reset();
                setTimeout(onClose, 6000);
            } else {
                toast.error(result.message || "Failed to send message.");
            }
        } catch (err) {
            console.error(err);
            toast.error("An error occurred. Please try again.");
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4 lg:mt-0 mt-6 text-gray-800">
            <div className="bg-white w-full mt-16 sm:w-[80%] md:w-[70%] lg:w-[60%] max-h-[90vh] rounded-[20px]-lg shadow-lg flex overflow-hidden">

                {/* Left Side Image */}
                <div className="hidden md:flex flex-col w-1/2 bg-cover bg-center">
                    <img src={image} alt="Insurance" className="w-full h-[700px] extralarge:h-3/4 object-cover" loading="lazy" />
                    <div className='w-full h-full extralarge:h-1/4 bg-black p-4'>
                        <img src={formlogo} alt='formlogo' className='w-[112px] h-[53px]' loading='lazy' />
                        <h2 className='font-bold text-white text-[20px] mb-4 mt-4'>
                            Secure Your Future with Comprehensive Insurance Coverage
                        </h2>
                        <p className='text-[14px] text-white'>
                            We simplify insurance so you can focus on what truly matters.
                        </p>
                    </div>
                </div>

                {/* Right Side Form */}
                <div className="w-full md:w-1/2 p-6 relative overflow-y-auto">
                    <ToastContainer />


                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute lg:top-4 top-6 right-2 text-[#687588] font-bold rounded-full w-6 h-6 flex items-center justify-center"
                        aria-label="Close"
                    >
                        <X size={20} />
                    </button>
                    <h1 className="text-2xl font-bold mb-4">
                        Directors &amp; Officers Liability Insurance Proposal Request
                    </h1>
                    <p className="mb-6 text-gray-600">
                        All questions must be answered to enable a quotation to be given. The
                        completion and signature of this proposal form does not bind the Proposers
                        or the Underwriters to complete a contract of insurances.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Question 1: Company Details */}
                        <div>
                            <div className="mb-4">
                                <label className="block font-medium">
                                    1.(a) Name of the Company
                                </label>
                                <input
                                    type="text"
                                    name="companyName"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    required
                                    className="w-full border rounded p-2"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block font-medium">
                                    1.(b) Address of Head Office
                                </label>
                                <input
                                    type="text"
                                    name="headOfficeAddress"
                                    value={formData.headOfficeAddress}
                                    onChange={handleChange}
                                    required
                                    className="w-full border rounded p-2"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block font-medium">
                                    1.(c) If the Company in (a) is a subsidiary, state the name and address
                                    of the ultimate Holding Company
                                </label>
                                <input
                                    type="text"
                                    name="holdingCompany"
                                    value={formData.holdingCompany}
                                    onChange={handleChange}
                                    className="w-full border rounded p-2"
                                />
                            </div>
                        </div>

                        {/* Question 2: Company Information */}
                        <div>
                            <div className="mb-4">
                                <label className="block font-medium">
                                    2.(a) Type of Company (e.g., Public, Private, Close, Mutual, etc.)
                                </label>
                                <input
                                    type="text"
                                    name="companyType"
                                    value={formData.companyType}
                                    onChange={handleChange}
                                    className="w-full border rounded p-2"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block font-medium">2.(b) Nature of Business</label>
                                <input
                                    type="text"
                                    name="natureOfBusiness"
                                    value={formData.natureOfBusiness}
                                    onChange={handleChange}
                                    className="w-full border rounded p-2"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block font-medium">
                                    2.(c) Date since the company has continuously carried on business
                                </label>
                                <input
                                    type="date"
                                    name="businessStartDate"
                                    value={formData.businessStartDate}
                                    onChange={handleChange}
                                    className="w-full border rounded p-2"
                                />
                            </div>
                        </div>

                        {/* Question 3: Board of Directors */}
                        <div>
                            <h2 className="text-xl font-semibold mb-2">3. Board of Directors</h2>
                            <div className="mb-4">
                                <label className="block font-medium">
                                    Name and Date of Appointment (one per line)
                                </label>
                                <textarea
                                    name="boardDirectors"
                                    value={formData.boardDirectors}
                                    onChange={handleChange}
                                    placeholder="e.g., John Doe - 2020-01-15"
                                    className="w-full border rounded p-2"
                                    rows="3"
                                ></textarea>
                            </div>
                        </div>

                        {/* Question 4: Cover for Directors/Officers in Associated Companies */}
                        <div>
                            <h2 className="text-xl font-semibold mb-2">
                                4. Cover for Directors/Officers in Associated Companies
                            </h2>
                            <div className="mb-4">
                                <label className="block font-medium"> Is cover required under this policy for Directors or Officers of the Company or of its
                                    subsidiary companies whilst holding positions in any associated company? YES/NO </label>
                                <div className="flex items-center">
                                    <label className="mr-4">
                                        <input
                                            type="radio"
                                            name="coverRequired"
                                            value="yes"
                                            onChange={handleChange}
                                            className="mr-1"
                                        />{' '}
                                        Yes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="coverRequired"
                                            value="no"
                                            onChange={handleChange}
                                            className="mr-1"
                                        />{' '}
                                        No
                                    </label>
                                </div>
                            </div>
                            {formData.coverRequired === 'yes' && (
                                <div className="space-y-4">
                                    <div>
                                        <label className="block font-medium">Company</label>
                                        <input
                                            type="text"
                                            name="coverCompany"
                                            value={formData.coverCompany}
                                            onChange={handleChange}
                                            className="w-full border rounded p-2"
                                        />
                                    </div>
                                    <div>
                                        <label className="block font-medium">Company in Country which position Incorporation held </label>
                                        <input
                                            type="text"
                                            name="coverCountry"
                                            value={formData.coverCountry}
                                            onChange={handleChange}
                                            className="w-full border rounded p-2"
                                        />
                                    </div>
                                    <div>
                                        <label className="block font-medium">Net Profit</label>
                                        <input
                                            type="text"
                                            name="coverNetProfit"
                                            value={formData.coverNetProfit}
                                            onChange={handleChange}
                                            className="w-full border rounded p-2"
                                        />
                                    </div>
                                    <div>
                                        <label className="block font-medium">Net Worth</label>
                                        <input
                                            type="text"
                                            name="coverNetWorth"
                                            value={formData.coverNetWorth}
                                            onChange={handleChange}
                                            className="w-full border rounded p-2"
                                        />
                                    </div>
                                    <div>
                                        <label className="block font-medium">Incorporation</label>
                                        <input
                                            type="text"
                                            name="coverIncorporation"
                                            value={formData.coverIncorporation}
                                            onChange={handleChange}
                                            className="w-full border rounded p-2"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Question 5: Shareholders */}
                        <div>
                            <div className="mb-4">
                                <label className="block font-medium">
                                    5.(a) How many shareholders does the Company have?
                                </label>
                                <input
                                    type="number"
                                    name="shareholdersCount"
                                    value={formData.shareholdersCount}
                                    onChange={handleChange}
                                    className="w-full border rounded p-2"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block font-medium">
                                    5.(b) Are there any shareholders who own 10% or more of the issued shares?
                                    If so, detail the shareholders and percentages owned.
                                </label>
                                <textarea
                                    name="shareholdersDetails"
                                    value={formData.shareholdersDetails}
                                    onChange={handleChange}
                                    placeholder="Provide details here"
                                    className="w-full border rounded p-2"
                                    rows="3"
                                ></textarea>
                            </div>
                        </div>

                        {/* Question 6: Stock Information */}
                        <div>
                            <h2 className="text-xl font-semibold mb-2">6. Is the Company:- </h2>
                            <div className="mb-4">
                                <label className="block font-medium">
                                    6.(a) Listed on any Stock Exchange? (If so, state which and date listing obtained)
                                </label>
                                <input
                                    type="text"
                                    name="listedStockExchange"
                                    value={formData.listedStockExchange}
                                    onChange={handleChange}
                                    className="w-full border rounded p-2"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block font-medium">
                                    6.(b) Listed on the Unlisted Securities Market?
                                </label>
                                <input
                                    type="text"
                                    name="unlistedSecurities"
                                    value={formData.unlistedSecurities}
                                    onChange={handleChange}
                                    className="w-full border rounded p-2"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block font-medium">
                                    6.(c) Traded in any other way? (If so, specify)
                                </label>
                                <input
                                    type="text"
                                    name="tradedOther"
                                    value={formData.tradedOther}
                                    onChange={handleChange}
                                    className="w-full border rounded p-2"
                                />
                            </div>
                        </div>

                        {/* Question 7: Assets and Employees */}
                        <div>
                            <h2 className="text-xl font-semibold mb-2">Please give TotalGross No. of Employees
                                Assets </h2>
                            <div className="mb-4">
                                <label className="block font-medium">
                                    7.(a) The total gross assets of the Company
                                    and  its  subsidiary  companies  and  the
                                    number of employees in:
                                </label>
                                <input
                                    type="text"
                                    name="usAssets"
                                    value={formData.usAssets}
                                    onChange={handleChange}
                                    placeholder="Assets in USA"
                                    className="w-full border rounded p-2 mb-2"
                                />
                                <label className="block font-medium">
                                    the United States of America
                                </label>
                                <input
                                    type="number"
                                    name="usEmployees"
                                    value={formData.usEmployees}
                                    onChange={handleChange}
                                    placeholder="No. of Employees in USA"
                                    className="w-full border rounded p-2"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block font-medium">
                                    7.(ii) Number of Employees in Canada
                                </label>
                                <input
                                    type="number"
                                    name="canadaEmployees"
                                    value={formData.canadaEmployees}
                                    onChange={handleChange}
                                    placeholder="No. of Employees in Canada"
                                    className="w-full border rounded p-2"
                                />
                            </div>
                        </div>

                        {/* Question 8: Subsidiary in USA */}
                        <div>
                            <h2 className="text-xl font-semibold mb-2">.In respect of any subsidiary company in the
                                United States of America please advise: </h2>
                            <div className="mb-4">
                                <label className="block font-medium">
                                    8.(a) The name of the subsidiary:
                                </label>
                                <input
                                    type="text"
                                    name="subsidiaryName"
                                    value={formData.subsidiaryName}
                                    onChange={handleChange}
                                    className="w-full border rounded p-2"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block font-medium">
                                    8.(b) The Company’s percentage interest:
                                    (where  not 100% owned please state who
                                    owns the minority stock):
                                </label>
                                <input
                                    type="text"
                                    name="subsidiaryInterest"
                                    value={formData.subsidiaryInterest}
                                    onChange={handleChange}
                                    className="w-full border rounded p-2"
                                />
                            </div>
                        </div>

                        {/* Question 9: Stock/Debentures */}
                        <div>
                            <h2 className="text-xl font-semibold mb-2">9. Stock or Debentures in USA/Canada</h2>
                            <div className="mb-4">
                                <label className="block font-medium">
                                    Does the Company or any of its subsidiaries
                                    have any of their stock, shares or 9. debentures
                                    issued in the United States of America or Canada?
                                    If SO, please advise the following-
                                </label>
                                <div className="flex items-center">
                                    <label className="mr-4">
                                        <input
                                            type="radio"
                                            name="stockIssued"
                                            value="yes"
                                            onChange={handleChange}
                                            className="mr-1"
                                        />{' '}
                                        Yes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="stockIssued"
                                            value="no"
                                            onChange={handleChange}
                                            className="mr-1"
                                        />{' '}
                                        No
                                    </label>
                                </div>
                            </div>
                            {formData.stockIssued === 'yes' && (
                                <div className="space-y-4">
                                    <div>
                                        <label className="block font-medium">
                                            9.(a) On what date offer/tender/issue made?
                                        </label>
                                        <input
                                            type="date"
                                            name="lastOfferDate"
                                            value={formData.lastOfferDate}
                                            onChange={handleChange}
                                            className="w-full border rounded p-2"
                                        />
                                    </div>
                                    <div>
                                        <label className="block font-medium">
                                            Was the offer subject to the United States
                                            Security Act 1933 and/or the Securities (b)
                                            Exchange of Act of 1934 and/or any amendments thereto?
                                        </label>
                                        <input
                                            type="text"
                                            name="securityAct"
                                            value={formData.securityAct}
                                            onChange={handleChange}
                                            placeholder="Enter details"
                                            className="w-full border rounded p-2"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Question 10: Regulatory Filing */}
                        <div>
                            <h2 className="text-xl font-semibold mb-2">10. Regulatory Filing</h2>
                            <div className="mb-4">
                                <label className="block font-medium">
                                    Enclose a copy of the latest 20-F filing or similar filing (or confirm N/A)
                                </label>
                                <input
                                    type="file"
                                    name="filingUploaded"
                                    onChange={handleChange}
                                    className="w-full"
                                />
                            </div>
                        </div>

                        {/* Question 11: Acquisitions/Disposals */}
                        <div>
                            <div className="mb-4">
                                <label className="block font-medium">
                                    Has the company made, any acquisitions or disposals during the past 18 months?                                  </label>
                                <textarea
                                    name="acquisitions"
                                    value={formData.acquisitions}
                                    onChange={handleChange}
                                    placeholder="IF SO, please provide details"
                                    className="w-full border rounded p-2"
                                    rows="3"
                                ></textarea>
                            </div>
                        </div>

                        {/* Question 12: Public Offering / Share Issue */}
                        <div>
                            <h2 className="text-xl font-semibold mb-2">12. Public Offering / Share Issue</h2>
                            <div className="mb-4">
                                <label className="block font-medium">
                                    12.(i) Filed any registration statement for a public offering?
                                </label>
                                <input
                                    type="text"
                                    name="publicOffering"
                                    value={formData.publicOffering}
                                    onChange={handleChange}
                                    className="w-full border rounded p-2"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block font-medium">
                                    12.(ii) Issued any shares (common or otherwise)?
                                </label>
                                <input
                                    type="text"
                                    name="publicOfferingnext"
                                    value={formData.publicOfferingnext}
                                    onChange={handleChange}
                                    className="w-full border rounded p-2"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block font-medium">
                                    Is any   such   offering   or   share   issue
                                    contemplated in the next 12 months?
                                </label>
                                <textarea
                                    name="shareIssue"
                                    value={formData.shareIssue}
                                    onChange={handleChange}
                                    placeholder="IF YES, please provide details:"
                                    className="w-full border rounded p-2"
                                    rows="3"
                                ></textarea>
                            </div>
                        </div>

                        {/* Question 13: Past Insurance Details */}
                        <div>
                            <h2 className="text-xl font-semibold mb-2">13. If  Directors  and  Officers  Liability
                                Insurance has been carried during the past 3
                                years  please state. </h2>
                            <div className="mb-4">
                                <label className="block font-medium">
                                    13.(i) Name of the Insurers
                                </label>
                                <input
                                    type="text"
                                    name="insurerName"
                                    value={formData.insurerName}
                                    onChange={handleChange}
                                    className="w-full border rounded p-2"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block font-medium">
                                    13.(ii) Period of the policy
                                </label>
                                <input
                                    type="text"
                                    name="policyPeriod"
                                    value={formData.policyPeriod}
                                    onChange={handleChange}
                                    className="w-full border rounded p-2"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block font-medium">
                                    13.(iii) Indemnity Limit
                                </label>
                                <input
                                    type="text"
                                    name="indemnityLimit"
                                    value={formData.indemnityLimit}
                                    onChange={handleChange}
                                    className="w-full border rounded p-2"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block font-medium">
                                    13.(iv) Premium (for the last policy issued)
                                </label>
                                <input
                                    type="text"
                                    name="premium"
                                    value={formData.premium}
                                    onChange={handleChange}
                                    className="w-full border rounded p-2"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block font-medium">
                                    13.(b) As far as is known, have the Proposer ever (b)
                                    been refused this type of insurance or had a
                                    similar insurance cancelled?
                                    If SO, please provide details:
                                </label>
                                <textarea
                                    name="insuranceRefusal"
                                    value={formData.insuranceRefusal}
                                    onChange={handleChange}
                                    placeholder="Provide details"
                                    className="w-full border rounded p-2"
                                    rows="3"
                                ></textarea>
                            </div>
                        </div>

                        {/* Question 14: Claims Information */}
                        <div>
                            <h2 className="text-xl font-semibold mb-2">14. Claims Information</h2>
                            <div className="mb-4">
                                <label className="block font-medium">
                                    14.(a)  If an insurance similar to that now (a)
                                    proposed had been or were now in effect would any
                                    claim which has been made or which is now
                                    pending against any persons proposed for insurance
                                    have fallen within the scope of such insurance?
                                </label>
                                <input
                                    type="text"
                                    name="claimDetails"
                                    value={formData.claimDetails}
                                    onChange={handleChange}
                                    placeholder="Provide details"
                                    className="w-full border rounded p-2"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="date"
                                    name="details"
                                    value={formData.details}
                                    onChange={handleChange}
                                    placeholder='IF SO, please give details? '
                                    className="w-full border rounded p-2"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block font-medium">
                                    14.(b)   Is any person proposed for insurance (b) aware,
                                    AFTER ENQUIRY of any circumstances or
                                    incident which he/she has reason to suppose might
                                    afford grounds for  any future claim such as would fall within the
                                    scope of the proposed insurance?
                                </label>
                                <input
                                    type="text"
                                    name="futureClaimDetails"
                                    value={formData.futureClaimDetails}
                                    onChange={handleChange}
                                    placeholder="Provide details"
                                    className="w-full border rounded p-2"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="date"
                                    name="nextdetails"
                                    value={formData.details}
                                    onChange={handleChange}
                                    placeholder='IF SO, please give details? '
                                    className="w-full border rounded p-2"
                                />
                            </div>

                            {/* Question 15: Indemnity Required */}
                            <div>
                                <h2 className="text-xl font-semibold mb-2">15. Amount of Indemnity Required</h2>
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        name="indemnityRequired"
                                        value={formData.indemnityRequired}
                                        onChange={handleChange}
                                        className="w-full border rounded p-2"
                                    />
                                </div>
                            </div>

                            {/* Question 16: Declaration */}
                            <div className="border-t pt-4">
                                <h2 className="text-xl font-semibold mb-2">16. Declaration</h2>
                                <p className="mb-4">
                                    I, the undersigned (being a Director or Officer of the Company), declare that
                                    all answers provided above are, after enquiry, true and correct to the best of my
                                    knowledge.
                                </p>
                                <p> I am authorised to complete this proposal on behalf of the Company referred to in
                                    Item 1 of this proposal and all subsidiary companies declared herein: and </p>
                                <p>
                                    All answers to the questions contained in this proposal are, AFTER ENQUIRY , true
                                    and correct to the best of my knowledge and belief; and
                                </p>
                                <p>
                                    I have read and understood the notes at the beginning of this proposal; and
                                </p>
                                <p>
                                    I understand that the submission of this proposal does not bind either the Underwriters
                                    or the Company specified in Item 1 or any of the Subsidiary Companies declared hereinto
                                    enter into binding contract of insurance.
                                </p>
                                <div className="mb-4">
                                    <label className="block font-medium">Signed</label>
                                    <input
                                        type="file"
                                        name="declarationSigned"
                                        onChange={handleChange}
                                        className="w-full border rounded p-2"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block font-medium">Capacity</label>
                                    <input
                                        type="text"
                                        name="declarationCapacity"
                                        value={formData.declarationCapacity}
                                        onChange={handleChange}
                                        className="w-full border rounded p-2"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block font-medium">Company</label>
                                    <input
                                        type="text"
                                        name="declarationCompany"
                                        value={formData.declarationCompany}
                                        onChange={handleChange}
                                        className="w-full border rounded p-2"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block font-medium">Date</label>
                                    <input
                                        type="date"
                                        name="declarationDate"
                                        value={formData.declarationDate}
                                        onChange={handleChange}
                                        className="w-full border rounded p-2"
                                    />
                                </div>
                            </div>

                            <p>
                                It is important that the company and all Subsidiary Companies declared herein, and the
                                authorised Officer signing the Declaration above on their behalf, are fully aware of the
                                scope of this insurance so that these questions can be answered correctly. If in doubt,
                                please contact your broker since non-disclosure may affect an Assured’s right of recovery
                                under the policy or lead to voidance
                            </p>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium">
                                    Request Details
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    minLength={15}
                                    required
                                    placeholder="Enter a message"
                                    className="w-full mt-1 p-3 border rounded-[5px] text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="bg-[#a58b63] text-white px-6 py-2 rounded"
                            >
                                Submit Proposal
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Director;
