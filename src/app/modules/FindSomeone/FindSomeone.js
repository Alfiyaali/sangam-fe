import React from 'react';
import './FindSomeOne.css';
import ConnectIcon from '../../../assets/images/Ellipse 1.png';
import Exit from '../../../../src/assets/images/exit.png'
import Service from '../../../../src/assets/images/service.png';
import Bloc from '../../../../src/assets/images/bloc.png';

const FindSomeone = () => {
  return (
    <section className="find-service">
      <div className="find-container">
        <div className="success-storiess-column">
          <div className="find-stories">
            
            <div className="find-story">
              <div className='icon-wrapper'>
              <img src={ConnectIcon} alt="icon" className="bullet-icon" />
              <img src={Exit} alt="icon" className="design-icon" />
              </div>
            
              <div className="story-content">
                <h4>Sign Up</h4>
                <p>Register for free & put up your matrimony profile</p>
              </div>
            </div>
            <div className="find-story">
             
              <div className="story-content-cn">
                <h4>Connect</h4>
                <p>Select & Connect with matches you like</p>
              </div>
              <div className='icon-wrapper'>
              <img src={ConnectIcon} alt="icon" className="bullet-icon" />
              <img src={Service} alt="icon" className="design-icon" />
              </div>
            </div>
            <div className="find-story">
            <div className='icon-wrapper'>
              <img src={ConnectIcon} alt="icon" className="bullet-icon" />
              <img src={Bloc} alt="icon" className="design-icon" />
              </div>
              <div className="story-content">
                <h4>Interact</h4>
                <p>Become a premium member & start a conversation</p>
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
