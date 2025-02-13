import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../components/services.css";

import serviceImage1 from "./services/1.jpg";
import serviceImage2 from "./services/2.jpg";
import serviceImage3 from "./services/3.jpg";
import serviceImage4 from "./services/4.jpg";
import serviceImage5 from "./services/5.png";

const serviceData = [
  { image: serviceImage1, name: "General Dentistry", text: "Diagnosis & X-Ray, Emergency Dentistry , Cleaning and Polishing, Tooth Extractions ,Wisdom Tooth Removal" },
  { image: serviceImage2, name: "Restorative Treatments", text: "Root Canal, Cosmetic Fillings, Crowns & Bridges, Implants, Partial & Full Dentures, Full Mouth Rehabilitation" },
  { image: serviceImage3, name: "Cosmetic Dentistry", text: "Laminates, Veneers, Teeth Whiteningl, Smile Designing/Smile Makeover" },
  { image: serviceImage4, name: "Preventive Care", text: "Gum Disease Treatments, Kids Dentistry" },
  { image: serviceImage5, name: "Orthodontics", text: "Orthodontic braces , Aligners, Mouth Guards" },
];

export const Services = () => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Your Path to a Healthier Smile Starts Here </h2>
          <p style={{ textAlign: "center" , textTransform:'capitalize'}}>
          From Preventive Care to Advanced Treatments – We Offer Everything You Need
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 3 },
          }}
        >
          {serviceData.map((d, i) => (
            <SwiperSlide key={`${d.name}-${i}`}>
              <div className="service-card">
                <img src={d.image} alt={d.name} className="service-image" />
                <h3>{d.name}</h3>
                <p>
                  {d.text
                    .split(/\s*,\s*/)
                    .map((line, index) => (
                      <span key={index}>
                         {line}
                        <br />
                      </span>
                    ))}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};