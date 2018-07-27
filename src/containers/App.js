import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import 'normalize.css';
import styled from 'styled-components';
import LandingPage from './landing-page/LandingPage';
import Header from './Header';
import MovieDetails from '../components/movies/MovieDetails';
import Movies from './Movies';
import Dashboard from './Dashboard';
import Community from './Community';
import Login from "./registration/Login"
import SignUp from "./registration/SignUp"
import { Footer } from './landing-page/Footer';
import { storeBookmarkCount } from '../actions/server';
import axios from "axios";
import { API_BASE_URL } from '../config';
import history from '../history';

const PageWrapper = styled.div`
text-align: center;
margin: 0 auto;
box-sizing: border-box;
height: 100%;
width: 100%;
overflow:auto;
`;

const Page = styled(Router)`
height: 100%;
width: 100%;
background-color: #051929;
`

class App extends Component {
  componentDidMount = () => {
    console.log('------------------------------------');
    console.log(API_BASE_URL);
    console.log('------------------------------------');
    axios.get(`${API_BASE_URL}/api/movies`)
      .then(res => this.props.storeBookmarkCount(res.data.length))
      .catch(err => console.log(err))
    window.addEventListener('scroll', this.handleHeaderBoxShadow, true);
  }

  handleHeaderBoxShadow() {
    window.scrollY > 62 ?
      document.querySelector('header').style.boxShadow = "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)" :
      document.querySelector('header').style.boxShadow = "none";
  }

  render() {
    return (
      <Page  history={history}>
        <PageWrapper>
          <Header />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />

          <Route exact path="/" component={LandingPage} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/Community" component={Community} />
          <Route exact path="/movies/now-playing" component={Movies} />
          <Route exact path="/movies/popular" component={Movies} />
          <Route exact path="/movies/coming-soon" component={Movies} />
          <Route exact path="/movies/movie-details" component={MovieDetails} />
          <Footer />
        </PageWrapper>
      </Page>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  storeBookmarkCount: count => dispatch(storeBookmarkCount(count))
});

const mapStateToProps = state => ({
  bookmarkCount: state.movies.bookmarkCount
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

