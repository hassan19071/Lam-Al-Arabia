import React, { useEffect, useState } from "react";
import HeroImg01 from "../assets/hero-bg01.jpeg";
import HeroImg02 from "../assets/hero-bg02.jpeg";
import { Link } from "react-router-dom";
import "./style/hero.scss";
function HeroSection() {
  let [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    <div className="hero-container">
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={HeroImg01}
              className="d-block w-100"
              alt="professional consulting"
              loading="lazy"
            />
            <div className="overlay position-absolute"></div>
            <div
              className={
                loaded
                  ? "hero-text carousel-caption animate"
                  : "hero-text carousel-caption"
              }
            >
              <h1>Empowering Your Business with Expert Solutions</h1>
              <p>
                At Lam Alarabia Professional Consulting, we provide strategic
                guidance and tailored solutions to help businesses thrive in a
                competitive market. Whether you're looking to optimize
                operations, drive growth, or navigate complex challenges, we are
                your trusted partner
              </p>
              <Link to="/contact-us">
                Get In Touch <i className="fa-solid fa-angles-right"></i>
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={HeroImg02}
              className="d-block w-100"
              alt="professional consulting"
              loading="lazy"
            />
            <div className="overlay position-absolute"></div>
            <div
              className={
                loaded
                  ? "hero-text carousel-caption animate"
                  : "hero-text carousel-caption"
              }
            >
              <h1>Your Trusted Partner for Strategic Success</h1>
              <p>
                We put your business goals first. Our dedicated team of
                consultants offers personalized solutions to ensure your
                organization thrives. Let's create a roadmap for your future
                success, together.
              </p>
              <Link to="/contact-us">
                Get In Touch <i className="fa-solid fa-angles-right"></i>
              </Link>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
