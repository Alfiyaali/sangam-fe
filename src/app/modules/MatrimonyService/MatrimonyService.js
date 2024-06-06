import React from 'react';
import './MatrimonyService.css';
import SuccessStory from './SuccessStory';
import couple1 from '../../../../src/assets/images/find-img1.png'
import couple2 from '../../../../src/assets/images/find-img2.png';

const MatrimonyService = () => {
  return (
    <section className="matrimony-service">
      <div className="container">
        <div className="left-column">
          <div className="success-stories">
            <SuccessStory
              imageSrc={couple1}
              title="John & Jane"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
            />
            <SuccessStory
              imageSrc={couple2}
              title="Mark & Emily"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit... "
            />
          </div>
         
        </div>
        <div className="divider-verticals"></div>
        <div className="right-column">
          <h3 className="section-title">
          Matrimony Service with <span className='hl'>Millions </span> of Success Stories
             <br />
          </h3>
        </div>

      </div>
      <button className="ml-view-all-button">View All</button>
    </section>
  );
};

export default MatrimonyService;
