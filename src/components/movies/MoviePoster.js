import React, { Component } from 'react';
import 'normalize.css';
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';

const PosterWrapper = styled.div`
display: inline-block;
max-width: 100%;
`;
const Poster = styled.img`
  max-width: 100%;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  border-radius: 3px;
`;

export const MoviePoster = props => {
  return (
    <div>
      <PosterWrapper>
        <Poster src={props.imgSrc} alt="img" />
      </PosterWrapper>
    </div>
  )

}
