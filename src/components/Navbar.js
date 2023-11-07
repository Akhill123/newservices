import React from 'react';
import './Navbar.css';
import logo from "../images/logo.jpg";
const Navbar = () => {
  return (
    <div className="navbar">
    <img
    src={logo}
    alt="Icon"
    className="navbar-icon"
  />
      <div className="navbar-links">
      <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/contact-us">Contact Us</a>
        <a href="/help">Help</a>
      </div>
    </div>
  );
};

export default Navbar;
