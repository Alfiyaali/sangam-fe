import React, { useState } from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import Logo from '../../../assets/images/logo-svg.svg';

const Header = () => {
  // eslint-disable-next-line
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <header className="header">
      <div className="hero-section">
        <div className="hero-content">
          <h1>
            Trusted Matrimony <span className="dm-sans-font">&</span><br />
            <span className="highlight">Matchmaking Service</span>
          </h1>
          <div className="search-intro">
            I’M LOOKING FOR A
          </div>
          <div className="search-form">
            <div className="search-row">
              <div className="select-group">
                <p className='s-header'>Search for Matches who speak</p>
                <select>
                  <option value="select">Select</option>
                  <option value="hinduism">Hinduism</option>
                  <option value="islam">Islam</option>
                  <option value="christianity">Christianity</option>
                  <option value="sikhism">Sikhism</option>
                  <option value="buddhism">Buddhism</option>
                  <option value="jainism">Jainism</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="select-group">
                <p className='s-header'>and belong to</p>
                <select>
                  <option value="select">Select</option>
                  <option value="usa">USA</option>
                  <option value="india">India</option>
                  <option value="canada">Canada</option>
                  <option value="uk">UK</option>
                  <option value="australia">Australia</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <button className="cta-button">Let’s Begin</button>
            </div>
          </div>
        </div>
      </div>
      <div className="header-content">
        <div className="logo">
          <img src={Logo} alt="Sangam Sahithi" />
        </div>
        {isLoggedIn ? (
          <Navigation />
        ) : (
          <div className="auth-buttons">
            <button className="login-button">Login</button>
            <button className="help-button">Help</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
