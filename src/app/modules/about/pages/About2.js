import React from 'react';
import './About2.css';
import about2 from '../../../../assets/images/about2.png';
import cirlce from '../../../../assets/images/abt-circle.png';
import square from '../../../../assets/images/abt-square.png';
import overlayImage from '../../../../assets/images/about-overlay.png'; // Add your new overlay image here
import Footer from '../../../../shared/components/Footer/Footer';
import HeaderContent from '../../../../shared/components/Header/HeaderContent';

const About2 = () => {
  return (
    <>    
    <HeaderContent/>
    <div className="about-detail-container">
      <div className="about-detail-columns">
        <div className="about-detail-left">
          <h2>About Us</h2>
          <div className="about-detail-image-container">
            <img src={cirlce} alt="circle" className="circle circle1" />
            <img src={about2} alt="About Us" className="main-image" />
            <img src={overlayImage} alt="Overlay" className="overlay-image" /> {/* New overlay image */}
            <img src={square} alt="square" className="square square2" />
          </div>
        </div>
        <div className="about-detail-right">
          <div className="about-detail-text">
            <h1><span className='head'>WELCOME TO</span><br /> WEDDING MATRIMONY</h1>
          </div>
        </div>
      </div>
      <div className="about-detail-paragraph">
        <p>Sangam Sahithi was founded in 2018 by Rahul Sharma, driven by the vision to bridge the gap between tradition and modernity. Inspired by the joy and fulfillment of strong family bonds, Rahul created this platform to help others find happiness. Our mission is to provide comprehensive solutions that cater to diverse needs, from personalized matchmaking to flexible work options and efficient appointment scheduling.<br/>
        Sangam, the world's oldest and most successful matchmaking service, has been trusted since 1996 by people all over the world to help them find their soulmates. Today, hundreds of  thousands of  people have met their life partners through our revolutionary matchmaking service and countless others have made some very special friends.</p>
      </div>
    </div>
    <Footer/>
    </>

  );
};

export default About2;
