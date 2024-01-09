// import one from "../assets/panars/1-15.webp";
import './slide.css'
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import one from "../assets/panars/one.jpg";
import two from "../assets/panars/two.jpg";
import three from "../assets/panars/three.jpg";
const DashboardSlide = () => {


 
  const images = [
     'https://source.unsplash.com/random',
     'https://source.unsplash.com/random',
     'https://source.unsplash.com/random',
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
 };
 

 
  return (
    <div className="max-w-[100vw]  md:m-6 rounded-lg slider-cont">
      {/* <img src={one} className="p-2 md:m-0" alt="" /> */}
      <Slider {...settings}>
      <div>
        <img className="p-2 md:m-0"  src={one} alt="" />
      </div>
      <div>
        <img className="p-2 md:m-0" src={two} alt="" />
      </div>
      <div>
        <img className="p-2 md:m-0" src={three} alt="" />
      </div>
    
    </Slider>
    </div>
  );
};

export default DashboardSlide;
