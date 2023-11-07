import React from 'react';
import './Footer.css'; // Create a CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="address">
            <h2>Address</h2>
            <p>Hola9 classifieds pvt ltd<br />6th Block Koramangala</p>
          </div>
          <div className="quick-links ">
            <h2>Quick Links</h2>
        
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
       
          </div>
          <div className="social-media">
            <h2>Follow Us</h2>
            <a href="#">Facebook</a> | <a href="#">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
