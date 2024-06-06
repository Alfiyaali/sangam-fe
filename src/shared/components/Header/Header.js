import React, { useState } from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import Logo from '../../../assets/images/logo-svg.svg';
import { Container } from 'react-bootstrap';
import HeaderContent from './HeaderContent';
import DetailsModal from '../Details/DetailsModal';
import CustomSelect from './CustomSelect';

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const religions = [
    { value: 'select', label: 'Select' },
    { value: 'hinduism', label: 'Hinduism' },
    { value: 'islam', label: 'Islam' },
    { value: 'christianity', label: 'Christianity' },
    { value: 'sikhism', label: 'Sikhism' },
    { value: 'buddhism', label: 'Buddhism' },
    { value: 'jainism', label: 'Jainism' },
    { value: 'other', label: 'Other' },
  ];

  const countries = [
    { value: 'select', label: 'Select' },
    { value: 'usa', label: 'USA' },
    { value: 'india', label: 'India' },
    { value: 'canada', label: 'Canada' },
    { value: 'uk', label: 'UK' },
    { value: 'australia', label: 'Australia' },
    { value: 'other', label: 'Other' },
  ];

  return (
    <header className="header">
      <HeaderContent />
      <div className="hero-section">
        <div className="search-form-wrapper">
          <Container>
            <div className="hero-content">
              <h1>
                Trusted Matrimony <span className="dm-sans-font">&</span>
                <br />
                <span className="highlight">Matchmaking Service</span>
              </h1>
              <div className="search-intro">I’M LOOKING FOR A</div>
            </div>
          </Container>
          <Container>
            <div className="search-form-wrapper">
              <div className="search-form">
                <div className="search-row">
                  <div className="select-group">
                    <p className="s-header">Search for Matches who speak</p>
                    <CustomSelect options={religions} />
                  </div>
                  <div className="select-group">
                    <p className="s-header">and belong to</p>
                    <CustomSelect options={countries} />
                  </div>
                  <button className="cta-button" onClick={handleShow}>
                    Let’s Begin
                  </button>
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
