import React from "react";
import Accounting from "../assets/accounting.jpeg";
import Consulting from "../assets/consulting.jpeg";
import Tax from "../assets/tax.jpeg";
import Certificate from "../assets/certificate.jpg";
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
                alt="إصدار شهادة المحتوى المحلي"
              />
            </div>
            <div className="service-information">
              <h3>إصدار شهادة المحتوى المحلي</h3>
              <p>
                تهدف هذه الخدمة إلى تقييم نسبة المحتوى المحلي داخل الكيان، مما
                يمكن من إصدار شهادة المحتوى المحلي. يركز التقييم على المكونات
                الأساسية للمحتوى المحلي لضمان الامتثال والحصول على الشهادة.
              </p>
            </div>
            <Link to="/ar/خدماتنا/Issuance-of-Local-Content-Certificate">
              اقرأ المزيد
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ServicesAr;
