import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => (
  <nav className='navigation'>
    <ul>
     
      <li className="non-essential-link"><Link to="/services">Services</Link></li>
      <li className="non-essential-link"><Link to="/about">About</Link></li>
      <li className="non-essential-link"><Link to="/story">Our Story</Link></li>
      <li className="essential-link"><Link to="/career" className="button-link">Choose language</Link></li>
      <li className="essential-link"><Link to="/login" className="button-link">Login</Link></li>
    </ul>
  </nav>
);

export default Navigation;
