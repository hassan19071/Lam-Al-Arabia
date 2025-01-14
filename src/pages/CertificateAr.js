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
        <title>إصدار شهادة المحتوى المحلي - لام العربية</title>
        <meta
          name="description"
          content="تقدم لمى العربية الدعم الكامل للحصول على شهادة المحتوى المحلي في المملكة العربية السعودية، مما يساعد الشركات على إثبات الامتثال لمتطلبات المحتوى المحلي."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="إصدار شهادة المحتوى المحلي - لام العربية"
        />
        <meta
          property="og:description"
          content="احصل على المساعدة في الحصول على شهادة المحتوى المحلي وزيِّن أهليتك للعقود الحكومية والحوافز مع لمى العربية."
        />
        <meta
          property="og:url"
          content="https://yourwebsite.com/services/issuance-of-local-content-certificate"
        />
      </Helmet>

      <NavbarAr />
      <MiniHeroAr title="إصدار شهادة المحتوى المحلي" />
      <ServiceDetailsAr
       serviceTitle="إصدار شهادة المحتوى المحلي"
       briefDescription="تساعد خدمتنا لإصدار شهادة المحتوى المحلي الشركات على إثبات الامتثال لمتطلبات المحتوى المحلي في المملكة العربية السعودية. نحن نقدم دعمًا شاملاً في الحصول على الشهادة، مما يضمن أن مؤسستك تعزز من مساهمتها المحلية وتؤهلها للعقود الحكومية والحوافز."
       serviceInclude1Title="تقييم المحتوى المحلي:"
       serviceInclude1Description="تقييم محتوى مؤسستك المحلي من حيث السلع والخدمات والقوى العاملة والأصول لضمان الامتثال لإرشادات المحتوى المحلي."
       serviceInclude2Title="إعداد الوثائق المطلوبة:"
       serviceInclude2Description="مساعدة في إعداد وتقديم جميع الوثائق اللازمة للحصول على شهادة المحتوى المحلي."
       serviceInclude3Title="دعم التدقيق:"
       serviceInclude3Description="تقديم الدعم أثناء عمليات تدقيق المحتوى المحلي من قبل الجهات الحكومية أو الهيئات التنظيمية."
       serviceInclude4Title="استشارة في تحسين المحتوى المحلي:"
       serviceInclude4Description="تقديم المشورة بشأن استراتيجيات لزيادة المحتوى المحلي وتحسين أهليتك للعقود المستقبلية والمبادرات."
       serviceInclude5Title="التقارير الدورية ومراجعة الامتثال:"
       serviceInclude5Description="تقديم مراجعات وتقارير دورية لضمان الاستمرار في الامتثال للوائح ومعايير المحتوى المحلي."
       whyUsP="يضمن فريقنا المتخصص أن تلتزم مؤسستك بإرشادات المحتوى المحلي بدقة وسرية. نحن ملتزمون بتحقيق أقصى استفادة من أهليتك للعقود الحكومية والمبادرات."
       contactMsg="اتصل بنا اليوم لمعرفة المزيد حول كيفية دعم خدمات شهادة المحتوى المحلي في نمو أعمالك ونجاحك."
      />
      <ContactInfoAr />
      <FooterAr />
    </>
  );
}

export default CertificateAr;
