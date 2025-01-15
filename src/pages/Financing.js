import React from "react";
import Navbar from "../components/Navbar";
import MiniHero from "../components/MiniHero";
import ServiceDetails from "../components/ServiceDetails";
import ContactInfo from "../components/ContactInfo";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet"; // Import React Helmet

function Financing() {
  return (
    <>
      <Helmet>
        <title>Financing Services - Lam Al Arabia</title>
        <meta
          name="description"
          content="Lam Al Arabia provides tailored financing solutions to help businesses secure the funds needed for growth and construction projects. We guide you through the financing process for optimal results."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Financing Services - Lam Al Arabia"
        />
        <meta
          property="og:description"
          content="Unlock financing opportunities with Lam Al Arabia's expert guidance. We offer tailored financing solutions to support your business and construction projects with flexible terms."
        />
        <meta
          property="og:url"
          content="https://yourwebsite.com/services/financing-services"
        />
      </Helmet>

      <Navbar page="financing" />
      <MiniHero title="Financing Services" />
      <ServiceDetails
        serviceTitle="Financing Services"
        briefDescription="Our financing services help construction companies and businesses secure the funding they need for project execution and growth. We provide end-to-end support, offering tailored financial solutions that meet your specific requirements and improve your cash flow."
        serviceInclude1Title="Funding Assessment:"
        serviceInclude1Description="Evaluating your business’s financial needs to recommend the best financing options."
        serviceInclude2Title="Loan Application Support:"
        serviceInclude2Description="Assisting with the preparation and submission of loan applications to financial institutions."
        serviceInclude3Title="Financial Planning and Strategy:"
        serviceInclude3Description="Providing expert guidance on managing funds, optimizing cash flow, and minimizing financial risks."
        serviceInclude4Title="Consultation on Financing Solutions:"
        serviceInclude4Description="Advising on a range of financing options, including bank loans, leasing, and alternative funding sources."
        serviceInclude5Title="Ongoing Financial Monitoring:"
        serviceInclude5Description="Offering periodic reviews and reports to ensure the efficient use of funds and continued financial health."
        whyUsP="Our experienced team is committed to helping you secure the right financing with minimal hassle. We work closely with you to ensure your funding needs are met, enabling you to focus on growing your business and completing your projects successfully."
        contactMsg="Contact us today to learn more about how our financing services can support your business growth."
      />
      <ContactInfo />
      <Footer />
    </>
  );
}

export default Financing;
