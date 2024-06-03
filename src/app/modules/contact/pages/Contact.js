import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-section">
            <div className="cover-image">
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
                        <p className='c-info'><strong>Email:</strong> info@yourdomain.com</p>
                        <p className='c-info'><strong>Phone:</strong> 9644362532</p>
                        <p className='c-info'><strong>Email:</strong> hrpriya786000@gmail.com</p>
                        <p className='c-info'><strong>Address:</strong></p>
                        <p className='c-info'>1234 Harmony Lane,<br />
                            Bengaluru, Karnataka, India</p>
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
                            <textarea name="message" placeholder="Hello, I am interested in..." rows="5" required></textarea>
                            <button type="submit" className="send-button">Send Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
