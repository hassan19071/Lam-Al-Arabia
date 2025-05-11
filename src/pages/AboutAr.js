import React, { useEffect, Suspense, lazy } from "react";
import { Helmet } from "react-helmet";

// Lazy imports
const NavbarAr = lazy(() => import("../components/NavbarAr"));
const ContactInfoAr = lazy(() => import("../components/ContactInfoAr"));
const FooterAr = lazy(() => import("../components/FooterAr"));
const MiniHeroAr = lazy(() => import("../components/MiniHeroAr"));
const AboutUsOverallAr = lazy(() => import("../components/AboutUsOverallAr"));
const WhyUsAr = lazy(() => import("../components/WhyUsAr"));
const Loading = lazy(()=> import("../components/Loading"));
function AboutAr() {
  useEffect(() => {
    document.body.dir = "rtl";
    document.documentElement.lang = "ar";
    window.scrollTo(0, 0);
    return () => {
      document.body.dir = "ltr";
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
        <meta property="og:url" content="https://lam.com.sa/من-نحن" />
        <meta name="keywords" content="عن شركة لام العربية للاستشارات,خبراء الاستشارات المالية والإدارية,استشارات مهنية موثوقة في السعودية,من نحن – شركة لام للاستشارات المتكاملة"/>
      </Helmet>

      <Suspense fallback={<Loading/>}>
        <NavbarAr page="about" />
        <MiniHeroAr title="من نحن" />
        <AboutUsOverallAr />
        <WhyUsAr />
        <ContactInfoAr />
        <FooterAr />
      </Suspense>
    </>
  );
}

export default AboutAr;
