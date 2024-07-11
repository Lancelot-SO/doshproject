import Finance from "./images/dosh-financial.jpg"
import Lady from "./images/prettylady.jpg"
import Insurance from "./images/elevate2.png"
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
        title: 'DOSH INSURANCE',
        image: Finance,
        readmore: '/financial',
        quote: 'DOSH Health Insurance offers an all-around medical care package for you and your loved ones. This includes, hospital consultations, dental care, prescribed drugs, optical care, mental health, chiropractic care, infertility, and even erectile dysfunction treatment. We provide you with services in hospitals, clinics. We provide you with available, accessible, and affordable healthcare all year round.',

    },
    {
        id: 2,
        title: 'DOSH FINANCIAL',
        image: Lady,
        readmore: '/insure',
        quote: 'You have the dream, we have the funds its the perfect love story. Get the right financial help for your personal and business needs anytime with less paperwork on DOSH.',
    },
]

export default products;

export const projectLinks = [
    {
        name: 'insurance',
    },
    {
        name: 'financial',
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

export const insuranceDetails = [
    {
        id: "1",
        img: Ph1,
        title: "DOSH",
        number: "365",
        desc: "Description",
        details: `DOSH 365 package births an array of hope for individuals who hitherto are unable to access health insurance services due to the absence of affordable packages one the market. Dosh is changing the narrative on health insurance provision with the DOSH365 package, which is highly affordable and offering a new health insurance experience, designed with the individual in mind. An amount of GHS 1 per day or a total of GHS 365 per year, provides a membership cover of GHS 9,000 annually. Out of the GHS 9,000, an amount of GHS 7,500 is allocated towards In-Patient services and the remaining GHS 1,500 for Out-Patient services. DOSH 365 is specifically designed to shoulder the unforeseen medical`,
        link: "/insurance",
        category: "DOSH 365"
    },
    {
        id: "2",
        img: ph2,
        title: "DOSH",
        number: "750",
        desc: "Description",
        details: `DOSH 750 comes with add-ons and quintessential incentives targeted at individuals, families and their dependents with a slightly higher premium. It is gratifying to know that with DOSH, your family and dependents’ health care needs are furnished with a cover up to GHS 18,000 for only GHS 750 annual premium. This package is specially recommended for new employees or young families seeking affordable and cost-effective health insurance products. An annual premium of GHS 750 comes with health insurance cover of up to GHS 15,000 for In-Patient and GHS 3,000 for Out-Patient services respectively.`,
        link: "/insurance",
        category: "DOSH 750"
    },
    {
        id: "3",
        img: ph3,
        title: "DOSH",
        number: "1000",
        desc: "Description",
        details: `The package is distinctively designed to offer members absolute serenity with regards to their health care needs offering an extended cover of up to a whopping GHS 30,000 for an annual premium of only GHS1,000. DOSH1000 offers an In-Patient Limit of GHS 25,000 and Out-Patient Limit of GHS 5,000, offering members value for their investments.`,
        link: "/insurance",
        category: "DOSH 1000"
    },
    {
        id: "4",
        img: ph4,
        title: "DOSH",
        number: "2500",
        desc: "Description",
        details: `For Individuals and Corporate organizations interested in prudent financial planning in all crucial areas of life or business with the rainy-days in mind, DOSH 2500 health insurance plan comes highly recommended with an annual cover up to GHS 60,000. DOSH 2500 offers GHS 50,000 In-Patient and GHS 10,000 Out-Patient services for an annual premium of GHS 2,500.`,
        link: "/insurance",
        category: "DOSH 2500"
    },
    {
        id: "5",
        img: ph5,
        title: "DOSH",
        number: "5000",
        desc: "Description",
        details: `This premium offer is bespoke to coddle the health insurance needs of our high value clients. It is an exclusive package exceptionally centered on delivering superb healthcare services to our valued clients, offering a total annual cover of up to GHS 95,000 with GHS 75,000 and GHS 20,000 In-Patient and Out-Patient allocations respectively. This package is recommended to individuals or businesses with amplified health care needs.`,
        link: "/insurance",
        category: "DOSH 5000"
    },
    {
        id: "6",
        img: ph6,
        title: "DOSH",
        number: "10000",
        desc: "Description",
        details: `DOS 10,000 delivers health care services cover of up to GHS 190,000, and is highly suited for clients who desire peace of mind with regards to 360 healthcare delivery. This esteemed package provides up to GHS 150,000 for In-Patient and GHS 40,000 Out-Patient health care services at an annual premium of GHS 10,000 and accessible nationwide at all the major health care service providers.`,
        link: "/insurance",
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

        name: 'Enterpirse',
    },
]

export const financeDetails = [
    {
        id: "1",
        img: Avatar,
        title: "Personal",
        desc: "Description",
        details: `Whether at home or at work, banking shouldn’t be a problem with Dosh. Our uniquely designed and tailor-made personal account offers 1 user with 5 different types of accounts, making it easy for our clients to always stay on top of their personal finances. We have the option of additional accounts at configurable fee per each additional account.`,
        link: "/insurance",
        category: "Personal"
    },
    {
        id: "2",
        img: Avatar,
        title: "Family",
        desc: "Description",
        details: `Family financial management involves effectively meeting your family's everyday expenses, handling unexpected bills and saving for the future. At Dosh, our Family account puts you in control of your money, helping you avoid stress, whilst making you feel more secured. In addition to the 5 different accounts available with the Personal Account package, the Family Account offers 5 additional users with current sub accounts.`,
        link: "/insurance",
        category: "Family"
    },
    {
        id: "3",
        img: Avatar,
        title: "SOHO",
        desc: "Description",
        details: `Your SOHO Account comes with multiple perks, positioning your business for growth. With the SOHO account, you have access to loan and credit facilities as well as protecting your personal assets by separating them from your business transactions. This package comes with our default 5 accounts with 5 additional current sub-accounts and 2 other departmental or cost centers. The departments or cost centers are configured with different levels of access for you and your employees within the SOHO set up. The access levels help in assigning and controlling staff who for instance, can create new users, add bank accounts, perform financial transactions, view and move money from any account, audit accounts and set limits on sub-accounts among others.`,
        link: "/insurance",
        category: "SOHO"
    },
    {
        id: "4",
        img: Avatar,
        title: "SMB",
        desc: "Description",
        details: `This account has advanced benefits and features compared to the SOHO Account. It comes with 5 additional users and a total of 5 departments or cost centers with the convenient option of adding more users as the business grows. In effect, the SMB Account offers subscribers 10 sub accounts and 5 departments or call centers with different levels of access and control.`,
        link: "/insurance",
        category: "SMB"
    },
    {
        id: "5",
        img: Avatar,
        number: "Enterpirse",
        desc: "Description",
        details: `The Enterprise Account is designed to provide financial solutions to large corporations and comes with same features as the SMB Account with added offerings: 20 additional users 5 additional departments or call centers. The enterprise account therefore offers customers with the convenience of 30 users and 10 departments or call centers; in addition to all the default benefits embedded in our SOHO Account.`,
        link: "/insurance",
        category: "Enterpirse"
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