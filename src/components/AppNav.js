import React from 'react';
import { Link } from 'react-router-dom';
import './styles/AppNav.css';

export default function AppNav(props) {
  const links = [
    <Link to="/Home">Genre</Link>,
    <Link to="/Popular">Popular</Link>,
    <Link to="/NowPlaying">Now Playing</Link>,
    <Link to="/Upcoming">Upcoming</Link>
  ];
  return (
    <header>
      <h1>MovieVue</h1>
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
    </header>
  );
}
