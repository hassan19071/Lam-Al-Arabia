import React, { useEffect, Suspense } from "react";
import { Helmet } from "react-helmet";

// Lazy load components
const Navbar = React.lazy(() => import("../components/Navbar"));
const HeroSection = React.lazy(() => import("../components/HeroSection"));
const About = React.lazy(() => import("../components/About"));
const FeaturesSection = React.lazy(() => import("../components/Features"));
const Services = React.lazy(() => import("../components/Services"));
const Contact = React.lazy(() => import("../components/Contact"));
const ContactInfo = React.lazy(() => import("../components/ContactInfo"));
const Footer = React.lazy(() => import("../components/Footer"));
const Loading = React.lazy(()=> import("../components/Loading"));
function HomeEn() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Home - Lam Al Arabia Professional Consulting</title>
        <meta
          name="description"
          content="Lam Al Arabia Professional Consulting offers expert consulting services tailored to help businesses grow and optimize operations. Explore our services and solutions."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Home - Lam Al Arabia" />
        <meta
          property="og:description"
          content="Lam Al Arabia Professional Consulting provides business consulting services, focusing on strategic planning, operational optimization, and financial growth."
        />
        <meta property="og:url" content="https://lam.com.sa" />
        <meta name="keywords" content="Lam Al Arabia Professional Consulting,Financial, Administrative Consulting Saudi Arabia,Multidisciplinary consulting firm Dammam & Khoba,Best professional consulting company in Saudi Arabia"/>
      </Helmet>

      {/* Suspense to handle loading state while lazy components are loading */}
      <Suspense fallback={<Loading/>}>
        <Navbar page="home" />
        <HeroSection />
        <About />
        <FeaturesSection />
        <Services />
        <Contact />
        <ContactInfo />
        <Footer />
      </Suspense>
    </>
  );
}

export default HomeEn;
