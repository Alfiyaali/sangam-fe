import React, { useState, useEffect } from 'react';
import '../MatrimonialForm/MatrimonialForm.css';

const MatrimonialForm = () => {
  const initialFormData = {
    fname: '',
    lname: '',
    dob: '',
    age: '',
    email: '',
    education: '',
    mnumber: '',
    gender: '',
    occupation: '',
    raashi: '',
    dosham: '',
    eating: '',
    smoking: '',
    drinking: '',
    family: '',
    familyvalue: '',
    familystatus: '',
    height: '',
    weight: '',
    country: '',
    state: '',
    astrological: '',
    religion: '',
    caste: '',
    gotra: '',
    mtongue: '',
    horoscope: '',
    star: '',
    expectation: '',
    annual_income: '',
    martial_status: '',
    citizen: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [allFormData, setAllFormData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('allFormData'));
    if (storedData) {
      setAllFormData(storedData);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const newData = { ...formData };
      setAllFormData([...allFormData, newData]);
      localStorage.setItem('allFormData', JSON.stringify([...allFormData, newData]));
      setFormData(initialFormData);
      alert("Form data saved locally.");
    } else {
      alert("Email or phone number already exists!");
    }
  };

  const validateForm = () => {
    const { email, mnumber } = formData;
    const existingEmail = allFormData.some(data => data.email === email);
    const existingMnumber = allFormData.some(data => data.mnumber === mnumber);
    return !existingEmail && !existingMnumber;
  };


  return (
    <div>
      <header>
        REGISTRATION FORM
      </header>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form first">
            <div className="details personal">
              <span className="title">Personal Details</span>
              <div className="fields">
                <div className="input-field">
                  <label>First Name*</label>
                  <input
                    type="text"
                    name="fname"
                    placeholder="Enter your name"
                    value={formData.fname}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="input-field">
                  <label>Last Name*</label>
                  <input
                    type="text"
                    name="lname"
                    placeholder="Enter your name"
                    value={formData.lname}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="dob">Date of Birth:</label>
                  <input
                    type="date"
                    id="dob"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="age">Age:</label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="input-field">
                  <label htmlFor='email'>Email*</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="input-field">
                  <label>Education*</label>
                  <input
                    type="text"
                    name="education"
                    placeholder="Enter your school name"
                    value={formData.education}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="input-field">
                  <label>Mobile Number*</label>
                  <input
                    type="number"
                    name="mnumber"
                    data-maxlength="10"
                    value={formData.mnumber}
                    onChange={(e) => {
                      const value = e.target.value.slice(0, 10);
                      setFormData({ ...formData, mnumber: value });
                    }}
                    required
                  />
                </div>
                <div className="input-field">
                  <label>Gender*</label>
                  <select name="gender" value={formData.gender} onChange={handleChange} required>
                    <option value="" disabled>
                      Select gender
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
                <div className="input-field">
                  <label>Occupation*</label>
                  <input
                    type="text"
                    name="occupation"
                    placeholder="Enter your occupation"
                    value={formData.occupation}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="details ID">
                <span className="title">Astrological Details</span>
                <div className="fields">
                  <div className="input-field">
                    <label>Raashi/Moon Sign*</label>
                    <input
                      type="text"
                      name="raashi"
                      placeholder="Enter"
                      value={formData.raashi}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label>Dosham/Mangalik*</label>
                    <input
                      type="text"
                      name="dosham"
                      placeholder="Enter"
                      value={formData.dosham}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label>Eating Habit*</label>
                    <input
                      type="text"
                      name="eating"
                      placeholder="Enter"
                      value={formData.eating}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label>Smoking Edit*</label>
                    <input
                      type="text"
                      name="smoking"
                      placeholder="Enter"
                      value={formData.smoking}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label>Drinking*</label>
                    <input
                      type="text"
                      name="drinking"
                      placeholder="Enter"
                      value={formData.drinking}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label>Family Type*</label>
                    <input
                      type="text"
                      name="family"
                      placeholder="Enter"
                      value={formData.family}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label>Your Family Value*</label>
                    <input
                      type="text"
                      name="familyvalue"
                      placeholder="Enter"
                      value={formData.familyvalue}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label>Your Family Status*</label>
                    <input
                      type="text"
                      name="familystatus"
                      placeholder="Enter"
                      value={formData.familystatus}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label>Height*</label>
                    <input
                      type="text"
                      name="height"
                      placeholder="Feet"
                      value={formData.height}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label>Weight*</label>
                    <input
                      type="number"
                      name="weight"
                      placeholder="KG"
                      value={formData.weight}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="country">Country*</label>
                    <input
                      type="text"
                      name="country"
                      placeholder="Enter"
                      value={formData.country}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label>State*</label>
                    <input
                      type="text"
                      name="state"
                      placeholder="Enter"
                      value={formData.state}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label>About Me*</label>
                    <input
                      type="text"
                      name="astrological"
                      placeholder="Enter your text"
                      value={formData.astrological}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label>Religion*</label>
                    <input
                      type="text"
                      name="religion"
                      placeholder="Enter"
                      value={formData.religion}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label>Caste*</label>
                    <input
                      type="text"
                      name="caste"
                      placeholder="Enter your text"
                      value={formData.caste}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label>Gotra(m)*</label>
                    <input
                      type="text"
                      name="gotra"
                      placeholder="Enter your text"
                      value={formData.gotra}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label>Mother Tongue</label>
                    <input
                      type="text"
                      name="mtongue"
                      placeholder="Enter your text"
                      value={formData.mtongue}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label>Horoscope Match</label>
                    <input
                      type="text"
                      name="horoscope"
                      placeholder="Enter your text"
                      value={formData.horoscope}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label>Star</label>
                    <input
                      type="text"
                      name="star"
                      placeholder="Enter your text"
                      value={formData.star}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label>Expectation*</label>
                    <input
                      type="text"
                      name="expectation"
                      placeholder="Enter"
                      value={formData.expectation}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label>Annual Income*</label>
                    <input
                      type="number"
                      name="annual_income"
                      placeholder="Enter"
                      value={formData.annual_income}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label>Martial Status*</label>
                    <input
                      type="text"
                      name="martial_status"
                      placeholder="Enter"
                      value={formData.martial_status}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label>Citizen*</label>
                    <input
                      type="text"
                      name="citizen"
                      placeholder="Enter"
                      value={formData.citizen}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <button type="submit">
                  <span className="btnText">Submit</span>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MatrimonialForm;
