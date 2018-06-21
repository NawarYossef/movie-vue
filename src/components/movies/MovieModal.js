import React from 'react';
import styled from 'styled-components';
import { Modal } from 'react-bootstrap';
import { YOUTUBE_BASE_URL } from "../../constants.js";

import 'bootstrap/dist/css/bootstrap.css';
import '../../styles/main.css'
const TrailerFrame = styled.iframe`
width: 100%;
height: 100%;
`


 export default function MovieModal(props) {
  return (
    <Modal
      show={props.showModal}
      onHide={props.closeModal}
      container={this}
      aria-labelledby="contained-modal-title"
    >
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body width="100%">
        <TrailerFrame src={`${YOUTUBE_BASE_URL}${props.trailerKey}`} frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true">
        </TrailerFrame>
      </Modal.Body>
    </Modal>
  )
}

