import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import MiniHero from "../components/MiniHero";
import ContactInfo from "../components/ContactInfo";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import "../components/style/service-details.scss";
function FeasibilityStudy() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Feasibility Study Services - Lam Al Arabia</title>
        <meta
          name="description"
          content="Lam Al Arabia offers detailed feasibility study services to assess the viability of your construction projects. We provide market, technical, and financial analysis to ensure project success."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Feasibility Study Services - Lam Al Arabia"
        />
        <meta
          property="og:description"
          content="Ensure the success of your construction projects with Lam Al Arabia's comprehensive feasibility studies. We provide in-depth market, financial, and technical analysis to help you make informed decisions."
        />
        <meta
          property="og:url"
          content="https://lam.com.sa/services/feasibility-study-services"
        />
      </Helmet>

      <Navbar page="feasibility" />
      <MiniHero title="Feasibility Study Services" />

      <div className="container mx-auto px-lg-5 py-5 service-details">
        <h2 className="text-3xl font-bold mb-4">Feasibility Study Services</h2>
        <p className="mb-6">
          Our feasibility study services help businesses assess the practicality
          and profitability of construction and development projects. We provide
          in-depth analysis and actionable insights, enabling you to make
          well-informed investment decisions.
        </p>
        <h3>Our Comprehensive Services</h3>
        <ul className="space-y-4 list-disc pl-5">
          <li>
            <strong>Market Analysis:</strong> Evaluating market demand,
            competition, and potential growth opportunities.
          </li>
          <li>
            <strong>Technical Feasibility:</strong> Assessing the technical
            requirements, resources, and infrastructure needed for the project.
          </li>
          <li>
            <strong>Financial Analysis:</strong> Providing detailed financial
            projections, including cost estimation, revenue forecasts, and ROI
            analysis.
          </li>
          <li>
            <strong>Risk Assessment:</strong> Identifying potential risks and
            proposing mitigation strategies to ensure project success.
          </li>
          <li>
            <strong>Regulatory Compliance Review:</strong> Ensuring your project
            meets all legal and regulatory requirements.
          </li>
        </ul>

        <div className="mt-8">
          <h3 className="text-2xl font-bold">Why Choose Us?</h3>
          <p className="mt-2">
            Our team of experts delivers accurate, thorough, and customized
            feasibility studies tailored to your specific needs. We help you
            minimize risks, optimize resources, and maximize project success.
          </p>
        </div>

        <div className="mt-6">
          <p className="font-semibold">
            Contact us today to learn more about how our feasibility study
            services can support your business growth.
          </p>
        </div>
      </div>

      <ContactInfo />
      <Footer />
    </>
  );
}

export default FeasibilityStudy;
