import React from 'react';
import './About.css';
import Footer from '../../../../shared/components/Footer/Footer';
const About = () => {
    return (
    <>
    
        <div className="about-section">
            <div className="about-cover-image">
                <h1>Our Story</h1>
            </div>
            <div className="about-content">
                <div className="about-paragraph-container">
                    <p className="about-paragraph">
                        Rahul Sharma grew up in a close-knit family where relationships were cherished. Witnessing the joy that strong family bonds brought, he envisioned a platform that would help others find the same happiness. With Sangam Sahithi, he combined traditional matchmaking with modern technology, creating a service that respects cultural values while embracing contemporary needs. Today, we take pride in being part of countless love stories and success journeys.
                    </p>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default About;
