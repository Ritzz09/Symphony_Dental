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

import "./App.css";
import SEO from "./components/SEO";
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
                <SEO />
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
