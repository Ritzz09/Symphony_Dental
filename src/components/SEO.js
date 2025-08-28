import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = () => {
  return (
    <>
      {/* Local Business Schema */}
      <script type="application/ld+json">
       <Helmet>
      <title>Dentist in Khar West | Dental Clinic in Khar/Bandra</title>
      <meta
        name="description"
        content="Looking for a dentist in Khar/Bandra? Symphony Dental Care offers expert dental services with a focus on patient comfort, care, and the latest treatments for all your oral health needs."
      />
      <link rel="canonical" href="https://www.symphonydentalcare.in/" />
    </Helmet>

        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Symphony Dental Care",
          "image": "https://www.symphonydentalcare.in/static/media/clinic.0a13d280cb75976696ae.webp",
          "@id": "",
          "url": "https://www.symphonydentalcare.in/",
          "telephone": "76780 45993",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "1st Floor, Ashray Building, 101, 18th Rd, opp. Laxmi Narayan Temple, Khar, Khar West",
            "addressLocality": "Mumbai",
            "postalCode": "400052",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 19.0719139,
            "longitude": 72.82947
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "09:00",
            "closes": "21:00"
          },
          "sameAs": [
            "https://www.facebook.com/SymphonyDentalCareKharWest/",
            "https://www.instagram.com/symphonydentalcare/",
            "https://www.youtube.com/@SymphonyDentalCare",
            "https://x.com/Symphony2025",
            "https://in.pinterest.com/symphonydentalcare/"
          ]
        })}
      </script>

      {/* Dentist Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Dentist",
          "name": "Dr. Sailee Kalyankar",
          "image": "https://www.symphonydentalcare.in/img/dentist.webp",
          "@id": "",
          "url": "https://www.symphonydentalcare.in/",
          "telephone": "07678045993",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "1st Floor, Ashray Building, 101, 18th Rd, opp. Laxmi Narayan Temple, Khar, Khar West",
            "addressLocality": "Mumbai",
            "postalCode": "400052",
            "addressCountry": "IN"
          }
        })}
      </script>
    </>
  );
};

export default SEO;
