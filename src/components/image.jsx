import React from "react";

export const Image = ({ largeImage, smallImage }) => {
  return (
    <div className="portfolio-item">
      <div className="hover-bg">
        {" "}
        <a href={largeImage} data-lightbox-gallery="gallery1">
          <div className="hover-text">
            
          </div>
          <img src={smallImage} className="img-responsive"  />{" "}
        </a>{" "}
      </div>
    </div>
  );
};
