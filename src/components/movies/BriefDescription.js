import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import 'normalize.css';
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';

const MovieSection = styled.li`
display: flex;
flex-direction: row-reverse; 
background: #222121;
border: none;
flex: 0 0 48%;
height: 300px;
margin-bottom: 35px;
color: white;
border-radius: 3px;
box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
transition: box-shadow 1s;
&:hover {
  box-shadow: 0 15px 20px rgba(255, 254, 254, 0.19), 0 6px 6px rgba(250, 250, 250, 0.23);
}
`;

const Wrapper = styled.div`
margin: 0 auto;
position: relative;
padding: 10px 0px;
width: 63%;
`;
const Title = styled.h3`
font-size: 1.5em;
margin: 0px auto 0px auto !important;
color: #ffffff;
`;
const ReleaseDate = styled.h6`
font-size: 1.2em;
margin-bottom: 10px;
margin-top: 0px;
color: #D2691E;
`;
const Description = styled.div`
font-size: 0.9em;
text-align: left;
line-height: 130%;
color: #e1e1e1;
`;

const Text = styled.p`
margin: 0px;
font-size: 1.1em;
padding: 10px;
`;
const ReadMoreLink = styled(Link)`
display: block;
margin-top: 5px;
font-size: 0.9em;
color: #0ac70a;
&:hover {
  cursor: pointer;
  text-decoration: none;
  color: #574ca7;
}
`;
const Img = styled.img`
height: 100%;
`;

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
`;
const Icon = styled.div`
font-size: 1.4em;
display: inline-block;
border-radius: 50%;
border: 1px solid gray;
padding: 17px;
padding-top: ${props => props.thumbsDown ? '15px' : '15px'};
transition: background-color 1s;
&:hover {
  background-color: gray;
  color: #000000;
  cursor: pointer;
}
`;

export const BriefDescription = props => {
  const tooltip = (
    <Tooltip id="tooltip">
      <strong>Feature coming soon</strong>
    </Tooltip>
  );
  const { movie } = props
  return (
    <MovieSection>
      <Wrapper>
        <Title>{movie.title}</Title>
        <ReleaseDate>{movie.release_date}</ReleaseDate>
        <Description>
          <Text>
            {props.showBriefDescription}
            <span>
              <ReadMoreLink to='/movies/movie-details' onClick={() => props.storeMovieDataAndId(movie, movie.id)}>Read more...</ReadMoreLink>
            </span>
          </Text>

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
            <OverlayTrigger placement="top" overlay={tooltip}>
              <Icon>
                <FontAwesome name="star" />
              </Icon>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={tooltip}>
              <Icon
                bsStyle="primary" bsSize="large" onClick={() => props.getTrailerKeyAndShowModal(movie.id)}>
                <FontAwesome name="play" />
              </Icon>
            </OverlayTrigger>
          </IconsWrapper>

        </Description>
      </Wrapper>
      <Img src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} alt="img" />
    </MovieSection >
  );
}