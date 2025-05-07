import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import FeaturesSection from "../components/Features";
import Services from "../components/Services";
import Contact from "../components/Contact";
import ContactInfo from "../components/ContactInfo";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

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
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta name="keywords" content="Lam Al Arabia Professional Consulting,Financial, Administrative Consulting Saudi Arabia,Multidisciplinary consulting firm Dammam & Khoba,Best professional consulting company in Saudi Arabia"/>
      </Helmet>
      <Navbar page="home" />
      <HeroSection />
      <About />
      <FeaturesSection />
      <Services />
      <Contact />
      <ContactInfo />
      <Footer />
    </>
  );
}

export default HomeEn;
