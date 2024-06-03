import React from 'react';
import './SearchMatrimonial.css';

const SearchMatrimonial = () => {
  return (
    <section className="search-matrimonial">
      <div className="container">
        <div className="heading">
          <p>Browse Matrimonial Profiles by</p>
        </div>
        <div className="cards-container">
          <div className="card">
            <p className='c-head'>By Mother Tongue</p>
            {/* <div className="divider"></div> */}
            <p>
              Hindi | Marathi | Punjabi | Tamil | Telugu | Bengali | Gujarati | Urdu | Kannada | Odia | Malayalam | Marwari | Sindhi | English | Assamese | Bhojpuri | Konkani | Rajasthani | Garhwali | Maithili | Haryanavi | Tulu
            </p>
          </div>
          <div className="card">
            <p className='c-head'>City</p>
            {/* <div className="divider"></div> */}
            <p>
            Mumbai | Delhi | Bengaluru |Pune | Hyderabad |Kolkata | Chennai |Lucknow | Ahmedabad | Nagpur |Jaipur | Patna | Kanpur | Noida |Indore | Surat | Gurgaon |Ghaziabad | Ludhiana | Bhopal |
            </p>
          </div>
          <div className="card">
            <p className='c-head'>Community</p>
            {/* <div className="divider"></div> */}
            <p>
            Sunni | Rajput  | Brahmin | Maratha | Yadav | Jat | Kayastha | Agarwal |Baniya |Kshatriya | Arora | Khatri |Jatav | Kashyap | Thakur |Gupta |Scheduled Caste(SC) | Kurmi |Lingayat | Teli | Shwetamber |Vishwakarma | Kunbi | Hanafi |Vanniyar | Kushwaha | Gursikh |Reddy | Digambar  | Patel | Adi Dravida | Catholic |
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchMatrimonial;
