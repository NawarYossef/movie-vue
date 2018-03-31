import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import AppNav from '../components/AppNav';
import './styles/Home.css';

class Popular extends Component {
  render() {
    return (
      <div className="home">
        <AppNav />
        <h1>Popular</h1>
        <Footer />
      </div>
    );
  }
}

Popular.propTypes = {

};

const mapStateToProps = state => ({

});

export default connect()(Popular);
