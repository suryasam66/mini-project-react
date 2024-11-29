import React from 'react'
import "./Website.css";
import Nav from './component/Nav';
import Hero from './component/Hero';
import Companysec from './component/Companysec/Companysec';
import Features from './component/features/Features';
import Client from './component/client/Client';
const Website = () => {
  return (
    <div className='main-website-page'>
      <Nav/>
      <Hero/> <br />
      <Companysec/> <br /> <br />
      <Features/> 
      <Client/>
    </div>
  )
}

export default Website
