import Link from "next/link"
import Slugify from "@/components/validators/slugify";
import { useState } from "react";
// import Head from "next/head"

export default function BlogCard1({ item }) {
    const [slugnName, SlugName] = useState(item?.title.rendered ? Slugify(item?.title.rendered) : null)

    const formatDate = (dateString) => {
        const date = new Date(dateString)
        return date.toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        })
    }
    console.log(item);
    return (
        <>
            {/* <Head>
                <title>{item.yoast_head_json.title ? item.yoast_head_json.title : ""}</title>
                <meta name="title" content={item.yoast_head_json.title ? item.yoast_head_json.title : ""}></meta>
                <meta name="description" content={item.yoast_head_json.description ? item.yoast_head_json.description : ""}></meta>
            </Head> */}
            {/* <div className="inner-blog-item">
                <div className="inner-blog-thumb">
                    <Link href={`/blog/${item.id}`}><img src={`/assets/img/blog/${item.img}`} alt="" /></Link>
                </div>
                <div className="inner-blog-content">
                    <div className="blog-meta-two">
                        <ul className="list-wrap">
                            <li className="tag"><Link href={`/blog/${item.id}`}>Sector</Link></li>
                            <li><i className="fal fa-clock" />5 Min</li>
                            <li><i className="fal fa-calendar" />{item.date}</li>
                            <li>By <Link href={`/blog/${item.id}`}>{item.author}</Link></li>
                        </ul>
                    </div>
                    <h2 className="title"><Link href={`/blog/${item.id}`}>{item.title}</Link></h2>
                    <p>Lorem ipsum dolor sit amet, sed nulla ante amet, elementum tincidunt arcu sed laoreet, natoque ac eget imperdiet. Ac scelerisque nibh dolores consectetuer, nulla aptent est pede. Scelerisque euismod varius mi, congue eget sed vestibulum, ornare cras sed nec.</p>
                    <Link href={`/blog/${item.id}`} className="rade-more-btn">Read More</Link>
                </div>
            </div> */}

            <div className="col-lg-6 col-md-6">
                <div className="blog-post-item">
                    <div className="blog-post-thumb">
                        <Link href={`/blog/${slugnName}/${item.id}`}><img
                            src={`${item?.yoast_head_json?.og_image ? item?.yoast_head_json?.og_image[0].url : null}`}
                            alt=""
                            style={{ width: "100%", height: "300px", objectFit: "cover" }}
                        />
                        </Link>
                    </div>
                    <div className="blog-post-content">
                        {/* <Link href="/blog" className="tag">{item.category}</Link> */}
                        <div className="blog-meta">
                            <ul className="list-wrap">
                                {/* <li><i className="far fa-user" /> By <Link href={`/blog/${item.id}`}>{item.author}</Link></li> */}
                                <li><i className="fas fa-calendar-alt" />{formatDate(item.date)}</li>
                            </ul>
                        </div>
                        <h2 className="title"><Link href={`/blog/${slugnName}/${item.id}`}>{item.title.rendered ? item.title.rendered.substring(0, 55) : null}</Link>
                        </h2>
                        <Link href={`/blog/${slugnName}/${item.id}`} className="link-btn">Read More<i className="fas fa-arrow-right" /></Link>
                    </div>
                </div>
            </div>

        </>
    )
}
