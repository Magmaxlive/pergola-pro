import Link from "next/link"
import { useEffect, useState, useRef } from "react"
import { baseURL } from "@/auth/auth";
import { useRouter } from "next/navigation";
import Slugify from "@/components/validators/slugify";

export default function Services1() {
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

    const [servicesData, setNewsData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const cachedData = useRef([]);
    const router = useRouter();

    useEffect(() => {
        fetchNewsData();
        const storedData = localStorage.getItem("serviceData");
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            setNewsData(parsedData);
            cachedData.current = parsedData;
        } else {
            fetchNewsData();
        }
        const handleScroll = () => {
            if (window.scrollY === 0 && cachedData.current.length === 0) {
                fetchNewsData();
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const fetchNewsData = async () => {
        setIsLoading(true);
        const res = await fetch(`${baseURL}/wp-json/wp/v2/cpt_services`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();
        setNewsData(data);
        console.log(data)
        cachedData.current = data;
        localStorage.setItem("serviceData", JSON.stringify(data));
        setIsLoading(false);
    };

    return (
        <>
            <section className="services-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-title text-center mb-50 tg-heading-subheading animation-style3">
                                <span className="sub-title tg-element-title">Services</span>
                                <h2 className="title tg-element-title">Signature Attributes of Pergola Pro Tauranga</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        {/* {servicesData.map((item, i) => {
                            let slugnName = item?.title.rendered ? Slugify(item?.title.rendered) : null;
                            return (
                                <div key={i} className="col-lg-4 col-md-6 col-sm-10">
                                    <div className="services-item wow fadeInUp" style={{backgroundImage: "url(/assets/img/services/services_item02.jpg)"}}
                                     data-wow-delay=".2s" data-background={`${item?.yoast_head_json?.og_image ? item?.yoast_head_json?.og_image[0].url : "/assets/img/services/services_item02.jpg"}`} onMouseEnter={() => handleToggle(1)} onMouseLeave={() => handleToggle(1)}>
                                        <div className="services-icon" style={{ display: `${isActive.key == 1 ? "none" : "flex"}` }}>
                                            <img src="/assets/img/icon/services_icon01.svg" alt="" />
                                        </div>
                                        <div className="services-content">
                                            <h2 className="title" style={{ display: `${isActive.key == 1 ? "none" : "block"}` }}><Link href={`/services/${slugnName}/${item.id}`}>{item.title.rendered ? item.title.rendered : null}</Link></h2>
                                            <h2 className="number">{i+1}</h2>
                                        </div>
                                        <div className="services-overlay-content" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                            <h2 className="title"><Link href={`/services/${slugnName}/${item.id}`}>{item.title.rendered ? item.title.rendered : null}</Link></h2>
                                            <Link href={`/services/${slugnName}/${item.id}`} className="read-more">Read More <i className="fas fa-arrow-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })} */}



                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <Link href={"/services/pergolas/" + "1804"}>
                                <div className="services-item wow fadeInUp" data-wow-delay=".4s" data-background="https://pergolapro.co.nz/wp-content/uploads/2023/12/canopies.jpg" onMouseEnter={() => handleToggle(2)} onMouseLeave={() => handleToggle(2)}>
                                    <div className="services-icon" style={{ display: `${isActive.key == 2 ? "none" : "flex"}` }}>
                                        <img src="/assets/img/icon/services_icon02.svg" alt="" />
                                    </div>
                                    <div className="services-content">
                                        <h2 className="title" style={{ display: `${isActive.key == 2 ? "none" : "block"}` }}><Link href="/services-details">Pergolas</Link></h2>
                                        <h2 className="number">01</h2>
                                    </div>
                                    <div className="services-overlay-content" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                        <h2 className="title">Pergolas</h2>
                                        <p>Transform your outdoor space with Pergola Pro&apos;s exquisite pergolas</p>
                                        <Link href={"/services/pergolas/" + "1804"} className="read-more">Read More <i className="fas fa-arrow-right" /></Link>
                                    </div>
                                </div>
                            </Link>
                        </div>


                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <Link href={"/services/pergolas/" + "7862"}>
                                <div className="services-item wow fadeInUp" data-wow-delay=".6s" data-background="https://pergolapro.co.nz/wp-content/uploads/2023/12/carports.jpg" onMouseEnter={() => handleToggle(3)} onMouseLeave={() => handleToggle(3)}>
                                    <div className="services-icon" style={{ display: `${isActive.key == 3 ? "none" : "flex"}` }}>
                                        <img src="/assets/img/icon/services_icon03.svg" alt="" />
                                    </div>
                                    <div className="services-content">
                                        <h2 className="title" style={{ display: `${isActive.key == 3 ? "none" : "block"}` }}><Link href="/services-details">Carports</Link></h2>
                                        <h2 className="number">02</h2>
                                    </div>
                                    <div className="services-overlay-content" style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                        <h2 className="title">Carports</h2>
                                        <p>Discover the advantages of our cutting-edge carports</p>
                                        <Link href={"/services/pergolas/" + "7862"} className="read-more">Read More <i className="fas fa-arrow-right" /></Link>
                                    </div>
                                </div>
                            </Link>

                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <Link href={"/services/pergolas/" + "7863"}>
                                <div className="services-item wow fadeInUp" data-wow-delay=".4s" data-background="https://pergolapro.co.nz/wp-content/uploads/2023/12/roller.jpg" onMouseEnter={() => handleToggle(2)} onMouseLeave={() => handleToggle(2)}>
                                    <div className="services-icon" style={{ display: `${isActive.key == 2 ? "none" : "flex"}` }}>
                                        <img src="/assets/img/icon/services_icon02.svg" alt="" />
                                    </div>
                                    <div className="services-content">
                                        <h2 className="title" style={{ display: `${isActive.key == 2 ? "none" : "block"}` }}><Link href="/services-details">Roller Blinds</Link></h2>
                                        <h2 className="number">03</h2>
                                    </div>
                                    <div className="services-overlay-content" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                        <h2 className="title">Roller Blinds</h2>
                                        <p>Transform your outdoor space with Pergola Pro&apos;s custom roller blinds</p>
                                        <Link href={"/services/pergolas/" + "7863"} className="read-more">Read More <i className="fas fa-arrow-right" /></Link>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <Link href={"/services/pergolas/" + "7865"}>
                                <div className="services-item wow fadeInUp" data-wow-delay=".3s" data-background="https://pergolapro.co.nz/wp-content/uploads/2023/12/louvre.jpg" onMouseEnter={() => handleToggle(4)} onMouseLeave={() => handleToggle(4)}>
                                    <div className="services-icon" style={{ display: `${isActive.key == 4 ? "none" : "flex"}` }}>
                                        <img src="/assets/img/icon/services_icon04.svg" alt="" />
                                    </div>
                                    <div className="services-content">
                                        <h2 className="title" style={{ display: `${isActive.key == 4 ? "none" : "block"}` }}><Link href="/services-details">Louvre Roof Systems</Link></h2>
                                        <h2 className="number">04</h2>
                                    </div>
                                    <div className="services-overlay-content" style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                                        <h2 className="title">Louvre Roof Systems</h2>
                                        <p>Pergola Pro specializes in custom louvre solutions for outdoor spaces</p>
                                        <Link href={"/services/pergolas/" + "7865"} className="read-more">Read More <i className="fas fa-arrow-right" /></Link>
                                    </div>
                                </div>
                            </Link>

                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <Link href={"/services/pergolas/" + "7862"}>
                                <div className="services-item wow fadeInUp" data-wow-delay=".6s" data-background="https://pergolapro.co.nz/wp-content/uploads/2023/12/canopies.jpg" onMouseEnter={() => handleToggle(5)} onMouseLeave={() => handleToggle(5)}>
                                    <div className="services-icon" style={{ display: `${isActive.key == 5 ? "none" : "flex"}` }}>
                                        <img src="/assets/img/icon/services_icon05.svg" alt="" />
                                    </div>
                                    <div className="services-content">
                                        <h2 className="title" style={{ display: `${isActive.key == 5 ? "none" : "block"}` }}><Link href="/services-details">Canopies</Link></h2>
                                        <h2 className="number">05</h2>
                                    </div>
                                    <div className="services-overlay-content" style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
                                        <h2 className="title">Canopies</h2>
                                        <p>Transform your outdoor space with a canopy</p>
                                        <Link href={"/services/pergolas/" + "7862"} className="read-more">Read More <i className="fas fa-arrow-right" /></Link>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <Link href={"/services/pergolas/" + "8120"}>
                                <div className="services-item wow fadeInUp" data-wow-delay=".9s" data-background="https://pergolapro.co.nz/wp-content/uploads/2024/08/fence.png" onMouseEnter={() => handleToggle(6)} onMouseLeave={() => handleToggle(6)}>
                                    <div className="services-icon" style={{ display: `${isActive.key == 6 ? "none" : "flex"}` }}>
                                        <img src="/assets/img/icon/services_icon06.svg" alt="" />
                                    </div>
                                    <div className="services-content">
                                        <h2 className="title" style={{ display: `${isActive.key == 6 ? "none" : "block"}` }}><Link href="/services-details">Fencing & Decking</Link></h2>
                                        <h2 className="number">06</h2>
                                    </div>
                                    <div className="services-overlay-content" style={{ display: `${isActive.key == 6 ? "block" : "none"}` }}>
                                        <h2 className="title">Fencing & Decking</h2>
                                        <p>Transform your outdoor space with a canopy</p>
                                        <Link href={"/services/pergolas/" + "8120"} className="read-more">Read More <i className="fas fa-arrow-right" /></Link>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
