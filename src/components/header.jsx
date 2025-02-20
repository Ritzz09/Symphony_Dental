import React from "react";
import logo from "./Gallery/header.webp";
import "../components/header.css";
import { color } from "framer-motion";
import { RxFontStyle } from "react-icons/rx";
import { Button } from "@material-tailwind/react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row align-items-center"> {/* Ensures vertical alignment */}
              {/* Left Section - Text */}
              <div className="col-md-12 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p style={{color:"white",fontWeight:'2000'}}>{props.data ? props.data.paragraph : "Loading"}</p>
                <span></span>
                <div >
                <a style={{fontWeight:'bold',fontSize:"16px"}} href="#contact" className="btn btn-custom  page-scroll" >
                    Enquire Now
                </a>
                </div>
                
              </div>
              
              {/* Right Section - Image */}
              <div className="col-md-4 text-center">
                {/* <img 
                  src={logo}  // Update with your image path
                  alt="Right Section Image"
                  className="img-fluid header-image" 
                /> */}
              </div>
               
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
