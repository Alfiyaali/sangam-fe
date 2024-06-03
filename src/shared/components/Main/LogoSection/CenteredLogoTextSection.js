import React from 'react';
import './CenteredLogoTextSection.css';
import Logo from '../../../../assets/images/contact-logo.png';

const CenteredLogoTextSection = () => {
  return (
    <section className="centered-logo-text-section">
      <img src={Logo} alt="Sangam Sahithi" className="center-logo" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus, lorem ut bibendum molestie, dui sem tristique nulla, vel consequat odio eros et tortor. Interdum et malesuada fames ac ante.
      </p>
    </section>
  );
};

export default CenteredLogoTextSection;
