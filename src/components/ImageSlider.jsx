import React from "react";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from "../images/slider1.jpg";
import slider2 from "../images/slider-2.jpg";

import { FaShop } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="containerStyle">
      <SlickSlider {...settings}>
        <div className="slideStyle">
          <img src={slider1} alt="İstanbul" className="image" />
          <div className="textStyle">
            <h2 className="up_title">Explore Türkiye</h2>
            <h2 className="down_title">& Save in best places!</h2>
          </div>
        </div>
        <div className="slideStyle">
          <img src={slider2} alt="Slider 2" className="image" />
        </div>
      </SlickSlider>

      <div className="boynow_container">
      <Link to='#'>
            <div className="boynow_body">
                <FaShop className="boynow_body_icon"  />
                <span>Buy Now!</span>
            </div>
        </Link>
        </div>
    </div>
  );
};

export default ImageSlider;
