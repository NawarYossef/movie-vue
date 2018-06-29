import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import 'normalize.css';
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';
import { getMovies, storeMovieDataAndId, getTrailerKeyAndShowModal, closeModal, increaseCounter } from '../../actions/action';
import MovieModal from '../../components/movies/MovieModal';

const ButtonWrapper = styled.div`

`;

const Button = styled.button`
margin-bottom: 20px;
padding: 15px;
border-radius: 3px;
color: #ffffff;
background-color: #D2691E;
border: none;
&:hover {
  background-color: #9a4e18 !important;
  color: #ffffff;
}
`;

export const RenderMoreResults = props => {
  return (
    <ButtonWrapper>
      <Button onClick={() => props.increaseCounter()}>Show More Movies</Button>
    </ButtonWrapper>
  );
}

const mapDispatchToProps = dispatch => ({
  getMovies: (url, pageNumber) => dispatch(getMovies(url, pageNumber)),
  storeMovieDataAndId: (movie, movieId) => dispatch(storeMovieDataAndId(movie, movieId)),
  getTrailerKeyAndShowModal: movieId => dispatch(getTrailerKeyAndShowModal(movieId)),
  closeModal: () => dispatch(closeModal()),
  increaseCounter: () => dispatch(increaseCounter())
});

const mapStateToProps = state => ({
  allMovies: state.movies.allMovies,
  showModal: state.movies.showModal,
  movieId: state.movies.movieId,
  trailerKey: state.movies.trailerKey,
  pageCounter: state.movies.pageCounter
});

export default connect(mapStateToProps, mapDispatchToProps)(RenderMoreResults);