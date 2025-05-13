import React from "react";
import { Link } from "react-router-dom";
import "./style/top-header.scss";
const TopHeaderAr = () => {
  return (
    <div className="top-header d-md-block d-none">
      <div className="container">
        <div className="infos-content d-flex align-items-center justify-content-between">
          <div className="email-phone d-flex align-items-center">
            <div className="phone d-flex align-items-center">
              <div className="icon">
                <i className="fa-solid fa-phone-alt"></i>
              </div>
              <div className="number me-1">
                <Link to="tel:+966547212133">0547212133</Link>
              </div>
            </div>
            <div className="email me-3 d-flex align-items-center">
              <div className="icon">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="mail me-1">
                <Link to="mailto:info@lam.com.sa">Info@lam.com.sa</Link>
              </div>
            </div>
            <div className="email me-3 d-flex align-items-center">
              <div className="icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="mail me-1">
                <span>الخبر، شارع الأمير فيصل بن فهد، المملكة العربية السعودية</span>
              </div>
            </div>
          </div>
          <div className="social-icons d-flex align-items-center">
            <div className="insta">
              <Link
                target="_blank"
                to="https://www.instagram.com/lam_customers?igsh=Z243eXA1bDg5dXl5"
              >
                <i className="fa-brands fa-instagram"></i>
              </Link>
            </div>
            <div className="linkedin mx-3">
              <Link
                target="_blank"
                to="http://www.linkedin.com/in/advertising-services-73b935355"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </Link>
            </div>
            <div className="x">
              <Link
                target="_blank"
                to="https://x.com/lam_customers?t=v7s27b6qztSJG547PhYwEg&s=09"
              >
                <i className="fa-brands fa-x"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeaderAr;
