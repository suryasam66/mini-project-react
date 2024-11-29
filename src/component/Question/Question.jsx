import React from 'react'
import "../Question/Question.css"
import photo from "../../assets/user.png";

const Question = () => {
  return (
    <div className='client-main-box'> 
    <div className="nav-user-class">
        <img src={photo} alt="user" id="user-img" />
       
      </div>
       
                   <h1 id="q-h1">Still have questions? </h1>
       <span id="help">Can't find the answer you're looking for? Please chat to our friendly team</span> 
       
       <div className="button-div-b">
       <button  id='aso'> Get in touch</button>
       </div>
      
    </div>
  )
}

export default Question
