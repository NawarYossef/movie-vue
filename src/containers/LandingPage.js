import React from 'react';
import { connect } from 'react-redux';
import AppNav from '../components/AppNav';
import HomeHeader from '../components/HomePageHeader';
import LandingPageHeader from '../components/LandingPageHeader';
import Footer from '../components/Footer';

const LandingPage = props => {
  return (
    <section className="landing">
      <AppNav />
      <LandingPageHeader />
      <Footer />
    </section>
  );
};

export default connect()(LandingPage)
