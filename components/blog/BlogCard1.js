import Link from "next/link"
import Slugify from "@/components/validators/slugify";
import { useState } from "react";
// import Head from "next/head"
import parse from 'html-react-parser';

export default function BlogCard1({ item }) {

    const cleanContent = (item?.title.rendered || "").replace(/\[\+\d+\s+chars\]/g, "");
    const detailData = parse(cleanContent);

    const [slugnName, SlugName] = useState(detailData);

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
            <div className="col-lg-6 col-md-6">
                <div className="blog-post-item">
                    <div className="blog-post-thumb">
                        <Link href={`/blog/${Slugify(slugnName)}/${item.id}`}><img
                            src={`${item?.yoast_head_json?.og_image ? item?.yoast_head_json?.og_image[0].url : null}`}
                            alt={cleanContent}
                            style={{ width: "100%", height: "300px", objectFit: "cover" }} />
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
                        <h2 className="title"><Link href={`/blog/${Slugify(slugnName)}/${item.id}`}>{detailData ? detailData.substring(0, 55) : null}</Link>
                        </h2>
                        <Link href={`/blog/${slugnName}/${item.id}`} className="link-btn">Read More<i className="fas fa-arrow-right" /></Link>
                    </div>
                </div>
            </div>

        </>
    )
}
