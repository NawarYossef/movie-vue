import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'normalize.css';
import styled from 'styled-components';
import { getNewMovies } from '../actions/action';

const MoviesSection = styled.div`
width: 100%;
background-color: blue;
padding: 15px 0px;
`;

const TitleWrapper = styled.div`
width:  100%;
text-align: center;
`;

const SectionTitle = styled.h2`
color: #ffffff;
`;

const MoviesWrapper = styled.ul`
width: 80%;
padding: 0px;
margin: 0 auto;
list-style: none;
display: flex;
flex-wrap: wrap;  
align-items: flex-start;
justify-content: space-between;
`;

const Movie = styled.li`
display: flex;
flex-direction: row-reverse; 
background: #ffffff;
flex: 0 0 48%;
height: 300px;
margin: 10px 0px;
color: white;
`;

const Wrapper = styled.div`
font-size: 1em;
`;
const Title = styled.h3`
font-size: 1.1em;
color: #000000;
margin: 10px 0 0 0;
`;
const ReleaseDate = styled.h6`
font-size: 0.9em;
margin-bottom: 10px;
color: #666666;
`;
const Description = styled.p`
font-size: 0.9em;
text-align: left;
line-height: 120%;
padding: 15px;
color: #4D4D4D;

`;
const ReadMoreLink = styled.span`
display: block;
margin-top: 5px;
font-size: 0.9em;
color: blue;
&:hover {
  cursor: pointer;
}
`;
const Img = styled.img`
height: 100%;
`;

class ComingSoon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: '',
      pageNumber: 1
    };
  }
  componentDidMount() {
    this.props.getNewMovies();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ movies: nextProps.newMovies });
  }

  viewMoreMovies() {

  }

  showBriefDescription(description) {
    return `${description.split(' ').slice(0, 30).join(' ')}`;
  }

  render() {
    let allMovies;
    if (this.state.movies) {
      allMovies = this.state.movies.results.map((movie, index) => {
        return (
          <Movie key={index}>
            <Wrapper>
              <Title>{movie.title}</Title>
              <ReleaseDate>{movie.release_date}</ReleaseDate>
              <Description>
                {this.showBriefDescription(movie.overview)}
                <ReadMoreLink>Read more...</ReadMoreLink>
              </Description>
            </Wrapper>
            <Img src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} alt="img" />
          </Movie>
        );
      });
    }
    return (
      <div>
        <TitleWrapper>
          <SectionTitle>Coming Soon</SectionTitle>
        </TitleWrapper>
        <MoviesWrapper>
          {allMovies}
        </MoviesWrapper>
      </div>
    );
  }
}

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
