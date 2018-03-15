import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import { InboxPage } from './InboxPage';
import SettingsPage from './SettingsPage';
import SendingPage from './SendingPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/inbox" component={InboxPage} />
          <Route exact path="/settings" component={SettingsPage} />
          <Route exact path="/sending" component={SendingPage} />
        </div>
      </Router>
    );
  }
}

export default App; 
