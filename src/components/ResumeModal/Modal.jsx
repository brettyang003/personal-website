import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./Modal.css";
import pdf from "../../assets/resume.pdf";
const ModalOverlay = (props) => {
  const borderStyle = {
    border: "1px solid #37546a",
  };

  return (
    <Modal size="lg" show={props.show} onHide={props.handleClose}>
      <Modal.Header style={borderStyle} className="modal__header" closeButton>
        <Modal.Title className="modal__title display-6">Resume</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal__body">
        <iframe className="modal__viewer" src={pdf}></iframe>
      </Modal.Body>
      <Modal.Footer style={borderStyle} className="modal__footer">
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalOverlay;
