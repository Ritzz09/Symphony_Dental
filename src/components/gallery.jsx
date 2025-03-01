import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { Pagination } from 'swiper/modules';
import { EffectCoverflow } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
import { useState, useEffect } from 'react';
// SwiperCore.use([Pagination, EffectCoverflow, Autoplay]);

import './gallery.css';
import zero from "./Gallery/patient1.webp";
import one from "./Gallery/patient2.webp";
import Two from "./Gallery/patient3.webp";
import Three from "./Gallery/patient4.webp";
import Four from "./Gallery/p1.webp";   
import Five from "./Gallery/patient6.webp";
import Six from "./Gallery/patient7.webp";
import Seven from "./Gallery/patient8.webp";
import Eight from "./Gallery/patient9.webp";
import Nine from "./Gallery/patient10.webp";
import ten from "./Gallery/patient11.webp";
import eleven from "./Gallery/patient12.webp";

const gallery = [
    {
        
        url: zero
    },
    {
        
        url: one
    },
    {
       
        url: Two
    },
    {
       
        url: Three
    },
    {
       
        url: Four
    },
    {
       
        url: Five
    },
    {
       
        url: Six
    },
    {
       
        url: Seven
    },
    {
       
        url: Eight
    },
    {
       
        url: Nine
    },
    {
       
        url: ten
    },
    {
       
        url: eleven
    },
];

const Gallery = () => {
  return (

    <div id="gallery" className="gallery" style={{ position: 'relative' }}>
        <div className="text-center">
            <div className="section-title1">
                <h2 style={{color:'white'}}>Our Smiles, Our Pride</h2>
                <p style={{ textAlign: 'center', color:'white'}}>
                See the Transformation Through Our Patient Success Stories

                {/* <br></br>See the Transformation Through Our Patient Success Stories */}
                </p>
            </div>
        </div>
        <Swiper 
        className='slider'
        modules={[Pagination, EffectCoverflow, Autoplay]}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 3,
            slideShadows: true
        }}
        loop={true}
        pagination={{clickable: true}}

        autoplay={{
            delay: 5000,
            disableOnInteraction: false
        }}
        breakpoints={{
            640: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 1
            },
            1024: {
                slidesPerView: 2
            },
            1560: {
                slidesPerView: 3
            },
        }}
        
        >
              {
                  gallery.map((data, index) => (
                      <SwiperSlide key={index}>
                          <img src={data.url} alt={`Gallery ${index + 1}`} className="gallery-image" />
                      </SwiperSlide>
                  ))
              }

        </Swiper>

    </div>
  );
};

export default Gallery;
