import React from "react";
import { Link } from "react-router-dom";
import ArabicIcon from "../assets/arabic.png";
import Logo from "../assets/logo.png";
import "./style/navbar.scss";

function Navbar({ page }) {
  return (
    <nav className="navbar navbar-expand-lg bg-white py-0">
      <div className="container">
        <Link className="navbar-brand me-lg-2" to="/">
          <img
            src={Logo}
            alt="Lam Alarabia for professional consulting company Logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-start">
            <li className="nav-item">
              <Link
                className={page === "home" ? "nav-link active" : "nav-link"}
                aria-current="page"
                to={"/"}
              >
                Home
              </Link>
            </li>
            <li className="nav-item mt-lg-0 mt-1">
              <Link
                className={page === "about" ? "nav-link active" : "nav-link"}
                to="/about-us"
              >
                About Us
              </Link>
            </li>
            {/* Dropdown for Services */}
            <li className="nav-item dropdown mt-lg-0 mt-1">
              <Link
                className={page === "services" ? "nav-link active" : "nav-link"}
                to="/services"
                id="servicesDropdown"
              >
                Services <i className="fa-solid fa-caret-down ms-1"></i>
              </Link>
              <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                <li>
                  <Link
                    className={
                      page === "accounting"
                        ? "dropdown-item active"
                        : "dropdown-item"
                    }
                    to="/services/accounting-and-bookkeeping-services"
                  >
                    Accounting & Bookkeeping
                  </Link>
                </li>
                <li>
                  <Link
                    className={
                      page === "zakat and tax"
                        ? "dropdown-item active"
                        : "dropdown-item"
                    }
                    to="/services/zakkat-and-tax-services"
                  >
                    Zakat & Tax Services
                  </Link>
                </li>
                <li>
                  <Link
                    className={
                      page === "consulting"
                        ? "dropdown-item active"
                        : "dropdown-item"
                    }
                    to="/services/financial-consulting"
                  >
                    Financial Consulting
                  </Link>
                </li>
                <li>
                  <Link
                    className={
                      page === "certificate"
                        ? "dropdown-item active"
                        : "dropdown-item"
                    }
                    to="/services/contractor-classification-certificate-issuance/"
                  >
                    Contractor Classification Certificate
                  </Link>
                </li>
                <li>
                  <Link
                    className={
                      page === "financing"
                        ? "dropdown-item active"
                        : "dropdown-item"
                    }
                    to="/services/financing-services/"
                  >
                    Financing Services
                  </Link>
                </li>
                <li>
                  <Link
                    className={
                      page === "company"
                        ? "dropdown-item active"
                        : "dropdown-item"
                    }
                    to="/services/company-formation-services/"
                  >
                    Company Formation
                  </Link>
                </li>
                <li>
                  <Link
                    className={
                      page === "feasibility"
                        ? "dropdown-item active"
                        : "dropdown-item"
                    }
                    to="/services/feasibility-studies-services/"
                  >
                    Feasibility Study
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item mt-lg-0 mt-1">
              <Link
                className={page === "contact" ? "nav-link active" : "nav-link"}
                to="/contact-us"
              >
                Contact Us
              </Link>
            </li>
            <li className="nav-item position-relative">
              <Link className="nav-link d-flex align-items-center" to="/ar">
                <img src={ArabicIcon} alt="arabic language" />{" "}
                <span className="ms-1">العربية</span>
              </Link>
            </li>
          </ul>
          <div className="contact-infos d-flex align-items-center mt-lg-0 mt-3">
            <Link className="nav-link me-4 contact" to="/contact-us">
              Contact Us
            </Link>
            <Link className="nav-link phone" to="tel:+966536477046">
              <i className="fa-solid fa-phone"></i> +966 53 647 7046
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
