import Layout from "@/components/layout/Layout";
import Brand3 from "@/components/sections/Brand3";
import Link from "next/link";
import GoogleReviews from "@/components/google/reviews";
import Head from "next/head"

// Content payload in JSON format
const serviceContent = {
    mainTitle: "Roller Blinds",
    title: "Roller Blinds: Privacy and Comfort for Your Outdoor Spaces",
    description: "At Pergola Pro, we offer a wide range of roller blinds designed to make your outdoor spaces more private and comfortable. Our roller blinds are built from UV-resistant and waterproof fabrics, ensuring that your patio, deck, louvre roof or pergola stays cool, protected, and stylish. With options for manual and motorized controls, you can easily adjust the blinds to block out sunlight, wind, and nosy neighbors.",

    whyChoose: {
        title: "Why Choose Pergola Pro Roller Blinds in Tauranga?",
        features: [
            {
                icon: "/assets/img/icon/sp_icon01.svg",
                title: "High-Quality Materials",
                description: "Made from UV-resistant and waterproof fabrics that can handle harsh sunlight and rain without fading or tearing. Tracks and fittings are built from rust-proof aluminium for long-lasting performance. Available in different colors and opacity levels, so you can pick the look and coverage that suits your space."
            },
            {
                icon: "/assets/img/icon/sp_icon02.svg",
                title: "Enhanced Privacy and Sun Protection",
                description: "Blocks up to 95% of UV rays to protect your skin and outdoor furniture. Provides privacy without making your space feel dark or closed in. Helps keep your outdoor areas cool by blocking direct sunlight."
            },
            {
                icon: "/assets/img/icon/sp_icon01.svg",
                title: "Manual and Motorized Options",
                description: "Choose between crank handle or spring-assisted manual controls for easy operation. For extra convenience, go for our motorized blinds that you can control with a remote or smartphone app. Smooth and quiet operation, with no tugging or jamming."
            },
            {
                icon: "/assets/img/icon/sp_icon01.svg",
                title: "Custom Fit for Every Space",
                description: "Our blinds are custom-made to fit your exact measurements, ensuring no awkward gaps or overhangs. Options for guided tracks to keep blinds steady in the wind or no-track systems for a cleaner look. Free consultation to help you pick the right materials, colors, and styles."
            },
            {
                icon: "/assets/img/icon/sp_icon01.svg",
                title: "Flexible Financing Options",
                description: "Spread the cost over 12 months with 0% interest financing. Quick and simple approval process. Choose from weekly, bi-weekly, or monthly payments based on your budget."
            }
        ]
    },

    benefits: {
        title: "Benefits of Installing Roller Blinds?",
        description: "",
        items: [
            "Keeps Outdoor Spaces Cool: Blocks direct sunlight to reduce heat buildup.",
            "Increased Privacy: Ideal for homes with close neighbors or busy streets.",
            "Energy Savings: Helps reduce cooling costs by keeping indoor spaces cooler.",
            "Weather Protection: Shields your patio or pergola from wind and light rain.",
            "Low Maintenance: Easy to clean and operate, with no need for frequent repairs."
        ],
        images: [
            "/assets/img/services/roller/rollerbends2.png",
            
        ]
    },

    installation: {
        title: "Our Simple Installation Process",
        steps: [
            {
                title: "Free Measure and Quote",
                description: "One of our experts will visit your home to take precise measurements and discuss your needs. Get a no-obligation quote on the spot, along with samples to help you decide."
            },
            {
                title: "Choose Your Style",
                description: "Pick from a variety of fabrics, colors, and control options—manual or motorized. We'll help you choose the best material for sun, wind, and privacy protection."
            },
            {
                title: "Professional Installation",
                description: "Our trained team handles everything from mounting brackets to testing controls. Most installations are completed within a few hours, with no mess left behind."
            },
            {
                title: "After-Sale Support",
                description: "Includes a 2-year warranty on materials and installation. Free maintenance tips and customer support for any questions or adjustments."
            }
        ]
    },

    financing: {
        title: "Financing Your Roller Blinds",
        description: "We understand that adding roller blinds can be a big investment. That's why we offer:",
        options: [
            {
                title: "0% Interest Financing",
                description: "Pay over 12 months with no extra costs."
            },
            {
                title: "Flexible Payment Plans",
                description: "Choose to pay weekly, bi-weekly, or monthly."
            },
            {
                title: "Quick Approval",
                description: "Apply online or during your consultation for a fast response."
            }
        ]
    },

    maintenance: {
        title: "Maintenance Tips for Roller Blinds",
        tips: [
            {
                title: "Regular Cleaning",
                description: "Dust the blinds every few weeks and wipe them with a damp cloth and mild soap as needed."
            },
            {
                title: "Check Tracks and Fittings",
                description: "Make sure the tracks are clear of dirt and the fittings are secure."
            },
            {
                title: "Lubricate Moving Parts",
                description: "Apply a silicone spray to the tracks once a year to keep them smooth."
            },
            {
                title: "Inspect for Wear",
                description: "Look for any fraying or damage, and contact us if repairs are needed."
            }
        ]
    },

    cta: {
        title: "Ready for More Privacy and Comfort?",
        description: "Contact us today to schedule a free measure and quote or to learn more about our financing options. With Pergola Pro, upgrading your outdoor space is simple and affordable!",
        contact: {
            phone: "+64 27 392 8106",
            email: "info@pergolapro.co.nz"
        }
    }
};

export default function ServiceDetails() {
    return (
        <>
            <Head>
                <title>Roller Blinds Tauranga | Custom Outdoor Blinds | Pergola Pro</title>
                <meta name="title" content="Roller Blinds Tauranga | Custom Outdoor Blinds | Pergola Pro"></meta>
                <meta name="description" content="Discover premium roller blinds in Tauranga. Pergola Pro installs custom outdoor blinds for shade, privacy, and modern aesthetics. Call: +64 27 392 8106."></meta>
            </Head>
            <Layout
                breadcrumbTitle={serviceContent.mainTitle}
                imageURL="/assets/img/services/roller/rollerbends1.jpg"
                pageTitle="Service Details"
                isService={true} >
                <div>
                    <section className="services-details-area pt-120">
                        <div className="container">
                            <GoogleReviews />
                            <div className="row justify-content-center">
                                <div className="col-xl-12">
                                    <div className="services-details-wrap">
                                        <div className="services-details-content mt-50">
                                            <h2 className="title">{serviceContent.title}</h2>
                                            <p>{serviceContent.description}</p>
                                            <div className="services-process-wrap">
                                                <div className="row justify-content-center align-items-start">
                                                    <div className="col-lg-6 col-md-8">
                                                        <div className="services-process-img">
                                                            <img src="/assets/img/services/roller/rollerbends3.jpg" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="services-process-content">
                                                            <h2 className="title">{serviceContent.whyChoose.title}</h2>
                                                            <ul className="list-wrap">
                                                                {serviceContent.whyChoose.features.map((feature, index) => (
                                                                    <li key={index}>
                                                                        <div className="services-process-item">
                                                                            {/* <div className="icon">
                                                                                <img src={feature.icon} alt="" />
                                                                            </div> */}
                                                                            <div className="content">
                                                                                <h4 className="title">{feature.title}</h4>
                                                                                <p>{feature.description}</p>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="service-benefits-wrap">
                                                <div className="row">
                                                    <div className="col-lg-7 order-0 order-lg-2">
                                                        <div className="benefits-img">
                                                            {serviceContent.benefits.images.map((image, index) => (
                                                                <img key={index} src={image} alt="" />
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-5">
                                                        <div className="benefits-content">
                                                            <h2 className="title">{serviceContent.benefits.title}</h2>
                                                            <p>{serviceContent.benefits.description}</p>
                                                            <ul className="list-wrap">
                                                                {serviceContent.benefits.items.map((item, index) => (
                                                                    <li key={index} style={{ fontSize: "14px" }}>
                                                                        <i className="fas fa-check-circle" />
                                                                        {item}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        {/* Installation Process Section */}
                                        <div className="col-lg-12 mb-100">
                                            <div className="services-process-content">
                                                <h2 className="title text-center mb-5">{serviceContent.installation.title}</h2>
                                                <div className="row">
                                                    {serviceContent.installation.steps.map((step, index) => (
                                                        <div key={index} className="col-lg-3 col-md-6 mb-4">
                                                            <div className="card h-100 border-0 shadow-sm">
                                                                <div className="card-body text-center p-4">
                                                                    <div className="mb-3">
                                                                        <div className="text-white rounded-circle d-inline-flex align-items-center justify-content-center"
                                                                            style={{ width: '60px', height: '60px', fontSize: '24px', fontWeight: 'bold', backgroundColor: "#FE5D14" }}>
                                                                            {index + 1}
                                                                        </div>
                                                                    </div>
                                                                    <h5 className="card-title" style={{ color: "#FE5D14" }}>{step.title}</h5>
                                                                    <p className="card-text" style={{ fontSize: '14px', lineHeight: '1.6', }}>
                                                                        {step.description}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Financing Section */}
                                        <div className="col-lg-12">
                                            <br /><br />
                                            <div className="services-process-content mb-100">
                                                <ul className="row justify-content-center">
                                                    <h2 className="title">{serviceContent.financing.title}</h2>
                                                    <p>{serviceContent.financing.description}</p>
                                                    {serviceContent.financing.options.map((option, index) => (
                                                        <div key={index} className="col-md-4">
                                                            <div className="services-process-item mt-10" style={{ height: "125px" }}>
                                                                <div className="content">
                                                                    <h4 className="title">{option.title}</h4>
                                                                    <p>{option.description}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>



                                        {/* Maintenance Tips Section */}
                                        <div className="col-lg-12 mb-100">
                                            <div className="services-process-content">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-12">
                                                        <h2 className="title mb-4">{serviceContent.maintenance.title}</h2>
                                                        <div className="row">
                                                            {serviceContent.maintenance.tips.map((tip, index) => (
                                                                <div key={index} className="col-md-3 mb-3">
                                                                    <div className="d-flex align-items-start">
                                                                        <i className="fas fa-check mt-1 me-3" style={{ color: "#FE5D14" }}></i>
                                                                        <div>
                                                                            <h6 className="mb-1" style={{ fontWeight: '600' }}>{tip.title}</h6>
                                                                            <p className="mb-0" style={{ fontSize: '14px' }}>{tip.description}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    {/* <div className="col-lg-4">
                                                        <div className="text-center">
                                                            <div className="bg-light rounded p-4">
                                                                <i className="fas fa-tools mb-3" style={{ fontSize: '48px', color: "#FE5D14" }}></i>
                                                                <h5 className="" style={{ color: "#FE5D14" }}>Easy Maintenance</h5>
                                                                <p className="mb-0" style={{ fontSize: '14px' }}>
                                                                    Simple care routines to keep your louvre roof looking new for years
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>

                                        {/* CTA Section */}
                                        <div className="col-lg-12 mb-100">
                                            <div className="services-process-content text-center">
                                                <div className="bg-dark text-white rounded p-5">
                                                    <h2 className="title text-white mb-3">{serviceContent.cta.title}</h2>
                                                    <p className="mb-4" style={{ fontSize: '16px', color: '#fafafa' }}>
                                                        {serviceContent.cta.description}
                                                    </p>
                                                    <div className="row justify-content-center">
                                                        <div className="col-md-6">
                                                            <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
                                                                <a
                                                                    href={`tel:${serviceContent.cta.contact.phone}`}
                                                                    className="btn btn-light btn-lg px-4"
                                                                    style={{ fontWeight: '600' }}
                                                                >
                                                                    <i className="fas fa-phone me-2"></i>
                                                                    Call {serviceContent.cta.contact.phone}
                                                                </a>
                                                                <a
                                                                    href={`mailto:${serviceContent.cta.contact.email}`}
                                                                    className="btn btn-outline-light btn-lg px-4"
                                                                    style={{ fontWeight: '600' }}
                                                                >
                                                                    <i className="fas fa-envelope me-2"></i>
                                                                    Email Us
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    )
}