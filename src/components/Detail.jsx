import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import { FaHeart, FaShareSquare,  FaMapMarkerAlt, FaPhoneAlt, FaGlobe } from "react-icons/fa";
import banner from '../images/banner.png';
import banner2 from '../images/banner_2.png';
import banner3 from '../images/banner_3.png';
import coupon1 from '../images/diamond - use.png'
import coupon2 from '../images/diamond.png'
import coupon3 from '../images/diamond (1).png'
import coupon4   from '../images/basic - use.png'

const Detail = () => {
    const { id } = useParams();
    const location = useLocation();
    const [loading, setLoading] = useState(true);
    const [restaurant,setRestaurant] = useState(null)

    useEffect(() => {
        setRestaurant(location.state.restaurant_test)
    }, [id]);

    return (
        <div className='detail_container'>
            <div className='detail_body'>
                <div className='content' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h2 style={{ fontSize: '40px', fontWeight: '400' }}>The Marmara Taksim</h2>
                    <div className='icon_body'>
                        <FaHeart className='detail_icon' />
                        <FaShareSquare className='detail_icon' />
                    </div>
                </div>
                <p style={{ fontSize: '16px', fontWeight: '400' }}>
                    Luxury Taksim hotel rooms and suites with panoramic Bosphorus, Golden Horn and Istanbul views.
                </p>
                <div className='img_slider'>
                    <img src={banner} alt="Banner 1" />
                    <img src={banner2} alt="Banner 2" />
                    <img src={banner3} alt="Banner 3" />
                </div>
                <div className="contact-bar">
                    <div className="contact-item">
                        <FaMapMarkerAlt className="contact_icon" />
                        <span>Address: Gümüşsuyu, Osmanlı Sk. 1/B, 34437 Beyoğlu/İstanbul</span>
                    </div>
                    <div className="contact-item">
                            <FaPhoneAlt className="contact_icon" />
                            <span>+Phone: (0212) 334 83 00</span>
                    </div>
                    <div className="contact-item">
                        <FaGlobe className="contact_icon" />
                        <span>Web: www.ranna.com.tr</span>
                    </div>
                </div>
                    <div className='coupoun_body'>
                        <h3 style={{fontSize:'16px',fontWeight:'700'}}>Coupons Available - Diamond Members</h3>
                        <img src={coupon1} className='couponimg' />
                        <img src={coupon2} className='couponimg' />
                        <img src={coupon3} className='couponimg' />
                    </div>
                    <div className='coupoun_body'>
                        <h3>Coupons Available - Silver Members</h3>
                        <img src={coupon4} className='couponimg' />
                    </div>
            </div>
        </div>
    );
};

export default Detail;
