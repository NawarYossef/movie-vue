import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Home from './Home';
import Popular from './Popular';
import NowPlaying from './NowPlaying';
import Upcoming from './Upcoming';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Popular" component={Popular} />
          <Route exact path="/NowPlaying" component={Home} />
          <Route exact path="/Upcoming" component={Upcoming} />
        </div>
      </Router>
    );
  }
}

export default App; 
