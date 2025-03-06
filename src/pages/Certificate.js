import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import MiniHero from "../components/MiniHero";
import ContactInfo from "../components/ContactInfo";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import "../components/style/service-details.scss";
function Certificate() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>
          Contractor Classification Certificate Issuance Services - Lam Al
          Arabia
        </title>
        <meta
          name="description"
          content="Lam Al Arabia offers comprehensive support for obtaining Contractor Classification Certificates, helping construction companies qualify for high-value projects and government contracts."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Contractor Classification Certificate Issuance Services - Lam Al Arabia"
        />
        <meta
          property="og:description"
          content="Get expert assistance from Lam Al Arabia in obtaining Contractor Classification Certificates. We ensure a smooth process, helping your company qualify for government and private sector contracts."
        />
        <meta
          property="og:url"
          content="https://yourwebsite.com/services/contractor-classification-certificate-issuance"
        />
      </Helmet>

      <Navbar page="certificate" />
      <MiniHero title="Contractor Classification Certificate Issuance" />

      <div className="container mx-auto px-lg-5 py-5 service-details">
        <h2 className="text-3xl font-bold mb-4">
          Contractor Classification Certificate Issuance
        </h2>
        <p className="mb-6">
          Our contractor classification certificate issuance service helps
          construction companies demonstrate their qualifications, financial
          stability, and technical expertise. We provide end-to-end support to
          ensure a smooth process, enabling your organization to qualify for
          government and private sector contracts.
        </p>

        <h3>Our Comprehensive Services</h3>

        <ul className="space-y-4 list-disc pl-5">
          <li>
            <strong>Company Assessment:</strong> Evaluating your company's
            technical, financial, and operational capabilities to meet
            classification standards.
          </li>
          <li>
            <strong>Preparation of Required Documentation:</strong> Assisting
            with the preparation and submission of all necessary documents for
            classification certification.
          </li>
          <li>
            <strong>Audit Support:</strong> Providing guidance during audits by
            classification authorities to ensure compliance.
          </li>
          <li>
            <strong>Consultation on Classification Improvement:</strong>{" "}
            Offering advice on improving your classification level for greater
            eligibility in high-value projects.
          </li>
          <li>
            <strong>Renewal and Periodic Review:</strong> Assisting with renewal
            processes and periodic compliance reviews to maintain your
            classification status.
          </li>
        </ul>

        <div className="mt-8">
          <h3 className="text-2xl font-bold">Why Choose Us?</h3>
          <p className="mt-2">
            Our expert team ensures accurate, efficient, and confidential
            handling of your classification needs. We are dedicated to helping
            you achieve higher project eligibility and enhance your company’s
            market reputation.
          </p>
        </div>

        <div className="mt-6">
          <p className="font-semibold">
            Contact us today to learn more about how our contractor
            classification certificate issuance service can support your
            business growth.
          </p>
        </div>
      </div>

      <ContactInfo />
      <Footer />
    </>
  );
}

export default Certificate;
