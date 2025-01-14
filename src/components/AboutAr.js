import React from "react";
import "./style/about.scss";
import AboutImg from "../assets/about-us.jpg";
import { Link } from "react-router-dom";

const AboutUsAr = () => {
  return (
    <section className="about-us py-5 about-ar" dir="rtl">
      <div className="container px-lg-5 py-5">
        <div className="row">
          <div className="col-lg-6 pe-lg-3">
            <div className="about-us-img">
              <img
                src={AboutImg}
                alt="خدمات استشارية مهنية"
                width="100%"
                loading="lazy"
                sizes="(max-width: 480px) 480px, (max-width: 768px) 800px, 1200px"
              />
            </div>
          </div>
          <div className="col-lg-6 mt-lg-0 mt-4">
            <div className="about-us-text">
              <div className="head-section-title">
                <span className="over-title">تعرف علينا</span>
                <h2>
                  <span className="first-lines"></span>
                  <span className="title">عن لام العربية</span>
                  <span className="last-lines"></span>
                </h2>
              </div>
              <p className="mt-3">
                لام العربية للاستشارات المهنية هي شركة استشارات موثوقة مكرسة
                لتقديم حلول أعمال مخصصة عبر صناعات مختلفة. نحن متخصصون في تقديم
                الإرشادات الخبيرة، والتخطيط الاستراتيجي، والحلول المبتكرة
                لمساعدة الأعمال على النمو، وتحسين العمليات، والتعامل مع التحديات
                المعقدة. يعمل مستشارونا ذوو الخبرة عن كثب مع العملاء لتطوير
                استراتيجيات قابلة للتنفيذ لتحقيق النجاح المستدام في سوق اليوم
                التنافسي.
              </p>
              <p>
                نحن نمكّن الأعمال من تحقيق النمو المستدام من خلال استراتيجيات
                مبتكرة وإرشادات خبيرة. نحن ملتزمون بتقديم حلول مخصصة تدفع النجاح
                وتساعد المنظمات على التنقل في سوق اليوم الديناميكي.
              </p>
              <Link to="/ar/من-نحن">اقرأ المزيد</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsAr;
