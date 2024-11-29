import React from 'react'
import "../features/feature.css"
import Contenta from './Contenta'
import Contentb from './Contentb'
const Features = () => {
  return (
    <div className='main-feature-sec'>
      <div className="inner-main-feature-sec">

      <h4>Features</h4>
       <div className="feature-text-class">
          <span >Analytics that feels like it's from the future</span>
        </div>
        <div className="feature-text-lower-class">
          <span id="content-text-lower-class-text">
            Powerful, self-serve product and growth analytics to help you convert, engage,
            <br /> 
           and retain more users. Trusted by over 4,000 startups.
          </span>
        </div>
       

       {/**------------------------------------------------------------ */}

       <div className="feature-content-options">
          <div className="feature-content-options-a">

               <Contenta/>
          </div>
          <div className="feature-content-options-b">
            <Contentb/>
          </div>
       </div>
      </div>
    </div>
  )
}

export default Features
