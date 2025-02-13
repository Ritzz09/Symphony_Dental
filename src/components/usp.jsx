import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Import motion for animation
import "../App.css";
import "../components/usp.css";

const USP = (props) => {
  return (
    <section id="usp" className="usp-section">
      <div className="container">
        <div className="usp-header text-center">
          <p className="usp-subtitle">Celebrating Success</p>
          <h3 className="usp-title">Counting Our Achievements</h3>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((usp, index) => (
                <div key={index} className="col-md-3 col-sm-6 text-center usp-box">
                  <i className={`${usp.icon} fa-3x usp-icon`}></i>

                  {/* Counting Animation */}
                  <motion.h3
                    className="usp-number"
                    initial={{ opacity: 0, y: 20 }} // Start with invisible and slightly below
                    animate={{ opacity: 1, y: 0 }}   // Animate to full visibility
                    transition={{ delay: index * 0.2, duration: 0.5 }} // Delay staggered by index
                  >
                    {/* If the counter is for Google Rating, don't animate */}
                    {usp.title === "4.9" ? (
                      <span>{usp.title}</span>
                    ) : (
                      <Counter target={usp.title} isHappySmiles={usp.title === "20000+"} />
                    )}
                  </motion.h3>

                  <p className="usp-text">{usp.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </section>
  );
};

// Counter Component for counting animation
const Counter = ({ target, isHappySmiles }) => {
  const [count, setCount] = useState(0); // Initial count is 0
  const targetValue = parseFloat(target.replace(/[^\d.-]/g, "")); // Handle both integers and floats correctly
  const duration = isHappySmiles ? 500 : 2000; // Make "Happy Smiles" counter super fast (500ms)
  const step = isHappySmiles ? 50 : 1; // Increase step size for "Happy Smiles"

  useEffect(() => {
    let start = 0;
    const end = targetValue;
    const stepTime = Math.abs(Math.floor(duration / (end / step))); // Adjust step time based on the increment

    // Stop the counting if target is already 0 or less
    if (end <= 0) return;

    const interval = setInterval(() => {
      start += step; // Increment by the specified step size (1000 for "Happy Smiles")
      setCount(start);
      if (start >= end) {
        clearInterval(interval); // Stop counting when target is reached
      }
    }, stepTime);

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [targetValue, duration, step]); // Add step as a dependency

  return <motion.span>{count}{target.includes("+") || target.includes(".") ? target.replace(/[0-9]/g, "") : ""}</motion.span>;
};

export default USP;
