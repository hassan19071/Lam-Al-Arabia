import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import MiniHero from "../components/MiniHero";
import ContactInfo from "../components/ContactInfo";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import "../components/style/service-details.scss";
function FinancialConsulting() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
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

      <Navbar page="consulting" />
      <MiniHero title="Financial Consulting Services" />

      <div className="container mx-auto px-lg-5 py-5 service-details">
        <h2 className="text-3xl font-bold mb-4">
          Financial Consulting Services
        </h2>
        <p className="mb-6">
          Our financial consulting services aim to help businesses achieve
          financial stability, growth, and strategic planning. We offer expert
          guidance and customized solutions to improve financial performance and
          enhance decision-making capabilities.
        </p>
        <h3>Our Comprehensive Services</h3>
        <ul className="space-y-4 list-disc pl-5">
          <li>
            <strong>Financial Strategy Development:</strong> Assisting in the
            creation of long-term financial strategies that align with business
            goals and market conditions.
          </li>
          <li>
            <strong>Budgeting and Forecasting:</strong> Helping organizations
            develop detailed budgets and accurate financial forecasts to ensure
            effective resource allocation.
          </li>
          <li>
            <strong>Cost Control and Profitability Analysis:</strong> Analyzing
            cost structures and identifying areas for cost reduction to enhance
            profitability.
          </li>
          <li>
            <strong>Cash Flow Management:</strong> Providing strategies for
            effective cash flow management to ensure liquidity and operational
            efficiency.
          </li>
          <li>
            <strong>Risk Management:</strong> Identifying financial risks and
            developing mitigation strategies to protect the organization’s
            financial health.
          </li>
        </ul>

        <div className="mt-8">
          <h3 className="text-2xl font-bold">Why Choose Us?</h3>
          <p className="mt-2">
            Our dedicated team ensures your financial data is handled with the
            utmost accuracy and confidentiality. We are committed to helping you
            achieve financial clarity and improve operational efficiency.
          </p>
        </div>

        <div className="mt-6">
          <p className="font-semibold">
            Contact us today to learn more about how our accounting,
            bookkeeping, zakat, tax, and financial consulting services can
            support your business growth and success.
          </p>
        </div>
      </div>

      <ContactInfo />
      <Footer />
    </>
  );
}

export default FinancialConsulting;
