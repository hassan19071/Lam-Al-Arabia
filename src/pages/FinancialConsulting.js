import React from "react";
import Navbar from "../components/Navbar";
import MiniHero from "../components/MiniHero";
import ServiceDetails from "../components/ServiceDetails";
import ContactInfo from "../components/ContactInfo";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet"; // Import React Helmet

function FinancialConsulting() {
  return (
    <>
      <Helmet>
        <title>Financial Consulting Services - Lam Al Arabia</title>
        <meta
          name="description"
          content="Lam Al Arabia offers expert financial consulting services to help businesses achieve financial stability, growth, and strategic planning. Improve your financial performance with tailored solutions."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Financial Consulting Services - Lam Al Arabia"
        />
        <meta
          property="og:description"
          content="Discover how our financial consulting services can support your business growth, improve financial performance, and enhance decision-making."
        />
        <meta
          property="og:url"
          content="https://yourwebsite.com/services/financial-consulting"
        />
      </Helmet>
      <Navbar />
      <MiniHero title="Financial Consulting" />
      <ServiceDetails
        serviceTitle="Financial Consulting Services"
        briefDescription="Our financial consulting services aim to help businesses achieve financial stability, growth, and strategic planning. We offer expert guidance and customized solutions to improve financial performance and enhance decision-making capabilities."
        serviceInclude1Title="Financial Strategy Development:"
        serviceInclude1Description="Assisting in the creation of long-term financial strategies that align with business goals and market conditions."
        serviceInclude2Title="Budgeting and Forecasting:"
        serviceInclude2Description="Helping organizations develop detailed budgets and accurate financial forecasts to ensure effective resource allocation."
        serviceInclude3Title="Cost Control and Profitability Analysis:"
        serviceInclude3Description="Analyzing cost structures and identifying areas for cost reduction to enhance profitability."
        serviceInclude4Title="Cash Flow Management:"
        serviceInclude4Description="Providing strategies for effective cash flow management to ensure liquidity and operational efficiency."
        serviceInclude5Title="Risk Management:"
        serviceInclude5Description="Identifying financial risks and developing mitigation strategies to protect the organization’s financial health."
        whyUsP="Our dedicated team ensures your financial data is handled with the utmost accuracy and confidentiality. We are committed to helping you achieve financial clarity and improve operational efficiency."
        contactMsg="Contact us today to learn more about how our accounting, bookkeeping, zakat, tax, and financial consulting services can support your business growth and success."
      />
      <ContactInfo />
      <Footer />
    </>
  );
}

export default FinancialConsulting;
