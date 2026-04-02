import Layout from "@/components/layout/Layout";
import Brand3 from "@/components/sections/Brand3";
import Link from "next/link";
import GoogleReviews from "@/components/google/reviews";
import Head from "next/head"

// Content payload in JSON format
const serviceContent = {
    mainTitle: "Canopies",
    title: "Canopies: All-Weather Protection for Your Tauranga Outdoor Space",
    description: "At Pergola Pro, we design and install high-quality canopies to protect your outdoor areas from sun, rain, and wind. Our canopies are made from UV-resistant polycarbonate and rust-proof aluminium, ensuring they stay strong and look great for years. Whether you need a canopy for your patio,<a href='https://pergolapro.co.nz/services/carports/'> carport </a>, or garden, we can customize it to fit your space and budget.",

    whyChoose: {
        title: "Why Choose Pergola Pro's Canopies?",
        features: [
            {
                title: "Durable and Weather-Resistant Materials",
                description: "Our canopies are built using high-grade polycarbonate panels that block up to 99% of UV rays. The frames are made from rust-proof aluminium that won't corrode or fade, even in coastal areas. Powder-coated finishes add an extra layer of protection against scratches and chipping.",
                icon: "/assets/img/icon/sp_icon01.svg",
            },
            {
                title: "Custom Designs for Every Space",
                description: "Choose from a variety of sizes, styles, and colors to match your home's look. Custom options for curved, flat, or sloped roof designs to suit your needs. Our design experts will help you pick the perfect canopy for your patio, <a href='https://pergolapro.co.nz/services/fencing-decking/'> deck </a>, or driveway.",
                icon: "/assets/img/icon/sp_icon01.svg",
            },
            {
                title: "Quick and Professional Installation",
                description: "Most canopies are installed within a day by our experienced team. Our installers handle everything—from measuring your space to setting up the canopy. No heavy construction needed—just a clean and hassle-free installation.",
                icon: "/assets/img/icon/sp_icon01.svg",
            },
            {
                title: "Flexible Financing Options",
                description: "Pay for your canopy over 12 months with 0% interest financing. Easy application process with quick approvals. Choose from weekly, bi-weekly, or monthly payments based on your budget.",
                icon: "/assets/img/icon/sp_icon01.svg",
            },
            {
                title: "Protection from Sun, Rain, and Wind",
                description: "Keeps your outdoor areas cool by blocking direct sunlight. Waterproof design protects your space from rain without darkening it. Built to withstand strong winds and prevent water pooling.",
                icon: "/assets/img/icon/sp_icon01.svg",
            }
        ]
    },
    benefits: {
        title: "Benefits of Installing a Canopy",
        items: [
            "Year-Round Use: Protects your patio, garden, or car from harsh weather, making your space usable in any season.",
            "Enhanced Curb Appeal: A well-designed canopy adds a modern look to your home.",
            "Energy Efficiency: Helps reduce indoor temperatures by blocking sunlight, lowering cooling costs.",
            "Low Maintenance: Made from rust-proof and UV-resistant materials that need little upkeep.",
            "Increased Property Value: A canopy can make your home more attractive to potential buyers."
        ],
        images: [
            "/assets/img/services/canopies/2.jpg",
            "/assets/img/services/canopies/4.jpg"
        ]
    },
    installation: {
        title: "Our Easy Installation Process",
        description: "From initial consultation to final installation, our streamlined process ensures your canopy is installed efficiently and professionally by our experienced team.",
        steps: [
            {
                title: "Free Consultation and Quote",
                description: "Book a free on-site consultation to discuss your ideas and get an accurate quote. Our experts will show you samples of materials and finishes to help you decide."
            },
            {
                title: "Custom Design Approval",
                description: "Choose the size, style, and color that suits your space. Get a 3D model of your canopy to see how it will look before installation."
            },
            {
                title: "Professional Installation",
                description: "Our trained team handles everything—from preparing the site to setting up the canopy. Most installations are completed within a day with no mess left behind."
            },
            {
                title: "Aftercare Support",
                description: "Includes a 3-year warranty on both materials and installation. Free support and maintenance tips to keep your canopy looking and working great."
            }
        ]
    },
    maintenance: {
        title: "Maintenance Tips for Your Canopy",
        description: "Keep your canopy in perfect condition with these simple maintenance practices that ensure long-lasting performance and beauty.",
        tips: [
            {
                title: "Clean the Roof Twice a Year",
                description: "Use mild soap and water to remove dust, leaves, and debris."
            },
            {
                title: "Inspect for Loose Screws",
                description: "Check screws and fittings every six months and tighten if needed."
            },
            {
                title: "Trim Nearby Trees",
                description: "Prevent scratches and debris buildup by keeping branches away."
            },
            {
                title: "Clear Gutters",
                description: "If your canopy has gutters, clean them regularly to avoid water pooling."
            }
        ]
    },
    financing: {
        title: "Financing Your Canopy",
        description: "We know a canopy is a big investment. That's why we offer flexible payment options designed to fit your budget and financial needs.",
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
                description: "Simple application process with fast response times."
            }
        ]
    },
    cta: {
        title: "Ready to Protect Your Outdoor Space?",
        description: "Get in touch with us today for a free consultation and quote for a custom canopy. With Pergola Pro, getting a strong and stylish canopy is easy and affordable!",
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
                <title>Canopy Builders Tauranga | Outdoor Experts | Pergola Pro</title>
                <link rel="canonical" href="https://www.pergolapro.co.nz/carports/" />
                <meta name="title" content="Canopy Builders Tauranga | Outdoor Experts | Pergola Pro"></meta>
                <meta name="description" content="Enhance your outdoor area with custom canopies in Tauranga. Pergola Pro provides stylish, weather-resistant canopy solutions with expert installation."></meta>
            </Head>
            <Layout
                breadcrumbTitle={serviceContent.mainTitle}
                imageURL={`/assets/img/services/canopies/1.jpg`}
                pageTitle="Service Details"
                isService={true}>
                <div>
                    <section className="services-details-area pt-120">
                        <div className="container">
                            <GoogleReviews />
                            <div className="row justify-content-center">
                                <div className="col-xl-12">
                                    <div className="services-details-wrap">
                                        <div className="services-details-content mt-50">
                                            <h2 className="title">{serviceContent.title}</h2>
                                            <p dangerouslySetInnerHTML={{ __html: serviceContent.description }}/>


                                            <div className="services-process-wrap">
                                                <div className="row justify-content-center align-items-center">
                                                    <div className="col-lg-6 col-md-8">
                                                        <div className="services-process-img">
                                                            <img src="/assets/img/services/canopies/3.jpg" alt="" />
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
                                                                                <p dangerouslySetInnerHTML={{ __html: feature.description }}/>
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
                                                                <img key={index} src={image} alt="" style={{maxWidth:"300px", maxHeight: "400px", objectFit: "cover"}} />
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