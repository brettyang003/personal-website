import React from "react";
import "./About.css";

const About = (props) => {
  return (
    <div className="about">
      <h2 className="about__title">About Me</h2>
      <p className="about__content">
        Hi, my name is Brett and I'm a computer engineering student at the
        University of Toronto. I have a big passion for programming, always
        finding myself either trying to learn the newest technology or working
        on a side project. I'm most proficient in Javascript along with its
        frameworks and libraries including React and Express (Node.js). I also
        have a lot of experience with HTML/CSS and MongoDB.
      </p>
      <p className="about__content">
        Outside of school and coding, I enjoy playing tennis and chess.
      </p>
    </div>
  );
};

export default About;
