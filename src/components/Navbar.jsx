import React, { useState } from "react";
import png from "../images/Group.png";
import { FaHome, FaCreditCard, FaHeart, FaSearch, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
    <div className="logo">
      <img
        src={png}
        alt="Logo"
        className="logoImage"
      />
    </div>
    <div className="hamburger" onClick={toggleMenu}>
      {isMenuOpen ? <FaTimes /> : <FaBars />}
    </div>
    <div className="navbar_right">
      <div className="iconContainer">
        <Link to='#'><FaHome className="icon" /></Link>
        <Link to='#'><FaCreditCard className="icon" /></Link>
        <Link to='#'><FaHeart className="icon" /></Link>
        <Link to='#'><FaSearch className="icon" style={{ marginRight: '20px' }} /></Link>
      </div>
      <div className="iconContainer_2">
       <Link to='#'><FaUser className="user_icon" /></Link>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
