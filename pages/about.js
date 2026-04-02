import VideoPopup from "@/components/elements/VideoPopup"
import Layout from "@/components/layout/Layout"
import Brand3 from "@/components/sections/Brand3"
import Link from "next/link"
import Slider from "react-slick"
import GoogleReviews from "@/components/google/reviews";
import Head from "next/head"


const settings = {
    dots: true,
    autoplay: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
}


export default function About() {


    return (
        <>
            <Head>
                <title>About Pergola Pro | Tauranga’s Trusted Outdoor Living Experts</title>
                <link rel="canonical" href="https://www.pergolapro.co.nz/about/" />
                <meta name="title" content="About Pergola Pro | Tauranga’s Trusted Outdoor Living Experts"></meta>
                <meta name="description" content="Discover Pergola Pro’s story, values, and commitment to creating stylish outdoor spaces across Tauranga and the Bay of Plenty. Quality you can trust."></meta>
            </Head>
            <Layout breadcrumbTitle="About Us">
                <section className="about-area inner-about-area pt-30 pb-120">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="section-title text-center mb-50 tg-heading-subheading animation-style3">
                                    <span className="sub-title tg-element-title">About</span>
                                    <h2 className="title tg-element-title">Tauranga&apos;s Premier Experts in Custom Pergolas & Outdoor Design</h2>
                                </div>
                            </div>
                        </div>

                        <div className="row align-items-center">
                            <div className="col-xl-7 col-lg-6 order-0 order-lg-2">
                                <div className="about-img-wrap">
                                    <img src="/assets/img/about/3.jpg" alt="" style={{ maxWidth: "309px" }} className="wow fadeInRight" data-wow-delay=".4s" />
                                    <img src="/assets/img/about/5.webp" alt="" style={{ maxWidth: "369px" }} className="wow fadeInRight" data-wow-delay=".2s" />
                                    <div className="about-experiences-wrap">
                                        <div className="experiences-item">
                                            <div className="icon">
                                                <img src="/assets/img/icon/about_icon01.svg" alt="" />
                                            </div>
                                            <div className="content">
                                                <h6 className="title">We have more than 10 years of experiences</h6>
                                            </div>
                                        </div>
                                        <div className="experiences-item">
                                            <div className="icon">
                                                <img src="/assets/img/icon/about_icon02.svg" alt="" />
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
                                        <h2 className="title">About Our Company</h2>
                                    </div>
                                    <p>Pergola Pro expertly creates outdoor areas that are tailored to each house. Under the direction of our in-house architectural designer, every client is able to express their distinct vision during the design phase. We then turn that vision into a remarkable final product, which significantly enhances the value of your property and lifestyle with comprehensive <a href="https://pergolapro.co.nz/">outdoor solutions</a>.</p>
                                    <p>
                                        <strong>OUR WORKFLOW IN-HOME CONSULTATION</strong> <br />
                                        After meeting with you on-site, one of our design experts will thoroughly comprehend your home’s vision, go over all of your options, and then offer you the best option for your particular circumstance.</p>
                                    {/* <div className="about-list">
                                        <ul className="list-wrap">
                                            <li><i className="fas fa-check" />32k Partners have worked us.</li>
                                            <li><i className="fas fa-check" />Professional and experienced human resources.</li>
                                            <li><i className="fas fa-check" />Provide the best roof services</li>
                                        </ul>
                                    </div> */}
                                    <Link href="/contact" className="btn">Learn More</Link>
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