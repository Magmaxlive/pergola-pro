// components/StructuredData.js
import Head from 'next/head';
import React from 'react';

const StructuredData = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Pergola Pro",
    "image": "https://pergolapro.co.nz/path-to-your-image.jpg",
    "@id": "https://pergolapro.co.nz/#localbusiness",
    "url": "https://pergolapro.co.nz",
    "telephone": "+64 27 392 8106",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1 Aurora Avenue, Welcome Bay",
      "addressLocality": "Tauranga",
      "addressRegion": "Bay of Plenty",
      "postalCode": "3175",
      "addressCountry": "NZ"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -37.731780344867765,
      "longitude": 176.20022327603627
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Monday",
        "opens": "09:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Tuesday",
        "opens": "09:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Wednesday",
        "opens": "09:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Thursday",
        "opens": "09:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Friday",
        "opens": "09:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/PergolaPro",
      "https://www.instagram.com/PergolaPro",
      "https://www.linkedin.com/company/pergola-pro"
    ],

    //"description": "360VR Studio Ltd is Auckland's trusted partner for photography, videography, SEO, branding, and digital marketing services. From immersive visuals to strategic campaigns, we help brands create impact."
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default StructuredData;