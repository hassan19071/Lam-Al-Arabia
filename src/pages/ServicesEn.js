import React, { useEffect, Suspense } from "react";
import { Helmet } from "react-helmet"; // Import React Helmet

// Lazy load components
const Navbar = React.lazy(() => import("../components/Navbar"));
const MiniHero = React.lazy(() => import("../components/MiniHero"));
const Services = React.lazy(() => import("../components/Services"));
const WhyUs = React.lazy(() => import("../components/WhyUs"));
const ContactInfo = React.lazy(() => import("../components/ContactInfo"));
const Footer = React.lazy(() => import("../components/Footer"));
const Loading = React.lazy(()=> import("../components/Loading"));
function ServicesEn() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Services - Lam Al Arabia Professional Consulting</title>
        <meta
          name="description"
          content="Explore the range of services offered by Lam Al Arabia, including accounting, bookkeeping, financial consulting, and more. Tailored business solutions for growth."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Services - Lam Al Arabia" />
        <meta
          property="og:description"
          content="Lam Al Arabia provides expert consulting services including accounting, financial consulting, and more to help businesses optimize and grow."
        />
        <meta property="og:url" content="https://lam.com.sa/services" />
        <meta name="keywords" content="Accounting Services,Zakat and Tax Services,Financial Consultations,Contractor Classification Certificate Issuance,Company Formation,Financing Services,Feasibility Studies Services,Accounts & Systems Structuring"/>
      </Helmet>

      {/* Suspense to handle loading state while lazy components are loading */}
      <Suspense fallback={<Loading/>}>
        <Navbar page="services" />
        <MiniHero title="Services" />
        <Services />
        <WhyUs />
        <ContactInfo />
        <Footer />
      </Suspense>
    </>
  );
}

export default ServicesEn;
