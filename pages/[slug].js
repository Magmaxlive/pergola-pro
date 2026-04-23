import Head from "next/head"
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import { data } from "@/supurbData"
import Slugify from "@/components/validators/slugify"
import { useState } from "react"
import GoogleReviews from "@/components/google/reviews"
import ContactMain from "@/components/contact/main"

function getCanonicalSlug(entry) {
    const base = Slugify(entry.suburb)
    return entry.page_type === "louvre_roof_systems"
        ? `louvreroof-${base}`
        : `pergola-${base}`
}

export async function getStaticPaths() {
    const paths = data.map((entry) => ({
        params: { slug: getCanonicalSlug(entry) },
    }))
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const entry = data.find((item) => getCanonicalSlug(item) === params.slug)
    if (!entry) return { notFound: true }
    return { props: { suburb: entry, slug: params.slug } }
}

export default function SuburbPage({ suburb, slug }) {
    const canonicalUrl = `https://pergolapro.co.nz/${slug}/`
    const isLouvre = suburb.page_type === "louvre_roof_systems"
    const [activeIndex, setActiveIndex] = useState(0)

    const handleToggle = (i) => setActiveIndex(activeIndex === i ? null : i)

    return (
        <>
            <Head>
                <title>{suburb.page_title} | Pergola Pro NZ</title>
                <meta name="title" content={`${suburb.page_title} | Pergola Pro NZ`} />
                <meta
                    name="description"
                    content={suburb.hero.description.slice(0, 160)}
                />
                <link rel="canonical" href={canonicalUrl} />
                <style>{`
                    .suburb-service-card {
                        transition: background 0.3s, color 0.3s;
                    }
                    .suburb-service-card:hover {
                        background: #fe5d14 !important;
                    }
                    .suburb-service-card:hover .title,
                    .suburb-service-card:hover .suburb-service-desc {
                        color: #fff !important;
                    }
                    .suburb-service-card:hover i {
                        color: rgba(255,255,255,0.6) !important;
                    }
                `}</style>
            </Head>

            <Layout>

                {/* Banner */}
                <section style={{
                    position: "relative",
                    padding: "200px 0",
                    backgroundSize: "cover",
                    backgroundImage: 'url(/assets/img/banner/pergolaCover.png)',
                    backgroundPosition: "center",
                }}>
                    <div style={{
                        position: "absolute",
                        inset: 0,
                        background: "rgba(0, 0, 0, 0.65)",
                    }} />
                    <div className="container text-center" style={{ position: "relative", zIndex: 1 }}>
                        <h1 style={{ color: "#fff", fontWeight: 700, marginBottom: 8 }}>
                            {suburb.page_title}
                        </h1>
                        {/* <p style={{ color: "rgba(255,255,255,0.75)", marginBottom: 0 }}>
                            {suburb.suburb} · Pergola Pro NZ
                        </p> */}
                        <div className="d-flex justify-content-center align-items-center gap-3 mt-5">
                            <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: 0 , fontSize:'20px' , fontWeight:600 }}>1000+ Happy Customers</p>
                            <span style={{ color: "rgba(255,255,255,0.4)" }}>|</span>
                            <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: 0 , fontSize:'20px' , fontWeight:600 }}>
                                <i className="fas fa-star" style={{ color: "#FFC107" }} />
                                <i className="fas fa-star" style={{ color: "#FFC107" }} />
                                <i className="fas fa-star" style={{ color: "#FFC107" }} />
                                <i className="fas fa-star" style={{ color: "#FFC107" }} />
                                <i className="fas fa-star" style={{ color: "#FFC107" }} />
                                {" "} 4.9/5 stars
                            </p>
                        </div>
                    </div>
                </section>

                {/* Hero */}
                <section style={{ padding: "80px 0" }}>
                    <div className="container">
                        <div className="row align-items-start">
                            <div className="col-lg-6 col-12 text-start">
                                <h2 className="title mb-20">{suburb.hero.headline}</h2>
                                {isLouvre && suburb.hero.subheadline && (
                                    <h2 className="sub-title mb-20" style={{ fontSize: "1.3rem", fontWeight: 500 }}>
                                        {suburb.hero.subheadline}
                                    </h2>
                                )}
                                <p className="mb-35" style={{ maxWidth: 800, margin: "0 auto" }}>
                                    {suburb.hero.description}
                                </p>
                                <Link href="/gallery" className="btn btn-two mt-3">
                                    View our gallery
                                </Link>

                                <div className="mt-5 col-12" >
                                <div className="contact-info-wrap">
                                    <h2 className="title">Get Your Free Quote Today
</h2>
                                    <ul className="list-wrap d-flex justify-content-between">
                                        <li>
                                            <div className="contact-info-item mt-4">
                                                <div className="icon">
                                                    <i className="fas fa-phone-alt" />
                                                </div>
                                                <div className="content">
                                                    <Link href="tel:+64273928106">+64 27 392 8106</Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="contact-info-item">
                                                <div className="icon">
                                                    <i className="fas fa-envelope" />
                                                </div>
                                                <div className="content">
                                                    <Link href="mailto:info@pergolapro.co.nz">info@pergolapro.co.nz</Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            {/* <div className="contact-info-item">
                                                <div className="icon">
                                                    <i className="fas fa-map-marker-alt" />
                                                </div>
                                                <div className="content">
                                                    <p>11 Aurora Avenue, Welcome Bay, <br /> Tauranga 3112, New Zealand</p>
                                                </div>
                                            </div> */}
                                        </li>
                                    </ul>
                                </div>
                                {/* contact-map */}
                               
                            </div>
                            </div>
                            
                            <div className="col-lg-6 col-12 mt-5 mt-lg-0">
                                <ContactMain />

                            </div>
                        </div>
                    </div>
                </section>

                <GoogleReviews/>

                {/* Services */}
                <section className="services-area pt-80 pb-80" style={{ background: "#f7f7f7" }}>
                    <div className="container">
                        <div className="row justify-content-center mb-50">
                            <div className="col-lg-8 text-center">
                                <h2 className="title">Our Services in {suburb.suburb}</h2>
                            </div>
                        </div>
                        <div className="row">
                            {suburb.services.map((service, i) => (
                                <div className="col-lg-4 col-md-6 mb-30" key={i}>
                                    <div className="suburb-service-card" style={{ padding: "30px", background: "#fff", borderRadius: "8px", height: "100%" }}>
                                        <div className="services-icon mb-20">
                                            <i className="fas fa-home" style={{ fontSize: "2rem", color: "#ededed" }} />
                                        </div>
                                        <h4 className="title mb-15">{service.name}</h4>
                                        <p className="suburb-service-desc mb-0">{service.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="about-area pt-80 pb-80">
                    <div className="container">
                        <div className="row justify-content-center mb-50">
                            <div className="col-lg-8 text-center">
                                <h2 className="title">{suburb.why_choose_us.heading}</h2>
                                {suburb.why_choose_us.intro && (
                                    <p className="mt-15">{suburb.why_choose_us.intro}</p>
                                )}
                            </div>
                        </div>
                        <div className="row">
                            {suburb.why_choose_us.points.map((point, i) => (
                                <div className="col-lg-6 mb-20" key={i}>
                                    <div className="d-flex align-items-start" style={{ gap: "12px" }}>
                                        <i className="fas fa-check-circle mt-1" style={{ color: "#e63b2e", fontSize: "1.1rem", flexShrink: 0 }} />
                                        <p className="mb-0">{point}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                {suburb.faqs && suburb.faqs.length > 0 && (
                    <section className="faq-area pt-80 pb-80" style={{ background: "#f7f7f7" }}>
                        <div className="container">
                            <div className="row justify-content-center mb-50">
                                <div className="col-lg-8 text-center">
                                    <h2 className="title">Frequently Asked Questions</h2>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-9">
                                    <div className="accordion">
                                        {suburb.faqs.map((faq, i) => (
                                            <div className="accordion-item mb-15" key={i} style={{ borderRadius: "8px", overflow: "hidden", border: "1px solid #e0e0e0" }}>
                                                <h2 className="accordion-header" onClick={() => handleToggle(i)}>
                                                    <button
                                                        className={activeIndex === i ? "accordion-button" : "accordion-button collapsed"}
                                                        type="button"
                                                        style={{ fontWeight: 600 }}
                                                    >
                                                        {faq.question}
                                                    </button>
                                                </h2>
                                                <div className={activeIndex === i ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                    <div className="accordion-body">{faq.answer}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Offer / Financing */}
                {(suburb.offer || suburb.financing) && (
                    <section className="appointment-area pt-80 pb-80" style={{ background: "#e63b2e" }}>
                        <div className="container">
                            <div className="row justify-content-center text-center text-white">
                                <div className="col-lg-8">
                                    <h2 className="title text-white mb-20">
                                        {suburb.offer?.heading || suburb.financing?.heading}
                                    </h2>
                                    <p className="text-white mb-30">
                                        {suburb.offer?.description || `Provider: ${suburb.financing?.provider}`}
                                    </p>
                                    {suburb.financing?.points && (
                                        <ul className="list-unstyled mb-30">
                                            {suburb.financing.points.map((pt, i) => (
                                                <li key={i} className="text-white mb-10">
                                                    <i className="fas fa-check me-2" /> {pt}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                    <Link href="/contact" className="btn" style={{ background: "#fff", color: "#e63b2e" }}>
                                        Apply Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* CTA */}
                <section className="cta-area pt-80 pb-80">
                    <div className="container">
                        <div className="row justify-content-center text-center">
                            <div className="col-lg-8">
                                <h2 className="title mb-20">{suburb.cta.heading}</h2>
                                <p className="mb-35">{suburb.cta.description}</p>
                                {isLouvre && Array.isArray(suburb.cta.buttons) ? (
                                    <div className="d-flex justify-content-center gap-3 flex-wrap">
                                        {suburb.cta.buttons.map((label, i) => (
                                            <Link key={i} href="/contact" className={i === 0 ? "btn btn-two" : "btn"} style={i !== 0 ? { border: "2px solid #e63b2e", color: "#e63b2e" } : {}}>
                                                {label}
                                            </Link>
                                        ))}
                                    </div>
                                ) : (
                                    <Link href="/contact" className="btn btn-two">
                                        {suburb.cta.button_label || "Get a Quote"}
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                

            </Layout>
        </>
    )
}
