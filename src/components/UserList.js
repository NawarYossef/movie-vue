import React from 'react';
import PropTypes from 'prop-types';
import './UserList.css';

const UserList = props => {
  const usersToDisplay = props.users.map((item, index) => {
    return <li>{item}</li>;
  });

  return (
    <article className="user-list">
      <ul>
        {usersToDisplay}
      </ul>
    </article>
  );
};

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default UserList;
