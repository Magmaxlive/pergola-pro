import { useEffect } from "react"
import BackToTop from '../elements/BackToTop'
import DataBg from '../elements/DataBg'
// import Breadcrumb from './Breadcrumb'
import BreadcrumbService from './BreadcrumbService'
import Footer from './Footer'
import Header from './Header'
// import PageHead from './PageHead'
import { GoogleAnalytics } from "nextjs-google-analytics";
import { GoogleTagManager } from '@/components/google/GoogleTag';
import { GTMNoScript } from '@/components/google/GTM';
import JsonLdSchema from "@/components/Script/local-schema";
import Script from 'next/script';
import BreakingNews from "@/components/elements/AutoScroll";


export default function Layout({ headerCls, headerTop, headTitle, breadcrumbTitle, children, pageTitle, isService, imageURL }) {
    useEffect(() => {
        const WOW = require('wowjs')
        window.wow = new WOW.WOW({
            live: false
        })
        window.wow.init()
    }, []);

    const gtmId = 'GTM-P3HSZZS4';

    return (
        <>
            <GoogleTagManager gtmId={gtmId} />
            <JsonLdSchema />
            <Script
                id="microsoft-clarity"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                    (function(c,l,a,r,i,t,y){
                        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                    })(window, document, "clarity", "script", "pb9kgnght1");
                `,
                }}
            />

            <Script
                id="ld-json-org"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": [

                                {
                                "@type": "Question",
                                "name": "What is a pergola and how does it improve outdoor living?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "A pergola is an outdoor structure designed to provide shade and enhance your outdoor living space. It creates a comfortable area for relaxing, entertaining, and protecting against sun and light rain."
                                }
                                },
                                {
                                "@type": "Question",
                                "name": "How much does a pergola cost in New Zealand?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Pergola costs in New Zealand vary depending on size, materials, and design. Basic pergolas may start from a few thousand dollars, while custom louvre roof systems and premium designs can cost significantly more."
                                }
                                },
                                {
                                "@type": "Question",
                                "name": "What is a louvre roof system?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "A louvre roof system features adjustable blades that can be opened or closed to control sunlight, ventilation, and rain protection, making it ideal for year-round outdoor use."
                                }
                                },
                                {
                                "@type": "Question",
                                "name": "Do I need council consent to build a pergola in New Zealand?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "In many cases, small pergolas may not require council consent, but larger or attached structures may need approval. It is best to check local council regulations before building."
                                }
                                },
                                {
                                "@type": "Question",
                                "name": "Can Pergola Pro customise outdoor structures?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, Pergola Pro offers fully customised pergolas, carports, and louvre roof systems designed to suit your space, style, and functional requirements."
                                }
                                },
                                {
                                "@type": "Question",
                                "name": "Do pergolas provide protection from rain?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Standard pergolas offer partial protection, while louvre roof systems and covered pergolas provide excellent rain protection by closing the roof panels."
                                }
                                },
                                {
                                "@type": "Question",
                                "name": "What materials are used for pergolas?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Pergolas are commonly built using aluminium, timber, or steel. Aluminium is popular in New Zealand due to its durability, low maintenance, and weather resistance."
                                }
                                },
                                {
                                "@type": "Question",
                                "name": "Do you install pergolas in Tauranga and nearby areas?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, Pergola Pro provides pergola and outdoor structure installations in Tauranga, Papamoa, Rotorua, and surrounding areas."
                                }
                                }

                            ]
                            }),
                }}
            />
            <Script
                id="ld-json-org"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        name: "Pergola Pro",
                        url: "https://pergolapro.co.nz",
                        logo: "https://pergolapro.co.nz/path-to-your-image.jpg",
                        sameAs: [
                            "https://www.facebook.com/PergolaPro",
                            "https://www.instagram.com/PergolaPro",
                            "https://www.linkedin.com/company/pergola-pro",
                        ],
                    }),
                }}
            />
            <GTMNoScript gtmId={gtmId} />
            <GoogleAnalytics trackPageViews gaMeasurementId="G-F4F1ZYYNZR" />
            <DataBg />
            <Header headerCls={headerCls} headerTop={headerTop} />
            <main>
                {breadcrumbTitle && (
                    isService ? (
                        <BreadcrumbService breadcrumbTitle={breadcrumbTitle} pageTitle={pageTitle} imageURL={imageURL} />
                    ) : (
                        null
                    )
                )}
                {children}
            </main>
            <Footer />
            <BackToTop />
        </>
    )
}
