import React from 'react'
import "../features/feature.css"
import { RiCustomerService2Line } from "react-icons/ri";
import { VscTools } from "react-icons/vsc";
import { LuHeartHandshake } from "react-icons/lu";


const Contentb = () => {
  return (
    <div className='main-featureb-sec'>
       
      <div className="content-a-box">
       
       <RiCustomerService2Line  id="content-box-icon" /> <br />
        <span id="text">Connect with customers</span> <br /> <br />
        <span id="description">
          Whether you have a team of 2 or 200, our shared <br />
           team inboxes keep everyone on the same page <br />
           and in the loop.
        </span>
   </div>
   <div className="content-b-box">
     
       <VscTools id="content-box-icon" /> <br /> 
       <span id="text">Connect the tools you already use</span> <br /> <br/>
       <span id="description">
         All-in-one customer service platform that helps <br />
         you balance everything your customers need to be <br />
         happy.
       </span>
   </div>
   <div className="content-c-box">
    
       <LuHeartHandshake id="content-box-icon" /> <br />
       <span id="text">Our people make the differnce</span><br /> <br />
       <span id="description">
         Measure what matters with Untitled's easy-to-use <br />
         reports. You can filter, export, and drilldown on the <br />
         data in a couple clicks.
       </span>
     
   </div>
    </div>
  )
}

export default Contentb
