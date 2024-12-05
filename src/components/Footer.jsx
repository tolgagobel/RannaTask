import React from 'react';
import { FaYoutube, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="footer_container">
      <div className="footer-top">
        <div className="footer-links">
          <Link to="#about">About Us</Link>
          <Link to="#terms">Terms of Use</Link>
          <Link to="#privacy">Privacy Policy</Link>
          <Link to="#contact">Contact</Link>
        </div>
        <p className="footer-copyright">
          Copyright 2022. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>
      </div>

      <div className="footer-icons">
        <a href="#youtube" className="footer_icon">
          <FaYoutube />
        </a>
        <a href="#instagram" className="footer_icon">
          <FaInstagram />
        </a>
        <a href="#twitter" className="footer_icon">
          <FaTwitter />
        </a>
        <a href="#facebook" className="footer_icon">
          <FaFacebook />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
