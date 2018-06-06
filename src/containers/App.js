import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'normalize.css';
import styled from 'styled-components';
import LandingPage from './LandingPage';
import Header from '../components/Header';
import Popular from './Popular';
import InTheaters from './InTheaters';
import ComingSoon from './ComingSoon';

const PageWrapper = styled.div`
text-align: center;
margin: 0 auto;
position: relative;
box-sizing: border-box;
`;

const MainPage = styled.div`

`

class App extends Component {
  render() {
    return (
      <Router>
        <PageWrapper>
          <Header />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/movies/popular" component={Popular} />
          <Route exact path="/movies/now-playing" component={InTheaters} />
          <Route exact path="/movies/coming-soon" component={ComingSoon} />
        </PageWrapper>
      </Router>
    );
  }
}

export default App; 
