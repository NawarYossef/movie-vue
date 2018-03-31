import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import AppNav from '../components/AppNav';
import './styles/Home.css';

class NowPlaying extends Component {
  render() {
    return (
      <div className="home">
        <AppNav />
        <h1>Now Playing</h1>
        <Footer />
      </div>
    );
  }
}

NowPlaying.propTypes = {

};

const mapStateToProps = state => ({

});

export default connect()(NowPlaying);
