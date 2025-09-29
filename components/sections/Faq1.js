import { useState } from 'react'
export default function Faq1() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <section className="faq-area faq-bg" data-background="/assets/img/bg/faq_bg.jpg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="section-title text-center mb-60">
                                <span className="sub-title">Our Faqs</span>
                                <h2 className="title">Have Any Questions  Answer?</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-6 col-lg-10 order-0 order-xl-2">
                            <div className="faq-img-wrap">
                                <img src="/assets/img/images/faq_img01.jpg" alt="" className="wow fadeInRight" data-wow-delay=".4s" />
                                <img src="/assets/img/images/faq_img02.jpg" alt="" className="wow fadeInRight" data-wow-delay=".2s" />
                                <div className="overlay-text wow fadeInUp" data-wow-delay=".6s">
                                    <h2 className="title">FAQ</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="faq-wrap">
                                <div className="accordion">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(1)}>
                                            <button className={isActive.key == 1 ? "accordion-button" : "accordion-button collapsed "}>
                                                What types of pergolas and outdoor solutions do you offer in Auckland and Tauranga?
                                            </button>
                                        </h2>
                                        <div className={isActive.key == 1 ? "accordion-collapse collapse  show" : "accordion-collapse collapse "}>
                                            <div className="accordion-body">
                                                <p>
                                                    Pergola Pro specializes in crafting custom-designed pergolas, louvre roof systems, and canopies to enhance your outdoor living space. We also provide high-quality roller blinds, carports, and comprehensive decking and fencing services, all built to withstand New Zealand’s unique weather conditions.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(2)}>
                                            <button className={isActive.key == 2 ? "accordion-button" : "accordion-button collapsed "}>
                                                How do your pergolas provide year-round protection from the New Zealand weather?
                                            </button>
                                        </h2>
                                        <div className={isActive.key == 2 ? "accordion-collapse collapse  show" : "accordion-collapse collapse "}>
                                            <div className="accordion-body">
                                                <p>Our outdoor solutions are engineered to offer superior all-weather protection. They are designed to provide shade and block harmful UV rays during summer, while also offering reliable shelter from rain and wind, ensuring you can enjoy your outdoor area comfortably throughout the year.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(3)}>
                                            <button className={isActive.key == 3 ? "accordion-button" : "accordion-button collapsed "}>
                                                Are your pergolas custom-made to fit my specific space?
                                            </button>
                                        </h2>
                                        <div className={isActive.key == 3 ? "accordion-collapse collapse  show" : "accordion-collapse collapse "}>
                                            <div className="accordion-body">
                                                <p>Yes, absolutely. Every Pergola Pro project is a bespoke creation. We offer a comprehensive consultation and design process to ensure your new pergola is a perfect, tailor-made addition that seamlessly integrates with your home’s architecture and your lifestyle.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(4)}>
                                            <button className={isActive.key == 4 ? "accordion-button" : "accordion-button collapsed "}>
                                                What materials do you use for your pergolas and outdoor blinds?
                                            </button>
                                        </h2>
                                        <div className={isActive.key == 4 ? "accordion-collapse collapse  show" : "accordion-collapse collapse "}>
                                            <div className="accordion-body">
                                                <p>We use high-quality, durable materials, including structural aluminium and top-grade roofing sheets, that are specifically chosen for their longevity and resilience against coastal and high-wind environments. Our outdoor blinds are also made from robust, weather-resistant fabrics.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(5)}>
                                            <button className={isActive.key == 5 ? "accordion-button" : "accordion-button collapsed "}>
                                                How long does it take to design and install a pergola?
                                            </button>
                                        </h2>
                                        <div className={isActive.key == 5 ? "accordion-collapse collapse  show" : "accordion-collapse collapse "}>
                                            <div className="accordion-body">
                                                <p>The timeline for a pergola project can vary based on its complexity and size. From the initial free on-site consultation to the final installation, we work efficiently and maintain clear communication to keep your project on track, aiming for a swift and professional completion.</p>
                                            </div>
                                        </div>
                                    </div>

                                     <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(5)}>
                                            <button className={isActive.key == 5 ? "accordion-button" : "accordion-button collapsed "}>
                                                Do you offer a warranty on your workmanship and products?
                                            </button>
                                        </h2>
                                        <div className={isActive.key == 5 ? "accordion-collapse collapse  show" : "accordion-collapse collapse "}>
                                            <div className="accordion-body">
                                                <p>Yes, we stand by the quality of our work. PergolaPro provides a solid 10-year workmanship guarantee on all our projects, giving you peace of mind and confidence in the long-term durability of your investment.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
