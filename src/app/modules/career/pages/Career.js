import React from 'react';
import "./Career.css"

import { Accordion, Button, Col, Container, Row, Tab, Tabs } from 'react-bootstrap';
import Footer from '../../../../shared/components/Footer/Footer';
import Header from '../../../../shared/components/Header/HeaderContent';
const Career = () => (
  <>
  <Header />
  <div className='careers'>
    <div className='video-wrapper'>
  <video className="video-player" muted autoPlay loop>
        <source src="https://careers.peopleinteractive.in/wp-content/uploads/2023/04/ATF-Desktop-V3.mp4" type="video/mp4" />
       
      </video>
      <Container>
      <div className="elementor-widget-wrap elementor-element-populated">
      <div
        className="elementor-element elementor-element-36e8694 elementor-widget elementor-widget-heading animated fadeInUp"
        data-id="36e8694"
        data-element_type="widget"
        data-settings='{"_animation_delay":300}'
        data-widget_type="heading.default"
      >
        <div className="elementor-widget-container">
          <h1 className="elementor-heading-title1 elementor-size-default">
            Magic happens with the right match!
          </h1>
        </div>
      </div>
      <div
        className="elementor-element elementor-element-9a97c49 elementor-widget__width-initial elementor-widget elementor-widget-heading animated fadeInUp"
        data-id="9a97c49"
        data-element_type="widget"
        data-settings='{"_animation_delay":600}'
        data-widget_type="heading.default"
      >
        <div className="elementor-widget-container">
          <h1 className="elementor-heading-title2 elementor-size-default">
            Choose growth, choose Us!
          </h1>
        </div>
      </div>
      <div
        className="elementor-element elementor-element-5b96a60 elementor-widget elementor-widget-button animated fadeInUp"
        data-id="5b96a60"
        data-element_type="widget"
        data-settings='{"_animation_delay":600}'
        data-widget_type="button.default"
      >
        <div className="elementor-widget-container">
          <div className="elementor-button-wrapper">
            <a
              className="elementor-button elementor-button-link elementor-size-sm"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="elementor-button-content-wrapper">
                <span className="elementor-button-text">
                  Explore opportunities
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
      </Container>
    
      </div>
      <div className='know-bg'>
      <Container className='container-box'>
        <div className='heading-wrapper'>
      <div className='career-heading'>Get to know us </div>
      </div>
      <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"

    >
      <Tab className ="tab-boxes " eventKey="home" title={<img src="https://careers.peopleinteractive.in/wp-content/uploads/2023/02/Frame-15.png" alt="Home" style={{ width: '100%' }} />}>
      <p className='know-text'>
    <span style={{ fontWeight: 400 }}>
      People Interactive is one of India’s best-known consumer internet companies, always a step ahead of the rest. As suggested in its name, it was conceived not as a business but as an idea that would change the way people find their life partners leveraging the digital ecosystem.
    </span>
  </p>
  <div className='box-wrapper'>
<div className='know-box'>
  <p className='main-text'>15 +</p>
  <p className='sub-text'>Offices</p>
</div>
<div className='know-box'>
<p className='main-text'>1300 +</p>
  <p className='sub-text'>Employees</p>
</div>
  </div>
      </Tab>
      <Tab eventKey="profile" title={<img src="https://careers.peopleinteractive.in/wp-content/uploads/2023/02/Frame-18.png" alt="Home" style={{ width: '100%' }} />}>
      <p className='know-text'>
    <span style={{ fontWeight: 400 }}>
    With over 7 million success stories and counting, Shaadi.com is a household name that is synonymous with matchmaking. With every passing day and every new feature we aspire to change the way people come together. 
    </span>
  </p>
  <div className='box-wrapper'>
<div className='know-box'>
  <p className='main-text'>35 Million</p>
  <p className='sub-text'>Lifetime Users</p>
</div>
<div className='know-box'>
<p className='main-text'>10 Million</p>
  <p className='sub-text'>App Download</p>
</div>
<div className='know-box'>
  <p className='main-text'>7 Million</p>
  <p className='sub-text'>Success Stories</p>
</div>
<div className='know-box'>
<p className='main-text'>2 Million+</p>
  <p className='sub-text'>Social Followers</p>
</div>
  </div>
      </Tab>
      <Tab eventKey="contact" title={<img src="https://careers.peopleinteractive.in/wp-content/uploads/2023/02/Frame-17.png" alt="Home" style={{ width: '100%' }} />} >
      <p className='know-text'>
    <span style={{ fontWeight: 400 }}>
    Shaadi Live is a first of its kind virtual event where you will get to meet and talk to up to 10 matches over multiple back-to-back 5 minute video calls.
    </span>
  </p>
  <div className='box-wrapper'>
<div className='know-box'>
  <p className='main-text'>Upto 10</p>
  <p className='sub-text'>Meetings</p>
</div>
<div className='know-box'>
  <p className='main-text'>In 1</p>
  <p className='sub-text'>Hour</p>
</div>
<div className='know-box'>
<p className='main-text'>
For 5</p>
  <p className='sub-text'>Minutes</p>
</div>
  </div>
      </Tab>
      <Tab eventKey="detail" title={<img src="https://careers.peopleinteractive.in/wp-content/uploads/2023/02/Frame-16.png" alt="Home" style={{ width: '100%' }} />} >
      <p className='know-text'>
    <span style={{ fontWeight: 400 }}>
    In India marriages mean two families coming together. Sangam.com  as a business unit comes with the superpower that innovates to do just that. With more than 2 million profiles, it is emerging as the preferred matchmaking service for Indian families globally.
    </span>
  </p>
  <div className='box-wrapper'>
<div className='know-box'>
  <p className='main-text'>5 Million</p>
  <p className='sub-text'>Lifetime Users</p>
</div>
<div className='know-box'>
<p className='main-text'>1 Million</p>
  <p className='sub-text'>App Download</p>
</div>
  </div>
      </Tab>
    </Tabs>
     </Container>
     </div>
<div className='benefit-bg'>
      <Container className='container-box'>
        <div className='heading-wrapper'>
      <div className='career-heading'>Employee benefits </div>
      </div>
      <div className='sub-heading-wrapper'>
      <div className='sub-heading'>You’re the special one for us! While you work relentlessly for togetherness, we take care of your wellbeing. </div>
      </div>
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Career progression</Accordion.Header>
        <Accordion.Body>
          <div className='progression-body'>
<div className='progression-left-container'>
  <p className='progression-text letter-style'>“Opportunities don’t happen, you create them.”—Chris Grosser.</p>
  <p className='progression-text'>We truly believe in this philosophy. At People Group,  we care for your growth! Innumerable success stories are testimony to the fact that we are a true <span className='letter-highlight'> #Peoplefirst</span> company. If you have the hunger, the ability to question status quo, are passionate about solving problems or are a hustler, we have the opportunity! </p>
  <p className='progression-text'>IJPs, Cross functional growth, Fast track career growth programs and loads of other stuff!</p>
</div>
<div className='progression-right-container'>
  <img src="https://careers.peopleinteractive.in/wp-content/uploads/2023/06/DSC01695-1-1-e1685995390716-1-300x300.jpg" alt='progression-img' />
</div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Health insurance</Accordion.Header>
        <Accordion.Body>
        <div className='progression-body'>
<div className='progression-left-container'>
  <p className='progression-text '>We believe in the policy of Better Safe than sorry!</p>
  <p className='progression-text letter-highlight'>For us, our people safety is our utmost priority </p>
  <p className='progression-text'>Medical cover with tenure-linked insurance coverage for self, spouse & children as per company policy. </p>
</div>
<div className='progression-right-container'>
  <img src="https://careers.peopleinteractive.in/wp-content/uploads/2023/06/IMG-20230608-WA0002-1-1-e1686288190182-1-300x300.jpg" alt='progression-img' />
</div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Leave benefits</Accordion.Header>
        <Accordion.Body>
        <div className='progression-body'>
<div className='progression-left-container'>
  <p className='progression-text '>Your well being is very important to us. We believe that taking those breaks are very important. You have vacation leave, paternity leave, maternity leave and of course, working for Shaadi.com you get marriage leave as well! </p>
  
</div>
<div className='progression-right-container'>
  <img src="https://careers.peopleinteractive.in/wp-content/uploads/2023/06/Fantastic-Peers-2-1-e1685994631587-1-300x300.jpg" alt='progression-img' />
</div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Loads of fun @ work</Accordion.Header>
        <Accordion.Body>
       

  <p className='progression-text '>We really don’t need a reason to celebrate!</p>
  <p className='progression-text w-100'>Events, games, celebrations… typical of a young vibrant company, while we do a lot of serious work,<br/> we make sure we have a lot of fun.</p>

<div className='d-flex gap-5 items-center mt-5'>
  <img className='work-img' src="https://careers.peopleinteractive.in/wp-content/uploads/2023/06/Fantastic-Peers-2-1-e1685994631587-1-300x300.jpg" alt='progression-img' />
  <img className='work-img' src="https://careers.peopleinteractive.in/wp-content/uploads/2023/06/Fantastic-Peers-2-1-e1685994631587-1-300x300.jpg" alt='progression-img' />
  <img className='work-img'src="https://careers.peopleinteractive.in/wp-content/uploads/2023/06/Fantastic-Peers-2-1-e1685994631587-1-300x300.jpg" alt='progression-img' />
</div>
         
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      </Container>
      </div>
      <div className='know-bg'>
      <Container>
        <div className='culture-container'>
          <div className='culture-left-box'><video className="video-player-culture" muted autoPlay loop>
        <source src="https://careers.peopleinteractive.in/wp-content/uploads/2023/04/5576582-2.mp4" type="video/mp4" />
       
      </video></div>
          <div className='culture-right-box'>
            <p className='culture-heading'>Culture</p>
            <p className='culture-text'>This is why we’ll be the perfect pair. We best describe our culture, like every Shaadi ever it takes a village to make it amazing. We are a bunch of people always working together, with a bold, innovative, dynamic approach always looking to up our game. We have figured that the best way to get results is by leveraging scale and encouraging our culture of startup thinking.</p>
            <Button className='culture-btn'>Know more</Button>
          </div>
        </div>
      </Container>
      </div>
      <Footer/>
  </div>
  </>
);

export default Career;