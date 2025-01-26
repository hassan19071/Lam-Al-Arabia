import React, { useEffect, useState } from "react";
import HeroImg01 from "../assets/hero-bg01.jpeg";
import HeroImg02 from "../assets/hero-bg02.jpeg";
import { Link } from "react-router-dom";
import "./style/hero.scss";

function HeroSectionAr() {
  let [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="hero-container hero-ar">
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={HeroImg01}
              className="d-block w-100"
              alt="استشارات مهنية"
              loading="lazy"
            />
            <div className="overlay position-absolute"></div>
            <div
              className={
                loaded
                  ? "hero-text carousel-caption animate"
                  : "hero-text carousel-caption"
              }
            >
              <h1>لام العربية للاستشارات المهنية</h1>
              <p className="mt-4">
                في لام العربية للاستشارات المهنية، نقدم الإرشاد الاستراتيجي
                والحلول المخصصة لمساعدة الأعمال على التفوق في السوق التنافسي.
                سواء كنت تتطلع لتحسين العمليات، أو دفع النمو، أو التعامل مع
                التحديات المعقدة، نحن شريكك الموثوق.
              </p>
              <Link to="/ar/تواصل-معنا">
              تواصل معنا <i className="fa-solid fa-angles-left"></i>
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={HeroImg02}
              className="d-block w-100"
              alt="استشارات مهنية"
              loading="lazy"
            />
            <div className="overlay position-absolute"></div>
            <div
              className={
                loaded
                  ? "hero-text carousel-caption animate"
                  : "hero-text carousel-caption"
              }
            >
              <h1>شريكك الموثوق للنجاح الاستراتيجي</h1>
              <p className="mt-4">
                نحن نضع أهداف عملك أولاً. يقدم فريقنا المخصص من المستشارين
                حلولاً شخصية لضمان نجاح منظمتك. دعونا نضع معاً خارطة طريق لنجاح
                مستقبلك.
              </p>
              <Link to="/ar/تواصل-معنا">
                 تواصل معنا <i className="fa-solid fa-angles-left"></i>
              </Link>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">السابق</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">التالي</span>
        </button>
      </div>
    </div>
  );
}

export default HeroSectionAr;
