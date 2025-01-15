import React from "react";
import Navbar from "../components/Navbar";
import MiniHero from "../components/MiniHero";
import ServiceDetails from "../components/ServiceDetails";
import ContactInfo from "../components/ContactInfo";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet"; // Import React Helmet

function CompanyFormation() {
  return (
    <>
      <Helmet>
        <title>Company Formation Services - Lam Al Arabia</title>
        <meta
          name="description"
          content="Lam Al Arabia provides comprehensive company formation services, handling all legal, administrative, and documentation requirements to help businesses set up quickly and efficiently."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Company Formation Services - Lam Al Arabia"
        />
        <meta
          property="og:description"
          content="Start your business with ease through Lam Al Arabia's expert company formation services. We assist with registration, licensing, and all necessary documentation to ensure a smooth setup."
        />
        <meta
          property="og:url"
          content="https://yourwebsite.com/services/company-formation-services"
        />
      </Helmet>

      <Navbar page="company" />
      <MiniHero title="Company Formation Services" />
      <ServiceDetails
        serviceTitle="company formation Services"
        briefDescription="Our company formation services provide complete support for establishing new businesses, ensuring a hassle-free setup process. From legal registration to administrative procedures, we handle every step to help you launch your company quickly and efficiently."
        serviceInclude1Title="Business Structure Consultation:"
        serviceInclude1Description="Advising on the best legal structure (LLC, joint-stock, etc.) to fit your business goals."
        serviceInclude2Title="Legal Registration Support:"
        serviceInclude2Description="Assisting with business registration, licensing, and compliance with local regulations."
        serviceInclude3Title="Document Preparation:"
        serviceInclude3Description="Preparing and submitting all required documentation for company formation."
        serviceInclude4Title="Bank Account Setup:"
        serviceInclude4Description="Facilitating the opening of corporate bank accounts."
        serviceInclude5Title="Post-Formation Services:"
        serviceInclude5Description="Offering continued support with ongoing regulatory compliance and reporting."
        whyUsP="With our expertise and personalized approach, we ensure a smooth company formation process, saving you time and effort. Our goal is to help you focus on building and growing your business from day one."
        contactMsg="Contact us today to learn more about our company formation services and how we can help bring your business vision to life."
      />
      <ContactInfo />
      <Footer />
    </>
  );
}

export default CompanyFormation;
