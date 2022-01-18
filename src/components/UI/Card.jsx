import React from "react";
import bookMarker from "../../assets/bookMarker.png";
import marketPlace from "../../assets/marketPlaceApp.png";
import mail from "../../assets/mail.jpeg";
import "../Projects/Projects.css";
import { links } from "./CardContent";

const Card = (props) => {
  const backgroundColor = { backgroundColor: `${props.color}`, width: "20rem" };
  const buttonColor = {
    backgroundColor: `${props.buttonColor}`,
    borderColor: `${props.buttonColor}`,
  };

  const determineImage = () => {
    if (props.link === 0) {
      return bookMarker;
    } else if (props.link === 1) {
      return marketPlace;
    } else if (props.link === 2) {
      return mail;
    }
  };

  return (
    <div class="card shadow-lg" style={backgroundColor}>
      <img src={determineImage()} class="card-img-top" alt="Project" />
      <div class="card-body" style={backgroundColor}>
        <h5 class="card-title">{props.title}</h5>
        <h6 class="card-subtitle mb-2 mt-2 subtitle">{props.languages}</h6>
        <p class="card-text description">{props.content}</p>
      </div>
      <a
        href={`${links[props.link]}`}
        class="btn btn-primary"
        style={buttonColor}
      >
        Github
      </a>
    </div>
  );
};

export default Card;
