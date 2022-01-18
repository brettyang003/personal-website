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
    <div
      style={{ backgroundImage: `url(${background})`, zIndex: "100" }}
      className="parent"
    >
      <Modal show={showModal} handleClose={handleClose} />

      <div className="row nav__content">
        <div className="col-lg-7 align-self-center">
          <span className="title">Hello, I'm Brett</span>
          <span class="input-cursor"></span>
          <p className="description">
            Welcome to my personal website/portfolio! This website was made with
            HTML/CSS and React.
          </p>
          <button className="styling shadow-lg " onClick={handleShow}>
            Resume
          </button>
        </div>
        <div
          style={{ backgroundColor: "transparent" }}
          className="col-lg-5"
        ></div>
      </div>
    </div>
  );
};

export default NavBar;
