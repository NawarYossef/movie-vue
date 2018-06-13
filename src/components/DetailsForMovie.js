import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'normalize.css';
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';
import { Modal, Button } from 'react-bootstrap';
import MovieModal from './MovieModal';
import { Credits } from './Credits';

const MainSection = styled.section`
width: 100%;
background-color: #051929;
padding: 50px;
`

const MovieSection = styled.section`
display: flex;
flex: 0 0 30%;
justify-content: center;
padding: 20px;
flex-direction: row-reverse; 
background-color: #051929;
border: none;
width: 90%;
margin: 110px auto 35px auto;
color: white;
`;

const Wrapper = styled.div`
margin: 0 auto;
flex: 2 1 auto;
display: inline-block;
width: 100%;  
`;

const Title = styled.h3`
font-size: 2.8em;
margin-bottom: 0px;
margin-top: 0px;
color: #ffffff;
`;
const ReleaseDate = styled.h6`
font-size: 1.3em;
margin-bottom: 10px;
margin-top: 0px;
color: #D2691E;
`;
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

const PosterWrapper = styled.div`
display: inline-block;
max-width: 100%;
`;
const Poster = styled.img`
  max-width: 100%;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  border-radius: 3px;
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
const CreditsWrapper = styled.div`
display: flex;
justify-content: start;
`

export const DetailsForMovie = props => {
  const { movieData } = props;
  console.log('------------------------------------');
  console.log(props.movieDirectors);
  console.log('------------------------------------');
  return (
    <MainSection>
      <MovieSection>
        <Wrapper>
          <Title>{movieData.title}</Title>
          <ReleaseDate>{movieData.release_date}</ReleaseDate>
          <Description>
            <IconsWrapper >
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
                bsStyle="primary" bsSize="large" onClick={() => props.getMovieTrailerFromApiAndShowModal(movieData.id)}>
                <FontAwesome name="play" />
                <TrailerText>Play Trailer</TrailerText>
              </PlayTrailerIcon>
            </IconsWrapper>
            <TextWrapper>
              <SectionTitle>Overview</SectionTitle>
              <DescriptionParagraph>
                {movieData.overview}
              </DescriptionParagraph>
            </TextWrapper>
          </Description>

          <Credits movieWriters={props.movieWriters}
            movieDirectors={props.movieDirectors}
            movieCreditsData={props.movieCreditsData}
          />
        </Wrapper>
        <PosterWrapper>
          <Poster src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`} alt="img" />
        </PosterWrapper>
      </MovieSection>
      <MovieModal
        show={props.showModal}
        closeMovieTrailerModal={props.closeMovieTrailerModal}
        container={this}
        movieId={props.movieId}
        movieVideoKey={props.movieVideoKey}
        getMovieTrailerFromApiAndShowModal={props.getMovieTrailerFromApiAndShowModal}
      />
    </MainSection>
  );
}
