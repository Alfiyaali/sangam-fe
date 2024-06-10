import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import Header from './shared/components/Header/Header'
// import Navigation from './shared/components/Navigation/Navigation';
// import Footer from './shared/components/Footer/Footer';
import Home from './app/modules/home/pages/Home'; 
import About from './app/modules/about/pages/About';
import Services from './app/modules/service/pages/Service';
import Stories from './app/modules/stories/pages/Stories';
import Career from './app/modules/career/pages/Career'
import Contact from './app/modules/contact/pages/Contact';
// import MatrimonyService from './app/modules/MatrimonyService/MatrimonyService';
// import FindSomeone from './app/modules/FindSomeone/FindSomeone';
// import SearchMatrimonial from './shared/components/Search/SearchMatrimonial';
// import MainComponent from './shared/components/Main/MainComponent';
// import GetStart from './shared/components/Main/GetStart/GetStart';
import LoginSection from './app/modules/login/pages/Login';
import Profile from './app/modules/profile/pages/profile';
import StoryDetail from './app/modules/stories/pages/StoryDetail';
import About2 from './app/modules/about/pages/About2';
import Terms from './app/modules/Terms/Pages/Terms';
import './App.css';
import Privacy from './app/modules/privacy/pages/Privacy';
import Online from './app/modules/privacy/pages/Online';
import Missuse from './app/modules/Missuse/Pages/Missuse';
import Header from './shared/components/Header/HeaderContent';
import CustomerSupport from './app/modules/customer/pages/CustomerSupport';
import SignupForm from "./app/modules/register/Register";
import SerchPartner from "./app/modules/search/Search";
import SearchResult from "./app/modules/search/searchresult/Searchresult"
import MatrimonialForm from './shared/MatrimonialForm/MatrimonialForm';

const App = () => (

  <Router>
    <div className="app">
   
    
      <div className="content">
        <Routes>
       <Route path='/register' element={<SignupForm />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about2" element={<About />} />
          <Route path="/about" element={<About2 />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/services" element={<Services />} />
          <Route path="/story" element={<Stories />} />
          <Route path="/story/:id" element={<StoryDetail />} />
          <Route path="/career" element={<Career />} />
          <Route path="/online" element={<Online />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginSection />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/report" element={<Missuse />} />
          <Route path="/customer-support" element={<CustomerSupport />} />
          <Route path="/search" element={<SerchPartner />} />
          <Route path="/search/search-result" element={<SearchResult />} />
          <Route path="/form" element={<MatrimonialForm />} />
        
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </div>
      
    </div>
  </Router>
);

export default App;
