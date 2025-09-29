import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
import Counter2 from "@/components/sections/Counter2"
import Services1 from "@/components/sections/Services1"
import Script from 'next/script';
import Appointment3 from "@/components/sections/Appointment3"

export default function Service() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
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
            <Layout breadcrumbTitle="Services">

                <Script
                    id="ld-json-schema"
                    type="application/ld+json"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Service",
                            "serviceType": "Pergola Installation",
                            "provider": {
                                "@type": "LocalBusiness",
                                "name": "Pergola Pro",
                                "url": "https://pergolapro.co.nz"
                            },
                            "areaServed": {
                                "@type": "City",
                                "name": "Tauranga"
                            },
                            "url": "https://pergolapro.co.nz/services/pergolas/"
                        }),
                    }}
                />


                <div>
                    <Services1 />
                    {/* services-area-end */}
                    {/* area-bg */}
                    <div className="area-bg">
                        <div className="area-background-img jarallax" data-background="/assets/img/bg/area_bg01.jpg" />
                        {/* counter-area */}
                        <Counter2 />
                        {/* counter-area-end */}
                        {/* appointment-area */}
                        <Appointment3 />
                        {/* appointment-area-end */}
                    </div>
                    {/* area-bg-end */}
                    {/* support-area */}
                    <section className="support-area pt-115 pb-70">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-4 col-md-6">
                                    <div className="support-item">
                                        <div className="support-icon">
                                            <img src="/assets/img/icon/support_icon01.svg" alt="Pergola Design Icon" />
                                        </div>
                                        <div className="support-content">
                                            <h4 className="title">Custom Pergola Design</h4>
                                            <p>We craft bespoke pergolas tailored to your outdoor space, enhancing aesthetics and functionality.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="support-item">
                                        <div className="support-icon">
                                            <img src="/assets/img/icon/support_icon02.svg" alt="Durable Materials Icon" />
                                        </div>
                                        <div className="support-content">
                                            <h4 className="title">Durable Materials</h4>
                                            <p>Our pergolas are built with high-quality, weather-resistant materials for long-lasting beauty.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="support-item">
                                        <div className="support-icon">
                                            <img src="/assets/img/icon/support_icon03.svg" alt="Expert Installation Icon" />
                                        </div>
                                        <div className="support-content">
                                            <h4 className="title">Expert Installation</h4>
                                            <p>Professional installation ensures your pergola is sturdy, safe, and perfectly integrated.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>
        </>
    )
}