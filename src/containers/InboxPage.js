import React, { Component } from "react";
import AppNav from "../components/AppNav";
import Footer from "../components/Footer";
import Calendar from "react-calendar";

import "./styles/inbox.css";

export class InboxPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  handleDateChange = date => {
    this.setState({ date });
  };

  dateForCompliments = () => {
    const date = new Date(this.state.date);
    return (
      date.getFullYear() + "-" + date.getMonth() + 1 + "-" + date.getDate()
    );
  };

  render() {
    const compliments = [
      "You are very smart",
      "You are the most generous person I've met",
      "You make my day"
    ];

    return (
      <div className="inbox-page">
        <AppNav />
        <h1>Your Inbox</h1>
        <div>

          <section className="calendar-wrapper">
            <Calendar
              onChange={this.handleDateChange}
              value={this.state.date}
            />
          </section>

          <section className="compliments">
            <h2>
              Your message for <span>{this.dateForCompliments()}</span>
            </h2>
            <ul>
              {compliments.map((quote, i) => {
                return <li>"{quote}"</li>
              }) }
            </ul>
          </section>
        </div>
      </div>
    );
  }
}
