import React from "react";
import "./ContactPage.css";
import Logo from "../../../../assets/images/Group.png";
import { MdLocalPhone, MdOutlineMailOutline } from "react-icons/md";
import { IoEarthOutline } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";

const ContactPage = () => {
  return (
    <div>
      <div id="example1">
        <div className="img-cont">
          <img src={Logo} alt="" width={40} />
          <p className="logoName">Sangam Sahithi</p>
        </div>
        <div className="heading">
          <h1 className="contact-heading">Contact Us</h1>
        </div>
      </div>

      <div className="form-containers">
        <div className="left-div">
          <div className="contact-info">
            <p className="contact-info-box">
              <span className="info-icon">
                <MdOutlineMailOutline />
              </span>{" "}
              <span className="info-text">info@yourdomain.com</span>
            </p>
            <p className="contact-info-box">
              <span className="info-icon">
                <MdLocalPhone />
              </span>{" "}
              <span className="info-text">9644362532</span>
            </p>
            <p className="contact-info-box">
              <span className="info-icon">
                <IoEarthOutline />
              </span>{" "}
              <span className="info-text">hrpriya786000@gmail.com</span>
            </p>
            <p style={{ fontSize: "15px", marginTop: "20px" }}>Address :1234 Harmony Lane, Bengaluru, Karnataka, India</p>
          </div>
        </div>
        <div className="right-div">
          <div className="contact-form">
            <form className="contacts-form">
              <div className="inpt-grp">
              <input type="text" name="name" placeholder="Name" className="input-forms" />
              <input type="email" name="email" placeholder="Email" className="input-forms" />
              </div>
             <div className="inpt-grp">
             <input type="text" name="subject" placeholder="Subject" className="input-forms" />
             <input type="tel" name="phone" placeholder="Phone" className="input-forms" />
              <textarea name="message" placeholder="Message" className="input-forms"></textarea>
             </div>
              <div className="btn-grp">
              <button type="submit" className="sent-button"><span className="send-btn">Send Now</span> <FaArrowRightLong /></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
