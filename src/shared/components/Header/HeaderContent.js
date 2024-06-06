import React from 'react';
import { Link } from 'react-router-dom';
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
            <Link to="/">
              <img src={Logo} alt="Sangam Sahithi" />
            </Link>
          </div>
          <Navigation />
        </div>
      </Container>
    </div>
  );
};

export default HeaderContent;
