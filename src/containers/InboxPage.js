import React, { Component } from 'react';
import AppNav from '../components/AppNav';
import Footer from '../components/Footer';

import './styles/inbox.css';

class InboxPage extends Component {
  
  render() {
    return (
      <div className="inbox-page">
        <AppNav />
        <h1>Your Inbox</h1>
      </div>
    );
  }
}
export default InboxPage;
