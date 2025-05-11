import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import MiniHero from "../components/MiniHero";
import ContactInfo from "../components/ContactInfo";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet"; // Import React Helmet
import "../components/style/service-details.scss";
function CompanyFormation() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
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
          content="https://lam.com.sa/services/company-formation-services"
        />
      </Helmet>

      <Navbar page="company" />
      <MiniHero title="Company Formation Services" />

      <div className="container mx-auto px-lg-5 py-5 service-details">
        <h2 className="text-3xl font-bold mb-4">Company Formation Services</h2>
        <p className="mb-6">
          Our company formation services provide complete support for
          establishing new businesses, ensuring a hassle-free setup process.
          From legal registration to administrative procedures, we handle every
          step to help you launch your company quickly and efficiently.
        </p>
        <h3>Our Comprehensive Services</h3>
        <ul className="space-y-4 list-disc pl-5">
          <li>
            <strong>Business Structure Consultation:</strong> Advising on the
            best legal structure (LLC, joint-stock, etc.) to fit your business
            goals.
          </li>
          <li>
            <strong>Legal Registration Support:</strong> Assisting with business
            registration, licensing, and compliance with local regulations.
          </li>
          <li>
            <strong>Document Preparation:</strong> Preparing and submitting all
            required documentation for company formation.
          </li>
          <li>
            <strong>Bank Account Setup:</strong> Facilitating the opening of
            corporate bank accounts.
          </li>
          <li>
            <strong>Post-Formation Services:</strong> Offering continued support
            with ongoing regulatory compliance and reporting.
          </li>
        </ul>

        <div className="mt-8">
          <h3 className="text-2xl font-bold">Why Choose Us?</h3>
          <p className="mt-2">
            With our expertise and personalized approach, we ensure a smooth
            company formation process, saving you time and effort. Our goal is
            to help you focus on building and growing your business from day
            one.
          </p>
        </div>

        <div className="mt-6">
          <p className="font-semibold">
            Contact us today to learn more about our company formation services
            and how we can help bring your business vision to life.
          </p>
        </div>
      </div>

      <ContactInfo />
      <Footer />
    </>
  );
}

export default CompanyFormation;
