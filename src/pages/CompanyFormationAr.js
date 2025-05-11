import React, { useEffect, lazy, Suspense } from "react";
import { Helmet } from "react-helmet";

// Lazy load components
const NavbarAr = lazy(() => import("../components/NavbarAr"));
const MiniHeroAr = lazy(() => import("../components/MiniHeroAr"));
const ServiceDetailsAr = lazy(() => import("../components/ServicesDetailsAr"));
const ContactInfoAr = lazy(() => import("../components/ContactInfoAr"));
const FooterAr = lazy(() => import("../components/FooterAr"));
const Loading = lazy(()=> import("../components/Loading"));
function CompanyFormationAr() {
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
        <title>خدمات تأسيس الشركات - لام العربية</title>
        <meta
          name="description"
          content="لام العربية تقدم خدمات تأسيس الشركات الشاملة، حيث تتولى جميع المتطلبات القانونية والإدارية والتوثيقية لمساعدة الأعمال على البدء بسرعة وكفاءة."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="خدمات تأسيس الشركات - لام العربية" />
        <meta
          property="og:description"
          content="ابدأ عملك بسهولة من خلال خدمات تأسيس الشركات المتخصصة من لام العربية. نحن نساعدك في التسجيل والترخيص وجميع الوثائق اللازمة لضمان إعداد سلس."
        />
        <meta
          property="og:url"
          content="https://lam.com.sa/services/company-formation-services"
        />
      </Helmet>

      <Suspense fallback={<Loading/>}>
        <NavbarAr page="company" />
        <MiniHeroAr title="خدمات تأسيس الشركات" />
        <ServiceDetailsAr
          serviceTitle="خدمات تأسيس الشركات"
          briefDescription="تقدم خدمات تأسيس الشركات لدينا دعمًا كاملاً لتأسيس الأعمال الجديدة، مما يضمن عملية تأسيس خالية من المتاعب. من التسجيل القانوني إلى الإجراءات الإدارية، نحن نتولى كل خطوة لمساعدتك في إطلاق شركتك بسرعة وكفاءة."
          serviceInclude1Title="استشارة هيكل العمل:"
          serviceInclude1Description="نقدم استشارات حول أفضل هيكل قانوني (شركة ذات مسؤولية محدودة، شركة مساهمة، إلخ) يتناسب مع أهداف عملك."
          serviceInclude2Title="دعم التسجيل القانوني:"
          serviceInclude2Description="مساعدتك في التسجيل التجاري، والترخيص، والامتثال للوائح المحلية."
          serviceInclude3Title="إعداد الوثائق:"
          serviceInclude3Description="إعداد وتقديم جميع الوثائق المطلوبة لتأسيس الشركة."
          serviceInclude4Title="فتح حساب بنكي:"
          serviceInclude4Description="تسهيل فتح حسابات بنكية للشركات."
          serviceInclude5Title="خدمات ما بعد التأسيس:"
          serviceInclude5Description="تقديم الدعم المستمر مع الامتثال للتنظيمات والإبلاغ الدوري."
          whyUsP="من خلال خبرتنا ونهجنا الشخصي، نضمن لك عملية تأسيس سلسة، مما يوفر لك الوقت والجهد. هدفنا هو مساعدتك في التركيز على بناء وتنمية عملك من اليوم الأول."
          contactMsg="اتصل بنا اليوم لمعرفة المزيد عن خدمات تأسيس الشركات وكيف يمكننا مساعدتك في تحقيق رؤيتك التجارية."
        />
        <ContactInfoAr />
        <FooterAr />
      </Suspense>
    </>
  );
}

export default CompanyFormationAr;
