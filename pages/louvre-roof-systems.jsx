import Layout from "@/components/layout/Layout";
import Brand3 from "@/components/sections/Brand3";
import Link from "next/link";
import GoogleReviews from "@/components/google/reviews";
import Head from "next/head"

// Content payload in JSON format
const serviceContent = {
    mainTitle: "Louvre Roof Systems",
    title: "Louvre Roof Systems Tauranga: Control Sun and Shade Effortlessly",
    description: "With Pergola Pro's Louvre Roof Systems, you can take full control of your outdoor space—whether you want sunlight, shade, or protection from rain. Our louvre roofs feature adjustable panels that open and close at the touch of a button, letting you enjoy your patio, deck, or <a href='https://pergolapro.co.nz/'> pergola </a> in any weather. Made from high-quality aluminium and built to last, our louvre systems are the perfect mix of style and function.",

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
        description: "",
        items: [
            "Year-Round Use: Adjust the roof to handle sun, wind, and rain, so you can use your outdoor space in any season.",
            "Energy Savings: Block direct sunlight to keep your home cooler, reducing air conditioning costs.",
            "Enhanced Privacy: Add optional side screens to block the view from neighbors.",
            "Boosts Property Value: A louvre roof adds a sleek, modern look that can increase your home's market value.",
            "Low Maintenance: Built from rust-proof and UV-resistant materials that require little upkeep."
        ],
        images: [

            {
                image : "/assets/img/services/louvre-roof-system/3.png",
                alt : 'Modern outdoor pergola with louvre roof and glass walls in landscaped backyard Tauranga'
            },

            {
                image : "/assets/img/services/louvre-roof-system/4.jpg",
                alt : 'Close-up of wooden louvre roof pergola panels providing shade and airflow'
            },

           
        ]
    },

    installation: {
        title: "Our Easy Installation Process",
        steps: [
            {
                title: "Free Consultation and Quote",
                description: "Schedule a free on-site visit to discuss your ideas and get an accurate quote. Our experts will show you samples of materials and help you choose the best design."
            },
            {
                title: "Custom Design Approval",
                description: "Get a 3D design of your louvre roof to see how it will look and function. Approve the design and choose additional features like lighting and heating."
            },
            {
                title: "Professional Installation",
                description: "Our team prepares the site and installs the louvre roof quickly and safely. Most installations are completed within 2–3 days."
            },
            {
                title: "Aftercare Support",
                description: "Includes a 5-year warranty on both materials and installation. Free support and maintenance tips to keep your louvre roof looking and working great."
            }
        ]
    },

    financing: {
        title: "Financing Your Louvre Roof",
        description: "We know a louvre roof is a big investment. That's why we offer:",
        options: [
            {
                title: "0% Interest for 12 Months",
                description: "Spread the cost with no extra charges."
            },
            {
                title: "Flexible Payment Plans",
                description: "Choose to pay weekly, bi-weekly, or monthly—whatever works for you."
            },
            {
                title: "Quick Approval",
                description: "Simple application process with fast response times."
            }
        ]
    },

    maintenance: {
        title: "Maintenance Tips for Your Louvre Roof",
        tips: [
            {
                title: "Clean the Panels Twice a Year",
                description: "Use mild soap and water to remove dust and debris."
            },
            {
                title: "Check for Obstructions",
                description: "Make sure tracks and panels are clear of leaves and dirt."
            },
            {
                title: "Inspect Screws and Fittings",
                description: "Tighten any loose parts every six months."
            },
            {
                title: "Lubricate Moving Parts",
                description: "Use a silicone spray to keep the motor and tracks running smoothly."
            }
        ]
    },

    cta: {
        title: "Ready to Upgrade Your Outdoor Space?",
        description: "Contact us today to schedule a free consultation and quote for a louvre roof system. With Pergola Pro, you can make your outdoor space more comfortable and stylish—without the stress!",
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
                <title>Louvre Roof Systems Tauranga | Custom Installs | Pergola Pro</title>
                <link rel="canonical" href="https://www.pergolapro.co.nz/louvre-roof-systems/" />
                <meta name="title" content="Louvre Roof Systems Tauranga | Custom Installs | Pergola Pro"></meta>
                <meta name="description" content="Upgrade with custom louvre roof systems in Tauranga. Pergola Pro designs and installs adjustable, stylish shade solutions. Request a quote now."></meta>
            </Head>
            <Layout
                breadcrumbTitle={serviceContent.mainTitle}
                imageURL={`/assets/img/services/louvre-roof-system/1.png`}
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
                                            <p dangerouslySetInnerHTML={{ __html: serviceContent.description }}/>


                                            <div className="services-process-wrap">
                                                <div className="row justify-content-center align-items-center">
                                                    <div className="col-lg-6 col-md-8">
                                                        <div className="services-process-img">
                                                            <img src="/assets/img/services/louvre-roof-system/2.png" alt="Woman relaxing under louvre roof pergola adjusting remote control in outdoor space Tauranga" />
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
                                                            {serviceContent.benefits.images.map((i,index) => (
                                                                <img key={index} src={i.image} alt={i.alt} style={{maxWidth:"300px", maxHeight: "300px", objectFit: "cover"}} />
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
                                                           <div className="services-process-item mt-10" style={{height: "125px"}}>
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