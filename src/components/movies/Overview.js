import React, { Component } from 'react';
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
`;
const TrailerText = styled.span`
  font-size: 1em;
  margin-left: 5px;
`
export const Overview = props => {
  return (
    <Description>
      <IconsWrapper>
        <Icon thumbsDown>
          <FontAwesome name="thumbs-down" />
        </Icon>
        <Icon>
          <FontAwesome name="thumbs-up" />
        </Icon>
        <Icon>
          <FontAwesome name="star" />
        </Icon>
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
