import React, { useEffect, Suspense, lazy } from "react";
import { Helmet } from "react-helmet";

// Lazy load components
const Navbar = lazy(() => import("../components/Navbar"));
const MiniHero = lazy(() => import("../components/MiniHero"));
const AboutUsOverall = lazy(() => import("../components/AboutUsOverall"));
const WhyUs = lazy(() => import("../components/WhyUs"));
const ContactInfo = lazy(() => import("../components/ContactInfo"));
const Footer = lazy(() => import("../components/Footer"));
const Loading = lazy(()=> import("../components/Loading"));

function AboutEn() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>About Us - Lam Al Arabia Professional Consulting</title>
        <meta
          name="description"
          content="Learn more about Lam Al Arabia, a trusted consulting firm offering business solutions and expert guidance to help your business grow."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="About Lam Al Arabia" />
        <meta
          property="og:description"
          content="Lam Al Arabia provides tailored business solutions across industries, helping businesses grow, optimize operations, and navigate challenges."
        />
        <meta property="og:url" content="https://lam.com.sa/about-us" />
        <meta name="keywords" content="About Lam Al Arabia Professional Consulting,Experts in financial, administrative consultancy,Who we are – Lam Al Arabia,Trusted professional consulting firm in Saudi Arabia"/>
      </Helmet>

      <Suspense fallback={<Loading/>}>
        <Navbar page="about" />
        <MiniHero title="About Us" />
        <AboutUsOverall />
        <WhyUs />
        <ContactInfo />
        <Footer />
      </Suspense>
    </>
  );
}

export default AboutEn;
