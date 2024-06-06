import React from 'react';
import './SuccessStory.css';

const SuccessStory = ({ imageSrc, title, description }) => {
  return (
    <div className="success-story">
      <img src={imageSrc} alt={title} className="success-story-image" />
      <div className="success-story-content">
        <h3 className="success-story-title">{title}</h3>
        <div >
        <p className="success-story-description">{description} <span className='read-more-text'>Read More</span></p>

        </div>
      </div>
    </div>
  );
};

export default SuccessStory;
