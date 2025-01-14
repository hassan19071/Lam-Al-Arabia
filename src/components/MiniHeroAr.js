import React from "react";
import "./style/hero.scss";
function MiniHeroAr({ title }) {
  return (
    <div className="mini-hero">
      <div className="container px-lg-5">
        <div className="text-center hero-text">
          <h2>{title}</h2>
        </div>
      </div>
    </div>
  );
}

export default MiniHeroAr;
