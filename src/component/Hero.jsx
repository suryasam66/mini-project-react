import React from "react";
import "./Hero.css";
import { GoArrowRight } from "react-icons/go";
import { IoPlayCircleOutline } from "react-icons/io5";
import photo2 from "../assets/photo2.png"

const Hero = () => {
  return (
    <div className="hero-main-content-box">
      <div className="hero-main-sec">
        <div className="button-class">
          <div className="inner-button-class-1">
            {" "}
            <h4 id="button-id">New Feature</h4>
          </div>
          <div className="inner-button-class-2">
            <span id="span-id">
              Check out the Team Dashboard
              <GoArrowRight id="react-icon-span" />
            </span>
          </div>
        </div>
        <br />
        <div className="content-text-class">
          <span>Beautiful analytics to grow smarter</span>
        </div>
        <div className="content-text-lower-class">
          <span id="content-text-lower-class-text">
            Powerful, self-serve product and growth analytics to help you convert, engage,
            <br /> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp; and retain more users. Trusted by over 4,000 startups.
          </span>
        </div>
        <div className="button-class-below-text">
             <button id="demo-button"><IoPlayCircleOutline id="demo-icon"/>&nbsp;&nbsp;Demo</button>
             <button id="signup-button">Signup</button>
        </div>
       
        <div className="photo-content-dashboard">
             <img src={photo2} alt="dashboard-photo-content" id="dashboard-photo-content"/> 
        </div>
      </div>

      
    </div>
  );
};

export default Hero;
