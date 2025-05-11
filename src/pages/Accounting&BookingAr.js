import React, { useEffect, lazy, Suspense } from "react";
import { Helmet } from "react-helmet";

// Lazy load components
const NavbarAr = lazy(() => import("../components/NavbarAr"));
const MiniHeroAR = lazy(() => import("../components/MiniHeroAr"));
const ContactInfoAr = lazy(() => import("../components/ContactInfoAr"));
const FooterAr = lazy(() => import("../components/FooterAr"));
const ServiceDetailsAr = lazy(() => import("../components/ServicesDetailsAr"));
const Loading = lazy(()=> import("../components/Loading"));
function AccountingABookkeepingAr() {
  useEffect(() => {
    document.body.dir = "rtl";
    document.documentElement.lang = "ar";
    window.scrollTo(0, 0);
    return () => {
      document.body.dir = "ltr";
      document.documentElement.lang = "en";
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
        <meta property="og:title" content="خدمات المحاسبة ومسك الدفاتر - لام العربية" />
        <meta
          property="og:description"
          content="خدمات المحاسبة ومسك الدفاتر الاحترافية لإدارة البيانات المالية، بما في ذلك إعداد التقارير، والمطابقة البنكية، والرواتب والمزيد."
        />
        <meta
          property="og:url"
          content="https://lam.com.sa/services/accounting-and-bookkeeping-services"
        />
      </Helmet>

      <Suspense fallback={<Loading/>}>
        <NavbarAr page="accounting" />
        <MiniHeroAR title={"خدمات المحاسبة ومسك الدفاتر"} />
        <ServiceDetailsAr
          serviceTitle="خدمات المحاسبة ومسك الدفاتر"
          briefDescription="في بيئة الأعمال المتغيرة اليوم..."
          serviceInclude1Title="إدارة دفتر الأستاذ العام:"
          serviceInclude1Description="نضمن تسجيل جميع المعاملات بدقة..."
          serviceInclude2Title="حسابات الدائنين والمدينين:"
          serviceInclude2Description="نتولى إدارة حسابات الدائنين والمدينين..."
          serviceInclude3Title="إعداد التقارير المالية:"
          serviceInclude3Description="نقوم بإعداد تقارير مالية مفصلة..."
          serviceInclude4Title="المطابقة البنكية:"
          serviceInclude4Description="نقوم بإجراء المطابقة البنكية بانتظام..."
          serviceInclude5Title="معالجة الرواتب:"
          serviceInclude5Description="نقدم خدمات الرواتب لضمان دفع رواتب موظفيك..."
          whyUsP="يضمن فريقنا المتخصص من المحاسبين..."
          contactMsg="اتصل بنا اليوم لمعرفة المزيد..."
        />
        <ContactInfoAr />
        <FooterAr />
      </Suspense>
    </>
  );
}

export default AccountingABookkeepingAr;
