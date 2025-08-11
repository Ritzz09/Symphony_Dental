import React from "react";
import logo from "./Gallery/logo.png";
import "../components/navigation.css";


export const Navigation = (props) => {
  const handleNavClick = () => {
    const navbar = document.getElementById("bs-example-navbar-collapse-1");
    if (navbar.classList.contains("in")) {
      navbar.classList.remove("in");
    }
  };


   const blogs = [
    {
      id: "dental-myths-busted",
      title: "Top 10 Dental Myths Busted",
      url: "../pages/blog1"
    },
   ];

   const handleBlogClick = (url) => {
    // Close mobile menu if open
    handleNavClick();
    // Navigate to blog page
    window.location.href = url;
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
              <a href="#about_dentist" className="page-scroll" onClick={handleNavClick}>
               Dentist
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

             <li className="dropdown">
              <a 
                href="#" 
                className="dropdown-toggle" 
                data-toggle="dropdown" 
                role="button" 
                aria-haspopup="true" 
                aria-expanded="false"
              >
                Blogs <span className="caret"></span>
              </a>
              <ul className="dropdown-menu">
                {blogs.map((blog) => (
                  <li key={blog.id}>
                    <a 
                      href="#" 
                      onClick={(e) => {
                        e.preventDefault();
                        handleBlogClick(blog.url);
                      }}
                    >
                      {blog.title}
                    </a>
                  </li>
                ))}
                <li className="divider"></li>
                <li>
                  <a 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      handleBlogClick('/blogs');
                    }}
                  >
                    View All Blogs
                  </a>
                </li>
              </ul>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};
