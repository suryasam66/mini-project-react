import React from "react";
import "../features/feature.css";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { FaSteamSquare } from "react-icons/fa";
import { HiOutlineInboxArrowDown } from "react-icons/hi2";

const Contenta = () => {
  return (
    <div className="main-featurea-sec">

      <div className="content-a-box">
       
          <HiOutlineInboxArrowDown id="content-box-icon" /> <br />
           <span id="text">Share team inboxes</span> <br /> <br />
           <span id="description">
             Whether you have a team of 2 or 200, our shared <br />
              team inboxes keep everyone on the same page <br />
              and in the loop.
           </span>
      </div>
      <div className="content-b-box">
        
          <AiOutlineThunderbolt id="content-box-icon" /> <br /> 
          <span id="text">Deliver instant answers</span> <br /> <br/>
          <span id="description">
            All-in-one customer service platform that helps <br />
            you balance everything your customers need to be <br />
            happy.
          </span>
      </div>
      <div className="content-c-box">
       
          <FaSteamSquare id="content-box-icon" /> <br />
          <span id="text">Manage your team with reports</span><br /> <br />
          <span id="description">
            Measure what matters with Untitled's easy-to-use <br />
            reports. You can filter, export, and drilldown on the <br />
            data in a couple clicks.
          </span>
        
      </div>
    </div>
  );
};

export default Contenta;
