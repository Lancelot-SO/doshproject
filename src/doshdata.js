import Finance from "./images/dosh-financial.jpg"

const products = [
    {
        id: 1,
        title: 'DOSH FINANACIAL',
        image: Finance,
        readmore: '/financial',
        quote: 'You have the dream, we have the funds its the perfect love story.Get the right financial help for your personal and business needs anytime with less paperwork on DOSH.',
    },
    {
        id: 2,
        title: 'DOSH INSURANCE',
        image: Finance,
        readmore: '/insurance',
        quote: 'DOSH Health Insurance offers an all-around medical care package for you and your loved ones, which includes among others, hospital consultations, surgeries, dental care, prescribed drugs, and optical care. We provide you with services in hospitals, clinics, and laboratories across the 16 regions of Ghana.',
    },
]

export default products;

export const projectLinks = [
    {
        name: 'finance',
    },
    {
        name: 'insurance',
    },
]

export const projectDetails = [
    {
        id: 1,
        img: Finance,
        category: 'finance',
        title: 'DOSH FINANCE',
        details: 'Lorem ipsum dolor',
    },
    {
        id: 2,
        img: Finance,
        title: 'DOSH INSURANCE',
        category: 'insurance',
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