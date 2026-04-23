import Head from "next/head"
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import { data } from "@/supurbData"
import Slugify from "@/components/validators/slugify"

function getSlug(entry) {
    const base = Slugify(entry.suburb)
    return entry.page_type === 'louvre_roof_systems'
        ? `louvreroof-${base}`
        : `pergola-${base}`
}

const staticLinks = [
    { label: "Home",               href: "/" },
    { label: "About Us",           href: "/about/" },
    { label: "Services",           href: "/services/" },
    { label: "Pergolas",           href: "/pergolas/" },
    { label: "Louvre Roof Systems",href: "/louvre-roof-systems/" },
    { label: "Canopies",           href: "/canopies/" },
    { label: "Carports",           href: "/carports/" },
    { label: "Roller Blinds",      href: "/roller-blinds/" },
    { label: "Fencing & Decking",  href: "/fencing-decking/" },
    { label: "Gallery",            href: "/gallery/" },
    { label: "Blog",               href: "/blog/" },
    { label: "Contact",            href: "/contact/" },
]

export default function Sitemap() {
    const pergolaSlugs = data.filter(e => !e.page_type)
    const louvreSlug = data.filter(e => e.page_type === 'louvre_roof_systems')

    return (
        <>
            <Head>
                <title>Sitemap | Pergola Pro NZ</title>
                <meta name="robots" content="noindex" />
            </Head>

            <Layout>
                <section style={{ padding: "80px 0" }}>
                    <div className="container">
                        <h1 className="title mb-50">Sitemap</h1>

                        <div className="row">

                            {/* Main Pages */}
                            <div className="col-lg-4 col-md-6 mb-40">
                                <h4 className="title mb-20" style={{ borderBottom: "2px solid #fe5d14", paddingBottom: 10 }}>
                                    Main Pages
                                </h4>
                                <ul className="list-unstyled">
                                    {staticLinks.map((link, i) => (
                                        <li key={i} className="mb-10">
                                            <i className="fas fa-angle-right me-2" style={{ color: "#fe5d14" }} />
                                            <Link href={link.href}>{link.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Suburb Pergola Pages */}
                            <div className="col-lg-4 col-md-6 mb-40">
                                <h4 className="title mb-20" style={{ borderBottom: "2px solid #fe5d14", paddingBottom: 10 }}>
                                    Pergola Locations
                                </h4>
                                <ul className="list-unstyled">
                                    {pergolaSlugs.map((entry, i) => (
                                        <li key={i} className="mb-10">
                                            <i className="fas fa-angle-right me-2" style={{ color: "#fe5d14" }} />
                                            <Link href={`/${getSlug(entry)}/`}>{entry.page_title}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Louvre Suburb Pages */}
                            <div className="col-lg-4 col-md-6 mb-40">
                                <h4 className="title mb-20" style={{ borderBottom: "2px solid #fe5d14", paddingBottom: 10 }}>
                                    Louvre Roof Locations
                                </h4>
                                <ul className="list-unstyled">
                                    {louvreSlug.map((entry, i) => (
                                        <li key={i} className="mb-10">
                                            <i className="fas fa-angle-right me-2" style={{ color: "#fe5d14" }} />
                                            <Link href={`/${getSlug(entry)}/`}>{entry.page_title}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
