import React from "react";
import { Link } from "react-router-dom";
import "./style/contact-info.scss";
function ContactInfo() {
  return (
    <div className="contact-information py-4">
      <div className="container px-lg-5">
        <div className="info-grid text-center">
          <div className="info">
            <div className="icon">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div className="text-info">
              <h4>Address</h4>
              <span>Khobar, Prince Faisal Bin Fahd Rd . KSA</span>
            </div>
          </div>
          <div className="info">
            <div className="icon">
              <i className="fa-solid fa-phone"></i>
            </div>
            <div className="text-info">
              <h4>Call Us</h4>
              <span>
                <Link to="tel:+966593072004">+966 59 307 2004</Link>
              </span>
            </div>
          </div>
          <div className="info">
            <div className="icon">
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div className="text-info">
              <h4>Message Us</h4>
              <span>
                <Link to="mailto:info@lam.com.sa">Info@lam.com.sa</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
