import React from 'react';
import FindSomeone from '../../FindSomeone/FindSomeone';
import MatrimonyService from '../../MatrimonyService/MatrimonyService';
import GetStart from '../../../../shared/components/Main/GetStart/GetStart';
import SearchMatrimonial from '../../../../shared/components/Search/SearchMatrimonial';
import MainComponent from '../../../../shared/components/Main/MainComponent';
import Footer from '../../../../shared/components/Footer/Footer';
import Header from '../../../../shared/components/Header/Header';

const Home = () => (
 <>
<Header />
 <FindSomeone/>
 <MatrimonyService/>
 <GetStart/>
 <SearchMatrimonial/>
 <MainComponent/>
 <Footer/>
 

 </>
);

export default Home;
