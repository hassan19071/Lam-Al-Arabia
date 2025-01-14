import React from "react";
import Navbar from "../components/Navbar";
import MiniHero from "../components/MiniHero";
import AboutUsOverall from "../components/AboutUsOverall";
import WhyUs from "../components/WhyUs";
import ContactInfo from "../components/ContactInfo";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet"; // Import React Helmet

function AboutEn() {
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
        <meta property="og:url" content="https://yourwebsite.com/about-us" />
      </Helmet>
      <Navbar page="about" />
      <MiniHero title="About Us" />
      <AboutUsOverall />
      <WhyUs />
      <ContactInfo />
      <Footer />
    </>
  );
}

export default AboutEn;
