import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'normalize.css';
import styled from 'styled-components';
import MovieModal from './MovieModal';
import { Rating} from './Rating';
import { ActorsPhotos } from './ActorsPhotos';
import { Synopses } from './Synopses';
import { Credits } from './Credits';
import { MoviePoster } from './MoviePoster';
import { getTrailerKeyAndShowModal, getMovieCredits, closeModal } from '../../actions/api';

const MainSection = styled.section`
width: 100%;
height: 100%;
background-color: #051929;
`

const MovieSection = styled.section`
display: flex;
flex: auto;
justify-content: center;
padding: 20px;
flex-direction: row-reverse; 
background-color: #051929;
border: none;
width: 90%;
padding-top: 130px;
margin: 0px auto 15px auto;
color: white;
@media (min-width: 320px) {
  flex-direction: column-reverse;
  margin-top: 50px;
}
@media (min-width: 768px) {
  flex-direction: row-reverse;
}
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

export class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieData: '',
      movieCreditsData: ''
    }
  }

  componentDidMount() {
    document.body.style.backgroundImage = "none";
    this.props.getMovieCredits(this.props.movieId)
  }

  render() {
    return (
      <MainSection>
        <MovieSection>
          <Wrapper>
            <Title>{this.props.movieData.title}</Title>
            <ReleaseDate>Release Date: {this.props.movieData.release_date}</ReleaseDate>

            <Synopses movieData={this.props.movieData}
              getTrailerKeyAndShowModal={this.props.getTrailerKeyAndShowModal} />

            <Credits movieCreditsData={this.props.movieCreditsData} />
            <Rating movieData={this.props.movieData} />
          </Wrapper>
          <MoviePoster imgSrc={`https://image.tmdb.org/t/p/w500${this.props.movieData.poster_path}`} />
        </MovieSection>
        <ActorsPhotos movieCreditsData={this.props.movieCreditsData} />
        <MovieModal
          showModal={this.props.showModal}
          closeModal={this.props.closeModal}
          container={this}
          movieId={this.props.movieId}
          trailerKey={this.props.trailerKey}
        />
      </MainSection>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getTrailerKeyAndShowModal: movieId => dispatch(getTrailerKeyAndShowModal(movieId)),
  getMovieCredits: movieId => dispatch(getMovieCredits(movieId)),
  closeModal: () => dispatch(closeModal())
});

const mapStateToProps = state => ({
  movieData: state.movies.movieData,
  movieCreditsData: state.movies.movieCreditsData,
  movieId: state.movies.movieId,
  trailerKey: state.movies.trailerKey,
  showModal: state.movies.showModal,
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);