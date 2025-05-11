import React, { useEffect, Suspense } from "react";
import { Helmet } from "react-helmet";

// Lazy load components
const NavbarAr = React.lazy(() => import("../components/NavbarAr"));
const MiniHeroAr = React.lazy(() => import("../components/MiniHeroAr"));
const ContactInfoAr = React.lazy(() => import("../components/ContactInfoAr"));
const FooterAr = React.lazy(() => import("../components/FooterAr"));
const ServiceDetailsAr = React.lazy(() => import("../components/ServicesDetailsAr"));
const Loading = React.lazy(()=> import("../components/Loading"));
function FinancingAr() {
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
        <title>خدمات التمويل - لام العربية</title>
        <meta
          name="description"
          content="لام العربية تقدم حلول تمويل مخصصة لمساعدة الشركات في تأمين الأموال اللازمة للنمو ومشاريع البناء. نحن نوجهك خلال عملية التمويل لتحقيق أفضل النتائج."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="خدمات التمويل - لام العربية" />
        <meta
          property="og:description"
          content="افتح فرص التمويل مع إرشادات الخبراء من لام العربية. نحن نقدم حلول تمويل مخصصة لدعم مشاريعك التجارية والإنشائية بشروط مرنة."
        />
        <meta
          property="og:url"
          content="https://lam.com.sa/services/financing-services"
        />
      </Helmet>

      {/* Suspense to handle loading state while lazy components are loading */}
      <Suspense fallback={<Loading/>}>
        <NavbarAr page="financing" />
        <MiniHeroAr title="خدمات التمويل" />
        <ServiceDetailsAr
          serviceTitle="خدمات التمويل"
          briefDescription="تساعد خدمات التمويل لدينا الشركات الإنشائية والأعمال في تأمين التمويل الذي يحتاجونه لتنفيذ المشاريع والنمو. نحن نقدم دعمًا شاملاً، مقدمين حلول تمويل مخصصة تلبي احتياجاتك الخاصة وتحسن تدفقك النقدي."
          serviceInclude1Title="تقييم التمويل:"
          serviceInclude1Description="تقييم احتياجات عملك المالية لتوصية بأفضل خيارات التمويل."
          serviceInclude2Title="دعم طلبات القروض:"
          serviceInclude2Description="مساعدتك في تحضير وتقديم طلبات القروض إلى المؤسسات المالية."
          serviceInclude3Title="التخطيط المالي والاستراتيجية:"
          serviceInclude3Description="تقديم إرشادات خبراء حول إدارة الأموال، وتحسين التدفق النقدي، وتقليل المخاطر المالية."
          serviceInclude4Title="استشارات حلول التمويل:"
          serviceInclude4Description="تقديم استشارات حول مجموعة من خيارات التمويل، بما في ذلك القروض البنكية، التأجير، ومصادر التمويل البديلة."
          serviceInclude5Title="المراقبة المالية المستمرة:"
          serviceInclude5Description="تقديم مراجعات وتقارير دورية لضمان الاستخدام الفعال للأموال والحفاظ على الصحة المالية المستدامة."
          whyUsP="فريقنا المتمرس ملتزم بمساعدتك في تأمين التمويل المناسب بأقل قدر من المتاعب. نحن نعمل عن كثب معك لضمان تلبية احتياجاتك التمويلية، مما يمكنك من التركيز على نمو عملك وإتمام مشاريعك بنجاح."
          contactMsg="اتصل بنا اليوم لمعرفة المزيد حول كيفية دعم خدمات التمويل لدينا لنمو عملك."
        />
        <ContactInfoAr />
        <FooterAr />
      </Suspense>
    </>
  );
}

export default FinancingAr;