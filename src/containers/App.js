import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'normalize.css';
import styled from 'styled-components';
import LandingPage from './landing-page/LandingPage';
import Header from './Header';
import MovieDetails from '../components/movies/MovieDetails';
import Movies from './Movies';
import Dashboard from './Dashboard';
import Community from './Community';

const PageWrapper = styled.div`
text-align: center;
margin: 0 auto;
position: relative;
box-sizing: border-box;
`;

const Page = styled(Router)`
height: 100vh;
background-color: #051929;
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
      <Page>
        <PageWrapper>
          <Header />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/Community" component={Community} />
          <Route exact path="/movies/now-playing" component={Movies} />
          <Route exact path="/movies/popular" component={Movies} />
          <Route exact path="/movies/coming-soon" component={Movies} />
          <Route exact path="/movies/movie-details" component={MovieDetails} />
        </PageWrapper>
      </Page>
    );
  }
}

export default App; 
