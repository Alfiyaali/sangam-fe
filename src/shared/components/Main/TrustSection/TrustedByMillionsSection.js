import React from 'react';
import './TrustedByMillionsSection.css';
import { Container } from 'react-bootstrap';

const TrustedByMillionsSection = () => {
  return (
    <section className="trusted-by-millions-section">
      <Container>
      <div className="trusted-by-millions-content">
        <button className="trusted-by-millions-button">Trusted By Millions</button><span><p className='section-p'>Our dedicated support team is here to assist you with all your needs.
</p></span>
      </div>
      </Container>
    </section>
  );
};

export default TrustedByMillionsSection;
