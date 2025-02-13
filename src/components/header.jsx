import React from "react";
import logo from "./assets/faq-accordion-card-main/images/header.png";
import "../components/header.css";
import { color } from "framer-motion";
import { RxFontStyle } from "react-icons/rx";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row align-items-center"> {/* Ensures vertical alignment */}
              {/* Left Section - Text */}
              <div className="col-md-6 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p1 style={{color:"white",fontWeight:'2000', fontSize:'22px'}}>{props.data ? props.data.paragraph : "Loading"}</p1>
                
                
              </div>
              {/* Right Section - Image */}
              <div className="col-md-6 text-center">
                <img 
                  src={logo}  // Update with your image path
                  alt="Right Section Image"
                  className="img-fluid header-image" 
                />
              </div>
                <a style={{fontWeight:'bold',fontSize:"20px"}} href="#contact" className="btn btn-custom  page-scroll">
                    Enquire Now
                </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
