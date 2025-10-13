import Link from "next/link"
import { useState } from "react"
import Brand1 from "./Brand1"
import CTAFormsOne from "@/components/forms/cta";

export default function Banner1() {
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
            <section className="banner-area">
                <div className="banner-shape" data-background="/assets/img/banner/banner.jpeg" />
                <div className="banner-bg" data-background="/assets/img/banner/banner.jpeg">

                    <div className="banner-content">
                        <h2 className="title wow fadeInDown" data-wow-delay=".2s">Tauranga's Most Popular Pergola Brand</h2>
                        <p className="" data-wow-delay=".2s" style={{ fontSize: "16px" }}>Discover why thousands of homeowners trust us to elevate their homes. </p>
                        <Link href="/contact" className="btn wow fadeInUp" data-wow-delay=".4s">Get your free quote</Link>
                    </div>
                    <div className="banner-tooltip-wrap" style={{marginLeft: "60px"}}>
                        <CTAFormsOne />
                    </div>
                </div>
            </section>

        </>
    )
}
