import React, { useEffect, Suspense } from "react";
import { Helmet } from "react-helmet"; // Import React Helmet
import TopHeaderAr from "../components/TopHeaderAr";

// Lazy load components
const NavbarAr = React.lazy(() => import("../components/NavbarAr"));
const MiniHeroAr = React.lazy(() => import("../components/MiniHeroAr"));
const ServiceDetailsAr = React.lazy(() =>
  import("../components/ServicesDetailsAr")
);
const ContactInfoAr = React.lazy(() => import("../components/ContactInfoAr"));
const FooterAr = React.lazy(() => import("../components/FooterAr"));
const Loading = React.lazy(() => import("../components/Loading"));
function FeasibilityStudyAr() {
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
        <title>خدمات دراسات الجدوى - لام العربية</title>
        <meta
          name="description"
          content="لام العربية تقدم خدمات دراسات جدوى مفصلة لتقييم جدوى مشاريعك الإنشائية. نحن نقدم تحليلات السوق والتقنية والمالية لضمان نجاح المشروع."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="خدمات دراسات الجدوى - لام العربية" />
        <meta
          property="og:description"
          content="ضمان نجاح مشاريعك الإنشائية مع دراسات الجدوى الشاملة من لام العربية. نحن نقدم تحليلات معمقة للسوق والمالية والتقنية لمساعدتك في اتخاذ قرارات مدروسة."
        />
        <meta
          property="og:url"
          content="https://lam.com.sa/services/feasibility-study-services"
        />
      </Helmet>

      {/* Suspense to handle loading state while lazy components are loading */}
      <Suspense fallback={<Loading />}>
        <TopHeaderAr />
        <NavbarAr page="feasibility" />
        <MiniHeroAr title="خدمات دراسات الجدوى" />
        <ServiceDetailsAr
          serviceTitle="خدمات دراسات الجدوى"
          briefDescription="تساعد خدمات دراسات الجدوى لدينا الشركات في تقييم جدوى وربحية المشاريع الإنشائية والتطويرية. نحن نقدم تحليلات معمقة ورؤى قابلة للتنفيذ، مما يمكنك من اتخاذ قرارات استثمارية مدروسة."
          serviceInclude1Title="تحليل السوق:"
          serviceInclude1Description="تقييم الطلب في السوق، المنافسة، وفرص النمو المحتملة."
          serviceInclude2Title="الجدوى التقنية:"
          serviceInclude2Description="تقييم المتطلبات التقنية، الموارد، والبنية التحتية اللازمة للمشروع."
          serviceInclude3Title="التحليل المالي:"
          serviceInclude3Description="تقديم تقديرات مالية مفصلة، بما في ذلك تقدير التكاليف، توقعات الإيرادات، وتحليل العائد على الاستثمار."
          serviceInclude4Title="تقييم المخاطر:"
          serviceInclude4Description="تحديد المخاطر المحتملة واقتراح استراتيجيات التخفيف لضمان نجاح المشروع."
          serviceInclude5Title="مراجعة الامتثال التنظيمي:"
          serviceInclude5Description="ضمان تلبية مشروعك لجميع المتطلبات القانونية والتنظيمية."
          whyUsP="يقدم فريقنا من الخبراء دراسات جدوى دقيقة وشاملة ومخصصة وفقًا لاحتياجاتك الخاصة. نحن نساعدك على تقليل المخاطر، وتحسين استخدام الموارد، وتعظيم نجاح المشروع."
          contactMsg="اتصل بنا اليوم لمعرفة المزيد حول كيفية دعم خدمات دراسات الجدوى لنمو عملك."
        />
        <ContactInfoAr />
        <FooterAr />
      </Suspense>
    </>
  );
}

export default FeasibilityStudyAr;
