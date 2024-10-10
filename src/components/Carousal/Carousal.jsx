import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import bannerOne from "../../assets/images/banner.webp";
import bannerFour from "../../assets/images/banner8.webp";
import bannerFive from "../../assets/images/banner7.webp";
import './carousal.css';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";

function Carousal() {
  const sliderRef = useRef(null);
  const autoplayIntervalRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, 
    cssEase: "linear",
  };

  const nextSlide = () => {
    clearInterval(autoplayIntervalRef.current); 
    sliderRef.current.slickNext();
    restartAutoplay(); 
  };

  const prevSlide = () => {
    clearInterval(autoplayIntervalRef.current); 
    sliderRef.current.slickPrev();
    restartAutoplay(); 
  };

  const restartAutoplay = () => {
    autoplayIntervalRef.current = setInterval(nextSlide, settings.autoplaySpeed);
  };

  useEffect(() => {
    autoplayIntervalRef.current = setInterval(nextSlide, settings.autoplaySpeed);

    return () => {
      clearInterval(autoplayIntervalRef.current);
    };
  }, []);

  return (
    <div className="slider-container">
      <Slider ref={sliderRef} {...settings}>
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
      <div className="carousel-controls">
        <button onClick={prevSlide} className="prev"><FaArrowAltCircleLeft className="Icons" /></button>
        <button onClick={nextSlide} className="next"><FaArrowAltCircleRight className="Icons"/></button>
      </div>
    </div>
  );
}

export default Carousal;
