import React from "react";
import Navbar from "../components/Navbar";
import MiniHero from "../components/MiniHero";
import ServiceDetails from "../components/ServiceDetails";
import ContactInfo from "../components/ContactInfo";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet"; // Import React Helmet

function Certificate() {
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
      <ServiceDetails
        serviceTitle="Contractor Classification Certificate Issuance"
        briefDescription="Our contractor classification certificate issuance service helps construction companies demonstrate their qualifications, financial stability, and technical expertise. We provide end-to-end support to ensure a smooth process, enabling your organization to qualify for government and private sector contracts.Our local content certificate issuance service helps businesses demonstrate compliance with local content requirements in Saudi Arabia. We provide end-to-end support in obtaining the certificate, ensuring that your organization maximizes its local contribution and qualifies for government contracts and incentives."
        serviceInclude1Title="Company Assessment:"
        serviceInclude1Description="Evaluating your company's technical, financial, and operational capabilities to meet classification standards."
        serviceInclude2Title="Preparation of Required Documentation:"
        serviceInclude2Description="Assisting with the preparation and submission of all necessary documents for classification certification."
        serviceInclude3Title="Audit Support:"
        serviceInclude3Description="Providing guidance during audits by classification authorities to ensure compliance."
        serviceInclude4Title="Consultation on Classification Improvement:"
        serviceInclude4Description="Offering advice on improving your classification level for greater eligibility in high-value projects."
        serviceInclude5Title="Renewal and Periodic Review:"
        serviceInclude5Description="Assisting with renewal processes and periodic compliance reviews to maintain your classification status."
        whyUsP="Our expert team ensures accurate, efficient, and confidential handling of your classification needs. We are dedicated to helping you achieve higher project eligibility and enhance your company’s market reputation."
        contactMsg="Contact us today to learn more about how our contractor classification certificate issuance service can support your business growth."
      />
      <ContactInfo />
      <Footer />
    </>
  );
}

export default Certificate;
