import React from "react";
import "./Projects.css";
import Card from "../UI/Card";
import { cardContent } from "../UI/CardContent.js";
import { languages } from "../UI/CardContent.js";

const Projects = (props) => {
  return (
    <div className="projects">
      <h2 className="projects__title">Projects</h2>

      <div className="row justify-content-sm-center">
        <div className="col-auto  d-flex align-items-stretch">
          <Card
            color="#637B83"
            buttonColor="#96AFB8"
            languages={languages[0]}
            link={0}
            content={cardContent[0]}
            title="BookMarker"
          />
        </div>
        <div className="col-auto  d-flex align-items-stretch">
          <Card
            color="#8A7FA5"
            buttonColor="#beaee8"
            languages={languages[1]}
            link={1}
            content={cardContent[1]}
            title="Marketplace App"
          />
        </div>
        <div className="col-auto d-flex align-items-stretch">
          <Card
            color="#86576E"
            buttonColor="#b27492"
            languages={languages[2]}
            link={2}
            content={cardContent[2]}
            title="Mailing List"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
