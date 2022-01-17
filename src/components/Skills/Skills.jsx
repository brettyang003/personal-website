import React from "react";
import "./Skills.css";
import Row from "./Row";

const Skills = (props) => {
  return (
    <div className="skills">
      <h2 className="skills__title">Skills</h2>
      <div class="container">
        <Row language="Javascript" level="9" />
        <Row language="CSS" level="8" />
        <Row language="HTML" level="8" />
        <Row language="React" level="9" />
        <Row language="Express" level="7" />
        <Row language="Node.js" level="6" />
        <Row language="MongoDB" level="5" />
        <div className="row skills__last">
          <div className={`col-2 rounded-start languages`}>Bootstrap</div>
          <div className={`col-${7} skillLevel`}>7</div>
          <div className={`col-${10 - 7} rounded-end skillDisparity`}></div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
