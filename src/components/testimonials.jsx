import React, { useEffect } from "react";


export const Testimonials = (props) => {
  
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup when unmounting
    };
  }, []); // Runs once when component mounts

  return (
    <div id="testimonials" className="elfsight-widget-container">
      {/* Elfsight Widget */}
      <div 
        className="elfsight-app-d22ef220-0e8f-4f1b-8405-3c07ffe8e949" 
        data-elfsight-app-lazy
      ></div>
    </div>
  );
};


  // const [showAll, setShowAll] = useState(false);
  // const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  // const [expandedIndex, setExpandedIndex] = useState(null); // Track only one expanded index
  // const testimonialsRef = useRef(null);

  // useEffect(() => {
  //   const handleResize = () => setIsMobile(window.innerWidth < 768);
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (testimonialsRef.current && !testimonialsRef.current.contains(event.target)) {
  //       setExpandedIndex(null); // Collapse all on outside click
  //     }
  //   };
  //   document.addEventListener("click", handleClickOutside);
  //   return () => document.removeEventListener("click", handleClickOutside);
  // }, []);

  // const toggleReadMore = (index) => {
  //   setExpandedIndex(expandedIndex === index ? null : index); // Only one at a time
  // };

  // const displayedTestimonials = isMobile && !showAll ? props.data?.slice(0, 3) : props.data;

  // return (
  //   <div id="testimonials" ref={testimonialsRef}>
  //     <div className="container">
  //       <div className="section-title">
  //         <h2>What Our Patients Are Saying</h2>
  //         <p style={{textTransform:'capitalize'}}>Real Stories, Real Smiles – Hear From Our Happy Patients</p>
  //       </div>
        
  //       <div className="testimonials-container">
  //         {displayedTestimonials
  //           ? displayedTestimonials.map((d, i) => {
  //               const isExpanded = expandedIndex === i;
  //               const shortText = d.text.length > 100 ? `${d.text.substring(0, 100)}...` : d.text;

  //               return (
  //                 <div key={`${d.name}-${i}`} className="testimonial-wrapper">
  //                   <div className={`testimonial ${isExpanded ? "expanded-testimonial" : ""}`}>
  //                     <div className="testimonial-content">
  //                       <p className={`testimonial-text ${isExpanded ? "expanded" : ""}`}>
  //                         {isExpanded ? d.text : shortText}
  //                         {d.text.length > 100 && (
  //                           <span
  //                             className="read-more-btn1"
  //                             onClick={() => toggleReadMore(i)}
  //                           >
  //                             {isExpanded ? " Show Less" : " Read More"}
  //                           </span>
  //                         )}
  //                       </p>
  //                       <div style={{fontWeight:"bold"}} className="testimonial-meta">- {d.name}</div>
  //                     </div>
  //                   </div>
  //                 </div>
  //               );
  //             })
  //           : "loading"}
  //       </div>

  //       {isMobile && props.data?.length > 3 && (
  //         <div className="text-center">
  //           <button className="show-more-btn" onClick={() => setShowAll(!showAll)}>
  //             {showAll ? "Show Less" : "Show More"}
  //           </button>
  //         </div>
  //       )}

  //     </div>
  //   </div>
  // );
