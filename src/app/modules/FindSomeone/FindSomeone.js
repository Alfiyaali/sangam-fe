import React from 'react';
import './FindSomeOne.css';
import ConnectIcon from '../../../assets/images/Ellipse 1.png';


const FindSomeone = () => {
  return (
    <section className="find-service">
      <div className="find-container">
        <div className="success-storiess-column">
          <div className="find-stories">
            
            <div className="find-story">
              <img src={ConnectIcon} alt="icon" className="bullet-icon" />
              <div className="story-content">
                <h4>Sign Up</h4>
                <p>Our platform facilitates meaningful connections between like-minded individuals.</p>
              </div>
            </div>
            <div className="find-story">
             
              <div className="story-content-cn">
                <h4>Connect</h4>
                <p>Interact with potential matches in a safe and comfortable environment.</p>
              </div>
              <img src={ConnectIcon} alt="icon" className="bullet-icon" />
            </div>
            <div className="find-story">
              <img src={ConnectIcon} alt="icon" className="bullet-icon" />
              <div className="story-content">
                <h4>Interact</h4>
                <p>Interact with potential matches in a safe and comfortable environment.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="dividers"></div>
        <div className="title-columns">
          <h3 className="section-titles">
            Find Your <br />
            <span className="highlight">Special</span> <br />
            Someone
          </h3>
        </div>
      </div>
    </section>
  );
};

export default FindSomeone;
