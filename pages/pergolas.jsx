import Layout from "@/components/layout/Layout";
import Brand3 from "@/components/sections/Brand3";
import Link from "next/link";
import GoogleReviews from "@/components/google/reviews";

// Content payload in JSON format
const serviceContent = {
    title: "Pergolas Tauranga: Stylish Outdoor Living Made Easy",
    description: "At Pergola Pro, we specialize in designing and installing high-quality <a target='_blank' href='https://pergolapro.co.nz/'>Outdoor Pergolas</a>  that transform ordinary outdoor spaces into stylish retreats. Our pergolas are crafted from premium aluminium and UV-resistant polycarbonate, ensuring durability and a modern aesthetic. Whether you want a cozy spot for family gatherings or an elegant extension of your living space, our pergolas offer the perfect balance of functionality and design. As motorised pergola specialists in New Zealand, we bring innovative solutions that blend convenience with luxury—giving you complete control over your outdoor environment with just the touch of a button.",

    keyFeatures: {
        title: "Key Features of Pergola Pro's Pergolas",
        features: [
            {
                title: "UV-Resistant Polycarbonate Panels",
                description: "Allows natural light while blocking harmful UV rays. Durable and weather-resistant with a minimum 10-year lifespan. Available in multiple shades and finishes to suit your style."
            },
            {
                title: "Rust-Proof Aluminium Frames",
                description: "Made from high-grade aluminium that resists corrosion and oxidation. Lightweight yet sturdy, ensuring a long-lasting structure. Powder-coated for an extra layer of protection."
            },
            {
                title: "Easy Installation",
                description: "The professional team handles everything from site assessment to final setup. No heavy construction is required; most installations are completed within 1–2 days. Detailed post-installation guidelines for easy maintenance."
            },
            {
                title: "Flexible Financing Options",
                description: "Budget-friendly plans with 0% interest for the first 12 months. Easy application process with quick approvals. Customized payment options to suit your financial needs."
            }
        ]
    },

    benefits: {
        title: "Benefits of Installing a Pergola?",
        description: "",
        items: [
            "Enhanced Outdoor Living: Create a comfortable and stylish space for dining, relaxing, or entertaining guests.",
            "Increased Property Value: A well-designed pergola can boost your home's curb appeal and market value.",
            "Energy Efficiency: Reduces direct sunlight on windows, helping to lower cooling costs.",
            "Privacy and Shade: Optional roller blinds for added privacy and protection from the sun.",
            "Low Maintenance: Requires minimal cleaning and upkeep due to rust-proof and UV-resistant materials."
        ],
        images: [
            "/assets/img/services/sb_img01.jpg",
            "/assets/img/services/sb_img02.jpg"
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

    financing: {
        title: "Finance Your Dream Pergola with Ease",
        description: "We believe that everyone should have access to beautiful outdoor spaces without financial stress.",
        options: [
            {
                title: "0% Interest Financing",
                description: "Spread the cost over 12 months with no interest."
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
        description: "Ready to enhance your outdoor living space? Contact us now to schedule a free consultation or to learn more about our financing options. With Pergola Pro, your dream outdoor space is just a call away! Dial at +64 27 392 8106 or email info@pergolapro.co.nz for more details.",
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
                breadcrumbTitle={serviceContent.title}
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
                                            <p dangerouslySetInnerHTML={{ __html: serviceContent.description }} />

                                            {/* Key Features Section */}
                                            <div className="services-process-wrap">
                                                <div className="row justify-content-center align-items-center">
                                                    <div className="col-lg-6 col-md-8">
                                                        <div className="services-process-img">
                                                            <img src="/assets/img/services/sp_img02.jpg" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="services-process-content">
                                                            <h2 className="title">{serviceContent.keyFeatures.title}</h2>
                                                            <ul className="list-wrap">
                                                                {serviceContent.keyFeatures.features.map((feature, index) => (
                                                                    <li key={index}>
                                                                        <div className="services-process-item">
                                                                            {/* <div className="icon">
                                                                                <img src={feature.icon || "/assets/img/icon/default_icon.svg"} alt="" />
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

                                            {/* Why Choose Section (if exists) */}
                                            {serviceContent.whyChoose && (
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
                                            )}

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