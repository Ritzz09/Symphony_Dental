import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"; // Import useLocation
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
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const Layout = ({ children }) => {
  const location = useLocation(); // Get current path

  const hideNavbarFooter = location.pathname === "/thankyou"; // Check if on ThankYou page

  return (
    <>
      {!hideNavbarFooter && <Navigation />}
      {children}
      {!hideNavbarFooter && <Footer Footer={JsonData.Footer} />}
    </>
  );
};

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header data={landingPageData.Header} />
                <About_Clinic data={landingPageData.About} />
                <Services data={landingPageData.Services} />
                <About_Dentist data={landingPageData.About} />
                <Gallery data={landingPageData.Gallery} />
                <Testimonials data={landingPageData.Testimonials} />
                <FAQ data={landingPageData.FAQ} />
                <Contact data={landingPageData.Contact} />
                
              </>
            }
          />
          <Route path="/thankyou" element={<ThankYou />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
