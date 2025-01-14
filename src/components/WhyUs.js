import React from "react";
import WhyUsImg from "../assets/consulting.jpeg";
import "./style/why-us.scss";

function WhyUs() {
  return (
    <div className="why-us py-5">
      <div className="container px-lg-5">
        <div className="row">
          <div className="col-lg-6 pe-lg-4 order-lg-1 order-2">
            <div className="why-us-text">
              <div className="head-section-title">
                <span className="over-title">Your Trusted Partner</span>
                <h2>
                  <span className="first-lines"></span>
                  <span className="title">Why Choose Lam Al Arabia?</span>
                  <span className="last-lines"></span>
                </h2>
              </div>
              <ul>
                <li>
                  <strong>Proven Track Record:</strong> We have a history of
                  successfully helping businesses across diverse sectors achieve
                  their strategic objectives and overcome complex challenges.
                </li>
                <li>
                  <strong>Industry Expertise:</strong> Our consultants bring
                  years of experience across various industries, allowing us to
                  provide insights that are both relevant and actionable.
                </li>
                <li>
                  <strong>Tailored Solutions:</strong> We understand that
                  one-size-fits-all solutions don’t work. Our approach is to
                  offer bespoke strategies that address your unique challenges
                  and opportunities.
                </li>
                <li>
                  <strong>Sustainable Results:</strong> Our focus is on
                  delivering long-term, sustainable growth rather than
                  short-term fixes. We build solutions that stand the test of
                  time.
                </li>
                <li>
                  <strong>Global Perspective with Local Insight:</strong> We
                  combine global best practices with local market knowledge,
                  ensuring that our solutions are not only innovative but also
                  relevant and impactful within your specific business
                  environment.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 mb-lg-0 mb-4 order-lg-2 order-1">
            <div className="why-us-img">
              <img
                src={WhyUsImg}
                alt="Lam Al Arabia consulting team working on client success"
                loading="lazy"
                width="100%"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
