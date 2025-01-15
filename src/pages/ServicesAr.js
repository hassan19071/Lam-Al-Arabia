import React, { useEffect } from "react";
import NavbarAr from "../components/NavbarAr";
import ContactInfoAr from "../components/ContactInfoAr";
import FooterAr from "../components/FooterAr";
import MiniHeroAr from "../components/MiniHeroAr";
import WhyUsAr from "../components/WhyUsAr";
import ServicesAr from "../components/ServicesAr";
import { Helmet } from "react-helmet";

function ServicesPageAr() {
  useEffect(() => {
    // Set the page direction to RTL when this component is rendered
    document.body.dir = "rtl";
    document.documentElement.lang = "ar";

    // Cleanup when the component is unmounted (if you use this approach for switching pages)
    return () => {
      document.body.dir = "ltr"; // Revert back to LTR if needed
      document.documentElement.lang = "en";
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>خدماتنا - لام العربية للاستشارات المهنية</title>
        <meta
          name="description"
          content="استكشف مجموعة الخدمات التي تقدمها لام العربية، بما في ذلك المحاسبة، مسك الدفاتر، الاستشارات المالية، والمزيد. حلول أعمال مخصصة للنمو."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="خدماتنا - لام العربية" />
        <meta
          property="og:description"
          content="لام العربية تقدم خدمات استشارية متخصصة بما في ذلك المحاسبة، الاستشارات المالية، والمزيد لمساعدة الشركات على التحسين والنمو."
        />
        <meta property="og:url" content="https://yourwebsite.com/services" />
      </Helmet>

      <NavbarAr page="services" />
      <MiniHeroAr title={"خدماتنا"} />
      <ServicesAr />
      <WhyUsAr />
      <ContactInfoAr />
      <FooterAr />
    </>
  );
}

export default ServicesPageAr;
