import React from "react";
import "./style/about.scss";
import AboutImg from "../assets/about-us.jpeg";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <section className="about-us py-5">
      <div className="container px-lg-5 py-5">
        <div className="row">
          <div className="col-lg-6 pe-lg-3">
            <div className="about-us-img">
              <img
                src={AboutImg}
                alt="Professional consulting services"
                width="100%"
                loading="lazy"
                sizes="(max-width: 480px) 480px, (max-width: 768px) 800px, 1200px" // Responsive sizes for mobile, tablet, and desktop
              />
            </div>
          </div>
          <div className="col-lg-6 mt-lg-0 mt-4">
            <div className="about-us-text">
              <div className="head-section-title">
                <span className="over-title">Get To Know Us</span>
                <h2>
                  <span className="first-lines"></span>
                  <span className="title">About Lam Al Arabia</span>
                  <span className="last-lines"></span>
                </h2>
              </div>
              <p className="mt-3">
                Lam Alarabia Professional Consulting is a trusted consulting
                firm dedicated to providing tailored business solutions across
                various industries. We specialize in delivering expert guidance,
                strategic planning, and innovative solutions to help businesses
                grow, optimize operations, and navigate complex challenges. Our
                experienced consultants work closely with clients to develop
                actionable strategies that drive sustainable success in today’s
                competitive market.
              </p>
              <p>
                We empower businesses to achieve sustainable growth through
                innovative strategies and expert guidance. We are committed to
                delivering tailored solutions that drive success and help
                organizations navigate today’s dynamic market.
              </p>
              <Link to="/about-us">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
