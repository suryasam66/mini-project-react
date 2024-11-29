import React from 'react'
import "./Website.css";
import Nav from './component/Nav';
import Hero from './component/Hero';
import Companysec from './component/Companysec/Companysec';
const Website = () => {
  return (
    <div className='main-website-page'>
      <Nav/>
      <Hero/>
      <Companysec/>
    </div>
  )
}

export default Website
