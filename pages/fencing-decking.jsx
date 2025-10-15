import Layout from "@/components/layout/Layout";
import Brand3 from "@/components/sections/Brand3";
import Link from "next/link";
import GoogleReviews from "@/components/google/reviews";

// Content payload in JSON format
const serviceContent = {
    mainTitle: "Fencing and Decking",
    title: "Fencing and Decking: Define and Enhance Your Outdoor Space in Tauranga",
    description: "At Pergola Pro, we specialize in high-quality fencing and decking solutions that add privacy, security, and style to your home. Our fences and decks are built from authentic pine and other durable materials, ensuring they stay strong and look great for years. Whether you want a cozy barbecue deck or a privacy fence to keep your backyard secluded, we can design and install the perfect solution for your space and budget. As a trusted pergola builder in Tauranga, we're here to bring your outdoor vision to life.",

    whyChoose: {
        title: "Why Choose Pergola Pro's Fencing and Decking?",
        features: [
            {
                icon: "/assets/img/icon/sp_icon01.svg",
                title: "Durable and Long-Lasting Materials",
                description: "Our fences and decks are made from high-quality pine that's treated to resist rot, termites, and harsh weather. We also offer composite decking options for a low-maintenance, long-lasting solution. All wood is sealed to prevent warping, cracking, and fading, ensuring your fence and deck look new for years."
            },
            {
                icon: "/assets/img/icon/sp_icon02.svg",
                title: "Custom Designs for Every Space",
                description: "Choose from a variety of styles, including privacy fences, picket fences, and horizontal slate designs. Custom decking options with different board sizes, colors, and finishes to suit your home's look. Our design experts will help you pick the right style and materials for your space."
            },
            {
                icon: "/assets/img/icon/sp_icon01.svg",
                title: "Quick and Professional Installation",
                description: "Our experienced team handles everything—from measuring your space to building and finishing your fence or deck. Most installations are completed within 2–3 days with no mess left behind. We also provide detailed maintenance tips to help you keep your fence and deck in top shape."
            },
            {
                icon: "/assets/img/icon/sp_icon01.svg",
                title: "Protection and Privacy",
                description: "Our fences provide complete privacy and security for your backyard. Decking options with anti-slip surfaces to keep your family safe. Built to withstand heavy use, foot traffic, and harsh weather conditions."
            },
            {
                icon: "/assets/img/icon/sp_icon01.svg",
                title: "Flexible Financing Options",
                description: "Pay for your fencing and decking over 12 months with 0% interest financing. Quick and simple approval process. Choose from weekly, bi-weekly, or monthly payments based on your budget."
            }
        ]
    },

    benefits: {
        title: "Benefits of Installing Fencing and Decking?",
        description: "",
        items: [
            "Enhanced Privacy and Security: Keep your backyard secluded from neighbors and passersby.",
            "Increased Property Value: A well-designed fence and deck can boost your home's curb appeal and market value.",
            "More Usable Outdoor Space: Decks create a comfortable area for dining, grilling, or just relaxing.",
            "Low Maintenance: Made from sealed and treated materials that resist mold, rot, and pests.",
            "Energy Efficiency: Fences can block wind and reduce cooling costs by creating shaded areas."
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
                description: "Book a free on-site consultation to discuss your ideas and get an accurate quote. Our experts will show you samples of materials and finishes to help you decide."
            },
            {
                title: "Custom Design Approval",
                description: "Choose the size, style, and color that suit your space. Get a 3D model of your fence or deck to see how it will look before installation."
            },
            {
                title: "Professional Installation",
                description: "Our trained team handles everything, from preparing the site to building and finishing the fence or deck. Most installations are completed within 2–3 days with no mess left behind."
            },
            {
                title: "Aftercare Support",
                description: "Includes a 5-year warranty on both materials and installation. Free support and maintenance tips to keep your fence and deck looking great."
            }
        ]
    },

    financing: {
        title: "Financing Your Fence and Deck",
        description: "We understand that fencing and decking can be a big investment. That's why we offer:",
        options: [
            {
                title: "0% Interest for 12 Months",
                description: "Spread the cost without any extra charges."
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

    maintenance: {
        title: "Maintenance Tips for Your Fence and Deck",
        tips: [
            {
                title: "Seal Your Deck Annually",
                description: "Apply a wood sealer once a year to protect against water and UV damage."
            },
            {
                title: "Clean Regularly",
                description: "Sweep off leaves and debris to prevent mold and mildew."
            },
            {
                title: "Inspect for Loose Screws",
                description: "Check screws and fittings every six months and tighten if needed."
            },
            {
                title: "Trim Nearby Trees",
                description: "Prevent scratches and debris buildup by keeping branches away."
            }
        ]
    },

    cta: {
        title: "Ready to Enhance Your Outdoor Space?",
        description: "Get in touch with us today for a free consultation and quote for custom fencing and decking. With Pergola Pro, getting a strong and stylish fence or deck is easy and affordable!",
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
                breadcrumbTitle={serviceContent.mainTitle}
                imageURL={`https://pergolapro.co.nz/wp-content/uploads/2024/08/fence.png`}
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