import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import "./thankyou.css";
const ThankYou = () => {
  return (
    <div className='thank-you-container'>
      <div className='thank-you-box'>
        <h1 className='heading'>Thank You for Choosing Symphony Dental Care!</h1>
        <p className='paragraph'>
        We Appreciate Your Message and Will Get Back to You Shortly
        </p>
        <Link 
          to="/" 
          className='button' 
          onClick={() => window.scrollTo(0, 0)} // Scroll to top on click
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};


export default ThankYou;
