import React from "react";
import "./heading.css";

const Heading = ({ title, size, align, color }) => {
  return (
    <h1 className={`${size || ""} ${align || ""} ${color || ""}`}>{title}</h1>
  );
};

export default Heading;