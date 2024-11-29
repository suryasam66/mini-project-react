import React from "react";
import "./Nav.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import photo from "../assets/user.png"

const Nav = () => {
  return (
    <div className="main-nav">
      <div className="logo-class">
         <div className="logo-design">
          
           <div className="inner-logo-circle"></div>
          
         </div>

         <div className="logo-name">
          <a href="/" id="name-logo">ZYSK</a>
         </div>
      </div>

      <div className="nav-options-class">
        <ul>
          <a href=""><li>Home</li></a>
          <a href=""><li>Products<RiArrowDropDownLine /></li></a>
          <a href=""><li>Resources<RiArrowDropDownLine /></li></a>
          <a href=""><li>Pricing</li></a>
          
          
          
        </ul>
      </div>
      <div className="nav-user-class">
        <img src={photo} alt="user" id="user-img"/>
      </div>
    </div>
  );
};

export default Nav;
