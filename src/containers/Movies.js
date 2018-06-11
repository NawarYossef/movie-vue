import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';
import { getMovies } from '../actions/action';
import { SingleMovie } from '../components/SingleMovie';
import MovieModal from '../components/MovieModal';
import { DetailsForMovie } from '../components/DetailsForMovie';
import { MOVIES_DATA } from "../constants.js"
import { Modal, Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.css';
import 'normalize.css';


const TitleWrapper = styled.div`
width:  100%;
text-align: left;
`;

const SectionTitle = styled.h2`
color: #ffffff;
font-size: 1.4em;
`;

const SectionWrapper = styled.section`
background-color: #051929;
width: 100%;
margin: 0px;
padding-top: 100px;
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
`;

class ComingSoon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: '',
      pageNumber: 1,
      movieId: '',
      movieVideoKey: '',
      showModal: false,
      showMovieDetails: false,
      movieData: '',
      movieCreditsData: {}
    };
  }

  componentDidMount = () => {
    if (this.props.location.pathname === MOVIES_DATA.popular.route) {
      this.props.getMovies(MOVIES_DATA.popular.apiUrl, this.state.pageNumber);
    } else if (this.props.location.pathname === MOVIES_DATA.nowPlaying.route) {
      this.props.getMovies(MOVIES_DATA.nowPlaying.apiUrl, this.state.pageNumber);
    } else if (this.props.location.pathname === MOVIES_DATA.comingSoon.route) {
      this.props.getMovies(MOVIES_DATA.comingSoon.apiUrl, this.state.pageNumber);
    }
  }

  handleShowMovieDetails = (movie) => {
    const movieCreditsUrl = `https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=${process.env.REACT_APP_API_KEY}`;
    axios.get(movieCreditsUrl)
    .then(res => {
      this.setState({
        showMovieDetails: !this.state.showMovieDetails,
        movieData: movie,
        movieCreditsData: res.data
      })
    })
    .catch(error => {
      console.log(error);
    })
  }

  closeMovieTrailerModal = () => {
    this.setState({ showModal: false });
  }

  sectionTitleHandle() {
    let title = '';
    for (let key in MOVIES_DATA) {
      MOVIES_DATA[key].route === this.props.location.pathname ? title = MOVIES_DATA[key].title : null;
    }
    return title;
  }

  findOfficialTrailer = (videosDataArray) => {
    const officialTrailers = videosDataArray.filter(video => {
      return video.name.toLowerCase().split(" ").includes("official") && video.name.toLowerCase().split(" ").includes("trailer");
    })
    return officialTrailers.length ? officialTrailers[0].key : '';
  }

  getMovieTrailerFromApiAndShowModal = (movieId) => {
    const movieUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=videos`
    axios.get(movieUrl)
      .then(res => {
        const videosDataArray = res.data.videos.results;
        this.setState({
          movieId,
          movieVideoKey: this.findOfficialTrailer(videosDataArray),
          showModal: true
        })
      .catch(error => {
        console.log(error);
      })
    })
  }

  showBriefDescription = (description) => {
    return `${description.split('.')[0]}.`;
  }

  render() {
    const { allMovies } = this.props;
    if (!this.state.showMovieDetails) {
      return (
        <SectionWrapper>
          <MoviesWrapper>
            <TitleWrapper>
              <SectionTitle>{this.sectionTitleHandle()}</SectionTitle>
            </TitleWrapper>
            {Object.keys(allMovies).length > 0 && allMovies.results.map((movie) => {
              return (
                <SingleMovie movie={movie}
                  showBriefDescription={this.showBriefDescription(movie.overview)}
                  getMovieTrailerFromApiAndShowModal={this.getMovieTrailerFromApiAndShowModal}
                  handleShowMovieDetails={this.handleShowMovieDetails}
                />
              );
            })}
          </MoviesWrapper>
          <MovieModal
            show={this.state.showModal}
            closeMovieTrailerModal={this.closeMovieTrailerModal}
            container={this}
            movieId={this.state.movieId}
            movieVideoKey={this.state.movieVideoKey}
          />
        </SectionWrapper>
      );
    }
    return (
      <DetailsForMovie movieData={this.state.movieData} />
    )
  };
};

const mapDispatchToProps = dispatch => ({
  getMovies: (url, pageNumber) => dispatch(getMovies(url, pageNumber))
});

const mapStateToProps = state => ({
  allMovies: state.movies.allMovies
});

ComingSoon.propTypes = {
  getMovies: PropTypes.func.isRequired,
  allMovies: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(ComingSoon);
