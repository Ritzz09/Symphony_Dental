import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"; 
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About_Clinic } from "./components/about_clinic";
import { Services } from "./components/services";
import Gallery from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Contact } from "./components/contact";
import Footer from "./components/footer";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import FAQ from "./components/faqs";
import { About_Dentist } from "./components/about_dentist";
import ScrollToTop from "./components/scroll";
import ThankYou from "./components/thankyou"; 
import Blog from "./blogs/blog1";
import Blog2 from "./blogs/blog2";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const Layout = ({ children }) => {
  const location = useLocation();
  return location.pathname !== "/thankyou" ? (
    <>
      <Navigation />
      {children}
      <Footer Footer={JsonData.Footer} />
    </>
  ) : (
    children
  );
};

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Homepage Route */}
          <Route
            path="/"
            element={
              <Layout>
                <Helmet>
                  <title>Dentist in Khar West | Dental Clinic in Khar/Bandra</title>
                  <meta 
                    name="description" 
                    content="Looking for a dentist in Khar/Bandra? Symphony Dental Care offers expert dental services with a focus on patient comfort, care, and the latest treatments for all your oral health needs." 
                  />
                  <link rel="canonical" href="https://symphonydentalcare.in/" />
                  
                  {/* Open Graph Meta Tags */}
                  <meta property="og:title" content="Dentist in Khar West | Dental Clinic in Khar/Bandra" />
                  <meta property="og:description" content="Looking for a dentist in Khar/Bandra? Symphony Dental Care offers expert dental services with a focus on patient comfort, care, and the latest treatments for all your oral health needs." />
                  <meta property="og:url" content="https://symphonydentalcare.in/" />
                  <meta property="og:type" content="website" />
                  <meta property="og:image" content="https://symphonydentalcare.in/img/clinic.webp" />
                  <meta property="og:site_name" content="Symphony Dental Care" />
                  
                  {/* Twitter Card Meta Tags */}
                  <meta name="twitter:card" content="summary_large_image" />
                  <meta name="twitter:title" content="Dentist in Khar West | Dental Clinic in Khar/Bandra" />
                  <meta name="twitter:description" content="Looking for a dentist in Khar/Bandra? Symphony Dental Care offers expert dental services..." />
                  <meta name="twitter:image" content="https://symphonydentalcare.in/img/clinic.webp" />
                  <meta name="twitter:site" content="@Symphony2025" />
                  
                  {/* Additional SEO Meta Tags */}
                  <meta name="robots" content="index, follow" />
                  <meta name="author" content="Symphony Dental Care" />
                  <meta name="geo.region" content="IN-MH" />
                  <meta name="geo.placename" content="Mumbai" />
                  <meta name="geo.position" content="19.0719139;72.82947" />
                  
                  {/* JSON-LD Schema Markup */}
                  <script type="application/ld+json">
                    {JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "LocalBusiness",
                      "name": "Symphony Dental Care",
                      "image": "https://symphonydentalcare.in/img/clinic.webp",
                      "url": "https://symphonydentalcare.in/",
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
                        "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                        "opens": "09:00",
                        "closes": "21:00"
                      },
                      "sameAs": [
                        "https://www.facebook.com/SymphonyDentalCareKharWest/",
                        "https://www.instagram.com/symphonydentalcare/",
                        "https://www.youtube.com/@SymphonyDentalCare",
                        "https://x.com/Symphony2025"
                      ]
                    })}
                  </script>
                </Helmet>
                <Header data={landingPageData.Header} />
                <About_Clinic data={landingPageData.About} />
                <Services data={landingPageData.Services} />
                <About_Dentist data={landingPageData.About} />
                <Gallery data={landingPageData.Gallery} />
                <Testimonials data={landingPageData.Testimonials} />
                <FAQ data={landingPageData.FAQ} />
                <Contact data={landingPageData.Contact} />
              </Layout>
            }
          />
          
          {/* Thank You Page Route */}
          <Route 
            path="/thankyou" 
            element={
              <>
                <Helmet>
                  <title>Thank You | Symphony Dental Care</title>
                  <meta 
                    name="description" 
                    content="Thank you for contacting Symphony Dental Care. We will get back to you soon to schedule your appointment." 
                  />
                  <link rel="canonical" href="https://symphonydentalcare.in/thankyou" />
                  
                  <meta property="og:title" content="Thank You | Symphony Dental Care" />
                  <meta property="og:description" content="Thank you for contacting Symphony Dental Care. We will get back to you soon." />
                  <meta property="og:url" content="https://symphonydentalcare.in/thankyou" />
                  <meta property="og:image" content="https://symphonydentalcare.in/img/clinic.webp" />
                  
                  <meta name="robots" content="noindex, follow" />
                  
                  <script type="application/ld+json">
                    {JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "WebPage",
                      "name": "Thank You Page",
                      "url": "https://symphonydentalcare.in/thankyou",
                      "isPartOf": {
                        "@type": "WebSite",
                        "name": "Symphony Dental Care",
                        "url": "https://symphonydentalcare.in/"
                      }
                    })}
                  </script>
                </Helmet>
                <ThankYou />
              </>
            } 
          />
          
          {/* Blog 1 Route */}
          <Route 
            path="/blogs/top-10-dental-myths-busted-by-a-dentist" 
            element={
              <>
                <Helmet>
                  <title>Top 10 Dental Myths Busted by a Dentist | Symphony Dental Care</title>
                  <meta 
                    name="description" 
                    content="Discover the truth behind common dental myths. Learn facts about oral health from our experienced dentist Dr. Sailee Kalyankar in Khar West, Mumbai." 
                  />
                  <link rel="canonical" href="https://symphonydentalcare.in/blogs/top-10-dental-myths-busted-by-a-dentist" />
                  
                  <meta property="og:title" content="Top 10 Dental Myths Busted by a Dentist | Symphony Dental Care" />
                  <meta property="og:description" content="Discover the truth behind common dental myths. Learn facts about oral health from our experienced dentist." />
                  <meta property="og:url" content="https://symphonydentalcare.in/blogs/top-10-dental-myths-busted-by-a-dentist" />
                  <meta property="og:type" content="article" />
                  <meta property="og:image" content="https://symphonydentalcare.in/img/blog-dental-myths.webp" />
                  <meta property="article:author" content="Dr. Sailee Kalyankar" />
                  <meta property="article:published_time" content="2024-09-01" />
                  
                  <meta name="twitter:card" content="summary_large_image" />
                  <meta name="twitter:title" content="Top 10 Dental Myths Busted by a Dentist" />
                  <meta name="twitter:description" content="Discover the truth behind common dental myths from our expert dentist." />
                  <meta name="twitter:image" content="https://symphonydentalcare.in/img/blog-dental-myths.webp" />
                  
                  <script type="application/ld+json">
                    {JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "BlogPosting",
                      "headline": "Top 10 Dental Myths Busted by a Dentist",
                      "description": "Discover the truth behind common dental myths. Learn facts about oral health from our experienced dentist.",
                      "image": "https://symphonydentalcare.in/img/blog-dental-myths.webp",
                      "author": {
                        "@type": "Person",
                        "name": "Dr. Sailee Kalyankar"
                      },
                      "publisher": {
                        "@type": "Organization",
                        "name": "Symphony Dental Care",
                        "logo": {
                          "@type": "ImageObject",
                          "url": "https://symphonydentalcare.in/img/logo.webp"
                        }
                      },
                      "datePublished": "2024-09-01",
                      "dateModified": "2024-09-01",
                      "mainEntityOfPage": {
                        "@type": "WebPage",
                        "@id": "https://symphonydentalcare.in/blogs/top-10-dental-myths-busted-by-a-dentist"
                      }
                    })}
                  </script>
                </Helmet>
                <Blog />
              </>
            } 
          />
          
          {/* Blog 2 Route */}
          <Route 
            path="/blogs/are-bleeding-gums-normal" 
            element={
              <>
                <Helmet>
                  <title>Are Bleeding Gums Normal? Causes & Treatment | Symphony Dental Care</title>
                  <meta 
                    name="description" 
                    content="Learn about bleeding gums, their causes, and when to seek professional dental care from Dr. Sailee Kalyankar at Symphony Dental Care in Khar West, Mumbai." 
                  />
                  <link rel="canonical" href="https://symphonydentalcare.in/blogs/are-bleeding-gums-normal" />
                  
                  <meta property="og:title" content="Are Bleeding Gums Normal? Causes & Treatment" />
                  <meta property="og:description" content="Learn about bleeding gums, their causes, and when to seek professional dental care from our expert dentist." />
                  <meta property="og:url" content="https://symphonydentalcare.in/blogs/are-bleeding-gums-normal" />
                  <meta property="og:type" content="article" />
                  <meta property="og:image" content="https://symphonydentalcare.in/img/blog-bleeding-gums.webp" />
                  <meta property="article:author" content="Dr. Sailee Kalyankar" />
                  <meta property="article:published_time" content="2024-09-15" />
                  
                  <meta name="twitter:card" content="summary_large_image" />
                  <meta name="twitter:title" content="Are Bleeding Gums Normal?" />
                  <meta name="twitter:description" content="Learn about bleeding gums causes and treatment from our dental expert." />
                  <meta name="twitter:image" content="https://symphonydentalcare.in/img/blog-bleeding-gums.webp" />
                  
                  <script type="application/ld+json">
                    {JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "BlogPosting",
                      "headline": "Are Bleeding Gums Normal? Causes & Treatment Explained",
                      "description": "Learn about bleeding gums, their causes, and when to seek professional dental care from our expert dentist.",
                      "image": "https://symphonydentalcare.in/img/blog-bleeding-gums.webp",
                      "author": {
                        "@type": "Person",
                        "name": "Dr. Sailee Kalyankar"
                      },
                      "publisher": {
                        "@type": "Organization",
                        "name": "Symphony Dental Care",
                        "logo": {
                          "@type": "ImageObject",
                          "url": "https://symphonydentalcare.in/img/logo.webp"
                        }
                      },
                      "datePublished": "2024-09-15",
                      "dateModified": "2024-09-15",
                      "mainEntityOfPage": {
                        "@type": "WebPage",
                        "@id": "https://symphonydentalcare.in/blogs/are-bleeding-gums-normal"
                      }
                    })}
                  </script>
                </Helmet>
                <Blog2 />
              </>
            } 
          />
        </Routes>
      </Router>
    </HelmetProvider>
  );
};

export default App;
