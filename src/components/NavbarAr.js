import React from "react";
import { Link } from "react-router-dom";
import EnglishIcon from "../assets/english.png";
import Logo from "../assets/lam logo.png";
import "./style/navbar.scss";

function NavbarAr({ page }) {
  return (
    <nav className="navbar navbar-expand-lg bg-white py-2">
      <div className="container">
        <Link className="navbar-brand me-0" to="/ar">
          <img
            src={Logo}
            alt="Lam Al Arabia professional consulting company Logo"
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
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav  mb-2 mb-lg-0 me-auto">
            <li className="nav-item">
              <Link
                className={page === "home" ? "nav-link active" : "nav-link"}
                aria-current="page"
                to={"/ar"}
              >
                الرئيسية
              </Link>
            </li>
            <li className="nav-item mt-lg-0 mt-1">
              <Link
                className={page === "about" ? "nav-link active" : "nav-link"}
                to="/ar/من-نحن"
              >
                من نحن
              </Link>
            </li>
            <li className="nav-item mt-lg-0 mt-1 dropdown">
              <Link
                className={
                  page === "services"
                    ? "nav-link active dropdown-toggle"
                    : "nav-link dropdown-toggle"
                }
                to="/ar/خدماتنا"
              >
                خدماتنا
              </Link>
              <ul className="dropdown-menu text-end">
                <li>
                  <Link
                    className={
                      page === "accounting"
                        ? "dropdown-item active"
                        : "dropdown-item"
                    }
                    to="/ar/خدماتنا/accounting-and-bookkeeping-services"
                  >
                    خدمات المحاسبة ومسك الدفاتر
                  </Link>
                </li>
                <li>
                  <Link
                    className={
                      page === "zakat and tax"
                        ? "dropdown-item active"
                        : "dropdown-item"
                    }
                    to="/ar/خدماتنا/zakkat-and-tax-services"
                  >
                    خدمات الزكاة والضرائب
                  </Link>
                </li>
                <li>
                  <Link
                    className={
                      page === "consulting"
                        ? "dropdown-item active"
                        : "dropdown-item"
                    }
                    to="/ar/خدماتنا/financial-consulting"
                  >
                    الاستشارات المالية
                  </Link>
                </li>
                <li>
                  <Link
                    className={
                      page === "certificate"
                        ? "dropdown-item active"
                        : "dropdown-item"
                    }
                    to="/ar/خدماتنا/contractor-classification-certificate-issuance/"
                  >
                    إصدار شهادة تصنيف المقاولين
                  </Link>
                </li>
                <li>
                  <Link
                    className={
                      page === "company"
                        ? "dropdown-item active"
                        : "dropdown-item"
                    }
                    to="/ar/خدماتنا/company-formation-services/"
                  >
                    تأسيس الشركات
                  </Link>
                </li>
                <li>
                  <Link
                    className={
                      page === "financing"
                        ? "dropdown-item active"
                        : "dropdown-item"
                    }
                    to="/ar/خدماتنا/financing-services/"
                  >
                    خدمات التمويل
                  </Link>
                </li>
                <li>
                  <Link
                    className={
                      page === "feasibility"
                        ? "dropdown-item active"
                        : "dropdown-item"
                    }
                    to="/ar/خدماتنا/feasibility-studies-services/"
                  >
                    دراسات الجدوى
                  </Link>
                </li>
                <li>
                  <Link
                    className={
                      page === "accounts-systems-structuring"
                        ? "dropdown-item active"
                        : "dropdown-item"
                    }
                    to="/ar/خدماتنا/accounts-systems-structuring/"
                  >
                    هيكلة الحسابات والأنظمة
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item position-relative">
              <Link className="nav-link d-flex align-items-center" to="/en">
                <span className="ms-1">English</span>
                <img src={EnglishIcon} alt="arabic language" />{" "}
              </Link>
            </li>
            <li className="me-lg-4 contact nav-item ms-0">
              <Link className="nav-link text-center" to="/ar/تواصل-معنا">
                تواصل معنا
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarAr;
