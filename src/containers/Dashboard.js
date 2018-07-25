import 'bootstrap/dist/css/bootstrap.css';
import 'normalize.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTrailerKeyAndShowModal, closeModal, storeMovieDataAndId } from '../actions/api';
import { deleteBookmarkedMovie, getMovieData, storeMovieDataAndUpdateBookmarkCount } from '../actions/server';
import { BriefDescription } from '../components/movies/BriefDescription';
import MovieModal from '../components/movies/MovieModal';
import styled from 'styled-components';

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

export class Dashboard extends Component {
  componentDidMount = () => {
    this.props.getMovieData();
    document.getElementsByClassName("dashboard-wrapper")[0].style.height = "100vh";
  }
  showBriefDescription = (description) => {
    return `${description.split('.')[0]}.`;
  }
  render() {
    return (
      <SectionWrapper className={"dashboard-wrapper"}>
        <MoviesWrapper>
          <TitleWrapper>
            <SectionTitle>Your Bookmarks</SectionTitle>
          </TitleWrapper>
          {this.props.bookmarkedMovies.length > 0 && this.props.bookmarkedMovies.map((movie) => {
            return (
              <BriefDescription
                bookmarked={true}
                referenceId={movie._id}
                key={movie.movieData.id}
                movie={movie.movieData}
                showBriefDescription={this.showBriefDescription(movie.movieData.overview)}
                getTrailerKeyAndShowModal={this.props.getTrailerKeyAndShowModal}
                postMovieIdAndStoreBookmarkCount={this.props.postMovieIdAndStoreBookmarkCount}
                storeMovieDataAndId={this.props.storeMovieDataAndId}
                deleteBookmarkedMovie={this.props.deleteBookmarkedMovie}
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
  getTrailerKeyAndShowModal: movieId => dispatch(getTrailerKeyAndShowModal(movieId)),
  storeMovieDataAndUpdateBookmarkCount: movieId => dispatch(storeMovieDataAndUpdateBookmarkCount(movieId)),
  storeMovieDataAndId: movieId => dispatch(storeMovieDataAndId(movieId)),
  getMovieData: () => dispatch(getMovieData()),
  closeModal: () => dispatch(closeModal()),
  deleteBookmarkedMovie: movieId => dispatch(deleteBookmarkedMovie(movieId)),
});

const mapStateToProps = state => ({
  bookmarkIds: state.movies.bookmarkIds,
  bookmarkCount: state.movies.bookmarkCount,
  bookmarkedMovies: state.movies.bookmarkedMovies,
  singleMovie: state.movies.singleMovie,
  showModal: state.movies.showModal,
  movieId: state.movies.movieId,
  trailerKey: state.movies.trailerKey,
  pageCounter: state.movies.pageCounter
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
