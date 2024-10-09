import React from "react";
import Slider from "react-slick";
import bannerOne from "../../assets/images/banner.webp";
import bannerFour from "../../assets/images/banner8.webp";
import bannerFive from "../../assets/images/banner7.webp";
import './carousal.css';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 

function Carousal() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slider-item">
          <img src={bannerFive} alt="Banner 5" />
        </div>
        <div className="slider-item">
          <img src={bannerOne} alt="Banner 1" />
        </div>
        <div className="slider-item">
          <img src={bannerFour} alt="Banner 4" />
        </div>
      </Slider>
    </div>
  );
}

export default Carousal;
