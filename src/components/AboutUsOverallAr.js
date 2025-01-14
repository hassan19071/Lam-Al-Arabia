import React from "react";
import "./style/about.scss";
import AboutImg from "../assets/about-us.jpg";
import MissionIcon from "../assets/mission.png";
import VisionIcon from "../assets/shared-vision.png";
import ApprochIcon from "../assets/methods.png";
import ExpertiseIcon from "../assets/expert.png";
import ValuesIcon from "../assets/value.png";

function AboutUsOverallAr() {
  return (
    <div className="about-us py-5 about-ar" dir="rtl">
      <div className="container px-lg-5 py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 pe-lg-3">
            <div className="about-us-img">
              <img
                src={AboutImg}
                alt="استشارات احترافية"
                width="100%"
                loading="lazy"
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
                لام العربية للاستشارات الاحترافية هي شركة استشارية رائدة تقدم حلولًا
                مخصصة لتلبية احتياجات المؤسسات في مختلف الصناعات. مع سمعة مبنية
                على الثقة والخبرة والابتكار، نلتزم بتمكين الشركات من تحقيق
                إمكاناتها الكاملة من خلال توفير التوجيه الاستراتيجي، وتحسين
                العمليات، وتقديم حلول مبتكرة تحقق النجاح المستدام.
              </p>
              <p>
                في لام العربية، نؤمن ببناء علاقات طويلة الأمد مع عملائنا من خلال
                تقديم الدعم المستمر ومرافقتهم في كل مرحلة من مراحل رحلتهم
                التجارية. فريق خبرائنا دائمًا مستعد لمواجهة التحديات الجديدة
                وتقديم رؤى تحدث تغييرات تحولية تدفع النمو والربحية.
              </p>
            </div>
          </div>
        </div>

        <section className="company-grid mt-5">
          <article className="company-feature d-flex">
            <div className="icon ms-3">
              <img
                src={MissionIcon}
                alt="رسالة لام العربية للاستشارات"
              />
            </div>
            <div className="text">
              <h3>رسالتنا</h3>
              <p>
                رسالتنا بسيطة – مساعدة المؤسسات على الازدهار في بيئة السوق
                المتطورة والتنافسية اليوم. نحقق ذلك من خلال استغلال معرفتنا
                العميقة بالصناعة وخبرتنا الفنية واستراتيجياتنا المبتكرة. في لام
                العربية، نؤمن بخلق قيمة طويلة الأمد من خلال توافق خدماتنا مع
                أهداف عملائنا وضمان تنفيذ استراتيجيات مخصصة تحقق نتائج ملموسة.
              </p>
            </div>
          </article>

          <article className="company-feature d-flex">
            <div className="icon ms-3">
              <img
                src={VisionIcon}
                alt="رؤية لام العربية للاستشارات"
              />
            </div>
            <div className="text">
              <h3>رؤيتنا</h3>
              <p>
                رؤيتنا في لام العربية هي أن نكون الشريك الاستشاري الرائد للشركات
                التي تسعى إلى النمو المستدام والتميز التشغيلي في بيئة عالمية
                متغيرة باستمرار. نطمح إلى أن نكون مستشارًا موثوقًا يقدم خبرة لا
                مثيل لها وحلولًا مبتكرة والتزامًا بالنجاح طويل الأمد.
              </p>
            </div>
          </article>

          <article className="company-feature d-flex">
            <div className="icon ms-3">
              <img
                src={ValuesIcon}
                alt="قيم لام العربية للاستشارات"
              />
            </div>
            <div className="text">
              <h3>قيمنا</h3>
              <p>
                في لام العربية للاستشارات، نحن نقدر النزاهة، والتميز، والابتكار،
                والتعاون. نولي الأولوية للصدق والشفافية، ونقدم حلولًا عالية
                الجودة، ونتبنى الإبداع، ونعمل عن كثب مع العملاء لتحقيق النجاح
                المشترك من خلال شراكات قوية طويلة الأمد.
              </p>
            </div>
          </article>

          <article className="company-feature d-flex">
            <div className="icon ms-3">
              <img
                src={ExpertiseIcon}
                alt="خبرات لام العربية للاستشارات"
              />
            </div>
            <div className="text">
              <h3>خبراتنا</h3>
              <p>
                تشمل خبرات لام العربية للاستشارات التخطيط الاستراتيجي، وتطوير
                الأعمال، وكفاءة العمليات، والاستشارات المالية، وإدارة المخاطر،
                وأبحاث السوق، والاستشارات التقنية. نحن نساعد الشركات على تحسين
                العمليات، ودفع عجلة النمو، والبقاء في صدارة السوق المتغيرة
                بسرعة.
              </p>
            </div>
          </article>

          <article className="company-feature d-flex">
            <div className="icon ms-3">
              <img
                src={ApprochIcon}
                alt="نهج لام العربية للاستشارات"
              />
            </div>
            <div className="text">
              <h3>نهجنا</h3>
              <p>
                في لام العربية، نؤمن بنهج يركز على العميل. نفهم أن كل عمل له
                خصوصيته، وبالتالي نخصص حلولنا لتتماشى مع الأهداف والاحتياجات
                المحددة لعملائنا. يأخذ مستشارونا الوقت للاستماع والتحليل
                والتعاون معك في كل خطوة، مما يضمن أن تكون الاستراتيجيات التي
                نطورها عملية وقابلة للتنفيذ وتحقق نتائج قابلة للقياس.
              </p>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}

export default AboutUsOverallAr;
