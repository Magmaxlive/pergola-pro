import Link from "next/link"

export default function About1() {
    return (
        <>
            <section className="about-area pb-120">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-7 col-lg-6 order-0 order-lg-2">
                            <div className="about-img-wrap">
                                <img src="/assets/img/about/2.jpg" style={{minWidth:"269px"}} alt="Man installing pergola" className="wow fadeInRight" data-wow-delay=".4s" />
                                <img src="/assets/img/about/1.jpg"  alt=" Kids enjoying outdoor pergola space" style={{maxWidth:"369px"}}  className="wow fadeInRight" data-wow-delay=".2s" />
                                <div className="about-experiences-wrap">
                                    <div className="experiences-item">
                                        <div className="icon">
                                            <img src="/assets/img/icon/about_icon01.svg" alt="Orange icon representing custom pergolas and outdoor living solutions"  />
                                        </div>
                                        <div className="content">
                                            <h2 className="title">Award-Winning Custom Pergola Builders in Tauranga</h2>
                                        </div>
                                    </div>
                                    <div className="experiences-item">
                                        <div className="icon">
                                            <img src="/assets/img/icon/about_icon02.svg" alt="Orange icon representing professional and experienced staff" />
                                        </div>
                                        <div className="content">
                                            <h6 className="title">1000+ Happy Customers ⭐⭐⭐⭐⭐ 4.9/5 Stars</h6>
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
                                <p>Your deck shouldn't just be four posts and a roof. It deserves a space you actually want to live in. </p>
                                <p>Pergola Pro builds custom aluminium pergolas across Tauranga, engineered to handle real coastal weather: wind, rain, and salt air. We're Tauranga's trusted pergola installer, and every outdoor room we've built is proof of that trust.
                                We also design and install louvre roof systems, carports, roller blinds, canopies, decking, and fencing, all built to the same standard. It's a complete outdoor upgrade, not a single structure bolted onto the side of your house.
                                </p>
                                <p>Want it fixed and solid? Choose an aluminium pergola, built to last. Want full control over sun and rain? An adjustable louvre pergola does that. Working to a budget? A ready-made pergola kit performs just as well, as long as it's installed properly."
                                However you build it, it's made to last, backed by a team with a reputation built on real results.
                                </p>
                                <p>Ready to give life to your outdoor space? </p>
                                {/* <div className="about-list">
                                    <ul className="list-wrap">
                                        <li><i className="fas fa-check" />32k Partners have worked us.</li>
                                        <li><i className="fas fa-check" />Professional and experienced human resources.</li>
                                        <li><i className="fas fa-check" />Provide the best roof services</li>
                                    </ul>
                                </div> */}
                                <Link href="/contact" className="btn">Talk to us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
