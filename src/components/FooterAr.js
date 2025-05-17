import React from "react";
import { Link } from "react-router-dom";
import "./style/footer.scss";
function FooterAr() {
  return (
    <footer className="footer-container py-4">
      <div className="container px-lg-5">
        <div className="footer-text d-flex justify-content-between">
          <div className="copyright">&copy;2025 جميع الحقوق محفوظة</div>
          <div className="social-icons d-flex align-items-center">
            <div className="insta">
              <Link
                target="_blank"
                to="https://www.instagram.com/lam_customers?igsh=Z243eXA1bDg5dXl5"
              >
                <i className="fa-brands fa-instagram"></i>
              </Link>
            </div>
            <div className="linkedin mx-2">
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
            <div className="whatsapp me-2">
              <Link target="_blank" to="https://wa.me/966593072004">
                <i className="fa-brands fa-whatsapp"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterAr;
