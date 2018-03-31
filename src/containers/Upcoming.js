import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import AppNav from '../components/AppNav';
import './styles/Home.css';

class Upcoming extends Component {
  render() {
    return (
      <div className="home">
        <AppNav />
        <h1>Upcoming</h1>
        <Footer />
      </div>
    );
  }
}

Upcoming.propTypes = {

};

const mapStateToProps = state => ({

});

export default connect()(Upcoming);
