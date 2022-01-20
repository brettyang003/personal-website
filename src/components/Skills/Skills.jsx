import React from "react";
import "./Skills.css";

const Skills = (props) => {
  return (
    <div className="skills">
      <h2 className="skills__title">Skills</h2>
      <div class="container">
        <div className="row skills__last">
          <div className={`col-3 rounded-start languages`}>Javascript</div>
          <div className={`col-${9} rounded-end skillLevel`}>10</div>
        </div>

        <div className="row skills__last">
          <div className={`col-2 rounded-start languages`}>CSS</div>
          <div className={`col-8 skillLevel`}>8</div>
          <div className={`col-2 rounded-end skillDisparity`}></div>
        </div>

        <div className="row skills__last">
          <div className={`col-2 rounded-start languages`}>HTML</div>
          <div className={`col-8 skillLevel`}>8</div>
          <div className={`col-2 rounded-end skillDisparity`}></div>
        </div>

        <div className="row skills__last">
          <div className={`col-3 rounded-start languages`}>Express</div>
          <div className={`col-6 skillLevel`}>7</div>
          <div className={`col-3 rounded-end skillDisparity`}></div>
        </div>

        <div className="row skills__last">
          <div className={`col-2 rounded-start languages`}>React</div>
          <div className={`col-10 rounded-end skillLevel`}>10</div>
        </div>

        <div className="row skills__last">
          <div className={`col-3 rounded-start languages`}>MongoDB</div>
          <div className={`col-5 skillLevel`}>6</div>
          <div className={`col-4 rounded-end skillDisparity`}></div>
        </div>

        <div className="row skills__last">
          <div className={`col-3 rounded-start languages`}>Bootstrap</div>
          <div className={`col-7 skillLevel`}>7</div>
          <div className={`col-2 rounded-end skillDisparity`}></div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
