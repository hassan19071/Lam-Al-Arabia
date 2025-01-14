import React from "react";
import "./style/features.scss";
import ExpertiseIcon from "../assets/expert.png";
import FocusIcon from "../assets/focus.png";
import SolutionIcon from "../assets/solution.png";
import ConsultingIcon from "../assets/consulting.png";
import ThinkingIcon from "../assets/innovative-thinking.png";
import MethodsIcon from "../assets/methods.png";
import InsighsIcon from "../assets/insight.png";
import CostIcon from "../assets/investment.png";

// Reusable Feature component
function Feature({ icon, title, description, altText }) {
  return (
    <div className="feature d-flex">
      <div className="feature-icon me-3">
        <img src={icon} alt={altText} width="40px" />
      </div>
      <div className="feature-text">
        <h3 className="mt-0">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function FeaturesSection() {
  return (
    <div className="features-section">
      <div className="container px-lg-5">
        <div className="head-section-title">
          <span className="over-title">Discover Our Features</span>
          <h2>
            <span className="first-lines"></span>
            <span className="title">Our Key Features</span>
            <span className="last-lines"></span>
          </h2>
        </div>
        <div className="features-grid mt-4">
          <Feature
            icon={ExpertiseIcon}
            title="Expertise Across Industries"
            description="Years of experience in various industries, providing specialized insights and strategies."
            altText="Expertise across industries"
          />
          <Feature
            icon={SolutionIcon}
            title="Customized Solutions"
            description="Personalized services designed to meet your specific goals and challenges."
            altText="Customized solutions"
          />
          <Feature
            icon={MethodsIcon}
            title="Proven Track Record"
            description="Successful partnerships and measurable results to help your business grow."
            altText="Proven track record"
          />
          <Feature
            icon={ThinkingIcon}
            title="Innovative Strategies"
            description="Utilizing the latest trends and technology to keep you ahead of the competition."
            altText="Innovative strategies"
          />
          <Feature
            icon={ConsultingIcon}
            title="Dedicated Support"
            description="Ongoing support to ensure smooth implementation and continued success."
            altText="Dedicated support"
          />
          <Feature
            icon={InsighsIcon}
            title="Data-Driven Insights"
            description="We leverage data and research to help you make smart, competitive decisions."
            altText="Data-driven insights"
          />
          <Feature
            icon={CostIcon}
            title="Cost-Effective Solutions"
            description="We optimize resources to deliver maximum value and efficient growth with minimal overhead."
            altText="Cost-effective solutions"
          />
          <Feature
            icon={FocusIcon}
            title="Sustainability Focus"
            description="Eco-friendly practices and long-term strategies that ensure sustainable growth."
            altText="Sustainability focus"
          />
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;
