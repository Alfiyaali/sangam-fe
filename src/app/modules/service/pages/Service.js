import React from 'react';
import './Service.css'; // Import the CSS from the Service component
import ConnectIcon from '../../../../assets/images/Ellipse 1.png'; // Adjust the path as necessary
import Footer from '../../../../shared/components/Footer/Footer';
import Exit from '../../../../assets/images/exit.png'
import ServiceImage from '../../../../assets/images/service.png';
import Bloc from '../../../../assets/images/bloc.png';
import HeaderContent from '../../../../shared/components/Header/HeaderContent';
const Service = () => {

    return (
        <>
        <HeaderContent/>
            <div className="services-section">
                <div className="services-cover-image">
                    <div className="welcome-heading"></div>
                    <h1 className="welcome-text">Welcome</h1>
                    <h1 className="centered-heading">Services</h1>
                </div>
                <div className="services-content">
                    <h2 className="services-heading">How it Works</h2>
                    <div className="service-find-stories">
                        <div className="service-find-story">
                        <div className='icon-wrapper'>
              <img src={ConnectIcon} alt="icon" className="service-bullet-icon" />
              <div className="back-design" >
              <img src={Exit} alt="icon" />
              </div>
              </div>
                            <div className="service-story-content">
                                <h4>Sign Up</h4>
                                <p>Register for free & put up your matrimony profile</p>
                            </div>
                        </div>
                        <div className="service-find-story">
                            <div className="service-story-content-cn">
                                <h4>Connect</h4>
                                <p>Select & Connect with matches you like  </p>
                            </div>
                            <div className='icon-wrapper'>
              <img src={ConnectIcon} alt="icon" className="service-bullet-icon" />
              <div className="back-design" >
              <img src={ServiceImage} alt="icon" />
              </div>
              </div>
                        </div>
                        <div className="service-find-story">
                        <div className='icon-wrapper'>
              <img src={ConnectIcon} alt="icon" className="service-bullet-icon" />
              <div className="back-design" >
              <img src={Bloc} alt="icon" />
              </div>
              </div>
                            <div className="service-story-content">
                                <h4>Interact</h4>
                                <p>Become a premium member & start a conversation  </p>
                            </div>
                        </div>
                    </div>
                    <h2 className="services-subheading">Matrimony Matches</h2>
                    <div className="services-paragraph-container">
                        <p className="services-paragraph">
"Find Your Perfect Match, Start Your Perfect Journey." At Sangam Sahithi, we understand the significance of finding a life partner. Our dedicated team works tirelessly to understand your preferences and find the perfect match, ensuring compatibility and harmony. Our advanced search filters allow you to specify criteria such as interests, location, occupation, and more.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Service;
