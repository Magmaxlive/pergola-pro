import Layout from "@/components/layout/Layout"
import Banner1 from "@/components/sections/Banner1"
import About1 from "@/components/sections/About1"
import Services1 from "@/components/sections/Services1"
import Work1 from "@/components/sections/Work1"
import Appointment3 from "@/components/sections/Appointment3"
import Support1 from "@/components/sections/Support1"
import Faq1 from "@/components/sections/Faq1"
import GoogleReviews from "@/components/google/reviews";

export default function Home() {

    return (
        <>
            <Layout headerCls="transparent-header">
                <Banner1 />
                 <GoogleReviews />
                <About1 />
                {/* <Features1 /> */}
                <Services1 />
                <Work1 />
                <div className="area-bg">
                    <div className="area-background-img jarallax" data-background="/assets/img/bg/area_bg01.jpg" />
                    <Appointment3 />
                </div>
                <Support1 />
                <Faq1 />
            </Layout>
        </>
    )
}