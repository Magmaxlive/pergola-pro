import Link from "next/link"

export default function About1() {
    return (
        <>
            <section className="about-area pb-120">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-7 col-lg-6 order-0 order-lg-2">
                            <div className="about-img-wrap">
                                <img src="/assets/img/about/2.jpg" style={{maxWidth:"369px"}} alt="" className="wow fadeInRight" data-wow-delay=".4s" />
                                <img src="/assets/img/about/1.jpg" alt="" style={{maxWidth:"369px"}}  className="wow fadeInRight" data-wow-delay=".2s" />
                                <div className="about-experiences-wrap">
                                    <div className="experiences-item">
                                        <div className="icon">
                                            <img src="/assets/img/icon/about_icon01.svg" alt="" />
                                        </div>
                                        <div className="content">
                                            <h6 className="title">Custom Pergolas & Outdoor Living Solutions in Tauranga</h6>
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
                                <div className="section-title mb-25 tg-heading-subheading animation-style3">
                                    {/* <span className="sub-title tg-element-title">About Our Company</span> */} <br />
                                    <h2 className="title tg-element-title">Custom Pergolas & Outdoor Living Solutions in Tauranga</h2>
                                </div>
                                <p>We know how much New Zealand enjoys outdoor entertaining, so we understand the importance of premium outdoor protection that protects against harmful UV rays and unpredictable weather. Transform your outdoor space with Pergola Pro, Tauranga’s trusted pergola builder. Pergola Pro custom pergolas, roller blinds, carports, louvre roof systems, canopies, & fencing and decking for both residential and commercial applications.</p>
                                <p>With years of expertise in pergola installation Tauranga, and a reputation for exceptional craftsmanship, Pergola Pro has become a trusted name in outdoor solutions across New Zealand. Backed by a 10 years workmanship guarantee, you can trust us to enhance your outdoor living space with unmatched quality and reliability, perfect for those looking to invest in a long-lasting pergola New Zealand residents can be proud of.</p>
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

        </>
    )
}
