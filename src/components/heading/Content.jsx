import React from "react";
import "./heading.css";

const Content = ({ content, color, className }) => {
  return (
    <h4 className={`medium-with-bold ${className || ""} ${color || ""}`}>
      {content}
    </h4>
  );
};

export default Content;