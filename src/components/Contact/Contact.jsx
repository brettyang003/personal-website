import React from "react";
import "./Contact.css";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import email from "../../assets/mail.png";

const Contact = (props) => {
  return (
    <div className="contact">
      <h2 className="contact__title">Contact</h2>
      <div className="contact__content">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/brettyang003"
        >
          <img
            className="contact__logo"
            src={github}
            width="100px"
            height="100px"
            alt=""
          />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/brett-yang-7526001b1/"
        >
          <img
            className="contact__logo"
            src={linkedin}
            width="100px"
            height="100px"
            alt=""
          />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="mailto:brettyang78@gmail.com"
        >
          <img
            className="contact__logo"
            src={email}
            width="100px"
            height="100px"
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default Contact;
