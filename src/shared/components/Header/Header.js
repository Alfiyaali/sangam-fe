// Header.js
import React, { useState } from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import Logo from '../../../assets/images/logo-svg.svg';
import { Container } from 'react-bootstrap';
import HeaderContent from './HeaderContent';
import DetailsModal from '../Details/DetailsModal';

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <header className="header">
      <HeaderContent />

      <div className="hero-section">
        <div className='search-form-wrapper'>
          <Container>
            <div className="hero-content">
              <h1>
                Trusted Matrimony <span className="dm-sans-font">&</span><br />
                <span className="highlight">Matchmaking Service</span>
              </h1>
              <div className="search-intro">
                I’M LOOKING FOR A
              </div>
            </div>
          </Container>
          <Container>
            <div className='search-form-wrapper'>
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
                  <button className="cta-button" onClick={handleShow}>Let’s Begin</button>
                </div>
              </div>
            </div>
          </Container>
          <DetailsModal handleClose={handleClose} show={show} />
        </div>
      </div>
    </header>
  );
};

export default Header;
