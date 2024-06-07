import React from "react";
import "./Footer.css";
import Logo from "../../../assets/images/footer-logo.png";

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
            <p>hr.sangamsahithi.com</p>
          </div>
          <div className="footer-address-container">
            <div className="footer-address">
              <h4>India</h4>
              <p>
                F-160, First Floor, Corporate Wing, Fantasia Business Park,
                sector 30B, Vashi Navi Mumbai, Maharashtra 400703
              </p>
            </div>
            <div className="footer-address">
              <h4>Registered Office</h4>
              <p>
                Suite 12, 32-33 Elmwood Ave, Co. Antrim, Belfast, BT96AZ, United
                Kingdom
              </p>
            </div>
          </div>
        </div>
        <div className="footer-menu-container">
          <div className="footer-menu">
            <h3>Privacy & You</h3>
            <ul>
              <li>
                <a href="/terms">Terms of Use</a>
              </li>
              <li>
                <a href="privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="online">Be Safe Online</a>
              </li>
              <li>
                <a href="report">Report Misuse</a>
              </li>
            </ul>
          </div>
          <div className="footer-menu">
            <h3>Need Help</h3>
            <ul>
              <li>
                <a href="/login">Member Login</a>
              </li>
              <li>
                <a href="/register">Sign Up</a>
              </li>
              <li>
                <a href="/search">Partner Search</a>
              </li>
              <li>
                <a href="career">Career</a>
              </li>
              <li>
                <a href="/customer-support">Customer Support</a>
              </li>
            </ul>
          </div>
          <div className="footer-menu">
            <h3>More</h3>
            <ul>
              <li>
                <a href="/story">Success Stories</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
