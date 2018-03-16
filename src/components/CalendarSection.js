import React from 'react';
import PropTypes from 'prop-types';
import Calendar from 'react-calendar';
import './styles/CalendarSection.css';

export default function CalendarSection(props) {
  return (
    <section className="calendar-wrapper">
      <Calendar onChange={props.handleDateChange} />
    </section>
  );
}

CalendarSection.propTypes = {
  handleDateChange: PropTypes.func.isRequired
};

