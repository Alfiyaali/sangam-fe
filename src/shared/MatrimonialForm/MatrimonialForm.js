import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./MatrimonialForm.css";

const MatrimonialForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [persons, setPersons] = useState(
    JSON.parse(localStorage.getItem("persons")) || []
  );

  const onSubmit = (data) => {
    const updatedPersons = [...persons, data];
    setPersons(updatedPersons);
    localStorage.setItem("persons", JSON.stringify(updatedPersons));
    reset();
  };

  return (
    <div className="matrimonial-form-container">
      <header className="matrimonial-header">MATRIMONIAL REGISTRATION FORM</header>
      <form onSubmit={handleSubmit(onSubmit)} className="matrimonial-form">
        <div className="personal-details">
          <p className="details-title">Personal Details</p>
          <div class="flex-container">
            <div className="flex-item-left">
              <label htmlFor="firstName"  className="matrimonial-label">
                First Name <span>*</span>
              </label>
              <input className="matrimonial-form-input"
                type="text"
                id="firstName"
                {...register("firstName", {
                  required: true,
                  maxLength: 15, // Setting maximum character limit
                })}
              />
              {errors.firstName && errors.firstName.type === "required" && (
                <p className="error-message">First name is required.</p>
              )}
              {errors.firstName && errors.firstName.type === "maxLength" && (
                <p className="error-message">Maximum 15 characters allowed.</p>
              )}
            </div>

            <div className="flex-item-center">
              <label htmlFor="" className="matrimonial-label">
                Last Name <span>*</span>
              </label>
              <input className="matrimonial-form-input"
                type="text"
                {...register("lastName", { required: true, maxLength: 15 })}
              />
              {errors.lastName?.type === "required" && (
                <p className="error-message">Last name is required.</p>
              )}
              {errors.lastName?.type === "maxLength" && (
                <p className="error-message">
                  Last name cannot exceed 15 characters.
                </p>
              )}
            </div>

            <div class="flex-item-right">
              <label htmlFor="" className="matrimonial-label">Date of Birth</label>
              <input className="matrimonial-form-input" type="date" {...register("dob", { required: true })} />
              {errors.dob && (
                <p className="error-message">Date Of birth is required.</p>
              )}
            </div>


            <div class="flex-item-left">
              <label htmlFor="" className="matrimonial-label">Age</label>
              <input className="matrimonial-form-input" type="number" {...register("age", { required: true })} />
              {errors.age && <p className="error-message">Age is required.</p>}
            </div>


           <div className="flex-item-center">
        <label htmlFor="" className="matrimonial-label">
          Email Address <span>*</span>
        </label>
        <input className="matrimonial-form-input"
          type="email"
          {...register("email", {
            required: "Email is required.",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address format."
            }
          })}
        />
        {errors.email && (
          <p className="error-message">{errors.email.message}</p>
        )}
      </div>
            <div class="flex-item-right">
              <label htmlFor="" className="matrimonial-label">
                Education <span>*</span>
              </label>
              <input className="matrimonial-form-input"
                type="text"
                {...register("education", { required: true })}
              />
              {errors.education && (
                <p className="error-message">Education is required.</p>
              )}
            </div>
            <div className="flex-item-left">
        <label htmlFor="" className="matrimonial-label">Mobile Number</label>
        <input className="matrimonial-form-input"
          type="tel"
          {...register("mobile", {
            required: "Mobile Number is required.",
            pattern: {
              value: /^\d{10}$/,
              message: "Invalid mobile number format. Please enter a 10-digit number."
            }
          })}
        />
        {errors.mobile && (
          <p className="error-message">{errors.mobile.message}</p>
        )}
      </div>

            <div class="flex-item-right">
              <label htmlFor="" className="matrimonial-label">Gender</label>
              <select {...register("gender", { required: true })} className="matrimonial-select-input">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && (
                <p className="error-message">Date Of birth is required.</p>
              )}
            </div>

            <div class="flex-item-center">
              <label htmlFor="" className="matrimonial-label">
                Occupation <span>*</span>
              </label>
              <input className="matrimonial-form-input"
                type="text"
                {...register("occupation", { required: true })}
              />
              {errors.occupation && (
                <p className="error-message">Occupation is required.</p>
              )}
            </div>
          </div>
        </div>
        <div className="astro-details">
          <p className="details-title">Astrological Details</p>
          <div class="flex-container">
            <div class="flex-item-left">
              <label htmlFor="" className="matrimonial-label">
                Raashi/Moon Sign <span>*</span>
              </label>
              <input className="matrimonial-form-input" type="text" {...register("rashi", { required: true })} />
              {errors.rashi && (
                <p className="error-message">Raashi/Moon Sign is required.</p>
              )}
            </div>
            <div class="flex-item-center">
              <label htmlFor="" className="matrimonial-label">
                Dosham/Mangalik <span>*</span>
              </label>
              <input className="matrimonial-form-input" type="text" {...register("dosham", { required: true })} />
              {errors.dosham && (
                <p className="error-message">Dosham/Mangalik is required.</p>
              )}
            </div>
            <div class="flex-item-right">
              <label htmlFor="" className="matrimonial-label">Eating Habit <span>*</span></label>
              <input className="matrimonial-form-input" type="text" {...register("eating", { required: true })} />
              {errors.eating && (
                <p className="error-message">Eating Habit is required.</p>
              )}
            </div>
            <div class="flex-item-left">
              <label htmlFor="" className="matrimonial-label">Smoking Habit <span>*</span></label>
              <input className="matrimonial-form-input" type="text" {...register("smoking", { required: true })} />
              {errors.smoking && (
                <p className="error-message">Smoking Habit is required.</p>
              )}
            </div>
            <div class="flex-item-center">
              <label htmlFor="" className="matrimonial-label">
                Drinking <span>*</span>
              </label>
              <input className="matrimonial-form-input"
                type="text"
                {...register("drinking", { required: true })}
              />
              {errors.drinking && (
                <p className="error-message">Drinking is required.</p>
              )}
            </div>
            <div class="flex-item-right">
              <label htmlFor="" className="matrimonial-label">
                Family Type <span>*</span>
              </label>
              <input className="matrimonial-form-input" type="text" {...register("family", { required: true })} />
              {errors.family && (
                <p className="error-message">Family Type is required.</p>
              )}
            </div>
            <div class="flex-item-left">
              <label htmlFor="" className="matrimonial-label">Your Family Value <span>*</span> </label>
              <input className="matrimonial-form-input" type="text" {...register("value", { required: true })} />
              {errors.value && (
                <p className="error-message">Your Family Value is required.</p>
              )}
            </div>

            <div class="flex-item-right">
              <label htmlFor="" className="matrimonial-label">Your Family Status <span>*</span></label>
              <input className="matrimonial-form-input"
                type="text"
                {...register("familyStatus", { required: true })}
              />

              {errors.familyStatus && (
                <p className="error-message">Family Status is required.</p>
              )}
            </div>

            <div class="flex-item-center">
              <label htmlFor="" className="matrimonial-label">
                Height <span>*</span>
              </label>
              <input className="matrimonial-form-input" type="text" {...register("height", { required: true })} />
              {errors.height && (
                <p className="error-message">Height is required.</p>
              )}
            </div>

            <div class="flex-item-left">
              <label htmlFor="" className="matrimonial-label">
                Weight <span>*</span>
              </label>
              <input className="matrimonial-form-input" type="text" {...register("Weight", { required: true })} />
              {errors.Weight && (
                <p className="error-message">Weight is required.</p>
              )}
            </div>

            <div class="flex-item-right">
              <label htmlFor="" className="matrimonial-label">
                Country <span>*</span>
              </label>
              <input className="matrimonial-form-input" type="text" {...register("Country", { required: true })} />
              {errors.Country && (
                <p className="error-message">Country is required.</p>
              )}
            </div>

            <div class="flex-item-center">
              <label htmlFor="" className="matrimonial-label">
                State <span>*</span>
              </label>
              <input className="matrimonial-form-input" type="text" {...register("State", { required: true })} />
              {errors.State && (
                <p className="error-message">State is required.</p>
              )}
            </div>

            <div class="flex-item-left">
              <label htmlFor="" className="matrimonial-label">
                About Me <span>*</span>
              </label>
              <input className="matrimonial-form-input" type="text" {...register("AboutMe", { required: true })} />
              {errors.AboutMe && (
                <p className="error-message">About Me is required.</p>
              )}
            </div>

            <div class="flex-item-right">
              <label htmlFor="" className="matrimonial-label">
                Relegion <span>*</span>
              </label>
              <input className="matrimonial-form-input"
                type="text"
                {...register("Relegion", { required: true })}
              />
              {errors.Relegion && (
                <p className="error-message">Relegion is required.</p>
              )}
            </div>

            <div class="flex-item-center">
              <label htmlFor="">
                Caste <span>*</span>
              </label>
              <input className="matrimonial-form-input" type="text" {...register("Caste", { required: true })} />
              {errors.Caste && (
                <p className="error-message">Caste is required.</p>
              )}
            </div>

            <div class="flex-item-left">
              <label htmlFor="">
                Gotra(m) <span>*</span>
              </label>
              <input className="matrimonial-form-input" type="text" {...register("Gotra", { required: true })} />
              {errors.Gotra && (
                <p className="error-message">Gotra(m) is required.</p>
              )}
            </div>

            <div class="flex-item-right">
              <label htmlFor="" className="matrimonial-label">Mother Tongue</label>
              <input className="matrimonial-form-input"
                type="text"
                // {...register("MotherTongue", { required: true })}
              />
              {/* {errors.MotherTongue && (
                <p className="error-message">Mother Tongue is required.</p>
              )} */}
            </div>

            <div class="flex-item-center">
              <label htmlFor="">
                Horoscope Match
              </label>
              <input className="matrimonial-form-input"
                type="text"
                // {...register("HoroscopeMatch", { required: true })}
              />
              {/* {errors.HoroscopeMatch && (
                <p className="error-message">Horoscope Match is required.</p>
              )} */}
            </div>

            <div class="flex-item-left">
              <label htmlFor="">Star</label>
              <input className="matrimonial-form-input" type="text"
              //  {...register("Star", { required: true })}
                />
              {/* {errors.Star && (
                <p className="error-message">Star is required.</p>
              )} */}
            </div>

            <div class="flex-item-right">
              <label htmlFor="">
                Expectation <span>*</span>
              </label>
              <input className="matrimonial-form-input"
                type="text"
                {...register("Expectation", { required: true })}
              />
              {errors.Expectation && (
                <p className="error-message">Expectation is required.</p>
              )}
            </div>

            <div class="flex-item-center">
              <label htmlFor="">
                Annual Income <span>*</span>
              </label>
              <input className="matrimonial-form-input"
                type="text"
                {...register("AnnualIncome", { required: true })}
              />
              {errors.AnnualIncome && (
                <p className="error-message">Annual Income is required.</p>
              )}
            </div>

            <div class="flex-item-left">
              <label htmlFor="">
                Marital Status <span>*</span>
              </label>
              <input className="matrimonial-form-input"
                type="text"
                {...register("MaritalStatus", { required: true })}
              />
              {errors.MaritalStatus && (
                <p className="error-message">Marital Status is required.</p>
              )}
            </div>

            <div class="flex-item-right">
              <label htmlFor="" className="matrimonial-label">
                Citizen <span>*</span>
              </label>
              <input className="matrimonial-form-input" type="text" {...register("Citizen", { required: true })} />
              {errors.Citizen && (
                <p className="error-message">Citizen is required.</p>
              )}
            </div>

            <div class="flex-item-center">
              <button className="submit-button">Submit</button>
            </div>
          </div>
        </div>
      </form>

    </div>
  );
};

export default MatrimonialForm;
