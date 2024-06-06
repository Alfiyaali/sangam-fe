// HeaderContent.js
import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import Logo from '../../../assets/images/logo-svg.svg';
import { Container } from 'react-bootstrap';

const HeaderContent = () => {
  
  return (
    <div className="header-content sticky-header">
      <Container>
        <div className='nav-wrapper'>
          <div className="logo">
            <img src={Logo} alt="Sangam Sahithi" />
          </div>
          <Navigation />
        </div>
      </Container>
    </div>
  );
};

export default HeaderContent;
