import { useEffect } from "react"
import BackToTop from '../elements/BackToTop'
import DataBg from '../elements/DataBg'
import Breadcrumb from './Breadcrumb';
import BreadcrumbService from './BreadcrumbService'
import Footer from './Footer'
import Header from './Header'
import PageHead from './PageHead'

export default function Layout({ headerCls, headerTop, headTitle, breadcrumbTitle, children, pageTitle, isService }) {
    useEffect(() => {
        const WOW = require('wowjs')
        window.wow = new WOW.WOW({
            live: false
        })
        window.wow.init()
    }, [])
    return (
        <>
            <PageHead headTitle={headTitle} />
            <DataBg />

            <Header headerCls={headerCls} headerTop={headerTop} />
            <main>
                {breadcrumbTitle && isService ? (<BreadcrumbService breadcrumbTitle={breadcrumbTitle} pageTitle={pageTitle} />) : (<Breadcrumb breadcrumbTitle={breadcrumbTitle} pageTitle={pageTitle} />)}
                {children}
            </main>
            < Footer />

            <BackToTop />
        </>
    )
}
