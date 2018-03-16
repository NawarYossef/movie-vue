import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CalendarSection from '../components/CalendarSection';
import InboxCompliments from '../components/InboxCompliments';
import AppNav from '../components/AppNav';
import Footer from '../components/Footer';


import './styles/InboxPage.css';

class InboxPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.dateForCompliments = this.dateForCompliments.bind(this);
  }

  handleDateChange(date) {
    this.setState({ date });
  }

  dateForCompliments() {
    const date = new Date(this.state.date);
    return (
      `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
    );
  }

  render() {
    return (
      <div className="inbox-page">
        <AppNav />
        <h1>Your Inbox</h1>
        <div>
          <CalendarSection onChange={() => this.handleDateChange()} />
          <InboxCompliments compliments={this.props.compliments} dateForCompliments={this.dateForCompliments()} /> 
        </div>
      </div>
    );
  }
}

InboxPage.propTypes = {
  compliments: PropTypes.arrayOf(PropTypes.string).isRequired
};

const mapStateToProps = state => ({
  compliments: state.complimentsReducer.compliments
});

export default connect(mapStateToProps)(InboxPage);
