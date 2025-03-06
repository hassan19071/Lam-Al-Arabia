import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import MiniHero from "../components/MiniHero";
import ContactInfo from "../components/ContactInfo";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import { Helmet } from "react-helmet"; // Import React Helmet

function ContactEn() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Contact Us - Lam Al Arabia Professional Consulting</title>
        <meta
          name="description"
          content="Get in touch with Lam Al Arabia for professional consulting services. Contact us today for business solutions and expert advice."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Contact Us - Lam Al Arabia" />
        <meta
          property="og:description"
          content="Reach out to Lam Al Arabia for expert consulting services. Our team is ready to assist you with your business needs."
        />
        <meta property="og:url" content="https://yourwebsite.com/contact-us" />
      </Helmet>
      <Navbar page="contact" />
      <MiniHero title="Contact Us" />
      <Contact />
      <ContactInfo />
      <Footer />
    </>
  );
}

export default ContactEn;
