import React from 'react'
import "../client/client.css"
import photo from "../../assets/user.png"
const Client = () => {
  return (
    <div className='client-main-box-q'> 
        <span id="client-span">Sisyphus</span>
       <h1 id="client-h1">We've been using ZISK to kick start every new <br />
       project and can't imagine working without it.
       </h1>
       <div className="nav-user-class">
        <img src={photo} alt="user" id="user-img" />

        

      </div>
    </div>
  )
}

export default Client
