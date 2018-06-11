import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';
import { getMovies } from '../actions/action';
import Movie from '../components/Movie';
import MovieModal from '../components/MovieModal';
import { MOVIE_API_DATA } from "../constants.js"
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
      showModal: false
    };
  }


  // componentDidMount = () => {
  //   console.log('------------------------------------');
  //   console.log("this is the url", MOVIE_API_DATA.popular.url);
  //   console.log('------------------------------------');
  //   this.props.getMovies(MOVIE_API_DATA.popular.url, this.state.pageNumber);
  // }

  componentDidMount = () => {
    if (this.props.location.pathname === MOVIE_API_DATA.popular.route) {
      this.props.getMovies(MOVIE_API_DATA.popular.url, this.state.pageNumber);
    } else if (this.props.location.pathname === MOVIE_API_DATA.nowPlaying.route) {
      this.props.getMovies(MOVIE_API_DATA.nowPlaying.url, this.state.pageNumber);
    } else if (this.props.location.pathname === MOVIE_API_DATA.comingSoon.route) {
      this.props.getMovies(MOVIE_API_DATA.comingSoon.url, this.state.pageNumber);
    }
  }

  closeMovieTrailerModal = () => {
    this.setState({ showModal: false });
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
        });
      })

  }

  showBriefDescription = (description) => {
    return `${description.split('.')[0]}.`;
  }

  render() {
    const { allMovies } = this.props;
    console.log('------------------------------------');
    console.log(this.props);
    console.log('------------------------------------');
    return (
      <SectionWrapper>
        <MoviesWrapper>
          <TitleWrapper>
            <SectionTitle>Coming Soon</SectionTitle>
          </TitleWrapper>
          {Object.keys(allMovies).length > 0 && allMovies.results.map((movie) => {
            return (
              <Movie movie={movie}
                showBriefDescription={this.showBriefDescription(movie.overview)}
                getMovieTrailerFromApiAndShowModal={this.getMovieTrailerFromApiAndShowModal}
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
