import React from 'react';
import { connect } from 'react-redux';
import Nav from '../components/Nav';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LandingPage = props => {
  return (
    <section className="landing">
      <Nav />
      <Header />
      <Footer />
    </section>
  );
};

export default connect()(LandingPage);
