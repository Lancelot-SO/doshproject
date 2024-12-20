import Finance from "./images/dosh-financial.jpg"
import Lady from "./images/prettylady.jpg"
import Personal from "./images/personalnew.png"
import Insurance from "./images/elevate2.png"
import Family from "./images/familynew.png"
import Risk from "./images/seamless.png"
import Money from "./images/Financial_img.png"
// import Money from "./images/money.png"
import Ride from "./images/ride.png"
import Ecommerce from "./images/Vector334.png"
import Scale from "./images/scale.png"

import Enterprise from "./images/enterprisenew.png"
import Soho from "./images/soho.png"
import Smb from "./images/smbnew.png"


import Ph1 from "./images/ph1.png"
import ph2 from "./images/ph2.png"
import ph3 from "./images/ph3.png"
import ph4 from "./images/ph4.png"
import ph5 from "./images/ph5.png"
import ph6 from "./images/ph6.png"

//enhanced images

import Phone from "./images/dosh500.jpg"
import Phone1 from "./images/dosh900.jpg"
import Phone2 from "./images/dosh1200.jpg"
import Phone3 from "./images/dosh2800.jpg"
import Phone4 from "./images/dosh5500.jpg"
import Phone5 from "./images/dosh11000.jpg"








const products = [
    {
        id: 1,
        title: 'Health Insurance',
        image: Finance,
        readmore: '/insuredetails',
        quote: `Experience comprehensive coverage for your medical needs. Our mission at DOSH Insurance is to empower lives by ensuring your access to funds for quality healthcare. We are dedicated to helping you and your loved ones live life to the fullest by providing reliable health insurance solutions. Our extensive network of accredited service providers spans all regions and offers comprehensive healthcare coverage. Our team of experienced finance and health experts has curated a wide range of product options that cater to businesses, individuals, and employees at all levels. Safeguard your health with DOSH Insurance.`,
        pick: '/insure',
        comparetext: 'Compare',
        picker: 'Pick a Package',
        read: 'Read More',
    },
    {
        id: 2,
        title: 'Financial Services',
        image: Money,
        readmore: '/financedetails',
        quote: `At DOSH, we provide tailored financial assistance for all your personal and business needs. Get the funds you need on your terms with our accessible and innovative funding options, including low- to no-interest repayment plans. Whether it's for business, entrepreneurship, or personal use, our funding solutions are designed to meet both long-term and short-term financial needs. Our licensed services benefit clients worldwide, offering a reliable and empowering funding experience. Let DOSH help you turn your dreams into reality.`,
        pick: '/financemodal',
        picker: 'Pick a Package',
        read: 'Read More',
        comparetext: 'Compare',

    },
    {
        id: 3,
        title: 'DOSH Risk',
        image: Risk,
        readmore: '/riskdetails',
        read: 'Read More',
        quote: `Wading through the insurance landscape is a unique kind of struggle. Our mission here at DOSH is to provide tailored brokerage services that empower you to navigate confusion and uncertainties with confidence. With years of industry experience and a dedicated team of experts, we are committed to delivering innovative solutions that protect your assets and enhance your operations. Our exceptional insurance brokerage services deliver competitive rates, convenience, and unparalleled support in a one-stop shop for auto, home, health, and business insurance.`,
    },
]

export default products;

export const projectLinks = [
    {
        name: 'Insurance',
    },

]

export const financelink = [
    {
        name: 'Financial',
    }
]

export const packagelabel = [
    {
        name: 'Standard',
    },
    {
        name: 'Enhanced',
    }
]

export const packagelist = [
    {
        name: 'DOSH 365',
    },
    {

        name: 'DOSH 750',
    },
    {

        name: 'DOSH 1000',
    },
    {

        name: 'DOSH 2500',
    },
    {

        name: 'DOSH 5000',
    },
    {

        name: 'DOSH 10000',
    },
]

export const enhancelist = [
    {
        name: 'DOSH 500',
    },
    {

        name: 'DOSH 900',
    },
    {

        name: 'DOSH 1200',
    },
    {

        name: 'DOSH 2800',
    },
    {

        name: 'DOSH 5500',
    },
    {

        name: 'DOSH 11000',
    },
]

// the link was to /insurance and i changed it to https://dsp.onenet.xyz:50443/#/?page=dosh-insurance remember to change when portal is ready

export const insuranceDetails = [
    {
        id: "1",
        img: Ph1,
        title: "",
        number: "DOSH 365",
        desc: "Description",
        details: `DOSH is redefining health insurance with the DOSH 365 package—just GHS 1 a day for GHS 9,000 in annual coverage. For GHS 365 a year, you get GHS 6100 for in-patient and GHS 1500 for out-patient services, all designed to keep you covered when the unexpected hits. `,
        link: "/register",
        category: "DOSH 365",
        flyer: "View flyer"
    },
    {
        id: "2",
        img: ph2,
        title: "",
        number: "DOSH 750",
        desc: "Description",
        details: `With a GHS 750 annual premium, DOSH offers up to GHS 18000 in coverage, perfect for individuals, families, and dependents. This package is ideal for young families or new employees, providing GHS 12600 for in-patient and GHS 3000 for out-patient services—affordable, comprehensive, and family-friendly!`,
        link: "/register",
        category: "DOSH 750",
        flyer: "View flyer"
    },
    {
        id: "3",
        img: ph3,
        title: "",
        number: "DOSH 1000",
        desc: "Description",
        details: `The DOSH 1000 package provides peace of mind with up to GHS 30000 in coverage for just a GHS 1,000 annual premium—GHS 21500 for in-patient and GHS 5000 for out-patient care. A solid investment in your health! `,
        link: "/register",
        category: "DOSH 1000",
        flyer: "View flyer"
    },
    {
        id: "4",
        img: ph4,
        title: "",
        number: "DOSH 2500",
        desc: "Description",
        details: `The DOSH 2500 plan is perfect for young families or new employees seeking affordable health coverage, offering up to GHS 60,000 annually—GHS 41,250 for in-patient and GHS 10,000 for out-patient care—all for a GHS 2500 premium. Smart coverage for tough times! `,
        link: "/register",
        category: "DOSH 2500",
        flyer: "View flyer"
    },
    {
        id: "5",
        img: ph5,
        title: "",
        number: "DOSH 5000",
        desc: "Description",
        details: `Tailored for high-value clients, this premium plan offers up to GHS 95,000 in annual coverage—GHS 57,500 for in-patient and GHS 20,000 for out-patient care—ideal for those with elevated healthcare needs.`,
        link: "/register",
        category: "DOSH 5000",
        flyer: "View flyer"
    },
    {
        id: "6",
        img: ph6,
        title: "",
        number: "DOSH 10000",
        desc: "Description",
        details: `This plan provides comprehensive coverage up to GHS 190,000—GHS 115,000 for in-patient and GHS 40,000 for out-patient care—for a GHS 10,000 annual premium, with access to top healthcare providers nationwide.`,
        link: "/register",
        category: "DOSH 10000",
        flyer: "View flyer"
    },
]

export const enhanceDetails = [
    {
        id: "1",
        img: Phone,
        title: "",
        number: "DOSH 500",
        desc: "Description",
        details: `The DOSH 500 offers up to GHS 21000 in coverage, providing affordable, solid protection with GHS 6100 for in-patient care, GHS 1500 for out-patient, and GHS 8750 for death, disability, and accident coverage.`,
        link: "/register",
        category: "DOSH 500",
        flyer: "View flyer"
    },
    {
        id: "2",
        img: Phone1,
        title: "",
        number: "DOSH 900",
        desc: "Description",
        details: `DOSH knows you deserve better than the basics. And with GHS 42000 in total coverage, the DOSH 900 package delivers! Providing GHS 12600 for inpatient care, GHS 3000 for outpatient care, and GHS 18500 for death, disability, and accidents, the DOSH 900 gets you more of what matters, so you can keep living your best life!`,
        link: "/register",
        category: "DOSH 900",
        flyer: "View flyer"
    },
    {
        id: "3",
        img: Phone2,
        title: "",
        number: "DOSH 1200",
        desc: "Description",
        details: `The DOSH 1200 has you covered with up to GHS 54000 in total protection: GHS 5000 for outpatient care, GHS 21500 for inpatient care, and GHS 18500 for death, disability, and accident coverage. Choose DOSH 1200 today and face life's surprises with confidence.`,
        link: "/register",
        category: "DOSH 1200",
        flyer: "View flyer"
    },
    {
        id: "4",
        img: Phone3,
        title: "",
        number: "DOSH 2800",
        desc: "Description",
        details: `At DOSH, we know life is full of surprises, so we've designed our plans to keep you protected. With up to GHS 95,000 in total coverage, including GHS 10,000 for outpatient care, GHS 41,250 for inpatient care, and GHS 37,000 for death, disability, and accident coverage, our enhanced policies offer the comprehensive protection you and your family deserve. Stay prepared and secure your peace of mind with DOSH.`,
        link: "/register",
        category: "DOSH 2800",
        flyer: "View flyer"
    },
    {
        id: "5",
        img: Phone4,
        title: "",
        number: "DOSH 5500",
        desc: "Description",
        details: `The DOSH 5500 provides solid, no-nonsense protection with GHS 167,000 in total coverage, including GHS 20,000 for outpatient care, GHS 57,500 for inpatient care, and GHS 55,500 for death, disability, and accident coverage. Rest easy knowing that life’s uncertainties won’t shake your family’s financial security. Choose DOSH 5500 for coverage you can count on.`,
        link: "/register",
        category: "DOSH 5500",
        flyer: "View flyer"
    },
    {
        id: "6",
        img: Phone5,
        title: "",
        number: "DOSH 11000",
        desc: "Description",
        details: `For those who go all-in on peace of mind, the DOSH 11000 plan is the perfect match. With up to GHS 286,000 in total coverage, including GHS 40,000 for outpatient care, GHS 115,000 for inpatient care, and GHS 74,000 for death, disability, and accident coverage, this plan ensures you’re prepared for whatever life throws your way. Be ready for anything with DOSH 11000.`,
        link: "/register",
        category: "DOSH 11000",
        flyer: "View flyer"
    },
]

export const financelabel = [
    {
        name: 'Personal',
    },
    {
        name: 'Business',
    }
]

export const personalPackages = [
    {
        name: 'Individual',
    },
    {

        name: 'Family',
    },
]

export const businessPackages = [
    {

        name: 'SOHO',
    },
    {

        name: 'SMB',
    },
    {

        name: 'Enterprise',
    },
]

export const personalDetails = [
    {
        id: "1",
        img: Personal,
        number: "Individual",
        desc: "Description",
        details: `Take control of your finances effortlessly with DOSH. Whether you’re managing money at home or work, DOSH offers the flexibility you need and a personalised experience tailored to your unique financial goals.
Enjoy a comprehensive range of financial services, including savings, fixed deposits, shares, and loans up to a maximum of 50,000—everything you need to build and secure your financial future with confidence`,
        link: "/register",
        category: "Individual"
    },
    {
        id: "2",
        img: Family,
        number: "Family",
        desc: "Description",
        details: `DOSH simplifies financial management for families, offering an account setup that helps you stay organized and in control. With a loan limit of up to 100,000, the ability to add three dependents, and support for five sub-user accounts, DOSH provides a convenient, all-in-one solution for family finances.`,
        link: "/register",
        category: "Family"
    },
]


export const businessDetails = [
    {
        id: "1",
        img: Soho,
        number: "SOHO",
        desc: "Description",
        details: `Fuel your business growth with the SOHO Package! Enjoy access to loans, credit facilities, and secure separation of personal and business assets. This package includes 5 sub-accounts and 2 customizable departmental accounts, with flexible access levels for your team. Easily manage permissions, bank access, transactions, fund transfers, and audits, all with a GHS200,000 loan cap and five sub-user accounts.`,
        link: "/register",
        category: "SOHO"
    },
    {
        id: "2",
        img: Smb,
        number: "SMB",
        desc: "Description",
        details: `The SMB Packages offers enhanced benefits beyond the SOHO Account, with the flexibility to add more users as your business expands and customizable access levels and control. With a loan cap of GHS300,000, 10 sub-user accounts, and 5 departmental accounts, the SMB Account is designed to support growing businesses.`,
        link: "/register",
        category: "SMB"
    },
    {
        id: "3",
        img: Enterprise,
        number: "Enterprise",
        desc: "Description",
        details: `The Enterprise Package is built for big ambitions. With 30 sub-user accounts, 10 departments, and loan options over GHS300,000, it’s the ultimate toolkit for powering up growth and keeping your finances on point. Tailored access, smart controls, and flexible management mean your business can scale smoothly without missing a beat.`,
        link: "/register",
        category: "Enterprise"
    },
]



export const projectDetails = [
    {
        id: 1,
        img: Insurance,
        title: 'DOSH INSURANCE',
        category: 'insurance',
        desc: 'Experience Comprehensive Coverage for Your Medical Needs.',
        lastdesc: 'Safeguard your health with DOSH Insurance.',
        details: `Experience Comprehensive Coverage for Your Medical Needs.
Our mission at DOSH Insurance is to empower lives by ensuring your access to funds for quality healthcare. We are dedicated to helping you and your loved ones live life to the fullest, by providing reliable health insurance solutions. Our extensive network of accredited service providers spans all regions and offers comprehensive healthcare coverage. Our team of experienced finance and health experts have curated a wide range of product options that cater to businesses, individuals, and employees at all levels.
Safeguard your health with DOSH Insurance.`,
    },
    {
        id: 2,
        img: Lady,
        category: 'financial',
        title: 'DOSH FINANCE',
        details: `At DOSH, we offer customized financial assistance for all your personal and business needs. Access the funds you need, on your terms. DOSH offers accessible and innovative funding options, coupled with low to no-interest repayment options. Whether it's for your business, entrepreneurial ventures, or personal needs, our well-curated funding options cater to any long-term or short-term financial need.  Our licensed services provide benefits to our clients, worldwide, ensuring a reliable funding experience. Let DOSH empower you to turn your dreams into reality.`,
    },

    {
        id: 3,
        img: Ride,
        title: 'DOSH RIDE',
        category: 'ride',
        desc: 'Experience Comprehensive Coverage for Your Medical Needs.',
        lastdesc: 'Safeguard your health with DOSH Insurance.',
        details: `Experience Comprehensive Coverage for Your Medical Needs.
                  Our mission at DOSH Insurance is to empower lives by ensuring your access to funds for quality healthcare. We are dedicated to helping you and your loved ones live life to the fullest, by providing reliable health insurance solutions. Our extensive network of accredited service providers spans all regions and offers comprehensive healthcare coverage. Our team of experienced finance and health experts have curated a wide range of product options that cater to businesses, individuals, and employees at all levels.
                  Safeguard your health with DOSH Insurance`,
    },
    {
        id: 4,
        img: Scale,
        title: 'DOSH E-COMMERCE',
        category: 'e-commerce',
        desc: 'Experience Comprehensive Coverage for Your Medical Needs.',
        lastdesc: 'Safeguard your health with DOSH Insurance.',
        details: `Our mission at DOSH Insurance is to empower lives by ensuring 
                your access to funds for quality healthcare.
                We are dedicated to helping you and your loved ones live life to the fullest, 
                by providing reliable health insurance solutions.Our extensive network of accredited 
                service providers spans all regions and offers comprehensive healthcare coverage.
                Our team of experienced finance and health experts have curated a wide range of product 
                options that cater to businesses, individuals, and employees at all levels.`,
    },
    {
        id: 5,
        img: Ecommerce,
        title: 'DOSH ERP',
        category: 'erp',
        desc: 'Experience Comprehensive Coverage for Your Medical Needs.',
        lastdesc: 'Safeguard your health with DOSH Insurance.',
        details: `Our mission at DOSH Insurance is to empower lives by ensuring 
                your access to funds for quality healthcare.
                We are dedicated to helping you and your loved ones live life to the fullest, 
                by providing reliable health insurance solutions.Our extensive network of accredited 
                service providers spans all regions and offers comprehensive healthcare coverage.
                Our team of experienced finance and health experts have curated a wide range of product 
                options that cater to businesses, individuals, and employees at all levels.`,
    },
]