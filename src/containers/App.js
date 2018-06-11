import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'normalize.css';
import styled from 'styled-components';
import LandingPage from './LandingPage';
import Header from '../components/Header';
import Movies from './Movies';

const PageWrapper = styled.div`
text-align: center;
margin: 0 auto;
position: relative;
box-sizing: border-box;
`;

const MainPage = styled.div`

`

class App extends Component {
  componentDidMount = () => {
    window.addEventListener('scroll', this.handleHeaderBoxShadow);
  }

  handleHeaderBoxShadow() {
    window.scrollY > 62 ?
      document.querySelector('header').style.boxShadow = "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)" :
      document.querySelector('header').style.boxShadow = "none";
  }

  render() {
    return (
      <Router>
        <PageWrapper>
          <Header />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/movies/now-playing" component={Movies} />
          <Route exact path="/movies/popular" component={Movies} />
          <Route exact path="/movies/coming-soon" component={Movies} />
        </PageWrapper>
      </Router>
    );
  }
}

export default App; 
