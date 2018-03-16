import React from 'react';
import { connect } from 'react-redux';
import AppNav from '../components/AppNav';

const Profile = props => {
  return (
    <section className="settings">
      <AppNav />
      <h2>Settings</h2>
    </section>
  );
};

export default connect()(Profile);
