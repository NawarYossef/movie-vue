import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import { Icons } from "./Icons.js";
import 'normalize.css';
import styled from 'styled-components';

const MovieSection = styled.li`
display: flex;
flex-direction: row-reverse; 
background: #222121;
border: none;
flex: 0 0 48%;
margin-bottom: 35px;
color: white;
border-radius: 3px;
box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
transition: box-shadow 1s;
&:hover {
  box-shadow: 0 15px 20px rgba(255, 254, 254, 0.19), 0 6px 6px rgba(250, 250, 250, 0.23);
}
@media (min-width: 320px) {
  flex: 0 0 70%;
  width: 100%;
  flex-direction: column-reverse;
  margin: 0 auto 20px auto !important;
}
@media (min-width: 768px) {
  flex: 0 0 70%;
  margin: 0 auto 20px auto !important;
}
@media (min-width: 1024px) {
  flex: 0 0 48%;
  width: 0%;
  height: 300px;
  flex-direction: row-reverse; 
  margin: 0 auto 30px auto !important;
}
`;

const Wrapper = styled.div`
margin: 0 auto;
position: relative;
padding: 10px 0px;
width: 63%;
@media (min-width: 320px) {
  width: 86%;
}
@media (min-width: 768px) {
  width: 63%;
}
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
@media (min-width: 320px) {
  padding-bottom: 80px !important;
}
@media (min-width: 768px) {
  padding: 10px;
}
`;
const ReadMoreLink = styled(Link)`
display: block;
margin-top: 5px;
font-size: 0.9em;
color: #0ac70a;
width: 50%;
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
padding: 17px;
padding-top: ${props => props.thumbsDown ? '15px' : '15px'};
transition: background-color 1s;
&:hover {
  background-color: gray;
  color: #000000;
  cursor: pointer;
}
`;

const Image = styled.img`
@media (min-width: 1024px) {
  width: 40%;
}
`

export const BriefDescription = props => {
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
  const { movie } = props;
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
          <Icons
            bookmarked={props.bookmarked}
            referenceId={props.referenceId} 
            getTrailerKeyAndShowModal={props.getTrailerKeyAndShowModal} 
            storeMovieDataAndUpdateBookmarkCount={props.storeMovieDataAndUpdateBookmarkCount}
            deleteBookmarkedMovie={props.deleteBookmarkedMovie}
            movie={movie} />
        </Description>
      </Wrapper>
      <Image src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} alt="img" />
    </MovieSection>
  );
}