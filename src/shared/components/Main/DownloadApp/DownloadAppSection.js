import React from 'react';
import './DownloadAppSection.css';
import logo1 from '../../../../assets/images/google-play.png'; // Replace with your logo1 image path
import logo2 from '../../../../assets/images/app-store.png'; // Replace with your logo2 image path

const DownloadAppSection = () => {
  return (
    <section className="download-app-section">
      <div className="dt-container">
        <div className="title-section">
          <h2 className="dn-section-title">Download the Matrimony App</h2>
        </div>
        <div className="logos-container">
          <div className="logo-container">
            <img src={logo1} alt="Logo 1" className="logo" />
          </div>
          <div className="logo-container">
            <img src={logo2} alt="Logo 2" className="logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadAppSection;
