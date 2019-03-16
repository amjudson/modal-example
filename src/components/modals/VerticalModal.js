import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import '../../css/styles.css';

class VerticalModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {title, body, onHide, show } = this.props;
    return (
      <Modal
        show={show}
        dialogClassName='modal-90w'
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
           {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {body}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default VerticalModal;
