import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import AppNav from '../components/AppNav';
import './styles/Home.css';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <AppNav />
        <h1>Home</h1>
        <Footer />
      </div>
    );
  }
}

Home.propTypes = {

};

const mapStateToProps = state => ({

});

export default connect()(Home);
