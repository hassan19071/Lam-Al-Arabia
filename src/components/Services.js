import React from "react";
import Accounting from "../assets/accounting.jpeg";
import Consulting from "../assets/consulting.jpeg";
import Tax from "../assets/tax.jpeg";
import Certificate from "../assets/certificate.jpeg";
import Feasibility from "../assets/feasibility-study.jpeg";
import Formation from "../assets/company-formation.jpeg";
import Financing from "../assets/financing.jpeg";
import AccountingSystems from "../assets/Accounts & Systems Structuring.jpeg";
import { Link } from "react-router-dom";
import "./style/service.scss";

function Services() {
  return (
    <div className="services py-5 mt-4">
      <div className="container px-lg-5">
        <div className="head-section-title text-center">
          <span className="over-title">Empowering Your Business</span>
          <h2>
            <span className="first-lines"></span>
            <span className="title">What We Offer</span>
            <span className="last-lines"></span>
          </h2>
          <p>
            We provide a diverse array of services to our clients, specializing
            in auditing, financial management, operations management, and
            routine accounting tasks. Our offerings are organized into the
            following key service categories:
          </p>
        </div>
        <div className="services-grid mt-5">
          <section className="service">
            <div className="service-img">
              <img
                loading="lazy"
                src={Accounting}
                alt="Accounting and bookkeeping services"
              />
            </div>
            <div className="service-information">
              <h3>Accounting and Bookkeeping Services</h3>
              <p>
                We provide accurate and timely accounting and bookkeeping
                services tailored to meet the needs of our clients. By
                delivering reliable financial data, we enable organizations to
                assess their current performance and make informed predictions
                for future growth.
              </p>
            </div>
            <Link to="/services/accounting-and-bookkeeping-services">
              Learn More
            </Link>
          </section>

          <section className="service">
            <div className="service-img">
              <img loading="lazy" src={Tax} alt="Zakat and tax services" />
            </div>
            <div className="service-information">
              <h3>Zakat and Tax Services</h3>
              <p>
                Recognizing the critical importance of Zakat and tax compliance,
                we are committed to offering expert advice and guidance. Our
                team ensures that clients receive the most effective strategies
                and support for all their Zakat and tax-related matters.
              </p>
            </div>
            <Link to="/services/zakkat-and-tax-services">Learn More</Link>
          </section>

          <section className="service">
            <div className="service-img">
              <img
                loading="lazy"
                src={Consulting}
                alt="Financial consultation services"
              />
            </div>
            <div className="service-information">
              <h3>Financial Consultations</h3>
              <p>
                We offer expert advisory services and strategic recommendations
                designed to enhance efficiency, ensure quality, and uphold the
                highest standards of professionalism, helping organizations
                streamline and optimize their operations.
              </p>
            </div>
            <Link to="/services/financial-consulting">Learn More</Link>
          </section>

          <section className="service">
            <div className="service-img">
              <img
                loading="lazy"
                src={Certificate}
                alt="Issuance of Local Content Certificate"
              />
            </div>
            <div className="service-information">
              <h3>Contractor Classification Certificate Issuance</h3>
              <p>
                We assist contractors in obtaining official classification
                certificates, ensuring they meet industry standards and qualify
                for major construction projects. Our streamlined process helps
                boost credibility and expand business opportunities.
              </p>
            </div>
            <Link to="/services/contractor-classification-certificate-issuance">
              Learn More
            </Link>
          </section>

          <section className="service">
            <div className="service-img">
              <img
                loading="lazy"
                src={Formation}
                alt="Company Formation Services"
              />
            </div>
            <div className="service-information">
              <h3>Company Formation Services</h3>
              <p>
                We provide comprehensive support for establishing new companies,
                handling all legal, administrative, and documentation
                requirements. Our service ensures a smooth setup process,
                allowing clients to focus on growing their business.
              </p>
            </div>
            <Link to="/services/company-formation-services/">Learn More</Link>
          </section>

          <section className="service">
            <div className="service-img">
              <img loading="lazy" src={Financing} alt="Financing Services" />
            </div>
            <div className="service-information">
              <h3>Financing Services</h3>
              <p>
                We offer tailored financing solutions to support construction
                projects and business growth. Our service helps clients secure
                the necessary funds with flexible terms and expert guidance.
              </p>
            </div>
            <Link to="/services/financing-services/">Learn More</Link>
          </section>

          <section className="service">
            <div className="service-img">
              <img
                loading="lazy"
                src={Feasibility}
                alt="feasibility studies services"
              />
            </div>
            <div className="service-information">
              <h3>Feasibility Studies Services</h3>
              <p>
                We conduct detailed feasibility studies to assess the viability
                of construction projects. Our analysis covers technical,
                financial, and market aspects, helping clients make informed
                decisions and minimize risks.
              </p>
            </div>
            <Link to="/services/feasibility-studies-services/">Learn More</Link>
          </section>
          <section className="service">
            <div className="service-img">
              <img
                loading="lazy"
                src={AccountingSystems}
                alt="accounts & systems structuring service"
              />
            </div>
            <div className="service-information">
              <h3>Accounts & Systems Structuring Service</h3>
              <p>
                We ensure efficient financial organization by setting up
                accounts, developing systems, and enhancing reporting to help
                businesses optimize operations and make informed decisions.
              </p>
            </div>
            <Link to="/services/accounts-systems-structuring/">Learn More</Link>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Services;
