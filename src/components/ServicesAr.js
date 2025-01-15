import React from "react";
import Accounting from "../assets/accounting.jpeg";
import Consulting from "../assets/consulting.jpeg";
import Tax from "../assets/tax.jpeg";
import Certificate from "../assets/certificate.jpeg";
import Feasibility from "../assets/feasibility-study.jpeg";
import Formation from "../assets/company-formation.jpeg";
import Financing from "../assets/financing.jpeg";
import { Link } from "react-router-dom";
import "./style/service.scss";

function ServicesAr() {
  return (
    <div className="services py-5 mt-4 services-ar" dir="rtl">
      <div className="container px-lg-5">
        <div className="head-section-title text-center">
          <span className="over-title">تمكين أعمالك</span>
          <h2>
            <span className="first-lines"></span>
            <span className="title">خدماتنا</span>
            <span className="last-lines"></span>
          </h2>
          <p>
            نقدم مجموعة متنوعة من الخدمات لعملائنا، مع التركيز على التدقيق،
            والإدارة المالية، وإدارة العمليات، والمهام المحاسبية الروتينية. تشمل
            خدماتنا الرئيسية الفئات التالية:
          </p>
        </div>
        <div className="services-grid mt-5">
          <section className="service">
            <div className="service-img">
              <img
                loading="lazy"
                src={Accounting}
                alt="خدمات المحاسبة ومسك الدفاتر"
              />
            </div>
            <div className="service-information">
              <h3>خدمات المحاسبة ومسك الدفاتر</h3>
              <p>
                نقدم خدمات محاسبية ومسك دفاتر دقيقة وموثوقة تتناسب مع احتياجات
                عملائنا. من خلال تقديم بيانات مالية موثوقة، نساعد المؤسسات في
                تقييم أدائها الحالي ووضع تنبؤات مدروسة للنمو المستقبلي.
              </p>
            </div>
            <Link to="/ar/خدماتنا/accounting-and-bookkeeping-services">
              اقرأ المزيد
            </Link>
          </section>

          <section className="service">
            <div className="service-img">
              <img loading="lazy" src={Tax} alt="خدمات الزكاة والضرائب" />
            </div>
            <div className="service-information">
              <h3>خدمات الزكاة والضرائب</h3>
              <p>
                نظراً لأهمية الالتزام بالزكاة والضرائب، نلتزم بتقديم نصائح
                وخبرات متخصصة. يضمن فريقنا حصول العملاء على الاستراتيجيات والدعم
                الأكثر فاعلية فيما يتعلق بجميع الأمور المرتبطة بالزكاة والضرائب.
              </p>
            </div>
            <Link to="/ar/خدماتنا/zakkat-and-tax-services">اقرأ المزيد</Link>
          </section>

          <section className="service">
            <div className="service-img">
              <img
                loading="lazy"
                src={Consulting}
                alt="خدمات الاستشارات المالية"
              />
            </div>
            <div className="service-information">
              <h3>الاستشارات المالية</h3>
              <p>
                نقدم خدمات استشارية متخصصة وتوصيات استراتيجية تهدف إلى تعزيز
                الكفاءة وضمان الجودة والالتزام بأعلى معايير المهنية، مما يساعد
                المؤسسات على تحسين عملياتها.
              </p>
            </div>
            <Link to="/ar/خدماتنا/financial-consulting">اقرأ المزيد</Link>
          </section>

          <section className="service">
            <div className="service-img">
              <img
                loading="lazy"
                src={Certificate}
                alt="إصدار شهادة تصنيف المقاولين"
              />
            </div>
            <div className="service-information">
              <h3>إصدار شهادة تصنيف المقاولين</h3>
              <p>
                نحن نساعد المقاولين في الحصول على شهادات التصنيف الرسمية، مما
                يضمن تلبيتهم للمعايير الصناعية وتأهيلهم للمشاريع الكبيرة في مجال
                البناء. تساعد عمليتنا المبسطة في تعزيز المصداقية وتوسيع الفرص
                التجارية.
              </p>
            </div>
            <Link to="/ar/خدماتنا/contractor-classification-certificate-issuance">
              اعرف المزيد
            </Link>
          </section>

          <section className="service">
            <div className="service-img">
              <img loading="lazy" src={Formation} alt="خدمات تأسيس الشركات" />
            </div>
            <div className="service-information">
              <h3>خدمات تأسيس الشركات</h3>
              <p>
                نحن نقدم دعمًا شاملاً لتأسيس الشركات الجديدة، مع التعامل مع جميع
                المتطلبات القانونية والإدارية والتوثيقية. تضمن خدمتنا عملية
                تأسيس سلسة، مما يسمح للعملاء بالتركيز على نمو أعمالهم.
              </p>
            </div>
            <Link to="/ar/خدماتنا/company-formation-services/">اعرف المزيد</Link>
          </section>

          <section className="service">
            <div className="service-img">
              <img loading="lazy" src={Financing} alt="خدمات التمويل" />
            </div>
            <div className="service-information">
              <h3>خدمات التمويل</h3>
              <p>
                نحن نقدم حلول تمويل مخصصة لدعم مشاريع البناء ونمو الأعمال. تساعد
                خدمتنا العملاء في الحصول على الأموال اللازمة بشروط مرنة وإرشادات
                من خبراء.
              </p>
            </div>
            <Link to="/ar/خدماتنا/financing-services/">اعرف المزيد</Link>
          </section>

          <section className="service">
            <div className="service-img">
              <img loading="lazy" src={Feasibility} alt="خدمات دراسات الجدوى" />
            </div>
            <div className="service-information">
              <h3>خدمات دراسات الجدوى</h3>
              <p>
                نقوم بإجراء دراسات جدوى مفصلة لتقييم جدوى مشاريع البناء. تغطي
                تحليلاتنا الجوانب الفنية والمالية والسوقية، مما يساعد العملاء
                على اتخاذ قرارات مدروسة وتقليل المخاطر.
              </p>
            </div>
            <Link to="/ar/خدماتنا/feasibility-studies-services/">اعرف المزيد</Link>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ServicesAr;
