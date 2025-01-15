import React from "react";
import Navbar from "../components/Navbar";
import MiniHero from "../components/MiniHero";
import ServiceDetails from "../components/ServiceDetails";
import ContactInfo from "../components/ContactInfo";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet"; // Import React Helmet

function FeasibilityStudy() {
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
          content="https://yourwebsite.com/services/feasibility-study-services"
        />
      </Helmet>

      <Navbar page="feasibility" />
      <MiniHero title="Feasibility Study Services" />
      <ServiceDetails
        serviceTitle="Feasibility Study Services"
        briefDescription="Our feasibility study services help businesses assess the practicality and profitability of construction and development projects. We provide in-depth analysis and actionable insights, enabling you to make well-informed investment decisions."
        serviceInclude1Title="Market Analysis:"
        serviceInclude1Description="Evaluating market demand, competition, and potential growth opportunities."
        serviceInclude2Title="Technical Feasibility:"
        serviceInclude2Description="Assessing the technical requirements, resources, and infrastructure needed for the project."
        serviceInclude3Title="Financial Analysis:"
        serviceInclude3Description="Providing detailed financial projections, including cost estimation, revenue forecasts, and ROI analysis."
        serviceInclude4Title="Risk Assessment:"
        serviceInclude4Description="Identifying potential risks and proposing mitigation strategies to ensure project success."
        serviceInclude5Title="Regulatory Compliance Review:"
        serviceInclude5Description="Ensuring your project meets all legal and regulatory requirements."
        whyUsP="Our team of experts delivers accurate, thorough, and customized feasibility studies tailored to your specific needs. We help you minimize risks, optimize resources, and maximize project success."
        contactMsg="Contact us today to learn more about how our feasibility study services can support your business growth."
      />
      <ContactInfo />
      <Footer />
    </>
  );
}

export default FeasibilityStudy;
