import React from 'react';
import './CenteredLogoTextSection.css';
import Logo from '../../../../assets/images/contact-logo.png';

const CenteredLogoTextSection = () => {
  return (
    <section className="centered-logo-text-section">
      <img src={Logo} alt="Sangam Sahithi" className="center-logo" />
      <p className='centered-logo-head'>Contact us Today!!</p>
      <p>
      Looking for premium matrimonial matches? Discover Sangam Sahithi's exclusive services for a perfect match. Contact us today!
      </p>
    </section>
  );
};

export default CenteredLogoTextSection;
