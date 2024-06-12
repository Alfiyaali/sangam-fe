import React from "react";
import "./StoryPage.css";
import StoryLogo from "../../../../assets/images/footer-logo.png";

const StoryPage = () => {
  return (
    <div>
      <div className="storypage-heading">
        <div className="storypage-title">
          <p>Our Story</p>
        </div>
      </div>

      <div className="storypage-para">
        <p className="stry-para">
          Rahul Sharma grew up in a close-knit family where relationships were
          cherished. Witnessing the joy that strong family bonds brought, he
          envisioned a platform that would help others find the same happiness.
          With Sangam Sahithi, he combined traditional matchmaking with modern
          technology, creating a service that respects cultural values while
          embracing contemporary needs. Today, we take pride in being part of
          countless love stories and success journeys.
        </p>
      </div>

      <footer className="storypage-footer">
        <div className="storypage-footer-section">
          <a href="">
            <img src={StoryLogo} alt="" />
          </a>
          <p style={{padding: "10px"}}>Awards and Regocnition</p>
          <div className="storaypage-contact">
            <p className="stry-foot-head">Contact Us</p>
            <p>9644362532</p>
            <p>hrpriya786000@gmail.com</p>
            <p>
              {" "}
              <p>Address : 1234 Harmony Lane,
              Bengaluru, Karnataka, India</p>
            </p>
          </div>
        </div>
        <div className="storypage-footer-section stry-foot-sec">
            <p className="stry-foot-head">Privacy & You</p>
            <a href="" className="storypage-footer-link">Terms of Use</a>
            <a href="" className="storypage-footer-link">Privacy Policy</a>
            <a href="" className="storypage-footer-link">Be Safe Online</a>
            <a href="" className="storypage-footer-link">Report Misuse</a>
        </div>
        <div className="storypage-footer-section stry-foot-sec">
        <p className="stry-foot-head">Need Help</p>
            <a href="" className="storypage-footer-link">Member Login</a>
            <a href="" className="storypage-footer-link">Sign Up</a>
            <a href="" className="storypage-footer-link">Partner Search</a>
            <a href="" className="storypage-footer-link">Premium Membership </a>
            <a href="" className="storypage-footer-link">Customer Support</a>
            </div>
        <div className="storypage-footer-section stry-foot-sec">
        <p className="stry-foot-head">More</p>
            <a href="" className="storypage-footer-link">Success Soties</a>
            </div>
      </footer>
    </div>
  );
};

export default StoryPage;
