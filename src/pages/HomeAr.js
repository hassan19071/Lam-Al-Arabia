import React, { useEffect, Suspense } from "react";
import { Helmet } from "react-helmet";
import TopHeaderAr from "../components/TopHeaderAr";

// Lazy load components
const NavbarAr = React.lazy(() => import("../components/NavbarAr"));
const HeroSectionAr = React.lazy(() => import("../components/HeroSectionAr"));
const AboutUsAr = React.lazy(() => import("../components/AboutAr"));
const FeaturesSectionAr = React.lazy(() =>
  import("../components/FeaturesSectionAr")
);
const ServicesAr = React.lazy(() => import("../components/ServicesAr"));
const ContactAr = React.lazy(() => import("../components/ContactAr"));
const ContactInfoAr = React.lazy(() => import("../components/ContactInfoAr"));
const FooterAr = React.lazy(() => import("../components/FooterAr"));
const Loading = React.lazy(() => import("../components/Loading"));
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
        <meta property="og:url" content="https://lam.com.sa" />
        <meta
          name="keywords"
          content="شركة لام للاستشارات المهنية,استشارات إدارية ومالية,أفضل شركة استشارات مهنية في المملكة,شركة استشارات متعددة التخصصات"
        />
      </Helmet>

      {/* Suspense to handle loading state while lazy components are loading */}
      <Suspense fallback={<Loading />}>
        <TopHeaderAr />
        <NavbarAr page="home" />
        <HeroSectionAr />
        <AboutUsAr />
        <FeaturesSectionAr />
        <ServicesAr />
        <ContactAr />
        <ContactInfoAr />
        <FooterAr />
      </Suspense>
    </>
  );
}

export default HomeAr;
