import React from 'react';
import './Contact.css';
import Email from '../../../../assets/images/email.png';   
import Phone from '../../../../assets/images/phone.png';  
import Global from '../../../../assets/images/global.png';  
import Arrow from '../../../../assets/images/arrow.png'; 
import Logo from '../../../../assets/images/logo-svg.svg'; 
import Facebook from '../../../../assets/images/facebook-app-symbol.png';  
import Linkedin from '../../../../assets/images/linkedin.png';  
import Instagram from '../../../../assets/images/instagram.png'; 
import Twitter from '../../../../assets/images/twitter.png'; 
const Contact = () => {
    return (
        <div className="contact-section">
            <div className="cover-image">
            <div className="logo-contact">
          <img src={Logo} alt="Sangam Sahithi" />
        </div>
                <h1>Contact Us</h1>
            </div>
            <div className="contact-content">
                <div className="cover-paragraph-container">
                    <p className="cover-paragraph">Looking for premium matrimonial matches? 
                    Discover Sangam Sahithi's exclusive services for a perfect match. 
                    Contact us today!</p>
                </div>
                <div className="contact-left">
                    <div className="contact-info">
                        <p className='c-info'><strong className='icon'><img src={Email} alt='email' /></strong> info@yourdomain.com</p>
                        {/* <p className='c-info'><strong className='icon'><img src={Phone} alt='phone' /></strong> +442895437886</p> */}
                        <p className='c-info'><strong className='icon'><img src={Global} alt='global' /></strong> Hr.priyasangam@gmail.com</p>
                        {/* <p className='c-info'><strong>Address (India):</strong></p>
                        <p className='c-info'>F-160,First Floor, Corporate Wing<br />
                        sector 30B,Vashi Navi Mumbai <br/>
                        Maharashtra 400703 </p> */}
                        <p className='c-info address'><strong>Address:</strong> Suite 12,32-33. Elmwood Ave<br />
                        United Kingdom,United Kingdom</p>
                       <div className='social-icons'>
                        <img src={Facebook} alt='facebook' />
                        <img src={Twitter} alt='twitter' />
                        <img src={Linkedin} alt='linkedin' />
                        <img src={Instagram} alt='instagram' />
                       </div>
                    </div>
                </div>
                <div className="contact-right">
                    <div className="contact-form">
                        <form>
                            <div className="cn-form-row">
                                <input type="text" name="name" placeholder="Name" className="contact-input" required />
                                <input type="text" name="email" placeholder="Email" className="contact-input" required />
                            </div>
                            <div className="cn-form-row">
                                <input type="text" name="subject" placeholder="Subject" className="contact-input" required />
                                <input type="text" name="phone" placeholder="Phone" className="contact-input" required />
                            </div>
                            <textarea name="message" placeholder="Hello, I am interested in..." rows="7" required></textarea>
                            <button type="submit" className="send-button">Send Now <img className='arrow-icon' src={Arrow} alt='arrow' /></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
