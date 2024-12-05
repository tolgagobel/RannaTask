import React, { useState, useRef } from 'react';
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from "../../images/logo-2.png"
import slider1 from "../../images/mobilslider.jpeg";
import slider2 from "../../images/mobilslider2.jpeg";
import slider3 from "../../images/mobilslider3.jpeg";
import { Link } from 'react-router-dom';

const Intro = () => {
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 1,
        autoplay: false,
        arrows: false,
        nextArrow:'#next-arrow'
      };

      const [page,setPage] = useState(1)

    return (
        <div>
              <SlickSlider ref={sliderRef} {...settings}>
                    <div className="mobilslider">
                        <img className="mobilslider_logo" src={logo} alt="Logo" />
                        <img src={slider1} alt="Slider 1" className="mobilslider_img" />
                        <div className="mobilslider_text">
                            <span>Find unique discount coupons for your favourite places.</span>
                        </div>
                        <button onClick={() => {sliderRef.current.slickNext()}} id='next-arrow' className='welcome_buttonbody_white'>Skip</button>
                    </div>
                    <div className="mobilslider">
                        <img className="mobilslider_logo" src={logo} alt="Logo" />
                        <img src={slider2} alt="Slider 2" className="mobilslider_img" />
                        <div className="mobilslider_text">
                            <span>Choose your membership.</span>
                        </div>
                        <button onClick={() => {sliderRef.current.slickNext()}} id='next-arrow' className='welcome_buttonbody_white'>Skip</button>
                    </div>
                    <div className="mobilslider">
                        <img className="mobilslider_logo" src={logo} alt="Logo" />
                        <img src={slider3} alt="Slider 3" className="mobilslider_img" />
                        <div className="mobilslider_text">
                            <span>Explore Türkiye to its full potential!</span>
                       <Link to='/introVideo'> <button className='welcome_buttonbody_green'>Continue</button></Link>
                        </div>
                    </div>
                </SlickSlider>
        </div>
    );
}

export default Intro;
