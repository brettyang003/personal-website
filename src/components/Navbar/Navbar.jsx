import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import "./Navbar.css";
import background from "../../assets/background.jpeg";
import Modal from "../ResumeModal/Modal";

const NavBar = (props) => {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div style={{ backgroundImage: `url(${background})` }} className="parent">
      <Modal show={showModal} handleClose={handleClose} />
      <nav class="navbar navbar-expand-md navbar-dark">
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
            <button className="styling shadow-lg " onClick={handleShow}>
              Resume
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
