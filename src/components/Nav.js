import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles/Nav.css';

export default function Nav(props) {
  const links = [
    <Link to='/login' className="">
      Login
    </Link>,
    <Link to='/register' className="">
      Register
    </Link>
  ];
  return (
    <nav>
      <ul>
        {links.map((link, idx) => {
          return (
            <li key={idx.toString()}>
              {link}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
