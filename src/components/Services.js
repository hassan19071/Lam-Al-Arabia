import React from "react";
import Accounting from "../assets/accounting.jpeg";
import Consulting from "../assets/consulting.jpeg";
import Tax from "../assets/tax.jpeg";
import Certificate from "../assets/certificate.jpg";
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
              <h3>Issuance of Local Content Certificate</h3>
              <p>
                This service is designed to assess the proportion of local
                content within an entity, enabling the issuance of a Local
                Content Certificate. The process focuses on evaluating key local
                content components to ensure compliance and certification.
              </p>
            </div>
            <Link to="/services/Issuance-of-Local-Content-Certificate">
              Learn More
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Services;
