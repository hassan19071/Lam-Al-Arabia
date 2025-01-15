import React from "react";
import Navbar from "../components/Navbar";
import MiniHero from "../components/MiniHero";
import ServiceDetails from "../components/ServiceDetails";
import ContactInfo from "../components/ContactInfo";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet"; // Import React Helmet

function ZakkatATax() {
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
          content="Discover how Lam Al Arabia’s zakat and tax services ensure your business is compliant with Saudi tax regulations, while optimizing financial performance."
        />
        <meta property="og:image" content="/path-to-your-image.jpg" />{" "}
        {/* Add a relevant image */}
        <meta
          property="og:url"
          content="https://yourwebsite.com/services/zakat-and-tax"
        />
      </Helmet>
      <Navbar page="zakat and tax" />
      <MiniHero title="Zakkat & Tax Services" />
      <ServiceDetails
        serviceTitle="Zakat and Tax Services"
        briefDescription="We understand that zakat and tax compliance is critical for businesses operating in Saudi Arabia. Our specialized zakat and tax services ensure that your organization meets all regulatory requirements while optimizing tax efficiency."
        serviceInclude1Title="Zakat Compliance and Filing:"
        serviceInclude1Description="Preparing zakat declarations in accordance with the regulations of the Zakat, Tax, and Customs Authority (ZATCA) and ensuring accurate calculation of zakat obligations based on the latest guidelines."
        serviceInclude2Title="Tax Advisory Services:"
        serviceInclude2Description="Offering expert advice on value-added tax (VAT) regulations, withholding tax, and corporate income tax, and helping businesses understand and implement effective tax strategies to minimize liabilities."
        serviceInclude3Title="VAT Registration and Returns:"
        serviceInclude3Description="Assisting in VAT registration with the authorities, and preparing and filing VAT returns to ensure compliance with Saudi VAT regulations."
        serviceInclude4Title="Tax Audit Support:"
        serviceInclude4Description="Representing clients during tax audits and providing necessary documentation, and ensuring smooth handling of tax audits and resolving any issues with the authorities."
        serviceInclude5Title="Zakat and Tax Planning"
        serviceInclude5Description="Developing zakat and tax planning strategies to optimize the financial position of your business, and ensuring proactive measures are taken to avoid non-compliance penalties."
        whyUsP="Our dedicated team of accounting professionals ensures that your financial data is handled with utmost accuracy and confidentiality. We are committed to helping your organization achieve financial clarity, improve operational efficiency, and maintain compliance with all applicable regulations."
        contactMsg="Contact us today to learn more about how our accounting, bookkeeping, zakat, and tax services can support your business growth and success."
      />
      <ContactInfo />
      <Footer />
    </>
  );
}

export default ZakkatATax;
