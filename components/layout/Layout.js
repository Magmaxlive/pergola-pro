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
            <html lang="en">
                <head>
                    <link rel="icon" href="/images/favicon.ico" sizes="any" />
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta name="google-site-verification" content="Vwx11lciX8sFPCvdtJJiOKoUiHImUD5Jw02PtRJTFEA" />
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
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css"></link>

                </head>
                {/* <PageHead headTitle={headTitle} /> */}
                <body className={``}>
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
                </body>
            </html>
        </>
    )
}
