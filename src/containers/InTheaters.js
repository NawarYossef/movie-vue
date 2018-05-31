import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import 'normalize.css';
import styled from 'styled-components';
import Footer from '../components/Footer';


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
width: 70%;
padding: 0px;
margin: 0 auto;
list-style: none;
display: flex;
flex-wrap: wrap;
align-items: flex-start;
justify-content: space-around;
`;

const Movie = styled.li`
background: tomato;
flex: 1 1 48%;
height: auto;
margin: 5px 5px;
color: white;
font-weight: bold;
font-size: 3em;
text-align: center;
`;

class InTheaters extends Component {
  render() {
    return (
      <div>
        <TitleWrapper>
          <SectionTitle>Now Playing</SectionTitle>
        </TitleWrapper>
        <MoviesWrapper>
          <Movie>1</Movie>
          <Movie>2</Movie>
          <Movie>3</Movie>
          <Movie>4</Movie>
          <Movie>5</Movie>
          <Movie>6</Movie>
        </MoviesWrapper>
        <Footer />
      </div>
    );
  }
}

// const mapStateToProps = state => ({

// });

export default connect()(InTheaters);
