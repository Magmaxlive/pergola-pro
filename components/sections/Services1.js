import Link from "next/link"
import { useEffect, useState, useRef } from "react"


export default function Services1({ isService }) {
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
            <section className="pt-30 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-title text-center mb-50 tg-heading-subheading animation-style3">
                                <span className="sub-title tg-element-title">Services</span>
                                <h1 className="title tg-element-title"> Tauranga&apos;s Custom Pergola, Carport & Outdoor Solutions </h1>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">



                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <Link href={"/pergolas"}>
                                <div className="services-item wow fadeInUp" data-wow-delay=".4s" data-background="https://server.pergolapro.co.nz/wp-content/uploads/2023/12/canopies.jpg" onMouseEnter={() => handleToggle(2)} onMouseLeave={() => handleToggle(2)}>
                                    <div className="services-icon" style={{ display: `${isActive.key == 2 ? "none" : "flex"}` }}>
                                        <img src="/assets/img/icon/services_icon02.svg" alt="" />
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
                            </Link>
                        </div>


                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <Link href={"/carports"}>
                                <div className="services-item wow fadeInUp" data-wow-delay=".6s" data-background="https://server.pergolapro.co.nz/wp-content/uploads/2023/12/carports.jpg" onMouseEnter={() => handleToggle(3)} onMouseLeave={() => handleToggle(3)}>
                                    <div className="services-icon" style={{ display: `${isActive.key == 3 ? "none" : "flex"}` }}>
                                        <img src="/assets/img/icon/services_icon03.svg" alt="" />
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
                            </Link>

                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <Link href={"/roller-blinds"}>
                                <div className="services-item wow fadeInUp" data-wow-delay=".4s" data-background="https://server.pergolapro.co.nz/wp-content/uploads/2023/12/roller.jpg" onMouseEnter={() => handleToggle(2)} onMouseLeave={() => handleToggle(2)}>
                                    <div className="services-icon" style={{ display: `${isActive.key == 2 ? "none" : "flex"}` }}>
                                        <img src="/assets/img/icon/services_icon02.svg" alt="" />
                                    </div>
                                    <div className="services-content">
                                        <h2 className="title" style={{ display: `${isActive.key == 2 ? "none" : "block"}` }}><Link href="/roller-blinds">Roller Blinds</Link></h2>
                                        <h2 className="number">03</h2>
                                    </div>
                                    <div className="services-overlay-content" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                        <h2 className="title">Roller Blinds</h2>
                                        <p>Transform your outdoor space with Pergola Pro&apos;s custom roller blinds</p>
                                        <Link href={"/roller-blinds"} className="read-more">Read More <i className="fas fa-arrow-right" /></Link>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <Link href={"/louvre-roof-systems"}>
                                <div className="services-item wow fadeInUp" data-wow-delay=".3s" data-background="https://server.pergolapro.co.nz/wp-content/uploads/2023/12/louvre.jpg" onMouseEnter={() => handleToggle(4)} onMouseLeave={() => handleToggle(4)}>
                                    <div className="services-icon" style={{ display: `${isActive.key == 4 ? "none" : "flex"}` }}>
                                        <img src="/assets/img/icon/services_icon04.svg" alt="" />
                                    </div>
                                    <div className="services-content">
                                        <h2 className="title" style={{ display: `${isActive.key == 4 ? "none" : "block"}` }}><Link href="/louvre-roof-systems">Louvre Roof Systems</Link></h2>
                                        <h2 className="number">04</h2>
                                    </div>
                                    <div className="services-overlay-content" style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                                        <h2 className="title">Louvre Roof Systems</h2>
                                        <p>Pergola Pro specializes in custom louvre solutions for outdoor spaces</p>
                                        <Link href={"/louvre-roof-systems"} className="read-more">Read More <i className="fas fa-arrow-right" /></Link>
                                    </div>
                                </div>
                            </Link>

                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <Link href={"/canopies"}>
                                <div className="services-item wow fadeInUp" data-wow-delay=".6s" data-background="https://server.pergolapro.co.nz/wp-content/uploads/2023/12/canopies.jpg" onMouseEnter={() => handleToggle(5)} onMouseLeave={() => handleToggle(5)}>
                                    <div className="services-icon" style={{ display: `${isActive.key == 5 ? "none" : "flex"}` }}>
                                        <img src="/assets/img/icon/services_icon05.svg" alt="" />
                                    </div>
                                    <div className="services-content">
                                        <h2 className="title" style={{ display: `${isActive.key == 5 ? "none" : "block"}` }}><Link href="/canopies">Canopies</Link></h2>
                                        <h2 className="number">05</h2>
                                    </div>
                                    <div className="services-overlay-content" style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
                                        <h2 className="title">Canopies</h2>
                                        <p>Transform your outdoor space with a canopy</p>
                                        <Link href={"/canopies"} className="read-more">Read More <i className="fas fa-arrow-right" /></Link>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <Link href={"/fencing-decking"}>
                                <div className="services-item wow fadeInUp" data-wow-delay=".9s" data-background="https://server.pergolapro.co.nz/wp-content/uploads/2024/08/fence.png" onMouseEnter={() => handleToggle(6)} onMouseLeave={() => handleToggle(6)}>
                                    <div className="services-icon" style={{ display: `${isActive.key == 6 ? "none" : "flex"}` }}>
                                        <img src="/assets/img/icon/services_icon06.svg" alt="" />
                                    </div>
                                    <div className="services-content">
                                        <h2 className="title" style={{ display: `${isActive.key == 6 ? "none" : "block"}` }}><Link href="/fencing-decking">Fencing & Decking</Link></h2>
                                        <h2 className="number">06</h2>
                                    </div>
                                    <div className="services-overlay-content" style={{ display: `${isActive.key == 6 ? "block" : "none"}` }}>
                                        <h2 className="title">Fencing & Decking</h2>
                                        <p>Transform your outdoor space with a canopy</p>
                                        <Link href={"/fencing-decking"} className="read-more">Read More <i className="fas fa-arrow-right" /></Link>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {isService ? (<p className="mt-50">At Pergola Pro, we offer a wide range of outdoor solutions designed to enhance your home&apos;s beauty and functionality. Our services include custom canopies, adjustable louvres, durable carports, elegant pergolas, and versatile roller blinds. Each solution is crafted with precision and tailored to your unique needs, ensuring that your outdoor space is both beautiful and practical. Whether you’re looking to create shade, increase privacy, or add a stylish feature to your home, our team of experts is dedicated to delivering quality craftsmanship and exceptional service.</p>) : null}

                </div>
            </section>

        </>
    )
}
