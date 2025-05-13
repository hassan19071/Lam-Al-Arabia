import React from "react";
import { Link } from "react-router-dom";
import "./style/contact-info.scss";

function ContactInfoAr() {
  return (
    <div className="contact-information py-4" dir="rtl">
      <div className="container px-lg-5">
        <div className="info-grid text-center">
          <div className="info">
            <div className="icon">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div className="text-info">
              <h4>العنوان</h4>
              <span>
                الخبر، شارع الأمير فيصل بن فهد، المملكة العربية السعودية
              </span>
            </div>
          </div>
          <div className="info">
            <div className="icon">
              <i className="fa-solid fa-phone"></i>
            </div>
            <div className="text-info">
              <h4>اتصل بنا</h4>
              <span className="d-block">
                <Link to="tel:+966547212133">0547212133</Link>
              </span>
              <span>
                <Link to="tel:+966593072004">0593072004</Link>
              </span>
            </div>
          </div>
          <div className="info">
            <div className="icon">
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div className="text-info">
              <h4>راسلنا</h4>
              <span>
                <Link to="mailto:info@lam.com.sa">info@lam.com.sa</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfoAr;
