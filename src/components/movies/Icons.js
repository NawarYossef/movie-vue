import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import 'normalize.css';
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';

const IconsWrapper = styled.div`
font-size: 0.9em;
width: 80%;
display: flex;
justify-content: space-around;
margin: auto;
position: absolute;
left: 0;
right: 0;
bottom: 5%;
@media (min-width: 320px) {
  width: 86%;
}
@media (min-width: 768px) {
  width: 90%;
}
`;
const Icon = styled.div`
font-size: 1.4em;
display: inline-block;
border-radius: 50%;
border: 1px solid gray;
padding: 24px;
padding-top: ${props => props.thumbsDown ? '15px' : '15px'};
transition: background-color 1s;
&:hover {
  background-color: gray;
  color: #000000;
  cursor: pointer;
}
`;

export const Icons = props => {
  const tooltip = (
    <Tooltip id="tooltip">
      <strong>Feature coming soon</strong>
    </Tooltip>
  );
  const trailerToolTip = (
    <Tooltip id="tooltip">
      <strong>Movie Trailer</strong>
    </Tooltip>
  );
  const bookmarksToolTip = (
    <Tooltip id="tooltip">
      <strong>Save movie to Dashboard</strong>
    </Tooltip>
  );
  const trashToolTip = (
    <Tooltip id="tooltip">
      <strong>Delete movie</strong>
    </Tooltip>
  );
  return (
    <IconsWrapper >
      <OverlayTrigger placement="top" overlay={tooltip}>
        <Icon thumbsDown>
          <FontAwesome name="thumbs-down" />
        </Icon>
      </OverlayTrigger>
      <OverlayTrigger placement="top" overlay={tooltip}>
        <Icon>
          <FontAwesome name="thumbs-up" />
        </Icon>
      </OverlayTrigger>
      {
        props.bookmarked ?
          <OverlayTrigger placement="top" overlay={trashToolTip}>
            <Icon onClick={() => props.deleteBookmarkedMovie(props.referenceId)}>
              <FontAwesome name="trash" />
            </Icon>
          </OverlayTrigger> :
          <OverlayTrigger placement="top" overlay={bookmarksToolTip}>
            <Icon onClick={() => props.storeMovieDataAndUpdateBookmarkCount(props.movie.id)}>
              <FontAwesome name="bookmark" />
            </Icon>
          </OverlayTrigger>
      }

      <OverlayTrigger placement="top" overlay={trailerToolTip}>
        <Icon
          bsStyle="primary" bsSize="large" onClick={() => props.getTrailerKeyAndShowModal(props.movie.id)}>
          <FontAwesome name="play" />
        </Icon>
      </OverlayTrigger>
    </IconsWrapper>
  );
}