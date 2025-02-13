import React from "react";
import "../components/about_dentist.css";



export const About_Dentist = () => {
  return (
    <div id="about_dentist" className="dentist-container">
      <div className="dentist-content">
        <img
          src="img/dentist.jpg"
          alt="Dr. Akshay Bandewar"
          className="dentist-image"
        />
        <div className="dentist-text">
          <h2>
            Meet  <span className="highlight">Dr.Sailee Kalyankar</span>
          </h2>
          <p style={{color:'#292727'}}>
          <strong>Dr. Sailee Kalyankar</strong> is a highly experienced dentist and root canal specialist based in Khar West. With over 8 years of expertise in Conservative Dentistry & Endodontics (BDS, MDS), she is dedicated to providing gentle, comprehensive care for patients of all ages.
          </p>
          <p style={{color:'#292727'}}>
          Dr. Sailee leads Symphony Dental Care, a premier dental clinic in Khar West, offering a wide range of dental services, from routine check-ups to advanced treatments such as Full Mouth Rehabilitation, Single Sitting Root Canal Treatment (RCT), Dental Implants, Teeth Whitening, Braces & Aligners, Crowns & Bridges, Pediatric Dentistry and many more. Her focus is on delivering personalized care in a comfortable, modern setting.

          </p>
          <ul className="dentist-list">
            <li>⭐ MDS in Conservative Dentistry & Endodontics </li>
            <li>⭐ Master of Smile Makeovers </li>
            <li>⭐ 8+ Years of Experience</li>
            <li>⭐ Specialized in Root Canal Treatment (RCT)</li>
            <li>⭐ Patient-Centered Approach</li>
            <li>⭐ 100+ Smiles Restored Every Month</li>
          </ul>
          {/* <button className="appointment-button">Book An Appointment</button> */}
        </div>
      </div>
    </div>
  );
};

