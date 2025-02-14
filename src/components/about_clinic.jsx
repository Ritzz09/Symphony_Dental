import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../components/about_clinic.css";
import one from "./Gallery/clinic.webp";
// import two from "./Gallery/1.jpeg";
import three from "./Gallery/2.webp";
import four from "./Gallery/3.webp";
import five from "./Gallery/4.webp";
import six from "./Gallery/5.webp";

export const About_Clinic = (props) => {
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [sliderHeight, setSliderHeight] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      adjustSliderHeight();
    };
    window.addEventListener("resize", handleResize);

    const handleClickOutside = (e) => {
      const button = document.querySelector(".read-more-btn");
      if (button && !button.contains(e.target)) {
        setExpanded(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    adjustSliderHeight(); // Set initial height

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Function to adjust slider height dynamically based on the first image
  const adjustSliderHeight = () => {
    if (sliderRef.current) {
      const firstSlide = sliderRef.current.querySelector("img");
      if (firstSlide) {
        setSliderHeight(firstSlide.clientHeight);
      }
    }
  };

  const paragraphs = props.data
    ? props.data.paragraph.split("\n\n")
    : ["loading..."];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    afterChange: adjustSliderHeight, // Adjust height on slide change
  };

  const clinicImages = [
    one,three,four,six,five
  ];

  return (
    <div id="about_clinic">
      <div className="container">
        <div className="text-center">
          <div className="section-title">
            <h2>Welcome to Symphony Dental Care</h2>
            {/* <p style={{ textAlign: "center" }}>
            A Modern Dental Clinic Committed to Your Dental Health
            </p> */}
          </div>
        </div>
        <div>
          <div className="row">
            {/* Image Slider Section */}
            <div className="col-xs-12 col-md-6" style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ width: "100%"}}>
                <Slider {...sliderSettings}>
                  {clinicImages.map((image, index) => (
                    <div key={index} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                      <img 
                        src={image} 
                        alt={`Clinic ${index + 1}`} 
                        style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "cover", borderRadius: "10px" }} 
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>

            {/* Text Content Section */}
            <div className="col-xs-12 col-md-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                {isMobile && !expanded ? (
                  <>
                    <p style={{textAlign:'justify', textJustify:'inter-word'}} >{paragraphs[0]}</p>
                    <button
                      className="read-more-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpanded(true);
                      }}
                    >
                      Read More
                    </button>
                  </>
                ) : (
                  paragraphs.map((text, index) => (
                    <p style={{fontSize:'17px', marginTop:'30px' , textAlign:'justify', textJustify:'inter-word'}} key={index}>
                      {index === 1 ? (
                        <>
                          Led by <strong>Dr. Sailee Kalyankar</strong>, an experienced root canal specialist, 
                          our friendly dental hygienists and support staff are here to help bring out your best smile.  
                          We're all about your oral health, and our team of skilled dental professionals is ready to take care of you. 
                          With a multi-disciplinary approach, we’ve got specialists in every area, from endodontics and orthodontics to pediatric 
                          dentistry and oral surgery. You can count on us for expert care in a relaxed atmosphere!
                        </>
                      ) : (
                        text
                      )}
                    </p>
                  ))
                )}

                {isMobile && expanded && (
                  <button
                    className="read-more-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpanded(false);
                    }}
                  >
                    Read Less
                  </button>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
