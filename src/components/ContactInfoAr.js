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
              <span>
                <Link to="tel:+966536477046">0536477046</Link>
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
