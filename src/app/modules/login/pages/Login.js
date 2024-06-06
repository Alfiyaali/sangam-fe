import React from 'react';
import './Login.css';

const LoginSection = () => {
  return (
    <section className="login-section">
      <div className="top-right-buttons">
        <button className="language-button">Choose Language</button>
        <button className="register-button">Register</button>
      </div>
      <div className="login-container">
        <div className="login-form">
          <h4>Welcome back!<br />Enter your email id to login</h4>
          <form className='form'>
            <div className="login-form-group">
              <input type="text" id="loginid" name="loginid" placeholder="Email" />
            </div>
            <div className="login-form-group">
              <input type="password" id="password" name="password" placeholder="Password" />
            </div>
            <div className="additional-options">
              <label>
                <input type="checkbox" /> Keep me logged in
              </label>
              <a href="/">Forgot Password?</a>
            </div>
            <div className="login-form-group">
              <button type="submit" className="login-button">Login</button>
            </div>
            <div className="divider">
            <span>OR</span>
          </div>
          <button className="continue-button">Continue with Mobile</button>
          </form>
          
        </div>
      </div>
    </section>
  );
};

export default LoginSection;
