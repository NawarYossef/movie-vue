import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';
import { getNewMovies } from '../actions/action';
import Movie from '../components/Movie';
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
      pageNumber: 1
    };
  }

  componentDidMount = () => {
    this.props.getNewMovies();
  }

  viewMoreMovies = () => {

  }

  showBriefDescription = (description) => {
    return `${description.split('.')[0]}.`;
  }

  render() {
    const { newMovies } = this.props;
    return (
      <SectionWrapper>
        <MoviesWrapper>
          <TitleWrapper>
            <SectionTitle>Coming Soon</SectionTitle>
          </TitleWrapper>
          {Object.keys(newMovies).length > 0 && newMovies.results.map((movie) => {
            return (
              <Movie movie={movie} showBriefDescription={this.showBriefDescription(movie.overview)} />
            );
          })}
        </MoviesWrapper>
      </SectionWrapper>
    );
  };
};

const mapDispatchToProps = dispatch => ({
  getNewMovies: () => dispatch(getNewMovies())
});

const mapStateToProps = state => ({
  newMovies: state.movies.newMovies
});

ComingSoon.propTypes = {
  getNewMovies: PropTypes.func.isRequired,
  newMovies: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(ComingSoon);
