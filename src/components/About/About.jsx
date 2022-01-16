import React from "react";
import "./About.css";

const About = (props) => {
  return (
    <div className="about">
      <h2 className="about__title">About Me</h2>
      <p className="about__content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices
        lorem at nisi eleifend, et ultricies augue tristique. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Nulla laoreet vitae sapien vitae condimentum. Fusce euismod,
        velit et dapibus vehicula, lacus erat faucibus sapien, vel maximus nulla
      </p>
      <p className="about__content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices
        lorem at nisi eleifend, et ultricies augue tristique. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas.
      </p>
    </div>
  );
};

export default About;
