import BlogPost from "@/components/blog/BlogPost"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useEffect, useState, useRef } from "react"
import { baseURL } from "@/auth/auth";
import { useRouter } from "next/navigation";
import Slugify from "@/components/validators/slugify";

export default function Blog() {

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

    const formatDate = (dateString) => {
        const date = new Date(dateString)
        return date.toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        })
    }


    return (
        <>
            <Layout breadcrumbTitle="Blog">
                <section className="inner-blog-area pt-30 pb-120">
                    <div className="container">

                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="section-title text-center mb-50 tg-heading-subheading animation-style3">
                                    <span className="sub-title tg-element-title">Latest Pergola Insights</span>
                                    <h1 className="title tg-element-title">News & Blogs</h1>
                                </div>
                            </div>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-xl-8">
                                <div className="row">
                                    <BlogPost showItem={6} showPagination />
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-10">
                                <aside className="blog-sidebar">
                                    {/* <div className="blog-widget">
                                        <div className="sidebar-search">
                                            <h4 className="widget-title">Search</h4>
                                            <form action="#">
                                                <input id="search" type="text" placeholder="Search" />
                                                <button type="submit"><i className="fas fa-search" /></button>
                                            </form>
                                        </div>
                                    </div> */}
                                    {/* <div className="blog-widget">
                                        <h4 className="widget-title">Categories</h4>
                                        <div className="categories-list">
                                            <ul className="list-wrap">
                                                <li><Link href="/#">Business Consulting <span>(05)</span></Link></li>
                                                <li><Link href="/#">Financial Investment <span>(07)</span></Link></li>
                                                <li><Link href="/#">IT Consultations <span>(03)</span></Link></li>
                                                <li><Link href="/#">Digital Analytics <span>(04)</span></Link></li>
                                                <li><Link href="/#">Payment Processing <span>(02)</span></Link></li>
                                                <li><Link href="/#">Software Solutions <span>(09)</span></Link></li>
                                            </ul>
                                        </div>
                                    </div> */}
                                    <div className="blog-widget">
                                        <h4 className="widget-title">Recent News</h4>
                                        <div className="rc-post-wrap">
                                            {blogsData.map((data, i) => {
                                                let slugnName = data?.title.rendered ? Slugify(data?.title.rendered) : null;
                                                return (
                                                    <>
                                                        <div className="rc-post-item">
                                                            <div className="rc-post-thumb">
                                                                <Link href={`/blog/${slugnName}/${data.id}`}><img src={`${data?.yoast_head_json?.og_image ? data?.yoast_head_json?.og_image[0].url : null}`}
                                                                    style={{ width: "100%", height: "90px", objectFit: "cover" }} alt={data?.title.rendered ? Slugify(data?.title.rendered) : ""} /></Link>
                                                            </div>
                                                            <div className="rc-post-content">
                                                                <h5 className="title"><Link href={`/blog/${slugnName}/${data.id}`}>{data?.title.rendered ? data?.title.rendered : ""}</Link></h5>
                                                                <span><i className="fas fa-calendar-alt" />{formatDate(data.date)}</span>
                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                            })}

                                            {/* <div className="rc-post-item">
                                                <div className="rc-post-thumb">
                                                    <Link href="/blog-details"><img src="/assets/img/blog/rc_post02.jpg" alt="" /></Link>
                                                </div>
                                                <div className="rc-post-content">
                                                    <h5 className="title"><Link href="/blog-details">Medium shot men working on roof presentation</Link></h5>
                                                    <span><i className="fas fa-calendar-alt" />22 Jan {new Date().getFullYear()}</span>
                                                </div>
                                            </div>
                                            <div className="rc-post-item">
                                                <div className="rc-post-thumb">
                                                    <Link href="/blog-details"><img src="/assets/img/blog/rc_post03.jpg" alt="" /></Link>
                                                </div>
                                                <div className="rc-post-content">
                                                    <h5 className="title"><Link href="/blog-details">Free photo cute family a roof above their head</Link></h5>
                                                    <span><i className="fas fa-calendar-alt" />22 Jan {new Date().getFullYear()}</span>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                    {/* <div className="blog-widget">
                                        <h4 className="widget-title">Popular Tags</h4>
                                        <div className="tag-list-wrap">
                                            <ul className="list-wrap">
                                                <li><Link href="/#">Construction</Link></li>
                                                <li><Link href="/#">Roofing</Link></li>
                                                <li><Link href="/#">Repairer</Link></li>
                                                <li><Link href="/#">Maintenance</Link></li>
                                                <li><Link href="/#">Remodeling</Link></li>
                                                <li><Link href="/#">Roof</Link></li>
                                                <li><Link href="/#">Roofing Service</Link></li>
                                                <li><Link href="/#">Consulting</Link></li>
                                            </ul>
                                        </div>
                                    </div> */}
                                    <div className="blog-widget widget-bg" data-background="/assets/img/blog/widget_bg.jpg">
                                        <h4 className="widget-title">Need Help</h4>
                                        <div className="sidebar-content">
                                            <h4 className="title">Beautiful red brick house with decorative lights</h4>
                                            <p>Sit amet consectetur adipiscing elseds do eius mod tempor incididunt</p>
                                            <Link href="/contact" className="btn btn-two">Contact Us</Link>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}