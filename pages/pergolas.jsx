import Layout from "@/components/layout/Layout";
import Brand3 from "@/components/sections/Brand3";
import Link from "next/link";
import GoogleReviews from "@/components/google/reviews";

// Content payload in JSON format
const serviceContent = {
    title: "Louvre Roof Systems Tauranga: Control Sun and Shade Effortlessly",
    description: "With Pergola Pro's Louvre Roof Systems, you can take full control of your outdoor space—whether you want sunlight, shade, or protection from rain. Our louvre roofs feature adjustable panels that open and close at the touch of a button, letting you enjoy your patio, deck, or pergola in any weather. Made from high-quality aluminium and built to last, our louvre systems are the perfect mix of style and function.",

    whyChoose: {
        title: "Why Choose Pergola Pro's Louvre Roof Systems?",
        features: [
            {
                icon: "/assets/img/icon/sp_icon01.svg",
                title: "Adjustable Roof Panels for Full Control",
                description: "Open the panels for sunlight and ventilation or close them to block out rain. Motorized systems allow you to adjust the angle of the panels with a remote or smartphone app. Built-in rain sensors can automatically close the roof when it starts to rain."
            },
            {
                icon: "/assets/img/icon/sp_icon02.svg",
                title: "Durable and Weather-Resistant Materials Frames",
                description: "Made from rust-proof aluminium that won't corrode, even in coastal areas. Powder-coated for extra protection against fading, chipping, and scratches. Designed to withstand high winds and heavy rainfall without damage."
            },
            {
                icon: "/assets/img/icon/sp_icon01.svg",
                title: "Custom Designs for Every Space",
                description: "Choose from different sizes, colors, and styles to match your home's look. Custom options for integrated lighting, privacy screens, and heaters to make your space usable all year round. Our design experts will help you create a louvre roof that fits your space and needs perfectly."
            },
            {
                icon: "/assets/img/icon/sp_icon01.svg",
                title: "Quick and Professional Installation",
                description: "Our experienced team handles everything—from measuring your space to final installation. Most louvre roofs are installed within 2–3 days. Detailed instructions for easy maintenance and care."
            },
            {
                icon: "/assets/img/icon/sp_icon01.svg",
                title: "Flexible Financing Options",
                description: "Pay over time with 0% interest for the first 12 months. Easy application and quick approval process. Choose from weekly, bi-weekly, or monthly payments that fit your budget."
            }
        ]
    },

    benefits: {
        title: "Benefits of Installing a Louvre Roof System?",
        description: "There are many variations of passages of Lorem by injected humour, or randomised words whic Lorem Ipsum, you need to.",
        items: [
            "Year-Round Use: Adjust the roof to handle sun, wind, and rain, so you can use your outdoor space in any season.",
            "Energy Savings: Block direct sunlight to keep your home cooler, reducing air conditioning costs.",
            "Enhanced Privacy: Add optional side screens to block the view from neighbors.",
            "Boosts Property Value: A louvre roof adds a sleek, modern look that can increase your home's market value.",
            "Low Maintenance: Built from rust-proof and UV-resistant materials that require little upkeep."
        ],
        images: [
            "/assets/img/services/sb_img01.jpg",
            "/assets/img/services/sb_img02.jpg"
        ]
    },

    financing: {
        title: "Finance Your Dream Pergola with Ease",
        description: "We believe that everyone should have access to beautiful outdoor spaces without financial stress.",
        options: [
            {
                title: "That's why we offer",
                description: "0% Interest Financing: Spread the cost over 12 months with no interest."
            },
            {
                title: "Flexible Payment Plans",
                description: "Choose between weekly, bi-weekly, or monthly payments."
            },
            {
                title: "Quick Approvals",
                description: "Get approved in minutes with our simple online application."
            }
        ]
    },

    installation: {
        title: "Our Seamless Installation Process",
        steps: [
            {
                title: "Free Consultation",
                description: "Book a session with our design experts to discuss your vision. Get a personalized quote and 3D design mock-ups."
            },
            {
                title: "Design Approval",
                description: "Choose materials, colors, and additional features like louvre roofs or lighting. Finalize the design based on your preferences."
            },
            {
                title: "Professional Installation",
                description: "A trained team manages the entire installation, ensuring a hassle-free experience. Adheres to all safety standards and local regulations."
            },
            {
                title: "Post-Installation Support",
                description: "Comprehensive warranty on materials and workmanship. Free maintenance tips and support for the first year."
            }
        ]
    },

    maintenance: {
        title: "Care and Maintenance Tips",
        tips: [
            {
                title: "Regular Cleaning",
                description: "Use mild soap and water for the polycarbonate panels."
            },
            {
                title: "Inspect and Tighten",
                description: "Check screws and fittings annually."
            },
            {
                title: "Seasonal Care",
                description: "Remove leaves and debris from the roof during fall."
            }
        ]
    },

    cta: {
        title: "Ready to Enhance Your Outdoor Space?",
        description: "Ready to enhance your outdoor living space? Contact us now to schedule a free consultation or to learn more about our financing options. With Pergola Pro, your dream outdoor space is just a call away!",
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
                imageURL={`https://pergolapro.co.nz/wp-content/uploads/2023/12/canopies.jpg`}
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