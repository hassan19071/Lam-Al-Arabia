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
        <title>Issuance of Local Content Certificate - Lam Al Arabia</title>
        <meta
          name="description"
          content="Lam Al Arabia provides end-to-end support for obtaining the Local Content Certificate in Saudi Arabia, helping businesses demonstrate compliance with local content requirements."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Issuance of Local Content Certificate - Lam Al Arabia"
        />
        <meta
          property="og:description"
          content="Get assistance in obtaining the Local Content Certificate and maximize your eligibility for government contracts and incentives with Lam Al Arabia."
        />
        <meta property="og:image" content="/path-to-your-image.jpg" />{" "}
        {/* Replace with actual image */}
        <meta
          property="og:url"
          content="https://yourwebsite.com/services/issuance-of-local-content-certificate"
        />
      </Helmet>
      <Navbar />
      <MiniHero title="Issuance of Local Content Certificate" />
      <ServiceDetails
        serviceTitle="Issuance of Local Content Certificate"
        briefDescription="Our local content certificate issuance service helps businesses demonstrate compliance with local content requirements in Saudi Arabia. We provide end-to-end support in obtaining the certificate, ensuring that your organization maximizes its local contribution and qualifies for government contracts and incentives."
        serviceInclude1Title="Assessment of Local Content:"
        serviceInclude1Description="Evaluating your organization’s local content in terms of goods, services, workforce, and assets to ensure compliance with local content guidelines."
        serviceInclude2Title="Preparation of Required Documentation:"
        serviceInclude2Description="Assisting in the preparation and submission of all necessary documentation for the local content certificate."
        serviceInclude3Title="Audit Support:"
        serviceInclude3Description="Providing support during local content audits by government or regulatory authorities."
        serviceInclude4Title="Consultation on Local Content Optimization:"
        serviceInclude4Description="Advising on strategies to increase local content and improve your eligibility for future contracts and initiatives."
        serviceInclude5Title="Periodic Reporting and Compliance Review:"
        serviceInclude5Description="Offering periodic reviews and reports to ensure continued compliance with local content regulations and standards."
        whyUsP="Our dedicated team ensures that your organization meets local content guidelines with accuracy and confidentiality. We are committed to maximizing your eligibility for government contracts and initiatives."
        contactMsg="Contact us today to learn more about how our local content certificate services can support your business growth and success."
      />
      <ContactInfo />
      <Footer />
    </>
  );
}

export default Certificate;
