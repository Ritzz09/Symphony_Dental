import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"; 
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
import { Helmet } from "react-helmet-async";
import "./App.css";

import { HelmetProvider } from "react-helmet-async";

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
          <Route
            path="/"
            element={
              <Layout>
                {/* Landing Page SEO */}
                <Helmet>
                      <title>Dentist in Khar West | Dental Clinic in Khar/Bandra</title>
                      <meta
                        name="description"
                        content="Looking for a dentist in Khar/Bandra? Symphony Dental Care offers expert dental services with a focus on patient comfort, care, and the latest treatments for all your oral health needs."
                      />
                      <link rel="canonical" href="https://www.symphonydentalcare.in/" />
                
                
                      {/* Local Business Schema */}
                      <script type="application/ld+json">
                      
                
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
          <Route path="/thankyou" element={<ThankYou />} />

          {/* Blog page with its own SEO handled in blog1.jsx */}
          <Route path="/blogs/top-10-dental-myths-busted-by-a-dentist" element={<Blog />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
};

export default App;
