import React from "react";
import "./style/features.scss";
import ExpertiseIcon from "../assets/expert.png";
import FocusIcon from "../assets/focus.png";
import SolutionIcon from "../assets/solution.png";
import ConsultingIcon from "../assets/consulting.png";
import ThinkingIcon from "../assets/innovative-thinking.png";
import MethodsIcon from "../assets/methods.png";
import InsighsIcon from "../assets/insight.png";
import CostIcon from "../assets/investment.png";

// Reusable Feature component
function Feature({ icon, title, description, altText }) {
  return (
    <div className="feature d-flex">
      <div className="feature-icon ms-3">
        <img src={icon} alt={altText} width="40px" />
      </div>
      <div className="feature-text">
        <h3 className="mt-0">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function FeaturesSectionAr() {
  return (
    <div className="features-section features-ar" dir="rtl">
      <div className="container px-lg-5">
        <div className="head-section-title">
          <span className="over-title">اكتشف ميزاتنا</span>
          <h2>
            <span className="first-lines"></span>
            <span className="title">أهم ميزاتنا</span>
            <span className="last-lines"></span>
          </h2>
        </div>
        <div className="features-grid mt-4">
          <Feature
            icon={ExpertiseIcon}
            title="الخبرة في مختلف الصناعات"
            description="سنوات من الخبرة في مختلف الصناعات، نوفر رؤى واستراتيجيات متخصصة."
            altText="الخبرة في مختلف الصناعات"
          />
          <Feature
            icon={SolutionIcon}
            title="حلول مخصصة"
            description="خدمات مصممة خصيصاً لتحقيق أهدافك والتغلب على التحديات التي تواجهك."
            altText="حلول مخصصة"
          />
          <Feature
            icon={MethodsIcon}
            title="سجل حافل بالنجاح"
            description="شراكات ناجحة ونتائج قابلة للقياس لمساعدة عملك على النمو."
            altText="سجل حافل بالنجاح"
          />
          <Feature
            icon={ThinkingIcon}
            title="استراتيجيات مبتكرة"
            description="نستخدم أحدث الاتجاهات والتقنيات لضمان تفوقك على المنافسين."
            altText="استراتيجيات مبتكرة"
          />
          <Feature
            icon={ConsultingIcon}
            title="دعم مخصص"
            description="دعم مستمر لضمان التنفيذ السلس وتحقيق النجاح المستمر."
            altText="دعم مخصص"
          />
          <Feature
            icon={InsighsIcon}
            title="رؤى مدعومة بالبيانات"
            description="نستخدم البيانات والأبحاث لمساعدتك في اتخاذ قرارات ذكية ومنافسة."
            altText="رؤى مدعومة بالبيانات"
          />
          <Feature
            icon={CostIcon}
            title="حلول فعالة من حيث التكلفة"
            description="نقوم بتحسين الموارد لتحقيق أقصى قيمة ونمو فعال مع تقليل التكاليف."
            altText="حلول فعالة من حيث التكلفة"
          />
          <Feature
            icon={FocusIcon}
            title="التركيز على الاستدامة"
            description="ممارسات صديقة للبيئة واستراتيجيات طويلة الأجل لضمان نمو مستدام."
            altText="التركيز على الاستدامة"
          />
        </div>
      </div>
    </div>
  );
}

export default FeaturesSectionAr;
