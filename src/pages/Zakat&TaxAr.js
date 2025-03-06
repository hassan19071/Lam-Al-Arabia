import React, { useEffect } from "react";
import { Helmet } from "react-helmet"; // Import React Helmet
import ServiceDetailsAr from "../components/ServicesDetailsAr";
import NavbarAr from "../components/NavbarAr";
import ContactInfoAr from "../components/ContactInfoAr";
import FooterAr from "../components/FooterAr";
import MiniHeroAr from "../components/MiniHeroAr";

function ZakkatATaxAr() {
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
        <title>خدمات الزكاة والضرائب - لام العربية</title>
        <meta
          name="description"
          content="تقدم لام العربية خدمات الزكاة والضرائب المتخصصة لمساعدة الشركات في الامتثال للوائح المملكة العربية السعودية. احصل على المساعدة في تقديم الإقرارات الزكوية، تسجيل ضريبة القيمة المضافة، الاستشارات الضريبية، والمزيد."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="خدمات الزكاة والضرائب - لام العربية"
        />
        <meta
          property="og:description"
          content="اكتشف كيف تضمن خدمات الزكاة والضرائب من لمى العربية التزام عملك باللوائح الضريبية السعودية، بينما تحسن الأداء المالي."
        />
        <meta
          property="og:url"
          content="https://yourwebsite.com/services/zakat-and-tax"
        />
      </Helmet>

      <NavbarAr page="zakat and tax" />
      <MiniHeroAr title="خدمات الزكاة والضرائب" />
      <ServiceDetailsAr
        serviceTitle="خدمات الزكاة والضرائب"
        briefDescription="نحن ندرك أن الامتثال للزكاة والضرائب أمر بالغ الأهمية للشركات العاملة في المملكة العربية السعودية. خدماتنا المتخصصة في الزكاة والضرائب تضمن أن تلبي مؤسستكم جميع المتطلبات التنظيمية مع تحسين الكفاءة الضريبية."
        serviceInclude1Title="الامتثال الزكوي وتقديم الإقرارات:"
        serviceInclude1Description="إعداد الإقرارات الزكوية وفقاً للوائح هيئة الزكاة والضريبة والجمارك (ZATCA) والتأكد من حساب الالتزامات الزكوية بدقة بناءً على أحدث الإرشادات."
        serviceInclude2Title="خدمات الاستشارات الضريبية:"
        serviceInclude2Description="تقديم استشارات متخصصة حول لوائح ضريبة القيمة المضافة (VAT)، وضريبة الاستقطاع، وضريبة الدخل على الشركات، ومساعدة الشركات على فهم وتنفيذ استراتيجيات ضريبية فعّالة لتقليل الالتزامات."
        serviceInclude3Title="تسجيل ضريبة القيمة المضافة وتقديم الإقرارات:"
        serviceInclude3Description="المساعدة في تسجيل ضريبة القيمة المضافة لدى الجهات المختصة، وإعداد وتقديم إقرارات ضريبة القيمة المضافة لضمان الامتثال للوائح ضريبة القيمة المضافة في المملكة."
        serviceInclude4Title="دعم التدقيق الضريبي:"
        serviceInclude4Description="تمثيل العملاء أثناء عمليات التدقيق الضريبي وتوفير الوثائق اللازمة، وضمان التعامل السلس مع عمليات التدقيق الضريبي وحل أي مشكلات مع الجهات المختصة."
        serviceInclude5Title="تخطيط الزكاة والضرائب:"
        serviceInclude5Description="تطوير استراتيجيات تخطيط الزكاة والضرائب لتحسين الوضع المالي للشركة، وضمان اتخاذ تدابير استباقية لتجنب العقوبات الناجمة عن عدم الامتثال."
        whyUsP="يضمن فريقنا المخصص من المحترفين في مجال المحاسبة التعامل مع بياناتكم المالية بأعلى درجات الدقة والسرية. نحن ملتزمون بمساعدة مؤسستكم على تحقيق الوضوح المالي، وتحسين الكفاءة التشغيلية، والامتثال لكافة اللوائح التنظيمية."
        contactMsg="تواصلوا معنا اليوم لمعرفة المزيد عن خدماتنا في المحاسبة، ومسك الدفاتر، والزكاة، والضرائب وكيف يمكنها دعم نمو ونجاح أعمالكم."
      />
      <ContactInfoAr />
      <FooterAr />
    </>
  );
}

export default ZakkatATaxAr;
