import React, { useEffect, lazy, Suspense } from "react";
import { Helmet } from "react-helmet";
import TopHeaderAr from "../components/TopHeaderAr";

// Lazy load components
const NavbarAr = lazy(() => import("../components/NavbarAr"));
const MiniHeroAr = lazy(() => import("../components/MiniHeroAr"));
const ContactAr = lazy(() => import("../components/ContactAr"));
const ContactInfoAr = lazy(() => import("../components/ContactInfoAr"));
const FooterAr = lazy(() => import("../components/FooterAr"));
const Loading = lazy(() => import("../components/Loading"));
function ContactPageAr() {
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
        <title>تواصل معنا - لام العربية للاستشارات المهنية</title>
        <meta
          name="description"
          content="تواصل مع لام العربية للحصول على خدمات استشارية مهنية. اتصل بنا اليوم للحصول على حلول للأعمال وإرشادات من الخبراء."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="تواصل معنا - لام العربية" />
        <meta
          property="og:description"
          content="اتصل بلام العربية للحصول على خدمات استشارية من الخبراء. فريقنا جاهز لمساعدتك في تلبية احتياجات عملك."
        />
        <meta property="og:url" content="https://lam.com.sa/تواصل-معنا" />
        <meta
          name="keywords"
          content="اتصل بشركة لام للاستشارات,احصل على خطة استشارية مخصصة,طلب استشارة مالية أو إدارية"
        />
      </Helmet>

      <Suspense fallback={<Loading />}>
        <TopHeaderAr />
        <NavbarAr page="contact" />
        <MiniHeroAr title={"تواصل معنا"} />
        <ContactAr />
        <ContactInfoAr />
        <FooterAr />
      </Suspense>
    </>
  );
}

export default ContactPageAr;
