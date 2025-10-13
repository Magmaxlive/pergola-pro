import Layout from "@/components/layout/Layout";
import Brand3 from "@/components/sections/Brand3";
import Link from "next/link";
import GoogleReviews from "@/components/google/reviews";
import { useRouter } from "next/router"
import { useEffect, useState, useRef } from "react"
import { baseURL } from "@/auth/auth";
import Slugify from "@/components/validators/slugify";
import Accordion from "@/components/faq/1";

export default function ServiceDetails() {

    let Router = useRouter()
    const [servicePost, setBlogPost] = useState(null)
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
            const response = await fetch(`${baseURL}/wp-json/wp/v2/cpt_services/${id}`)

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

    const [servicesData, setNewsData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const cachedData = useRef([]);

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
        cachedData.current = data;
        localStorage.setItem("serviceData", JSON.stringify(data));
        setIsLoading(false);
    };

    const [processedContent, setProcessedContent] = useState('');

    useEffect(() => {
        if (servicePost?.content?.rendered) {
            const processed = processContent(servicePost.content.rendered);
            setProcessedContent(processed);
        }
    }, [servicePost]);

    const processContent = (htmlContent) => {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = htmlContent;

        // Apply our styling classes to elements
        const headings = tempDiv.querySelectorAll('h1, h2, h3, h4, h5, h6');
        headings.forEach(heading => {
            if (heading.textContent.includes('Our Service Process')) {
                heading.className = 'title';
            } else if (heading.textContent.includes('We Hope You Find')) {
                heading.className = 'title-two';
            } else if (heading.textContent.includes('Our Service Benefits')) {
                heading.className = 'title';
            } else {
                heading.className = 'title';
            }
        });

        // Add classes to other elements if they exist
        const images = tempDiv.querySelectorAll('img');
        images.forEach((img, index) => {
            // Check if image is inside specific sections
            const parent = img.closest('div');
            if (parent && parent.textContent.includes('process')) {
                img.className = 'services-process-img';
            } else if (parent && parent.textContent.includes('benefit')) {
                img.className = 'benefits-img';
            }
        });

        // Add classes to lists
        const lists = tempDiv.querySelectorAll('ul, ol');
        lists.forEach(list => {
            list.className = 'list-wrap';
        });

        // Add two photos after the second paragraph
        const paragraphs = tempDiv.querySelectorAll('p');
        if (paragraphs.length >= 2) {
            const secondParagraph = paragraphs[1];
            
            // Create image container
            const imageContainer = document.createElement('div');
            imageContainer.className = 'auto-inserted-images';
            
            // Create first image
            const img1 = document.createElement('img');
            img1.src = '/assets/img/services/sp_img01.jpg';
            img1.alt = 'Service image 1';
            img1.className = 'inserted-image';
            
            // Create second image
            const img2 = document.createElement('img');
            img2.src = '/assets/img/services/sp_img02.jpg';
            img2.alt = 'Service image 2';
            img2.className = 'inserted-image';
            
            // Add images to container
            imageContainer.appendChild(img1);
            imageContainer.appendChild(img2);
            
            // Insert after second paragraph
            secondParagraph.parentNode.insertBefore(imageContainer, secondParagraph.nextSibling);
        }

        // Add background color to the last element, but exclude paragraphs
        const allElements = tempDiv.querySelectorAll('*');
        if (allElements.length > 0) {
            // Find the last non-paragraph element
            let lastNonParagraphElement = null;
            
            // Loop backwards to find the last element that's not a paragraph
            for (let i = allElements.length - 1; i >= 0; i--) {
                const element = allElements[i];
                if (element.tagName.toLowerCase() !== 'p' && 
                    element.parentNode === tempDiv) {
                    lastNonParagraphElement = element;
                    break;
                }
            }
            
            // If we found a non-paragraph element, apply the highlight
            if (lastNonParagraphElement) {
                lastNonParagraphElement.classList.add('last-element-highlight');
            }
        }

        return tempDiv.innerHTML;
    };

    return (
        <>
            <Layout 
                breadcrumbTitle={servicePost?.title?.rendered} 
                pageTitle="Services" 
                imageURL={servicePost?.yoast_head_json?.og_image ? servicePost?.yoast_head_json?.og_image[0].url : null || `/assets/img/blog/default.jpg`} 
                isService={true} 
            >
                <div>
                    <section className="services-details-area pt-120">
                        <div className="container">
                            <GoogleReviews />
                            <br />
                            <div className="row justify-content-center">
                                
                                <div className="col-xl-12">
                                    <div className="services-details-wrap">
                                        <div className="services-details-thumb">
                                            {/* <img 
                                                src={servicePost?.yoast_head_json?.og_image ? servicePost?.yoast_head_json?.og_image[0].url : null || `/assets/img/blog/default.jpg`} 
                                                alt={servicePost?.title?.rendered || 'Blog post image'}   /> */}
                                        </div>
                                        <div className="services-details-content">
                                            <h2 className="title" dangerouslySetInnerHTML={{ __html: servicePost?.title?.rendered || '' }} />
                                            
                                            {/* Apply processed content with design classes */}
                                            <div dangerouslySetInnerHTML={{ __html: processedContent }} />

                                            <div className="mt-50">
                                                <Accordion />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <div className="col-xl-4 col-lg-6">
                                    <aside className="services-sidebar">
                                        <div className="services-widget">
                                            <h4 className="widget-title">Our All Service</h4>
                                            <div className="our-services-list">
                                                <ul className="list-wrap">
                                                    {servicesData.map((data, i) => {
                                                        let slugnName = data?.title.rendered ? Slugify(data?.title.rendered) : null;
                                                        return (
                                                            <li key={data.id}>
                                                                <Link href={`/services/${slugnName}/${data.id}`}>
                                                                    {data?.title.rendered ? data?.title.rendered : null}
                                                                    <i className="fas fa-arrow-right" />
                                                                </Link>
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            </div>
                                        </div>
                                    </aside>
                                </div> */}
                            </div>
                        </div>
                    </section>
                    {/* services-details-area-end */}
                    {/* brand-area */}
                    {/* <Brand3 /> */} <br /> <br /> <br />
                </div>
            </Layout>
        </>
    )
}