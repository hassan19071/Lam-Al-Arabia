import React from "react";
import "./style/service-details.scss";
function ServiceDetails({
  serviceTitle,
  briefDescription,
  serviceInclude1Description,
  serviceInclude1Title,
  serviceInclude2Title,
  serviceInclude3Title,
  serviceInclude4Title,
  serviceInclude5Title,
  serviceInclude2Description,
  serviceInclude3Description,
  serviceInclude4Description,
  serviceInclude5Description,
  whyUsP,
  contactMsg,
}) {
  return (
    <div className="service-details py-5">
      <div className="container px-lg-5 py-4">
        <div className="details">
          <h3>{serviceTitle}</h3>
          <p>{briefDescription}</p>
          <h4>Our Comprehensive Services</h4>
          <ul>
            <li>
              <strong>{serviceInclude1Title}</strong>{" "}
              {serviceInclude1Description}
            </li>
            <li>
              <strong>{serviceInclude2Title}</strong>{" "}
              {serviceInclude2Description}
            </li>
            <li>
              <strong>{serviceInclude3Title}</strong>{" "}
              {serviceInclude3Description}
            </li>
            <li>
              <strong>{serviceInclude4Title}</strong>{" "}
              {serviceInclude4Description}
            </li>
            <li>
              <strong>{serviceInclude5Title}</strong>{" "}
              {serviceInclude5Description}
            </li>
          </ul>
          <h4>Why Choose Us?</h4>
          <p>{whyUsP}</p>
          <p>{contactMsg}</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetails;
