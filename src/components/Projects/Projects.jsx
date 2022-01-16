import React from "react";
import "./Projects.css";
import Card from "../UI/Card";
import { cardContent } from "../UI/CardContent.js";
import { languages } from "../UI/CardContent.js";

const Projects = (props) => {
  return (
    <div className="projects">
      <h2 className="projects__title">Projects</h2>

      <div className="card-group">
        <Card
          languages={languages[0]}
          link={0}
          content={cardContent[0]}
          title="BookMarker"
        />
        <Card
          languages={languages[1]}
          link={1}
          content={cardContent[1]}
          title="Marketplace App"
        />
        <Card
          languages={languages[2]}
          link={2}
          content={cardContent[2]}
          title="Mailing List"
        />
      </div>
    </div>
  );
};

export default Projects;
