import React from 'react';
import { connect } from 'react-redux';
import Footer from '../components/Footer';


function LandingPage() {
  return (
    <section className="landing">
      <div className="header-wrapper">
        <h2>Landing Page</h2>
      </div>
      <Footer />
    </section>
  );
}

export default connect()(LandingPage);
