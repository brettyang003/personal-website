import React, { useState } from "react";
import "./Navbar.css";
import Modal from "../ResumeModal/Modal";

const NavBar = (props) => {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div className="parent">
      <Modal show={showModal} handleClose={handleClose} />
      <div className="nav__content">
        <div className="align-self-center">
          <div className="nav__title">Hello, I'm Brett</div>
          <span class="input-cursor"></span>

          <div className="nav__description text-muted">
            Welcome to my personal website/portfolio! This website was made with
            HTML/CSS and React.
          </div>
          <div>
            <button className="styling shadow-lg " onClick={handleShow}>
              Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
