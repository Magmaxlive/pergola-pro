import VideoPopup from "@/components/elements/VideoPopup"
import Layout from "@/components/layout/Layout"
import Brand3 from "@/components/sections/Brand3"
import Link from "next/link"
import Slider from "react-slick"
import GoogleReviews from "@/components/google/reviews";
import Head from "next/head"
import { useState } from "react"


const settings = {
    dots: true,
    autoplay: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
}


export default function Catalogue() {
    const [isActive, setIsActive] = useState({ status: false, key: "" })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({ status: false })
        } else {
            setIsActive({ status: true, key })
        }
    }

    const locations = [
        "Bay of Plenty",
        "Waikato",
        "Auckland",
        "Taupo",
        "Hawkes Bay",
        "Palmerston North"
        ];

        const features = [
            {
                title: "Custom every time",
                description: "Tailored to your space, your style, and the way you live."
            },
            {
                title: "NZ weather ready",
                description: "Engineered for everything our climate throws at it."
            },
            {
                title: "Quality first",
                description: "Premium aluminium alloy built to last decades, not years."
            },
            {
                title: "Your peace of mind",
                description: "Free quotes, transparent pricing, and a team that keeps it simple."
            }
            ];

        const a3_canopies = [
            {
                title: "Post / Fixing",
                description: "80mm support posts — ground anchor fixing"
            },
            {
                title: "Support Rails",
                description: "Standard support rails"
            },
            {
                title: "Roofing",
                description: "Polycarbonate 2.0mm / 3.0mm"
            },
            {
                title: "Gutter / Drain",
                description: "Integrated — straight or radius edge · 40–50mm downpipe"
            },
            {
                title: "Hardware",
                description: "Stainless steel fasteners & sealing components"
            },
            {
                title: "Compatibility",
                description: "Side blinds, insulated roofing, enclosure systems"
            }
        ]

        const a5_canopies = [
            {
                title: "Post / Fixing",
                description: "80mm structural posts — flange plate fixing"
            },
            {
                title: "Support Rails",
                description: "Double-slot support rails + side horizontal rails"
            },
            {
                title: "Roofing",
                description: "Polycarbonate panels (impact resistant)"
            },
            {
                title: "Gutter / Drain",
                description: "Integrated — straight or radius edge · 50mm drainage pipe"
            },
            {
                title: "Hardware",
                description: "Joiners, brackets & anchoring components"
            },
            {
                title: "Compatibility",
                description: <>Carport layouts, side enclosures, insulated roofing upgrades <br/> • PS1-applicable structural design</>
            }
        ]

        const a8_canopies = [
            {
                title: "Post / Fixing",
                description: "75mm–100mm strengthened pillars — heavy-duty base fixing"
            },
            {
                title: "Support Rails",
                description: "Strengthened girders, support bars & girder connections"
            },
            {
                title: "Roofing",
                description: "Polycarbonate or insulated roof panels"
            },
            {
                title: "Gutter / Drain",
                description: "High-capacity integrated gutter with end caps & ferrules · High-capacity water pipe system"
            },
            {
                title: "Hardware",
                description: "Heavy-duty joiner system"
            },
            {
                title: "Compatibility",
                description: "Full enclosure — doors, windows & blinds; insulated roof panels"
            }
        ]
        
        const Quickmodel_selector = [
            {
                requirement: "Covered patio or deck",
                model: "A3",
                why: "Slim, modular, lightweight"
            },
            {
                requirement: "Light-use carport, 1 to 2 vehicles",
                model: "A3",
                why: "Cost-effective, all-weather frame"
            },
            {
                requirement: "Mid-size residential or small commercial",
                model: "A5",
                why: "Reinforced, PS1-ready"
            },
            {
                requirement: "Carport requiring council compliance",
                model: "A5",
                why: "PS1-applicable structural design"
            },
            {
                requirement: "Large commercial carport or shade structure",
                model: "A8",
                why: "Heavy-duty, large span capability"
            },
            {
                requirement: "Cantilever or custom configuration",
                model: "A8",
                why: "Designed for cantilever builds"
            },
            {
                requirement: "Premium residential outdoor room",
                model: "A8",
                why: "High-capacity, full enclosure support"
            }
        ]

        const specifications = [
                {
                    specification: "Post Profile",
                    series200: "180 x 180 x 2.8mm",
                    series220: "170 x 170 x 3mm",
                    series180: "135 x 135 x 2mm"
                },
                {
                    specification: "Frame",
                    series200: "200 x 50 x 2.5mm",
                    series220: "200 x 40 x 2.5mm",
                    series180: "155 x 45 x 2.5mm"
                },
                {
                    specification: "Blade Size",
                    series200: "200 x 50 x 1.5mm",
                    series220: "220 x 50 x 2.0mm",
                    series180: "183 x 36 x 2mm"
                },
                {
                    specification: "Blade Type",
                    series200: "Double layer heavy-duty aluminium alloy",
                    series220: "Double layer heavy-duty aluminium alloy",
                    series180: "Double layer heavy-duty aluminium alloy"
                },
                {
                    specification: "Gutter System",
                    series200: "Inbuilt, 100% waterproof",
                    series220: "Inbuilt, 100% waterproof",
                    series180: "Inbuilt, 100% waterproof"
                },
                {
                    specification: "Base Plate",
                    series200: "15mm inner plate, concealed",
                    series220: "Standard 200 x 200 base plate",
                    series180: "Standard 200 x 200 base plate"
                },
                {
                    specification: "Automation",
                    series200: "Available, +$2,000",
                    series220: "Available, +$2,000",
                    series180: "Available, +$2,000"
                },
                {
                    specification: "LED Lighting",
                    series200: "Optional light strips",
                    series220: "Optional light strips",
                    series180: "Optional light strips"
                },
                {
                    specification: "Wind Rating",
                    series200: "200 to 220 km/h",
                    series220: "200 to 220 km/h",
                    series180: "200 to 220 km/h"
                },
                {
                    specification: "Colour Options",
                    series200: "Fully customisable",
                    series220: "Fully customisable",
                    series180: "Fully customisable"
                }
                ];

    return (
        <>
            <Head>
                <title>Catalogue Pergola Pro | Tauranga’s Trusted Outdoor Living Experts</title>
                <link rel="canonical" href="https://www.pergolapro.co.nz/about/" />
                <meta name="title" content="About Pergola Pro | Tauranga’s Trusted Outdoor Living Experts"></meta>
                <meta name="description" content="Discover Pergola Pro’s story, values, and commitment to creating stylish outdoor spaces across Tauranga and the Bay of Plenty. Quality you can trust."></meta>
            </Head>
            <Layout breadcrumbTitle="About Us">
                <section className="about-area inner-about-area pt-30 pb-120">
                    <div className="container">
                        <div className="row justify-content-center" >
                            <div className="col-lg-6">
                                <div className="section-title text-center mb-50 tg-heading-subheading animation-style3">
                                    <span className="sub-title tg-element-title text-uppercase fw-bold">Catalogue</span>
                                    <h2 className="title tg-element-title"><span style={{color:'#fe5d14'}}>Outdoor Living.</span> Built for New Zealand</h2>
                                </div>
                            </div>
                        </div>

                        <div className="py-5 px-3 d-flex flex-column justify-content-center align-items-center gap-5">
                            <h3 className="text-center">Our services</h3>
                            <div className="row justify-content-center">

                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="services-item wow fadeInUp border border-2" data-wow-delay=".4s" data-background="https://server.pergolapro.co.nz/wp-content/uploads/2023/12/canopies.jpg" onMouseEnter={() => handleToggle(2)} onMouseLeave={() => handleToggle(2)}>
                                <div className="services-icon" style={{ display: `${isActive.key == 2 ? "none" : "flex"}` }}>
                                    <img src="/assets/img/icon/services_icon02.svg" alt="Pergolas service in Tauranga – custom outdoor pergola installation" />
                                </div>
                                <div className="services-content">
                                    <h2 className="title" style={{ display: `${isActive.key == 2 ? "none" : "block"}` }}><Link href="/pergolas">Pergolas</Link></h2>
                                    <h2 className="number">01</h2>
                                </div>
                                <div className="services-overlay-content" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                    <h2 className="title">Pergolas</h2>
                                    <p>Transform your outdoor space with Pergola Pro&apos;s exquisite pergolas</p>
                                    <Link href={"/pergolas"} className="read-more">Read More <i className="fas fa-arrow-right" /></Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="services-item wow fadeInUp border border-2" data-wow-delay=".6s" data-background="https://server.pergolapro.co.nz/wp-content/uploads/2023/12/carports.jpg" onMouseEnter={() => handleToggle(3)} onMouseLeave={() => handleToggle(3)}>
                                <div className="services-icon" style={{ display: `${isActive.key == 3 ? "none" : "flex"}` }}>
                                    <img src="/assets/img/icon/services_icon03.svg" alt="Carports installation Tauranga – durable and modern carport solutions" />
                                </div>
                                <div className="services-content">
                                    <h2 className="title" style={{ display: `${isActive.key == 3 ? "none" : "block"}` }}><Link href="/carports">Carports</Link></h2>
                                    <h2 className="number">02</h2>
                                </div>
                                <div className="services-overlay-content" style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                    <h2 className="title">Carports</h2>
                                    <p>Discover the advantages of our cutting-edge carports</p>
                                    <Link href={"/carports"} className="read-more">Read More <i className="fas fa-arrow-right" /></Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="services-item wow fadeInUp border border-2" data-wow-delay=".4s" data-background="https://server.pergolapro.co.nz/wp-content/uploads/2023/12/roller.jpg" onMouseEnter={() => handleToggle(4)} onMouseLeave={() => handleToggle(4)}>
                                <div className="services-icon" style={{ display: `${isActive.key == 4 ? "none" : "flex"}` }}>
                                    <img src="/assets/img/icon/services_icon02.svg" alt="Outdoor roller blinds Tauranga – weather protection and privacy screens" />
                                </div>
                                <div className="services-content">
                                    <h2 className="title" style={{ display: `${isActive.key == 4 ? "none" : "block"}` }}><Link href="/roller-blinds">Roller Blinds</Link></h2>
                                    <h2 className="number">03</h2>
                                </div>
                                <div className="services-overlay-content" style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                                    <h2 className="title">Roller Blinds</h2>
                                    <p>Transform your outdoor space with Pergola Pro&apos;s custom roller blinds</p>
                                    <Link href={"/roller-blinds"} className="read-more">Read More <i className="fas fa-arrow-right" /></Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="services-item wow fadeInUp border border-2" data-wow-delay=".3s" data-background="https://server.pergolapro.co.nz/wp-content/uploads/2023/12/louvre.jpg" onMouseEnter={() => handleToggle(5)} onMouseLeave={() => handleToggle(5)}>
                                <div className="services-icon" style={{ display: `${isActive.key == 5 ? "none" : "flex"}` }}>
                                    <img src="/assets/img/icon/services_icon04.svg" alt="Louvre roof systems Tauranga – adjustable outdoor roofing solutions" />
                                </div>
                                <div className="services-content">
                                    <h2 className="title" style={{ display: `${isActive.key == 5 ? "none" : "block"}` }}><Link href="/louvre-roof-systems">Louvre Roof Systems</Link></h2>
                                    <h2 className="number">04</h2>
                                </div>
                                <div className="services-overlay-content" style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
                                    <h2 className="title">Louvre Roof Systems</h2>
                                    <p>Pergola Pro specializes in custom louvre solutions for outdoor spaces</p>
                                    <Link href={"/louvre-roof-systems"} className="read-more">Read More <i className="fas fa-arrow-right" /></Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="services-item wow fadeInUp border border-2" data-wow-delay=".6s" data-background="https://server.pergolapro.co.nz/wp-content/uploads/2023/12/canopies.jpg" onMouseEnter={() => handleToggle(6)} onMouseLeave={() => handleToggle(6)}>
                                <div className="services-icon" style={{ display: `${isActive.key == 6 ? "none" : "flex"}` }}>
                                    <img src="/assets/img/icon/services_icon05.svg" alt="Custom canopies Tauranga – stylish shade structures for outdoor spaces" />
                                </div>
                                <div className="services-content">
                                    <h2 className="title" style={{ display: `${isActive.key == 6 ? "none" : "block"}` }}><Link href="/canopies">Canopies</Link></h2>
                                    <h2 className="number">05</h2>
                                </div>
                                <div className="services-overlay-content" style={{ display: `${isActive.key == 6 ? "block" : "none"}` }}>
                                    <h2 className="title">Canopies</h2>
                                    <p>Transform your outdoor space with a canopy</p>
                                    <Link href={"/canopies"} className="read-more">Read More <i className="fas fa-arrow-right" /></Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="services-item wow fadeInUp border border-2" data-wow-delay=".9s" data-background="https://server.pergolapro.co.nz/wp-content/uploads/2024/08/fence.png" onMouseEnter={() => handleToggle(7)} onMouseLeave={() => handleToggle(7)}>
                                <div className="services-icon" style={{ display: `${isActive.key == 7 ? "none" : "flex"}` }}>
                                    <img src="/assets/img/icon/services_icon06.svg" alt="Fencing and decking Tauranga – quality outdoor construction services" />
                                </div>
                                <div className="services-content">
                                    <h2 className="title" style={{ display: `${isActive.key == 7 ? "none" : "block"}` }}><Link href="/fencing-decking">Fencing & Decking</Link></h2>
                                    <h2 className="number">06</h2>
                                </div>
                                <div className="services-overlay-content" style={{ display: `${isActive.key == 7 ? "block" : "none"}` }}>
                                    <h2 className="title">Fencing & Decking</h2>
                                    <p>Transform your outdoor space with a canopy</p>
                                    <Link href={"/fencing-decking"} className="read-more">Read More <i className="fas fa-arrow-right" /></Link>
                                </div>
                            </div>
                        </div>

                    </div>

                        </div>

                        <div className="d-flex py-3 px-3 flex-column gap-4">
                            <h3 className="text-center">Our Locations</h3>
                            <div className="row gap-2 gap-lg-0 gap-md-0">
                                
                                {locations.map((i,index)=>(
                                    <div className="col-lg-2 col-md-4 col-12 mb-md-3" key={index}>
                                        <div className="border justify-content-center align-items-center pt-3" style={{backgroundColor:'#fe5d14',borderRadius:'5px'}}>
                                            <p className="fw-bold fs-5 text-center text-white">{i}</p>
                                        </div>
                                    </div>
                                ))}
                                
                            </div>
                        </div>

                        

                        <div className="row align-items-center mt-5">
                            <div className="col-xl-7 col-lg-6 order-0 order-lg-2">
                                <div className="about-img-wrap">
                                    <img src="/assets/img/about/3.jpg" alt="Installer working on modern louvre roof system outdoor installation Tauranga" style={{ maxWidth: "309px" }} className="wow fadeInRight" data-wow-delay=".4s" />
                                    <img src="/assets/img/about/5.webp" alt="Stylish pergola with outdoor dining setup in landscaped backyard New Zealand" style={{ maxWidth: "369px" }} className="wow fadeInRight" data-wow-delay=".2s" />
                                    <div className="about-experiences-wrap">
                                        <div className="experiences-item">
                                            <div className="icon">
                                                <img src="/assets/img/icon/about_icon01.svg" alt="Pergola Pro 10+ years experience icon representing trusted outdoor solutions" />
                                            </div>
                                            <div className="content">
                                                <h6 className="title">We have more than 10 years of experiences</h6>
                                            </div>
                                        </div>
                                        <div className="experiences-item">
                                            <div className="icon">
                                                <img src="/assets/img/icon/about_icon02.svg" alt="Professional Tauranga team icon representing experienced pergola installers" />
                                            </div>
                                            <div className="content">
                                                <h6 className="title">Professional & Experienced Local Tauranga Team</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-6">
                                <div className="about-content">
                                    <div className="section-title mb-25">
                                        {/* <span className="sub-title">About Our Company</span> */}
                                        <h2 className="title">Built for
                                            New Zealand.
                                            Built to Last.</h2>
                                    </div>
                                    <p>We design, measure and build every
                                        structure on-site. Built entirely by our own
                                        team, to the standard you deserve.
                                        From Auckland to Tauranga and across the
                                        country, hundreds of Kiwi families have
                                        trusted us to transform their outdoors into
                                        spaces they actually live in.</p>
                                    
                                    <Link href="/contact" className="btn">Learn More</Link>
                                </div>
                                <div className="d-flex flex-column gap-3 mt-5">
                                    <h4>Why Pergola Pro ?</h4>

                                    <div className="d-flex flex-column gap-2">
                                        {features.map((i,index)=>(
                                            <div className="d-flex flex-column gap-1" key={index}>
                                                <span className="fw-bold" style={{color:'#FE5D14'}}>{i.title} : </span>
                                                <p>{i.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex gap-5 flex-column mt-5">
                            <h3 className="text-center"><span style={{color:'#FE5D14'}}>01 . </span>Canopies</h3>
                            <div className="row gap-4 gap-md-0 gap-lg-0">
                                <div className="col-md-6 col-12 ">
                                    <img src="/assets/img/gallery/canopies.png" alt="Canopies" style={{width:'100%'}} />
                                </div>
                                <div className="col-md-6 col-12 d-flex flex-column gap-3 px-md-5 px-3">
                                    <h5>The Right Structure
                                    for Every Space.</h5>

                                        <p>Three profiles. One standard of quality. Whether you are
                                        covering a small patio or a large commercial installation,
                                        our canopy range is built from powder-coated
                                        aluminium with integrated guttering and UV-resistant
                                        polycarbonate roofing across every model.</p>
                                </div>
                            </div>

                            <div className="row align-items-stretch">

                                <div className="col-lg-6 col-12 d-flex flex-column">
                                    <div style={{borderRadius:'5px', overflow:'hidden', border:'1px solid #dee2e6', flex:1}}>
                                    <table className="table table-bordered mb-0 h-100">
                                <thead>
                                    <tr>
                                        <th style={{backgroundColor:'#fe5d14',border:'1px solid #fe5d14',color:'#fff'}}>A3</th>
                                        <th style={{backgroundColor:'#fe5d14',border:'1px solid #fe5d14',color:'#fff'}}>Standard / Light-Duty Patios, Decks &amp; Light-Use Carports</th>
                                    </tr>
                                </thead>
                                <tbody style={{borderTopColor:'#fe5d14'}}>
                                    {a3_canopies.map((item, index) => (
                                        <tr key={index}>
                                            <td className="fw-bold" style={{verticalAlign:'middle'}}>{item.title}</td>
                                            <td style={{verticalAlign:'middle'}}>{item.description}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-12 mt-5 mt-lg-0 d-flex flex-column">
                                    <div style={{borderRadius:'5px', overflow:'hidden', border:'1px solid #dee2e6', flex:1}}>
                                    <table className="table table-bordered mb-0 h-100">
                                <thead>
                                    <tr>
                                        <th style={{backgroundColor:'#fe5d14',border:'1px solid #fe5d14',color:'#fff'}}>A5</th>
                                        <th style={{backgroundColor:'#fe5d14',border:'1px solid #fe5d14',color:'#fff'}}>Reinforced / Mid-Duty Residential & commercial applications</th>
                                    </tr>
                                </thead>
                                <tbody style={{borderTopColor:'#fe5d14'}}>
                                    {a5_canopies.map((item, index) => (
                                        <tr key={index}>
                                            <td className="fw-bold" style={{verticalAlign:'middle'}}>{item.title}</td>
                                            <td style={{verticalAlign:'middle'}}>{item.description}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                                    </div>
                                </div>
                            </div>


                            <div className="row">

                                <div className="col-lg-6 col-12">
                                    <div style={{borderRadius:'5px', overflow:'hidden', border:'1px solid #dee2e6'}}>
                                    <table className="table table-bordered mb-0">
                                <thead>
                                    <tr>
                                        <th style={{backgroundColor:'#fe5d14',border:'1px solid #fe5d14',color:'#fff'}}>A8</th>
                                        <th style={{backgroundColor:'#fe5d14',border:'1px solid #fe5d14',color:'#fff'}}>Heavy-Duty / Large Span
                                            Commercial & premium residential;
                                            cantilever & custom configurations</th>
                                    </tr>
                                </thead>
                                <tbody style={{borderTopColor:'#fe5d14'}}>
                                    {a8_canopies.map((item, index) => (
                                        <tr key={index}>
                                            <td className="fw-bold" style={{verticalAlign:'middle'}}>{item.title}</td>
                                            <td style={{verticalAlign:'middle'}}>{item.description}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                                    </div>
                                </div>

                            </div>

                            <div className="d-flex flex-column gap-4 mt-3">
                                <h3 className="text-center">
                                    Quick Model Selector
                                </h3>

                                
                                <div className="row justify-content-center align-items-center">

                                    <div className="col-lg-6 col-12">
                                        <div style={{borderRadius:'5px', overflow:'hidden', border:'1px solid #dee2e6'}}>
                                        <table className="table table-bordered mb-0">
                                    <thead>
                                        <tr>
                                            <th style={{backgroundColor:'#fe5d14',border:'1px solid #fe5d14',color:'#fff'}}>Requirement</th>
                                            <th style={{backgroundColor:'#fe5d14',border:'1px solid #fe5d14',color:'#fff'}}>Model</th>
                                            <th style={{backgroundColor:'#fe5d14',border:'1px solid #fe5d14',color:'#fff'}}>Why</th>

                                        </tr>
                                    </thead>
                                    <tbody style={{borderTopColor:'#fe5d14'}}>
                                        {Quickmodel_selector.map((item, index) => (
                                            <tr key={index}>
                                                <td className="fw-bold" style={{verticalAlign:'middle'}}>{item.requirement}</td>
                                                <td style={{verticalAlign:'middle'}}>{item.model}</td>
                                                <td style={{verticalAlign:'middle'}}>{item.why}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                        </div>
                                    </div>

                                </div>

                                <div className="d-flex flex-column gap-1 mt-2">
                                    <h6 className="fw-bold capitalize text-center" style={{color:'#FE5D14'}}>All Canopy Models  </h6>
                                    <p className="text-center">Powder-coated aluminium frame. Integrated guttering. Polycarbonate or insulated roofing options. Side blind compatibility. Stainless steel hardware throughout</p>
                                </div>
                            </div>

                            
                        </div>

                        <div className="d-flex gap-5 flex-column mt-5">
                            <h3 className="text-center"><span style={{color:'#FE5D14'}}>02 . </span>Manual
                                Louvre Pergola</h3>
                            <div className="row gap-4 gap-md-0 gap-lg-0">
                                <div className="col-md-6 col-12 ">
                                    <img src="/assets/img/gallery/canopies.png" alt="Canopies" style={{width:'100%'}} />
                                </div>
                                <div className="col-md-6 col-12 d-flex flex-column gap-3 px-md-5 px-3">
                                    <h5>Your Outdoor Space,
                                        on Your Terms. 
                                        </h5>

                                        <p>Open it up on a sunny afternoon. Close it when the
                                        rain rolls in. Our louvre pergola range gives you
                                        complete control over light, airflow and weather, all
                                        year round. Three series to suit every budget, every
                                        one built and installed by our own team.</p>
                                </div>
                            </div>

                            
                            <div className="d-flex flex-column gap-4 mt-3">
                                
                                <div className="row justify-content-center align-items-center">

                                    <div className="col-lg-6 col-12">
                                        <div style={{borderRadius:'5px', overflow:'hidden', border:'1px solid #dee2e6'}}>
                                        <table className="table table-bordered mb-0">
                                    <thead>
                                        <tr>
                                            <th style={{backgroundColor:'#fe5d14',border:'1px solid #fe5d14',color:'#fff'}}>Specification</th>
                                            <th style={{backgroundColor:'#fe5d14',border:'1px solid #fe5d14',color:'#fff'}}>200 Series — Premium</th>
                                            <th style={{backgroundColor:'#fe5d14',border:'1px solid #fe5d14',color:'#fff'}}>220 Series — Standard+</th>
                                            <th style={{backgroundColor:'#fe5d14',border:'1px solid #fe5d14',color:'#fff'}}>180 Series — Entry</th>


                                        </tr>
                                    </thead>
                                    <tbody style={{borderTopColor:'#fe5d14'}}>
                                        {specifications.map((item, index) => (
                                            <tr key={index}>
                                                <td className="fw-bold" style={{verticalAlign:'middle'}}>{item.specification}</td>
                                                <td style={{verticalAlign:'middle'}}>{item.series200}</td>
                                                <td style={{verticalAlign:'middle'}}>{item.series220}</td>
                                                <td style={{verticalAlign:'middle'}}>{item.series180}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                        </div>
                                    </div>

                                </div>

                                <div className="d-flex flex-column gap-1 mt-2">
                                    <h6 className="fw-bold capitalize text-center" style={{color:'#FE5D14'}}>All Louvre Series</h6>
                                    <p className="text-center">Aluminium alloy blade connectors including rotating shaft & motor housing.
                                        Colour fully customisable. Powder-coated aluminium frames. </p>
                                </div>
                            </div>

                            
                        </div>
                    </div>
                </section>
                <GoogleReviews />
            </Layout>
        </>
    )
}