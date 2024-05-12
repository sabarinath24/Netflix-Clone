import React from "react";
import "./button.css";

const Button = ({
  bg,
  size,
  color,
  value,
  rounded,
  icon,
  onclick,
  iconProp,
  type,
}) => {
  return (
    <button
      className={`${bg || ""} ${color || ""} ${rounded && rounded} ${
        size || ""
      } `}
      type={type || ""}
      onClick={onclick}
    >
      {value}
      {icon && <div className={`${iconProp || ""}`}>{icon}</div>}
    </button>
  );
};

export default Button;