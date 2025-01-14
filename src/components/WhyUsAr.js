import React from "react";
import WhyUsImg from "../assets/consulting.jpeg";
import "./style/why-us.scss";

function WhyUsAr() {
  return (
    <div className="why-us py-5 why-us-ar" dir="rtl">
      <div className="container px-lg-5">
        <div className="row">
          <div className="col-lg-6 order-lg-1 order-2">
            <div className="why-us-text">
              <div className="head-section-title">
                <span className="over-title">شريكك الموثوق</span>
                <h2>
                  <span className="first-lines"></span>
                  <span className="title">لماذا تختار لام العربية؟</span>
                  <span className="last-lines"></span>
                </h2>
              </div>
              <ul>
                <li>
                  <strong>سجل حافل بالنجاحات:</strong> لدينا تاريخ حافل بمساعدة
                  الشركات في مختلف القطاعات على تحقيق أهدافها الاستراتيجية
                  والتغلب على التحديات المعقدة.
                </li>
                <li>
                  <strong>خبرة في مختلف الصناعات:</strong> يتمتع مستشارونا بخبرة
                  تمتد لسنوات في مجموعة متنوعة من الصناعات، مما يتيح لنا تقديم
                  رؤى ذات صلة وقابلة للتطبيق.
                </li>
                <li>
                  <strong>حلول مخصصة:</strong> نحن ندرك أن الحلول الموحدة لا
                  تناسب الجميع. نهجنا هو تقديم استراتيجيات مخصصة تلبي التحديات
                  والفرص الفريدة لعملك.
                </li>
                <li>
                  <strong>نتائج مستدامة:</strong> نركز على تقديم نمو طويل الأمد
                  ومستدام بدلاً من الحلول المؤقتة. نبني حلولًا تصمد أمام اختبار
                  الزمن.
                </li>
                <li>
                  <strong>رؤية عالمية مع فهم محلي:</strong> نجمع بين أفضل
                  الممارسات العالمية ومعرفتنا بالسوق المحلي، مما يضمن أن تكون
                  حلولنا مبتكرة وذات صلة ومؤثرة في بيئة عملك المحددة.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 pe-lg-4 mb-lg-0 mb-4 order-lg-2 order-1">
            <div className="why-us-img">
              <img
                src={WhyUsImg}
                alt="فريق لام العربية يعمل على نجاح العملاء"
                loading="lazy"
                width="100%"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUsAr;
