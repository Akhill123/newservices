import React, { useState,} from "react";
import "./footer.css";
import cityData from "./cityData"; 




const Footer = () => {

  const [popupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!popupVisible);
  };

  return (
    <>
      <section className="newletter1">
        <div className="container flexSB">
          <div className="left row">
            <h1>Newsletter - Stay With Us Get Latest Updates</h1>
            <span>Far far away, behind the word mountains</span>
          </div>
          <div className="right row">
            <input type="text" placeholder="Enter email address" />
            <i className="fa fa-paper-plane"></i>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="top-categories">
              <h2 className="hey">Top Categories</h2>
              <button>Home Cleaning</button>
              <button>Appliance Repair</button>
              <button>Computer Repair</button>
              <button>Invertors & Batteries</button>



              <button onClick={togglePopup}>OTHERS</button>



            </div>
            <div className="social-media">
              <h2 className="hey">Follow Us</h2>
              <a href="#">Facebook</a> <a href="#">Twitter</a>
              <a href="#">Facebook</a> <a href="#">Twitter</a>
              <a href="#">Facebook</a> <a href="#">Twitter</a>
            </div>
            <div className="quick-links">
              <h2 className="hey">Quick Links</h2>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
            <div className="address">
              <h2 className="hey">Address</h2>


        

              <p>Hola9 classifieds pvt ltd<br />6th Block Koramangala</p>
            </div>
          </div>
        </div>
      </footer>

      {popupVisible && 
        (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={togglePopup}>
              &times;
            </span>
            <h2>Select City and Category</h2>
            <div className="dropdowns">
             <p>Select city</p>
             <select id="city-dropdown">
             {cityData.map((city, index) => (
               <option key={index} value={city}>
                 {city}
               </option>
             ))}
           </select>
              <br />
              <p>Select Category</p>
              <select id="category-dropdown">
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
                {/* Add more category options as needed */}
              </select>
              <br />
              <button id="search-button">Search</button>
            </div>
          </div>
        </div>
      )
    }
    </>
  );
};

export default Footer;

