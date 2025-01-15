import React, { useEffect } from "react";
import { Helmet } from "react-helmet"; // Import React Helmet
import ServiceDetailsAr from "../components/ServicesDetailsAr";
import NavbarAr from "../components/NavbarAr";
import ContactInfoAr from "../components/ContactInfoAr";
import FooterAr from "../components/FooterAr";
import MiniHeroAr from "../components/MiniHeroAr";

function CertificateAr() {
  useEffect(() => {
    // Set the page direction to RTL when this component is rendered
    document.body.dir = "rtl";

    // Cleanup when the component is unmounted (if you use this approach for switching pages)
    return () => {
      document.body.dir = "ltr"; // Revert back to LTR if needed
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
          content="https://yourwebsite.com/services/contractor-classification-certificate-issuance"
        />
      </Helmet>

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
    </>
  );
}

export default CertificateAr;
