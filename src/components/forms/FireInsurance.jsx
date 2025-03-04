import React, { useState } from 'react';
import image from "../../images/imagebg.png";
import { X } from 'lucide-react';
import { ToastContainer } from 'react-toastify';

const FireInsurance = ({ onClose }) => {
    const [formData, setFormData] = useState({
        // Insured’s Details
        proposerTitle: '',
        proposerSurname: '',
        otherNames: '',
        dob: '',
        sex: '',
        postalAddress: '',
        occupation: '',
        email: '',
        mobile: '',
        landline: '',
        propertyAddress: '',
        premisesDescription: '',
        constructionWalls: '',
        constructionRoof: '',
        sumBuilding: '',
        sumFence: '',
        sumFurniture: '',
        sumWholesale: '',
        sumRetail: '',
        sumFixtures: '',
        storeys: '',
        heatingLightingUse: '',
        heatingLightingNature: '',
        manufacturing: '',
        manufacturingNature: '',
        oilsDetails: '',
        hazardousItems: [],
        // Adjoining Buildings
        adjoiningBuildings: '',
        adjoiningConstruction: '',
        adjoiningOccupation: '',
        adjoiningGoods: '',
        adjoiningSeparationMaterials: '',
        adjoiningOpenings: '',
        adjoiningOpeningsNature: '',
        // Risk Detached
        riskDetached: '',
        detachedConstruction: '',
        detachedOccupation: '',
        detachedDistance: '',
        // Annual Procedures & Accounting
        annualStock: '',
        accountingBooks: '',
        fireProofSafe: '',
        removeBooks: '',
        // Current Insurance
        currentlyInsured: '',
        policyNumber: '',
        // Insurance Refusal
        insuranceRefused: '',
        refusedDetails: '',
        // Claims History
        madeClaim: '',
        claimDetails: '',
        // Extension of Coverage
        extendEarthquake: false,
        extendWindstorm: false,
        extendExplosion: false,
        extendAircraft: false,
        extendImpact: false,
        extendFlood: false,
        extendBurstPipe: false,
        extendRiot: false,
        extendCivilCommotion: false,
        extendMaliciousDamage: false,
        extendBushFire: false,
        // Declaration
        declarationDate: '',
        declarationSignature: '',
        declarationAgency: '',
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        // For hazardous items checkboxes
        if (type === 'checkbox' && name === 'hazardousItems') {
            let newItems = [...formData.hazardousItems];
            if (checked) {
                newItems.push(value);
            } else {
                newItems = newItems.filter(item => item !== value);
            }
            setFormData({ ...formData, hazardousItems: newItems });
        } else if (type === 'checkbox') {
            setFormData({ ...formData, [name]: checked });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Process your form data here (e.g., send it to an API)
        console.log(formData);
        alert('Form submitted! (Check console for details.)');
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4 text-gray-800">
            <div className="bg-white w-full mt-16 sm:w-[80%] md:w-[70%] lg:w-[60%] max-h-[90vh] rounded-[20px]-lg shadow-lg flex overflow-hidden">

                {/* Left Side Image */}
                <div className="hidden md:flex w-1/2 bg-cover bg-center">
                    <img src={image} alt="Insurance" className="w-full h-full object-cover" loading="lazy" />
                </div>

                {/* Right Side Form */}
                <div className="w-full md:w-1/2 p-6 relative overflow-y-auto">
                    <ToastContainer />

                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 bg-[#9E825B] text-white rounded-full w-8 h-8 flex items-center justify-center"
                        aria-label="Close"
                    >
                        <X size={24} />
                    </button>
                    <h1 className="text-xl font-bold mb-4">Fire Insurance Proposal Request</h1>
                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Insured’s Details */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Insured’s Details</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* 1. Proposer Name */}
                                <div>
                                    <label className="block font-medium">1. Name of Proposer</label>
                                    <input
                                        type="text"
                                        name="proposerTitle"
                                        value={formData.proposerTitle}
                                        onChange={handleChange}
                                        className="w-full border rounded p-2"
                                        placeholder="Mr/Ms/Mrs/Dr/Prof"
                                    />
                                </div>
                                <div>
                                    <label className="block font-medium">Surname</label>
                                    <input
                                        type="text"
                                        name="proposerSurname"
                                        value={formData.proposerSurname}
                                        onChange={handleChange}
                                        className="w-full border rounded p-2"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block font-medium">Other Names</label>
                                    <input
                                        type="text"
                                        name="otherNames"
                                        value={formData.otherNames}
                                        onChange={handleChange}
                                        className="w-full border rounded p-2"
                                    />
                                </div>
                                {/* 2. Date of Birth */}
                                <div>
                                    <label className="block font-medium">2. Date of Birth</label>
                                    <input
                                        type="date"
                                        name="dob"
                                        value={formData.dob}
                                        onChange={handleChange}
                                        className="w-full border rounded p-2"
                                    />
                                </div>
                                {/* 3. Sex */}
                                <div>
                                    <label className="block font-medium">3. Sex</label>
                                    <div className="flex items-center space-x-4">
                                        <label>
                                            <input
                                                type="radio"
                                                name="sex"
                                                value="Male"
                                                checked={formData.sex === 'Male'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> Male
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="sex"
                                                value="Female"
                                                checked={formData.sex === 'Female'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> Female
                                        </label>
                                    </div>
                                </div>
                                {/* 4. Postal Address */}
                                <div className="md:col-span-2">
                                    <label className="block font-medium">4. Postal Address</label>
                                    <textarea
                                        name="postalAddress"
                                        value={formData.postalAddress}
                                        onChange={handleChange}
                                        className="w-full border rounded p-2"
                                        rows="2"
                                    ></textarea>
                                </div>
                                {/* 5. Occupation */}
                                <div>
                                    <label className="block font-medium">5. Occupation</label>
                                    <input
                                        type="text"
                                        name="occupation"
                                        value={formData.occupation}
                                        onChange={handleChange}
                                        className="w-full border rounded p-2"
                                    />
                                </div>
                                {/* 6. E-mail Address */}
                                <div>
                                    <label className="block font-medium">6. E-mail Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full border rounded p-2"
                                    />
                                </div>
                                {/* 7. Mobile and Landline */}
                                <div>
                                    <label className="block font-medium">7. Insured’s Mobile No.</label>
                                    <input
                                        type="text"
                                        name="mobile"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        className="w-full border rounded p-2"
                                    />
                                </div>
                                <div>
                                    <label className="block font-medium">Landline</label>
                                    <input
                                        type="text"
                                        name="landline"
                                        value={formData.landline}
                                        onChange={handleChange}
                                        className="w-full border rounded p-2"
                                    />
                                </div>
                                {/* 8. Property Address */}
                                <div className="md:col-span-2">
                                    <label className="block font-medium">
                                        8. Location and Address of Property to be Insured
                                    </label>
                                    <textarea
                                        name="propertyAddress"
                                        value={formData.propertyAddress}
                                        onChange={handleChange}
                                        className="w-full border rounded p-2"
                                        rows="2"
                                    ></textarea>
                                </div>
                                {/* 9. Description of Premises */}
                                <div className="md:col-span-2">
                                    <label className="block font-medium">
                                        9. Description of Premises (Factory, Shop, Warehouse, Offices, etc.)
                                    </label>
                                    <textarea
                                        name="premisesDescription"
                                        value={formData.premisesDescription}
                                        onChange={handleChange}
                                        className="w-full border rounded p-2"
                                        rows="3"
                                    ></textarea>
                                </div>
                                {/* 10. Construction Details */}
                                <div>
                                    <label className="block font-medium">
                                        10.a Details of Construction – Walls
                                    </label>
                                    <input
                                        type="text"
                                        name="constructionWalls"
                                        value={formData.constructionWalls}
                                        onChange={handleChange}
                                        className="w-full border rounded p-2"
                                        placeholder="Enter details"
                                    />
                                </div>
                                <div>
                                    <label className="block font-medium">
                                        10.b Details of Construction – Roof
                                    </label>
                                    <input
                                        type="text"
                                        name="constructionRoof"
                                        value={formData.constructionRoof}
                                        onChange={handleChange}
                                        className="w-full border rounded p-2"
                                        placeholder="Enter details"
                                    />
                                </div>
                                {/* 11. Amount Proposed for Insurance */}
                                <div className="md:col-span-2">
                                    <h3 className="text-xl font-semibold mb-2">
                                        11. Amount Proposed for Insurance
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block font-medium">
                                                a. Building situated at above address  <b>Sum to be Insured (¢)</b>
                                            </label>
                                            <input
                                                type="number"
                                                name="sumBuilding"
                                                value={formData.sumBuilding}
                                                onChange={handleChange}
                                                className="w-full border rounded p-2"
                                            />
                                        </div>
                                        <div>
                                            <label className="block font-medium">
                                                b. On fence wall surrounding the building <b>Sum to be Insured (¢)</b>
                                            </label>
                                            <input
                                                type="number"
                                                name="sumFence"
                                                value={formData.sumFence}
                                                onChange={handleChange}
                                                className="w-full border rounded p-2"
                                            />
                                        </div>
                                        <div>
                                            <label className="block font-medium">
                                                c. On Household Furniture and effects the property of insured <b>Sum to be Insured (¢)</b>
                                            </label>
                                            <input
                                                type="number"
                                                name="sumFurniture"
                                                value={formData.sumFurniture}
                                                onChange={handleChange}
                                                className="w-full border rounded p-2"
                                            />
                                        </div>
                                        <div>
                                            <label className="block font-medium">
                                                d. On stock of Wholesale Merchandise therein  <b>Sum to be Insured (¢)</b>
                                            </label>
                                            <input
                                                type="number"
                                                name="sumWholesale"
                                                value={formData.sumWholesale}
                                                onChange={handleChange}
                                                className="w-full border rounded p-2"
                                            />
                                        </div>
                                        <div>
                                            <label className="block font-medium">
                                                e. On stock of Retail Merchandise therein  <b>Sum to be Insured (¢)</b>
                                            </label>
                                            <input
                                                type="number"
                                                name="sumRetail"
                                                value={formData.sumRetail}
                                                onChange={handleChange}
                                                className="w-full border rounded p-2"
                                            />
                                        </div>
                                        <div>
                                            <label className="block font-medium">
                                                f. On Trade Fittings and Fixtures therein  <b>Sum to be Insured (¢)</b>
                                            </label>
                                            <input
                                                type="number"
                                                name="sumFixtures"
                                                value={formData.sumFixtures}
                                                onChange={handleChange}
                                                className="w-full border rounded p-2"
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/* 12. Storeys */}
                                <div className="md:col-span-2">
                                    <label className="block font-medium">
                                        12.  Of how many storeys, including the basement and attic or loft in the roof
                                    </label>
                                    <input
                                        type="number"
                                        name="storeys"
                                        value={formData.storeys}
                                        onChange={handleChange}
                                        className="w-full border rounded p-2"
                                    />
                                </div>
                                {/* 13. Artificial Heating/Lighting */}
                                <div className="md:col-span-2">
                                    <label className="block font-medium">
                                        13. Is there any artificial heating or lighting use?
                                    </label>
                                    <div className="flex items-center space-x-4">
                                        <label>
                                            <input
                                                type="radio"
                                                name="heatingLightingUse"
                                                value="Yes"
                                                checked={formData.heatingLightingUse === 'Yes'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> Yes
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="heatingLightingUse"
                                                value="No"
                                                checked={formData.heatingLightingUse === 'No'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> No
                                        </label>
                                    </div>
                                    {formData.heatingLightingUse === 'Yes' && (
                                        <input
                                            type="text"
                                            name="heatingLightingNature"
                                            value={formData.heatingLightingNature}
                                            onChange={handleChange}
                                            placeholder="If yes, of what nature?"
                                            className="w-full border rounded p-2 mt-2"
                                        />
                                    )}
                                </div>
                                {/* 14. Manufacturing */}
                                <div className="md:col-span-2">
                                    <label className="block font-medium">
                                        14. Is there any process of manufacturing carried out?
                                    </label>
                                    <div className="flex items-center space-x-4">
                                        <label>
                                            <input
                                                type="radio"
                                                name="manufacturing"
                                                value="Yes"
                                                checked={formData.manufacturing === 'Yes'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> Yes
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="manufacturing"
                                                value="No"
                                                checked={formData.manufacturing === 'No'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> No
                                        </label>
                                    </div>
                                    {formData.manufacturing === 'Yes' && (
                                        <input
                                            type="text"
                                            name="manufacturingNature"
                                            value={formData.manufacturingNature}
                                            onChange={handleChange}
                                            placeholder="If yes, of what nature?"
                                            className="w-full border rounded p-2 mt-2"
                                        />
                                    )}
                                </div>
                                {/* 15. Oils Details */}
                                <div className="md:col-span-2">
                                    <label className="block font-medium">
                                        15. If oils are dealt in, give full particulars (class, quantity, and where kept)
                                    </label>
                                    <textarea
                                        name="oilsDetails"
                                        value={formData.oilsDetails}
                                        onChange={handleChange}
                                        className="w-full border rounded p-2"
                                        rows="3"
                                    ></textarea>
                                </div>
                                {/* 16. Hazardous Merchandise */}
                                <div className="md:col-span-2">
                                    <label className="block font-medium">
                                        16. Is merchandise of a hazardous description stored in the building(s) to be insured? (Select all that apply)
                                    </label>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                        {[
                                            "Anthracene",
                                            "Camphine",
                                            "Gunpowder",
                                            "Mineral Oil",
                                            "Chlorates of Soda",
                                            "Solution",
                                            "Tallow",
                                            "Vegetable bres & Grasses",
                                            "Albo carbon",
                                            "Celluloid",
                                            "Explosives",
                                            "Liquid Products",
                                            "Pitch",
                                            "Saltpetre",
                                            "Tar",
                                            "Waste (textile mill) of all kinds",
                                            "Disulphide of Carbon",
                                            "Fire",
                                            "Lampolack",
                                            "Mungo",
                                            "Rags",
                                            "Shoddy Spirits",
                                            "Turpentine",
                                            "Wood Spirit",
                                            "Brimestone",
                                            "Lighters",
                                            "Liquid Acetylene",
                                            "Naphitha",
                                            "Resin",
                                            "Sulphur",
                                            "Varnish",
                                            "Calcium Carbide",
                                            "Fireworks",
                                            "Matches (store wholesale)",
                                            "Nitrates & Potash",
                                            "Robber in Gutta Percha",
                                            "Vegetable Black"
                                        ].map((item) => (
                                            <label key={item} className="inline-flex items-center">
                                                <input
                                                    type="checkbox"
                                                    name="hazardousItems"
                                                    value={item}
                                                    checked={formData.hazardousItems.includes(item)}
                                                    onChange={handleChange}
                                                    className="mr-1"
                                                />
                                                <span className="text-sm">{item}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* 17. Adjoining Buildings */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">17. Adjoining Buildings</h2>
                            <div className="space-y-4">
                                <label className="block font-medium">
                                    Are there any adjoining buildings?
                                </label>
                                <div className="flex items-center space-x-4">
                                    <label>
                                        <input
                                            type="radio"
                                            name="adjoiningBuildings"
                                            value="Yes"
                                            checked={formData.adjoiningBuildings === 'Yes'}
                                            onChange={handleChange}
                                            className="mr-1"
                                        /> Yes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="adjoiningBuildings"
                                            value="No"
                                            checked={formData.adjoiningBuildings === 'No'}
                                            onChange={handleChange}
                                            className="mr-1"
                                        /> No
                                    </label>
                                </div>
                                {formData.adjoiningBuildings === 'Yes' && (
                                    <>
                                        <div>
                                            <label className="block font-medium">
                                                a. How are they constructed and roofed?
                                            </label>
                                            <input
                                                type="text"
                                                name="adjoiningConstruction"
                                                value={formData.adjoiningConstruction}
                                                onChange={handleChange}
                                                className="w-full border rounded p-2"
                                            />
                                        </div>
                                        <div>
                                            <label className="block font-medium">
                                                b. How are they occupied?
                                            </label>
                                            <input
                                                type="text"
                                                name="adjoiningOccupation"
                                                value={formData.adjoiningOccupation}
                                                onChange={handleChange}
                                                className="w-full border rounded p-2"
                                            />
                                        </div>
                                        <div>
                                            <label className="block font-medium">
                                                c. What kind of goods are stored therein?
                                            </label>
                                            <input
                                                type="text"
                                                name="adjoiningGoods"
                                                value={formData.adjoiningGoods}
                                                onChange={handleChange}
                                                className="w-full border rounded p-2"
                                            />
                                        </div>
                                        <div>
                                            <label className="block font-medium">
                                                d. Of what materials do the separation walls consist and are they carried above the roof?
                                            </label>
                                            <input
                                                type="text"
                                                name="adjoiningSeparationMaterials"
                                                value={formData.adjoiningSeparationMaterials}
                                                onChange={handleChange}
                                                className="w-full border rounded p-2"
                                            />
                                        </div>
                                        <div>
                                            <label className="block font-medium">
                                                e. Are there any openings in each separation wall?
                                            </label>
                                            <div className="flex items-center space-x-4">
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="adjoiningOpenings"
                                                        value="Yes"
                                                        checked={formData.adjoiningOpenings === 'Yes'}
                                                        onChange={handleChange}
                                                        className="mr-1"
                                                    /> Yes
                                                </label>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="adjoiningOpenings"
                                                        value="No"
                                                        checked={formData.adjoiningOpenings === 'No'}
                                                        onChange={handleChange}
                                                        className="mr-1"
                                                    /> No
                                                </label>
                                            </div>
                                            {formData.adjoiningOpenings === 'Yes' && (
                                                <input
                                                    type="text"
                                                    name="adjoiningOpeningsNature"
                                                    value={formData.adjoiningOpeningsNature}
                                                    onChange={handleChange}
                                                    placeholder="If yes, of what nature and how protected?"
                                                    className="w-full border rounded p-2 mt-2"
                                                />
                                            )}
                                        </div>
                                    </>
                                )}
                            </div>
                        </section>

                        {/* 18. Risk Detached */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">18. Risk Detached</h2>
                            <div className="space-y-4">
                                <label className="block font-medium">
                                    Is the risk detached from all other buildings?
                                </label>
                                <div className="flex items-center space-x-4">
                                    <label>
                                        <input
                                            type="radio"
                                            name="riskDetached"
                                            value="Yes"
                                            checked={formData.riskDetached === 'Yes'}
                                            onChange={handleChange}
                                            className="mr-1"
                                        /> Yes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="riskDetached"
                                            value="No"
                                            checked={formData.riskDetached === 'No'}
                                            onChange={handleChange}
                                            className="mr-1"
                                        /> No
                                    </label>
                                </div>
                                {formData.riskDetached === 'Yes' && (
                                    <>
                                        <div>
                                            <label className="block font-medium">
                                                a. What is the construction of the nearest building?
                                            </label>
                                            <input
                                                type="text"
                                                name="detachedConstruction"
                                                value={formData.detachedConstruction}
                                                onChange={handleChange}
                                                className="w-full border rounded p-2"
                                            />
                                        </div>
                                        <div>
                                            <label className="block font-medium">
                                                b. How are they occupied?
                                            </label>
                                            <input
                                                type="text"
                                                name="detachedOccupation"
                                                value={formData.detachedOccupation}
                                                onChange={handleChange}
                                                className="w-full border rounded p-2"
                                            />
                                        </div>
                                        <div>
                                            <label className="block font-medium">
                                                c. By what distance are they separated from the risk proposed?
                                            </label>
                                            <input
                                                type="text"
                                                name="detachedDistance"
                                                value={formData.detachedDistance}
                                                onChange={handleChange}
                                                className="w-full border rounded p-2"
                                            />
                                        </div>
                                    </>
                                )}
                            </div>
                        </section>

                        {/* 19. Annual Procedures & Accounting */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">19. Annual Procedures &amp; Accounting</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block font-medium">
                                        19.a Do you take stock at least once a year?
                                    </label>
                                    <div className="flex items-center space-x-4">
                                        <label>
                                            <input
                                                type="radio"
                                                name="annualStock"
                                                value="Yes"
                                                checked={formData.annualStock === 'Yes'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> Yes
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="annualStock"
                                                value="No"
                                                checked={formData.annualStock === 'No'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> No
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <label className="block font-medium">
                                        19.b Do you keep a proper set of Accounting Books?
                                    </label>
                                    <div className="flex items-center space-x-4">
                                        <label>
                                            <input
                                                type="radio"
                                                name="accountingBooks"
                                                value="Yes"
                                                checked={formData.accountingBooks === 'Yes'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> Yes
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="accountingBooks"
                                                value="No"
                                                checked={formData.accountingBooks === 'No'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> No
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <label className="block font-medium">
                                        19.c Do you keep said Account Books in a Fire-proof Safe?
                                    </label>
                                    <div className="flex items-center space-x-4">
                                        <label>
                                            <input
                                                type="radio"
                                                name="fireProofSafe"
                                                value="Yes"
                                                checked={formData.fireProofSafe === 'Yes'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> Yes
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="fireProofSafe"
                                                value="No"
                                                checked={formData.fireProofSafe === 'No'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> No
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <label className="block font-medium">
                                        19.d Do you remove said Account Books to another building when the premises are closed?
                                    </label>
                                    <div className="flex items-center space-x-4">
                                        <label>
                                            <input
                                                type="radio"
                                                name="removeBooks"
                                                value="Yes"
                                                checked={formData.removeBooks === 'Yes'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> Yes
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="removeBooks"
                                                value="No"
                                                checked={formData.removeBooks === 'No'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> No
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* 20. Current Insurance */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">20. Current Insurance</h2>
                            <div className="space-y-4">
                                <label className="block font-medium">
                                    Are you at present insured in this or any other office?
                                </label>
                                <div className="flex items-center space-x-4">
                                    <label>
                                        <input
                                            type="radio"
                                            name="currentlyInsured"
                                            value="Yes"
                                            checked={formData.currentlyInsured === 'Yes'}
                                            onChange={handleChange}
                                            className="mr-1"
                                        /> Yes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="currentlyInsured"
                                            value="No"
                                            checked={formData.currentlyInsured === 'No'}
                                            onChange={handleChange}
                                            className="mr-1"
                                        /> No
                                    </label>
                                </div>
                                {formData.currentlyInsured === 'Yes' && (
                                    <div>
                                        <label className="block font-medium">
                                            If yes, state Policy Number and Name of Office
                                        </label>
                                        <input
                                            type="text"
                                            name="policyNumber"
                                            value={formData.policyNumber}
                                            onChange={handleChange}
                                            className="w-full border rounded p-2"
                                        />
                                    </div>
                                )}
                            </div>
                        </section>

                        {/* 21. Insurance Refusal */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">21. Insurance Refusal</h2>
                            <div className="space-y-4">
                                <label className="block font-medium">
                                    Have you proposed for Fire or any other class of Insurance and been refused?
                                </label>
                                <div className="flex items-center space-x-4">
                                    <label>
                                        <input
                                            type="radio"
                                            name="insuranceRefused"
                                            value="Yes"
                                            checked={formData.insuranceRefused === 'Yes'}
                                            onChange={handleChange}
                                            className="mr-1"
                                        /> Yes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="insuranceRefused"
                                            value="No"
                                            checked={formData.insuranceRefused === 'No'}
                                            onChange={handleChange}
                                            className="mr-1"
                                        /> No
                                    </label>
                                </div>
                                {formData.insuranceRefused === 'Yes' && (
                                    <div>
                                        <label className="block font-medium">
                                            If yes, give name of the Office(s) and full particulars
                                        </label>
                                        <textarea
                                            name="refusedDetails"
                                            value={formData.refusedDetails}
                                            onChange={handleChange}
                                            className="w-full border rounded p-2"
                                            rows="3"
                                        ></textarea>
                                    </div>
                                )}
                            </div>
                        </section>

                        {/* 22. Claims History */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">22. Claims History</h2>
                            <div className="space-y-4">
                                <label className="block font-medium">
                                    Have you ever made a claim in respect of Fire or any other Insurance?
                                </label>
                                <div className="flex items-center space-x-4">
                                    <label>
                                        <input
                                            type="radio"
                                            name="madeClaim"
                                            value="Yes"
                                            checked={formData.madeClaim === 'Yes'}
                                            onChange={handleChange}
                                            className="mr-1"
                                        /> Yes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="madeClaim"
                                            value="No"
                                            checked={formData.madeClaim === 'No'}
                                            onChange={handleChange}
                                            className="mr-1"
                                        /> No
                                    </label>
                                </div>
                                {formData.madeClaim === 'Yes' && (
                                    <div>
                                        <label className="block font-medium">
                                            If yes, give name of the Office(s) and full particulars
                                        </label>
                                        <textarea
                                            name="claimDetails"
                                            value={formData.claimDetails}
                                            onChange={handleChange}
                                            className="w-full border rounded p-2"
                                            rows="3"
                                        ></textarea>
                                    </div>
                                )}
                            </div>
                        </section>

                        {/* Extension of Coverage */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">
                                Extension of Insurance Coverage
                            </h2>
                            <p className="mb-4">
                                Do you wish to extend this insurance to cover loss or damage caused by:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { name: 'extendEarthquake', label: 'Earthquake' },
                                    { name: 'extendWindstorm', label: 'Windstorm/Tornado' },
                                    { name: 'extendExplosion', label: 'Explosion' },
                                    { name: 'extendAircraft', label: 'Aircraft' },
                                    { name: 'extendImpact', label: 'Impact' },
                                    { name: 'extendFlood', label: 'Flood' },
                                    { name: 'extendBurstPipe', label: 'Burst Pipe' },
                                    { name: 'extendRiot', label: 'Riot & Strike' },
                                    { name: 'extendCivilCommotion', label: 'Civil Commotion' },
                                    { name: 'extendMaliciousDamage', label: 'Malicious Damage' },
                                    { name: 'extendBushFire', label: 'Bush Fire' },
                                ].map((item) => (
                                    <label key={item.name} className="inline-flex items-center">
                                        <input
                                            type="checkbox"
                                            name={item.name}
                                            checked={formData[item.name]}
                                            onChange={handleChange}
                                            className="mr-2"
                                        />
                                        {item.label}
                                    </label>
                                ))}
                            </div>
                        </section>

                        {/* Declaration */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Declaration</h2>
                            <p className="mb-4">
                                I warrant that the above statements and particulars are true and I hereby agree that this Declaration shall be held to be promissory and of continuing effect and shall form the basis of and be deemed to be incorporated in the Contract between me and DOSH Risk. I am willing to accept a policy subject to the Terms prescribed by the Company herein, and to pay the Premium thereon.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <label className="block font-medium">Date</label>
                                    <input
                                        type="date"
                                        name="declarationDate"
                                        value={formData.declarationDate}
                                        onChange={handleChange}
                                        className="w-full border rounded p-2"
                                    />
                                </div>
                                <div>
                                    <label className="block font-medium">Signature</label>
                                    <input
                                        type="text"
                                        name="declarationSignature"
                                        value={formData.declarationSignature}
                                        onChange={handleChange}
                                        className="w-full border rounded p-2"
                                    />
                                </div>
                                <div>
                                    <label className="block font-medium">Agency</label>
                                    <input
                                        type="text"
                                        name="declarationAgency"
                                        value={formData.declarationAgency}
                                        onChange={handleChange}
                                        className="w-full border rounded p-2"
                                    />
                                </div>
                            </div>
                        </section>

                        <button
                            type="submit"
                            className="bg-[#b5996e] text-white px-6 py-3 rounded"
                        >
                            Submit Proposal
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FireInsurance;
