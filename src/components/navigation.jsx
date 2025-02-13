import React from "react";
import logo from "./assets/faq-accordion-card-main/images/logo.png";
import "../components/navigation.css";


export const Navigation = (props) => {
  const handleNavClick = () => {
    const navbar = document.getElementById("bs-example-navbar-collapse-1");
    if (navbar.classList.contains("in")) {
      navbar.classList.remove("in");
    }
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            <img src={logo} alt="Symphony Logo" className="navbar-logo" />
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#about_clinic" className="page-scroll" onClick={handleNavClick}>
                About
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll" onClick={handleNavClick}>
                Services
              </a>
            </li>
            <li>
              <a href="#gallery" className="page-scroll" onClick={handleNavClick}>
                Gallery
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll" onClick={handleNavClick}>
                Testimonials
              </a>
            </li>
            <li>
              <a href="#faq" className="page-scroll" onClick={handleNavClick}>
                FAQ'S
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll" onClick={handleNavClick}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
