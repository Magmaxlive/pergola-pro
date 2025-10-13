import Layout from "@/components/layout/Layout";
import Brand3 from "@/components/sections/Brand3";
import Link from "next/link";
import GoogleReviews from "@/components/google/reviews";

// Content payload in JSON format
const serviceContent = {
    title: "Carports: Protect Your Vehicles with Style in Tauranga",
    description: "At Pergola Pro, we build strong and stylish carports to protect your vehicles from the sun, rain, and other weather conditions. Made from high-quality aluminium and polycarbonate roofing, our carports are designed to last without needing much maintenance. Whether you need a simple carport for one car or a larger setup for multiple vehicles, we can customize it to fit your space and budget.",

    whyChoose: {
        title: "Why Choose Pergola Pro Carports?",
        features: [
            {
                title: "Durable and Rust-Free Materials",
                description: "Our carports are built from high-grade aluminium that won't rust or corrode, even in coastal areas. The roofing is made from UV-resistant polycarbonate that blocks harmful rays while allowing natural light to pass through. Powder-coated finishes add extra protection against fading and chipping.",
                icon: "/assets/img/icon/sp_icon01.svg",
            },
            {
                title: "Custom Sizes and Styles",
                description: "Choose from different sizes, styles, and roof designs to fit your driveway or backyard. Options for attached, freestanding, or semi-attached carports based on your needs. Custom colors and finishes are available to match your home's look.",
                icon: "/assets/img/icon/sp_icon01.svg",
            },
            {
                title: "Quick and Easy Installation",
                description: "Most carports are installed within a day by our experienced team. No heavy construction or complicated permits are needed in most areas. Our team takes care of everything, from site preparation to final assembly.",
                icon: "/assets/img/icon/sp_icon01.svg",
            },
            {
                title: "Protection Against All Weathers",
                description: "Shields your car from sun, rain, hail, and tree sap, helping maintain your vehicle's paint and resale value. Open sides for proper ventilation to reduce heat buildup. Built to withstand high winds and heavy rainfall without damage.",
                icon: "/assets/img/icon/sp_icon01.svg",
            },
            {
                title: "Flexible Financing Options",
                description: "Pay over time with 0% interest for the first 12 months. Simple application process with quick approvals. Flexible payment plans to fit your budget—weekly, bi-weekly, or monthly.",
                icon: "/assets/img/icon/sp_icon01.svg",
            }
        ]
    },
    benefits: {
        title: "Benefits of Installing a Carport",
        items: ["Keeps Your Car Cool: Blocks direct sunlight to prevent your car's interior from overheating.",
            "Reduces Maintenance Costs: Protects your car from sun damage, rust, and fading, saving you money on repairs.",
            "Extra Storage Space: Use the carport to store bikes, tools, or other outdoor equipment.",
            "Boosts Property Value:A well-designed carport can add to your home's curb appeal and market value. ",
            "Low Maintenance: Built from rust-proof and UV-resistant materials that require minimal upkeep.",
        ],
        images: [
            "/assets/img/services/sb_img01.jpg",
            "/assets/img/services/sb_img02.jpg"
        ]
    },
    installation: {
        title: "Our Easy Installation Process",
        steps: [
            {
                title: "Free Consultation and Quote",
                description: "Schedule a free on-site consultation to discuss your needs and get a detailed quote. Our experts will take measurements and show you samples of materials and finishes."
            },
            {
                title: "Custom Design Approval",
                description: "Choose the size, style, and roofing material that fits your space. We'll create a 3D model of your carport for you to approve before installation."
            },
            {
                title: "Professional Installation",
                description: "Our trained team handles everything, from preparing the site to putting up the carport. Most installations are completed within a day with no mess left behind."
            },
            {
                title: "Aftercare Support",
                description: "Includes a 5-year warranty on both materials and installation. We're available to answer any questions or help with maintenance tips."
            }
        ]
    },
    maintenance: {
        title: "Maintenance Tips for Your Carport",
        tips: [
            {
                title: "Clean the Roof Twice a Year",
                description: "Use a mild soap and water to wash off dust, leaves, and debris."
            },
            {
                title: "Inspect for Loose Screws",
                description: "Check screws and fittings every six months and tighten if needed."
            },
            {
                title: "Trim Overhanging Branches",
                description: "Prevent scratches and debris buildup by keeping branches away."
            },
            {
                title: "Clear Gutters",
                description: "If your carport has gutters, clean them regularly to avoid water pooling."
            }
        ]
    },
    financing: {
        title: "Financing Your Carport",
        description: "We understand that adding a carport is a big investment. That's why we offer:",
        options: [
            {
                title: "0% Interest for 12 Months",
                description: "Pay over time without any extra costs."
            },
            {
                title: "Flexible Payment Plans",
                description: "Choose weekly, bi-weekly, or monthly payments that fit your budget."
            },
            {
                title: "Quick Approval",
                description: "Apply online or during your consultation for fast approval."
            }
        ]
    },
    cta: {
        title: "Ready to Protect Your Car in Style?",
        description: "Get in touch with us today for a free consultation and quote. With Pergola Pro, getting a strong and stylish carport is easy and affordable!",
        contact: {
            phone: "+64 27 392 8106",
            email: "info@pergolapro.co.nz"
        }
    }
};

export default function ServiceDetails() {
    return (
        <>
            <Layout
                breadcrumbTitle="Modified roofing beautiful wooden house with big windows"
                imageURL={`https://pergolapro.co.nz/wp-content/uploads/2023/12/carports.jpg`}
                pageTitle="Service Details"
                isService={true}
            >
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
                                                <div className="row justify-content-center align-items-center">
                                                    <div className="col-lg-6 col-md-8">
                                                        <div className="services-process-img">
                                                            <img src="/assets/img/services/sp_img02.jpg" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="services-process-content">
                                                            <h2 className="title">{serviceContent.whyChoose.title}</h2>
                                                            <ul className="list-wrap">
                                                                {serviceContent.whyChoose.features.map((feature, index) => (
                                                                    <li key={index}>
                                                                        <div className="services-process-item">
                                                                            <div className="icon">
                                                                                <img src={feature.icon} alt="" />
                                                                            </div>
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
                                                            <div className="services-process-item">
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
                                                    <div className="col-lg-8">
                                                        <h2 className="title mb-4">{serviceContent.maintenance.title}</h2>
                                                        <div className="row">
                                                            {serviceContent.maintenance.tips.map((tip, index) => (
                                                                <div key={index} className="col-md-4 mb-3">
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
                                                    <div className="col-lg-4">
                                                        <div className="text-center">
                                                            <div className="bg-light rounded p-4">
                                                                <i className="fas fa-tools mb-3" style={{ fontSize: '48px', color: "#FE5D14" }}></i>
                                                                <h5 className="" style={{ color: "#FE5D14" }}>Easy Maintenance</h5>
                                                                <p className="mb-0" style={{ fontSize: '14px' }}>
                                                                    Simple care routines to keep your louvre roof looking new for years
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
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