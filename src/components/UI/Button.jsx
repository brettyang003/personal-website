import React from "react";
import "./Button.css";

const Button = (props) => {
  return <button className="styling shadow-lg ">{props.content}</button>;
};

export default Button;
