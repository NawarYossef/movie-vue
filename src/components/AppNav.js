import React from 'react';
import { Link } from 'react-router-dom';
import './styles/AppNav.css';

export default function AppNav(props) {
  const links = [
    <Link to="/dashboard">DASHBOARD</Link>,
    <Link to="/inbox">INBOX</Link>,
    <Link to="/profile">PROFILE</Link>,
    <Link to="/">LOGOUT</Link>
  ];
  return (
    <nav>
      <ul>
        {links.map((link, idx) => {
          return (
            <li key={idx.toString()} className="link">
              {link}  
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
