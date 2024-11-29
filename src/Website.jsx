import React from 'react'
import "./Website.css";
import Nav from './component/Nav';
import Hero from './component/Hero';
import Companysec from './component/Companysec/Companysec';
import Features from './component/features/Features';
import Client from './component/client/Client';
import Bfeature from './component/featureb/Bfeature';
import Question from './component/Question/Question';
import Trial from './component/Trial/Trial';
import Footer from './component/Footer/Footer';
import Faq from './component/Faq/Faq';
const Website = () => {
  return (
    <div className='main-website-page'>
      <Nav/>
      <Hero/> <br />
      <Companysec/> <br /> <br />
      <Features/> 
      <Client/>
      <Bfeature/> <br /> <br /><br /> <br /><br /> <br />
      <Question/>
     
      <Faq/>
      <Trial/>
      <Footer/>
    </div>
  )
}

export default Website
