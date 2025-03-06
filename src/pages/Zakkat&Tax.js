import React from "react";
import Navbar from "../components/Navbar";
import MiniHero from "../components/MiniHero";
import ContactInfo from "../components/ContactInfo";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import "../components/style/service-details.scss";
function ZakatTaxServices() {
  return (
    <>
      <Helmet>
        <title>Zakat and Tax Services - Lam Al Arabia</title>
        <meta
          name="description"
          content="Lam Al Arabia offers expert zakat and tax services to help businesses comply with Saudi Arabian regulations. Get assistance with zakat filings, VAT registration, tax advisory, and more."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Zakat and Tax Services - Lam Al Arabia"
        />
        <meta
          property="og:description"
          content="Discover how Lam Al Arabia’s zakat and tax services ensure your business is compliant with Saudi tax regulations while optimizing financial performance."
        />
        <meta
          property="og:url"
          content="https://yourwebsite.com/services/zakat-and-tax"
        />
      </Helmet>

      <Navbar page="zakat-and-tax" />
      <MiniHero title="Zakat & Tax Services" />

      <div className="container mx-auto px-lg-5 py-5 service-details">
        <h2 className="text-3xl font-bold mb-4">Zakat and Tax Services</h2>
        <p className="mb-6">
          We understand that zakat and tax compliance is critical for businesses
          operating in Saudi Arabia. Our specialized zakat and tax services
          ensure that your organization meets all regulatory requirements while
          optimizing tax efficiency.
        </p>
        <h3>Our Comprehensive Services</h3>
        <ul className="space-y-4 list-disc pl-5">
          <li>
            <strong>Zakat Compliance and Filing:</strong> Preparing zakat
            declarations in accordance with the regulations of the Zakat, Tax,
            and Customs Authority (ZATCA) and ensuring accurate calculation of
            zakat obligations based on the latest guidelines.
          </li>
          <li>
            <strong>Tax Advisory Services:</strong> Offering expert advice on
            value-added tax (VAT) regulations, withholding tax, and corporate
            income tax, and helping businesses implement effective tax
            strategies to minimize liabilities.
          </li>
          <li>
            <strong>VAT Registration and Returns:</strong> Assisting in VAT
            registration with the authorities, and preparing and filing VAT
            returns to ensure compliance with Saudi VAT regulations.
          </li>
          <li>
            <strong>Tax Audit Support:</strong> Representing clients during tax
            audits, providing necessary documentation, and ensuring smooth
            handling of tax audits and resolving any issues with the
            authorities.
          </li>
          <li>
            <strong>Zakat and Tax Planning:</strong> Developing zakat and tax
            planning strategies to optimize the financial position of your
            business, ensuring proactive measures are taken to avoid
            non-compliance penalties.
          </li>
        </ul>

        <div className="mt-8">
          <h3 className="text-2xl font-bold">Why Choose Us?</h3>
          <p className="mt-2">
            Our dedicated team of accounting professionals ensures that your
            financial data is handled with utmost accuracy and confidentiality.
            We are committed to helping your organization achieve financial
            clarity, improve operational efficiency, and maintain compliance
            with all applicable regulations.
          </p>
        </div>

        <div className="mt-6">
          <p className="font-semibold">
            Contact us today to learn more about how our accounting,
            bookkeeping, zakat, and tax services can support your business
            growth and success.
          </p>
        </div>
      </div>

      <ContactInfo />
      <Footer />
    </>
  );
}

export default ZakatTaxServices;
