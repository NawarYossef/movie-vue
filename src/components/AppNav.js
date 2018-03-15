import React from 'react';
import './styles/AppNav.css';

const AppNav = props => {
  return (
    <nav>
      <ul>
        <li>DASHBOARD</li>
        <li>INBOX</li>
        <li>PROFILE</li>
        <li>LOGOUT</li>
      </ul>
    </nav>
  );
};

export default AppNav;
