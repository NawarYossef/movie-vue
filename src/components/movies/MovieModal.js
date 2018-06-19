import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import { YOUTUBE_BASE_URL } from "../../constants.js"

import 'bootstrap/dist/css/bootstrap.css';

 export default function MovieModal(props) {
  return (
    <Modal
      show={props.showModal}
      onHide={props.closeModal}
      container={this}
      aria- labelledby="contained-modal-title"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title">
          {props.movieId}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <iframe width="420" height="345" src={`${YOUTUBE_BASE_URL}${props.trailerKey}`}>
        </iframe>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => props.closeModal()}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

