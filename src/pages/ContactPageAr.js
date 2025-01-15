import React, { useEffect } from "react";
import NavbarAr from "../components/NavbarAr";
import ContactInfoAr from "../components/ContactInfoAr";
import FooterAr from "../components/FooterAr";
import MiniHeroAr from "../components/MiniHeroAr";
import ContactAr from "../components/ContactAr";
import { Helmet } from "react-helmet";

function ContactPageAr() {
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
        <meta property="og:url" content="https://yourwebsite.com/تواصل-معنا" />
      </Helmet>
      <NavbarAr page="contact" />
      <MiniHeroAr title={"تواصل معنا"} />
      <ContactAr />
      <ContactInfoAr />
      <FooterAr />
    </>
  );
}

export default ContactPageAr;
