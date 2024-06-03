import React, { useState } from 'react';
import './profile.css';

const Profile = () => {
  const [step, setStep] = useState(1);
  const [profileCreatedFor, setProfileCreatedFor] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [motherTongue, setMotherTongue] = useState('');
  const [community, setCommunity] = useState('');
  const [currentLocation, setCurrentLocation] = useState('');
  const [nativePlace, setNativePlace] = useState('');
  const [highestEducation, setHighestEducation] = useState('');
  const [collegeName, setCollegeName] = useState('');
  const [workExperience, setWorkExperience] = useState('');
  const [jobTitle, setJobTitle] = useState('');

  const nextStep = () => {
    setStep(prevStep => prevStep + 1);
  };

  return (
    <section className="profile-section">
      <div className="progress-bar">
        <div className={step >= 1 ? 'current' : ''}></div>
        <div className={step >= 2 ? 'current' : ''}></div>
        <div className={step >= 3 ? 'current' : ''}></div>
      </div>
      {step === 1 && (
        <div className="page">
          <h2>Let’s get started</h2>
          <p>We will help you to find the perfect match based on the details you enter here</p>
          <form>
            <div className="form-group">
              <label>Profile created for*</label>
              <div className="profile-buttons">
                {['Self', 'Friend', 'Son', 'Daughter', 'Brother', 'Sister', 'Relative'].map(option => (
                  <button
                    key={option}
                    type="button"
                    className={`profile-button ${profileCreatedFor === option ? 'selected' : ''}`}
                    onClick={() => setProfileCreatedFor(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
            <div className="form-group">
              <label>Name*</label>
              <div className="row">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
              </div>
            </div>
            <div className="form-group">
              <label>Date of Birth*</label>
              <div className="row">
                <input type="text" placeholder="Day" />
                <input type="text" placeholder="Month" />
                <input type="text" placeholder="Year" />
              </div>
            </div>
            <div className="form-group">
              <label>Height*</label>
              <div className="row">
                <input type="text" placeholder="Feet" />
                <input type="text" placeholder="Inch" />
              </div>
            </div>
            <button type="button" className="next-button" onClick={nextStep}>Next</button>
          </form>
        </div>
      )}
      {step === 2 && (
        <div className="page">
          <h2>Social Details</h2>
          <form>
            <div className="form-group">
              <label>Marital status*</label>
              <select
                value={maritalStatus}
                onChange={e => setMaritalStatus(e.target.value)}
              >
                <option value="">Select</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Divorced">Divorced</option>
              </select>
            </div>
            <div className="form-group">
              <label>Mother Tongue*</label>
              <select
                value={motherTongue}
                onChange={e => setMotherTongue(e.target.value)}
              >
                <option value="">Select</option>
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
              </select>
            </div>
            <div className="form-group">
              <label>Community*</label>
              <select
                value={community}
                onChange={e => setCommunity(e.target.value)}
              >
                <option value="">Select</option>
                <option value="Community 1">Community 1</option>
                <option value="Community 2">Community 2</option>
                <option value="Community 3">Community 3</option>
              </select>
            </div>
            <div className="form-group">
              <label>Current location*</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Native place*</label>
              <input type="text" />
            </div>
            <button type="button" className="next-button" onClick={nextStep}>Next</button>
          </form>
        </div>
      )}
      {step === 3 && (
        <div className="page">
          <h2>Career Details</h2>
          <form>
            <div className="form-group">
              <label>Highest education*</label>
              <div className="profile-buttons">
                {['Doctorate', 'Masters', 'Bachelors', 'Diploma', 'Undergraduate', 'Associate Degree', 'Honours Degree', 'Trade School', 'High School'].map(option => (
                  <button
                    key={option}
                    type="button"
                    className={`profile-button ${highestEducation === option ? 'selected' : ''}`}
                    onClick={() => setHighestEducation(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
            <div className="form-group">
              <label>College Name</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Work Experience</label>
              <input type="text" />
            </div>
          
            <button type="button" className="next-button" onClick={nextStep}>Next</button>
          </form>
        </div>
      )}
    </section>
  );
};

export default Profile;
