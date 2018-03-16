import React from 'react';
import { connect } from 'react-redux';

const SettingsPage = props => {
  return (
    <section className="settings">
      <h2>Settings</h2>
    </section>
  );
};

export default connect()(SettingsPage);
