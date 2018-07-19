import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import 'normalize.css';
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';

const Description = styled.div`
text-align: left;
line-height: 150%;
padding: 0px 20px;
color: #e1e1e1;
`;

const TextWrapper = styled.div`
margin: 0px;
`;

const SectionTitle = styled.h2`
font-size: 1.6em;
display: block;
color: #D2691E;
margin-bottom: 10px;
margin-top: 30px;
`;
const DescriptionParagraph = styled.p`
font-size: 1em;
display: block;
`;

const IconsWrapper = styled.div`
font-size: 0.9em;
width: 60%;
display: flex;
justify-content: space-around;
margin: 0 auto;
@media (min-width: 320px) {
  flex-direction: column;
  width: 25%;
}
@media (min-width: 350px) {
  flex-direction: column;
  width: 23%;
}
@media (min-width: 375px) {
  flex-direction: column;
  width: 20%;
}
@media (min-width: 400px) {
  flex-direction: column;
  width: 18%;
}
@media (min-width: 425px) {
  flex-direction: row;
  width: 100%;
}
`;
const Icon = styled.div`
font-size: 1.4em;
border-radius: 50%;
border: 1px solid gray;
padding: 18px;
padding-top: ${props => props.thumbsDown ? '15px' : '15px'};
transition: background-color 1s;
&:hover {
  background-color: gray;
  color: #000000;
  cursor: pointer;
}
@media (min-width: 320px) and (max-width: 424px) {
  margin-bottom: 7px;
}
@media (min-width: 425px) {
  margin-right: 7px;
}
`;

const PlayTrailerIcon = styled.div`
font-size: 1.4em;
display: inline-block;
padding: 15px;
padding-top: ${props => props.thumbsDown ? '15px' : '15px'};
padding-left: 0px;
&:hover {
cursor: pointer;
}
@media (min-width: 320px) and (max-width: 424px) {
  text-align: center;
  padding-left: 15px;
}
@media (min-width: 325px){
  padding: 15px 0px;
}
`;
const TrailerText = styled.span`
  font-size: 1em;
  margin-left: 5px;
`
export const Synopses = props => {
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

  return (
    <Description>
      <IconsWrapper>
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
        <OverlayTrigger placement="top" overlay={tooltip}>
          <Icon>
            <FontAwesome name="bookmark" />
          </Icon>
        </OverlayTrigger>
          <PlayTrailerIcon
            bsStyle="primary" bsSize="large" onClick={() => props.getTrailerKeyAndShowModal(props.movieData.id)}>
            <FontAwesome name="play" />
            <TrailerText>Play Trailer</TrailerText>
          </PlayTrailerIcon>
      </IconsWrapper>
      <TextWrapper>
        <SectionTitle>Overview</SectionTitle>
        <DescriptionParagraph>
          {props.movieData.overview}
        </DescriptionParagraph>
      </TextWrapper>
    </Description>
  )

}
