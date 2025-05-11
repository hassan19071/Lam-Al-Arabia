import React, { useEffect, lazy, Suspense } from "react";
import { Helmet } from "react-helmet";

// Lazy load components
const Navbar = lazy(() => import("../components/Navbar"));
const MiniHero = lazy(() => import("../components/MiniHero"));
const Contact = lazy(() => import("../components/Contact"));
const ContactInfo = lazy(() => import("../components/ContactInfo"));
const Footer = lazy(() => import("../components/Footer"));
const Loading = lazy(()=> import("../components/Loading"));
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
        <meta property="og:url" content="https://lam.com.sa/contact-us" />
        <meta name="keywords" content="Contact Lam Al Arabia Professional Consulting,Talk to a business advisor,Book a financial or administrative consultation,Get a custom consulting plan" />
      </Helmet>

      <Suspense fallback={<Loading/>}>
        <Navbar page="contact" />
        <MiniHero title="Contact Us" />
        <Contact />
        <ContactInfo />
        <Footer />
      </Suspense>
    </>
  );
}

export default ContactEn;
