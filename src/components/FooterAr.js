import React from "react";
import { Link } from "react-router-dom";
import "./style/footer.scss";
function FooterAr() {
  return (
    <footer className="footer-container py-4">
      <div className="container px-lg-5">
        <div className="footer-text d-flex justify-content-between">
          <div className="copyright">&copy;2025 جميع الحقوق محفوظة</div>
          <div className="social-media">
            <div className="icons">
              <Link to="#">
                <i className="fa-brands fa-facebook-f"></i>
              </Link>
              <Link to="#">
                <i className="fa-brands fa-linkedin-in"></i>
              </Link>
              <Link to="https://wa.me/966593072004" target="_blank">
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
