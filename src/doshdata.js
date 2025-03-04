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
        subtitle: `Protecting Your Health, Empowering Your Life`,
        image: Finance,
        readmore: '/insuredetails',
        quote: `Experience peace of mind with comprehensive healthcare coverage from DOSH Insurance. Our mission transcends traditional insurance—we're here to ensure that quality healthcare remains within reach when you need it most.
Just as health knows no boundaries, our network of accredited healthcare providers extends across all regions, offering you seamless access to medical care. Our team of seasoned financial and healthcare experts has crafted versatile coverage options that adapt to your unique needs, whether you're a growing business, a busy professional, or a family seeking protection.
Think of us as your healthcare concierge, transforming complex insurance into straightforward solutions. With DOSH Insurance, you're not just buying a policy—you're investing in the freedom to live life fully, supported by a partner who understands that good health is your greatest asset.
Secure your wellbeing with DOSH Insurance. Because when it comes to health, we believe excellence should be accessible to all.`,
        pick: '/insure',
        comparetext: 'Compare',
        picker: 'Pick a Package',
        read: 'Read More',
    },
    {
        id: 2,
        title: 'Financial Services',
        subtitle: ` Financial Solutions That Match Your Ambitions`,
        image: Money,
        readmore: '/financedetails',
        quote: `At DOSH, we understand that financial success requires more than just capital—it demands a partner who understands your vision. Our tailored financial solutions adapt to your unique journey, whether you're scaling a business, launching an entrepreneurial venture, or pursuing personal aspirations.
Experience financing on your terms with our innovative funding options, featuring flexible low- to no-interest repayment plans that put you in control. Our licensed financial experts craft solutions that bridge both immediate needs and long-term goals, ensuring your path to success remains clear and achievable.
As a trusted global financial partner, we've built our reputation on turning possibilities into realities. Let DOSH be the catalyst that transforms your ambitions into achievements.`,
        pick: '/financemodal',
        picker: 'Pick a Package',
        read: 'Read More',
        comparetext: 'Compare',

    },
    {
        id: 3,
        title: 'DOSH Risk',
        subtitle: `Your Guide Through Insurance Complexity`,
        image: Risk,
        readmore: '/riskdetails',
        riskform: 'Submit A Request',
        read: 'Read More',
        quote: `Navigating the insurance landscape shouldn't feel like charting unknown waters. At DOSH Risk, we transform complexity into clarity, offering brokerage services that empower you to make confident decisions about protection for your assets and operations.
Our seasoned team of experts brings deep industry insight to your unique challenges, crafting innovative solutions that go beyond traditional insurance offerings. We've built our reputation on delivering competitive rates while providing the personalized attention you deserve.
Experience the convenience of comprehensive coverage through our one-stop approach to auto, home, health, and business insurance. With DOSH Risk as your partner, you gain more than just insurance—you secure peace of mind through protection tailored precisely to your needs.`,
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
        details: `DOSH is redefining health insurance with the DOSH 365 package for just GHS 1 a day for GHS 9,000 in annual coverage. For GHS 365 a year, you get GHS 6,100 for in-patient and GHS 1,500 for out-patient services, all designed to keep you covered when the unexpected hits.`,
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
        details: `With a GHS 750 annual premium, DOSH offers up to GHS 18,000 in coverage, perfect for young adults and new employees. Providing GHS 12,600 for in-patient and GHS 3,000 for out-patient service this package is affordable, comprehensive, and ready to support your health journey!`,
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
        details: `The DOSH 1000 package provides peace of mind with up to GHS 30,000 in coverage for just a GHS 1,000 annual premium, covering GHS 21,500 for in-patient and GHS 5,000 for out-patient care. A solid investment in your health!`,
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
        details: `The DOSH 2500 plan is perfect for those seeking affordable health coverage, offering up to GHS 60,000 annually for GHS 41,250 for in-patient and GHS 10,000 for out-patient care, all for a GHS 2,500 premium. Smart coverage for tough times!`,
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
        details: `Tailored for high-value clients, this premium plan offers up to GHS 95,000 in annual coverage GHS 57,500 for in-patient and GHS 20,000 for out-patient care. Ideal for those with elevated healthcare needs.`,
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
        details: `This plan offers up to GHS 190,000 in health coverage, perfect for those seeking comprehensive healthcare and peace of mind. With this plan, you get GHS 150,000 for in-patient care and GHS 40,000 for out-patient care, all for an annual premium of GHS 10,000. The services offered by this plan are accessible to all significant healthcare providers around the country.`,
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
        details: `The DOSH 500 offers up to GHS 21,000 in coverage, providing affordable, solid protection with GHS 6,100 for in-patient care, GHS 1,500 for out-patient, and GHS 8,750 for death, disability, and accident coverage. Stay covered while living life on your terms!`,
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
        details: `DOSH knows you deserve better than the basics; and with GHS 42,000 in total coverage, the DOSH 900 package delivers! Providing GHS 12,600 for inpatient care, GHS 3,000 for outpatient care, and GHS 18,500 for death, disability, and accidents, the DOSH 900 gets you more of what matters, so you can keep living your best life!`,
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
        details: `The DOSH 1200 has you covered with up to GHS 54,000 in total protection: GHS 5,000 for outpatient care, GHS 21,500 for inpatient care, and GHS 18,500 for death, disability, and accident coverage. Choose DOSH 1200 today and face life's surprises with confidence.`,
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
        details: `At DOSH, our plans are built to keep you covered. With up to GHS 95,000 in total coverage, the DOSH 2800 provides GHS 10,000 for outpatient care, GHS 41,250 for inpatient care, and GHS 37,000 for death, disability, and accident coverage. Stay prepared and secure your peace of mind with policies that offer the comprehensive protection you and your family deserve.`,
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
        details: `The DOSH 5500 provides solid, no-nonsense protection with GHS 167,000 in total coverage, including GHS 20,000 for outpatient care, GHS 57,500 for inpatient care, and GHS 55,500 for death, disability, and accident coverage. Rest easy knowing that life’s uncertainties won’t shake your financial security. Choose DOSH 5500 for coverage you can count on.`,
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
        details: `With DOSH, managing money is easier than ever, whether it’s just you or the whole family. Enjoy flexible options like savings, fixed deposits, shares, and loans (up to 50,000 for individuals and 100,000 for families), all designed to help you hit your financial goals. Simplify your finances and keep it all in one place with DOSH!`,
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