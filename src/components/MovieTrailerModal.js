import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

function MovieTrailerModal(props) {
  return (
    <div>
    <Modal
    show={props.showModal}
    onHide={props.closeMovieTrailerModal}
    container={this}
    aria- labelledby="contained-modal-title"
    >
    <Modal.Header closeButton>
    <Modal.Title id="contained-modal-title">
    {props.movieId}
    </Modal.Title>
    </Modal.Header>
    <Modal.Body>
    Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id
    ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.
    </Modal.Body>
    <Modal.Footer>
    <Button onClick={props.closeMovieTrailerModal}>Close</Button>
    </Modal.Footer>
    </Modal>
    </div>
  )
}

MovieTrailerModal.propTypes = {

};

// const mapStateToProps = state => ({

// });

export default connect()(MovieTrailerModal);
