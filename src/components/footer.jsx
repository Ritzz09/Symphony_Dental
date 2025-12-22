import React from "react";
import "../components/Footer.css";
import { FaWhatsapp, FaPhone, FaEnvelope, FaInstagram, FaTwitter, FaFacebook, FaLinkedin, FaYoutube, FaClinicMedical,FaPinterest} from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-container">
        {/* About Us Section */}
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
Under the expertise of Dr. Sailee Kalyankar, a skilled Root Canal Specialist, we provide world-class dental care to patients across Khar & Bandra. Our dedicated support team ensures a seamless experience for every patient. End your search for the best dental clinic near me with Symphony Dental Care, where your oral health is our top priority.</p>          
<div className="social-icons">
            <a target="_blank" href="https://www.facebook.com/SymphonyDentalCareKharWest/"><FaFacebook /></a>
            <a target="_blank" href="https://www.instagram.com/symphonydentalcare"><FaInstagram /></a>
            <a target="_blank" href="https://www.youtube.com/@SymphonyDentalCare"><FaYoutube /></a>
            <a target="_blank" href="https://x.com/Symphony2025"><FaTwitter /></a>
            <a target="_blank" href="https://www.pinterest.com/symphonydentalcare/"><FaPinterest /></a>
            <a target="_blank" href="https://www.clinicspots.com/dentist/mumbai/bandra"><FaClinicMedical /></a>

          </div>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          
          <ul>
            <li><a className='page-scroll' href="#header">Home</a></li>
            <li><a className='page-scroll' href="#about_clinic">About Clinic</a></li>
            <li><a className='page-scroll' href="#services">Services</a></li>
            <li><a className='page-scroll' href="#about_dentist">Dentist</a></li>
            <li><a className='page-scroll' href="#gallery">Gallery</a></li>
            <li><a className='page-scroll' href="#testimonials">Testimonials</a></li>
            <li><a className='page-scroll' href="#faq">FAQ'S</a></li>
            <li><a className='page-scroll' href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Open Hours Section */}
        <div className="footer-section">
          <h3>Open Hours</h3>
          <p>Monday - Sunday: 9:00am to 10:00pm</p>
          
        </div>

        {/* Map Section */}
        <div className="footer-section map-container">
          <h3>Our Location</h3>
          <iframe
            title="Google Maps"
            className="map-box"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.6865657102297!2d72.82728131490312!3d19.071913886685946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c99de68f7289%3A0x1f2f264854a07bda!2sSymphony%20Dental%20Care!5e0!3m2!1sen!2sin!4v1616580171298!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>


        </div>
      </div>

      <div className="footer-bottom">
      <p>
  &copy; 2025 Symphony Dental Care. Design by{" "}
  <a href="https://mastermindweb.in/" target="_blank" rel="noopener noreferrer">
    MasterMind Web Developers
  </a>
</p>  
      </div>
    </footer>
  );
};

export default Footer;
