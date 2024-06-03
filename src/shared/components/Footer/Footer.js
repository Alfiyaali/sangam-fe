import React from 'react';
import './Footer.css';
import Logo from '../../../assets/images/footer-logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-logo">
            <img src={Logo} alt="Sangam Sahithi" />
          </div>
          <div className="footer-titles">
            <p>Awards And Registration</p>
            <p>Contact Us</p>
            <p>9644362532</p>
            <p>hrpriya786000@gmail.com</p>
            <h4>Address : 1234 Harmony Lane, Bengaluru, Karnataka, India</h4>
          </div>
        </div>
        <div className="footer-menu-container">
          <div className="footer-menu">
            <h3>Privacy & You</h3>
            <ul>
              <li><a href="terms">Terms of Use</a></li>
              <li><a href="privacy">Privacy Policy</a></li>
              <li><a href="online">Be Safe Online</a></li>
              <li><a href="report">Report Misuse</a></li>
            </ul>
          </div>
          <div className="footer-menu">
            <h3>Need Help</h3>
            <ul>
              <li><a href="Member">Member Login</a></li>
              <li><a href="sgnup">Sign Up</a></li>
              <li><a href="Partner">Partner Search</a></li>
              <li><a href="Premium">Premium Membership</a></li>
              <li><a href="Customer">Customer Support</a></li>
            </ul>
          </div>
          {/* <div className="footer-menu">
            <h3>More</h3>
            <ul>
              <li><a href="Success">Success Stories</a></li>
            </ul>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
