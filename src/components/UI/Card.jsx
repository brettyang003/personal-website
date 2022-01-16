import React from "react";
import bookMarker from "../../assets/bookMarker.png";
import marketPlace from "../../assets/marketPlaceApp.png";
import logo from "../../assets/universityLogo.png";
import "../Projects/Projects.css";

const Card = (props) => {
  const backgroundColor = { backgroundColor: "#433446" };

  const determineLink = () => {
    if (props.link === 0) {
      return bookMarker;
    } else if (props.link === 1) {
      return marketPlace;
    } else if (props.link === 2) {
      return logo;
    }
  };

  return (
    <div class="card cardStyle shadow-lg" style={backgroundColor}>
      <img
        src={determineLink()}
        class="card-img-top"
        width="100"
        height="200"
        alt="Project"
      />
      <div class="card-body" style={backgroundColor}>
        <h5 class="card-title">{props.title}</h5>
        <h6 class="card-subtitle mb-2 mt-2 subtitle text-muted">
          {props.languages}
        </h6>
        <p class="card-text description">{props.content}</p>
      </div>
    </div>
  );
};

export default Card;
