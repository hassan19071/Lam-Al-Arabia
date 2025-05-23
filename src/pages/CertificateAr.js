import React, { useEffect, lazy, Suspense } from "react";
import { Helmet } from "react-helmet";
import TopHeaderAr from "../components/TopHeaderAr";

// Lazy load components
const NavbarAr = lazy(() => import("../components/NavbarAr"));
const MiniHeroAr = lazy(() => import("../components/MiniHeroAr"));
const ServiceDetailsAr = lazy(() => import("../components/ServicesDetailsAr"));
const ContactInfoAr = lazy(() => import("../components/ContactInfoAr"));
const FooterAr = lazy(() => import("../components/FooterAr"));
const Loading = lazy(() => import("../components/Loading"));
function CertificateAr() {
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
        <title>خدمات إصدار شهادة تصنيف المقاولين - لام العربية</title>
        <meta
          name="description"
          content="لام العربية تقدم دعمًا شاملاً للحصول على شهادات تصنيف المقاولين، مما يساعد الشركات الإنشائية في التأهل للمشاريع ذات القيمة العالية والعقود الحكومية."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="خدمات إصدار شهادة تصنيف المقاولين - لام العربية"
        />
        <meta
          property="og:description"
          content="احصل على المساعدة من خبراء لام العربية في الحصول على شهادات تصنيف المقاولين. نحن نضمن لك عملية سلسة، مما يساعد شركتك في التأهل للعقود الحكومية والخاصة."
        />
        <meta
          property="og:url"
          content="https://lam.com.sa/services/contractor-classification-certificate-issuance"
        />
      </Helmet>

      <Suspense fallback={<Loading />}>
        <TopHeaderAr />
        <NavbarAr page="certificate" />
        <MiniHeroAr title="إصدار شهادة تصنيف المقاولين" />
        <ServiceDetailsAr
          serviceTitle="إصدار شهادة تصنيف المقاولين"
          briefDescription="تساعد خدمتنا لإصدار شهادة تصنيف المقاولين الشركات الإنشائية في إثبات مؤهلاتها واستقرارها المالي وكفاءتها الفنية. نحن نقدم دعمًا شاملاً لضمان سير العملية بسلاسة، مما يمكّن مؤسستك من التأهل للمشاريع الحكومية والقطاع الخاص. كما نقدم خدمة إصدار شهادة المحتوى المحلي لمساعدة الشركات في إثبات امتثالها لمتطلبات المحتوى المحلي في المملكة العربية السعودية. نحن نقدم دعمًا كاملًا للحصول على الشهادة، مما يضمن زيادة مساهمتك المحلية وتأهيلك للحصول على العقود الحكومية والحوافز."
          serviceInclude1Title="تقييم الشركة:"
          serviceInclude1Description="تقييم القدرات الفنية والمالية والتشغيلية لشركتك لتلبية معايير التصنيف."
          serviceInclude2Title="إعداد الوثائق المطلوبة:"
          serviceInclude2Description="مساعدتك في إعداد وتقديم جميع الوثائق اللازمة للحصول على شهادة التصنيف."
          serviceInclude3Title="دعم التدقيق:"
          serviceInclude3Description="تقديم الإرشادات خلال عمليات التدقيق من قبل السلطات المختصة لضمان الامتثال."
          serviceInclude4Title="استشارة لتحسين التصنيف:"
          serviceInclude4Description="تقديم المشورة بشأن كيفية تحسين مستوى تصنيفك لزيادة التأهيل للمشاريع ذات القيمة العالية."
          serviceInclude5Title="التجديد والمراجعة الدورية:"
          serviceInclude5Description="مساعدتك في عمليات التجديد والمراجعات الدورية لضمان استمرار الامتثال لمتطلبات التصنيف."
          whyUsP="فريقنا المتخصص يضمن معالجة احتياجاتك التصنيفية بدقة وكفاءة وسرية. نحن ملتزمون بمساعدتك في تحسين أهليتك للمشاريع وتعزيز سمعة شركتك في السوق."
          contactMsg="اتصل بنا اليوم لمعرفة المزيد حول كيفية دعم خدمتنا لإصدار شهادة تصنيف المقاولين لنمو عملك."
        />
        <ContactInfoAr />
        <FooterAr />
      </Suspense>
    </>
  );
}

export default CertificateAr;
