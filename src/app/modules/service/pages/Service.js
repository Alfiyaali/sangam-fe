import React from 'react';
import './Service.css'; // Import the CSS from the Service component
import ConnectIcon from '../../../../assets/images/Ellipse 1.png'; // Adjust the path as necessary
import Footer from '../../../../shared/components/Footer/Footer';

const Service = () => {
    return (
        <>
            <div className="services-section">
                <div className="services-cover-image">
                    <h1 className="welcome-heading">Welcome</h1>
                    <h1 className="centered-heading">Services</h1>
                </div>
                <div className="services-content">
                    <h2 className="services-heading">How it Works</h2>
                    <div className="service-find-stories">
                        <div className="service-find-story">
                            <img src={ConnectIcon} alt="icon" className="service-bullet-icon" />
                            <div className="service-story-content">
                                <h4>Sign Up</h4>
                                <p>Our platform facilitates meaningful connections between like-minded individuals.</p>
                            </div>
                        </div>
                        <div className="service-find-story">
                            <div className="service-story-content-cn">
                                <h4>Connect</h4>
                                <p>Interact with potential matches in a safe and comfortable environment.</p>
                            </div>
                            <img src={ConnectIcon} alt="icon" className="service-bullet-icon" />
                        </div>
                        <div className="service-find-story">
                            <img src={ConnectIcon} alt="icon" className="service-bullet-icon" />
                            <div className="service-story-content">
                                <h4>Interact</h4>
                                <p>Interact with potential matches in a safe and comfortable environment.</p>
                            </div>
                        </div>
                    </div>
                    <h2 className="services-subheading">Matrimony Matches</h2>
                    <div className="services-paragraph-container">
                        <p className="services-paragraph">
                            Our services are designed to help you find the perfect match. We combine traditional matchmaking methods with modern technology to provide a comprehensive and personalized experience. Our team is dedicated to ensuring that you find a partner who shares your values and interests.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Service;
