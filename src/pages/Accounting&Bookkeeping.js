import React, { useEffect, lazy, Suspense } from "react";
import { Helmet } from "react-helmet";
import "../components/style/service-details.scss";
import TopHeader from "../components/TopHeader";

// Lazy load components
const Navbar = lazy(() => import("../components/Navbar"));
const MiniHero = lazy(() => import("../components/MiniHero"));
const ContactInfo = lazy(() => import("../components/ContactInfo"));
const Footer = lazy(() => import("../components/Footer"));
const Loading = lazy(() => import("../components/Loading"));
function AccountingABookkeeping() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

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
          content="https://lam.com.sa/services/accounting-and-bookkeeping-services"
        />
      </Helmet>

      <Suspense fallback={<Loading />}>
        <TopHeader />
        <Navbar page="accounting" />
        <MiniHero title={"Accounting And Bookkeeping Services"} />

        <div className="container mx-auto px-lg-5 py-5 service-details">
          <h2 className="text-3xl font-bold mb-4">
            Accounting And Bookkeeping Services
          </h2>
          <p className="mb-6">
            In today’s dynamic business environment, organizations require
            reliable financial data to evaluate performance, make informed
            decisions, and forecast future outcomes. Our accounting and
            bookkeeping services are designed to meet this need by providing
            accurate and timely financial data while ensuring compliance with
            approved international accounting standards in Saudi Arabia.
          </p>
          <h3>Our Comprehensive Services</h3>
          <ul className="space-y-4 list-disc pl-5">
            <li>
              <strong>General Ledger Management:</strong> We ensure that all
              transactions are accurately recorded, providing a clear and
              organized view of your financial position.
            </li>
            <li>
              <strong>Accounts Payable & Receivable:</strong> We handle the
              management of your payables and receivables, ensuring timely
              payments and collections, improving cash flow, and minimizing
              financial risks.
            </li>
            <li>
              <strong>Financial Reporting:</strong> We generate detailed
              financial reports, including income statements, balance sheets,
              and cash flow statements, to help you understand your business's
              financial standing and make informed decisions.
            </li>
            <li>
              <strong>Bank Reconciliation:</strong> We perform regular bank
              reconciliations to ensure that your business’s records align with
              bank statements, identifying discrepancies and ensuring accuracy.
            </li>
            <li>
              <strong>Payroll Processing:</strong> We offer payroll services to
              ensure your employees are paid accurately and on time, while also
              managing tax filings and compliance with local regulations.
            </li>
          </ul>

          <div className="mt-3">
            <h3 className="text-2xl font-bold">Why Choose Us?</h3>
            <p className="mt-0">
              Our dedicated team of accounting professionals ensures that your
              financial data is handled with utmost accuracy and
              confidentiality. We are committed to helping your organization
              achieve financial clarity, improve operational efficiency, and
              maintain compliance with all applicable regulations.
            </p>
          </div>

          <div className="mt-3">
            <p className="font-semibold">
              Contact us today to learn more about how our accounting and
              bookkeeping services can support your business growth and success.
            </p>
          </div>
        </div>

        <ContactInfo />
        <Footer />
      </Suspense>
    </>
  );
}

export default AccountingABookkeeping;
