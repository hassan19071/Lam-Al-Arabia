import React from "react";
import "./style/loading.scss";

const Loading = () => {
  return (
    <div className="spinner">
      <span className="spinner-inner-1"></span>
      <span className="spinner-inner-2"></span>
      <span className="spinner-inner-3"></span>
    </div>
  );
};

export default Loading;
