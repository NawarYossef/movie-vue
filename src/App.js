import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementCount } from './actions/action';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
      </div>
    );
  }
}

export default App; 
