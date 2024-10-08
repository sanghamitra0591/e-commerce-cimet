// import React from "react";
// import Slider from "react-slick";
// import bannerOne from "../../img/banner.webp";
// import bannerFour from "../../img/banner8.webp";
// import bannerFive from "../../img/banner7.webp";

// function Carousal() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     // slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     // speed: 2000,
//     autoplaySpeed: 2000,
//     cssEase: "linear",
//   };
//   return (
//     <div className="slider-container">
//       <Slider {...settings}>
//         <div>
//         <img src={bannerFive} />
//         </div>
//         <div>
//           <img src={bannerOne} />
//         </div>
//         <div>
//           <img src={bannerFour} />
//         </div>
//       </Slider>
//     </div>
//   );
// }

// export default Carousal;

//-------------------------


// import React from "react";
// import Slider from "react-slick";
// import bannerOne from "../../img/banner.webp";
// import bannerFour from "../../img/banner8.webp";
// import bannerFive from "../../img/banner7.webp";
// import './Carousal.css'; 

// function Carousal() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     cssEase: "linear",
//   };

//   return (
//     <div className="slider-container">
//       <Slider {...settings}>
//         <div className="slider-item">
//           <img src={bannerFive} alt="Banner 5" />
//         </div>
//         <div className="slider-item">
//           <img src={bannerOne} alt="Banner 1" />
//         </div>
//         <div className="slider-item">
//           <img src={bannerFour} alt="Banner 4" />
//         </div>
//       </Slider>
//     </div>
//   );
// }

// export default Carousal;


import React from "react";
import Slider from "react-slick";
import bannerOne from "../../img/banner.webp";
import bannerFour from "../../img/banner8.webp";
import bannerFive from "../../img/banner7.webp";
import './Carousal.css'; // Import the CSS file
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
