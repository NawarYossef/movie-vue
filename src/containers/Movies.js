import 'bootstrap/dist/css/bootstrap.css';
import 'normalize.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getMovies, storeMovieDataAndId, getTrailerKeyAndShowModal, closeModal, increaseCounter } from '../actions/api';
import { storeMovieDataAndUpdateBookmarkCount, deleteBookmarkedMovie } from '../actions/server';
import { BriefDescription } from '../components/movies/BriefDescription';
// import { RenderMoreResults } from '../components/movies/RenderMoreResults';
import MovieModal from '../components/movies/MovieModal';
import { MOVIES_DATA } from "../constants.js"
import '../styles/main.css';


const TitleWrapper = styled.div`
width:  100%;
text-align: left;
@media (min-width: 320px) {
  width: 70%;
  margin: 0 auto;
  text-align: center;
}
@media (min-width: 768px) {
  width: 70%;
  margin: 0 auto;
  text-align: initial;
}
@media (min-width: 1024px) {
  width: 100%;
}
`;

const SectionTitle = styled.h2`
color: #ffffff;
font-size: 1.4em;
@media (min-width: 1024px) {
  margin-left: 10px;
}
`;

const SectionWrapper = styled.section`
background-color: #051929;
width: 100%;
margin: 0px;
padding: 100px 0px;
@media (min-width: 320px) {
  padding-top: 300px;
}
@media (min-width: 768px) {
  padding-top: 100px; 
}
`
const MoviesWrapper = styled.ul`
width: 80%;
padding: 0px;
margin: 0px auto 0 auto;
list-style: none;
display: flex;
flex-wrap: wrap;  
align-items: flex-start;
justify-content: space-between;
@media (min-width: 320px) {
  width: 90%;
  justify-content: space-around;
}
@media (min-width: 768px) {
  width: 90%;
  justify-content: space-between;
}
`;

class Movies extends Component {
  componentDidMount = () => {
    if (this.props.location.pathname === MOVIES_DATA.popular.route) {
      this.props.getMovies(MOVIES_DATA.popular.apiUrl, this.props.pageCounter);
    } else if (this.props.location.pathname === MOVIES_DATA.nowPlaying.route) {
      this.props.getMovies(MOVIES_DATA.nowPlaying.apiUrl, this.props.pageCounter);
    } else if (this.props.location.pathname === MOVIES_DATA.comingSoon.route) {
      this.props.getMovies(MOVIES_DATA.comingSoon.apiUrl, this.props.pageCounter);
    }
  }

  sectionTitleHandle() {
    let title = '';
    for (let key in MOVIES_DATA) {
      if (MOVIES_DATA[key].route === this.props.location.pathname) {
        title = MOVIES_DATA[key].title;
      }
    }
    return title;
  }

  showBriefDescription = (description) => {
    return `${description.split('.')[0]}.`;
  }

  render() {
    const { allMovies } = this.props;

    return (
      <SectionWrapper>
        <MoviesWrapper>
          <TitleWrapper>
            <SectionTitle>{this.sectionTitleHandle()}</SectionTitle>
          </TitleWrapper>
          {Object.keys(allMovies).length > 0 && allMovies.results.map((movie) => {
            return (
              <BriefDescription
                bookmarked={false}
                key={movie.id}
                movie={movie}
                showBriefDescription={this.showBriefDescription(movie.overview)}
                getTrailerKeyAndShowModal={this.props.getTrailerKeyAndShowModal}
                storeMovieDataAndUpdateBookmarkCount={this.props.storeMovieDataAndUpdateBookmarkCount}
                storeMovieDataAndId={this.props.storeMovieDataAndId}
              />
            );
          })}
        </MoviesWrapper>
        <MovieModal
          showModal={this.props.showModal}
          closeModal={this.props.closeModal}
          container={this}
          movieId={this.props.movieId}
          trailerKey={this.props.trailerKey}
        />
      </SectionWrapper>
    );
  };
};

const mapDispatchToProps = dispatch => ({
  getMovies: (url, pageNumber) => dispatch(getMovies(url, pageNumber)),
  storeMovieDataAndId: (movie, movieId) => dispatch(storeMovieDataAndId(movie, movieId)),
  getTrailerKeyAndShowModal: movieId => dispatch(getTrailerKeyAndShowModal(movieId)),
  storeMovieDataAndUpdateBookmarkCount: movieId => dispatch(storeMovieDataAndUpdateBookmarkCount(movieId)),
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


export default connect(mapStateToProps, mapDispatchToProps)(Movies);
