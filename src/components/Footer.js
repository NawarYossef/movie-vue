import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Footer.css';

export default function Footer(props) {
  const links = [
    <Link to="/dashboard">GITHUB</Link>,
    <Link to="/inbox">LINKEDIN</Link>,
    <Link to="/profile">PORTFOLIO</Link>,
    <Link to="/">LOGOUT</Link>
  ];

  return (
    <footer role="contentinfo">
      <span>Created by Nawar and Roy</span>
      <ul>
        {links.map((link, idx) => {
          return (
            <li key={idx.toString()} className="link">
              {link}
            </li>
          );
        })}
      </ul>
    </footer>
  );
}
