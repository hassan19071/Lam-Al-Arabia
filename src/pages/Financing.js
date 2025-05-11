import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import MiniHero from "../components/MiniHero";
import ContactInfo from "../components/ContactInfo";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import "../components/style/service-details.scss";
function Financing() {
  useEffect(() => {
      // Scroll to the top of the page when the component mounts
      window.scrollTo(0, 0);
    }, []);
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
          content="https://lam.com.sa/services/financing-services"
        />
      </Helmet>

      <Navbar page="financing" />
      <MiniHero title="Financing Services" />

      <div className="container mx-auto px-lg-5 py-5 service-details">
        <h2 className="text-3xl font-bold mb-4">Financing Services</h2>
        <p className="mb-6">
          Our financing services help construction companies and businesses secure the funding they need for project execution and growth. We provide end-to-end support, offering tailored financial solutions that meet your specific requirements and improve your cash flow.
        </p>
        <h3>Our Comprehensive Services</h3>
        <ul className="space-y-4 list-disc pl-5">
          <li>
            <strong>Funding Assessment:</strong> Evaluating your business’s financial needs to recommend the best financing options.
          </li>
          <li>
            <strong>Loan Application Support:</strong> Assisting with the preparation and submission of loan applications to financial institutions.
          </li>
          <li>
            <strong>Financial Planning and Strategy:</strong> Providing expert guidance on managing funds, optimizing cash flow, and minimizing financial risks.
          </li>
          <li>
            <strong>Consultation on Financing Solutions:</strong> Advising on a range of financing options, including bank loans, leasing, and alternative funding sources.
          </li>
          <li>
            <strong>Ongoing Financial Monitoring:</strong> Offering periodic reviews and reports to ensure the efficient use of funds and continued financial health.
          </li>
        </ul>

        <div className="mt-8">
          <h3 className="text-2xl font-bold">Why Choose Us?</h3>
          <p className="mt-2">
            Our experienced team is committed to helping you secure the right financing with minimal hassle. We work closely with you to ensure your funding needs are met, enabling you to focus on growing your business and completing your projects successfully.
          </p>
        </div>

        <div className="mt-6">
          <p className="font-semibold">Contact us today to learn more about how our financing services can support your business growth.</p>
        </div>
      </div>

      <ContactInfo />
      <Footer />
    </>
  );
}

export default Financing;
