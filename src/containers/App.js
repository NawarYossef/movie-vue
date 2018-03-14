import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './Landing';
import Inbox from './Inbox';
import Settings from './Settings';
import Sending from './Sending';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Landing} />
          <Route exact path="/inbox" component={Inbox} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/sending" component={Sending} />
        </div>
      </Router>
    );
  }
}

export default App; 
