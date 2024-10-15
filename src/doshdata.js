import Finance from "./images/dosh-financial.jpg"
import Lady from "./images/prettylady.jpg"
import Insurance from "./images/elevate2.png"
import Family from "./images/dosh-family.png"
// import Money from "./images/money.png"
import Ride from "./images/ride.png"
import Ecommerce from "./images/Vector334.png"
import Scale from "./images/scale.png"

import Avatar from "./images/dosh-365.png"
import Ph1 from "./images/ph1.png"
import ph2 from "./images/ph2.png"
import ph3 from "./images/ph3.png"
import ph4 from "./images/ph4.png"
import ph5 from "./images/ph5.png"
import ph6 from "./images/ph6.png"



const products = [
    {
        id: 1,
        title: 'HEALTH INSURANCE',
        image: Finance,
        readmore: '/insure',
        quote: `Experience comprehensive coverage for your medical needs. Our mission at DOSH Insurance is to empower lives by ensuring your access to funds for quality healthcare. We are dedicated to helping you and your loved ones live life to the fullest by providing reliable health insurance solutions. Our extensive network of accredited service providers spans all regions and offers comprehensive healthcare coverage. Our team of experienced finance and health experts has curated a wide range of product options that cater to businesses, individuals, and employees at all levels. Safeguard your health with DOSH Insurance.`,

    },
    {
        id: 2,
        title: 'FINANCIAL SERVICES',
        image: Lady,
        readmore: '/insure',
        quote: `At DOSH, we provide tailored financial assistance for all your personal and business needs. Get the funds you need on your terms with our accessible and innovative funding options, including low- to no-interest repayment plans. Whether it's for business, entrepreneurship, or personal use, our funding solutions are designed to meet both long-term and short-term financial needs. Our licensed services benefit clients worldwide, offering a reliable and empowering funding experience. Let DOSH help you turn your dreams into reality.`,
    },
    {
        id: 3,
        title: 'DOSH RISK',
        image: Lady,
        readmore: '/insure',
        quote: `Wading through the insurance landscape is a unique kind of struggle. Our mission here at DOSH is to provide tailored brokerage services that empower you to navigate confusion and uncertainties with confidence. With years of industry experience and a dedicated team of experts, we are committed to delivering innovative solutions that protect your assets and enhance your operations. Our exceptional insurance brokerage services deliver competitive rates, convenience, and unparalleled support in a one-stop shop for auto, home, health, and business insurance.`,
    },
]

export default products;

export const projectLinks = [
    {
        name: 'Insurance',
    },
    {
        name: 'Financial',
    },

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

// the link was to /insurance and i changed it to https://dsp.onenet.xyz:50443/#/?page=dosh-insurance remember to change when portal is ready

export const insuranceDetails = [
    {
        id: "1",
        img: Ph1,
        title: "",
        number: "DOSH 365",
        desc: "Description",
        details: `DOSH is rewriting the story on health insurance with the DOSH 365 package. This package is highly affordable and offers a new health insurance experience designed with the individual in mind. An amount of GHS 1 per day, or a total of GHS 365 per year, provides a membership cover of GHS 9,000 annually. Out of the GHS 9,000 an amount of GHS 7,500 is allocated to in-patient services, and the remaining GHS 1,500 is for out-patient services. DOSH 365 is specifically designed to shoulder unforeseen medical situations.`,
        link: "/register",
        category: "DOSH 365"
    },
    {
        id: "2",
        img: ph2,
        title: "",
        number: "DOSH 750",
        desc: "Description",
        details: `This plan comes with add-ons and quintessential incentives targeted at individuals, families, and their dependents, with a slightly higher premium. It is gratifying to know that with DOSH, your family and dependents’ health care needs are covered with a cover-up of up to GHS 18,000 for only a GHS 750 annual premium. This package is perfect for new employees or young families looking for affordable health insurance. An annual premium of GHS 750 comes with health insurance coverage of up to GHS 15,000 for in-patient and GHS 3,000 for out-patient services, respectively.`,
        link: "/register",
        category: "DOSH 750"
    },
    {
        id: "3",
        img: ph3,
        title: "",
        number: "DOSH 1000",
        desc: "Description",
        details: `This package is distinctively designed to offer members absolute serenity with regard to their healthcare needs, offering an extended cover of up to a whopping GHS 30,000 for an annual premium of only GHS 1,000. DOSH1000 offers an in-patient limit of GHS 25,000 and an out-patient limit of GHS 5,000 offering members value for their investments.`,
        link: "/register",
        category: "DOSH 1000"
    },
    {
        id: "4",
        img: ph4,
        title: "",
        number: "DOSH 2500",
        desc: "Description",
        details: `This package is ideal for new employees or young families who want affordable health insurance. For people and businesses looking to manage their finances wisely and prepare for tough times, the DOSH 2500 health insurance plan is highly recommended. It offers annual coverage of up to GHS 60,000. DOSH 2500 offers GHS 50,000 in-patient and GHS 10,000 out-patient services for an annual premium of GHS 2,500.`,
        link: "/register",
        category: "DOSH 2500"
    },
    {
        id: "5",
        img: ph5,
        title: "",
        number: "DOSH 5000",
        desc: "Description",
        details: `This premium offer is tailored to meet the health insurance needs of our high-value clients. It provides excellent healthcare services with annual coverage of up to GHS 95,000 including GHS 75,000 for in-patient care and GHS 20,000 for out-patient care. This package is recommended for individuals or businesses with amplified healthcare needs.`,
        link: "/register",
        category: "DOSH 5000"
    },
    {
        id: "6",
        img: ph6,
        title: "",
        number: "DOSH 10000",
        desc: "Description",
        details: `This plan offers up to GHS 190,000 in health coverage, perfect for those seeking comprehensive healthcare and peace of mind. With this plan, you get GHS 150,000 for in-patient care and GHS 40,000 for out-patient care, all for an annual premium of GHS 10,000. The services offered by this plan are accessible to all significant healthcare providers around the country.`,
        link: "/register",
        category: "DOSH 10000"
    },
]

export const financePackage = [
    {
        name: 'Personal',
    },
    {

        name: 'Family',
    },
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

export const financeDetails = [
    {
        id: "1",
        img: Lady,
        number: "Personal",
        desc: "Description",
        details: `At home or at work, managing your finances shouldn't be a hassle with Dosh. Our uniquely designed and tailor-made personal account offers one user five different types of accounts, allowing our clients to effortlessly stay on top of their personal finances. Additionally, we provide the option for extra accounts at a configurable fee, ensuring flexibility and convenience for all your financial needs.`,
        link: "https://dsp.onenet.xyz:50443/#/?page=dosh-financial",
        category: "Personal"
    },
    {
        id: "2",
        img: Family,
        number: "Family",
        desc: "Description",
        details: `At home or at work, managing your finances shouldn't be a hassle with DOSH. Our uniquely designed and tailor-made personal account offers one user five different types of accounts, allowing our clients to effortlessly stay on top of their personal finances. Additionally, we provide the option for extra accounts at a configurable fee, ensuring flexibility and convenience for all your financial needs.`,
        link: "https://dsp.onenet.xyz:50443/#/?page=dosh-financial",
        category: "Family"
    },
    {
        id: "3",
        img: Avatar,
        number: "SOHO",
        desc: "Description",
        details: `The SOHO Account offers numerous benefits to help your business grow. With this account, you gain access to loan and credit facilities, while keeping your personal assets separate from your business transactions for added protection. This package includes five default accounts, five additional current sub-accounts, and two departmental or cost centers. Each department or cost center can be configured with varying access levels for you and your employees. This setup allows you to control who can create new users, add bank accounts, perform transactions, view and transfer funds, audit accounts, and set limits on sub-accounts, enhancing your financial management.`,
        link: "https://dsp.onenet.xyz:50443/#/?page=dosh-financial",
        category: "SOHO"
    },
    {
        id: "4",
        img: Avatar,
        number: "SMB",
        desc: "Description",
        details: `This account has advanced benefits and features compared to the SOHO Account. It comes with 5 additional users and a total of 5 departments or cost centers with the convenient option of adding more users as the business grows. In effect, the SMB Account offers subscribers 10 sub-accounts and 5 departments or call centers with different levels of access and control.`,
        link: "https://dsp.onenet.xyz:50443/#/?page=dosh-financial",
        category: "SMB"
    },
    {
        id: "5",
        img: Avatar,
        number: "Enterprise",
        desc: "Description",
        details: `The Enterprise Account is designed to provide financial solutions to large corporations and comes with the same features as the SMB Account with added offerings: 20 additional users 5 additional departments or call centers. The enterprise account therefore offers customers the convenience of 30 users and 10 departments or call centers; in addition to all the default benefits embedded in our SOHO Account.`,
        link: "https://dsp.onenet.xyz:50443/#/?page=dosh-financial",
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