import React, { useEffect } from "react";
import NavbarAr from "../components/NavbarAr";
import ContactInfoAr from "../components/ContactInfoAr";
import FooterAr from "../components/FooterAr";
import MiniHeroAr from "../components/MiniHeroAr";
import AboutUsOverallAr from "../components/AboutUsOverallAr";
import WhyUsAr from "../components/WhyUsAr";
import { Helmet } from "react-helmet";
function AboutAr() {
  useEffect(() => {
    // Set the page direction to RTL when this component is rendered
    document.body.dir = "rtl";
    document.documentElement.lang = "ar";

    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
    // Cleanup when the component is unmounted (if you use this approach for switching pages)
    return () => {
      document.body.dir = "ltr"; // Revert back to LTR if needed
      document.documentElement.lang = "en";
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>من نحن - لام العربية للاستشارات المهنية</title>
        <meta
          name="description"
          content="تعرف على لام العربية، الشركة الاستشارية الموثوقة التي تقدم حلولاً للأعمال والإرشاد الخبراء لمساعدتك في نمو عملك."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="من نحن - لام العربية" />
        <meta
          property="og:description"
          content="تقدم لام العربية حلولاً مخصصة للأعمال عبر الصناعات المختلفة، لمساعدة الشركات على النمو وتحسين العمليات والتغلب على التحديات."
        />
        <meta property="og:url" content="https://yourwebsite.com/من-نحن" />
        <meta name="keywords" content="عن شركة لام العربية للاستشارات,خبراء الاستشارات المالية والإدارية,استشارات مهنية موثوقة في السعودية,من نحن – شركة لام للاستشارات المتكاملة"/>
      </Helmet>

      <NavbarAr page="about" />
      <MiniHeroAr title={"من نحن"} />
      <AboutUsOverallAr />
      <WhyUsAr />
      <ContactInfoAr />
      <FooterAr />
    </>
  );
}

export default AboutAr;
