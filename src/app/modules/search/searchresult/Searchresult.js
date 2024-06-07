import React from 'react';
import "./Searchresult.css"
import Footer from "../../../../shared/components/Footer/Footer"
import HeaderContent from "../../../../shared/components/Header/HeaderContent"
import Image1 from '../../../../assets/images/female.jpg';

const SearchResult = () => {

  const data = [
    {
      user_id: "577324",
      guardian: "Profile created by Parent / Guardian Online few mins ago",
      img: Image1,
      age: "30, 5'2",
      religion: "Christianity",
      mother_tongue: "English",
      community: "Not Specified",
      location: "New York",
      education: "Bachelor's Degree",
      profession: "Software Engineer",
      description: "Hello, I'm glad you are interested in my daughter's profile. She is currently living in Gurgaon Division. With hard work and d... "
    },
    {
      user_id: "577324",
      guardian: "Profile created by Parent / Guardian Online few mins ago",
      img: Image1,
      age: "30, 5'2",
      religion: "Christianity",
      mother_tongue: "English",
      community: "Not Specified",
      location: "New York",
      education: "Bachelor's Degree",
      profession: "Software Engineer",
      description: "Hello, I'm glad you are interested in my daughter's profile. She is currently living in Gurgaon Division. With hard work and d... "
    },
    {
      user_id: "577324",
      guardian: "Profile created by Parent / Guardian Online few mins ago",
      img: Image1,
      age: "30, 5'2",
      religion: "Christianity",
      mother_tongue: "English",
      community: "Not Specified",
      location: "New York",
      education: "Bachelor's Degree",
      profession: "Software Engineer",
      description: "Hello, I'm glad you are interested in my daughter's profile. She is currently living in Gurgaon Division. With hard work and d... "
    }
  ]
  return (
    <>
      <HeaderContent />
      <section className='result-page-section'>
        <div className='container'>
          <div className='filter-div'>
            <h2 className='filter-title'>Refine Search</h2>
            <div className='filter-sub-div'>
              <label className='filter-main-label'>Recently joined</label>
              <div className='input-content-div'>
                <div>
                  <input type="radio" value="Within a day" className='filter-input' />
                  <label htmlFor="withinDay">Within a day</label>
                </div>
                <div>
                  <input type="radio" value="Within a week" className='filter-input' />
                  <label htmlFor="withinWeek">Within a week</label>
                </div>
                <div>
                  <input type="radio" value="Within a month" className='filter-input' />
                  <label htmlFor="withinMonth">Within a month</label>
                </div>
              </div>

            </div>
            <div>
              <label className='filter-main-label'>Active members</label>
              <div className='input-content-div'>
                <div>
                  <input type="radio" value="Within a day" className='filter-input' />
                  <label htmlFor="withinDay">Within a day</label>
                </div>
                <div>
                  <input type="radio" value="Within a week" className='filter-input' />
                  <label htmlFor="withinWeek">Within a week</label>
                </div>
                <div>
                  <input type="radio" value="Within a month" className='filter-input' />
                  <label htmlFor="withinMonth">Within a month</label>
                </div>
              </div>
            </div>

          </div>
          <div className='profile-boxes'>
            <h2 className='search-title'>Your Results</h2>
            {data.map((person, index) => (

              <div key={index} className='main-box-profile' >
                <p className='userId-title'>{person.user_id}</p>
                <p className='guardian-name'>{person.guardian}</p>
                <div className='sub-profile-box'>
                  <div className='profile-img'>
                    <img src={person.img} alt="" />
                  </div>
                  <div>
                    <div className='profile-content-div'>
                      <div className='profile-content'>
                        <p>Age/Height: {person.age}</p>
                        <p>Religion: {person.religion}</p>
                        <p>Mother Tongue: {person.mother_tongue}</p>
                        <p>Community: {person.community}</p>
                        <p>Location: {person.location}</p>
                        <p>Education: {person.education}</p>
                        <p>Profession: {person.profession}</p>
                      </div>
                      <div className='profile-selection'>
                        <h3>Like her Profile</h3>
                        <button className='interested-btn'>Yes, I'm interested</button>
                        <div className='maybe-and-no-btn'>
                          <button className='maybe-btn'>Maybe</button>
                          <button className='no-btn'>No</button>
                        </div>
                      </div>

                    </div>
                    <p>{person.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section >
      <Footer />
    </>
  );

}

export default SearchResult;
