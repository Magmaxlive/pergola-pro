import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
import Head from "next/head"

export default function Contact() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [response, setResponse] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setResponse(null)

        // Client-side validation
        if (!formData.fullName || !formData.email || !formData.message) {
            setResponse({
                success: false,
                message: 'Please fill in all required fields',
                errors: []
            })
            setIsSubmitting(false)
            return
        }

        try {
            const res = await fetch('/api/zap', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: `${formData.fullName}`,
                    email: formData.email,
                    phone: formData.phone,
                    subject: formData.subject,
                    message: formData.message,
                }),
            })

            const data = await res.json()

            setResponse({
                success: data.success,
                message: data.message,
                errors: data.errors || []
            })

            if (data.success) {
                // Reset form on success
                setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: '',
                })
            }
        } catch (error) {
            setResponse({
                success: false,
                message: 'Network error. Please try again.'
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.id]: e.target.value
        }))
    }

    return (
        <>
            <Head>
                <title>Contact Pergola Pro Tauranga | Outdoor Living Experts</title>
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
                                <div className="contact-form-wrap" data-background="/assets/img/images/contact_form_bg.jpg">
                                    <h2 className="title">Contact With Us</h2>
                                    <p>Send us a message and we'll respond as soon as possible</p>

                                    {/* Response Messages */}
                                    {response && (
                                        <div className={`alert ${response.success ? 'alert-success' : 'alert-danger'} mb-4`}>
                                            {response.message}
                                            {response.errors && response.errors.length > 0 && (
                                                <ul className="mt-2 mb-0">
                                                    {response.errors.map((error, index) => (
                                                        <li key={index}>{error}</li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    )}

                                    <form onSubmit={handleSubmit} className="contact-form">
                                        {/* Honeypot field - hidden from users */}
                                        {/* <input
                                            type="text"
                                            id="honeypot"
                                            value={formData.honeypot}
                                            onChange={handleChange}
                                            style={{ display: 'none' }}
                                            tabIndex="-1"
                                            autoComplete="off"
                                        /> */}

                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-grp">
                                                    <input
                                                        id="fullName"
                                                        type="text"
                                                        placeholder="Full Name*"
                                                        value={formData.fullName}
                                                        onChange={handleChange}
                                                        required
                                                        disabled={isSubmitting}
                                                    />
                                                </div>
                                            </div>
                                            
                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                    <input
                                                        id="email"
                                                        type="email"
                                                        placeholder="Email Address*"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        required
                                                        disabled={isSubmitting}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                    <input
                                                        id="phone"
                                                        type="text"
                                                        placeholder="Phone Number*"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        required
                                                        disabled={isSubmitting}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-grp">
                                            <input
                                                id="subject"
                                                type="text"
                                                placeholder="Subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                disabled={isSubmitting}
                                            />
                                        </div>
                                        <div className="form-grp">
                                            <textarea
                                                id="message"
                                                placeholder="Your Message here*"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                disabled={isSubmitting}
                                                rows="5"
                                            />
                                        </div>
                                        <button
                                            className="btn"
                                            type="submit"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? 'Sending Message...' : 'Send Message'}
                                        </button>
                                    </form>
                                </div>
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