import React from "react";
import Container from "react-bootstrap/Container";
import "./Navbar.css";
import logo from "../../assets/universityLogo.png";
import Button from "../UI/Button";
import background from "../../assets/background.jpeg";

const NavBar = (props) => {
  return (
    <div style={{ backgroundImage: `url(${background})` }} className="parent">
      <nav class="navbar navbar-expand-md navbar-dark">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ms-auto ">
            <li class="nav-item ">
              <a href="#about" class="nav-link ">
                About Me
              </a>
            </li>
            <li class="nav-item mx-2">
              <a href="#projects" class="nav-link  ">
                Projects
              </a>
            </li>
            <li class="nav-item mx-2">
              <a href="#skills" class="nav-link ">
                Skills
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <Container className="content">
        <div className="row">
          <div className="col-lg-7 align-self-center">
            <span className="title">Hello, I'm Brett</span>
            <span class="input-cursor"></span>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              ultrices lorem at nisi eleifend, et ultricies augue tristique.
            </p>
            <Button content="Download" />
          </div>
          <div class="col-lg-5 align-self-center d-flex justify-content-start"></div>
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
