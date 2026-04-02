import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Head from "next/head"
import ContactMain from "@/components/contact/main"

export default function Contact({ onSuccess }) {


    return (
        <>
            <Head>
                <title>Contact Pergola Pro Tauranga | Outdoor Living Experts</title>
                <link rel="canonical" href="https://www.pergolapro.co.nz/contact/" />
                <meta name="title" content="Contact Pergola Pro Tauranga | Outdoor Living Experts"></meta>
                <meta name="description" content="Get in touch with Pergola Pro, Tauranga’s outdoor living specialists. Call +64 27 392 8106 or message us today to discuss your project."></meta>
            </Head>
            <Layout breadcrumbTitle="Contact Us">
                <section className="pt-30 pb-120">
                    <div className="container">

                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="section-title text-center mb-50 tg-heading-subheading animation-style3">
                                    <span className="sub-title tg-element-title">Get in Touch</span>
                                    <h1 className="title tg-element-title">Contact</h1>
                                </div>
                            </div>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-xl-6 col-lg-10">

                                <ContactMain onSuccess={onSuccess} />

                            </div>

                            <div className="col-xl-6 col-lg-10">
                                <div className="contact-info-wrap">
                                    <h2 className="title">Need Any Help?</h2>
                                    <p>Have questions? Get in touch!</p>
                                    <ul className="list-wrap">
                                        <li>
                                            <div className="contact-info-item">
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
                                            <div className="contact-info-item">
                                                <div className="icon">
                                                    <i className="fas fa-map-marker-alt" />
                                                </div>
                                                <div className="content">
                                                    <p>11 Aurora Avenue, Welcome Bay, <br /> Tauranga 3112, New Zealand</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                {/* contact-map */}
                                <div id="contact-map">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6310.74631726463!2d176.199884!3d-37.734389!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6dd9c39d41c8bf%3A0xfd604850881b1962!2s11%20Aurora%20Avenue%2C%20Welcome%20Bay%2C%20Tauranga%203112%2C%20New%20Zealand!5e0!3m2!1sen!2sus!4v1758554591384!5m2!1sen!2sus"
                                        height={570}
                                        style={{ border: 0, width: "100%" }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}