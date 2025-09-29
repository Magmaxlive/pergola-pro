import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState, useRef } from "react"
import { baseURL } from "@/auth/auth";
import Slugify from "@/components/validators/slugify";

export default function BlogDetails() {
    let Router = useRouter()
    const [blogPost, setBlogPost] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const { id } = Router.query

    useEffect(() => {
        if (id) {
            fetchBlogPost()
        }
    }, [id])

    const fetchBlogPost = async () => {
        try {
            setLoading(true)
            const response = await fetch(`${baseURL}/wp-json/wp/v2/posts/${id}`)

            if (!response.ok) {
                throw new Error('Failed to fetch blog post')
            }

            const postData = await response.json()
            setBlogPost(postData)
        } catch (err) {
            setError(err.message)
            console.error('Error fetching blog post:', err)
        } finally {
            setLoading(false)
        }
    }

    // Function to format date
    const formatDate = (dateString) => {
        const date = new Date(dateString)
        return date.toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        })
    }

    // Function to strip HTML tags
    const stripHtml = (html) => {
        if (!html) return ''
        return html.replace(/<[^>]*>/g, '')
    }




    const [blogsData, setNewsData] = useState([]);
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
        const res = await fetch(`${baseURL}/wp-json/wp/v2/posts`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();
        setNewsData(data);
        cachedData.current = data;
        localStorage.setItem("serviceData", JSON.stringify(data));
        setIsLoading(false);
    };

    if (loading) {
        return (
            <Layout breadcrumbTitle="Blog Details">
                <section className="blog-details-area pt-120 pb-120">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-8">
                                <div className="text-center">Loading...</div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        )
    }

    if (error) {
        return (
            <Layout breadcrumbTitle="Blog Details">
                <section className="blog-details-area pt-120 pb-120">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-8">
                                <div className="text-center text-danger">Error: {error}</div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        )
    }

    return (
        <>
            <Layout breadcrumbTitle="Blog Details">
                {blogPost && (
                    <section className="blog-details-area pt-120 pb-120">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-8">
                                    <div className="blog-details-wrap">
                                        {/* Featured Image */}
                                        {blogPost.featured_media && (
                                            <div className="blog-details-thumb">
                                                <img
                                                    src={blogPost?.yoast_head_json?.og_image ? blogPost?.yoast_head_json?.og_image[0].url : null || `/assets/img/blog/default.jpg`}
                                                    alt={blogPost.title?.rendered || 'Blog post image'}
                                                    className="w-100"
                                                />
                                            </div>
                                        )}

                                        <div className="blog-details-content">
                                            <div className="blog-meta">
                                                <ul className="list-wrap">
                                                    <li><i className="far fa-user" /> By <Link href="/blog-details">Admin</Link></li>
                                                    <li><i className="fas fa-calendar-alt" />{formatDate(blogPost.date)}</li>
                                                    {/* <li><i className="far fa-comments" />{blogPost.comment_count || 0}</li>
                                                    <li><i className="far fa-eye" />{blogPost.view_count || '1,526'} VIEWS</li> */}
                                                </ul>
                                            </div>

                                            <h2 className="title" dangerouslySetInnerHTML={{ __html: blogPost.title?.rendered || '' }} />

                                            {/* Blog Content */}
                                            <div dangerouslySetInnerHTML={{ __html: blogPost.content?.rendered || '' }} />

                                            {/* Tags */}
                                            {/* {blogPost.tags && blogPost.tags.length > 0 && (
                                                <div className="blog-details-bottom">
                                                    <div className="row align-items-center">
                                                        <div className="col-lg-8">
                                                            <div className="post-tags">
                                                                <h5 className="title">Tag:</h5>
                                                                <ul className="list-wrap">
                                                                    {blogPost.tags.map(tagId => (
                                                                        <li key={tagId}>
                                                                            <Link href={`/tag/${tagId}`}>#{tagId}</Link>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4">
                                                            <div className="blog-post-share">
                                                                <h5 className="title">Share:</h5>
                                                                <ul className="list-wrap">
                                                                    <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                                    <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                                    <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                                    <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )} */}
                                        </div>

                                        {/* Previous/Next Posts */}
                                        {/* <div className="pev-next-post-wrap">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="post-item">
                                                        <div className="post-inner">
                                                            <div className="thumb">
                                                                <Link href="/blog-details"><img src="/assets/img/blog/pb_post_img01.jpg" alt="" /></Link>
                                                            </div>
                                                            <div className="content">
                                                                <h2 className="title"><Link href="/blog-details">Portrait smiling professional engineer laptop</Link></h2>
                                                                <span><i className="far fa-calendar-alt" />22 Jan {new Date().getFullYear()}</span>
                                                            </div>
                                                        </div>
                                                        <div className="post-btn">
                                                            <Link href="/blog-details"><i className="fas fa-arrow-left" />Prev</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="post-item next-post-item">
                                                        <div className="post-inner">
                                                            <div className="thumb">
                                                                <Link href="/blog-details"><img src="/assets/img/blog/pb_post_img02.jpg" alt="" /></Link>
                                                            </div>
                                                            <div className="content">
                                                                <h2 className="title"><Link href="/blog-details">Full shot man with helmet sitting on roof</Link></h2>
                                                                <span><i className="far fa-calendar-alt" />22 Jan {new Date().getFullYear()}</span>
                                                            </div>
                                                        </div>
                                                        <div className="post-btn next-btn">
                                                            <Link href="/blog-details"><i className="fas fa-arrow-right" />next</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}

                                        {/* Comments Section */}
                                        {/* <div className="comments-wrap">
                                            <h4 className="comments-wrap-title">Comments ({blogPost.comment_count || 0})</h4>
                                            <div className="latest-comments">
                                                <ul className="list-wrap">
                                                    <li>
                                                        <div className="comments-box">
                                                            <div className="comments-avatar">
                                                                <img src="/assets/img/blog/comment_avatar01.png" alt="" />
                                                            </div>
                                                            <div className="comments-text">
                                                                <div className="avatar-name">
                                                                    <h6 className="name">
                                                                        Abubokkor Siddik
                                                                        <Link href="#" className="comment-reply-link"><i className="fas fa-reply" />Reply</Link>
                                                                    </h6>
                                                                    <span className="date">September 6, {new Date().getFullYear()}</span>
                                                                </div>
                                                                <p>Lorem ipsum dolor sit amet consectetur. Ut tellus suspendisse nulla aliquam. Risus rutrum tellus ultrices.</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div> */}

                                        {/* Comment Form */}
                                        {/* <div className="comment-respond">
                                            <h3 className="comment-reply-title">Write Your Comment</h3>
                                            <form className="comment-form" action="#">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="form-grp">
                                                            <input type="text" placeholder="Name *" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="form-grp">
                                                            <input type="email" placeholder="Email *" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="form-grp">
                                                            <input type="url" placeholder="Website*" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-grp">
                                                    <textarea name="message" placeholder="Comment *" />
                                                </div>
                                                <button type="submit" className="btn btn-two">Post Comment</button>
                                            </form>
                                        </div> */}
                                    </div>
                                </div>

                                {/* Sidebar */}
                                <div className="col-xl-4 col-lg-6 col-md-10">
                                    <aside className="blog-sidebar">
                                        {/* Search Widget */}
                                        {/* <div className="blog-widget">
                                            <div className="sidebar-search">
                                                <h4 className="widget-title">Search</h4>
                                                <form action="#">
                                                    <input id="search" type="text" placeholder="Search" />
                                                    <button type="submit"><i className="fas fa-search" /></button>
                                                </form>
                                            </div>
                                        </div> */}

                                        {/* Categories Widget */}
                                        {/* <div className="blog-widget">
                                            <h4 className="widget-title">Categories</h4>
                                            <div className="categories-list">
                                                <ul className="list-wrap">
                                                    <li><Link href="#">Business Consulting <span>(05)</span></Link></li>
                                                    <li><Link href="#">Financial Investment <span>(07)</span></Link></li>
                                                    <li><Link href="#">IT Consultations <span>(03)</span></Link></li>
                                                    <li><Link href="#">Digital Analytics <span>(04)</span></Link></li>
                                                    <li><Link href="#">Payment Processing <span>(02)</span></Link></li>
                                                    <li><Link href="#">Software Solutions <span>(09)</span></Link></li>
                                                </ul>
                                            </div>
                                        </div> */}

                                        {/* Recent Posts Widget */}
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


                                            </div>
                                        </div>

                                        {/* Tags Widget */}
                                        {/* <div className="blog-widget">
                                            <h4 className="widget-title">Popular Tags</h4>
                                            <div className="tag-list-wrap">
                                                <ul className="list-wrap">
                                                    <li><Link href="#">Construction</Link></li>
                                                    <li><Link href="#">Roofing</Link></li>
                                                    <li><Link href="#">Repairer</Link></li>
                                                    <li><Link href="#">Maintenance</Link></li>
                                                    <li><Link href="#">Remodeling</Link></li>
                                                    <li><Link href="#">Roof</Link></li>
                                                    <li><Link href="#">Roofing Service</Link></li>
                                                    <li><Link href="#">Consulting</Link></li>
                                                </ul>
                                            </div>
                                        </div> */}

                                        {/* CTA Widget */}
                                        {/* <div className="blog-widget widget-bg" data-background="/assets/img/blog/widget_bg.jpg" style={{ backgroundImage: 'url("/assets/img/blog/widget_bg.jpg")' }}>
                                            <h4 className="widget-title">Need Help</h4>
                                            <div className="sidebar-content">
                                                <h4 className="title">Beautiful red brick house with decorative lights</h4>
                                                <p>Sit amet consectetur adipiscing elseds do eius mod tempor incididunt</p>
                                                <Link href="/contact" className="btn btn-two">Contact Us</Link>
                                            </div>
                                        </div> */}
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </section>
                )}
            </Layout>
        </>
    )
}