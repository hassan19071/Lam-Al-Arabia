import React, { useEffect } from "react";
import NavbarAr from "../components/NavbarAr";
import HeroSectionAr from "../components/HeroSectionAr";
import AboutUsAr from "../components/AboutAr";
import FeaturesSectionAr from "../components/FeaturesSectionAr";
import ServicesAr from "../components/ServicesAr";
import ContactAr from "../components/ContactAr";
import ContactInfoAr from "../components/ContactInfoAr";
import FooterAr from "../components/FooterAr";
import { Helmet } from "react-helmet";

function HomeAr() {
  useEffect(() => {
    // Set the page direction to RTL when this component is rendered
    document.body.dir = "rtl";
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
    // Cleanup when the component is unmounted (if you use this approach for switching pages)
    return () => {
      document.body.dir = "ltr"; // Revert back to LTR if needed
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>الرئيسية - لام العربية للاستشارات المهنية</title>
        <meta
          name="description"
          content="لام العربية تقدم خدمات استشارية مهنية مخصصة لمساعدة الشركات على النمو وتحسين العمليات. استكشف خدماتنا وحلولنا."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="الرئيسية - لام العربية" />
        <meta
          property="og:description"
          content="لام العربية تقدم خدمات استشارية للأعمال، مع التركيز على التخطيط الاستراتيجي، تحسين العمليات، والنمو المالي."
        />
        <meta property="og:url" content="https://yourwebsite.com" />
      </Helmet>

      <NavbarAr page="home" />
      <HeroSectionAr />
      <AboutUsAr />
      <FeaturesSectionAr />
      <ServicesAr />
      <ContactAr />
      <ContactInfoAr />
      <FooterAr />
    </>
  );
}

export default HomeAr;
