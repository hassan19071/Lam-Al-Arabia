import React, { useEffect } from "react";
import NavbarAr from "../components/NavbarAr";
import MiniHeroAR from "../components/MiniHeroAr";
import ContactInfoAr from "../components/ContactInfoAr";
import FooterAr from "../components/FooterAr";
import { Helmet } from "react-helmet"; // Import React Helmet
import ServiceDetailsAr from "../components/ServicesDetailsAr";

function AccountingABookkeepingAr() {
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
        <title>خدمات المحاسبة ومسك الدفاتر - لام العربية</title>
        <meta
          name="description"
          content="اكتشف خدمات المحاسبة ومسك الدفاتر المهنية من لام العربية، المصممة لمساعدة عملك في إدارة البيانات المالية والتقارير والرواتب والمزيد."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="خدمات المحاسبة ومسك الدفاتر - لام العربية"
        />
        <meta
          property="og:description"
          content="خدمات المحاسبة ومسك الدفاتر الاحترافية لإدارة البيانات المالية، بما في ذلك إعداد التقارير، والمطابقة البنكية، والرواتب والمزيد."
        />
        <meta
          property="og:url"
          content="https://yourwebsite.com/services/accounting-and-bookkeeping-services"
        />
      </Helmet>
      <NavbarAr page="accounting"/>
      <MiniHeroAR title={"خدمات المحاسبة ومسك الدفاتر"} />
      <ServiceDetailsAr
        serviceTitle="خدمات المحاسبة ومسك الدفاتر"
        briefDescription="في بيئة الأعمال المتغيرة اليوم، تحتاج المؤسسات إلى بيانات مالية موثوقة لتقييم الأداء واتخاذ قرارات مستنيرة والتنبؤ بالنتائج المستقبلية. تم تصميم خدمات المحاسبة ومسك الدفاتر لدينا لتلبية هذا الاحتياج من خلال تقديم بيانات مالية دقيقة وفي الوقت المناسب، مع ضمان الامتثال للمعايير المحاسبية الدولية المعتمدة في المملكة العربية السعودية."
        serviceInclude1Title="إدارة دفتر الأستاذ العام:"
        serviceInclude1Description="نضمن تسجيل جميع المعاملات بدقة، مما يوفر رؤية واضحة ومنظمة لوضعك المالي."
        serviceInclude2Title="حسابات الدائنين والمدينين:"
        serviceInclude2Description="نتولى إدارة حسابات الدائنين والمدينين، مما يضمن الدفع والتحصيل في الوقت المناسب، وتحسين التدفق النقدي، وتقليل المخاطر المالية."
        serviceInclude3Title="إعداد التقارير المالية:"
        serviceInclude3Description="نقوم بإعداد تقارير مالية مفصلة، بما في ذلك قوائم الدخل والميزانية العمومية وتدفقات النقد، لمساعدتك على فهم وضع عملك المالي واتخاذ قرارات مستنيرة."
        serviceInclude4Title="المطابقة البنكية:"
        serviceInclude4Description="نقوم بإجراء المطابقة البنكية بانتظام لضمان توافق سجلاتك مع كشوف الحسابات البنكية، وتحديد الفروقات لضمان الدقة."
        serviceInclude5Title="معالجة الرواتب:"
        serviceInclude5Description="نقدم خدمات الرواتب لضمان دفع رواتب موظفيك بدقة وفي الوقت المحدد، مع إدارة الإقرارات الضريبية والامتثال للوائح المحلية."
        whyUsP="يضمن فريقنا المتخصص من المحاسبين التعامل مع بياناتك المالية بأقصى درجات الدقة والسرية. نحن ملتزمون بمساعدة مؤسستك على تحقيق الوضوح المالي، وتحسين الكفاءة التشغيلية، والامتثال لجميع اللوائح المعمول بها."
        contactMsg="اتصل بنا اليوم لمعرفة المزيد عن كيفية دعم خدمات المحاسبة ومسك الدفاتر لدينا لنمو ونجاح عملك."
      />
      <ContactInfoAr />
      <FooterAr />
    </>
  );
}

export default AccountingABookkeepingAr;
