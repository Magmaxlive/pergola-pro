import Link from "next/link"
import { useEffect, useState, useRef } from "react"
import { baseURL } from "@/auth/auth";
import { useRouter } from "next/navigation";
import Slugify from "@/components/validators/slugify";

export default function Footer1() {
    
    const [blogsData, setNewsData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const cachedData = useRef([]);
    const router = useRouter();

    useEffect(() => {
        fetchNewsData();
        const storedData = localStorage.getItem("nData");
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
        const res = await fetch(`${baseURL}/wp-json/wp/v2/posts`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();
        setNewsData(data);
        cachedData.current = data;
        localStorage.setItem("nData", JSON.stringify(data));
        setIsLoading(false);
    };

    return (
        <>
            <footer>
                <div className="footer-area footer-bg" data-background="" style={{ backgroundColor: "black" }}>
                    <div className="footer-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-3 col-lg-4 col-md-7">
                                    <div className="footer-widget">
                                        <h2 className="fw-title">Contact Us</h2>
                                        <div className="footer-content">
                                            <div class="contact-info">
                                                <p>
                                                    <i class="bi bi-geo-alt-fill me-2"></i>
                                                    <a href="https://maps.app.goo.gl/wRSf8qe3BmQEFH8F9" target="_blank" class="text-decoration-none">
                                                        11 Aurora Avenue, Welcome bay, Tauranga
                                                    </a>
                                                </p>

                                                <p>
                                                    <i class="bi bi-envelope-fill me-2"></i>
                                                    <a href="mailto:info@pergolapro.co.nz" class="text-decoration-none underline_hover">
                                                        info@pergolapro.co.nz
                                                    </a>
                                                </p>

                                                <p>
                                                    <i class="bi bi-telephone-fill me-2"></i>
                                                    <a href="tel:+64273928106" class="text-decoration-none">
                                                        +64 27 392 8106
                                                    </a>
                                                </p>
                                            </div>
                                            <br />
                                            {/* <div className="footer-newsletter">
                                                <h4 className="title">Subscribe to Our Newsletter</h4>
                                                <form action="#">
                                                    <input type="text" placeholder="Enter your email" />
                                                    <button type="submit" className="btn btn-two">Subscribe</button>
                                                </form>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6">
                                    <div className="footer-widget">
                                        <h2 className="fw-title">Our Services</h2>
                                        <div className="footer-link">
                                            <ul className="list-wrap">
                                                <li><Link href="/pergolas/"><i className="fas fa-angle-double-right" />Pergolas</Link></li>
                                                <li><Link href="/roller-blinds/"><i className="fas fa-angle-double-right" />Roller Blinds</Link></li>
                                                <li><Link href="/carports/"><i className="fas fa-angle-double-right" />Carports</Link></li>
                                                <li><Link href="/louvre-roof-systems/"><i className="fas fa-angle-double-right" />Louvre Roof Systems</Link></li>
                                                <li><Link href="/canopies/"><i className="fas fa-angle-double-right" />Canopies</Link></li>
                                                <li><Link href="/fencing-decking/"><i className="fas fa-angle-double-right" />Fencing & Decking</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6">
                                    <div className="footer-widget">
                                        <h2 className="fw-title">Quick Links</h2>
                                        <div className="footer-link">
                                            <ul className="list-wrap">
                                                {/* <li><Link href="/contact"><i className="fas fa-angle-double-right" />Terms  Conditions</Link></li>
                                                <li><Link href="/contact"><i className="fas fa-angle-double-right" />Refund Policy</Link></li>
                                                <li><Link href="/contact"><i className="fas fa-angle-double-right" />Sitemap</Link></li> */}
                                                <li><Link href="/contact/"><i className="fas fa-angle-double-right" />Contact Us</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-5 col-md-6">
                                    <div className="footer-widget">
                                        <h2 className="fw-title">News & Blogs</h2>
                                        <div className="footer-instagram">
                                            <ul className="list-wrap">

                                                {blogsData?.slice(0,6)?.map((data, i) => {
                                                    let slugnName = data?.title.rendered ? Slugify(data?.title.rendered) : null;
                                                    return (
                                                        <>
                                                            <li>
                                                                <Link href={`/blog/${slugnName}/${data.id}/`}><img src={`${data?.yoast_head_json?.og_image ? data?.yoast_head_json?.og_image[0].url : ""}`}
                                                                    alt={data?.title.rendered ? Slugify(data?.title.rendered) : ""} style={{width: "100px", height: "100px", objectFit:"cover"}} /></Link>
                                                            </li>
                                                        </>
                                                    )
                                                })}


                                                {/* <li>
                                                    <Link href="/#"><img src="/assets/img/instagram/f_insta_img01.jpg" alt="" /></Link>
                                                </li>
                                                <li>
                                                    <Link href="/#"><img src="/assets/img/instagram/f_insta_img02.jpg" alt="" /></Link>
                                                </li>
                                                <li>
                                                    <Link href="/#"><img src="/assets/img/instagram/f_insta_img03.jpg" alt="" /></Link>
                                                </li>
                                                <li>
                                                    <Link href="/#"><img src="/assets/img/instagram/f_insta_img04.jpg" alt="" /></Link>
                                                </li>
                                                <li>
                                                    <Link href="/#"><img src="/assets/img/instagram/f_insta_img05.jpg" alt="" /></Link>
                                                </li>
                                                <li>
                                                    <Link href="/#"><img src="/assets/img/instagram/f_insta_img06.jpg" alt="" /></Link>
                                                </li> */}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-logo-area" style={{ backgroundColor: "#1a1a1a" }}>
                                <div className="row align-items-center">
                                    <div className="col-xl-3 col-lg-3 col-md-12">
                                        <div className="logo">
                                            <Link href="/index"><img src="/assets/img/logo/w_logo.png" alt="" /></Link>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-6">
                                        {/* <div className="footer-contact">
                                            <div className="icon">
                                                <i className="fas fa-phone-alt" />
                                            </div>
                                            <div className="content">
                                                <span>Phone No</span>
                                                <Link href="tel:+64273928106">+64 27 392 8106</Link>
                                            </div>
                                        </div> */}
                                    </div>
                                    <div className="col-xl-5 col-lg-5 col-md-6">
                                        <div className="footer-social">
                                            <h2 className="title">Follow Us:</h2>
                                            <ul className="list-wrap">
                                                <li><a href="https://www.facebook.com/Pergolapronz?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f" /></a></li>
                                                <li><a href="https://www.instagram.com/pergolapronz/?igsh=ajFxemh2OXphNDh6#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" /></a></li>
                                                <li><a href="https://www.linkedin.com/company/pergola-pro/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in" /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom" style={{ backgroundColor: "#1a1a1a" }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="copyright-text" style={{ fontSize: "14px" }}>
                                        <p>© Copyright {new Date().getFullYear()}. All Right Reserved</p>
                                    </div>
                                </div>
                                {/* <div className="col-md-6">
                                    <div className="footer-bootom-menu">
                                        <ul className="list-wrap">
                                            <li><Link href="/contact" style={{fontSize: "14px"}}>Privacy Policy</Link></li>
                                            <li><Link href="/contact" style={{fontSize: "14px"}}>Terms  Conditions</Link></li>
                                        </ul>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
