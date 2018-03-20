import React from 'react';
import { Link } from 'react-router-dom';

const LandingIntro = () => (
  <article className="landing__intro">
    <p>Who doesn't love receiving a good compliment? With Compliment App, you'll be receiving them daily!</p>
    <p><Link to="/login">Login</Link> or <Link to="/register">register</Link> to start feeling the love!</p>
  </article>
);

export default LandingIntro;
