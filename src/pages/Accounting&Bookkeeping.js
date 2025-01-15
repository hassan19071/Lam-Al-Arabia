import React from "react";
import Navbar from "../components/Navbar";
import MiniHero from "../components/MiniHero";
import ServiceDetails from "../components/ServiceDetails";
import ContactInfo from "../components/ContactInfo";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet"; // Import React Helmet

function AccountingABookkeeping() {
  return (
    <>
      <Helmet>
        <title>Accounting and Bookkeeping Services - Lam Al Arabia</title>
        <meta
          name="description"
          content="Explore Lam Al Arabia's professional accounting and bookkeeping services, designed to help your business manage financial data, reporting, payroll, and more."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Accounting and Bookkeeping Services - Lam Al Arabia"
        />
        <meta
          property="og:description"
          content="Professional accounting and bookkeeping services to help manage your business's financial data, including reporting, reconciliation, payroll, and more."
        />
        <meta
          property="og:url"
          content="https://yourwebsite.com/services/accounting-and-bookkeeping-services"
        />
      </Helmet>
      <Navbar page="accounting" />
      <MiniHero title={"Accounting And Bookkeeping Services"} />
      <ServiceDetails
        serviceTitle="Accounting And Bookkeeping Services"
        briefDescription="In today’s dynamic business environment, organizations require reliable financial data to evaluate performance, make informed decisions, and forecast future outcomes. Our accounting and bookkeeping services are designed to meet this need by providing accurate and timely financial data while ensuring compliance with approved international accounting standards in Saudi Arabia."
        serviceInclude1Title="General Ledger Management:"
        serviceInclude1Description="We ensure that all transactions are accurately recorded, providing a clear and organized view of your financial position."
        serviceInclude2Title="Accounts Payable & Receivable:"
        serviceInclude2Description="We handle the management of your payables and receivables, ensuring timely payments and collections, improving cash flow, and minimizing financial risks."
        serviceInclude3Title="Financial Reporting:"
        serviceInclude3Description="We generate detailed financial reports, including income statements, balance sheets, and cash flow statements, to help you understand your business's financial standing and make informed decisions."
        serviceInclude4Title="Bank Reconciliation:"
        serviceInclude4Description="We perform regular bank reconciliations to ensure that your business’s records align with bank statements, identifying discrepancies and ensuring accuracy."
        serviceInclude5Title="Payroll Processing:"
        serviceInclude5Description="We offer payroll services to ensure your employees are paid accurately and on time, while also managing tax filings and compliance with local regulations."
        whyUsP="Our dedicated team of accounting professionals ensures that your financial data is handled with utmost accuracy and confidentiality. We are committed to helping your organization achieve financial clarity, improve operational efficiency, and maintain compliance with all applicable regulations."
        contactMsg="Contact us today to learn more about how our accounting and bookkeeping services can support your business growth and success."
      />
      <ContactInfo />
      <Footer />
    </>
  );
}

export default AccountingABookkeeping;
