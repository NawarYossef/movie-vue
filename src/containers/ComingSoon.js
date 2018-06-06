import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import 'normalize.css';
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';
import { getNewMovies } from '../actions/action';


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

const Movie = styled.li`
display: flex;
flex-direction: row-reverse; 
background: #222121;
border: none;
flex: 0 0 48%;
height: 300px;
margin-bottom: 30px;
color: white;
box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`;

const Wrapper = styled.div`
font-size: 1em;
margin: 0 auto;
`;
const Title = styled.h3`
font-size: 1.1em;
color: #ffffff;
margin: 10px 0 0 0;
`;
const ReleaseDate = styled.h6`
font-size: 0.9em;
margin-bottom: 10px;
color: #D2691E;
`;
const Description = styled.div`
font-size: 0.9em;
text-align: left;
line-height: 120%;
padding: 15px;
color: #e1e1e1;

`;

const Text = styled.p`
height: 130px;
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

const IconsWrapper = styled.div`
font-size: 0.9em;
width: 80%;
display: flex;
justify-content: space-around;
margin: 0px auto 0 auto;
`;
const Icon = styled.div`
display: inline-block;
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

  viewMoreMovies() {

  }

  showBriefDescription(description) {
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
              <Movie>
                <Wrapper>
                  <Title>{movie.title}</Title>
                  <ReleaseDate>{movie.release_date}</ReleaseDate>
                  <Description>
                    <Text>
                      {this.showBriefDescription(movie.overview)}
                      <Link to="/movie-details">
                        <ReadMoreLink>Read more...</ReadMoreLink>
                      </Link>
                    </Text>
                    <IconsWrapper >
                      <Icon>
                        <FontAwesome name="thumbs-up" size="2x" />
                      </Icon>
                      <Icon>
                        <FontAwesome name="thumbs-down" size="2x" />
                      </Icon>
                      <Icon>
                        <FontAwesome name="star" size="2x" />
                      </Icon>
                      <Icon>
                        <FontAwesome name="play" size="2x" />
                      </Icon>
                    </IconsWrapper>
                  </Description>
                </Wrapper>
                <Img src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} alt="img" />
              </Movie>
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
