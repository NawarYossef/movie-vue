import React from 'react';
import PropTypes from 'prop-types';
import './styles/ComplimentList.css';

const ComplimentList = props => {
  const complimentDisplay = props.compliments.map((item, index) => {
    return <li key={index}>{item}</li>;
  });
  
  return (
    <article className="compliment-list">
      <ul>
        {complimentDisplay}
      </ul>
    </article>
  );
};

ComplimentList.propTypes = {
  compliments: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ComplimentList;
