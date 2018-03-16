import React from 'react';
import PropTypes from 'prop-types';
import './styles/InboxCompliments.css';

export default function InboxCompliments(props) {
  return (
    <section className="compliments">
      <h2>
        Your message for <span>{props.dateForCompliments}</span>
      </h2>
      <ul>
        {props.compliments.map((quote, i) => {
          return <li>"{quote}"</li>;
        })}
      </ul>
    </section>
  );
}

InboxCompliments.propTypes = {
  compliments: PropTypes.arrayOf(PropTypes.string).isRequired,
  dateForCompliments: PropTypes.func.isRequired
};
