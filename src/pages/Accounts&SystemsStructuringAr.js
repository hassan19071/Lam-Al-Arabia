import React, { useEffect, lazy, Suspense } from "react";
import { Helmet } from "react-helmet";
import "../components/style/service-details.scss";

// Lazy load components
const NavbarAr = lazy(() => import("../components/NavbarAr"));
const MiniHeroAr = lazy(() => import("../components/MiniHeroAr"));
const ContactInfoAr = lazy(() => import("../components/ContactInfoAr"));
const FooterAr = lazy(() => import("../components/FooterAr"));
const Loading = lazy(()=> import("../components/Loading"));
function AccountsSystemsStructuringAr() {
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
        <title>هيكلة الحسابات والأنظمة - لام العربية</title>
        <meta
          name="description"
          content="تقدم لام العربية خدمات متخصصة في هيكلة الحسابات، بما في ذلك السياسات المالية، مسك الدفاتر، إدارة الرواتب، وتحسين الأنظمة لتعزيز كفاءة الأعمال."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="هيكلة الحسابات والأنظمة - لام العربية"
        />
        <meta
          property="og:description"
          content="عزز إدارة مواردك المالية من خلال خدماتنا المتخصصة في هيكلة الحسابات وتحسين الأنظمة. تضمن لم العربية الامتثال وتحسين الكفاءة التشغيلية."
        />
        <meta
          property="og:url"
          content="https://lam.com.sa/services/accounts-systems-structuring"
        />
      </Helmet>

      <Suspense fallback={<Loading/>}>
        <NavbarAr page="accounts-systems-structuring" />
        <MiniHeroAr title="هيكلة الحسابات والأنظمة" />

        <div className="container mx-auto px-lg-5 py-5 service-details text-right">
          <h2 className="text-3xl font-bold mb-4">هيكلة الحسابات والأنظمة</h2>
          <p className="mb-6">
            تم تصميم خدمة هيكلة الحسابات والأنظمة لدينا لمساعدة الشركات على إنشاء
            وتحسين الأطر المالية والإدارية. نحن نقدم حلولاً متكاملة لتعزيز الوضوح
            المالي، الامتثال التنظيمي، والكفاءة التشغيلية.
          </p>
          <h3>خدماتنا الشاملة</h3>
          <ul className="space-y-4 list-disc pr-5">
            <li>
              <strong>السياسات والإجراءات المالية:</strong> تطوير وتنفيذ السياسات
              المالية واللوائح الإدارية والإجراءات المنظمة.
            </li>
            <li>
              <strong>إعداد أنظمة المحاسبة:</strong> تصميم هيكلة الحسابات، أنظمة
              التكاليف، وأطر التقارير المالية.
            </li>
            <li>
              <strong>الامتثال والتوحيد القياسي:</strong> ضمان توافق الممارسات
              المالية مع المعايير المحاسبية الدولية والمتطلبات التنظيمية.
            </li>
            <li>
              <strong>إدارة سير العمل والوثائق:</strong> إنشاء وصيانة نظام توثيق
              فعال لتعزيز الدقة والمساءلة المالية.
            </li>
            <li>
              <strong>إدارة الرواتب والمدفوعات:</strong> تنفيذ أنظمة الرواتب،
              إدارة تعويضات الموظفين، وضمان الامتثال للأنظمة.
            </li>
            <li>
              <strong>التقارير والتحليل المالي:</strong> إعداد التقارير المالية،
              الميزانيات العمومية، وبيانات الدخل لدعم اتخاذ القرارات الاستراتيجية.
            </li>
            <li>
              <strong>دمج أنظمة المحاسبة والمخزون:</strong> تعزيز التنسيق بين
              أنظمة المحاسبة والرواتب وإدارة المخزون.
            </li>
          </ul>

          <div className="mt-8">
            <h3 className="text-2xl font-bold">لماذا نحن؟</h3>
            <p className="mt-2">
              بفضل خبرتنا، نضمن تحسين أنظمتك المالية والمحاسبية لتعزيز الكفاءة،
              الامتثال، والنمو. نهجنا المنظم يساعد الشركات على إدارة مواردها
              المالية بفعالية مع تقليل المخاطر وزيادة الربحية.
            </p>
          </div>

          <div className="mt-6">
            <p className="font-semibold">
              تواصل معنا اليوم لمعرفة كيف يمكن لخدمة هيكلة الحسابات والأنظمة أن
              تعزز عمليات عملك.
            </p>
          </div>
        </div>

        <ContactInfoAr />
        <FooterAr />
      </Suspense>
    </>
  );
}

export default AccountsSystemsStructuringAr;
