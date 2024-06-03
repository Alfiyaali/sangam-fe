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
import './App.css';

const App = () => (
  <Router>
    <div className="app">
    
    
      <div className="content">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about2" element={<About2 />} />

          <Route path="/services" element={<Services />} />
          <Route path="/story" element={<Stories />} />
          <Route path="/story/:id" element={<StoryDetail />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginSection />} />
          <Route path="/profile" element={<Profile />} />
          {/* Add a default route to redirect to home */}
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </div>
      
      {/* <Footer / */}
    </div>
  </Router>
);

export default App;
