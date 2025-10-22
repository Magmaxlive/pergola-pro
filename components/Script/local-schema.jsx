// components/StructuredData.js
import React from 'react';

const StructuredData = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Pergola Pro",
    "image": "https://www.pergolapro.co.nz/assets/img/logo/logo_02.png",
    "@id": "https://www.pergolapro.co.nz/#localbusiness",
    "url": "https://www.pergolapro.co.nz",
    "telephone": "+64 27 392 8106",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "11 Aurora Avenue",
      "addressLocality": "Tauranga",
      "addressRegion": "Bay of Plenty",
      "postalCode": "3175",
      "addressCountry": "NZ"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -37.73431637773662,
      "longitude": 176.19987277116428
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "openingHours": [
      "Mo-Sa 09:00-17:00"
    ],
    "sameAs": [
      "https://www.facebook.com/PergolaPro",
      "https://www.instagram.com/PergolaPro",
      "https://www.linkedin.com/company/pergola-pro"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default StructuredData;