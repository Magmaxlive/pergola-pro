import VideoPopup from "@/components/elements/VideoPopup"
import Layout from "@/components/layout/Layout"
import Brand3 from "@/components/sections/Brand3"
import Link from "next/link"
import Slider from "react-slick"
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
            <Layout breadcrumbTitle="About Us">

                <section className="about-area inner-about-area pt-30 pb-120">
                    <div className="container">
                        <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-title text-center mb-50 tg-heading-subheading animation-style3">
                                <span className="sub-title tg-element-title">About</span>
                                <h2 className="title tg-element-title">Signature Attributes of Pergola Pro Tauranga</h2>
                            </div>
                        </div>
                    </div>

                        <div className="row align-items-center">
                            <div className="col-xl-7 col-lg-6 order-0 order-lg-2">
                                <div className="about-img-wrap">
                                    <img src="/assets/img/about/2.jpg" alt=""  style={{maxWidth:"369px"}}  className="wow fadeInRight" data-wow-delay=".4s" />
                                    <img src="/assets/img/about/1.jpg" alt=""  style={{maxWidth:"369px"}}  className="wow fadeInRight" data-wow-delay=".2s" />
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
                                                <h6 className="title">We use professional and experienced person</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-6">
                                <div className="about-content">
                                    <div className="section-title mb-25">
                                        <span className="sub-title">About Our Company</span>
                                        <h2 className="title">V BUILDERS VENTURE FOR: CURATING THE PERFECT LIVING SPACE</h2>
                                    </div>
                                    <p>Pergola Pro expertly creates outdoor areas that are tailored to each house. Under the direction of our in-house architectural designer, every client is able to express their distinct vision during the design phase. We then turn that vision into a remarkable final product, which significantly enhances the value of your property and lifestyle with comprehensive outdoor solutions.</p>
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
                                    <Link href="/about" className="btn">Learn More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* about-area-end */}
                {/* work-area */}
                <section className="work-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="section-title text-center mb-50 tg-heading-subheading animation-style3">
                                    <span className="sub-title tg-element-title">Working Plan</span>
                                    <h2 className="title tg-element-title">Roof Plan Working Process</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-3 col-md-6">
                                <div className="work-item">
                                    <div className="work-thumb">
                                        <img src="/assets/img/images/work_img01.png" alt="" />
                                        <h4 className="number">01</h4>
                                    </div>
                                    <div className="work-content">
                                        <h2 className="title">Advanced construction materials</h2>
                                        <p><ul><li>Highly durable aluminum alloy, resistant to oxidation and corrosion, crafts profiled edges.<br /><br /></li><li>Polycarbonate roofing materials have a lifespan exceeding ten years, ensuring longevity and reliability.</li></ul></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="work-item">
                                    <div className="work-thumb">
                                        <img src="/assets/img/images/work_img02.png" alt="" />
                                        <h4 className="number">02</h4>
                                    </div>
                                    <div className="work-content">
                                        <h2 className="title">Superior Drainage System</h2>
                                        <p><ul><li>We use corrosion-resistant aluminum alloy drain pipes with a distinctive design to ensure efficient water flow and simple maintenance..<br /><br /></li><li>The noise reduction design ensures a peaceful atmosphere even during rainy weather, enhancing comfort and tranquility.</li></ul></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="work-item">
                                    <div className="work-thumb">
                                        <img src="/assets/img/images/work_img03.png" alt="" />
                                        <h4 className="number">03</h4>
                                    </div>
                                    <div className="work-content">
                                        <h2 className="title">A fully customizable canopy</h2>
                                        <p><ul>
                                            <li>Irregular shape design options are available to cover any desired area, providing tailored solutions to meet individual needs.</li>
                                        </ul></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="work-item">
                                    <div className="work-thumb">
                                        <img src="/assets/img/images/work_img04.png" alt="" />
                                        <h4 className="number">04</h4>
                                    </div>
                                    <div className="work-content">
                                        <h2 className="title">Safety and protection</h2>
                                        <p><ul>
                                            <li>The aluminum canopy&#8217;s B1-grade flame retardant properties prevent accidental fire damage, ensuring safety for the structure and occupants..<br /><br /></li>
                                            <li>The double-sided co-extrusion process creates a UV-resistant layer, providing effective protection against harmful UV rays and promoting durability and longevity.</li>
                                        </ul>	</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* work-area-end */}
                {/* history-area */}
                <section className="history-area pt-120 pb-120">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="history-img-wrap">
                                    <ul className="list-wrap">
                                        <li>
                                            <img src="/assets/img/images/history_img01.jpg" alt="" />
                                        </li>
                                        <li>
                                            <img src="/assets/img/images/history_img02.jpg" alt="" />
                                            <VideoPopup />
                                        </li>
                                        <li>
                                            <img src="/assets/img/images/history_img03.jpg" alt="" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="history-content">
                                    <div className="section-title mb-20">
                                        <span className="sub-title">THEN THE DESIGN</span>
                                        <h2 className="title">ULTIMATELY, THERE IS A SOLUTION</h2>
                                    </div>
                                    <p>After that, we will refine the design and get the materials ready for your project, all the while keeping you informed about the project’s timeline. We strive to keep the lead time at roughly six weeks, which is highly competitive.</p>
                                    <p>One of our knowledgeable teams will deliver all the ready-made materials to the location and construct your outdoor solution according to the precise measurements of the area. Depending on the project’s size and complexity, this could take one to five days to finish.</p>
                                    {/* <div className="history-list">
                                        <ul className="list-wrap">
                                            <li><i className="fas fa-check-circle" />Technology management</li>
                                            <li><i className="fas fa-check-circle" />Roofing Solutions</li>
                                            <li><i className="fas fa-check-circle" />Modern Worker Working here</li>
                                            <li><i className="fas fa-check-circle" />Quick Response</li>
                                        </ul>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* history-area-end */}
                {/* area-bg */}
                <div className="area-bg-five" data-background="/assets/img/bg/area_bg05.jpg">
                    {/* team-area */}
                    <section className="inner-team-area pb-90">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="section-title text-center mb-60">
                                        <span className="sub-title">Professional Team</span>
                                        <h2 className="title">Professional Team Member</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                                    <div className="team-item">
                                        <div className="team-thumb">
                                            <Link href="/team-details"><img src="/assets/img/team/team_img01.jpg" alt="" /></Link>
                                            <div className="team-social">
                                                <ul className="list-wrap">
                                                    <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="team-content">
                                            <h2 className="title"><Link href="/team-details">Robert C. Simmons</Link></h2>
                                            <span>Roof Engineer</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                                    <div className="team-item">
                                        <div className="team-thumb">
                                            <Link href="/team-details"><img src="/assets/img/team/team_img02.jpg" alt="" /></Link>
                                            <div className="team-social">
                                                <ul className="list-wrap">
                                                    <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="team-content">
                                            <h2 className="title"><Link href="/team-details">Christopher Jhon</Link></h2>
                                            <span>Roof Engineer</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                                    <div className="team-item">
                                        <div className="team-thumb">
                                            <Link href="/team-details"><img src="/assets/img/team/team_img03.jpg" alt="" /></Link>
                                            <div className="team-social">
                                                <ul className="list-wrap">
                                                    <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="team-content">
                                            <h2 className="title"><Link href="/team-details">Karikoka Ahli</Link></h2>
                                            <span>Roof Engineer</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                                    <div className="team-item">
                                        <div className="team-thumb">
                                            <Link href="/team-details"><img src="/assets/img/team/team_img04.jpg" alt="" /></Link>
                                            <div className="team-social">
                                                <ul className="list-wrap">
                                                    <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="team-content">
                                            <h2 className="title"><Link href="/team-details">Dickerson MH</Link></h2>
                                            <span>Roof Engineer</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* team-area-end */}
                    {/* testimonial-area */}
                    <section className="inner-testimonial-area parallax pb-120 position-relative">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-6">
                                    <div className="section-title text-center mb-50">
                                        <span className="sub-title">Our Testimonial</span>
                                        <h2 className="title">What Our Client Feedback</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-10">
                                    <div className="testimonial-inner">
                                        <Slider {...settings} className="testimonial-active-two">
                                            <div className="testimonial-item-two">
                                                <div className="testimonial-avatar-two">
                                                    <img src="/assets/img/images/h2_testi_avatar01.png" alt="" />
                                                </div>
                                                <div className="testimonial-content-two">
                                                    <div className="content-top">
                                                        <div className="icon">
                                                            <i className="fas fa-quote-left" />
                                                        </div>
                                                        <div className="rating">
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                        </div>
                                                    </div>
                                                    <p>There are many varation of paissages of Lorem as the Ipum available but our majority have sufferied alterations in some form, by our by injected hsumour randomised worids which don't looks even slightly there as believable. If you going to use a passage of Lorem Ipsum.</p>
                                                    <div className="content-bottom">
                                                        <h4 className="title">Darrell Steward</h4>
                                                        <span>Roofing Expert</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="testimonial-item-two">
                                                <div className="testimonial-avatar-two">
                                                    <img src="/assets/img/images/h2_testi_avatar02.png" alt="" />
                                                </div>
                                                <div className="testimonial-content-two">
                                                    <div className="content-top">
                                                        <div className="icon">
                                                            <i className="fas fa-quote-left" />
                                                        </div>
                                                        <div className="rating">
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                        </div>
                                                    </div>
                                                    <p>Lorem Ipsum are many varation of paissages of Lorem as the Ipum available but our majority have sufferied alterations in some form, by our by injected hsumour randomised worids which don't looks even slightly there as believable. If you going to use a passage of Lorem Ipsum.</p>
                                                    <div className="content-bottom">
                                                        <h4 className="title">Robert C. Simmons</h4>
                                                        <span>Roofing Expert</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="testimonial-item-two">
                                                <div className="testimonial-avatar-two">
                                                    <img src="/assets/img/images/h2_testi_avatar03.png" alt="" />
                                                </div>
                                                <div className="testimonial-content-two">
                                                    <div className="content-top">
                                                        <div className="icon">
                                                            <i className="fas fa-quote-left" />
                                                        </div>
                                                        <div className="rating">
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                        </div>
                                                    </div>
                                                    <p>Lorem Ipsum are many varation of paissages of Lorem as the Ipum available but our majority have sufferied alterations in some form, by our by injected hsumour randomised worids which don't looks even slightly there as believable. If you going to use a passage of Lorem Ipsum.</p>
                                                    <div className="content-bottom">
                                                        <h4 className="title">Karikoka Ahli</h4>
                                                        <span>Executive Manager</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slider>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-avatar-wrap">
                                <ul className="list-wrap">
                                    <li>
                                        <img src="/assets/img/images/h4_testi_avatar01.png" className="layer" data-depth="0.1" alt="" />
                                    </li>
                                    <li>
                                        <img src="/assets/img/images/h4_testi_avatar02.png" className="layer" data-depth="0.2" alt="" />
                                    </li>
                                    <li>
                                        <img src="/assets/img/images/h4_testi_avatar03.png" className="layer" data-depth="0.05" alt="" />
                                    </li>
                                    <li>
                                        <img src="/assets/img/images/h4_testi_avatar03.png" className="layer" data-depth="0.2" alt="" />
                                    </li>
                                    <li>
                                        <img src="/assets/img/images/h4_testi_avatar02.png" className="layer" data-depth="0.05" alt="" />
                                    </li>
                                    <li>
                                        <img src="/assets/img/images/h4_testi_avatar01.png" className="layer" data-depth="0.1" alt="" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    {/* testimonial-area-end */}
                </div>
                {/* area-bg-end */}
                {/* brand-area */}
                <Brand3 />


            </Layout>
        </>
    )
}