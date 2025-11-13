import { useEffect, useRef, useState } from "react";
import Layout from "@/components/layout/Layout";
import Banner1 from "@/components/sections/Banner1";
import About1 from "@/components/sections/About1";
import Services1 from "@/components/sections/Services1";
import Work1 from "@/components/sections/Work1";
import Appointment3 from "@/components/sections/Appointment3";
import Support1 from "@/components/sections/Support1";
import Faq1 from "@/components/sections/Faq1";
import GoogleReviews from "@/components/google/reviews";
import PopupModal from "@/components/elements/PopupModal";
import Head from "next/head";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupShown, setPopupShown] = useState(false);
  const work1Ref = useRef(null);

  useEffect(() => {
    // Check if popup was already shown in this session
    const hasPopupBeenShown = sessionStorage.getItem('popupShown');
    
    if (hasPopupBeenShown) {
      setPopupShown(true);
      return;
    }

    const handleScroll = () => {
      if (popupShown) return;

      // Method 1: Check if 50% of page is scrolled
      const scrollPercentage = 
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      // Method 2: Check if Work1 component is in viewport
      const work1Element = work1Ref.current;
      if (work1Element) {
        const rect = work1Element.getBoundingClientRect();
        const isWork1InView = rect.top < window.innerHeight && rect.bottom >= 0;
        
        if (scrollPercentage >= 50 || isWork1InView) {
          setShowPopup(true);
          setPopupShown(true);
          sessionStorage.setItem('popupShown', 'true');
          window.removeEventListener('scroll', handleScroll);
        }
      }
    };

    // Add scroll event listener with throttle
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, [popupShown]);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <Head>
        <title>#1 Pergola Tauranga, Custom Pergola Builder | Pergola Pro NZ</title>
        <meta name="google-site-verification" content="Vwx11lciX8sFPCvdtJJiOKoUiHImUD5Jw02PtRJTFEA" />
        <meta name="title" content="#1 Pergola Tauranga, Custom Pergola Builder | Pergola Pro NZ"></meta>
        <meta name="description" content="Tauranga's No.1 Pergola Builder for custom pergolas, awnings & outdoor blinds. Transform your outdoor space with Pergola Pro NZ – Call +64 27 392 8106."></meta>
      </Head>
      
      <Layout headerCls="transparent-header">
        <Banner1 />
        <GoogleReviews />
        <About1 />
        <Services1 isService={false} />
        
        {/* Add ref to Work1 component to detect when it's in view */}
        <div ref={work1Ref}>
          <Work1 />
        </div>
        
        <div className="area-bg">
          <div className="area-background-img jarallax" data-background="/assets/img/bg/area_bg01.jpg" />
          <Appointment3 />
        </div>
        <Support1 />
        <Faq1 />
        
        {/* Popup Modal */}
        <PopupModal isOpen={showPopup} onClose={handleClosePopup} />
      </Layout>
    </>
  );
}