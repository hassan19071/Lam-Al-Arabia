import React, { useEffect } from "react";
import ServiceDetailsAr from "../components/ServicesDetailsAr";
import { Helmet } from "react-helmet"; // Import React Helmet
import NavbarAr from "../components/NavbarAr";
import MiniHeroAr from "../components/MiniHeroAr";
import ContactInfoAr from "../components/ContactInfoAr";
import FooterAr from "../components/FooterAr";

function FinancialConsultingAr() {
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
        <title>خدمات الاستشارات المالية - لام العربية</title>
        <meta
          name="description"
          content="تقدم لام العربية خدمات استشارات مالية متخصصة لمساعدة الشركات في تحقيق الاستقرار المالي والنمو والتخطيط الاستراتيجي. احسن أدائك المالي مع حلول مخصصة."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="خدمات الاستشارات المالية - لام العربية"
        />
        <meta
          property="og:description"
          content="اكتشف كيف يمكن لخدماتنا الاستشارية المالية دعم نمو أعمالك، وتحسين الأداء المالي، وتعزيز اتخاذ القرارات."
        />
        <meta
          property="og:url"
          content="https://yourwebsite.com/services/financial-consulting"
        />
      </Helmet>
      <NavbarAr page="consulting" />
      <MiniHeroAr title="الاستشارات المالية" />
      <ServiceDetailsAr
        serviceTitle="خدمات الاستشارات المالية"
        briefDescription="تهدف خدماتنا الاستشارية المالية إلى مساعدة الشركات في تحقيق الاستقرار المالي والنمو والتخطيط الاستراتيجي. نقدم إرشادات الخبراء وحلولًا مخصصة لتحسين الأداء المالي وتعزيز قدرات اتخاذ القرار."
        serviceInclude1Title="تطوير الاستراتيجيات المالية:"
        serviceInclude1Description="مساعدة الشركات في إنشاء استراتيجيات مالية طويلة الأجل تتماشى مع أهداف الأعمال وظروف السوق."
        serviceInclude2Title="إعداد الميزانيات والتوقعات:"
        serviceInclude2Description="مساعدة المنظمات في تطوير ميزانيات مفصلة وتوقعات مالية دقيقة لضمان تخصيص الموارد بشكل فعال."
        serviceInclude3Title="التحكم في التكاليف وتحليل الربحية:"
        serviceInclude3Description="تحليل هيكل التكاليف وتحديد المجالات التي يمكن تقليل التكاليف فيها لتعزيز الربحية."
        serviceInclude4Title="إدارة التدفق النقدي:"
        serviceInclude4Description="تقديم استراتيجيات لإدارة التدفق النقدي بشكل فعال لضمان السيولة والكفاءة التشغيلية."
        serviceInclude5Title="إدارة المخاطر:"
        serviceInclude5Description="تحديد المخاطر المالية وتطوير استراتيجيات التخفيف لحماية الصحة المالية للمنظمة."
        whyUsP="يضمن فريقنا المتخصص أن يتم التعامل مع بياناتك المالية بأعلى درجة من الدقة والسرية. نحن ملتزمون بمساعدتك في تحقيق الوضوح المالي وتحسين الكفاءة التشغيلية."
        contactMsg="اتصل بنا اليوم لمعرفة المزيد حول كيفية دعم خدماتنا المحاسبية، وخدمات المحاسبة، والزكاة، والضرائب، والاستشارات المالية لنمو أعمالك ونجاحك."
      />
      <ContactInfoAr />
      <FooterAr />
    </>
  );
}

export default FinancialConsultingAr;
