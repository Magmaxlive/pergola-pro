import Layout from "@/components/layout/Layout"
import Head from "next/head"
import { useState } from "react"



export default function Catalogue() {
    const [isActive, setIsActive] = useState({ status: false, key: "" })
    const [showModal, setShowModal] = useState(false)
    const [formData, setFormData] = useState({ name: '', email: '', phone: '' , service:'', location:''})
    const [submitting, setSubmitting] = useState(false)
    const [error, setError] = useState('')

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({ status: false })
        } else {
            setIsActive({ status: true, key })
        }
    }

    const openModal = () => {
        setError('')
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
        setFormData({ name: '', email: '', phone: '', location: '', service: '' })
        setError('')
    }

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setSubmitting(true)
        try {
            const res = await fetch('/api/catalogue', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    service: formData.service,
                    location: formData.location,
                }),
            })
            if (!res.ok) throw new Error('Submission failed')
            closeModal()
            const link = document.createElement('a')
            link.href = '/assets/catalogue.pdf'
            link.download = 'Pergola-Pro-Catalogue.pdf'
            link.click()
        } catch {
            setError('Something went wrong. Please try again.')
        } finally {
            setSubmitting(false)
        }
    }



        const features = [
            {
                title: "Louvre vs canopy vs fixed roof",
                description: "Which louvre roof system suits your NZ home and why"
            },
            {
                title: "The full A3, A5 and A8 range compared",
                description: "Spans, drainage, wind ratings, council compliance"
            },
            {
                title: "200, 220 and 180 louvre series side by side",
                description: "So you can match the pergola design to your budget"
            },
            {
                title: "Real Kiwi projects",
                description: "Pergola ideas from homes across Tauranga, Bay of Plenty and greater NZ. See what others built and why it worked"
            },
            {
                title: "Add-ons that change everything",
                description: "Blinds, screens, lighting, automation"
            },
            {
                title: "How the process works",
                description: "From first visit to a finished build in 1 to 5 days"
            }
            ];


            const trustBadges = [
                {
                    icon: "🛡️",
                    title: "10-Year Guarantee",
                    description: "on every build"
                },
                {
                    icon: "🏗️",
                    title: "Designed, built and installed by our own NZ team",
                    description: "No subcontractors"
                },
                {
                    icon: "🌧️",
                    title: "Engineered for NZ weather",
                    description: "Premium aluminium pergolas built to last decades"
                },
                {
                    icon: "💳",
                    title: "12-month finance ",
                    description: "available"
                },
                {
                    icon: "📋",
                    title: "Free on-site quote",
                    description: "No pressure, no obligation"
                }
                ];




    return (
        <>
            <style>{`.cat-dl-btn { width: 50%; } @media (max-width: 767px) { .cat-dl-btn { width: 100% !important; } }`}</style>
            <Head>
                <title>Pergola Designs for Tauranga, NZ Homes | Free Catalogue Download</title>
                <link rel="canonical" href="https://www.pergolapro.co.nz/about/" />
                <meta name="title" content="Pergola Designs for Tauranga, NZ Homes | Free Catalogue Download"></meta>
                <meta name="description" content="Download the free Pergola Pro catalogue featuring modern pergola designs, louvre roof systems, outdoor living ideas, and premium solutions for New Zealand homes"></meta>
            </Head>
            <Layout breadcrumbTitle="About Us">
                <section className="about-area inner-about-area pt-30 pb-120">
                    <div className="container">
                        <div className="row justify-content-center" >
                            <div className="col-lg-6">
                                <div className="section-title text-center mb-50 tg-heading-subheading animation-style3">
                                    <h2 className="title tg-element-title"><span style={{color:'#fe5d14'}}>See What Your  </span>Backyard Could Become.</h2>
                                </div>
                            </div>
                        </div>

                        


                        <div className="d-flex gap-5 flex-column mt-5">
                            <div className="row gap-4 gap-md-0 gap-lg-0">
                                <div className="col-md-6 col-12 ">
                                    <img src="/assets/img/gallery/canopies.png" alt="pergola design nz" style={{width:'100%'}} />
                                </div>
                                <div className="col-md-6 col-12 d-flex flex-column gap-3 px-md-5 px-3">
                                        <h5>Pergola designs, louvre roof systems, and outdoor living ideas. All in one catalogue made for New Zealand homes.</h5>
                                        <p>Some homes have a room that does most of the living. For a growing number of homeowners from Tauranga to the Bay of Plenty and beyond, that room doesn't have walls.</p>
                                        <p> If you're exploring <a href="https://www.pergolapro.co.nz/blog/top-5-pergola-design-ideas-for-nz-homes/10009/" className="text-decoration-underline fw-bold">  pergola ideas</a> for your New Zealand home, this is where it starts. One pergola brochure. Every answer you need. Before you measure, before you quote, before you decide.</p>
                                        <h6 className="fw-bold">Get the Free Catalogue <span className="fw-light ms-2"> 20 pages. Straight to your inbox.</span></h6>
                                        <button onClick={openModal} className="py-2 px-3 fw-bold text-white border-0 rounded-3 cat-dl-btn" style={{backgroundColor:'#fe5d14'}}>Download Catalogue</button>
                                </div>
                            </div>

                        </div>

                        <div className="row  mt-3">
                            <div className="col-md-6 col-12 d-flex flex-column gap-4 mt-5">
                            <h3 className="fw-bold text-center">What You'll Find Inside</h3>
                            <ul className="d-flex flex-column gap-2">
                                {features.map((i,index)=>(
                                    <li className="d-flex gap-3" key={index} >
                                        <div>✓</div>
                                        <div className="d-flex flex-column gap-1">
                                             <h6 className="fw-bold" style={{color:'#fe5d14'}}>{i.title}</h6>
                                             <p>{i.description}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            </div>

                            <div className="col-md-6 col-12 d-flex flex-column gap-4 mt-5">
                                <h3 className="fw-bold text-center">Why Homeowners Trust Pergola Pro</h3>
                                <ul className="d-flex flex-column gap-2">
                                    {trustBadges.map((i,index)=>(
                                        <li className="d-flex gap-3 align-items-start" key={index} >
                                            <div>✓</div>
                                            <div className="d-flex flex-column gap-1">
                                                <h6 className="fw-bold" style={{color:'#fe5d14'}}>{i.title}</h6>
                                                <p>{i.description}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="d-flex gap-5 flex-column mt-5">
                            <div className="row gap-4 gap-md-0 gap-lg-0">
                                <div className="col-md-6 col-12 ">
                                    <img src="/assets/img/gallery/15.png" alt="pergola design tauranga" style={{width:'100%'}} />
                                </div>
                                <div className="col-md-6 col-12 d-flex flex-column gap-3 px-md-5 px-3">
                                        <h5>One Catalogue. The Whole Picture.</h5>
                                        <p>Before you measure the deck. Before you call around for quotes. Before you choose between fixed or louvre pergola designs for your NZ home.</p>
                                        <p>Download the pergola catalogue NZ homeowners have used to plan, compare and build with confidence.</p>
                                        <p>Don't start without it. It'll save you weeks.</p>
                                        <button onClick={openModal} className="py-2 px-3 fw-bold text-white border-0 rounded-3 cat-dl-btn" style={{backgroundColor:'#fe5d14'}}>Download Catalogue</button>
                                        <p className="fst-italic fw-light">Yours to keep. Share it with your partner. Mark it up. Picture what Kiwi outdoor living looks like at your place.</p>

                                </div>
                            </div>

                        </div>

                        

                    </div>
                </section>
            </Layout>

            {showModal && (
                <div
                    onClick={closeModal}
                    style={{position:'fixed',inset:0,backgroundColor:'rgba(0,0,0,0.55)',zIndex:1050,display:'flex',alignItems:'center',justifyContent:'center',padding:'1rem'}}
                >
                    <div
                        onClick={e => e.stopPropagation()}
                        style={{backgroundColor:'#fff',borderRadius:'12px',padding:'2rem',width:'100%',maxWidth:'460px',position:'relative'}}
                    >
                        <button
                            onClick={closeModal}
                            style={{position:'absolute',top:'1rem',right:'1rem',background:'none',border:'none',fontSize:'1.4rem',lineHeight:1,cursor:'pointer',color:'#666'}}
                            aria-label="Close"
                        >
                            &times;
                        </button>

                        <h4 className="fw-bold mb-1">Get the Free Catalogue</h4>
                        <p className="text-muted mb-4" style={{fontSize:'0.9rem'}}>20 pages. Straight to your inbox. Enter your details and we'll send it right away.</p>

                        <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                            <div>
                                <label className="form-label fw-bold">Name <span style={{color:'#fe5d14'}}>*</span></label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    placeholder="Your full name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label className="form-label fw-bold">Email <span style={{color:'#fe5d14'}}>*</span></label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    placeholder="you@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label className="form-label fw-bold">Phone <span style={{color:'#fe5d14'}}>*</span></label>
                                <input
                                    type="tel"
                                    name="phone"
                                    className="form-control"
                                    placeholder="021 000 0000"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div>
                                <label className="form-label fw-bold">Service <span>(Optional)</span></label>
                                <input
                                    type="text"
                                    name="service"
                                    className="form-control"
                                    placeholder="Describe the service you're interested in"
                                    value={formData.service}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label className="form-label fw-bold">Location <span style={{color:'#fe5d14'}}>*</span></label>
                                <input
                                    type="text"
                                    name="location"
                                    className="form-control"
                                    placeholder="Enter your location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            
                            {error && <p style={{color:'red',fontSize:'0.875rem',margin:0}}>{error}</p>}

                            <button
                                type="submit"
                                disabled={submitting}
                                className="fw-bold text-white border-0 rounded-3 py-2"
                                style={{backgroundColor: submitting ? '#ccc' : '#fe5d14', cursor: submitting ? 'not-allowed' : 'pointer'}}
                            >
                                {submitting ? 'Sending...' : 'Download Now'}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}