import React, { useEffect, Suspense } from "react";
import { Helmet } from "react-helmet";
import TopHeaderAr from "../components/TopHeaderAr";

// Lazy load components
const NavbarAr = React.lazy(() => import("../components/NavbarAr"));
const MiniHeroAr = React.lazy(() => import("../components/MiniHeroAr"));
const ServicesAr = React.lazy(() => import("../components/ServicesAr"));
const WhyUsAr = React.lazy(() => import("../components/WhyUsAr"));
const ContactInfoAr = React.lazy(() => import("../components/ContactInfoAr"));
const FooterAr = React.lazy(() => import("../components/FooterAr"));
const Loading = React.lazy(() => import("../components/Loading"));
function ServicesPageAr() {
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
        <meta property="og:url" content="https://lam.com.sa/services" />
        <meta
          name="keywords"
          content="الاستشارات المالية،خدمات الزكاة والضرائب,إصدار شهادة تصنيف المقاولين،خدمات المحاسبة،خدمات التمويل,تأسيس الشركات"
        />
      </Helmet>

      {/* Suspense to handle loading state while lazy components are loading */}
      <Suspense fallback={<Loading />}>
        <TopHeaderAr />
        <NavbarAr page="services" />
        <MiniHeroAr title={"خدماتنا"} />
        <ServicesAr />
        <WhyUsAr />
        <ContactInfoAr />
        <FooterAr />
      </Suspense>
    </>
  );
}

export default ServicesPageAr;
