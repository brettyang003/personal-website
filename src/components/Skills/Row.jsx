import React from "react";
import "./Skills.css";

const Row = (props) => {
  return (
    <div className="row skills__parent  ">
      <div className={`col-2 rounded-start languages`}>{props.language}</div>
      <div className={`col-${props.level} skillLevel`}>{props.level}</div>
      <div
        className={`col-${10 - props.level} rounded-end skillDisparity`}
      ></div>
    </div>
  );
};

export default Row;
