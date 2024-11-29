import React from 'react'
import "../featureb/featureb.css"
import photo1 from "../../assets/p1.png"
import Contenta from '../features/Contenta'

const Bfeature = () => {
  return (
    <div className='Bfeature-main-box'>
        <br />
       
         <div className="Bfeature-sub-box">
         <button id="feature-b">feature</button>
         
        <h1 id= "b-f">Cutting edge features for advanced analytics</h1>
        <span id= "c-f">Powerful, self-serve product and growth analytics to help you convert, engage, </span> <br />
     
        <span id= "d-f">and retain more users. Trusted by over 4,000 startups</span>
           <br />
           <div className="image-bfeature">
             <img src={photo1} alt="" />
           </div>
           <br />
           <div className="content-fet">
                 <Contenta/>
           </div>
         </div>
        </div>
  )
}

export default Bfeature
